import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logoIcon from "../assets/img/logo-icon.webp";

const LINKS = [
  { href: "#estudio", label: "Estudio" },
  { href: "#perfil", label: "Perfil" },
  { href: "#servicios", label: "Servicios" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const h = document.documentElement;
      const scrollable = h.scrollHeight - h.clientHeight;
      setProgress(scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-crema/90 backdrop-blur-md shadow-[0_1px_0_0_rgba(26,26,26,0.08)]" : "bg-transparent"
      }`}
    >
      <div className="h-[3px] bg-rojo/10">
        <div className="h-full bg-rojo transition-[width] duration-150" style={{ width: `${progress}%` }} />
      </div>

      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 md:px-10 py-4">
        <a href="#top" className="flex items-center gap-3 group">
          <img src={logoIcon} alt="AR Estudio" className="h-9 w-auto" />
          <span className="font-display font-bold tracking-wide text-lg leading-none">
            AR <span className="text-rojo">ESTUDIO</span>
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative py-1 hover:text-rojo transition-colors after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-rojo after:transition-all hover:after:w-full"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contacto"
          className="hidden md:inline-flex items-center rounded-full bg-tinta text-crema text-sm font-semibold px-5 py-2.5 hover:bg-rojo transition-colors"
        >
          Trabajemos juntos
        </a>

        <button
          className="md:hidden p-2 -mr-2"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-crema border-t border-tinta/10"
          >
            <ul className="flex flex-col px-6 py-4 gap-4 text-base font-medium">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} onClick={() => setOpen(false)} className="block py-1">
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contacto"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center rounded-full bg-tinta text-crema text-sm font-semibold px-5 py-2.5"
                >
                  Trabajemos juntos
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
