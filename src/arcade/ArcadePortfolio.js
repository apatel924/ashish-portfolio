import React, { useCallback, useMemo, useState } from "react";
import arcadeRevampContent from "../data/arcadeRevamp.content";
import { projectsData } from "../data/projects";
import { resolveExperienceWithProjects } from "../data/arcadeImageMap";
import DocumentModal from "../components/DocumentModal";
import ProjectCoverflowModal from "../components/ProjectCoverFlowModal";
import ArcadeTopBar from "./ArcadeTopBar";
import ArcadeInfoPanel from "./ArcadeInfoPanel";
import { buildCabinets, isCabinetInSidebar } from "./buildCabinets";
import RetroStartScreen from "./RetroStartScreen";
import RetroGameOverlay from "./RetroGameOverlay";
import ArcadeSocialsModal from "./ArcadeSocialsModal";
import "./ArcadePortfolio.css";

function triggerResumeDownload(resume) {
  const a = document.createElement("a");
  a.href = resume.publicUrl;
  a.download = resume.downloadFileName;
  a.rel = "noopener";
  a.target = "_blank";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

function ArcadePortfolio() {
  const [galleryImages, setGalleryImages] = useState(null);
  const [showResume, setShowResume] = useState(false);
  const [showSocials, setShowSocials] = useState(false);
  const [activeCabId, setActiveCabId] = useState(null);
  const [playOverlayOpen, setPlayOverlayOpen] = useState(false);
  const [introDone, setIntroDone] = useState(false);

  const experiencesResolved = useMemo(
    () =>
      arcadeRevampContent.experiences.map((exp) =>
        resolveExperienceWithProjects(exp, projectsData)
      ),
    []
  );

  const cabinets = useMemo(
    () =>
      buildCabinets({
        experiencesResolved,
        meta: arcadeRevampContent.meta,
        projectsData,
      }),
    [experiencesResolved]
  );

  const activeCabinet = useMemo(() => {
    const id = activeCabId ?? cabinets[0]?.id;
    return cabinets.find((c) => c.id === id) ?? cabinets[0];
  }, [cabinets, activeCabId]);

  const selectCab = (id) => {
    setActiveCabId(id);
    setPlayOverlayOpen(false);
  };

  const returnToMainMenuFromGame = useCallback(() => {
    setPlayOverlayOpen(false);
    setIntroDone(false);
  }, []);

  const handleIntroComplete = useCallback(
    (optionId) => {
      const firstJob = cabinets.find((c) => c.kind === "experience");
      const allGamesLobby = cabinets.find((c) => c.id === "all-games-lobby");

      if (optionId === "resume") {
        triggerResumeDownload(arcadeRevampContent.resume);
        setPlayOverlayOpen(false);
        setIntroDone(true);
        return;
      }
      if (optionId === "socials") {
        setPlayOverlayOpen(false);
        setIntroDone(true);
        setShowSocials(true);
        return;
      }
      if (optionId === "experience") {
        if (firstJob) setActiveCabId(firstJob.id);
        setPlayOverlayOpen(false);
      } else if (optionId === "projects") {
        setActiveCabId("project-showroom");
        setPlayOverlayOpen(false);
      } else if (optionId === "games") {
        if (allGamesLobby) setActiveCabId(allGamesLobby.id);
        setPlayOverlayOpen(true);
      }
      setIntroDone(true);
    },
    [cabinets]
  );

  return (
    <div className="arcade-root arcade-root--dashboard">
      <RetroStartScreen
        open={!introDone}
        siteTitle={arcadeRevampContent.meta.siteTitle}
        onComplete={handleIntroComplete}
      />
      <RetroGameOverlay
        open={playOverlayOpen}
        cabinet={
          activeCabinet?.kind === "projects"
            ? cabinets.find((c) => c.kind === "experience") ?? activeCabinet
            : activeCabinet
        }
        siteTitle={arcadeRevampContent.meta.siteTitle}
        onClose={returnToMainMenuFromGame}
      />
      <div className="arcade-layout">
        <ArcadeTopBar
          meta={arcadeRevampContent.meta}
          resume={arcadeRevampContent.resume}
          social={arcadeRevampContent.social}
          onResumePreview={() => setShowResume(true)}
        />

        <div className="arcade-dashboard">
        <nav className="arcade-sidebar" aria-label="Cabinets">
          <div className="arcade-sidebar__heading">Cabinets</div>
          {cabinets.filter(isCabinetInSidebar).map((cab) => (
            <button
              key={cab.id}
              type="button"
              className={`arcade-cab-btn${activeCabinet?.id === cab.id ? " is-active" : ""}`}
              style={{
                "--cab-accent": cab.accent,
              }}
              onClick={() => selectCab(cab.id)}
              aria-current={activeCabinet?.id === cab.id ? "page" : undefined}
            >
              <span className="arcade-cab-btn__icon" style={{ background: cab.accentBg }}>
                <span aria-hidden="true">{cab.emoji}</span>
              </span>
              <span className="arcade-cab-btn__text">
                <span className="arcade-cab-btn__name">{cab.name.toUpperCase()}</span>
                <span className="arcade-cab-btn__type">{cab.type.toUpperCase()}</span>
              </span>
              <span className="arcade-cab-btn__dot" style={{ background: cab.accent }} />
            </button>
          ))}
        </nav>

        <div className="arcade-stage">
          <div key={activeCabinet?.id} className="arcade-stage__cascade">
            <div className="arcade-stage__header">
              <div className="arcade-stage__intro">
                <div
                  className="arcade-stage__title arcade-cascade-in"
                  style={{ "--cascade-index": 0 }}
                >
                  {activeCabinet?.name.toUpperCase()}
                </div>
                <div
                  className="arcade-stage__sub arcade-cascade-in"
                  style={{ "--cascade-index": 1 }}
                >
                  {activeCabinet?.sub}
                </div>
              </div>
              <div
                className="arcade-stage__tabs arcade-cascade-in"
                style={{ "--cascade-index": 2 }}
                role="tablist"
                aria-label="Panel mode"
              >
                <button
                  type="button"
                  role="tab"
                  aria-selected={!playOverlayOpen}
                  className={`arcade-tab${!playOverlayOpen ? " is-active" : ""}`}
                  style={{ "--cab-accent": activeCabinet?.accent }}
                  onClick={() => setPlayOverlayOpen(false)}
                >
                  Info
                </button>
                {activeCabinet?.kind !== "projects" && (
                  <button
                    type="button"
                    role="tab"
                    aria-selected={playOverlayOpen}
                    className={`arcade-tab${playOverlayOpen ? " is-active" : ""}`}
                    style={{ "--cab-accent": activeCabinet?.accent }}
                    onClick={() => setPlayOverlayOpen(true)}
                  >
                    Play
                  </button>
                )}
              </div>
            </div>

            <div className="arcade-stage__body" role="tabpanel">
              <ArcadeInfoPanel cabinet={activeCabinet} onOpenGallery={setGalleryImages} />
            </div>
          </div>
        </div>
        </div>

        <footer className="arcade-footer-bar">
          <span>© {new Date().getFullYear()} Ashish Patel</span>
          <div className="arcade-footer-bar__links">
            <a href="https://github.com/apatel924" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/ashish-patel-0b13a2219"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href={arcadeRevampContent.resume.publicUrl}
              download={arcadeRevampContent.resume.downloadFileName}
            >
              Résumé
            </a>
          </div>
        </footer>
      </div>

      <ProjectCoverflowModal images={galleryImages} onClose={() => setGalleryImages(null)} />
      <DocumentModal
        src={showResume ? arcadeRevampContent.resume.publicUrl : null}
        onClose={() => setShowResume(false)}
      />
      <ArcadeSocialsModal
        open={showSocials}
        social={arcadeRevampContent.social}
        onClose={() => setShowSocials(false)}
      />
    </div>
  );
}

export default ArcadePortfolio;
