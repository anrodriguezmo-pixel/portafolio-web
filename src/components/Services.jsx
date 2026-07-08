import MagicBento from "./MagicBento";
import ScrollReveal from "./ScrollReveal";

export default function Services() {
  return (
    <section id="servicios" className="relative bg-tinta py-24 md:py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-6">
            <span className="h-[3px] w-12 bg-rojo" />
            <span className="text-xs md:text-sm font-semibold tracking-[0.25em] text-crema/60">
              SERVICIOS
            </span>
          </div>
          <h2 className="font-display font-extrabold uppercase text-4xl md:text-6xl text-crema mb-3">
            En qué trabajamos
          </h2>
          <p className="text-crema/60 text-lg mb-14 max-w-2xl">
            Seis frentes de trabajo, un mismo principio: diseño que resuelve sin sobrar.
          </p>
        </ScrollReveal>
      </div>

      <ScrollReveal delay={0.1}>
        <MagicBento
          textAutoHide={true}
          enableStars={true}
          enableSpotlight={true}
          enableBorderGlow={true}
          enableTilt={true}
          enableMagnetism={true}
          clickEffect={true}
          spotlightRadius={300}
          particleCount={8}
          glowColor="200, 39, 45"
        />
      </ScrollReveal>
    </section>
  );
}
