import React, { useState } from 'react';
import { PROJECTS, Project } from '../data';
import { Utensils, Brain, Plane, Sparkles, Code2, ChevronUp, Check, ExternalLink } from 'lucide-react';

export const Projects: React.FC = () => {
  const [expandedProjectId, setExpandedProjectId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedProjectId((prev) => (prev === id ? null : id));
  };

  const getProjectIcon = (id: string) => {
    switch (id) {
      case 'hungrify':
        return <Utensils size={40} />;
      case 'skyweave':
        return <Plane size={40} />;
      case 'neuronote':
        return <Brain size={40} />;
      default:
        return <Code2 size={40} />;
    }
  };

  return (
    <section id="projects" className="section-padding projects-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">FEATURED WORK</span>
          <h2 className="section-title">Things I've built.</h2>
          <p className="section-description">
            Selected software projects demonstrating graph algorithms, full-stack applications, and AI integrations.
          </p>
        </div>

        <div className="projects-grid">
          {PROJECTS.map((project: Project, index: number) => {
            const isExpanded = expandedProjectId === project.id;

            return (
              <div key={project.id} className="project-box-wrapper">
                <div className="retro-card project-retro-card">
                  <div className="project-card-main-content">
                    {/* Left Column: Info & Actions */}
                    <div className="project-card-left-col">
                      <div className="card-header-line">
                        <span className="project-script-num">project #{index + 1}</span>
                        <span className="header-dot"></span>
                      </div>

                      <h3 className="card-project-title">{project.name}</h3>
                      <p className="card-project-subtitle">{project.tagline}</p>

                      {/* Tech Stack Pills */}
                      <div className="tech-pills-container">
                        {project.techStack.map((tech) => (
                          <span key={tech} className="ref-tech-pill">
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Action Buttons Row */}
                      <div className="card-actions-row">
                        <button
                          onClick={() => toggleExpand(project.id)}
                          className={`ref-btn ref-btn-peek ${isExpanded ? 'active-peek' : ''}`}
                          aria-expanded={isExpanded}
                        >
                          {isExpanded ? (
                            <>
                              close <ChevronUp size={16} />
                            </>
                          ) : (
                            <>
                              peek inside <Sparkles size={15} />
                            </>
                          )}
                        </button>

                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ref-btn ref-btn-github"
                          >
                            <Code2 size={16} /> GitHub ↗
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Right Column: Circular Icon Badge */}
                    <div className="project-card-right-badge-col">
                      <div className={`project-circle-badge circle-badge-${project.accentColor}`}>
                        <div className="circle-badge-icon">
                          {getProjectIcon(project.id)}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Expandable PEEK INSIDE Drawer */}
                {isExpanded && (
                  <div className="ref-peek-drawer animate-expand">
                    <div className="drawer-inner">
                      <div className="drawer-section">
                        <h4 className="drawer-subheading">PROJECT OVERVIEW</h4>
                        <p className="drawer-desc">{project.description}</p>
                      </div>

                      {project.features && project.features.length > 0 && (
                        <div className="drawer-section">
                          <h4 className="drawer-subheading">KEY HIGHLIGHTS &amp; ALGORITHMS</h4>
                          <ul className="drawer-features-list">
                            {project.features.map((feature, fIdx) => (
                              <li key={fIdx} className="drawer-feature-item">
                                <Check size={16} className="drawer-check-icon" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {project.liveUrl && (
                        <div className="drawer-actions">
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ref-btn ref-btn-demo"
                          >
                            <ExternalLink size={16} /> Live Demo ↗
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
