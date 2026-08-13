import React from 'react';
import { EDUCATION_DATA } from '../data';
import { GraduationCap, BookOpen, MapPin, Calendar, CheckCircle2 } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="section-padding education-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">ACADEMICS</span>
          <h2 className="section-title">Education &amp; Foundation.</h2>
        </div>

        <div className="education-card retro-card">
          <div className="education-grid-inner">
            {/* Degree & College Info */}
            <div className="edu-main-info">
              <div className="edu-icon-badge">
                <GraduationCap size={32} />
              </div>

              <div className="edu-title-group">
                <span className="sticker sticker-yellow">DEGREE PROGRAM</span>
                <h3 className="edu-degree-title">{EDUCATION_DATA.degree}</h3>
                <h4 className="edu-institution-name">{EDUCATION_DATA.institution}</h4>

                <div className="edu-meta-pills">
                  <span className="meta-pill">
                    <Calendar size={14} /> {EDUCATION_DATA.year}
                  </span>
                  <span className="meta-pill">
                    <MapPin size={14} /> New Delhi, India
                  </span>
                </div>
              </div>
            </div>

            {/* Coursework Block */}
            <div className="edu-coursework-block">
              <div className="coursework-header">
                <BookOpen size={18} />
                <span>CORE COMPUTER SCIENCE COURSEWORK:</span>
              </div>

              <div className="coursework-chips">
                {EDUCATION_DATA.coursework.map((course) => (
                  <span key={course} className="course-chip">
                    <CheckCircle2 size={14} /> {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
