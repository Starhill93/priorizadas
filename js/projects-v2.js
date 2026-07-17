/* =====================================================================
   projects.js — Cartera Priorizada (réplica del PPT "Cartera Priorizada")
   ===================================================================== */
window.MESES = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Set", "Oct", "Nov", "Dic"];
window.MESES_LARGOS = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Setiembre", "Octubre", "Noviembre", "Diciembre"];

window.PROJECTS = [

  /* ============================== PNSU ============================== */
  { type: "section", id: "pnsu", acro: "PNSU", name: "Programa Nacional de Saneamiento Urbano" },

  {
    id: "juliaca", tab: "Juliaca Puno", title: "Juliaca Puno — BID",
    status: "Por Etapas", statusType: "agua potable y alcantarillado", cui: "2331661",
    fin: {
      costo: "S/ 1,66.4 MM", devengado: "S/ 286.1 MM", avance: "17.2%",
      pim: "S/ 352.9 MM", certificado: "S/ 342.7 MM", devengado26: "S/ 213.1 MM",
      pimEjecutar: "S/ 139.8 MM", ffRO: "S/ 38.9 MM", ffROOC: "S/ 101.0 MM"
    },
    fechaInicio: "25/09/24", fechaFin: "13/02/30", avProg: "4.08", avEjec: "4.17",
    notes: [
      "ETAPA 1 → Costo: S/ 5.7 MM. Obra culminada el 31.12.25. Presenta observaciones de la EPS SEDA JULIACA.",
      "ETAPA 2 → Costo: S/ 125.4 MM. Obra en ejecución desde el 31.01.26.",
      "Avance físico → Programado: 4.08% - Ejecutado: 4.17% (Val. mayo)",
      "Jul.26: Se programó S/ 2.0 MM, correspondiente al pago de la Val. obra N° 03 (Abril 2026).",
      "ETAPA 3 → Costo: S/ 513.9 MM. Obra en ejecución desde el 04.05.26.",
      "ETAPA 4 → Costo: S/ 799.3 MM. Obra en proceso de LPI (el 25.06.26 se efectuó la presentación y apertura de propuestas).",
      "Contratación ingeniero supervisor FIDIC 4: En proceso de contratación (el 06.07.26 se efectuó la presentación de expresiones de interés).",
      "Contratación de la PMO: Inició las actividades el 08/09/25."
    ],
    alert: null,
    hitos: [
      { fecha: "31/07/26", titulo: "Etapa 1 — Aprobación de Expediente de intervención correctiva." },
      { fecha: "29/07/26", titulo: "Etapa 2 — Construcción de 30 km de Redes de Agua Potable." },
      { fecha: "17/07/26", titulo: "Etapa 3 — Colocación de primera piedra en la PTAP." },
      { fecha: "15/07/26", titulo: "Etapa 4 — Informe de Evaluación de propuestas técnicas/económicas." },
      { fecha: "16/07/26", titulo: "Ing. FIDIC 4 — Remisión al BID la lista corta para No Objeción. " }
    ],
    riesgo: [
      "ETAPA 1: Retraso en la transferencia a la ESP, por la subsanación de defectos o intervención correctiva.",
      "ETAPA 2: Posible conflicto social por superposición de área de intervención entre PIA y ampliación de aeropuerto.",
      "ETAPA 3: Posible demora en la autorización sanitaria de DIGESA, lo que retrasaria el inicio de la ejecución de la PTAP.",
      "ETAPA 4: De no cumplir la menor oferta económica con los DDL, la adjudicación podría retrasarse por la evaluación de la siguiente oferta."
    ],
    deadline: "20/12/2029",
    chart: {
      max: 110,
      ejecucion: [0.3, 0.4, 54.4, 133.8, 21.1, 2.8, 0.1, null, null, null, null, null],
      ejecProy: [null, null, null, null, null, null, 2.3, 2.6, 5.7, 15, 102.9, 11.4],
      metaMEF: [null, null, null, null, null, null, 2.3, 2.6, 5.7, 15, 102.9, 11.4]
    }
  },

  {
    id: "drenaje", tab: "Drenaje Pluvial Cusco", title: "Drenaje Pluvial Cusco — BID",
    status: "Por Etapas", statusType: "drenaje pluvial", cui: "2459017",
    fin: {
      costo: "S/ 357.8 MM", devengado: "S/ 140.1 MM", avance: "39.2%",
      pim: "S/ 96.9 MM", certificado: "S/ 45.2 MM", devengado26: "S/ 15.1 MM",
      pimEjecutar: "S/ 81.8 MM", ffRO: "S/ 3.8 MM", ffROOC: "S/ 78 MM"
    },
    fechaInicio: "30/06/20", fechaFin: "30/06/29", avProg: "71.72%", avEjec: "20.5%",
    notes: [
      "ETAPA 1: TANCARPATA - Obra culminada el 14.04.25",
      "En periodo de responsabilidad por defectos (En proceso de corrección de defectos de obra).",
      "ETAPA 2: CACHIMAYO - Obra en ejecución atrasada",
      "Avance físico → Programado: 71.72% - Ejecutado: 20.5% (al 20.06.26)",
      "27.04.26: Se ha notificado notarialmente el apercibimiento respectivo al Contratista.",
      "13.05.26: Medida cautelar aprobada por el Poder Judicial (7mo juzgado civil comercial de Lima) que suspende cualquier medida que la entidad pueda tomar asociada a la resolución del contrato.",
      "Jul.26: se devengó S/ 1.8 MM, correspondiente al pago de la Val. N° 06 de la Variación N° 01 del contrato (21.04 al 20.05 del 2026).",
      "ETAPA 3: SAPHY - Saldo del Exp. Téc. en procedimiento de selección",
      "19.06.26: BID otorgó no objeción al informe de comité de evaluación de ofertas técnicas."
    ],
    alert: null,
    hitos: [
      { fecha: "17/07/26", titulo: "Etapa 3 — Apertura de ofertas económicas." }
    ],
    riesgo: [
      "ETAPA 1: Retrasos en la corrección de defectos de parte del contratista, que podrían generar problemas sociales",
      "ETAPA 2: Retrasos en la ejecución de obra (de responsabilidad del contratista) que podría generar  incumplimiento de la ejecución de gastos 2026."
    ],
    deadline: "30.06.29",
    chart: {
      max: 9,
      ejecucion: [0, 1.1, 3.6, 1.9, 1.5, 5.3, 1.8, null, null, null, null, null],
      ejecProy: [null, null, null, null, null, null, 3.1, 3.6, 4.6, 6.5, 6.1, 8],
      metaMEF: [null, null, null, null, null, null, 3.1, 3.6, 4.6, 6.5, 6.1, 8.4]
    }
  },

  {
    id: "agua", tab: "Producción Agua Cusco", title: "Producción Agua Cusco — BM",
    status: "En Ejecución", statusType: "agua potable", cui: "2497598",
    fin: {
      costo: "S/ 300.6 MM", devengado: "S/ 151.6 MM", avance: "50.4%",
      pim: "S/ 66.7 MM", certificado: "S/ 66.6 MM", devengado26: "S/ 38.5 MM",
      pimEjecutar: "S/ 28.2 MM", ffRO: "S/ 28.2 MM", ffROOC: "S/ 0.0 MM"
    },
    fechaInicio: "28/06/24", fechaFin: "22/09/26", avProg: "88.0%", avEjec: "52.17%",
    notes: [
      "Se ejecutan 03 frentes de obra, con 37 frentes concluidos y uno paralizado por hallazgo arqueológico. Se han instalado 33.0 km de tubería de impulsión (90.4% de 36.5 km).",
      "13.02.26: Se firmó la Enmienda N°2, ampliación de plazo al 24.06.26.",
      "25.06.26: Se firmó la Enmienda N°3, ampliación de plazo al 22.09.26",
      "Jul.26: Se programó S/ 5.3 MM para el pago de la Valorización de obra N°23 (May 2026) y Valorización de Supervisión N° 22, otros."
    ],
    alert: { text: "Déficit presupuestal de S/ 34.8 MM para cubrir el pago total de valorizaciones." },
    hitos: [
      { fecha: "22/09/26", titulo: "Fecha de término contractual. Se prevé una ampliación de plazo" }
    ],
    riesgo: [
      "Los conflictos sociales en Piñipampa, servidumbres de paso y la presencia de restos arqueológicos podrían retrasar el término de obra."
    ],
    deadline: "22.12.25",
    chart: {
      max: 11,
      ejecucion: [7.6, 7, 5.6, 5.9, 6.3, 6, 0, null, null, null, null, null],
      ejecProy: [null, null, null, null, null, null, 5.6, 5.8, 10.8, 6.1, 0, 0],
      metaMEF: [null, null, null, null, null, null, 5.6, 5.8, 10.8, 7, 0, 0]
    }
  },

  {
    id: "tambopata", tab: "Drenaje Pluvial Tambopata", title: "Drenaje Pluvial Tambopata — BID",
    status: "Por Etapas", statusType: "drenaje pluvial", cui: "2519940",
    fin: {
      costo: "S/ 554.9 MM", devengado: "S/ 38.3 MM", avance: "6.9%",
      pim: "S/ 53.9 MM", certificado: "S/ 53.5 MM", devengado26: "S/ 2.1 MM",
      pimEjecutar: "S/ 51.7 MM", ffRO: "S/ 8.8 MM", ffROOC: "S/ 43.0 MM"
    },
    fechaInicio: "04/03/22", fechaFin: "04/03/27", avProg: "—", avEjec: "—",
    notes: [
      "ETAPA 1: Tambopata – 06 Exp. Téc. y 06 Obras – Diseño construcción",
      "06 Expedientes Técnicos en elaboración (avance: 63%), atrasado.",
      "Bloque I: 03 Exp. Téc. y 03 Obras: 10 Entregables → Inició: 07.06.24",
      "AGO26: Previsto culminar el 1er ET (Entreg. 3B observado. Avance 80%. En lev. obs.)",
      "SET-OCT26: Previsto culminar el 2do y 3er ET (Entregable 3B en lev. obs.)",
      "Bloque II: 03 Exp. Téc. y 03 Obras: 10 Entregables→ Inició: 17.07.24",
      "NOV-DIC26: Previsto culminar 4to, 5to y 6to ET. (Entregable 3B en lev. obs.)",
      "Supervisión de obra, en proceso de selección (en negociación). La adjudicación depende de la culminación del 1er ET.",
      "ETAPA 2: El Triunfo – 01 Exp. Téc. en elaboración: 10 Entregables.",
      "Entregables 1 al 5 aprobados (avance: 43.34%). Entregable N°6 en elaboración (atrasado)",
      "ETAPA 3: La Joya – 02 Exp. Téc. en elaboración: 12 entregables",
      "Entregables 1 y 2 aprobados (avance: 31%). Entregable N°3 (ET Joya sur) en revisión. Entregable 3A (ET Norte Alameda) en lev. de obs."
    ],
    alert: null,
    hitos: [
      { fecha: "Oct.26", titulo: "Etapa 1 — Oct.26 Inicio de obra del 1er ET-Bloque I" },
      { fecha: "Ago.26", titulo: "Etapa 2 — Aprobación del entregable 6 del ET" },
      { fecha: "Jul.26", titulo: "Etapa 3 — Aprobación del entregable 3 del ET Joya Sur" }
    ],
    riesgo: [
      "ETAPA 1 y 2: Retrasos en la elaboración de ET (responsabilidad del contratista), ponen en riesgo programación de ejecución.",
      "GENERAL: Para esta semana se ha programado iniciar la gestión de ampliación de plazo de desembolsos del contrato de préstamo hasta diciembre de 2030"
    ],
    deadline: "04.03.27",
    chart: {
      max: 23,
      ejecucion: [0, 0.1, 0.5, 1.1, 0.3, 0, 0, null, null, null, null, null],
      ejecProy: [null, null, null, null, null, null, 0.6, 0.3, 0.3, 10, 18.7, 22],
      metaMEF: [null, null, null, null, null, null, 0.6, 0.3, 0.3, 10, 18.7, 21.7]
    }
  },

  {
    id: "sullana", tab: "AA.HH. Sullana Piura", title: "AA.HH. Sullana Piura",
    status: "En Ejecución", statusType: "agua potable y alcantarillado", cui: "2309846",
    fin: {
      costo: "S/ 153.3 MM", devengado: "S/ 97.2 MM", avance: "63.4%",
      pim: "S/ 53.1 MM", certificado: "S/ 53.0 MM", devengado26: "S/ 19.6 MM",
      pimEjecutar: "S/ 33.6 MM", ffRO: "S/ 33.6 MM", ffROOC: "—"
    },
    fechaInicio: "20/02/25", fechaFin: "20/11/26", avProg: "63.7%", avEjec: "50.49%",
    notes: [
      "Se viene ejecutando las redes de agua potable, redes secundarias de alcantarillado, conexiones domiciliarias y reposición de pavimentos.",
      "La obra presenta retrasos por modificaciones contractuales, ejecución de otras obras en las zonas de intervención, demora en la obtención de permisos y licencias del MTC, y oposición de pobladores a las intervenciones del proyecto.",
      "Jul.26: Se programó S/ 3.8 MM para el pago de la Valorización de Obra N°17 (May 26), Prestaciones Adicionales y Valorización de Supervisión N° 16."
    ],
    alert: null,
    hitos: [
      { fecha: "20/11/26", titulo: "Culminación de la obra." }
    ],
    riesgo: [
      "Demoras en obtención de permisos y licencias; y problemas con los pobladores por intervenciones del proyecto."
    ],
    deadline: "08.09.26",
    chart: {
      max: 10,
      ejecucion: [3.8, 3.5, 2.4, 1.6, 5, 3.1, 0.3, null, null, null, null, null],
      ejecProy: [null, null, null, null, null, null, 3.6, 4.4, 4.5, 8.4, 6.6, 6.4],
      metaMEF: [null, null, null, null, null, null, 3.6, 4.4, 4.5, 8.4, 6.6, 6.8]
    }
  },

  {
    id: "zarumilla", tab: "Agua Zarumilla", title: "Agua Zarumilla — BID",
    status: "En Ejecución", statusType: "agua potable y alcantarillado", cui: "2561234",
    fin: {
      costo: "S/ 477.5 MM", devengado: "S/ 38.5 MM", avance: "8.1%",
      pim: "S/ 52.3 MM", certificado: "S/ 7 MM", devengado26: "S/ 3.8 MM",
      pimEjecutar: "S/ 48.5 MM", ffRO: "S/ 3.2 MM", ffROOC: "S/ 45.3 MM"
    },
    fechaInicio: "—", fechaFin: "—", avProg: "—", avEjec: "—",
    notes: [
      "-ETAPA 1: Obra culminada, en proceso de transferencia.",
      "ETAPA 2:  ET aprobado, mediante RD N° 034-2026-PNSU",
      "Para convocar la obra está condicionada a la validación del planteamiento técnico ajustado por parte del BID y a la garantía presupuestal para la Etapa 3. Dicho planteamiento incluye la reducción de metas de la Etapa 2 y fue remitido el 15.05.26; sin embargo, el BID solicitó mayor detalle. El 24.06.26, EPS Agua Tumbes remitió su informe a OTASS, quedando pendiente su validación y envío al PNSU para posterior remisión al BID.",
      "ETAPA 3:  ET en actos previos",
      "Se requiere disponibilidad presupuestal de + S/ 320 MM de contrapartida nacional, adicional a lo previsto en el contrato de préstamo, para viabilizar la licitación bajo modalidad Diseño y Construcción. El PNSU sostuvo reuniones con el VMCS y el BID, acordando que el BID evalúe el planteamiento técnico de intervención, que implica ejecutar en paralelo la 1ra sección de la Etapa 3 con la Etapa 2, lo que permitiría reducir la demanda presupuestal de corto plazo. La última versión, junto con la estrategia de la Etapa 2, fue remitida el 15.05.2026. Asimismo, la demanda adicional para los próximos años fue sustentada ante el MEF a inicios de julio de 2026."
    ],
    alert: null,
    hitos: [
      { fecha: "Ago.26", titulo: "Etapa 2 — Convocatoria de Obra (condicionada a la No Objeción del BID)." },
      { fecha: "15/08/26", titulo: "Etapa 3 — Nueva reunión tripartita (BID, MVCS y MEF) para definir priorización de inversiones, según el resultado de la Demanda adicional presentada al MEF." }
    ],
    riesgo: [
      "ETAPA 2: Retrasos en la convocatoria podrían afectar el cumplimiento de la proyección de gasto prevista para el 2026 y podría implicar ampliaciones de plazo futuras al C.P."
    ],
    deadline: "04.03.29",
    chart: {
      max: 3,
      ejecucion: [0.3, 0.9, 0.7, 0.8, 0.5, 0.5, 0.1, null, null, null, null, null],
      ejecProy: [null, null, null, null, null, null, 1.3, 0.9, 0.8, 0.8, 2.1, 2.6],
      metaMEF: [null, null, null, null, null, null, 1.3, 0.9, 0.8, 0.8, 2.1, 2.7]
    }
  },

  {
    id: "piura", tab: "Piura Castilla", title: "Piura Castilla",
    status: "En Ejecución", statusType: "agua potable", cui: "2302373",
    fin: {
      costo: "S/ 706.4 MM", devengado: "S/ 15.4 MM", avance: "2.2%",
      pim: "S/ 29.6 MM", certificado: "S/ 25.6 MM", devengado26: "S/ 0.1 MM",
      pimEjecutar: "S/ 29.5 MM", ffRO: "S/ 29.5 MM", ffROOC: "—"
    },
    fechaInicio: "23/09/25", fechaFin: "31/10/28", avProg: "—", avEjec: "—",
    notes: [
      "Sección 01: Inició 23.09.25 → 2 de 3 Inf. aprobados. Inf. 3 en elaboración.",
      "Sección 02: Inició 23.10.25 → 1 de 3 Inf. aprobados. Inf. 2 en elaboración. Inf.  3 no iniciado.",
      "Sección 03: Inició 22.11.25 → 1 de 3 Inf. aprobados. Inf. 2 en elaboración. Inf.  3 no iniciado.",
      "Sección 04: Inició 22.12.25 → 1 de 3 Inf. aprobados. Inf. 2 en elaboración. Inf.  3 no iniciado.",
      "Sección 05: Inició 21.01.26 → 1 de 3 Inf. aprobados. Inf. 2 en elaboración. Inf.  3 no iniciado.",
      "Sección 06: Inició 20.02.26 → Inf. 1 en elaboración. Inf. 2 y 3 no iniciado.",
      "Sección 07: Inició 22.03.26 → Inf. 1 en elaboración. Inf. 2 y 3 no iniciado.",
      "Sección 08: Inició 21.04.26 → Inf. 1 en elaboración. Inf. 2 y 3 no iniciado.",
      "Sección 09: Inició 21.05.26 → Inf. 1 en elaboración. Inf. 2 y 3 no iniciado."
    ],
    alert: null,
    hitos: [
      { fecha: "Oct.26", titulo: "Aprobación del Expediente Técnico Sección 1" },
      { fecha: "Nov.26", titulo: "Inicio de la ejecución de obra – Sección 1" }
    ],
    riesgo: [
      "Superposición y usurpación de predios en algunos tramos de las servidumbres de acceso hacia la Cámara de Bombeo de Desagüe N° 01",
      "Demora en la obtención de permisos del ANA, Autoridad Administrativa del Agua Jequetepeque Zarumilla y el  Proyecto Especial Chira Piura,  debido al replanteo del trazado de emisores de descarga (Ejidos y Tacalá).",
      "Aprobación de la actualización del Instrumento de Gestión Ambiental Integral condiciona el inicio de la ejecución de obra en las secciones previstas."
    ],
    deadline: "01.08.28",
    chart: {
      max: 21,
      ejecucion: [0, 0, 0.1, 0, 0, 0, 0, null, null, null, null, null],
      ejecProy: [null, null, null, null, null, null, 0, 0, 1.9, 15, 4.9, 3.5],
      metaMEF: [null, null, null, null, null, null, 0, 0, 1.9, 15, 3.9, 19.9]
    }
  },

  {
    id: "chala", tab: "Chala Arequipa", title: "Chala Arequipa",
    status: "En Ejecución", statusType: "agua potable", cui: "2331579",
    fin: {
      costo: "S/ 203 MM", devengado: "S/ 159.6 MM", avance: "78.6%",
      pim: "S/ 60.2 MM", certificado: "S/ 60 MM", devengado26: "S/ 31.6 MM",
      pimEjecutar: "S/ 28.6 MM", ffRO: "S/ 28.6 MM", ffROOC: "—"
    },
    fechaInicio: "27/09/24", fechaFin: "05/12/26", avProg: "70%", avEjec: "70.65%",
    notes: [
      "La obra presenta limitaciones por modificaciones contractuales y restricciones de demanda eléctrica.",
      "Se viene ejecutando el reservorio elevado, estación de bombeo de agua, cámara de bombeo de desagüe, instalación de red de emisor submarino y osmosis inversa y la construcción de PTAR-PTAP.",
      "Jul 26: Se programó S/ 7.8 MM para el pago de la valorización de Obra N° 22 (Jun 2026), Mayores Gastos Generales, Prestacionales Adicionales y Valorización de Supervisión N° 21 y 22."
    ],
    alert: null,
    hitos: [
      { fecha: "05/12/26", titulo: "Culminación de la obra." }
    ],
    riesgo: [
      "Dificultades en la operación por problemas de suministro de energía eléctrica."
    ],
    deadline: "20.09.26",
    chart: {
      max: 15,
      ejecucion: [12.8, 2.8, 2.9, 5, 4.5, 3.6, 0.1, null, null, null, null, null],
      ejecProy: [null, null, null, null, null, null, 7.9, 3.7, 6.2, 3.4, 3.4, 4.1],
      metaMEF: [null, null, null, null, null, null, 3.7, 3.7, 6.2, 3.4, 3.4, 5]
    }
  },

  {
    id: "catacaos", tab: "Catacaos", title: "Catacaos",
    status: "En Ejecución", statusType: "agua potable", cui: "2536439",
    fin: {
      costo: "S/ 223.6 MM", devengado: "S/ 154.3 MM", avance: "69%",
      pim: "S/ 52.7 MM", certificado: "S/ 52.7 MM", devengado26: "S/ 29.9 MM",
      pimEjecutar: "S/ 22.7 MM", ffRO: "S/ 22.7 MM", ffROOC: "—"
    },
    fechaInicio: "14/12/24", fechaFin: "27/11/26", avProg: "99.4%", avEjec: "75.6%",
    notes: [
      "13.02.26: D.U. 001-2026, autoriza el financiamiento de las IRI.",
      "La inversión comprende: redes colectoras y secundarias de alcantarillado, redes de distribución de agua, conexiones domiciliarias y líneas de impulsión de aguas residuales.",
      "Presenta retrasos en la elaboración de expedientes de adicionales de Cámaras de Bombeo.",
      "Jul 2026: se tiene programado S/ 3.9 MM, correspondiente al pago de la Valorización de obra N° 19 (Jun 2026), Mayores Metrados, Prestaciones Adicionales y Valorización de Supervisión de Obra N° 19."
    ],
    alert: { text: "Déficit presupuestal de S/ 12.7 MM para cubrir el pago total de valorizaciones." },
    hitos: [
      { fecha: "27/11/26", titulo: "Culminación de la obra" }
    ],
    riesgo: [
      "Retrasos por demora en la elaboración de expedientes de adicionales de obra."
    ],
    deadline: "24.09.26",
    chart: {
      max: 13,
      ejecucion: [0, 6.6, 2.4, 11.5, 3.2, 5.5, 0.7, null, null, null, null, null],
      ejecProy: [null, null, null, null, null, null, 4.4, 5.7, 4.7, 5.7, 3, 0],
      metaMEF: [null, null, null, null, null, null, 4.4, 5.7, 4.7, 5.7, 3.3, 0]
    }
  },

  {
    id: "dp zarumilla", tab: "DP Zarumulla", title: "DP Zarumulla",
    status: "Por Etapas", statusType: "Drenaje pluvial", cui: "2567526",
    fin: {
      costo: "S/ 265.7 MM", devengado: "S/ 16.7 MM", avance: "6.3%",
      pim: "S/ 62.5 MM", certificado: "S/ 18.7 MM", devengado26: "S/ 3.1 MM",
      pimEjecutar: "S/ 59.5 MM", ffRO: "S/ 59.5 MM", ffROOC: "—"
    },
    fechaInicio: "—", fechaFin: "—", avProg: "—", avEjec: "—",
    notes: [
      "ETAPA 1: Obra en proceso de selección",
      "El 10.07.26 se notificó la adjudicación de obra.",
      "ETAPA 2:  Exp. Técnico en elaboración – 07 entregables",
      "Inició el 25/06/2025, con un avance de 80%.",
      "Entregables del 1 al 5 aprobado.",
      "Entregable N° 06 en levantamiento de observaciones.",
      "ETAPA 3:  Exp. Téc. en actos previos (previsto ejecución: Diseño y Construcción)",
      "Diciembre 2025, se culminó la actualización del presupuesto del ET (supera los S/ 180 MM).",
      "Por convocar, presenta limitada disponibilidad presupuestal para la ejecución bajo el esquema de Diseño y Construcción."
    ],
    alert: null,
    hitos: [
      { fecha: "14/08/26", titulo: "ETAPA 1 — Suscripción de contrato de obra " },
      { fecha: "30/09/26", titulo: "ETAPA 2 — Culminación del Expediente Técnico" },
      { fecha: "15/08/26", titulo: "ETAPA 3 — Nueva reunión tripartita (BID, MVCS y MEF) para definir priorización de inversiones, según el resultado de la Demanda adicional presentada a MEF." }
    ],
    riesgo: [
      "ETAPA 3: Falta de disponibilidad presupuestal para iniciar la convocatoria de obra."
    ],
    deadline: "—",
    chart: {
      max: 13,
      ejecucion: [0, 1.8, 0.1, 0.1, 0.8, 1.1, 0, null, null, null, null, null],
      ejecProy: [null, null, null, null, null, null, 0.1, 1.6, 0.1, 1.3, 6.7, 11],
      metaMEF: [null, null, null, null, null, null, 0.1, 1.6, 0.1, 1.3, 6.7, 11.1]
    }
  },

  {
    id: "colectores emergencia", tab: "Colectores Emergencia", title: "Colectores Emergencia",
    status: "En Ejecución", statusType: "alcantarillado", cui: "2678483",
    fin: {
      costo: "S/ 72.7 MM", devengado: "S/ 42 MM", avance: "57.7%",
      pim: "S/ 35.1 MM", certificado: "S/ 35.1 MM", devengado26: "S/ 29.4 MM",
      pimEjecutar: "S/ 5.8 MM", ffRO: "S/ 5.8 MM", ffROOC: "—"
    },
    fechaInicio: "02/09/25", fechaFin: "15/11/26", avProg: "97.2%", avEjec: "68.29%",
    notes: [
      "Presenta interferencia no prevista por tubería de agua de 500 mm al mismo nivel del Emisor Norte, se encuentra en trámite la aprobación de un Adicional de Obra. Asimismo, se tiene restringido 1,500 m de tubería hasta el funcionamiento de los nuevos emisores a solicitud de EPSEL.",
      "Jul 2026: Se programó S/ 3.0 MM para el pago de la Valorización de Obra N° 10 Emisor Norte, Valorización de Obra N° 09 Emisor Sur y Valorización de Supervisión N° 10, otros."
    ],
    alert: { text: "Déficit presupuestal de S/ 25.5 MM para cubrir el pago total de valorizaciones." },
    hitos: [
      { fecha: "15/11/26", titulo: "Fecha estimada de culminación de la obra Emisor Norte (Ampliación de plazo en evaluación)." },
      { fecha: "12/09/26", titulo: "Culminación de la obra Emisor Sur. Se tiene previsto ampliación por restricciones en la ejecución." }
    ],
    riesgo: [
      "Aplazamiento del término de obra por interferencias y restricciones."
    ],
    deadline: "—",
    chart: {
      max: 8,
      ejecucion: [5.1, 4.8, 6, 3.1, 5, 2.6, 2.8, null, null, null, null, null],
      ejecProy: [null, null, null, null, null, null, 2.7, 4.2, 6.2, 3.1, 0, 0],
      metaMEF: [null, null, null, null, null, null, 5.2, 4.2, 6.2, 2.4, 0, 0]
    }
  },

  /* ============================== PASLC ============================== */
  { type: "section", id: "paslc", acro: "PASLC", name: "Programa Agua Segura para Lima y Callao" },

  {
    id: "carabayllo", tab: "Carabayllo", title: "Carabayllo",
    status: "En Ejecución", statusType: "agua potable y alcantarillado", cui: "2395187",
    fin: {
      costo: "S/ 886.2 MM", devengado: "S/ 327.7 MM", avance: "37%",
      pim: "S/ 159.1 MM", certificado: "S/ 154.6 MM", devengado26: "S/ 133 MM",
      pimEjecutar: "S/ 26.1 MM", ffRO: "S/ 9.8 MM", ffROOC: "—"
    },
    fechaInicio: "05/08/24", fechaFin: "19/07/28", avProg: "16.16%", avEjec: "14.45%",
    notes: [
      "Ejecución atrasada. Avance físico programado acumulado mayor al ejecutado.",
      "En ejecución:",
      "Redes de Alcantarillado en los Sectores 358, 357 y 359",
      "Redes de agua potable en los Sectores 359 y 360",
      "Obras civiles y excavación para el Reservorio de Rebombeo Proyectado 02.",
      "Respecto al pago de adelantos:",
      "Adelanto Directo (10%) por S/ 80.6 MM, se realizó el pago total.",
      "Adelanto de Materiales (20%) por S/ 161.2 MM, se realizó el pago de S/ 128.4 MM, quedando pendiente el pago de S/ 32.8 MM.",
      "El proyecto no cuenta con presupuesto para el pago de valorizaciones de julio a diciembre. El 06.05.26 se solicitó demanda adicional (en evaluación de MEF – HR: E-100510-2026).",
      "El déficit actualizado asciende a S/ 111.2 MM, de los cuales para el pago de valorizaciones es de S/ 78.4 MM y adelanto de materiales por S/ 32.8 MM (no se determina fecha del adelanto de materiales, a la espera de recursos adicionales.)."
    ],
    alert: null,
    hitos: [
      { fecha: "Julio", titulo: "Pago de la Valorización de Obra N° 11 por S/ 16.1 MM y supervisión por S/ 0.6 MM, gestión (S/ 0.1 MM).  En proceso, una modificación presupuestal para habilitar S/ 4.8 MM con cargo al proyecto ATE y Santa Anita." }
    ],
    riesgo: [
      "ALTO: Incumplimiento del contrato por falta de presupuesto para el pago del adelanto de materiales y de las valorizaciones de agosto a diciembre"
    ],
    deadline: "19.07.28",
    chart: {
      max: 30,
      ejecucion: [27.6, 12.1, 12.6, 31.2, 28.6, 20.8, 0.1, null, null, null, null, null],
      ejecProy: [null, null, null, null, null, null, 12, 11.7, 2.4, 0, 0, 0],
      metaMEF: [null, null, null, null, null, null, 11.7, 11.7, 0.6, 3.3, 0, 0]
    }
  },

  {
    id: "ventanilla", tab: "Ventanilla 273", title: "Ventanilla 273",
    status: "En Ejecución", statusType: "agua potable y alcantarillado", cui: "2309659",
    fin: {
      costo: "S/ 817.2 MM", devengado: "S/ 358.3 MM", avance: "43.8 %",
      pim: "S/ 91.3 MM", certificado: "S/ 90.8 MM", devengado26: "S/ 84.6 MM",
      pimEjecutar: "S/ 6.7 MM", ffRO: "S/ 9.8 MM", ffROOC: "—"
    },
    fechaInicio: "16/10/24", fechaFin: "04/04/28", avProg: "38.93%", avEjec: "42.63%",
    notes: [
      "Desempeño adelantado: Avance físico programado acumulado menor al ejecutado",
      "La ejecución física continúa en sus 8 frentes, con la inclusión de avance en los reservorios mejorados (rehabilitados / reconstruidos) R-1-273, R-1-277, RP-03-395, RP-04-279, RP-07-395, RP-08-395, R-5-394, R-3-278 y R-2-273 así como la continuación en los reservorios RAP-04-278, RP-06-395, RRP-01-279, RAP-06-277 y RP-05B; así como en muros de contención y cámaras en toda la obra.",
      "El proyecto no cuenta con presupuesto para el pago de valorizaciones de julio a diciembre. El 06.05.26 se solicitó demanda adicional (en evaluación de MEF – HR: E-100510-2026).",
      "El déficit actualizado asciende a S/ 62.7 MM. Precisando que, en caso continua en incremento de valorizaciones de obra."
    ],
    alert: null,
    hitos: [

    ],
    riesgo: [
      "Julio: Pago de Valorización de Obra N° 21 por S/ 12.37 MM no cuenta con presupuesto.",
      "Incumplimiento del contrato por falta de presupuesto para el pago de las valorizaciones de julio a diciembre."
    ],
    deadline: "04.04.28",
    chart: {
      max: 17,
      ejecucion: [14.6, 11.5, 15.1, 12.1, 13.2, 17.5, 0.5, null, null, null, null, null],
      ejecProy: [null, null, null, null, null, null, 0.9, 1.6, 3.2, 0.5, 0.5, 0.5],
      metaMEF: [null, null, null, null, null, null, 9.2, 0, 0, 0, 0, 0]
    }
  },

  {
    id: "galvez", tab: "José Gálvez", title: "José Gálvez",
    status: "En Ejecución", statusType: "agua potable y alcantarillado", cui: "2403503",
    fin: {
      costo: "S/ 511 MM", devengado: "S/ 189.2 MM", avance: "37%",
      pim: "S/ 66.9 MM", certificado: "S/ 66.7 MM", devengado26: "S/ 37.7 MM",
      pimEjecutar: "S/ 29.1 MM", ffRO: "S/ 9.8 MM", ffROOC: "—"
    },
    fechaInicio: "23/08/24", fechaFin: "23/09/27", avProg: "86.14%", avEjec: "52.27%",
    notes: [
      "Desempeño atrasado: Avance físico programado acumulado mayor que el ejecutado.",
      "En ejecución en 05 frentes de trabajo, incluyendo concreto de cámaras, cisternas y reservorios (PAO N° 7), además en redes de agua potable, de alcantarillado, conexiones domiciliarias, y reposición de pavimentos (PAO N°1).",
      "El 12.06.2026 PASLC otorgó opinión favorable a la reformulación de los cronogramas del Supervisor Consorcio Supervisión Sur, derivada de la Decisión N.° 13 de la JRD, manteniéndose la fecha de culminación reprogramada para el 23.09.2027.",
      "El proyecto no cuenta con presupuesto para el pago de valorizaciones, mayores metrados y mayores gastos generales desde octubre a diciembre. El 06.05.26 se solicitó demanda adicional (en evaluación de MEF – HR: E-100510-2026).",
      "El déficit actualizado asciende a S/ 7.9 MM."
    ],
    alert: null,
    hitos: [
      { fecha: "Julio", titulo: "Pago de Valorización de Obra N° 23 (S/ 1.8 MM), supervisión por S/ 0.4 MM y de Adicionales (S/ 0.6 MM). Así mismo, se encuentra en curso mayores metrados y mayores gastos generales por S/ 6.0 MM." }
    ],
    riesgo: [
      "MEDIO: Incumplimiento del contrato por falta de presupuesto para el pago de las valorizaciones contractuales y valorizaciones por MMO por ampliaciones de plazo."
    ],
    deadline: "01.08.27",
    chart: {
      max: 12,
      ejecucion: [3.7, 10.2, 4.9, 8.5, 4.6, 3.3, 2.6, null, null, null, null, null],
      ejecProy: [null, null, null, null, null, null, 3.1, 4.5, 5.1, 7.2, 6, 5.8],
      metaMEF: [null, null, null, null, null, null, 3.7, 4.5, 5.1, 7.2, 6, 5.4]
    }
  },

  {
    id: "comas", tab: "Comas e Independencia", title: "Comas e Independencia",
    status: "En Ejecución", statusType: "agua potable y alcantarillado", cui: "2300050",
    fin: {
      costo: "S/ 313.5 MM", devengado: "S/ 78.8 MM", avance: "25.1%",
      pim: "S/ 45.1 MM", certificado: "S/ 45 MM", devengado26: "S/ 43.4 MM",
      pimEjecutar: "S/ 1.6 MM", ffRO: "S/ 9.8 MM", ffROOC: "—"
    },
    fechaInicio: "03/12/25", fechaFin: "25/07/27", avProg: "5.63%", avEjec: "6.48%",
    notes: [
      "Desempeño adelantado: Avance físico programado acumulado menor que el ejecutado.",
      "La Especialidad de Topografía ejecutó la verificación y validación topográfica de los volúmenes correspondientes a los reservorios RAP-02, RAP-09, RAP-14 y RA-03, así como del CP-02 y RAP-06. Asimismo, realizó el levantamiento topográfico de líneas troncales, el control de excavaciones, la colocación de plantillas para las zapatas y cimientos del reservorio RAP-14, el trazo y replanteo de la red de agua potable del Sector 343, y la liberación de alineamiento y nivelación de la tubería HDPE Ø 200 mm (T-843C) de las redes secundarias de alcantarillado, entre otras actividades.",
      "Se solicitó al Ministerio de Cultura la tercera incorporación de áreas al PMAR, la cual fue aprobada el 19.06.2026 mediante la Resolución Directoral N.° 855-2026-DCE-DGPA-VMPCIC.",
      "Se debe adelanto de materiales por S/ 25 MM.",
      "El proyecto no cuenta con presupuesto para el pago de valorizaciones de julio a diciembre. El 06.05.26 se solicitó demanda adicional (en evaluación de MEF – HR: E-100510-2026).",
      "El déficit actualizado asciende a S/ 56.7 MM."
    ],
    alert: null,
    hitos: [

    ],
    riesgo: [
      "Julio: No se cuenta con presupuesto para el pago de Valorización de Obra N° 7 (S/ 4.9 MM), supervisión (S/ 0.5 MM), gestión (S/ 0.1 MM), entre otros.",
      "Incumplimiento del contrato por falta de presupuesto para pago del adelanto de materiales y de las valorizaciones de julio a diciembre. (no se determina fecha del adelanto de materiales, a la espera de recursos adicionales)."
    ],
    deadline: "25.07.27",
    chart: {
      max: 17,
      ejecucion: [1.2, 8, 11.6, 15.9, 2.5, 4.2, 0.1, null, null, null, null, null],
      ejecProy: [null, null, null, null, null, null, 5.6, 0, 0, 0, 0, 0],
      metaMEF: [null, null, null, null, null, null, 1.7, 0, 0, 0, 0, 0]
    }
  },

  {
    id: "ate y santa anita", tab: "Ate y Santa Anita", title: "Ate y Santa Anita",
    status: "En Ejecución", statusType: "agua potable y alcantarillado", cui: "2389079",
    fin: {
      costo: "S/ 1816.8 MM", devengado: "S/ 27.6 MM", avance: "1.5%",
      pim: "S/ 45.2 MM", certificado: "S/ 38.5 MM", devengado26: "S/ 0.9 MM",
      pimEjecutar: "S/ 44.3 MM", ffRO: "S/ 9.8 MM", ffROOC: "—"
    },
    fechaInicio: "21/10/26", fechaFin: "11/08/28", avProg: "0%", avEjec: "0%",
    notes: [
      "Etapa I: ET aprobado sin financiamiento para convocar proceso de selección. Se presentó Demanda Adicional para el ejercicio 2026 (36.1 MM) y para el ejercicio 2027 (S/ 76.9 MM).",
      "Etapa II: Obra y Supervisión convocados.",
      "Obra: Se emitió el pronunciamiento del OECE, por lo que se procedió a integrar las bases y actualizar el valor referencial en el OECE; así mismo, se programó la Buena Pro: 10.08.2026",
      "Supervisión: Convocado el 03.06.2026, el proceso de selección tiene programada la publicación del pliego de absolución de consultas y observaciones hasta el 15.07.2026, siendo la nueva fecha del otorgamiento de la buena pro 04.08.2026.",
      "Etapa III: El contrato de consultoría para la elaboración del expediente técnico y de la supervisión se encuentra suspendido desde el 21.01.2026, hasta la aprobación de la ubicación definitiva del Reservorio RP-01 (en evaluación por SEDAPAL).",
      "Demanda adicional en la programación 2027-2029. Su déficit corresponde a la previsión 2027, para las convocatorias de obra y supervisión de obra de la ETAPA 1 (180 MM); así como para actualizar la certificación de la ETAPA 2 (60 MM) una vez otorgada la buena pro."
    ],
    alert: null,
    hitos: [
      { fecha: "10/08/26", titulo: "Publicación de la buena pro ejecución de obra etapa II." }
    ],
    riesgo: [
      "BAJO: Etapa I - Falta de financiamiento para la convocatoria del proceso de selección de la ejecución de la obra.",
      "ALTO: Etapa III - La falta de determinación por parte de SEDAPAL sobre la alternativa para la reubicación del Reservorio RP-01 y la validación pendiente de los aspectos técnicos, sociales y de saneamiento físico legal podrían generar retrasos en el desarrollo del proyecto."
    ],
    deadline: "—",
    chart: {
      max: 30,
      ejecucion: [0, 0, 0.8, 0, 0, 0, 0, null, null, null, null, null],
      ejecProy: [null, null, null, null, null, null, 0, 0.8, 1.1, 27.4, 5.5, 5.6],
      metaMEF: [null, null, null, null, null, null, 0.7, 0.2, 1.1, 27.4, 4.3, 3.5]
    }
  },

  {
    id: "puente piedra", tab: "Puente Piedra", title: "Puente Piedra",
    status: "En Ejecución", statusType: "agua potable y alcantarillado", cui: "2396141",
    fin: {
      costo: "S/ 318.6 MM", devengado: "S/ 37.8 MM", avance: "11.9%",
      pim: "S/ 24.5 MM", certificado: "S/ 24.2 MM", devengado26: "S/ 0.0 MM",
      pimEjecutar: "S/ 24.5 MM", ffRO: "S/ 9.8 MM", ffROOC: "—"
    },
    fechaInicio: "10/04/2024", fechaFin: "13/07/2026", avProg: "65%", avEjec: "45%",
    notes: [
      "Ejecución atrasada: Avance físico programado acumulado mayor que el ejecutado.",
      "El proyecto contempla la elaboración del expediente técnico en 03 Secciones y su posterior ejecución de obra. Respecto a los entregables del expediente técnico, se destacan los siguientes aspectos:",
      "Sección 01: 02.06.2026: UGI remitió al Consultor y Supervisor la Resolución de aprobación del Expediente Técnico – Sección N° 1 del proyecto.",
      "Sección 02: 05.05.2026: La Supervisión emitió observaciones al Informe de Estudios Definitivos – Sección N° 2, encontrándose pendiente el levantamiento de observaciones.",
      "Sección 03: 19.01.2026: UGI solicitó al Consultor el cumplimiento de sus obligaciones contractuales y la presentación de los entregables de las Secciones N° 02 y 03.",
      "De la ejecución de obra:",
      "19.06.2026: El Supervisor comunicó la conformidad al Plan de Trabajo presentado por el Contratista.",
      "09.07.2026: Inicio ejecución de Obra – Sección N° 1.",
      "El déficit actualizado asciende a S/ 9.5 MM."
    ],
    alert: null,
    hitos: [
      { fecha: "Julio", titulo: "Julio: presentación levantamiento de observaciones de estudios definitivos Sección N° 2" }
    ],
    riesgo: [
      "ALTO: Incumplimiento del contrato por falta de presupuesto para el pago del adelanto de materiales y de las valorizaciones de setiembre a diciembre"
    ],
    deadline: "—",
    chart: {
      max: 24,
      ejecucion: [0, 0, 0, 0, 0, 0, 0, null, null, null, null, null],
      ejecProy: [null, null, null, null, null, null, 9.6, 0.5, 1.3, 1.7, 2.9, 8.5],
      metaMEF: [null, null, null, null, null, null, 0.1, 22.4, 1.1, 0.8, 0, 0]
    }
  },

  {
    id: "profam", tab: "Profam", title: "Profam",
    status: "En Ejecución", statusType: "agua potable y alcantarillado", cui: "2339705",
    fin: {
      costo: "S/ 336.7 MM", devengado: "S/ 37.4 MM", avance: "11.1%",
      pim: "S/ 12.5 MM", certificado: "S/ 12.5 MM", devengado26: "S/ 0.9 MM",
      pimEjecutar: "S/ 11.7 MM", ffRO: "S/ 9.8 MM", ffROOC: "—"
    },
    fechaInicio: "16/04/2024", fechaFin: "31/12/2026", avProg: "46%", avEjec: "30%",
    notes: [
      "Ejecución atrasada: Avance físico programado acumulado mayor que el ejecutado.",
      "El proyecto contempla la elaboración del expediente técnico en 04 Secciones y su posterior ejecución de obra. Respecto a los entregables del expediente técnico, se destacan los siguientes aspectos:",
      "Sección 01: Informe del Expediente Técnico observado y en levantamiento de observaciones por parte del consultor en coordinación con el supervisor.",
      "Sección 02: 19.06.2026: La UGI comunicó al Consultor y Supervisor la conformidad al Informe de Estudios Definitivos, quedando pendiente la presentación de la versión física, siendo presentado el 30.06.2026.",
      "Sección 03: 15.06.2026: El Consorcio Supervisor, se dirigió al Consultor, a efectos de comunicar que el Informe de Estudios Definitivos se encuentra APROBADO.",
      "Sección 04: Iniciará una vez culminados los entregables de las Secciones N° 1, 2 y 3, conforme a los Términos de Referencia.",
      "No se proyecta déficit para el año 2026 (actualizado)"
    ],
    alert: null,
    hitos: [
      { fecha: "Julio", titulo: "Revisión de la valorizaciones de Expediente Técnico y Supervisión para pago del Informe de Estudios Definitivos – Sección 2" },
      { fecha: "15/08/26", titulo: "Aprobación del Informe de Estudios Definitivos – Sección N.° 02, incluyendo la presentación de la versión física." }
    ],
    riesgo: [
      "MEDIO: Demora de revisión y aprobación de entregables por parte de SEDAPAL, lo que podría afectar los plazos programados del proyecto. Se requiere celeridad en el trámite de (HT 106443-2026)"
    ],
    deadline: "—",
    chart: {
      max: 10,
      ejecucion: [0, 0, 0, 0.3, 0.5, 0, 0, null, null, null, null, null],
      ejecProy: [null, null, null, null, null, null, 0, 1.4, 0.5, 9.2, 0.6, 0],
      metaMEF: [null, null, null, null, null, null, 0.7, 0.7, 0.5, 9.2, 0.6, 0]
    }
  },

  {
    id: "amancaes", tab: "Amancaes", title: "Amancaes",
    status: "En Ejecución", statusType: "agua potable y alcantarillado", cui: "2344329",
    fin: {
      costo: "S/ 144.4 MM", devengado: "S/ 118.3 MM", avance: "81.9%",
      pim: "S/ 12.3 MM", certificado: "S/ 12.3 MM", devengado26: "S/ 6 MM",
      pimEjecutar: "S/ 6.3 MM", ffRO: "S/ 9.8 MM", ffROOC: "—"
    },
    fechaInicio: "08/04/26", fechaFin: "03/12/26", avProg: "7.99%", avEjec: "6.52%",
    notes: [
      "Ejecución de Obra atrasada: avance programado mayor al ejecutado.",
      "En el componente de Obras Civiles, la diferencia respecto al avance programado obedece al tiempo requerido para la atención de las consultas formuladas al proyectista y a la necesidad de precisiones técnicas, por lo que se proyecta realizar consulta a Pluz Energía.",
      "El déficit actualizado asciende a S/ 9.2 MM."
    ],
    alert: null,
    hitos: [
      { fecha: "HITOS", titulo: "Aprobación del Entregable N° 4." }
    ],
    riesgo: [
      "MEDIO: Desbalance económico-contractual, lo que podría derivar en la resolución del contrato y la convocatoria de un nuevo procedimiento de selección para la ejecución de Obra. El presupuesto de las Secciones N.° 04 y 05, asociado a la necesidad de ejecutar reparaciones, adecuaciones y/o intervenciones no previstas inicialmente en el equipamiento, podría superar el 50% del presupuesto de obra ofertado."
    ],
    deadline: "—",
    chart: {
      max: 10,
      ejecucion: [0, 0, 0.2, 4.3, 0.3, 0.5, 0.8, null, null, null, null, null],
      ejecProy: [null, null, null, null, null, null, 0.7, 0.9, 1.9, 2.1, 1, 0.4],
      metaMEF: [null, null, null, null, null, null, 0.9, 1.9, 1.8, 1.5, 0.4, 0]
    }
  },

  {
    id: "paraiso alto", tab: "Paraiso Alto", title: "Paraiso Alto",
    status: "En Ejecución", statusType: "agua potable y alcantarillado", cui: "2317154",
    fin: {
      costo: "S/ 110.6 MM", devengado: "S/ 84.2 MM", avance: "76.1%",
      pim: "S/ 7.6 MM", certificado: "S/ 7.6 MM", devengado26: "S/ 4.5 MM",
      pimEjecutar: "S/ 3.1 MM", ffRO: "S/ 9.8 MM", ffROOC: "—"
    },
    fechaInicio: "29/02/24", fechaFin: "15/11/26", avProg: "99.83%", avEjec: "85.13%",
    notes: [
      "Ejecución atrasada: Avance físico programado acumulado mayor que el ejecutado.",
      "El Supervisor, mediante Carta N.° 185-2026-GEXA-PAS/RL (06.07.2026)  presentó informe técnico sobre la necesidad de ejecutar el adicional de obra denominado “Filtros pasivos de armónicos y supresores de sobretensiones transitorias en las estaciones CB-02-01, CB-03 y CB-04”",
      "Se extendió el servicio de Supervisión de Obra hasta el 15.07.2026, en atención a la Decisión N.° 21 de la JRD, mediante la cual se otorgó al Contratista una ampliación de plazo de 125 días calendario correspondiente a la Ampliación de Plazo N.° 20 hasta noviembre 2026. En ese sentido, al encontrarse el plazo del servicio de supervisión vinculado al plazo contractual de la obra, corresponde la extensión del servicio de supervisión.",
      "El déficit  actualizado asciende a S/ 2 MM"
    ],
    alert: null,
    hitos: [
      { fecha: "Julio", titulo: "Habilitación de recursos por S/ 0.8 MM (HT 119056 ) para el pago de las valorizaciones de supervisión de obra correspondientes al periodo marzo–julio." }
    ],
    riesgo: [
      "ALTO: Necesidad de mayores recursos para completar el pago de valorizaciones principales."
    ],
    deadline: "—",
    chart: {
      max: 10,
      ejecucion: [0, 0.6, 0.7, 0.9, 1.5, 0.7, 0, null, null, null, null, null],
      ejecProy: [null, null, null, null, null, null, 0.5, 1.2, 1.5, 0, 0, 0],
      metaMEF: [null, null, null, null, null, null, 1.1, 1.1, 1.1, 0, 0, 0]
    }
  },

  /* ============================== PNSR ============================== */
  { type: "section", id: "pnsr", acro: "PNSR", name: "Programa Nacional de Saneamiento Rural" },

  {
    id: "coata", tab: "Coata Rural Puno", title: "Coata Rural — Puno",
    status: "En Ejecución", statusType: "agua potable y saneamiento", cui: "2461584",
    fin: {
      costo: "S/ 69.8 MM", devengado: "S/ 51.2MM", avance: "73.3%",
      pim: "S/ 17.4 MM", certificado: "S/ 16.7 MM", devengado26: "S/ 5.6 MM",
      pimEjecutar: "S/ 11.8 MM", ffRO: "S/ 11.8 MM", ffROOC: "—"
    },
    fechaInicio: "09/11/23", fechaFin: "14/10/26", avProg: "58.93%", avEjec: "54.76%",
    notes: [
      "Ejecutada por el Consorcio CARATA (Modalidad de contrata).",
      "Adicionales de Obra 01 al 09 aprobados y los deductivos Vinculantes 01 al 05",
      "Ampliaciones de Plazo 01, 04, 05, 06 y 07 aprobadas (29 d.c –Junta de Resolución de Disputas - JRD, 120 d.c - JRD, 3 d.c - Entidad, 300 d.c. - JRD, 61 d.c - JRD) por 513 d.c",
      "La obra estuvo suspendida del 16.01 al 05.04.2026 por factores climatológicos adversos (lluvias). El 06.04.2026, reinició ejecución de obra.",
      "En ejecución de UBS (Unidad Básica de Saneamiento) en las localidades de Coatasi y Lluco (margen derecho), Putucuni y EBAR(Estación de Bombeo de Aguas Residuales).",
      "En julio, se devengó S/ 1.4 MM correspondiente a obra y supervisión. La menor ejecución en junio (devengado de julio) se debe a consultas técnicas que condicionaron la continuidad de algunos frentes de trabajo, y limitada disponibilidad de mano de obra especializada por el inicio de la temporada de heladas.",
      "No obstante, para agosto, se prevé (inicialmente) una recuperación progresiva de la ejecución, proyectándose ejecutar S/ 1.1 MM, como resultado de la absolución de consultas, apertura de nuevos frentes de trabajo e incorporación de personal especializado"
    ],
    alert: null,
    hitos: [
      { fecha: "HITOS", titulo: "Acciones implementadas: seguimiento a la absolución de consultas técnicas, apertura de nuevos frentes de trabajo, monitoreo permanente al contratista e incorporación de personal especializado para recuperar el ritmo de ejecución." }
    ],
    riesgo: [
      "Heladas en la zona, en los meses de mayo-julio, que podrían afectar la ejecución de obra."
    ],
    deadline: "14.10.26",
    chart: {
      max: 7,
      ejecucion: [0.3, 0.8, 0.1, 0, 1.9, 1.1, 1.4, null, null, null, null, null],
      ejecProy: [null, null, null, null, null, null, 1, 3, 3, 1.8, 2.1, 0],
      metaMEF: [null, null, null, null, null, null, 3.4, 3, 3, 1.8, 2.1, 0]
    }
  },

  /* ============================== COFOPRI ============================== */
  { type: "section", id: "cofopri", acro: "COFOPRI", name: "Organismo de Formalización de la Propiedad Informal" },

  {
    id: "catastro", tab: "Catastro Urbano", title: "Catastro Urbano — BM",
    status: "En Ejecución", statusType: "servicios operativos o misionales institucionales", cui: "2459010",
    fin: {
      costo: "S/ 293.6 MM", devengado: "S/ 192 MM", avance: "65.4%",
      pim: "S/ 90.7 MM", certificado: "S/ 90.7 MM", devengado26: "S/ 47.4 MM",
      pimEjecutar: "S/ 43.3 MM", ffRO: "S/ 9.3 MM", ffROOC: "S/ 34.1 MM"
    },
    fechaInicio: "01/05/21", fechaFin: "31/07/27", avProg: "—", avEjec: "—",
    notes: [
      "El BIRF ha aprobado la ampliación de plazo del último desembolso del Acuerdo de Préstamo N° 9035-PE hasta el 31.01.2027.",
      "Levantamiento catastral, Verificación y Validación de la calidad:",
      "Componente 1",
      "Lote 1 culminó levantamiento con un total de 416,551 UUCC validadas. Los Lotes 2,  3A-3B, 3C, 4, 5 y 6, se encuentran en ejecución contractual. En el Lote 3A- 3B se han validado 57,154 UUCC, en el Lote 3C se tiene validadas 5,826 UUCC, en el Lote 4 se han validado 60,863 UUCC, en el Lote 5 se han validado 28,874 UUCC y en el Lote 6, ejecutado en convenio con el ICL de la MML se han validado 23,914 UUCC. Se tiene un total 593,182 UUCC validadas.",
      "Componente 2",
      "Fortalecimiento de capacidades: se viene capacitando y certificando en la Gestión Catastral (700 capacitados y 123 certificados). Se han actualizado los PPRRD y PGR de 16 municipalidades priorizadas.  Se ha culminado la 3ra etapa del SICUN, continuando el mantenimiento y soporte, módulos de planificación y valorización territorial e interoperabilidad.",
      "Componente 3",
      "Este componente contempla el pago de servicios que permiten administrar y gestionar los contrato de los componentes 1 y 2, así como gastos asociados a la administración del proyecto."
    ],
    alert: null,
    hitos: [

    ],
    riesgo: [
      "Se requiere mayores recursos por lo que se ha solicitado una demanda adicional para el 2026 de RO por el monto de S/ 6.2 millones y de ROOC por el monto de S/ 16.9 millones."
    ],
    deadline: "",
    chart: {
      max: 14,
      ejecucion: [3.5, 4.6, 10.2, 9.1, 8.4, 9.8, 1.8, null, null, null, null, null],
      ejecProy: [null, null, null, null, null, null, 9.6, 9.8, 8.9, 7.3, 6.4, 3.1],
      metaMEF: [null, null, null, null, null, null, 9.6, 9.8, 8.9, 7.3, 3.1, 7]
    }
  }

];
