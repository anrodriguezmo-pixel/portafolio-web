import HexPattern from "./HexPattern";
import ScrollReveal from "./ScrollReveal";

export default function Manifesto() {
  return (
    <section id="manifiesto" className="relative bg-tinta text-crema py-28 md:py-36 overflow-hidden">
      <div className="absolute inset-0 opacity-40">
        <HexPattern id="manifiesto" color="#C8272D" opacity={0.5} />
      </div>

      <div className="relative max-w-3xl mx-auto px-6 md:px-10">
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-8">
            <span className="h-[3px] w-12 bg-rojo" />
            <span className="text-xs md:text-sm font-semibold tracking-[0.25em] text-crema/70">
              MANIFIESTO
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="font-display font-bold uppercase text-4xl md:text-6xl leading-[1.02] mb-8">
            Diseñar es tomar una decisión ética.
          </h2>
        </ScrollReveal>

        <div className="space-y-5 text-crema/80 text-lg leading-relaxed">
          <ScrollReveal delay={0.15}>
            <p>
              Cada objeto que llega al mundo ocupa espacio, consume recursos y genera consecuencia
              — y eso no es negociable.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p>
              En AR Estudio creemos en el diseño que trabaja: que resuelve sin sobrar, que dura sin
              explicarse, que automatiza sin deshumanizar.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.25}>
            <p className="text-crema font-medium">
              La sostenibilidad no es tendencia. Es el punto de partida.
              <br />
              El funcionalismo no es limitación. Es honestidad.
            </p>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.3}>
          <p className="mt-12 text-2xl md:text-3xl font-display font-bold text-rojo">
            Más diseño. Diseño con propósito.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
