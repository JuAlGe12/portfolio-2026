export default function ContactSection() {
  return (
    <section
      id="contacto"
      className="mx-auto max-w-3xl px-6 py-24 text-center"
    >
      <h2 className="text-3xl font-bold tracking-tight">
        ¿Construimos algo juntos?
      </h2>
      <p className="mt-4 text-neutral-600">
        Disponible para roles Senior/Staff remotos y proyectos de
        automatización con IA para empresas.
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <a
          href="mailto:carlosjulianalbingener@gmail.com"
          className="rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-neutral-700"
        >
          Enviar email
        </a>
        <a
          href="https://www.linkedin.com/in/carlos-julian-albin-gener-1222b7353/"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-neutral-300 px-6 py-3 text-sm font-medium transition hover:border-neutral-500"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/JuAlGe12"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-neutral-300 px-6 py-3 text-sm font-medium transition hover:border-neutral-500"
        >
          GitHub
        </a>
      </div>
    </section>
  );
}