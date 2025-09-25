export default function AboutMeSection() {
  return (
    <section id="aboutme" className="container" style={{ padding: "2rem 1rem" }}>
      <h3 className="text-accent text-sm" style={{ letterSpacing: ".2em" }}>
        SOBRE MÍ
      </h3>

      <div style={{ marginTop: "1rem" }}>
        <p style={{ color: "var(--muted)", lineHeight: "1.6", marginBottom: "1rem" }}>
          Soy un estudiante de último año de Ingeniería Informática en la
          Universidad de A Coruña, apasionado por el desarrollo de software,las
          nuevas tecnologías y aspirante a profesional en ciberseguridad. 
        </p>
        <p style={{ color: "var(--muted)", lineHeight: "1.6", marginBottom: "1rem" }}>
          Me encanta aprender nuevas tecnologías y enfrentarme a
          desafíos técnicos que me permitan crecer profesionalmente.
        </p>
      </div>
    </section>
  );
}
