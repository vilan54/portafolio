import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProjectsSection from "./sections/ProjectsSection";
import ExperienceSection from "./sections/ExperienceSection";
import ContactSection from "./sections/ContactSection";
import AboutMeSection from "./sections/AboutMeSection";

export default function App() {
  return (
    <div className="bg-neurolab" style={{minHeight: "80vh"}}>
      <Navbar />

      <Hero />

      <AboutMeSection />

      <ProjectsSection />

      <ExperienceSection />

      <ContactSection />
    </div>
  );
}
