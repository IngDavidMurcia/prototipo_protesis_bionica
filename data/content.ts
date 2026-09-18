
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
    { label: "Archivos técnicos reorganizados", value: "249", note: "Migración trazable completada" },
    { label: "Estructura documental activa", value: "A0–A17", note: "Ruta de trabajo organizada" },
    { label: "Estado actual", value: "V1", note: "Mecánico pasivo" },
    { label: "Trayectoria objetivo", value: "TRL 2 → 5", note: "Desarrollo progresivo" }
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
    title: "Prototipo mecánico V1",
    description: "Registro del prototipo mecánico histórico empleado como antecedente técnico."
  },
  {
    file: "/media/v1-prototipo-02.jpeg",
    title: "Detalle de ensamblaje",
    description: "Vista detallada de piezas impresas y rutas mecánicas del V1."
  },
  {
    file: "/media/cad-dedo-v1.png",
    title: "Modelado CAD de componentes",
    description: "Capturas de diseño paramétrico y exploración geométrica en la fase de modelado."
  },
  {
    file: "/media/equipo-aprendices-01.jpg",
    title: "Trabajo del equipo",
    description: "Participación de aprendices en actividades de observación, análisis y prototipado."
  },
  {
    file: "/media/fabricacion-controlada-01.jpeg",
    title: "Nueva fabricación controlada",
    description: "Inicio de la línea de evidencia reproducible mediante fabricación documentada."
  },
  {
    file: "/media/exploracion-servos-01.jpeg",
    title: "Exploraciones previas",
    description: "Evidencia de pruebas exploratorias con servomotores, sin constituir aún el V2 formal."
  }
];

export const selectedMediaGuide = [
  {
    targetName: "v1-prototipo-01.jpeg",
    sourceSuggestion: "10_EVIDENCIAS\\Historico\\V1_Historico\\Prototipo_Mecanico\\WhatsApp Image 2026-05-09 at 9.43.35 PM.jpeg"
  },
  {
    targetName: "v1-prototipo-02.jpeg",
    sourceSuggestion: "10_EVIDENCIAS\\Historico\\V1_Historico\\Prototipo_Mecanico\\WhatsApp Image 2026-05-11 at 5.20.00 PM.jpeg"
  },
  {
    targetName: "fabricacion-controlada-01.jpeg",
    sourceSuggestion: "Usar una fotografía nueva de la reproducción controlada V1 cuando esté disponible."
  },
  {
    targetName: "cad-dedo-v1.png",
    sourceSuggestion: "90_ARCHIVO_HISTORICO\\Recursos_Graficos_Anteriores o 03_DISENO\\...\\Dedo_V1 v6.png"
  },
  {
    targetName: "equipo-aprendices-01.jpg",
    sourceSuggestion: "10_EVIDENCIAS\\Historico\\Formacion_2026\\20260511_150111.jpg"
  },
  {
    targetName: "exploracion-servos-01.jpeg",
    sourceSuggestion: "10_EVIDENCIAS\\Historico\\Exploraciones_2026\\Servomotores\\WhatsApp Image 2026-05-09 at 9.39.58 PM.jpeg"
  }
];
