import { type Project } from "../../data/projects";
import "./ProjectCard.css";

type Props = {
  project: Project;
  featured?: boolean;
  badge?: string;
};

export default function ProjectCard({ project, featured = false, badge }: Props) {
  return (
    <article className={`project-card ${featured ? "featured" : ""}`}>
      {badge && <span className="project-badge">{badge}</span>}

      <div className="flex items-center justify-between" style={{ alignItems: "flex-start" }}>
        <h4 className={`project-title ${featured ? "featured" : ""}`}>
          {project.title}
        </h4>

        <div className={`project-links ${badge ? "with-badge" : ""}`}>
          <a
            className="hover-underline text-accent"
            href={project.code}
            aria-label={`Código de ${project.title}`}
          >
            Código
          </a>
        </div>
      </div>

      <p className="project-desc">{project.desc}</p>

      <div className="project-tags">
        {project.tags.map((t) => (
          <span key={t} className="tag">
            {t}
          </span>
        ))}
      </div>
    </article>
  );
}
