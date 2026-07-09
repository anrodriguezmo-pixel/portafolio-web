import logoWhite from "../assets/img/logo-icon-white.webp";
import "./LogoLoader.css";

// Animación de armado del logo: brackets de encuadre, diamante técnico,
// el ícono "AR" apareciendo con rebote y "ESTUDIO" escribiéndose letra a
// letra, seguido de una respiración suave e infinita.
export default function LogoLoader({ className = "" }) {
  return (
    <div className={`ar-logo-loader ${className}`.trim()}>
      <div className="ar-glow" />
      <div className="ar-lockup">
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
