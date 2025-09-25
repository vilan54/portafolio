import TechList from "../TechList";

type HeroProps = {
  greeting?: string;
  name?: string;
  subtitle?: string;
  description?: string;
  ctaPrimaryHref?: string;
  ctaPrimaryLabel?: string;
  ctaSecondaryHref?: string;
  ctaSecondaryLabel?: string;
};

export default function Hero({
  greeting = "Hola, soy",
  name = "Pablo Vilán.",
  subtitle = "Construyo sistemas, APIs y homelabs ⚙️",
  description = "Estudiante de Ingeniería Informática (UDC) y creador de Neurolab — un homelab con VPN, observabilidad y automatización. Busco prácticas donde aportar en backend, DevOps o seguridad.",
  ctaPrimaryHref = "#contacto",
  ctaPrimaryLabel = "Hablemos",
}: HeroProps) {
  return (
    <section id="inicio" className="container" style={{ padding: "3rem 1rem 3rem", display: "flex", gap: "2rem", alignItems: "flex-start", flexWrap: "wrap", }}>
      <div style={{ flex: 2, minWidth: "280px" }}>
        <p className="text-accent">{greeting}</p>
        <h1 style={{ marginTop: ".5rem", fontSize: "3rem", fontWeight: 800 }}>{name}</h1>
        <h2 style={{ marginTop: ".75rem", fontSize: "1.5rem", color: "var(--muted)" }}>
          {subtitle}
        </h2>
        <p className="mt-6" style={{ maxWidth: 640, color: "var(--muted)" }}>
          {description.split("Neurolab").map((chunk, i, arr) =>
            i < arr.length - 1 ? (
              <span key={i}>
                {chunk}
                <span className="text-accent">Neurolab</span>
              </span>
            ) : (
              <span key={i}>{chunk}</span>
            )
          )}
        </p>
        <div className="mt-6" style={{ display: "flex", gap: "1rem" }}>
          <a href={ctaPrimaryHref} className="btn">{ctaPrimaryLabel}</a>
        </div>
      </div>

      <div style={{ flex: 1, minWidth: "240px" }}>
        <TechList />
      </div>

    </section>
  );
}
