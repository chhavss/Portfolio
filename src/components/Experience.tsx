import React from 'react';
import { EXPERIENCES } from '../data';
import { Briefcase, Calendar, CheckCircle } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="section-padding experience-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">CAREER JOURNEY</span>
          <h2 className="section-title">Where I've been learning &amp; building.</h2>
          
        </div>

        <div className="timeline-wrapper">
          {EXPERIENCES.map((exp, idx) => (
            <div key={exp.id} className="timeline-item">
              {/* Timeline Marker Dot */}
              <div className="timeline-marker">
                <div className="marker-inner">0{idx + 1}</div>
              </div>

              {/* Card Content */}
              <div className="timeline-content-card retro-card">
                <div className="exp-card-header">
                  <div className="exp-title-block">
                    <span className={`sticker ${exp.badgeColor || 'sticker-red'}`}>
                      <Briefcase size={12} /> {exp.organization}
                    </span>
                    <h3 className="exp-role-title">{exp.role}</h3>
                  </div>

                  <div className="exp-period-badge">
                    <Calendar size={14} /> {exp.period}
                  </div>
                </div>

                <div className="exp-body">
                  <ul className="exp-bullet-list">
                    {exp.description.map((bullet, bIdx) => (
                      <li key={bIdx} className="exp-bullet-item">
                        <CheckCircle size={16} className="bullet-icon" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="exp-skills-row">
                    <span className="exp-skills-label">Gained Skills:</span>
                    {exp.skills.map((skill) => (
                      <span key={skill} className="exp-skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
