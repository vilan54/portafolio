export default function TechList() {
  return (
    <div
      className="rounded-lg card"
      style={{ flex: 1, borderColor: "var(--stroke)" }}
    >
      <h4 style={{ marginTop: 0, marginBottom: "0.5rem", color: "var(--text)" }}>
        Tecnologías clave
      </h4>
      <ul style={{ listStyle: "none", padding: 0, margin: 0, color: "var(--muted)" }}>
        {[
          "Java · Spring Boot · Hibernate",
          "PostgreSQL · MySQL",
          "Python · FastAPI",
          "C · Elixir",
          "JavaScript · TypeScript · React",
          "JPA · REST APIs",
          "Docker · Compose",
          "Linux · Bash scripting",
          "WireGuard",
          "Nginx (NPM)",        
          "Grafana · Loki · Prometheus",
          "Git · CI/CD",
        ].map((t) => (
          <li key={t} style={{ marginBottom: ".5rem" }}>
            <span style={{ color: "var(--accent)", marginRight: "0.5rem" }}>▹</span>
            {t}
          </li>
        ))}
      </ul>
    </div>
  );
}
