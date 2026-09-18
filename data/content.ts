
export const project = {
  title: "Diseño y desarrollo progresivo de un prototipo de brazo biónico de bajo costo",
  subtitle:
    "Micrositio de divulgación técnica del Semillero SITAI · Tecnoacademia del Valle de Aburrá Sur · SENA",
  statement:
    "Proyecto experimental orientado a demostrar viabilidad técnica y reproducibilidad en laboratorio mediante manufactura aditiva, mecanismos de transmisión, actuación electromecánica y, en fases posteriores, control mioeléctrico e inteligencia artificial.",
  summaryNote:
    "Hasta la fase actual —TRL 2 consolidado y transición hacia TRL 3— no han surgido diseños propios con un nivel de novedad que justifique una revisión formal de propiedad intelectual. El V1 se compone principalmente de modelados desarrollados desde cero a partir de referentes trabajados durante la etapa formativa del diplomado en biónica y robótica cursado por el responsable del proyecto; aunque existen ajustes, personalizaciones y decisiones propias de modelado en herramientas como Fusion 360, estas variantes aún no constituyen rediseños sustanciales frente a los modelos de referencia empleados con fines formativos.",
  status: {
    trlCurrent: "TRL 2 consolidado",
    trlTarget: "Cierre de evidencias para TRL 3",
    currentVersion: "V1 mecánico",
    availability: "3 h/semana · 2 aprendices activos · 4 apoyos ocasionales"
  },
  priorities: [
    "Dossier técnico del V1",
    "Requisitos de ingeniería",
    "Reproducción controlada del V1",
    "Protocolo de verificación experimental",
    "Inventario/BOM y arquitectura V2"
  ],
  highlights: [
    { label: "Archivos técnicos construidos", value: "249", note: "Migrando a trazabilidad completa" },
    { label: "Actividades de proyecto en desarrollo", value: "A0–A17", note: "Ruta de trabajo definida" },
    { label: "Estado actual (1 de 3 planificadas)", value: "V1", note: "Mecánico pasivo" },
    { label: "Trayectoria objetivo", value: "TRL 2 → 5", note: "Desarrollo progresivo y cíclico (evaluación y rediseño)" }
  ]
};

export const roadmap = [
  {
    id: "v1",
    name: "V1 · Mecánico",
    description:
      "Estructura mecánica pasiva impresa con transmisión por tendones. Actualmente en reproducción controlada y verificación para consolidar TRL 3.",
    status: "En ejecución",
    trl: "TRL 3 objetivo",
    color: "cyan"
  },
  {
    id: "v2",
    name: "V2 · Electromecánico",
    description:
      "Integración de actuadores, potencia, electrónica, control y firmware una vez se cierre el V1 mecánico reproducible.",
    status: "Planificado",
    trl: "TRL 4 objetivo",
    color: "violet"
  },
  {
    id: "v3",
    name: "V3 · sEMG + IA",
    description:
      "Captura de señales musculares, procesamiento, reconocimiento de gestos y control inteligente del sistema en laboratorio.",
    status: "Fase futura",
    trl: "TRL 5 objetivo",
    color: "emerald"
  }
];

export const activities = [
  { code: "A1", title: "Revisión técnica focalizada", state: "Pendiente" },
  { code: "A2", title: "Requisitos de ingeniería", state: "Prioridad" },
  { code: "A3", title: "Formación y competencias", state: "Parcial" },
  { code: "A4", title: "Consolidación técnica V1", state: "Prioridad" },
  { code: "A5", title: "Verificación experimental V1", state: "Pendiente" },
  { code: "A6", title: "Inventario/BOM y arquitectura V2", state: "En ejecución" },
];

export const evidenceGallery = [
  {
    file: "/media/v1-prototipo-01.jpeg",
    title: "Prototipo mecánico V1 - Vista 1",
    description: "Registro del prototipo mecánico histórico empleado como antecedente técnico. Vista general de su estructura."
  },
  {
    file: "/media/v1-prototipo-02.jpeg",
    title: "Prototipo mecánico V1 - Vista 2",
    description: "Vista adicional del prototipo V1, destacando las proporciones y la integración del mecanismo pasivo."
  },
  {
    file: "/media/detalle-ensamble-01.jpeg",
    title: "Detalle de ensamblaje",
    description: "Vista detallada de piezas impresas, uniones articulares y rutas de los tendones en el diseño V1."
  },
  {
    file: "/media/cad-modelos-01.png",
    title: "Modelado CAD - Fase inicial",
    description: "Capturas de diseño paramétrico y exploración geométrica inicial de los componentes mecánicos."
  },
  {
    file: "/media/cad-modelos-02.png",
    title: "Modelado CAD - Ensamblaje",
    description: "Validación digital de tolerancias y acoplamientos antes de iniciar la manufactura aditiva."
  },
  {
    file: "/media/equipo-aprendices-01.jpeg",
    title: "Trabajo del equipo - Sesión 1",
    description: "Participación de los aprendices en actividades de observación, medición y análisis de requerimientos."
  },
  {
    file: "/media/equipo-aprendices-02.jpeg",
    title: "Trabajo del equipo - Sesión 2",
    description: "Integración de componentes, pruebas empíricas y revisión de los resultados obtenidos en laboratorio."
  },
  {
    file: "/media/fabricacion-controlada-01.jpeg",
    title: "Nueva fabricación controlada",
    description: "Inicio de la línea de evidencia reproducible mediante fabricación documentada bajo parámetros estandarizados."
  },
  {
    file: "/media/exploracion-servos-01.jpeg",
    title: "Exploraciones V2",
    description: "Evidencia de pruebas preliminares con servomotores y actuación electromecánica para la siguiente fase tecnológica."
  }
];

export const selectedMediaGuide = [
  {
    targetName: "hero-estado-visible.jpeg",
    sourceSuggestion: "Imagen representativa principal para la sección superior (Inicio)."
  },
  {
    targetName: "v1-prototipo-01.jpeg",
    sourceSuggestion: "10_EVIDENCIAS\\Historico\\V1_Historico\\Prototipo_Mecanico\\WhatsApp Image 2026-05-09 at 9.43.35 PM.jpeg"
  },
  {
    targetName: "v1-prototipo-02.jpeg",
    sourceSuggestion: "Otra vista del prototipo (ej. 10_EVIDENCIAS\\Historico\\V1_Historico\\Prototipo_Mecanico\\WhatsApp Image 2026-05-11 at 5.20.00 PM.jpeg)"
  },
  {
    targetName: "detalle-ensamble-01.jpeg",
    sourceSuggestion: "Foto en acercamiento de uniones y piezas internas impresas en 3D."
  },
  {
    targetName: "cad-modelos-01.png",
    sourceSuggestion: "90_ARCHIVO_HISTORICO\\Recursos_Graficos_Anteriores o 03_DISENO\\...\\Dedo_V1 v6.png"
  },
  {
    targetName: "cad-modelos-02.png",
    sourceSuggestion: "Captura del ensamblaje o estructura digital completa en software CAD."
  },
  {
    targetName: "equipo-aprendices-01.jpeg",
    sourceSuggestion: "10_EVIDENCIAS\\Historico\\Formacion_2026\\20260511_150111.jpg"
  },
  {
    targetName: "equipo-aprendices-02.jpeg",
    sourceSuggestion: "Segunda fotografía del equipo interactuando con los dispositivos o documentando."
  },
  {
    targetName: "fabricacion-controlada-01.jpeg",
    sourceSuggestion: "Usar una fotografía nueva de la reproducción controlada V1 cuando esté disponible."
  },
  {
    targetName: "exploracion-servos-01.jpeg",
    sourceSuggestion: "10_EVIDENCIAS\\Historico\\Exploraciones_2026\\Servomotores\\WhatsApp Image 2026-05-09 at 9.39.58 PM.jpeg"
  }
];
