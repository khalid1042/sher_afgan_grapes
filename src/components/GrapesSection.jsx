import React from 'react';
import { FARM_CONFIG } from '../config/farmConfig';
import { Grape, MessageSquare, Sparkles } from 'lucide-react';

export default function GrapesSection({ onOpenImage }) {
  const { grapesInfo, media } = FARM_CONFIG;

  return (
    <section id="grapes" className="section-padding" style={{ backgroundColor: '#ffffff' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 3.5rem auto' }}>
          <div className="badge badge-grape" style={{ marginBottom: '0.75rem' }}>
            <Grape size={16} />
            <span>Vineyard Highlight</span>
          </div>
          <h2 className="heading-display" style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', marginBottom: '1rem' }}>
            {grapesInfo.title}
          </h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', lineHeight: '1.7' }}>
            {grapesInfo.description}
          </p>
        </div>

        {/* Feature Banner Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2.5rem',
          alignItems: 'center',
          marginBottom: '3.5rem'
        }}>
          
          {/* Left Text & Cultivation Stages */}
          <div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1.25rem', color: 'var(--color-primary-dark)' }}>
              Vineyard Lifecycle & Cultivation
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
              {grapesInfo.stages.map((stage, idx) => (
                <div 
                  key={idx} 
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '1rem',
                    padding: '1rem 1.25rem',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'var(--color-bg-light)',
                    border: '1px solid var(--color-border)'
                  }}
                >
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--color-grape-deep)',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: '700',
                    fontSize: '0.85rem',
                    flexShrink: 0,
                    marginTop: '2px'
                  }}>
                    0{idx + 1}
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.05rem', fontWeight: '700', color: 'var(--color-primary-dark)' }}>
                      {stage.name}
                    </h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', margin: 0 }}>
                      {stage.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <a 
              href={`https://wa.me/${FARM_CONFIG.contact.whatsappRaw}?text=${encodeURIComponent('Hello, I am inquiring about current Grape Availability at Sawansi Farm.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
              style={{ padding: '0.9rem 1.75rem', fontSize: '1rem' }}
            >
              <MessageSquare size={18} />
              <span>Ask About Grape Availability</span>
            </a>
          </div>

          {/* Right Image Feature - Full Image View */}
          <div style={{ position: 'relative' }}>
            <div 
              onClick={() => onOpenImage(media.images[0])}
              style={{
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-xl)',
                cursor: 'pointer',
                position: 'relative',
                backgroundColor: '#0a1d13',
                border: '1px solid var(--color-border)'
              }}
              className="card-farm"
            >
              <img 
                src={media.images[0].src} 
                alt={media.images[0].alt}
                style={{ 
                  width: '100%', 
                  height: 'auto', 
                  maxHeight: '520px', 
                  objectFit: 'contain', 
                  objectPosition: 'top center',
                  display: 'block',
                  filter: 'contrast(1.04) brightness(1.02) saturate(1.05)'
                }}
              />
              <div style={{
                background: 'linear-gradient(180deg, rgba(10,29,19,0.7) 0%, rgba(74, 21, 59, 0.95) 100%)',
                padding: '1.25rem',
                color: '#ffffff'
              }}>
                <div className="badge badge-emerald" style={{ marginBottom: '0.4rem', background: 'rgba(255,255,255,0.2)', color: '#ffffff', fontSize: '0.78rem' }}>
                  <Sparkles size={14} />
                  <span>Full Photo View • Click to Expand</span>
                </div>
                <h4 style={{ color: '#ffffff', fontSize: '1.2rem', fontWeight: '700', margin: 0 }}>
                  Sher Afgan Khan Grape Vineyard
                </h4>
                <p style={{ fontSize: '0.88rem', color: '#e2e8df', marginTop: '0.2rem', margin: 0 }}>
                  Complete uncropped view of grape harvest & farm canopy.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
