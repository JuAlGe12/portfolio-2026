import type { Project } from "@/lib/projects";

const statusLabel: Record<Project["status"], string> = {
  planned: "Próximamente",
  "in-progress": "En construcción",
  done: "Completado",
};

const statusColor: Record<Project["status"], string> = {
  planned: "bg-neutral-100 text-neutral-500",
  "in-progress": "bg-amber-100 text-amber-700",
  done: "bg-emerald-100 text-emerald-700",
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex flex-col rounded-2xl border border-neutral-200 p-6 transition hover:border-neutral-400">
      <span
        className={`mb-4 w-fit rounded-full px-3 py-1 text-xs font-medium ${
          statusColor[project.status]
        }`}
      >
        {statusLabel[project.status]}
      </span>

      <h3 className="text-lg font-semibold">{project.title}</h3>
      <p className="mt-2 text-sm text-neutral-600">{project.tagline}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-md bg-neutral-100 px-2 py-1 text-xs text-neutral-700"
          >
            {tech}
          </span>
        ))}
      </div>
    </article>
  );
}