import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Navbar() {
  return (
    <header className="navbar">
      <nav className="container flex items-center justify-between py-3">
        <a href="#inicio" className="brand">
          &lt;PabloVilan /&gt;
        </a>

        <div style={{ display: "flex", gap: "1rem", fontSize: "2rem" }}>
          <a
            href="https://www.linkedin.com/in/pablo-vilan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover-underline"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/vilan54"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover-underline"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:pablovilan54@gmail.com"
            className="text-accent hover-underline"
            aria-label="Correo electrónico"
          >
            <FaEnvelope />
          </a>
        </div>
      </nav>
    </header>
  );
}
