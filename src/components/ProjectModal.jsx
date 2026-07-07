import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

function Meta({ label, value }) {
  if (!value) return null;
  return (
    <div>
      <p className="text-[11px] font-semibold tracking-[0.2em] text-rojo mb-1">{label}</p>
      <p className="text-sm text-tinta/80 leading-snug">{value}</p>
    </div>
  );
}

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  const hasMeta =
    project &&
    (project.categoria || project.alcance || project.estado || project.equipo || project.rol);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-start md:items-center justify-center p-0 md:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            className="absolute inset-0 bg-tinta/70 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.article
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative bg-crema w-full md:max-w-4xl md:rounded-3xl max-h-[100svh] md:max-h-[88vh] overflow-y-auto shadow-2xl"
          >
            <div className="sticky top-0 z-10 flex items-center justify-between px-6 md:px-10 py-4 bg-rojo text-crema">
              <h2 className="font-display font-bold uppercase text-lg md:text-xl tracking-wide">
                {project.titulo}
              </h2>
              <button
                onClick={onClose}
                aria-label="Cerrar"
                className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-crema/20 transition-colors shrink-0"
              >
                <X size={20} />
              </button>
            </div>

            <div className="px-6 md:px-10 py-8 md:py-10">
              <div className="flex items-start justify-between gap-4">
                <p className="text-tinta/60 max-w-xl">{project.subtitulo}</p>
                <span className="shrink-0 font-display font-extrabold text-5xl md:text-6xl text-tinta/10 leading-none">
                  {project.numero}.
                </span>
              </div>

              <div className="flex flex-wrap gap-1.5 mt-4">
                {project.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] font-semibold tracking-wide uppercase text-rojo bg-rojo/8 px-2.5 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className={`grid gap-8 mt-8 ${hasMeta ? "md:grid-cols-5" : ""}`}>
                <div className={`${hasMeta ? "md:col-span-3" : ""} space-y-4 text-tinta/80 leading-relaxed`}>
                  {project.parrafos.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                  {project.cita && (
                    <blockquote className="border-l-2 border-rojo pl-4 italic text-tinta/70 mt-6">
                      {project.cita}
                    </blockquote>
                  )}
                </div>

                {hasMeta && (
                  <div className="md:col-span-2 grid grid-cols-2 md:grid-cols-1 gap-5 content-start bg-white/50 rounded-2xl p-5 border border-tinta/10 h-fit">
                    <Meta label="CATEGORÍA" value={project.categoria} />
                    <Meta label="ALCANCE" value={project.alcance} />
                    <Meta label="ESTADO" value={project.estado} />
                    <Meta label="EQUIPO" value={project.equipo} />
                    <Meta label="ROL" value={project.rol} />
                  </div>
                )}
              </div>

              <div className="mt-10 rounded-2xl overflow-hidden">
                <img src={project.hero.src} alt={project.hero.alt} className="w-full h-auto object-cover" />
              </div>

              {project.galeria?.length > 0 && (
                <div className="mt-6 grid sm:grid-cols-2 gap-6">
                  {project.galeria.map((g, i) => (
                    <figure key={i} className="bg-white/50 rounded-2xl overflow-hidden border border-tinta/10">
                      <img src={g.src} alt={g.alt} className="w-full h-56 object-cover" />
                      {(g.titulo || g.texto) && (
                        <figcaption className="p-4">
                          {g.titulo && <p className="font-semibold text-sm">{g.titulo}</p>}
                          {g.texto && <p className="text-tinta/60 text-sm mt-0.5">{g.texto}</p>}
                        </figcaption>
                      )}
                    </figure>
                  ))}
                </div>
              )}
            </div>
          </motion.article>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
