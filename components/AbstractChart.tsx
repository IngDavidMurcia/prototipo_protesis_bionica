
const bars = [
  { label: "Trazabilidad", value: 82, color: "from-cyan-400 to-cyan-200" },
  { label: "Diseño", value: 76, color: "from-violet-400 to-fuchsia-300" },
  { label: "Fabricación", value: 68, color: "from-emerald-400 to-teal-300" },
  { label: "Verificación", value: 44, color: "from-rose-400 to-orange-300" },
];

export default function AbstractChart() {
  return (
    <div className="glass glow-border scanline noise relative overflow-hidden rounded-3xl p-6">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-300/80">Lectura estratégica</p>
          <h3 className="mt-2 text-xl font-semibold text-white">Mapa abstracto de avance</h3>
        </div>
        <div className="chip">Visualización conceptual</div>
      </div>

      <div className="space-y-4">
        {bars.map((bar) => (
          <div key={bar.label}>
            <div className="mb-2 flex items-center justify-between text-sm text-slate-300">
              <span>{bar.label}</span>
              <span>{bar.value}%</span>
            </div>
            <div className="h-3 rounded-full bg-white/5">
              <div
                className={`h-3 rounded-full bg-gradient-to-r ${bar.color} shadow-glow`}
                style={{ width: `${bar.value}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <p className="mt-5 text-xs leading-6 text-slate-400">
        Gráfico conceptual para comunicación ejecutiva. No representa un indicador institucional formal;
        resume el foco relativo de trabajo del proyecto a la fecha.
      </p>
    </div>
  );
}
