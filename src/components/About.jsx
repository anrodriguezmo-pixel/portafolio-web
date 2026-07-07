import { Cog, Compass, Layers, Lightbulb } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const VALUES = [
  {
    icon: Cog,
    titulo: "Pragmatismo",
    texto: "Búsqueda de la forma más eficiente de pensar y diseñar.",
  },
  {
    icon: Compass,
    titulo: "Autonomía",
    texto: "Independencia creativa y rigor técnico absoluto.",
  },
  {
    icon: Layers,
    titulo: "Versatilidad",
    texto: "Diversidad técnica: visual, funcional e innovación.",
  },
  {
    icon: Lightbulb,
    titulo: "Creatividad",
    texto: "Ideas disruptivas conectadas a la realidad material.",
  },
];

const SERVICIOS = [
  "Diseño de producto",
  "Modelado paramétrico y visualización 3D",
  "Prototipado y modelos a escala",
  "Ecodiseño",
  "Diseño de información y comunicación visual",
  "Identidad de marca",
];

export default function About() {
  return (
    <section id="estudio" className="relative bg-crema py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-6">
            <span className="h-[3px] w-12 bg-rojo" />
            <span className="text-xs md:text-sm font-semibold tracking-[0.25em] text-tinta/60">
              EL ESTUDIO
            </span>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          <ScrollReveal>
            <p className="text-2xl md:text-3xl font-medium leading-snug">
              AR Estudio es la práctica de diseño industrial de{" "}
              <span className="font-display font-bold text-rojo">Andrés Esteban Rodríguez Monroy</span>,
              formado en la Universidad Nacional de Colombia.
            </p>
            <p className="mt-6 text-tinta/70 text-lg leading-relaxed">
              El estudio desarrolla productos, sistemas y piezas de comunicación bajo un principio
              único: la máxima eficiencia estructural con la mínima huella material. Cada proyecto
              se construye desde el rigor técnico del dibujo isométrico y se resuelve con la
              libertad de la experimentación formal.
            </p>

            <div className="mt-10">
              <p className="text-xs font-semibold tracking-[0.2em] text-rojo mb-3">SERVICIOS</p>
              <ul className="flex flex-wrap gap-x-2 gap-y-2 text-sm">
                {SERVICIOS.map((s, i) => (
                  <li key={s} className="flex items-center">
                    <span className="px-3 py-1.5 rounded-full border border-tinta/15 text-tinta/80">
                      {s}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm italic text-tinta/50">
                Proyectos desarrollados entre la academia, la experimentación material y el encargo
                real.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 gap-5">
            {VALUES.map((v, i) => (
              <ScrollReveal key={v.titulo} delay={i * 0.08}>
                <div className="group bg-white/60 border border-tinta/10 rounded-2xl p-6 h-full hover:border-rojo/40 hover:-translate-y-1 transition-all duration-300 hover:shadow-lg hover:shadow-rojo/5">
                  <div className="w-11 h-11 rounded-xl bg-rojo/10 flex items-center justify-center mb-4 group-hover:bg-rojo transition-colors duration-300">
                    <v.icon className="text-rojo group-hover:text-crema transition-colors duration-300" size={22} />
                  </div>
                  <p className="font-display font-bold text-lg uppercase tracking-wide">{v.titulo}</p>
                  <p className="text-tinta/60 text-sm mt-1.5 leading-relaxed">{v.texto}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
