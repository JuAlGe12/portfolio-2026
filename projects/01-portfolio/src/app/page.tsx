import ProjectsSection from "@/components/ProjectsSection";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center px-6 pt-20">
        <section className="max-w-3xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-neutral-500">
            Software Architect & AI Engineer
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Construyo sistemas, no solo pantallas.
          </h1>

          <p className="mt-6 text-lg text-neutral-600">
            Arquitecturas event-driven, agentes de IA autónomos y edge
            computing en producción. Nueve proyectos, un mismo estándar de
            ingeniería.
          </p>

          <div className="mt-10 flex items-center justify-center gap-4">
            <a
              href="#proyectos"
              className="rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-neutral-700"
            >
              Ver proyectos
            </a>
            <a
              href="#contacto"
              className="rounded-full border border-neutral-300 px-6 py-3 text-sm font-medium transition hover:border-neutral-500"
            >
              Contactar
            </a>
          </div>
        </section>
      </main>

      <ProjectsSection />
    </>
  );
}