
export default function Section({
  id,
  kicker,
  title,
  description,
  children,
}: {
  id?: string;
  kicker: string;
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="relative mx-auto max-w-7xl px-5 py-20 md:px-8">
      <div className="mb-10 max-w-3xl">
        <p className="section-kicker">{kicker}</p>
        <h2 className="section-title mt-3">{title}</h2>
        {description ? (
          <p className="mt-4 text-sm leading-7 text-slate-300 md:text-base">{description}</p>
        ) : null}
      </div>
      {children}
    </section>
  );
}
