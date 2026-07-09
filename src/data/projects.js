import lumiHero from "../assets/img/lumi-hero.webp";
import lumiTecho from "../assets/img/lumi-techo.webp";
import lumiPiso from "../assets/img/lumi-piso.webp";
import lumiSketch from "../assets/img/lumi-sketch.webp";
import acresTerraza from "../assets/img/acres-terraza.webp";
import acresSocial from "../assets/img/acres-social.webp";
import acresCocina from "../assets/img/acres-cocina.webp";
import verhum from "../assets/img/verhum.webp";
import weepodOpen from "../assets/img/weepod-open.webp";
import weepodClosed from "../assets/img/weepod-closed.webp";
import tappetoModel from "../assets/img/tappeto-model.webp";
import escarabajo from "../assets/img/escarabajo.webp";
import mesaProducto from "../assets/img/mesa-producto.webp";
import mesaContexto1 from "../assets/img/mesa-contexto1.webp";
import mesaContexto2 from "../assets/img/mesa-contexto2.webp";

export const projects = [
  {
    id: "sistema-luminico-modular",
    numero: "01",
    titulo: "Sistema Lumínico Modular",
    subtitulo: "Colección de luminarias · Inspiración orfebrería muisca",
    tags: ["Diseño de producto", "CMF", "Visualización 3D", "Interfaz"],
    parrafos: [
      "Familia de luminarias compuesta por una fuente lumínica autónoma y tres bastidores intercambiables —techo, piso y escritorio— inspirados en los patrones triangulares de la cultura muisca y en su tradición de orfebrería. El exterior negro contiene; el interior dorado amplifica la luz por reflexión.",
      "La fuente lumínica se conecta a cualquiera de los bastidores y se controla desde una interfaz digital diseñada para el ecosistema IKEA Home. Un recubrimiento textil con patrón precolombino permite su manipulación directa.",
    ],
    categoria: "Iluminación doméstica",
    alcance: "Investigación cultural, diseño de producto, CMF, renderizado, UI",
    estado: "Concepto validado con modelos 3D de alta fidelidad",
    hero: { src: lumiHero, alt: "Fuente lumínica del Sistema Lumínico Modular — render de producto" },
    galeria: [
      {
        src: lumiTecho,
        alt: "Bastidor de techo del Sistema Lumínico Modular",
        titulo: "Bastidor de techo",
        texto: "Pensado para el centro de comedores y salas: el dorado interior y el juego de perspectiva convierten la vista inferior en la firma del objeto.",
      },
      {
        src: lumiPiso,
        alt: "Bastidor de piso del Sistema Lumínico Modular",
        titulo: "Bastidor de piso",
        texto: "Tres cuerpos articulados de 1,30 m que se pliegan para almacenaje. Ideal junto a sillones y mesas de espacios sociales.",
      },
      {
        src: lumiSketch,
        alt: "Bastidor de techo instalado en una sala de estar",
        titulo: "En contexto",
        texto: "El bastidor de techo integrado en una sala: el patrón triangular muisca como pieza central del espacio.",
      },
    ],
  },
  {
    id: "acres-verdes",
    numero: "02",
    titulo: "Acres Verdes",
    subtitulo: "Arquitectura interior residencial — Sopó, Cundinamarca",
    tags: ["Interiorismo", "Redistribución espacial", "Visualización"],
    parrafos: [
      "Reforma interior para una casa en clima templado de montaña. La redistribución trabaja tres tipologías espaciales: divisores flotantes que orientan la circulación sin cortar la vista, fugados que dirigen las visuales al paisaje de la sabana de Bogotá, y residuales que activan esquinas muertas como micro-estudios, bibliotecas y almacenamiento empotrado.",
    ],
    categoria: "Arquitectura interior residencial",
    alcance: "Arquitectura interior, redistribución, visualización 3D",
    extraMeta: [
      { label: "UBICACIÓN", value: "Sopó, Cundinamarca (Colombia)" },
      {
        label: "MATERIALES",
        value: "Pino radiata de plantaciones locales, drywall con aislamiento termoacústico, concreto pulido, barniz base agua libre de COV",
      },
    ],
    hero: { src: acresTerraza, alt: "Terraza de cubierta con fogata — Acres Verdes" },
    galeria: [
      {
        src: acresSocial,
        alt: "Zona social con chimenea y divisores flotantes de madera",
        titulo: "Zona social",
        texto: "Chimenea, divisores flotantes de madera y visuales continuas.",
      },
      {
        src: acresCocina,
        alt: "Cocina y comedor con isla central e iluminación indirecta",
        titulo: "Cocina y comedor",
        texto: "Isla central e iluminación indirecta.",
      },
    ],
  },
  {
    id: "verhum",
    numero: "03",
    titulo: "Verhum",
    subtitulo: "Sistema modular de compostaje doméstico",
    tags: ["Diseño colaborativo", "Producto", "Visualización"],
    parrafos: [
      "Desarrollado en equipo dentro de la Escuela de Diseño Industrial (Práctica Proyectual 5), Verhum apila el proceso de compostaje en módulos cerámicos de perfil suave y lo remata con una matera en la base: el ciclo de nutrientes se completa a la vista, dentro del hogar.",
      "La volumetría vertical reduce la huella en planta y convierte un proceso normalmente oculto en un objeto de presencia escultórica.",
    ],
    categoria: "Ecodiseño / producto doméstico",
    equipo: "Isabella Cruz, Andrés Rodríguez, Daniel González",
    alcance: "Codiseño, modelado 3D, visualización y presentación",
    hero: { src: verhum, alt: "Sistema modular de compostaje Verhum" },
    galeria: [],
  },
  {
    id: "weepod",
    numero: "04",
    titulo: "Weepod",
    subtitulo: "Matera-luminaria de geometría dodecaédrica",
    tags: ["Producto", "Iluminación", "Madera y vidrio"],
    parrafos: [
      "Objeto doméstico que combina matera y luminaria de crecimiento en una volumetría dodecaédrica de madera y vidrio. Su cubierta facetada se despliega sobre la planta para regular la exposición a la luz, pasando de cápsula cerrada a dosel abierto.",
    ],
    categoria: "Producto / iluminación de cultivo",
    alcance: "Diseño de producto, mecanismo desplegable, modelado y render",
    hero: { src: weepodOpen, alt: "Weepod en estado desplegado, dosel abierto" },
    galeria: [
      {
        src: weepodClosed,
        alt: "Weepod en estado cerrado, cápsula plegada",
        titulo: "Estado cerrado",
        texto: "Estados cerrado y desplegado del pod.",
      },
    ],
  },
  {
    id: "tappeto-volante",
    numero: "05",
    titulo: "Tappeto Volante",
    subtitulo: "Análisis y modelo a escala 1:5 — Ettore Sottsass, 1974",
    tags: ["Análisis de referentes", "Modelado a escala", "Dirección gráfica"],
    parrafos: [
      "Reconstrucción a escala 1:5 del sillón Tappeto Volante de Ettore Sottsass, desarrollada para Comunicación 5. La pieza se tradujo a un modelo físico seccionado que revela su estructura interna, acompañado de un sistema gráfico inspirado en el lenguaje del Grupo Memphis.",
    ],
    equipo: "David Parra, Karen Chivata, Andrés Rodríguez, Daniela Muñoz",
    alcance: "Análisis morfológico, modelo a escala, pieza editorial",
    hero: { src: tappetoModel, alt: "Modelo seccionado del sillón Tappeto Volante en contexto" },
    galeria: [],
  },
  {
    id: "escarabajo-hercules",
    numero: "06",
    titulo: "Escarabajo Hércules",
    subtitulo: "Entomología mecánica — upcycling de componentes",
    tags: ["Upcycling", "Morfología", "Manufactura manual"],
    parrafos: [
      "Reconstrucción del Dynastes hercules a partir de componentes recuperados: un mouse, tuercas, bisagras en T y láminas metálicas. Un ejercicio de observación morfológica y manufactura manual que demuestra que el material descartado todavía tiene forma por delante.",
    ],
    equipo: "Cynthia Obando, Andrés Rodríguez",
    alcance: "Análisis morfológico, ensamble, registro",
    hero: { src: escarabajo, alt: "Escultura exhibida de escarabajo Hércules ensamblada con componentes recuperados" },
    galeria: [],
  },
  {
    id: "mesa-fold-it",
    numero: "07",
    titulo: "Mesa Fold It",
    subtitulo: "Mesa auxiliar DIY — Colección Goldenwood",
    tags: ["Mobiliario", "Flat-pack", "Guadua laminada"],
    parrafos: [
      "Mobiliario auxiliar de armado rápido pensado para que el usuario final lo ensamble con precisión y sin herramientas complejas. El paquete viaja en plano y la estructura se resuelve en guadua, una fuente forestal de rápido crecimiento: encaje machihembrado numerado, tres fases de armado y una mesa lista en minutos.",
      "Armado en tres fases: cimentación —la base recibe el primer soporte en su ranura guía—, estructuración —los tres soportes restantes entran en encajes numerados— y fijación —los tablones cierran a presión y el kit de tornillos asegura todo.",
    ],
    categoria: "Mobiliario / flat-pack",
    alcance: "Diseño de producto, armado DIY, guadua laminada",
    rol: "Departamento de Diseño Industrial — Universidad Nacional de Colombia",
    extraMeta: [
      { label: "DIMENSIONES", value: "35×30×75 cm · tableros de 15 mm · 4,2 kg" },
      { label: "MATERIALES", value: "Guadua laminada y MDF enchapado; sellador acrílico base agua con filtro UV" },
      { label: "HERRAJES", value: 'Tornillería pavonada negra de 2" y cincada blanca de 1¼"' },
    ],
    hero: { src: mesaProducto, alt: "Mesa auxiliar Fold It — render de producto" },
    galeria: [
      {
        src: mesaContexto1,
        alt: "Mesa Fold It en contexto, zona de café",
        titulo: "En contexto",
        texto: "La mesa en contexto — zona de café.",
      },
      { src: mesaContexto2, alt: "Mesa Fold It en contexto, sala de estar", titulo: "", texto: "" },
    ],
  },
];
