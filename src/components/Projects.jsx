import { useRef, useState } from "react";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import ScrollReveal from "./ScrollReveal";
import { GlobalSpotlight, useMobileDetection } from "./GlowCard";

export default function Projects() {
  const [active, setActive] = useState(null);
  const gridRef = useRef(null);
  const isMobile = useMobileDetection();

  return (
    <section id="proyectos" className="relative bg-crema py-24 md:py-32">
      <GlobalSpotlight gridRef={gridRef} disableAnimations={isMobile} spotlightRadius={300} glowColor="200, 39, 45" />

      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-6">
            <span className="h-[3px] w-12 bg-rojo" />
            <span className="text-xs md:text-sm font-semibold tracking-[0.25em] text-tinta/60">
              SELECCIÓN
            </span>
          </div>
          <h2 className="font-display font-extrabold uppercase text-4xl md:text-6xl mb-3">
            Proyectos
          </h2>
          <p className="text-tinta/60 text-lg mb-14">Siete casos de diseño que trabaja</p>
        </ScrollReveal>

        <div ref={gridRef} className="glow-section grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <ProjectCard
              key={p.id}
              project={p}
              onOpen={setActive}
              delay={(i % 3) * 0.08}
              disableAnimations={isMobile}
            />
          ))}
        </div>
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}
