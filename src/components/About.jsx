import React from 'react';
import { FARM_CONFIG } from '../config/farmConfig';
import { CheckCircle2, Sprout } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="section-padding" style={{ backgroundColor: 'var(--color-bg-light)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
          
          {/* Visual Column - Authentic Full Image without Cropping */}
          <div style={{ position: 'relative' }}>
            <div style={{ 
              borderRadius: 'var(--radius-lg)', 
              overflow: 'hidden', 
              boxShadow: 'var(--shadow-xl)',
              position: 'relative',
              backgroundColor: '#0a1d13',
              padding: '0.5rem',
              border: '1px solid var(--color-border)'
            }}>
              <img 
                src={FARM_CONFIG.media.images[0].src} 
                alt={FARM_CONFIG.media.images[0].alt}
                style={{ 
                  width: '100%', 
                  height: 'auto', 
                  maxHeight: '520px',
                  objectFit: 'contain', 
                  objectPosition: 'top center',
                  display: 'block',
                  borderRadius: 'var(--radius-md)',
                  filter: 'contrast(1.04) brightness(1.02) saturate(1.05)'
                }}
              />
              
              <div style={{
                padding: '1rem',
                backgroundColor: 'rgba(10, 29, 19, 0.95)',
                color: '#ffffff',
                borderBottomLeftRadius: 'var(--radius-md)',
                borderBottomRightRadius: 'var(--radius-md)'
              }}>
                <span className="badge badge-emerald" style={{ marginBottom: '0.4rem', background: '#2d6a4f', color: '#ffffff' }}>
                  Full Farm Harvest View
                </span>
                <h3 style={{ color: '#ffffff', fontSize: '1.15rem', fontWeight: '700', margin: 0 }}>
                  Sawansi Fresh Grapes & Vineyard Setup
                </h3>
              </div>
            </div>

            {/* Floating Experience Badge */}
            <div style={{
              position: 'absolute',
              top: '-1rem',
              right: '-1rem',
              background: 'linear-gradient(135deg, var(--color-primary-dark), var(--color-primary))',
              color: '#ffffff',
              padding: '1.25rem 1.5rem',
              borderRadius: 'var(--radius-md)',
              boxShadow: 'var(--shadow-lg)',
              maxWidth: '180px',
              display: 'none',
              sm: 'block',
              zIndex: 5
            }} className="experience-box">
              <div style={{ fontSize: '1.8rem', fontWeight: '800', lineHeight: '1', color: '#52b788' }}>
                100%
              </div>
              <div style={{ fontSize: '0.85rem', fontWeight: '600', marginTop: '0.25rem' }}>
                Full Uncropped Real Media
              </div>
            </div>
          </div>

          {/* Text Content Column */}
          <div>
            <div className="badge badge-emerald" style={{ marginBottom: '1rem' }}>
              <Sprout size={14} />
              <span>About Our Farm</span>
            </div>

            <h2 className="heading-display" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', marginBottom: '1.25rem' }}>
              About Sher Afgan Khan Sawansi Grapes & Fruit Farm
            </h2>

            <p style={{ fontSize: '1.05rem', color: 'var(--color-text-main)', lineHeight: '1.75', marginBottom: '1.25rem' }}>
              Sher Afgan Khan Sawansi Grapes & Fruit Farm is a family-focused agricultural farm dedicated to growing grapes and seasonal fruits. The farm combines traditional farming knowledge with careful attention to plant health, fruit quality, irrigation, and cultivation practices.
            </p>

            <p style={{ fontSize: '1rem', color: 'var(--color-text-muted)', lineHeight: '1.75', marginBottom: '1.75rem' }}>
              Our goal is simple: grow healthy, fresh and quality fruit while taking care of the land and crops throughout the growing season.
            </p>

            {/* Core Values Checklist */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <CheckCircle2 size={20} style={{ color: 'var(--color-accent-leaf)', flexShrink: 0 }} />
                <span style={{ fontWeight: '600', fontSize: '0.95rem' }}>Dedicated Vine Management</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <CheckCircle2 size={20} style={{ color: 'var(--color-accent-leaf)', flexShrink: 0 }} />
                <span style={{ fontWeight: '600', fontSize: '0.95rem' }}>Thoughtful Water Irrigation</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <CheckCircle2 size={20} style={{ color: 'var(--color-accent-leaf)', flexShrink: 0 }} />
                <span style={{ fontWeight: '600', fontSize: '0.95rem' }}>Seasonal Fruit Harvesting</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <CheckCircle2 size={20} style={{ color: 'var(--color-accent-leaf)', flexShrink: 0 }} />
                <span style={{ fontWeight: '600', fontSize: '0.95rem' }}>Direct Owner Communication</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="#grapes" className="btn btn-primary">
                Explore Our Grapes
              </a>
              <a href="#videos" className="btn btn-secondary">
                See Farm Videos
              </a>
            </div>

          </div>

        </div>
      </div>
      
      <style>{`
        @media (min-width: 576px) {
          .experience-box {
            display: block !important;
          }
        }
      `}</style>
    </section>
  );
}
