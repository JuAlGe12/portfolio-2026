export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-neutral-200 bg-white/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="/" className="text-sm font-semibold tracking-tight">
          Tu Nombre
        </a>

        <div className="hidden items-center gap-8 text-sm text-neutral-600 sm:flex">
          <a href="#proyectos" className="transition hover:text-neutral-900">
            Proyectos
          </a>
          <a href="#stack" className="transition hover:text-neutral-900">
            Stack
          </a>
          <a href="#contacto" className="transition hover:text-neutral-900">
            Contacto
          </a>
        </div>

        <a
          href="#contacto"
          className="rounded-full bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-neutral-700"
        >
          Hablemos
        </a>
      </nav>
    </header>
  );
}