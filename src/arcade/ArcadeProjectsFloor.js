import React from "react";

function ArcadeProjectsFloor({ projects, onOpenGallery, embedded = false, cascadeFromIndex = null }) {
  const grid = (
    <div className="arcade-projects-grid">
        {projects.map((project, i) => {
          const strip = project.images.slice(1, 6);
          return (
          <article
            key={project.title}
            className={
              cascadeFromIndex != null ? "arcade-project-card arcade-cascade-in" : "arcade-project-card"
            }
            style={
              cascadeFromIndex != null
                ? { "--cascade-index": cascadeFromIndex + i }
                : undefined
            }
          >
            <div className="arcade-project-card__shot">
              <img
                src={project.thumbnail}
                alt={`${project.title} — primary screenshot`}
              />
            </div>
            {strip.length > 0 && (
              <div className="arcade-project-filmstrip" aria-label={`More ${project.title} screenshots`}>
                {strip.map((src, i) => (
                  <button
                    key={`${project.title}-${i}`}
                    type="button"
                    className="arcade-project-filmstrip__thumb"
                    onClick={() => onOpenGallery(project.images)}
                    title="Open full screenshot reel"
                  >
                    <img src={src} alt="" />
                  </button>
                ))}
              </div>
            )}
            <div className="arcade-project-card__body">
              <h3 className="arcade-project-card__title">{project.title}</h3>
              <p className="arcade-project-card__desc">{project.description}</p>
              <div className="arcade-tech-row">
                {project.technologies.slice(0, 6).map((t) => (
                  <span key={t} className="arcade-tech-pill">
                    {t}
                  </span>
                ))}
                {project.technologies.length > 6 && (
                  <span className="arcade-tech-pill">+{project.technologies.length - 6}</span>
                )}
              </div>
              <div className="arcade-project-card__footer">
                <a
                  className="arcade-project-card__link"
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Repo / link →
                </a>
                <button
                  type="button"
                  className="arcade-btn"
                  style={{ flex: "0 1 auto", minWidth: "unset" }}
                  onClick={() => onOpenGallery(project.images)}
                >
                  Screenshots
                </button>
              </div>
            </div>
          </article>
          );
        })}
    </div>
  );

  if (embedded) {
    return <div className="arcade-projects-embed">{grid}</div>;
  }

  return (
    <section className="arcade-section" aria-labelledby="arcade-projects-heading">
      <h2 id="arcade-projects-heading" className="arcade-section__title">
        Project showroom
      </h2>
      <p
        style={{
          marginTop: "-0.5rem",
          marginBottom: "1.5rem",
          color: "var(--arcade-text-muted)",
          maxWidth: "60ch",
        }}
      >
        Ship-ready apps—hero shot on each card, filmstrip of extra frames below, and
        Screenshots for the full carousel.
      </p>
      {grid}
    </section>
  );
}

export default ArcadeProjectsFloor;
