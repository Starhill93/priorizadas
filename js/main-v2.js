/* =====================================================================
   main.js — Réplica del PPT "Cartera Priorizada" (data-driven · 19 láminas)
   Navega carátulas de sección + fichas de proyecto desde window.PROJECTS.
   ===================================================================== */
(function () {
  "use strict";

  var P = window.PROJECTS;
  try {
    var localProj = localStorage.getItem('priorizadas_projects');
    if (localProj) {
      P = JSON.parse(localProj);
    }
  } catch (e) {
    console.error("Error al cargar proyectos de localStorage", e);
  }
  var MESES = window.MESES, MESES_L = window.MESES_LARGOS;
  if (!P || !P.length || !window.Chart) return;

  var FONT = "'Public Sans', system-ui, sans-serif";
  Chart.defaults.font.family = FONT;
  Chart.defaults.color = "#444650";

  var current = 0, mainChart = null, bigChart = null, openMenu = null;

  function $(id) { return document.getElementById(id); }
  function setText(id, v) { var e = $(id); if (e) e.textContent = v; }
  // re-dispara una animación CSS quitando/reañadiendo la clase (forzando reflow)
  function replay(el, cls) { if (!el) return; el.classList.remove(cls); void el.offsetWidth; el.classList.add(cls); }

  // ---------- gráfico ----------
  function grad(ctx, c1, c2) {
    var area = ctx.chart.chartArea;
    if (!area) return c1;
    var g = ctx.chart.ctx.createLinearGradient(0, area.bottom, 0, area.top);
    g.addColorStop(0, c1); g.addColorStop(1, c2);
    return g;
  }

  function buildConfig(proj) {
    var c = proj.chart;
    return {
      data: {
        labels: MESES,
        datasets: [
          {
            type: "bar", label: "Ejec. Proy. 2026", data: c.ejecProy,
            backgroundColor: "rgba(166,172,184,.42)", borderColor: "#9097a3", borderWidth: 1.2,
            borderRadius: 3, categoryPercentage: 0.7, barPercentage: 0.86, order: 3, pointStyle: "circle"
          },
          {
            type: "bar", label: "Ejecución 2026", data: c.ejecucion,
            backgroundColor: function (x) { return grad(x, "#7fb06e", "#aed79a"); },
            borderColor: "#6fa55f", borderWidth: 0, borderRadius: 3,
            categoryPercentage: 0.7, barPercentage: 0.86, order: 2, pointStyle: "circle"
          },
          {
            type: "line", label: "Meta MEF 2026", data: c.metaMEF,
            borderColor: "#bb0027", backgroundColor: "#bb0027", borderWidth: 3,
            pointRadius: 4.5, pointHoverRadius: 7, pointBackgroundColor: "#bb0027",
            pointBorderColor: "#fff", pointBorderWidth: 2, tension: 0.3, spanGaps: false,
            order: 1, pointStyle: "circle"
          }
        ]
      },
      options: {
        responsive: true, maintainAspectRatio: false,
        interaction: { mode: "index", intersect: false },
        layout: { padding: { top: 6, right: 8, left: 2 } },
        animation: {
          duration: 1100, easing: "easeOutQuart",
          delay: function (ctx) { return (ctx.type === "data" && ctx.mode === "default") ? ctx.dataIndex * 45 : 0; }
        },
        scales: {
          y: {
            beginAtZero: true, suggestedMax: c.max || 13,
            title: { display: true, text: "Millones de soles", color: "#6b7280", font: { size: 13, weight: "600" } },
            grid: { color: "#eef0f3", drawTicks: false }, border: { display: false },
            ticks: { color: "#6b7280", font: { size: 12 }, padding: 8 }
          },
          x: {
            grid: { display: false }, border: { color: "#d1d5db" },
            ticks: { color: "#4b5563", font: { size: 12, weight: "600" } }
          }
        },
        plugins: {
          legend: {
            position: "bottom",
            labels: { usePointStyle: true, pointStyle: "circle", boxWidth: 10, boxHeight: 10, padding: 18, color: "#374151", font: { size: 13, weight: "700" } }
          },
          tooltip: {
            backgroundColor: "#002b69", padding: 12, cornerRadius: 6, usePointStyle: true,
            titleColor: "#fff", titleFont: { size: 13, weight: "700" }, bodyColor: "#e6edf8", bodyFont: { size: 13 }, boxPadding: 6,
            filter: function (i) { return i.parsed.y != null; },
            callbacks: {
              title: function (items) { return items.length ? (MESES_L[items[0].dataIndex] + " 2026") : ""; },
              label: function (x) { return x.parsed.y == null ? null : "  " + x.dataset.label + ": S/ " + x.parsed.y.toFixed(1) + " MM"; }
            }
          }
        }
      }
    };
  }

  // ---------- referencias de vistas ----------
  var frame = document.querySelector(".frame");
  var projectView = $("projectView"), coverView = $("coverView"), menuView = $("menuView");

  // ---------- render de una carátula de sección ----------
  function renderCover(p) {
    if (mainChart) { mainChart.destroy(); mainChart = null; }
    if (bigChart) { bigChart.destroy(); bigChart = null; }
    projectView.hidden = true;
    coverView.hidden = false;
    if (frame) frame.classList.add("is-cover");
    setText("c-acro", p.acro);
    setText("c-name", p.name);
  }

  // ---------- render de una ficha de proyecto ----------
  function renderProject(p) {
    coverView.hidden = true;
    projectView.hidden = false;
    if (frame) frame.classList.remove("is-cover");
    replay(projectView, "anim");

    // cabecera
    setText("r-title", p.title);
    setText("r-deadline", p.deadline);
    setText("r-status", p.status);
    setText("r-chip", p.status === "En Ejecución" ? "Activo" : "Por Etapas");
    setText("r-statussub", "Sistema de " + p.statusType);
    setText("r-cui", p.cui);

    // financiero
    setText("r-costo", p.fin.costo); setText("r-devengado", p.fin.devengado); setText("r-avance", p.fin.avance);
    setText("r-pim", p.fin.pim); setText("r-cert", p.fin.certificado); setText("r-dev26", p.fin.devengado26);
    setText("r-pimej", p.fin.pimEjecutar); setText("r-ro", p.fin.ffRO); setText("r-rooc", p.fin.ffROOC || "—");

    // estado: fechas + avance
    setText("r-finicio", p.fechaInicio); setText("r-ffin", p.fechaFin);
    setText("r-prog", p.avProg); setText("r-ejec", p.avEjec);

    // notas
    var ul = $("r-notes"); ul.innerHTML = "";
    p.notes.forEach(function (n) { var li = document.createElement("li"); li.textContent = n; ul.appendChild(li); });

    // alerta (oculta si null)
    var alert = $("r-alert");
    if (p.alert) { alert.style.display = ""; $("r-alert-text").textContent = p.alert.text; }
    else { alert.style.display = "none"; }

    // hitos (oculta la tarjeta si no hay)
    var hcard = document.querySelector(".col-right .hitos");
    var hbox = $("r-hitos"); hbox.innerHTML = "";
    if (p.hitos && p.hitos.length) {
      if (hcard) hcard.style.display = "";
      p.hitos.forEach(function (h) {
        var d = document.createElement("div");
        d.className = "timeline";
        d.innerHTML = '<span class="dot"></span><span class="t-chip"></span><p class="t-title"></p>';
        d.querySelector(".t-chip").textContent = h.fecha;
        d.querySelector(".t-title").textContent = h.titulo;
        hbox.appendChild(d);
      });
    } else if (hcard) {
      hcard.style.display = "none";
    }

    // riesgo
    var rbox = $("r-riesgo"); rbox.innerHTML = "";
    if (p.riesgo.length === 1) {
      var pp = document.createElement("p"); pp.textContent = p.riesgo[0]; rbox.appendChild(pp);
    } else {
      var rl = document.createElement("ul"); rl.className = "risk-list";
      p.riesgo.forEach(function (r) { var li = document.createElement("li"); li.textContent = r; rl.appendChild(li); });
      rbox.appendChild(rl);
    }

    // gráfico
    if (mainChart) mainChart.destroy();
    mainChart = new Chart($("chart"), buildConfig(p));
    if (bigChart) { bigChart.destroy(); bigChart = null; }

    fitSidebar();
  }

  // ---------- render (despacha según tipo de lámina) ----------
  function render(i) {
    current = i;
    var p = P[i];
    menuView.hidden = true;
    if (frame) frame.classList.remove("is-menu");
    setText("pgNum", i + 1);
    if (p.type === "section") renderCover(p);
    else renderProject(p);
  }

  // ---------- navegación (cíclica) ----------
  function go(delta) { render((current + delta + P.length) % P.length); }

  function bind(id, delta) { var b = $(id); if (b) b.addEventListener("click", function () { go(delta); }); }
  bind("prevBtn", -1); bind("nextBtn", 1);   // flechas dentro del título (ficha)
  bind("pgPrev", -1); bind("pgNext", 1);     // paginador global

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") { go(-1); }
    else if (e.key === "ArrowRight") { go(1); }
  });

  // total de láminas en el paginador
  setText("pgTotal", P.length);

  // ---------- modal del gráfico ----------
  var modal = $("chartModal"), openBtn = $("chartExpand"), closeBtn = $("cmClose");
  function openModal() {
    if (P[current].type === "section") return;
    modal.hidden = false;
    if (!bigChart) bigChart = new Chart($("chartBig"), buildConfig(P[current]));
    else bigChart.resize();
  }
  function closeModal() { modal.hidden = true; }
  if (openBtn) openBtn.addEventListener("click", openModal);
  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  if (modal) modal.addEventListener("click", function (e) { if (e.target === modal) closeModal(); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape" && modal && !modal.hidden) closeModal(); });

  // ---------- página-menú de programas (estilo carátula) ----------
  (function buildMenu() {
    var triggers = document.querySelectorAll(".js-menu-trigger");
    var grid = $("menuProgs");
    if (!triggers.length || !grid) return;

    // agrupar las láminas por programa (cada "section" abre un grupo)
    var groups = [];
    P.forEach(function (p, i) {
      if (p.type === "section") {
        groups.push({ id: p.id, acro: p.acro, name: p.name, index: i, count: 0 });
      } else if (groups.length) {
        groups[groups.length - 1].count++;
      }
    });
    // rango de láminas que abarca cada programa (para resaltar el activo)
    groups.forEach(function (g, gi) {
      g.end = (gi + 1 < groups.length ? groups[gi + 1].index : P.length) - 1;
    });

    var GO_SVG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';

    // construir los botones de navegación a cada programa
    groups.forEach(function (g, gi) {
      var card = document.createElement("button");
      card.type = "button";
      card.className = "menu-prog";
      card.dataset.index = g.index;
      card.dataset.start = g.index;
      card.dataset.end = g.end;
      card.style.setProperty("--d", (0.12 + gi * 0.09).toFixed(2) + "s");
      card.title = g.name;
      card.innerHTML =
        '<span class="mp-acro"></span>' +
        '<span class="mp-name"></span>' +
        '<span class="mp-meta"><b></b> ' + (g.count === 1 ? "inversión" : "inversiones") + '</span>' +
        '<span class="mp-go">Ver programa ' + GO_SVG + '</span>';
      card.querySelector(".mp-acro").textContent = g.acro;
      card.querySelector(".mp-name").textContent = g.name;
      card.querySelector(".mp-meta b").textContent = g.count;
      grid.appendChild(card);
    });

    // resalta el programa al que pertenece la lámina actual
    function mark() {
      grid.querySelectorAll(".menu-prog").forEach(function (el) {
        var s = parseInt(el.dataset.start, 10), en = parseInt(el.dataset.end, 10);
        el.classList.toggle("is-active", current >= s && current <= en);
      });
    }

    // ir a la página-menú (sin alterar `current`, para poder volver)
    function showMenu() {
      if (mainChart) { mainChart.destroy(); mainChart = null; }
      if (bigChart) { bigChart.destroy(); bigChart = null; }
      projectView.hidden = true;
      coverView.hidden = true;
      menuView.hidden = false;
      if (frame) { frame.classList.add("is-cover"); frame.classList.add("is-menu"); }
      mark();
    }

    triggers.forEach(function (b) { b.addEventListener("click", showMenu); });
    openMenu = showMenu;   // expuesto para usar el menú como pantalla principal
    grid.addEventListener("click", function (e) {
      var t = e.target.closest("[data-index]");
      if (t) render(parseInt(t.dataset.index, 10));
    });
  })();

  // ---------- auto-ajuste del sidebar ----------
  function fitSidebar() {
    var col = document.querySelector(".col-right");
    if (!col || projectView.hidden) return;
    var MAX = 34, MIN = 8, STEP = 0.5, guard = 0, fs = MAX;
    col.style.fontSize = fs + "px";
    while (fs > MIN && col.scrollHeight > col.clientHeight + 1 && guard < 95) {
      fs -= STEP; col.style.fontSize = fs + "px"; guard++;
    }
  }
  var t;
  window.addEventListener("resize", function () { clearTimeout(t); t = setTimeout(fitSidebar, 60); });

  // ---------- arranque ----------
  function start() { (openMenu || function () { render(0); })(); requestAnimationFrame(fitSidebar); }
  if (document.fonts && document.fonts.ready) { document.fonts.ready.then(start); }
  else { start(); }
  window.addEventListener("load", function () { requestAnimationFrame(fitSidebar); });
})();
