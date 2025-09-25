export default function ContactSection() {
    return (
        <section id="contacto" className="container" style={{padding: "2rem 1rem 6rem", textAlign:"center"}}>
            <h3 className="text-accent text-sm" style={{letterSpacing: ".2em"}}>CONTACTO</h3>
            <h4 style={{marginTop: "1rem", fontSize:"1.75rem"}}>¿Hablamos de prácticas?</h4>
            <p className="mt-3" style={{maxWidth: 640, margin:"0 auto", color:"var(--muted)"}}>
              Estoy disponible para prácticas curriculares o extracurriculares. Escríbeme y te paso CV, disponibilidad y más detalles.
            </p>
            <div className="mt-6" style={{display:"flex", justifyContent:"center", gap:"1rem"}}>
              <a href="mailto:pablovilan54@gmail.com" className="btn">Enviar email</a>
              <a href="https://www.linkedin.com/in/pablo-vilan" className="hover-underline text-accent">LinkedIn</a>
              <a href="https://github.com/vilan54" className="hover-underline text-accent">GitHub</a>
            </div>
            <p className="mt-6 text-sm text-muted">© {new Date().getFullYear()} Pablo Vilán</p>
        </section>
    );
}