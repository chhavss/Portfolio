import React from 'react';
import { SOCIAL_LINKS } from '../data';
import { Mail, Phone, Globe, Code2, ArrowUpRight, Sparkles, Share2 } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="section-padding contact-section">
      <div className="container">
        <div className="contact-box-banner retro-card">
          <div className="contact-header-badge">
            <span className="sticker sticker-yellow">
              <Sparkles size={14} /> GET IN TOUCH
            </span>
          </div>

          <h2 className="contact-headline">Let's build something cool.</h2>

          <p className="contact-subtext">
            Have an opportunity, project idea, or just want to say hi? I'd love to hear from you.
          </p>

          {/* Social Links Buttons Grid */}
          <div className="contact-buttons-grid">
            <a
              href={SOCIAL_LINKS.email}
              className="btn-retro btn-primary contact-btn"
            >
              <Mail size={20} /> Email Me <ArrowUpRight size={18} />
            </a>

            <a
              href={SOCIAL_LINKS.phoneCall}
              className="btn-retro btn-secondary contact-btn"
            >
              <Phone size={20} /> Call Me <ArrowUpRight size={18} />
            </a>

            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-retro btn-pink contact-btn"
            >
              <Share2 size={20} /> LinkedIn <ArrowUpRight size={18} />
            </a>

            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-retro btn-cream contact-btn"
            >
              <Globe size={20} /> GitHub <ArrowUpRight size={18} />
            </a>

            <a
              href={SOCIAL_LINKS.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-retro btn-secondary contact-btn"
            >
              <Code2 size={20} /> LeetCode <ArrowUpRight size={18} />
            </a>
          </div>

          {/* Direct Email & Phone Display Badges */}
          <div className="direct-contact-grid">
            <div className="direct-email-badge">
              <span>Direct Email: </span>
              <strong className="email-text">thechhavi13@gmail.com</strong>
            </div>

            <a href={SOCIAL_LINKS.phoneCall} className="direct-email-badge direct-phone-badge">
              <span>Phone: </span>
              <strong className="email-text">{SOCIAL_LINKS.phoneDisplay}</strong>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
