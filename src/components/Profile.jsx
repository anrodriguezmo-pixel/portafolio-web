import { Award, GraduationCap, Languages, Users, Wrench } from "lucide-react";
import GradientText from "./GradientText";
import ScrollReveal from "./ScrollReveal";

const HABILIDADES_BLANDAS = [
  "Trabajo en equipo",
  "Comunicación efectiva",
  "Gestión del tiempo",
  "Resolución de problemas",
  "Proactividad y entusiasmo",
  "Servicio al cliente",
];

const HABILIDADES_TECNICAS = [
  "Microsoft (Excel, Word, etc.)",
  "Diseño de proyectos",
  "SketchUp, Fusion y Figma",
  "AutoCAD y Canva",
  "Diseño y diagramación",
];

const IDIOMAS = [
  { idioma: "Español", nivel: "Nativo", valor: 100 },
  { idioma: "Inglés", nivel: "Intermedio", valor: 60 },
];

const CERTIFICADOS = [
  {
    titulo: "Curso de Diseño UX",
    institucion: "Coursera — Google",
    periodo: "2024 – 2025",
    estado: "En progreso",
  },
  {
    titulo: "Diseño de Productos Digitales Innovadores (UX/UI)",
    institucion: "Universidad de los Andes",
    periodo: "8 de abril de 2025",
    estado: "Finalizado",
  },
  {
    titulo: "Finanzas Personales",
    institucion: "Universidad Nacional de Colombia",
    periodo: "2 de diciembre de 2025",
    estado: "Finalizado",
  },
  {
    titulo: "Joyería",
    institucion: "Universidad Nacional de Colombia",
    periodo: "10 de diciembre de 2025",
    estado: "Finalizado",
  },
  {
    titulo: "Inglés intermedio",
    institucion: "C.C.B. School of Atlanta, Estados Unidos",
    periodo: "2018 – 2019",
    estado: "Finalizado",
  },
];

const EDUCACION = [
  {
    institucion: "Universidad Nacional de Colombia",
    titulo: "Diseñador Industrial",
    periodo: "2019 – 2026",
    promedio: "4.2",
  },
  {
    institucion: "Colegio Mayor de San Bartolomé",
    titulo: "Bachiller",
    periodo: "2015 – 2018",
    promedio: "4.5",
  },
];

export default function Profile() {
  return (
    <section id="perfil" className="relative bg-crema py-24 md:py-32 border-t border-tinta/10">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-6">
            <span className="h-[3px] w-12 bg-rojo" />
            <GradientText
              colors={["#C8272D", "#C4963A", "#C8272D"]}
              animationSpeed={4}
              className="text-xs md:text-sm font-semibold tracking-[0.25em]"
            >
              PERFIL
            </GradientText>
          </div>
          <h2 className="font-display font-extrabold uppercase text-4xl md:text-6xl mb-3">
            Formación y trayectoria
          </h2>
          <p className="text-tinta/60 text-lg mb-14 max-w-2xl">
            El perfil profesional, las habilidades y la formación detrás de cada proyecto.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          <ScrollReveal>
            <p className="text-tinta/70 text-lg leading-relaxed">
              Estudiante de los últimos semestres de Diseño Industrial en la Universidad Nacional de
              Colombia, con pasión por convertir ideas innovadoras en soluciones funcionales y
              sostenibles. Proactivo y resolutivo, destaco por mi capacidad para colaborar en equipos
              multidisciplinarios, resolver problemas complejos y aplicar herramientas de diseño para
              generar impacto real.
            </p>

            <div className="mt-10 grid sm:grid-cols-2 gap-5">
              <div className="bg-white/60 border border-tinta/10 rounded-2xl p-6">
                <div className="w-11 h-11 rounded-xl bg-rojo/10 flex items-center justify-center mb-4">
                  <Users className="text-rojo" size={22} />
                </div>
                <p className="font-display font-bold text-lg uppercase tracking-wide mb-2">
                  Habilidades blandas
                </p>
                <ul className="text-tinta/60 text-sm leading-relaxed space-y-1">
                  {HABILIDADES_BLANDAS.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </div>

              <div className="bg-white/60 border border-tinta/10 rounded-2xl p-6">
                <div className="w-11 h-11 rounded-xl bg-rojo/10 flex items-center justify-center mb-4">
                  <Wrench className="text-rojo" size={22} />
                </div>
                <p className="font-display font-bold text-lg uppercase tracking-wide mb-2">
                  Habilidades técnicas
                </p>
                <ul className="text-tinta/60 text-sm leading-relaxed space-y-1">
                  {HABILIDADES_TECNICAS.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-5 bg-white/60 border border-tinta/10 rounded-2xl p-6">
              <div className="w-11 h-11 rounded-xl bg-rojo/10 flex items-center justify-center mb-4">
                <Languages className="text-rojo" size={22} />
              </div>
              <p className="font-display font-bold text-lg uppercase tracking-wide mb-4">Idiomas</p>
              <div className="space-y-3">
                {IDIOMAS.map((idi) => (
                  <div key={idi.idioma}>
                    <div className="flex items-center justify-between text-sm mb-1.5">
                      <span className="font-semibold">{idi.idioma}</span>
                      <span className="text-tinta/50">{idi.nivel}</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-tinta/10 overflow-hidden">
                      <div className="h-full rounded-full bg-rojo" style={{ width: `${idi.valor}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="flex items-center gap-3 mb-5">
              <Award className="text-rojo" size={20} />
              <p className="font-display font-bold text-lg uppercase tracking-wide">
                Certificados y cursos
              </p>
            </div>
            <ul className="space-y-4">
              {CERTIFICADOS.map((c) => (
                <li key={c.titulo} className="border-b border-tinta/10 pb-4">
                  <p className="font-semibold">{c.titulo}</p>
                  <p className="text-tinta/60 text-sm">{c.institucion}</p>
                  <p className="text-tinta/40 text-xs mt-0.5">
                    {c.periodo} · {c.estado}
                  </p>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-3 mt-10 mb-5">
              <GraduationCap className="text-rojo" size={20} />
              <p className="font-display font-bold text-lg uppercase tracking-wide">Educación</p>
            </div>
            <ul className="space-y-4">
              {EDUCACION.map((e) => (
                <li key={e.institucion} className="border-b border-tinta/10 pb-4">
                  <p className="font-semibold">{e.institucion}</p>
                  <p className="text-tinta/60 text-sm">
                    {e.titulo} · {e.periodo}
                  </p>
                  <p className="text-tinta/40 text-xs mt-0.5">Promedio: {e.promedio}</p>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
