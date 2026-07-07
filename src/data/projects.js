import lumiHero from "../assets/img/lumi-hero.webp";
import lumiTecho from "../assets/img/lumi-techo.webp";
import lumiPiso from "../assets/img/lumi-piso.webp";
import lumiSketch from "../assets/img/lumi-sketch.webp";
import ecoabonoFull from "../assets/img/ecoabono-full.webp";
import ecoabonoProduct from "../assets/img/ecoabono-product.webp";
import verhum from "../assets/img/verhum.webp";
import weepodOpen from "../assets/img/weepod-open.webp";
import weepodClosed from "../assets/img/weepod-closed.webp";
import tappetoModel from "../assets/img/tappeto-model.webp";
import tappetoGraphic from "../assets/img/tappeto-graphic.webp";
import escarabajo from "../assets/img/escarabajo.webp";
import grafica1 from "../assets/img/grafica-1.webp";
import grafica2 from "../assets/img/grafica-2.webp";
import grafica3 from "../assets/img/grafica-3.webp";

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
        alt: "Sketch de consolidación de ideas del patrón triangular muisca",
        titulo: "Proceso",
        texto: "Sketch de consolidación de ideas — patrón triangular muisca aplicado a las tres tipologías.",
      },
    ],
  },
  {
    id: "ecoabono",
    numero: "02",
    titulo: "Ecoabono",
    subtitulo: "Compostera doméstica de vermicompostaje",
    tags: ["Diseño de producto", "Ecodiseño", "Mecanismos"],
    parrafos: [
      "Compostera doméstica que transforma residuos orgánicos en humus de alta calidad sin salir de la cocina. Un sistema rotatorio de cajones organiza el ciclo completo: los residuos triturados ingresan por la tolva superior, las lombrices procesan el material a través de los compartimentos y el abono terminado sale por la compuerta inferior.",
      "Madera, acero inoxidable y acrílico: materiales durables y lavables que integran el compostaje al mobiliario doméstico contemporáneo.",
    ],
    categoria: "Ecodiseño / producto doméstico",
    alcance: "Diseño de producto, mecanismo rotatorio, CMF, render, pieza gráfica",
    rol: "Proyecto individual",
    hero: { src: ecoabonoProduct, alt: "Compostera doméstica Ecoabono — render de producto" },
    galeria: [
      {
        src: ecoabonoFull,
        alt: "Ficha de producto de Ecoabono con sistema rotatorio y materiales",
        titulo: "Ficha de producto",
        texto: "Sistema rotatorio de cajones y materiales — madera, acero inoxidable y acrílico.",
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
    equipo: "Isabella Cruz, Paula Neira, Andrés Rodríguez, Daniel González",
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
    hero: { src: tappetoModel, alt: "Modelo físico seccionado del sillón Tappeto Volante" },
    galeria: [
      {
        src: tappetoGraphic,
        alt: "Sistema gráfico inspirado en el lenguaje Memphis para Tappeto Volante",
        titulo: "Sistema gráfico",
        texto: "Pieza editorial en el lenguaje del Grupo Memphis, con la ficha del referente Ettore Sottsass.",
      },
    ],
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
    hero: { src: escarabajo, alt: "Escultura de escarabajo Hércules ensamblada con componentes recuperados" },
    galeria: [],
  },
  {
    id: "exploracion-grafica",
    numero: "07",
    titulo: "Exploración Gráfica",
    subtitulo: "Composiciones ópticas — patrón, ritmo y profundidad",
    tags: ["Lenguaje formal", "Dibujo a mano", "Sistemas de patrón"],
    parrafos: [
      "Serie de composiciones en blanco y negro construidas a mano: sistemas de patrón que estudian el ritmo, la vibración óptica y la profundidad. Es la base bidimensional del lenguaje isométrico que atraviesa toda la identidad del estudio.",
    ],
    cita: "Del patrón bidimensional al objeto tridimensional: la misma lógica estructural gobierna el gráfico, el bastidor y la marca.",
    hero: { src: grafica1, alt: "Composición óptica en blanco y negro, estudio 1" },
    galeria: [
      { src: grafica2, alt: "Composición óptica en blanco y negro, estudio 2", titulo: "", texto: "" },
      { src: grafica3, alt: "Composición óptica en blanco y negro, estudio 3", titulo: "", texto: "" },
    ],
  },
];
