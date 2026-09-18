
export default function MetricCard({
  value,
  label,
  note,
}: {
  value: string;
  label: string;
  note: string;
}) {
  return (
    <div className="glass glow-border rounded-3xl p-5 transition duration-300 hover:-translate-y-1 hover:shadow-glow">
      <div className="metric-value">{value}</div>
      <div className="mt-3 text-sm font-medium text-slate-100">{label}</div>
      <div className="mt-2 text-xs leading-6 text-slate-400">{note}</div>
    </div>
  );
}
