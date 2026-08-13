import React from 'react';
import { SOCIAL_LINKS } from '../data';
import { ArrowUp, Coffee, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-wrapper">
      <div className="container">
        <div className="footer-main-row">
          {/* Brand Column */}
          <div className="footer-brand">
            <h3 className="footer-logo">CHHAVI.</h3>
            <p className="footer-tagline">
              Built with curiosity, code &amp; caffeine. ☕
            </p>
          </div>

          {/* Nav & Social Quick Links */}
          <div className="footer-nav-col">
            <h4 className="footer-col-heading">NAVIGATION</h4>
            <div className="footer-links">
              <a href="#hero">Home</a>
              <a href="#about">About</a>
              <a href="#skills">Skills</a>
              <a href="#projects">Projects</a>
              <a href="#experience">Experience</a>
              <a href="#achievements">Certifications</a>
              <a href="#contact">Contact</a>
            </div>
          </div>

          <div className="footer-nav-col">
            <h4 className="footer-col-heading">CONNECT</h4>
            <div className="footer-links">
              <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
              <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
              <a href={SOCIAL_LINKS.leetcode} target="_blank" rel="noopener noreferrer">LeetCode ↗</a>
              <a href={SOCIAL_LINKS.email}>Email ↗</a>
            </div>
          </div>

          {/* Back to Top */}
          <div className="footer-back-top">
            <button onClick={scrollToTop} className="btn-retro btn-secondary btn-sm top-btn">
              Back to Top <ArrowUp size={16} />
            </button>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="footer-bottom-bar">
          <p>© 2026 Chhavi. All rights reserved.</p>
          <p className="footer-crafted-by">Designed with Vibrant Retro 3D &amp; Neo-Brutalism</p>
        </div>
      </div>
    </footer>
  );
};
