import React from 'react';
import { SKILL_CATEGORIES } from '../data';
import { Code, Layout, Server, Database, Cpu, Wrench, CheckCircle2 } from 'lucide-react';

export const Skills: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'code': return <Code size={24} />;
      case 'layout': return <Layout size={24} />;
      case 'server': return <Server size={24} />;
      case 'database': return <Database size={24} />;
      case 'cpu': return <Cpu size={24} />;
      case 'wrench': return <Wrench size={24} />;
      default: return <Code size={24} />;
    }
  };

  const getCardAccentClass = (accent: string) => {
    switch (accent) {
      case 'red': return 'skill-card-red';
      case 'yellow': return 'skill-card-yellow';
      case 'pink': return 'skill-card-pink';
      default: return 'skill-card-cream';
    }
  };

  return (
    <section id="skills" className="section-padding skills-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">TOOLKIT &amp; STACK</span>
          <h2 className="section-title">What I work with.</h2>
          <p className="section-description">
            A comprehensive overview of programming languages, frameworks, databases, and AI technologies I utilize to build software.
          </p>
        </div>

        <div className="skills-grid">
          {SKILL_CATEGORIES.map((category) => (
            <div
              key={category.title}
              className={`retro-card skill-category-card ${getCardAccentClass(category.accent)}`}
            >
              {/* Category Header */}
              <div className="skill-card-header">
                <div className="skill-icon-wrapper">
                  {getIcon(category.icon)}
                </div>
                <h3 className="skill-category-title">{category.title}</h3>
              </div>

              {/* Skill Badges */}
              <div className="skill-items-container">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="skill-chip">
                    <CheckCircle2 size={14} className="chip-check" />
                    <span className="chip-name">{skill.name}</span>
                    {skill.tag && (
                      <span className="chip-tag">{skill.tag}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
