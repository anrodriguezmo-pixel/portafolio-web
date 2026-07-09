import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import HexPattern from "./HexPattern";
import Grainient from "./Grainient";
import LogoLoader from "./LogoLoader";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] flex flex-col justify-between overflow-hidden bg-crema"
    >
      <div className="absolute inset-0 pointer-events-none">
        {/* Soft animated aura in brand colors — the blur hides the hard canvas edges */}
        <div className="absolute -right-24 -top-24 w-[420px] h-[420px] sm:-right-40 sm:-top-40 sm:w-[720px] sm:h-[720px] blur-3xl opacity-35 sm:opacity-60 mix-blend-multiply">
          <Grainient
            className="w-full h-full"
            color1="#F5EFE3"
            color2="#C8272D"
            color3="#1A1A1A"
            timeSpeed={0.15}
            colorBalance={0.05}
            warpStrength={1.2}
            warpFrequency={3}
            warpSpeed={1}
            warpAmplitude={70}
            blendSoftness={0.18}
            rotationAmount={280}
            noiseScale={1.5}
            grainAmount={0.03}
            grainScale={2}
            contrast={1.1}
            gamma={1.0}
            saturation={0.85}
            zoom={1.2}
          />
        </div>
        <div className="absolute -right-24 -top-24 w-[560px] h-[560px] opacity-40">
          <HexPattern id="hero" color="#C8272D" opacity={0.12} />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="hidden lg:block absolute right-10 xl:right-16 top-1/2 -translate-y-1/2 z-10"
      >
        <LogoLoader />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative max-w-6xl w-full mx-auto px-6 md:px-10 pt-28 flex items-center justify-between text-xs md:text-sm font-semibold tracking-[0.15em] text-tinta/70"
      >
        <span>2026</span>
        <span>PORTAFOLIO DE DISEÑO INDUSTRIAL</span>
      </motion.div>

      <div className="relative max-w-6xl w-full mx-auto px-6 md:px-10 flex-1 flex flex-col justify-center py-10">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display font-extrabold uppercase leading-[0.85] text-rojo"
          style={{ fontSize: "clamp(3.5rem, 13vw, 10rem)" }}
        >
          AR
          <br />
          Estudio
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10 max-w-xl"
        >
          <p className="font-semibold text-lg md:text-xl">Andrés Esteban Rodríguez Monroy</p>
          <p className="text-tinta/60 mt-1">Diseño de producto · Visualización 3D · Comunicación</p>

          <div className="mt-8 h-[3px] w-24 bg-rojo" />

          <p className="mt-6 text-xl md:text-2xl font-medium">
            Diseño que trabaja.
          </p>
          <p className="text-tinta/60 mt-1">Bogotá, Colombia</p>
        </motion.div>
      </div>

      <motion.a
        href="#manifiesto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="relative mx-auto mb-8 flex flex-col items-center gap-2 text-tinta/50 hover:text-rojo transition-colors"
        aria-label="Ir al manifiesto"
      >
        <span className="text-xs tracking-widest">DESCUBRE</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={20} />
        </motion.span>
      </motion.a>
    </section>
  );
}
