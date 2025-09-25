import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

export default function ProjectsSection() {
  return (
    <section id="proyectos" className="container" style={{ padding: "2rem 1rem" }}>
      <h3 className="text-accent text-sm" style={{ letterSpacing: ".2em" }}>
        PROYECTOS DESTACADOS
      </h3>

      <div className="grid grid-2 mt-4">
        {projects.map((p, i) => (
          <ProjectCard
            key={p.title}
            project={p}
            featured={i === 0}
            badge={i === 0 ? "Trabajo actual" : undefined}
          />
        ))}
      </div>
    </section>
  );
}
