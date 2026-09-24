import React from 'react';
import { FARM_CONFIG } from '../config/farmConfig';
import { Sparkles, ShieldCheck, Check } from 'lucide-react';

export function FarmExperience({ onOpenGallery }) {
  return (
    <section className="section-padding" style={{
      background: 'linear-gradient(135deg, var(--color-primary-dark), #143828)',
      color: '#ffffff',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '3rem',
          alignItems: 'center'
        }}>
          <div>
            <div className="badge badge-emerald" style={{ marginBottom: '1rem', background: 'rgba(255,255,255,0.15)', color: '#ffffff' }}>
              <Sparkles size={16} />
              <span>Authentic Land & Harvest</span>
            </div>
            
            <h2 className="heading-display" style={{ color: '#ffffff', fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1.25rem' }}>
              From Our Fields to Your Table
            </h2>
            
            <p style={{ color: '#d8f3dc', fontSize: '1.1rem', lineHeight: '1.75', marginBottom: '2rem' }}>
              Every growing season brings new work, new growth and a new harvest. Explore our farm and see the grapes, fruits and fields that make Sawansi Grapes & Fruit Farm unique.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="#gallery" className="btn btn-primary" style={{ background: 'var(--color-accent-bright)', color: 'var(--color-primary-dark)', fontWeight: '700' }}>
                View Farm Gallery
              </a>
              <a href="#videos" className="btn btn-outline-white">
                Watch Real Field Videos
              </a>
            </div>
          </div>

          {/* Right Image Feature - Full Uncropped View */}
          <div style={{ position: 'relative' }}>
            <div style={{
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              boxShadow: '0 20px 50px rgba(0,0,0,0.4)',
              backgroundColor: '#0a1d13',
              border: '1px solid rgba(255,255,255,0.2)'
            }}>
              <img 
                src={FARM_CONFIG.media.images[1].src} 
                alt={FARM_CONFIG.media.images[1].alt}
                style={{ 
                  width: '100%', 
                  height: 'auto', 
                  maxHeight: '480px',
                  objectFit: 'contain', 
                  objectPosition: 'top center',
                  display: 'block',
                  filter: 'contrast(1.04) brightness(1.02) saturate(1.05)'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function WhyChooseUs() {
  return (
    <section className="section-padding" style={{ backgroundColor: '#ffffff' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3.5rem auto' }}>
          <div className="badge badge-emerald" style={{ marginBottom: '0.75rem' }}>
            <ShieldCheck size={16} />
            <span>Trust & Transparency</span>
          </div>
          <h2 className="heading-display" style={{ fontSize: 'clamp(2rem, 4vw, 2.7rem)', marginBottom: '1rem' }}>
            Why Choose Sawansi Farm
          </h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1.08rem', lineHeight: '1.7' }}>
            We believe in honest farming, genuine family ownership, and direct communication.
          </p>
        </div>

        {/* Why Choose Us Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1.75rem'
        }}>
          {FARM_CONFIG.whyChooseUs.map((item, idx) => (
            <div key={idx} className="card-farm">
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '12px',
                backgroundColor: 'var(--color-accent-mint)',
                color: 'var(--color-primary-dark)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1rem'
              }}>
                <Check size={22} />
              </div>

              <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: 'var(--color-primary-dark)', marginBottom: '0.5rem' }}>
                {item.title}
              </h3>

              <p style={{ fontSize: '0.94rem', color: 'var(--color-text-muted)', lineHeight: '1.6', margin: 0 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
