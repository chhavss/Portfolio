import React from 'react';
import { ArrowDownRight, ArrowUpRight, Code, Sparkles, Terminal, Cpu, Database } from 'lucide-react';
import { SOCIAL_LINKS } from '../data';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="container hero-container">
        {/* Left Column: Headline & Content */}
        <div className="hero-content">
          <div className="hero-badge-wrapper">
            <span className="sticker sticker-yellow hero-sticker">
              <Sparkles size={14} className="icon-spin-subtle" /> B.Tech CSE • Web Developer • AI/ML Enthusiast
            </span>
          </div>

          <h1 className="hero-headline">
            Hi, I'm <span className="highlight-red">Chhavi.</span>
            <br />
            I build things for the web &amp; beyond.
          </h1>

          <p className="hero-subtext">
            Computer Science Engineering student passionate about software development, AI/ML, problem solving, and building meaningful digital experiences.
          </p>

          <div className="hero-cta-group">
            <a href="#projects" className="btn-retro btn-primary hero-btn">
              View My Work <ArrowDownRight size={20} />
            </a>
            <a href={SOCIAL_LINKS.resume} target="_blank" rel="noopener noreferrer" className="btn-retro btn-secondary hero-btn">
              View Resume <ArrowUpRight size={20} />
            </a>
          </div>

          {/* Quick Stats / Highlights */}
          <div className="hero-quick-stats">
            <div className="stat-pill">
              <span className="stat-num">LLMs Safety</span>
              <span className="stat-label"></span>
            </div>
            <div className="stat-pill">
              <span className="stat-num">AIML</span>
              <span className="stat-label"></span>
            </div>
            <div className="stat-pill">
              <span className="stat-num">MERN</span>
              <span className="stat-label"></span>
            </div>
            <div className="stat-pill">
              <span className="stat-num">FAST API</span>
              <span className="stat-label"></span>
            </div>
          </div>
        </div>

        {/* Right Column: Retro 3D Editorial Visual Composition */}
        <div className="hero-visual-col">
          <div className="hero-poster-card">
            {/* Poster Header Bar */}
            <div className="poster-header">
              <div className="poster-dots">
                <span className="dot dot-red"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-green"></span>
              </div>
              <span className="poster-title-text">CHHAVI_DEV_PORTFOLIO.V1</span>
            </div>

            {/* Poster Main Body */}
            <div className="poster-body">
              {/* Floating Tech Labels / Stickers */}
              <div className="hero-badge badge-top-left sticker sticker-red">
                <Code size={14} /> JAVA
              </div>
              <div className="hero-badge badge-top-right sticker sticker-yellow">
                REACT
              </div>
              <div className="hero-badge badge-bottom-left sticker sticker-pink">
                <Cpu size={14} /> AI/ML
              </div>
              <div className="hero-badge badge-bottom-right sticker sticker-cream">
                <Database size={14} /> DSA
              </div>

              {/* Main Illustration Block: Simulated Terminal / Code Editorial Art */}
              <div className="terminal-illustration-box">
                <div className="terminal-top">
                  <Terminal size={18} />
                  <span>bash — developer@chhavi:~</span>
                </div>
                <div className="terminal-code">
                  <p><span className="code-keyword">class</span> <span className="code-class">Developer</span> &#123;</p>
                  <p className="code-indent"><span className="code-keyword">String</span> name = <span className="code-string">"Chhavi"</span>;</p>
                  <p className="code-indent"><span className="code-keyword">String[]</span> skills = &#123;<span className="code-string">"LLMs"</span>, <span className="code-string">"MERN"</span>, <span className="code-string">"AI/ML"</span>&#125;;</p>
                  <p className="code-indent"><span className="code-keyword">boolean</span> passionate = <span className="code-bool">true</span>;</p>
                  <p className="code-indent"><span className="code-keyword">public void</span> <span className="code-func">buildImpact</span>() &#123;</p>
                  <p className="code-indent-2"><span className="code-func">solveDSA</span>();</p>
                  <p className="code-indent-2"><span className="code-func">deployWebApps</span>();</p>
                  <p className="code-indent">&#125;</p>
                  <p>&#125;</p>
                </div>
              </div>

              {/* Decorative Geometric 3D Art Cards */}
              <div className="hero-geom-card card-a">
                <span>⚡ 100% Passion</span>
              </div>
              <div className="hero-geom-card card-b">
                <span>&lt; / &gt; Clean Code</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
