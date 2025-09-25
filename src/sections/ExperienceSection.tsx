export default function ExperienceSection() {
  return (
    <section id="experiencia" className="container" style={{ padding: "2rem 1rem" }}>
      <h3 className="text-accent text-sm" style={{ letterSpacing: ".2em" }}>
        EXPERIENCIA
      </h3>

      <div className="card mt-4">
        <h4 style={{ margin: 0 }}>Universidad de A Coruña · UDC</h4>
        <p className="text-sm text-muted">
          Grado en Ingeniería Informática (Especialidad en Ingeniería Software) — Último año
        </p>
        <ul className="mt-3" style={{ color: "var(--text)" }}>
          <li>
            Desarrollo de proyectos académicos y personales utilizando <b>Spring Boot</b> para la lógica de negocio, 
            <b> bases de datos relacionales</b> para la persistencia de datos y <b>React</b> en la capa de interfaz.
          </li>
          <li>
            Experiencia práctica en el uso de múltiples tecnologías: 
            <b>C# y ASP.NET</b> para el desarrollo web, además de <b>HTML, CSS, JavaScript</b> y <b>TypeScript </b> 
             para construir aplicaciones dinámicas y modernas.
          </li>
          <li>
            Familiaridad con metodologías ágiles de gestión de proyectos, 
            aplicando <b>Kanban</b> y <b>Scrum</b> para organizar tareas, 
            priorizar entregables y fomentar el trabajo en equipo.
          </li>

        </ul>
      </div>
      <div className="card mt-4">
        <h4 style={{ margin: 0 }}>Universidad de A Coruña · UDC</h4>
        <p className="text-sm text-muted">
          Curso en CNTG de CCNP ENCOR (350-401) — 2025
        </p>
        <ul className="mt-3" style={{ color: "var(--text)" }}>
          <li>Implementación y configuración avanzada de routing y switching.</li>
          <li>Diseño y administración de redes empresariales escalables y seguras.</li>
          <li>Virtualización de funciones de red (NFV) y conceptos de SDN (Software-Defined Networking).</li>
          <li>Automatización y programabilidad de redes con Python y APIs.</li>
          <li>Seguridad en redes: control de acceso, políticas y segmentación.</li>
          <li>Monitorización y troubleshooting de infraestructuras LAN, WAN y Wireless.</li>
        </ul>
      </div>
    </section>
  );
}
