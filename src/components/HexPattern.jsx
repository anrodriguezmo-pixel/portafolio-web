// Isometric hexagon lattice, inspired by the brandbook's "retícula axonométrica a 30°".
export default function HexPattern({ className = "", color = "#F5EFE3", opacity = 0.14, id }) {
  const patternId = `hex-${id}`;
  return (
    <svg
      className={className}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
    >
      <defs>
        <pattern
          id={patternId}
          width="84"
          height="145.5"
          patternUnits="userSpaceOnUse"
          patternTransform="scale(1)"
        >
          <g fill="none" stroke={color} strokeWidth="1" opacity={opacity}>
            <polygon points="42,0 84,24.25 84,72.75 42,97 0,72.75 0,24.25" />
            <polygon points="42,48.5 84,72.75 84,121.25 42,145.5 0,121.25 0,72.75" />
            <polygon points="0,-24.25 42,0 42,48.5 0,72.75 -42,48.5 -42,0" />
            <polygon points="84,-24.25 126,0 126,48.5 84,72.75 42,48.5 42,0" />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${patternId})`} />
    </svg>
  );
}
