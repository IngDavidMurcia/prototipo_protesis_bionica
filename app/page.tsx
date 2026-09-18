
import Image from "next/image";
import Link from "next/link";
import Section from "@/components/Section";
import Particles from "@/components/Particles";
import MetricCard from "@/components/MetricCard";
import GalleryCard from "@/components/GalleryCard";
import AbstractChart from "@/components/AbstractChart";
import Timeline from "@/components/Timeline";
import { activities, evidenceGallery, project, roadmap, selectedMediaGuide } from "@/data/content";

export default function HomePage() {
  return (
    <main className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-grid bg-[size:38px_38px] opacity-[0.06]" />
      <div className="absolute inset-0">
        <Particles />
      </div>

      <header className="relative z-10 mx-auto max-w-7xl px-5 pt-6 md:px-8">
        <div className="glass flex flex-col justify-between gap-4 rounded-2xl px-5 py-4 md:flex-row md:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-cyan-300/80">Semillero SITAI · SENA</p>
            <h1 className="mt-1 text-sm text-slate-200 md:text-base">Prótesis Biónicas · Micrositio del proyecto</h1>
          </div>
          <nav className="flex flex-wrap gap-2 text-xs md:text-sm">
            <a href="#estado" className="chip">Estado actual</a>
            <a href="#ruta" className="chip">Ruta tecnológica</a>
            <a href="#evidencias" className="chip">Evidencias</a>
            <a href="#metodologia" className="chip">Metodología</a>
            <a href="#documentos" className="chip">Documentos</a>
          </nav>
        </div>
      </header>

      <section className="relative z-10 mx-auto max-w-7xl px-5 pb-16 pt-14 md:px-8 md:pb-24 md:pt-24">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="animate-fadeUp">
            <div className="mb-5 flex flex-wrap gap-2">
              <span className="chip">{project.status.trlCurrent}</span>
              <span className="chip">{project.status.trlTarget}</span>
              <span className="chip">{project.status.currentVersion}</span>
            </div>
            <p className="section-kicker">Innovación médica · ingeniería experimental</p>
            <h2 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-white md:text-6xl">
              {project.title}
            </h2>
            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
              {project.statement}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/docs/Resumen_Ejecutivo_Brazo_Bionico_2026_v3.0.docx"
                className="rounded-full bg-cyan-300 px-5 py-3 text-sm font-medium text-slate-950 transition hover:bg-cyan-200"
              >
                Descargar resumen ejecutivo
              </a>
              <a
                href="#evidencias"
                className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
              >
                Explorar evidencias
              </a>
            </div>
            <div className="mt-8 grid gap-3 md:grid-cols-2">
              {project.priorities.map((item) => (
                <div key={item} className="glass rounded-2xl px-4 py-3 text-sm text-slate-200">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="animate-fadeUp rounded-[2rem]">
            <div className="glass glow-border scanline relative overflow-hidden rounded-[2rem] p-4">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cyan-300/10 blur-3xl" />
              <div className="absolute -left-8 bottom-0 h-32 w-32 rounded-full bg-violet-400/10 blur-3xl" />
              <div className="relative overflow-hidden rounded-[1.5rem]">
                <Image
                  src="/media/v1-prototipo-01.jpeg"
                  alt="Prototipo V1"
                  width={900}
                  height={900}
                  className="h-[380px] w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/90 via-slate-950/10 to-cyan-400/10" />
                <div className="absolute left-5 right-5 top-5 flex justify-between gap-3">
                  <div className="glass rounded-2xl px-4 py-3 text-xs text-slate-200">V1 · mecánico pasivo</div>
                  <div className="glass rounded-2xl px-4 py-3 text-xs text-slate-200">Seguimiento TRL 2 → 3</div>
                </div>
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="glass rounded-3xl p-4">
                    <p className="text-xs uppercase tracking-[0.3em] text-cyan-300/80">Estado visible</p>
                    <h3 className="mt-2 text-lg font-semibold text-white">
                      Evidencia física, reorganización documental y nueva fabricación controlada
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      El prototipo histórico se conserva como antecedente técnico. La evidencia reproducible
                      comienza con la nueva campaña de fabricación y verificación.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section
        id="estado"
        kicker="Estado actual"
        title="Madurez tecnológica con foco en rigor y reproducibilidad"
        description="El proyecto se encuentra en TRL 2 consolidado y orienta su trabajo inmediato al cierre de evidencias para TRL 3. La meta no es comunicar prematuramente una prótesis clínica, sino demostrar viabilidad técnica mediante una prueba de concepto mecánica reproducible."
      >
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {project.highlights.map((item) => (
            <MetricCard key={item.label} value={item.value} label={item.label} note={item.note} />
          ))}
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="glass glow-border rounded-3xl p-6">
            <p className="section-kicker">Declaración técnica</p>
            <h3 className="mt-3 text-2xl font-semibold text-white">Nota sobre propiedad intelectual y origen formativo del V1</h3>
            <p className="mt-4 text-sm leading-7 text-slate-300 md:text-base">
              {project.summaryNote}
            </p>
          </div>
          <AbstractChart />
        </div>
      </Section>

      <Section
        id="ruta"
        kicker="Ruta tecnológica"
        title="Desarrollo progresivo por versiones"
        description="La arquitectura del proyecto evita saltos tecnológicos prematuros. Cada versión añade complejidad solo después de alcanzar evidencia suficiente en la capa anterior."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {roadmap.map((step, index) => (
            <div key={step.id} className="glass glow-border rounded-3xl p-6">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.28em] text-cyan-300/80">
                  Fase {index + 1}
                </span>
                <span className="chip">{step.trl}</span>
              </div>
              <h3 className="text-2xl font-semibold text-white">{step.name}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">{step.description}</p>
              <div className="mt-5 text-sm font-medium text-cyan-200">{step.status}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section
        kicker="Trazabilidad"
        title="Trayectoria del proyecto"
        description="La formalización actual no borra el pasado: lo reubica. Se reconocen antecedentes formativos, inicio técnico, consolidación documental y el siguiente hito de validación."
      >
        <Timeline />
      </Section>

      <Section
        kicker="Plan inmediato"
        title="Prioridades para cerrar TRL 3"
        description="Las actividades A1–A6 concentran el trabajo operativo del corto plazo y sirven como puente entre el V1 histórico y la próxima configuración reproducible."
      >
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {activities.map((item) => (
            <div key={item.code} className="glass rounded-3xl p-5">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-sm font-semibold text-cyan-200">{item.code}</span>
                <span className="chip">{item.state}</span>
              </div>
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
            </div>
          ))}
        </div>
      </Section>

      <Section
        id="evidencias"
        kicker="Evidencias visuales"
        title="Prototipos, modelado y proceso"
        description="Galería base para divulgación técnica. Sustituye el envío disperso de archivos y permite comunicar visualmente el avance del proyecto."
      >
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {evidenceGallery.map((item) => (
            <GalleryCard
              key={item.title}
              src={item.file}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </Section>

      <Section
        id="metodologia"
        kicker="Metodología"
        title="Cómo trabaja el proyecto"
        description="El sistema documental y experimental se diseñó para minimizar fricción sin perder rigor: una sola ruta de trazabilidad, evidencia mínima suficiente y ensayos orientados a decisión."
      >
        <div className="grid gap-6 lg:grid-cols-4">
          {[
            ["1", "Definición", "Requisitos, alcance y criterio de aceptación por versión."],
            ["2", "Diseño", "CAD, archivos técnicos, revisión y selección de componentes."],
            ["3", "Fabricación", "Impresión, configuración, control de material y piezas físicas."],
            ["4", "Verificación", "Ensayo, observación de fallos, análisis y decisión."],
          ].map(([n, t, d]) => (
            <div key={n} className="glass rounded-3xl p-6">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-cyan-300/25 bg-cyan-300/10 text-cyan-200">
                {n}
              </div>
              <h3 className="text-lg font-semibold text-white">{t}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        kicker="Impacto"
        title="Formación, transferencia y continuidad"
        description="El proyecto no solo busca un resultado tecnológico. También crea capacidades en diseño, documentación, fabricación, verificación y pensamiento ingenieril dentro del semillero."
      >
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="glass rounded-3xl p-6">
            <ul className="space-y-4 text-sm leading-7 text-slate-300">
              <li>• Integra laboratorios de diseño y prototipado 3D, electrónica, robótica, TIC e inteligencia artificial.</li>
              <li>• Reduce pérdida de conocimiento causada por rotación de aprendices mediante trazabilidad y nueva arquitectura documental.</li>
              <li>• Facilita reportes rápidos para la dependencia de investigación y soporta divulgación institucional con evidencia visual.</li>
              <li>• Crea una base más sólida para futuras versiones V2 y V3, evitando sobredimensionar resultados actuales.</li>
            </ul>
          </div>
          <div className="glass rounded-3xl p-6">
            <p className="section-kicker">Comunicación responsable</p>
            <h3 className="mt-3 text-2xl font-semibold text-white">Qué sí y qué no se debe comunicar</h3>
            <div className="mt-5 space-y-4">
              <div className="rounded-2xl border border-emerald-300/20 bg-emerald-300/10 p-4">
                <p className="text-sm font-medium text-emerald-200">Sí comunicar</p>
                <p className="mt-2 text-sm leading-6 text-slate-200">
                  TRL 2 consolidado, reproducción controlada del V1, cierre de evidencias TRL 3, formación de aprendices y ruta V1–V3.
                </p>
              </div>
              <div className="rounded-2xl border border-rose-300/20 bg-rose-300/10 p-4">
                <p className="text-sm font-medium text-rose-200">No comunicar como resultado logrado</p>
                <p className="mt-2 text-sm leading-6 text-slate-200">
                  Prótesis clínica funcional, control EMG operativo, IA integrada, validación con usuarios o resultados de impacto en salud.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section
        id="documentos"
        kicker="Documentos y despliegue"
        title="Activos listos para compartir"
        description="Este micrositio puede acompañarse con un resumen ejecutivo breve, una carpeta curada de evidencias y capturas del tablero si una auditoría requiere mostrar la gestión operativa."
      >
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="glass rounded-3xl p-6">
            <h3 className="text-xl font-semibold text-white">Documentos sugeridos</h3>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-300">
              <li>• Resumen ejecutivo actualizado (2 páginas).</li>
              <li>• Documento maestro del proyecto.</li>
              <li>• Protocolo general de trazabilidad, fabricación y evidencia.</li>
              <li>• Captura seleccionada del tablero, solo si se requiere soporte de gestión.</li>
            </ul>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="/docs/Resumen_Ejecutivo_Brazo_Bionico_2026_v3.0.docx"
                className="rounded-full bg-cyan-300 px-5 py-3 text-sm font-medium text-slate-950 transition hover:bg-cyan-200"
              >
                Descargar resumen
              </a>
              <a
                href="mailto:davidmurcia001@gmail.com"
                className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
              >
                Contacto del proyecto
              </a>
            </div>
          </div>

          <div className="glass rounded-3xl p-6">
            <h3 className="text-xl font-semibold text-white">Imágenes a copiar al sitio</h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              Coloca los archivos seleccionados en <code className="rounded bg-white/10 px-2 py-1 text-cyan-200">public/media</code>
              usando exactamente estos nombres para que la web los tome automáticamente.
            </p>
            <div className="mt-4 max-h-80 space-y-3 overflow-auto pr-2 text-sm">
              {selectedMediaGuide.map((item) => (
                <div key={item.targetName} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="font-medium text-cyan-200">{item.targetName}</div>
                  <div className="mt-2 text-slate-300">{item.sourceSuggestion}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <footer className="relative z-10 mx-auto max-w-7xl px-5 pb-12 md:px-8">
        <div className="glass rounded-3xl px-6 py-8 text-sm text-slate-300">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-cyan-300/80">Prótesis Biónicas · SITAI</p>
              <p className="mt-2 max-w-3xl leading-7">
                Micrositio informativo para divulgación técnica, seguimiento institucional y socialización de avances del proyecto.
              </p>
            </div>
            <div className="text-xs leading-6 text-slate-400">
              Última actualización sugerida: septiembre de 2026<br />
              Ruta actual del proyecto: PROYECTOS_SEMILLERO/Protesis_bionicas
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
