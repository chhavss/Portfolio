import React, { useEffect, useState, useRef } from 'react';

type CursorType = 
  | 'default' 
  | 'link' 
  | 'project' 
  | 'github' 
  | 'resume' 
  | 'contact'
  | 'about'
  | 'skills'
  | 'experience'
  | 'certs'
  | 'education'
  | 'home';

interface TrailDot {
  x: number;
  y: number;
  id: number;
  opacity: number;
}

export const CustomCursor: React.FC = () => {
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [cursorType, setCursorType] = useState<CursorType>('default');
  const [isVisible, setIsVisible] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [trailDots, setTrailDots] = useState<TrailDot[]>([]);

  // Coordinates using Ref for rAF loop
  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  
  const lastMousePos = useRef({ x: -100, y: -100 });
  const trailCounter = useRef(0);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    // Check touch device or reduced motion
    const checkTouch = () => {
      const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      setIsTouchDevice(isTouch || prefersReducedMotion);
    };
    checkTouch();

    if (isTouchDevice) return;

    const onMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);

      // Trail generation on fast move
      const dx = e.clientX - lastMousePos.current.x;
      const dy = e.clientY - lastMousePos.current.y;
      const dist = Math.hypot(dx, dy);

      if (dist > 15) {
        lastMousePos.current = { x: e.clientX, y: e.clientY };
        trailCounter.current += 1;
        const newDot: TrailDot = {
          x: e.clientX,
          y: e.clientY,
          id: trailCounter.current,
          opacity: 0.6,
        };
        setTrailDots((prev) => [...prev.slice(-3), newDot]);
      }

      // Check hovered element type
      const target = e.target as HTMLElement | null;
      if (!target) {
        setCursorType('default');
        return;
      }

      const hoverable = target.closest(
        'a, button, [data-cursor], .project-retro-card, .project-box-wrapper, .cert-card, .skill-chip, .stat-pill, .nav-item, .mobile-nav-item, .section-title, .section-badge, .section-header, h1, h2'
      ) as HTMLElement | null;

      if (!hoverable) {
        setCursorType('default');
        return;
      }

      // Check specific data-cursor override first
      const explicitCursor = hoverable.getAttribute('data-cursor');
      if (explicitCursor) {
        setCursorType(explicitCursor as CursorType);
        return;
      }

      // Check section titles, section badges, section headers, or navbar links
      const sectionEl = hoverable.closest('section, header, [id]') as HTMLElement | null;
      const textLow = (hoverable.textContent || hoverable.innerText || '').toLowerCase();
      const hrefLow = (hoverable.getAttribute('href') || '').toLowerCase();
      const sectionId = (sectionEl?.getAttribute('id') || '').toLowerCase();

      // Explicit section checks based on ID or text context
      if (hrefLow.includes('#about') || sectionId === 'about' || textLow.includes('about me') || textLow.includes('who i am')) {
        setCursorType('about');
        return;
      }
      if (hrefLow.includes('#skills') || sectionId === 'skills' || textLow.includes('skills') || textLow.includes('tech stack')) {
        setCursorType('skills');
        return;
      }
      if (hrefLow.includes('#projects') || textLow.includes('projects') || textLow.includes("things i've built")) {
        // Handled by project card check later, but for header:
        if (hoverable.closest('.section-header, .section-title, .section-badge, .nav-item')) {
          setCursorType('project');
          return;
        }
      }
      if (hrefLow.includes('#experience') || sectionId === 'experience' || textLow.includes('experience') || textLow.includes('work history')) {
        setCursorType('experience');
        return;
      }
      if (hrefLow.includes('#achievements') || sectionId === 'achievements' || textLow.includes('certification') || textLow.includes('achievements')) {
        setCursorType('certs');
        return;
      }
      if (hrefLow.includes('#education') || sectionId === 'education' || textLow.includes('education') || textLow.includes('academic')) {
        setCursorType('education');
        return;
      }
      if (hrefLow.includes('#hero') || sectionId === 'hero' || textLow.includes('hi, i\'m') || textLow.includes('home')) {
        if (hoverable.closest('.section-title, .hero-headline, .nav-item')) {
          setCursorType('home');
          return;
        }
      }

      // Check project card
      if (hoverable.closest('.project-retro-card, .project-box-wrapper')) {
        // If hovering specific github button inside project card
        if (hoverable.closest('.ref-btn-github') || textLow.includes('github')) {
          setCursorType('github');
        } else {
          setCursorType('project');
        }
        return;
      }

      // Check text or href for GitHub / Resume / Contact
      if (textLow.includes('github') || hrefLow.includes('github.com')) {
        setCursorType('github');
      } else if (textLow.includes('resume') || hrefLow.includes('resume') || hrefLow.includes('.pdf')) {
        setCursorType('resume');
      } else if (
        textLow.includes("let's connect") ||
        textLow.includes("let's talk") ||
        textLow.includes('email me') ||
        textLow.includes('contact') ||
        hrefLow.includes('mailto:') ||
        sectionId === 'contact'
      ) {
        setCursorType('contact');
      } else {
        setCursorType('link');
      }
    };

    const onMouseDown = () => setIsClicked(true);
    const onMouseUp = () => setIsClicked(false);
    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.body.addEventListener('mouseleave', onMouseLeave);
    document.body.addEventListener('mouseenter', onMouseEnter);

    // Smooth animation loop using rAF
    const animate = () => {
      // Lerp for smooth ring movement
      const ease = 0.2;
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * ease;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * ease;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mousePos.current.x}px, ${mousePos.current.y}px, 0)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`;
      }

      rafId.current = requestAnimationFrame(animate);
    };

    rafId.current = requestAnimationFrame(animate);

    // Trail cleanup interval
    const trailInterval = setInterval(() => {
      setTrailDots((prev) =>
        prev
          .map((d) => ({ ...d, opacity: d.opacity - 0.15 }))
          .filter((d) => d.opacity > 0)
      );
    }, 40);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.body.removeEventListener('mouseleave', onMouseLeave);
      document.body.removeEventListener('mouseenter', onMouseEnter);
      if (rafId.current) cancelAnimationFrame(rafId.current);
      clearInterval(trailInterval);
    };
  }, [isTouchDevice, isVisible]);

  if (isTouchDevice) return null;

  const getLabelContent = () => {
    switch (cursorType) {
      case 'project':
        return 'VIEW ↗';
      case 'github':
        return 'GITHUB ↗';
      case 'resume':
        return 'RESUME ↓';
      case 'contact':
        return "LET'S TALK ↗";
      case 'about':
        return 'ABOUT ME ✦';
      case 'skills':
        return 'MY SKILLS ⚡';
      case 'experience':
        return 'EXPERIENCE 💼';
      case 'certs':
        return 'CERTS 🏆';
      case 'education':
        return 'EDUCATION 🎓';
      case 'home':
        return 'WELCOME 👋';
      default:
        return null;
    }
  };

  const labelText = getLabelContent();

  return (
    <div className={`custom-cursor-container ${isVisible ? 'cursor-visible' : ''} cursor-${cursorType}`}>
      {/* Trail Dots */}
      {trailDots.map((dot) => (
        <div
          key={dot.id}
          className="cursor-trail-dot"
          style={{
            transform: `translate3d(${dot.x}px, ${dot.y}px, 0)`,
            opacity: dot.opacity,
          }}
        />
      ))}

      {/* Main Solid Dot */}
      <div
        ref={dotRef}
        className={`cursor-dot ${isClicked ? 'cursor-click' : ''}`}
      />

      {/* Outer Ring & Label Container */}
      <div
        ref={ringRef}
        className={`cursor-ring ${isClicked ? 'cursor-ring-click' : ''} ${
          labelText ? 'has-label' : ''
        }`}
      >
        {labelText && <span className="cursor-label">{labelText}</span>}
      </div>
    </div>
  );
};
