import { useEffect, useState } from "react";
import Navbar from "./components/navigation/navbar";
import "./index.css";
import About from "./sections/aboutMe";
import Projects from "./sections/projects";
import Contact from "./sections/contact";
import SectionPagination from "./components/custom/sectionPagination";
import { scroller } from "react-scroll";
import ActiveSectionTitle from "./components/custom/sectionTitle";
import Skills from "./sections/skills";
import BackgroundCanvas from "@/components/custom/background";

function App() {
  const sections = ["about", "projects", "skills", "contact"];
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const pageYOffset = window.pageYOffset;
      const viewportHeight = window.innerHeight;
      const scrollMidpoint = pageYOffset + viewportHeight / 2;
      let currentSection = 0;
      let maxVisibility = 0;

      sections.forEach((section, index) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + window.pageYOffset;
          const elementBottom = elementTop + rect.height;
          const visibleTop = Math.max(elementTop, pageYOffset);
          const visibleBottom = Math.min(
            elementBottom,
            pageYOffset + viewportHeight
          );
          const visibleHeight = Math.max(0, visibleBottom - visibleTop);
          if (visibleHeight > maxVisibility) {
            maxVisibility = visibleHeight;
            currentSection = index;
          }
          const sectionMidpoint = elementTop + rect.height / 2;
          if (
            Math.abs(scrollMidpoint - sectionMidpoint) <
            viewportHeight * 0.25
          ) {
            currentSection = index;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    setTimeout(handleScroll, 100);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sections]);

  const getSectionTitle = (section: string) => {
    const titles: { [key: string]: string } = {
      about: "About Me",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact",
    };
    return titles[section];
  };

  const scrollToSection = (index: number) => {
    const targetSection = sections[index];
    scroller.scrollTo(targetSection, {
      duration: 800,
      smooth: true,
      offset: -80,
      spy: true,
    });
  };

  return (
    <div className="relative">
      <BackgroundCanvas />
      <Navbar activeSection={activeSection} onSetActive={setActiveSection} />
      <ActiveSectionTitle title={getSectionTitle(sections[activeSection])} />
      <div className="pt-16">
        <section id="about" className="min-h-screen">
          <About isActive={activeSection === 0} />
        </section>
        <section id="projects" className="min-h-screen">
          <Projects isActive={activeSection === 1} />
        </section>
        <section id="skills" className="min-h-screen">
          <Skills isActive={activeSection === 2} />
        </section>
        <section id="contact" className="min-h-screen">
          <Contact isActive={activeSection === 3} />
        </section>
      </div>
      <SectionPagination
        activeSection={activeSection}
        onDotClick={scrollToSection}
        totalSections={sections.length}
      />
    </div>
  );
}

export default App;
