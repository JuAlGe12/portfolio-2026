export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-200 px-6 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 text-sm text-neutral-500 sm:flex-row">
        <p>© {currentYear} Carlos Julián Albín Gener44. Todos los derechos reservados.</p>
        <p>Construido con Next.js 15 y desplegado en Vercel.</p>
      </div>
    </footer>
  );
}