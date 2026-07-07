# AR Estudio — Portafolio web

Sitio personal de portafolio de **Andrés Esteban Rodríguez Monroy** (AR Estudio),
diseñador industrial. Construido a partir del brandbook y el portafolio impreso
del estudio: paleta, tipografía (Montserrat / Big Shoulders), patrón isométrico
y los 7 casos de proyecto.

## Stack

- [React](https://react.dev/) + [Vite](https://vite.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/) (`@tailwindcss/vite`)
- [Framer Motion](https://motion.dev/) para animaciones al hacer scroll
- [Lucide React](https://lucide.dev/) para iconografía
- Fuentes autoalojadas con `@fontsource`

## Desarrollo

```bash
npm install
npm run dev
```

## Build de producción

```bash
npm run build
npm run preview
```

## Estructura

```
src/
  components/   Navbar, Hero, Manifesto, About, Methodology, Projects, ProjectCard,
                ProjectModal, Contact, HexPattern, ScrollReveal
  data/         projects.js — contenido de los 7 casos de proyecto
  assets/img/   imágenes optimizadas (WebP) extraídas del portafolio impreso
```

## Contenido

Todo el copy (manifiesto, valores, metodología, descripciones de proyecto) proviene
directamente del brandbook y el portafolio impreso 2026 de AR Estudio.
