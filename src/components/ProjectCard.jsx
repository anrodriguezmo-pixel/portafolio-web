import { ArrowUpRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { ParticleCard } from "./GlowCard";

export default function ProjectCard({ project, onOpen, delay = 0, disableAnimations = false }) {
  return (
    <ScrollReveal delay={delay} className="h-full">
      <ParticleCard
        className="group h-full flex flex-col bg-white/60 rounded-2xl border border-tinta/10 hover:border-rojo/40 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-tinta/10"
        disableAnimations={disableAnimations}
        particleCount={6}
        enableTilt={true}
        enableMagnetism={true}
        clickEffect={true}
      >
        <button onClick={() => onOpen(project)} className="text-left w-full h-full flex flex-col flex-1">
          <div className="relative aspect-[4/3] overflow-hidden bg-tinta/5">
            <img
              src={project.hero.src}
              alt={project.hero.alt}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-tinta/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="absolute top-4 left-4 font-display font-extrabold text-4xl text-crema drop-shadow-md">
              {project.numero}
            </span>
            <span className="absolute top-4 right-4 w-9 h-9 rounded-full bg-crema/90 flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300">
              <ArrowUpRight size={18} className="text-rojo" />
            </span>
          </div>

          <div className="p-6 flex flex-col flex-1">
            <h3 className="font-display font-bold uppercase text-xl tracking-wide group-hover:text-rojo transition-colors">
              {project.titulo}
            </h3>
            <p className="text-tinta/60 text-sm mt-1.5">{project.subtitulo}</p>

            <div className="flex flex-wrap gap-1.5 mt-auto pt-4">
              {project.tags.slice(0, 3).map((t) => (
                <span
                  key={t}
                  className="text-[11px] font-semibold tracking-wide uppercase text-rojo/80 bg-rojo/8 px-2.5 py-1 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </button>
      </ParticleCard>
    </ScrollReveal>
  );
}
