import Ferrofluid from "./Ferrofluid";
import GradientText from "./GradientText";
import ScrollReveal from "./ScrollReveal";

const SERVICIOS = [
  {
    label: "3D",
    titulo: "Visualización 3D",
    texto: "Modelado paramétrico y renders de alta fidelidad para validar cada producto.",
  },
  {
    label: "Prototipado",
    titulo: "Prototipado",
    texto: "Modelos físicos y prototipos funcionales a escala.",
  },
  {
    label: "Producto",
    titulo: "Diseño de producto",
    texto:
      "Desarrollo integral desde el concepto hasta el prototipo de alta fidelidad, con rigor técnico y libertad formal.",
  },
  {
    label: "Sostenibilidad",
    titulo: "Ecodiseño",
    texto:
      "La sostenibilidad no es tendencia, es el punto de partida: ciclo de vida y materiales conscientes desde el origen.",
  },
  {
    label: "Comunicación",
    titulo: "Comunicación visual",
    texto: "Piezas gráficas y sistemas de información claros y honestos.",
  },
  {
    label: "Branding",
    titulo: "Identidad de marca",
    texto: "Sistemas de identidad coherentes, del isotipo al manual de marca.",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="relative bg-tinta py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-70">
        <Ferrofluid
          colors={["#C8272D", "#C4963A", "#8A7F72"]}
          speed={0.35}
          scale={1.8}
          turbulence={0.8}
          fluidity={0.15}
          rimWidth={0.22}
          sharpness={3}
          shimmer={0.8}
          glow={1.6}
          flowDirection="up"
          opacity={0.9}
          mouseInteraction={true}
          mouseStrength={1}
          mouseRadius={0.3}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 md:px-10">
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-6">
            <span className="h-[3px] w-12 bg-rojo" />
            <GradientText
              colors={["#C8272D", "#C4963A", "#C8272D"]}
              animationSpeed={4}
              className="text-xs md:text-sm font-semibold tracking-[0.25em]"
            >
              SERVICIOS
            </GradientText>
          </div>
          <h2 className="font-display font-extrabold uppercase text-4xl md:text-6xl text-crema mb-3">
            En qué trabajamos
          </h2>
          <p className="text-crema/60 text-lg mb-14 max-w-2xl">
            Seis frentes de trabajo, un mismo principio: diseño que resuelve sin sobrar.
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICIOS.map((s, i) => (
            <ScrollReveal key={s.titulo} delay={(i % 3) * 0.08}>
              <div className="h-full bg-crema/5 border border-crema/10 rounded-2xl p-6 hover:border-rojo/40 transition-colors duration-300">
                <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-rojo/85 mb-3">
                  {s.label}
                </p>
                <p className="font-display font-bold text-xl uppercase tracking-wide text-crema mb-2">
                  {s.titulo}
                </p>
                <p className="text-crema/60 text-sm leading-relaxed">{s.texto}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
