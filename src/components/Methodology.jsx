import { Eye, Share2, Wand2, FlaskConical } from "lucide-react";
import GradientText from "./GradientText";
import ScrollReveal from "./ScrollReveal";

const PASOS = [
  {
    n: "01",
    icon: Eye,
    titulo: "Sentir",
    texto: "Inspección empírica de entornos desordenados y puntos críticos de falla material.",
  },
  {
    n: "02",
    icon: Share2,
    titulo: "Conectar",
    texto: "Traducción de variables funcionales a sistemas lógicos y diagramas de flujo físico.",
  },
  {
    n: "03",
    icon: Wand2,
    titulo: "Transformar",
    texto: "Modelado paramétrico, iteraciones isométricas tridimensionales y optimización.",
  },
  {
    n: "04",
    icon: FlaskConical,
    titulo: "Proyectar",
    texto: "Pruebas de resistencia material y mecanizado final del prototipo de alta fidelidad.",
  },
];

export default function Methodology() {
  return (
    <section id="metodologia" className="relative bg-white/50 py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-6">
            <span className="h-[3px] w-12 bg-rojo" />
            <GradientText
              colors={["#C8272D", "#C4963A", "#C8272D"]}
              animationSpeed={4}
              className="text-xs md:text-sm font-semibold tracking-[0.25em]"
            >
              METODOLOGÍA OPERATIVA
            </GradientText>
          </div>
          <p className="max-w-2xl text-tinta/70 text-lg leading-relaxed mb-16">
            Cuatro fases que convierten un entorno problemático en un producto de alta fidelidad.
            El proceso es transparente para el cliente: cada fase entrega evidencia verificable.
          </p>
        </ScrollReveal>

        <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          <div className="hidden lg:block absolute top-[26px] left-[12.5%] right-[12.5%] h-px bg-tinta/15" />
          {PASOS.map((p, i) => (
            <ScrollReveal key={p.n} delay={i * 0.1}>
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="relative z-10 w-[52px] h-[52px] rounded-full bg-crema border-2 border-rojo flex items-center justify-center">
                    <p.icon className="text-rojo" size={22} />
                  </div>
                  <span className="font-display font-extrabold text-3xl text-tinta/15">{p.n}</span>
                </div>
                <p className="font-display font-bold uppercase text-xl tracking-wide">{p.titulo}</p>
                <p className="text-tinta/60 text-sm mt-2 leading-relaxed">{p.texto}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <ScrollReveal delay={0.2}>
        <div className="mt-20 bg-tinta text-crema py-10 px-6 text-center">
          <p className="text-xl md:text-2xl font-semibold">Formas que argumentan por sí mismas.</p>
          <p className="text-crema/60 mt-2">Objetos que aportan antes de que alguien les pregunte para qué sirven.</p>
        </div>
      </ScrollReveal>
    </section>
  );
}
