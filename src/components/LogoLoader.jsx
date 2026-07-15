import { useEffect, useState } from "react";
import logoWhite from "../assets/img/logo-icon-white.webp";
import "./LogoLoader.css";

// El armado completo (glow, diamante, brackets, destellos, ícono y texto)
// dura ~4s; el resto del ciclo es la pausa en la que el logo se mantiene
// totalmente armado antes de reiniciar. Cambiar la key remonta el árbol y
// reinicia todas las animaciones CSS desde cero.
const CYCLE_MS = 9000;

// Animación de armado del logo: brackets de encuadre, diamante técnico,
// el ícono "AR" apareciendo con rebote y "ESTUDIO" escribiéndose letra a
// letra, seguido de una respiración suave e infinita.
export default function LogoLoader({ className = "" }) {
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setCycle((c) => c + 1), CYCLE_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <div className={`ar-logo-loader ${className}`.trim()}>
      <div className="ar-glow" key={`glow-${cycle}`} />
      <div className="ar-lockup" key={`lockup-${cycle}`}>
        <div className="ar-stage">
          <div className="ar-diamond" />
          <div className="ar-bracket tl" />
          <div className="ar-bracket tr" />
          <div className="ar-bracket bl" />
          <div className="ar-bracket br" />
          <div className="ar-burst b0"><span /></div>
          <div className="ar-burst b1"><span /></div>
          <div className="ar-burst b2"><span /></div>
          <div className="ar-burst b3"><span /></div>
          <div className="ar-burst b4"><span /></div>
          <div className="ar-burst b5"><span /></div>
          <img className="ar-icon" src={logoWhite} alt="" aria-hidden="true" />
        </div>
        <div className="ar-text" aria-label="ESTUDIO">
          <span className="ar-letter" aria-hidden="true">E</span>
          <span className="ar-letter" aria-hidden="true">S</span>
          <span className="ar-letter" aria-hidden="true">T</span>
          <span className="ar-letter" aria-hidden="true">U</span>
          <span className="ar-letter" aria-hidden="true">D</span>
          <span className="ar-letter" aria-hidden="true">I</span>
          <span className="ar-letter" aria-hidden="true">O</span>
          <span className="ar-caret" aria-hidden="true" />
        </div>
        <div className="ar-rule" />
      </div>
    </div>
  );
}
