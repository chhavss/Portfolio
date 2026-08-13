import React from 'react';
import { Heart, Target, BookOpen, Terminal, Sparkles, Camera, Palette } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="section-padding about-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">BACKGROUND &amp; INTENT</span>
          <h2 className="section-title">A little about me.</h2>
        </div>

        <div className="about-grid">
          {/* Main Editorial Text Column */}
          <div className="about-main-card retro-card">
            <h3 className="about-card-title">
              Engineering with curiosity, precision &amp; creative flare.
            </h3>
            <p className="about-text-p">
              I’m a <strong>Computer Science undergraduate at MSIT</strong>, New Delhi, passionate about building technology that solves real-world problems. My interests sit at the intersection of <strong>AI/ML and full-stack development</strong> — from turning messy data into intelligent models to shipping polished web applications.
            </p>
            <p className="about-text-p">
              On the AI/ML side,I’m exploring <strong>Machine Learning, NLP, LLMs,</strong> and AI safety, experimenting with real-world datasets and building practical <strong>ML pipelines.</strong> On the development side, I enjoy creating responsive, scalable applications with <strong>React, Node.js, MERN </strong>,FastAPI, and Java.</p>
            <p className="about-text-p">
              I’m constantly learning, building, and experimenting — combining <strong> problem-solving fundamentals </strong> with the creativity of turning ideas into products.
            </p>

            <div className="about-highlights-row">
              <div className="about-highlight-item">
                <span className="highlight-number">01</span>
                <div>
                  <strong>Problem Solving</strong>
                  <p>Algorithmic thinking through Data Structures &amp; Graphs in Java.</p>
                </div>
              </div>
              <div className="about-highlight-item">
                <span className="highlight-number">02</span>
                <div>
                  <strong>Modern Web Development</strong>
                  <p>Building responsive, accessible full-stack apps with React &amp; Node.</p>
                </div>
              </div>
              <div className="about-highlight-item">
                <span className="highlight-number">03</span>
                <div>
                  <strong>AI / ML Exploration</strong>
                  <p>Applying intelligent models to solve real-world automation tasks.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Side Playful Retro Information Cards */}
          <div className="about-side-cards">
            {/* Card 1: Currently Learning */}
            <div className="retro-card info-box info-box-yellow">
              <div className="info-box-header">
                <BookOpen size={20} />
                <h4>CURRENTLY LEARNING</h4>
              </div>
              <p className="info-box-content">
                DSA • AI/ML • Full Stack Development • Graph Algorithms
              </p>
              <div className="info-box-footer">
                <span className="sticker sticker-white">ALWAYS GROWING</span>
              </div>
            </div>

            {/* Card 2: Beyond Code */}
            <div className="retro-card info-box info-box-pink">
              <div className="info-box-header">
                <Palette size={20} />
                <h4>BEYOND CODE</h4>
              </div>

              <div className="beyond-code-content">
                <div className="beyond-item">
                  <div className="beyond-item-title">
                    <Camera size={16} /> <span>Photography</span>
                  </div>
                  <p className="beyond-item-desc">
                    Visual storytelling &amp; creative exploration
                  </p>
                </div>

                <div className="beyond-item">
                  <div className="beyond-item-title">
                    <Palette size={16} /> <span>Fine Arts</span>
                  </div>
                  <span className="sticker sticker-white fine-arts-badge">
                    100/100 — Class 12 Board
                  </span>
                </div>

                <div className="beyond-item">
                  <div className="beyond-item-title">
                    <Sparkles size={16} /> <span>Creative Communities</span>
                  </div>
                  <p className="beyond-item-desc">
                    Prakriti • NSS (Creativity &amp; Photography)
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3: Focus */}
            <div className="retro-card info-box info-box-red">
              <div className="info-box-header">
                <Target size={20} />
                <h4>FOCUS</h4>
              </div>
              <p className="info-box-content">
                Software Engineering + AI Systems Integration
              </p>
              <div className="info-box-footer">
                <span className="sticker sticker-yellow">MISSION DRIVEN</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
