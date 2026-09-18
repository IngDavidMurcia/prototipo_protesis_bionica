
const milestones = [
  {
    year: "2024",
    title: "Antecedente formativo e ideación",
    text: "La idea inicial surge en el semillero y se nutre de procesos formativos en biónica y robótica."
  },
  {
    year: "2025",
    title: "Inicio técnico del proyecto",
    text: "Modelado, aprendizaje en CAD, exploración de geometrías y fabricación del primer concepto mecánico."
  },
  {
    year: "2026",
    title: "Formalización rigurosa",
    text: "Documento maestro, protocolo de trazabilidad, reorganización documental y nueva campaña de reproducción controlada."
  },
  {
    year: "Siguiente hito",
    title: "Cierre de TRL 3",
    text: "Prueba de concepto mecánica reproducible, requisitos verificables, protocolo experimental y conclusión técnica."
  }
];

export default function Timeline() {
  return (
    <div className="grid gap-6 lg:grid-cols-4">
      {milestones.map((item, index) => (
        <div key={item.year} className="glass glow-border rounded-3xl p-6">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-300/10 text-cyan-200">
              {index + 1}
            </div>
            <div className="text-sm uppercase tracking-[0.25em] text-cyan-300/80">{item.year}</div>
          </div>
          <h3 className="text-lg font-semibold text-white">{item.title}</h3>
          <p className="mt-3 text-sm leading-6 text-slate-300">{item.text}</p>
        </div>
      ))}
    </div>
  );
}
