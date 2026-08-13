import React from 'react';
import { CERTIFICATIONS, CertificationItem } from '../data';
import { Sparkles, ArrowUpRight, Award } from 'lucide-react';

export const Achievements: React.FC = () => {
  const getBadgeClass = (color?: string) => {
    switch (color) {
      case 'red': return 'sticker-red';
      case 'yellow': return 'sticker-yellow';
      case 'pink': return 'sticker-pink';
      case 'cream': return 'sticker-cream';
      default: return 'sticker-white';
    }
  };

  return (
    <section id="achievements" className="section-padding certifications-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">CERTIFICATIONS</span>
          <h2 className="section-title">Certifications Collected</h2>
        </div>

        <div className="certifications-grid">
          {CERTIFICATIONS.map((cert: CertificationItem) => (
            <div key={cert.id} className="retro-card cert-card">
              {/* Top Area */}
              <div className="cert-card-top">
                <span className={`sticker ${getBadgeClass(cert.badgeColor)}`}>
                  <Sparkles size={14} /> {cert.tag}
                </span>
                <span className="cert-year-pill">{cert.year}</span>
              </div>

              {/* Main Content */}
              <div className="cert-card-main">
                <h3 className="cert-title">{cert.title}</h3>
                <p className="cert-issuer">Issued by {cert.issuer}</p>
              </div>

              {/* Bottom Area */}
              <div className="cert-card-footer">
                {cert.credentialUrl ? (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cert-link"
                  >
                    View Credential <ArrowUpRight size={16} />
                  </a>
                ) : (
                  <span className="cert-no-link-badge">
                    <Award size={14} /> Course Completed
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


