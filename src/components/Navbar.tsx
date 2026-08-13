import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { SOCIAL_LINKS } from '../data';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Certifications', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky-nav-wrapper">
      <nav className="navbar-container">
        {/* Logo */}
        <a href="#hero" className="logo-text">
          CHHAVI<span className="logo-dot">.</span>
        </a>

        {/* Desktop Links */}
        <div className="desktop-links">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-item">
              {link.name}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="nav-actions">
          <a
            href={SOCIAL_LINKS.email}
            className="btn-retro btn-primary nav-cta-btn"
          >
            Let's Connect <ArrowUpRight size={18} />
          </a>

          {/* Mobile Hamburger Toggle */}
          <button
            className="mobile-toggle-btn"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="mobile-menu-drawer">
          <div className="mobile-links">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="mobile-nav-item"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href={SOCIAL_LINKS.email}
              className="btn-retro btn-secondary mobile-connect-btn"
              onClick={() => setIsOpen(false)}
            >
              Let's Connect <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
