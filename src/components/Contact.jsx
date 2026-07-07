import { Mail, Phone, MapPin } from "lucide-react";
import HexPattern from "./HexPattern";
import ScrollReveal from "./ScrollReveal";
import logoFull from "../assets/img/logo-full.webp";

export default function Contact() {
  return (
    <footer id="contacto" className="relative bg-tinta text-crema pt-24 pb-10 overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <HexPattern id="contact" color="#C8272D" opacity={0.5} />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 md:px-10 text-center">
        <ScrollReveal>
          <span className="inline-block h-[3px] w-16 bg-rojo mb-8" />
          <h2 className="font-display font-extrabold uppercase text-4xl md:text-6xl">
            Trabajemos juntos.
          </h2>
          <p className="text-crema/60 text-lg mt-4">
            Diseño que trabaja — desde la idea hasta el prototipo.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:anrodriguezmo@unal.edu.co"
              className="group inline-flex items-center gap-2.5 rounded-full bg-rojo text-crema font-semibold px-6 py-3.5 hover:bg-crema hover:text-rojo transition-colors"
            >
              <Mail size={18} />
              anrodriguezmo@unal.edu.co
            </a>
            <a
              href="https://wa.me/573192477831"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2.5 rounded-full border border-crema/25 font-semibold px-6 py-3.5 hover:border-crema/60 transition-colors"
            >
              <Phone size={18} />
              +57 319 247 7831
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.25}>
          <div className="mt-16 pt-10 border-t border-crema/10 flex flex-col md:flex-row items-center justify-between gap-6 text-left">
            <div className="flex items-center gap-3">
              <img src={logoFull} alt="AR Estudio" className="h-12 w-auto" />
            </div>
            <div className="text-sm text-crema/60 md:text-right">
              <p className="font-semibold text-crema">Andrés Esteban Rodríguez Monroy</p>
              <p>Diseñador industrial — Universidad Nacional de Colombia</p>
              <p className="flex items-center gap-1.5 md:justify-end mt-1">
                <MapPin size={14} /> Bogotá, Colombia
              </p>
            </div>
          </div>
        </ScrollReveal>

        <p className="mt-10 text-xs text-crema/30">
          AR Estudio — Portafolio {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
