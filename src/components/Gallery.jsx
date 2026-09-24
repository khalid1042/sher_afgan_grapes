import React from 'react';
import { FARM_CONFIG } from '../config/farmConfig';
import { Camera, Maximize2 } from 'lucide-react';

export default function Gallery({ onOpenImage }) {
  const { images } = FARM_CONFIG.media;

  return (
    <section id="gallery" className="section-padding" style={{ backgroundColor: '#ffffff' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3.5rem auto' }}>
          <div className="badge badge-emerald" style={{ marginBottom: '0.75rem' }}>
            <Camera size={16} />
            <span>Farm Gallery</span>
          </div>
          <h2 className="heading-display" style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', marginBottom: '1rem' }}>
            Life at Our Farm
          </h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1.08rem', lineHeight: '1.7' }}>
            High-resolution authentic photographs displaying the complete full view of fields and grapes at Sher Afgan Khan Sawansi Grapes & Fruit Farm.
          </p>
        </div>

        {/* Uncropped Responsive Gallery Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem'
        }}>
          {images.map((img) => (
            <div 
              key={img.id}
              onClick={() => onOpenImage(img)}
              style={{
                position: 'relative',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-md)',
                cursor: 'pointer',
                backgroundColor: '#0a1d13',
                border: '1px solid var(--color-border)'
              }}
              className="card-farm"
            >
              <div style={{ position: 'relative', width: '100%', backgroundColor: '#07160e', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img 
                  src={img.src} 
                  alt={img.alt}
                  loading="lazy"
                  style={{ 
                    width: '100%', 
                    height: 'auto',
                    maxHeight: '520px',
                    objectFit: 'contain', 
                    objectPosition: 'top center',
                    display: 'block',
                    transition: 'var(--transition-normal)',
                    filter: 'contrast(1.04) brightness(1.02) saturate(1.05)'
                  }}
                />
              </div>
              
              {/* Caption Overlay Bar */}
              <div style={{
                padding: '1.25rem',
                background: 'linear-gradient(180deg, #0d2418, #07160e)',
                color: '#ffffff'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                  <span className="badge badge-emerald" style={{ background: 'rgba(255,255,255,0.2)', color: '#ffffff', fontSize: '0.75rem' }}>
                    {img.category}
                  </span>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255,255,255,0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff'
                  }}>
                    <Maximize2 size={16} />
                  </div>
                </div>

                <h3 style={{ color: '#ffffff', fontSize: '1.15rem', fontWeight: '700', margin: 0 }}>
                  {img.title}
                </h3>
                <p style={{ color: '#d8f3dc', fontSize: '0.88rem', marginTop: '0.2rem', margin: 0 }}>
                  {img.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
