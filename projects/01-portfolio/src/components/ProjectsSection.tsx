import { projects } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectsSection() {
  return (
    <section id="proyectos" className="mx-auto max-w-5xl px-6 py-24">
      <h2 className="text-3xl font-bold tracking-tight">Proyectos</h2>
      <p className="mt-2 text-neutral-600">
        Ocho sistemas de producción, cada uno resolviendo un problema de
        negocio real con arquitectura moderna.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}