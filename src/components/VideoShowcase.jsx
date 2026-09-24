import React from 'react';
import { FARM_CONFIG } from '../config/farmConfig';
import { Video, Play, Clock, Sparkles } from 'lucide-react';

export default function VideoShowcase({ onPlayVideo }) {
  const { videos } = FARM_CONFIG.media;

  return (
    <section id="videos" className="section-padding" style={{ backgroundColor: '#0d1d14', color: '#ffffff' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3.5rem auto' }}>
          <div className="badge badge-emerald" style={{ marginBottom: '0.75rem', background: 'rgba(64, 145, 108, 0.2)', color: '#74c69d', border: '1px solid rgba(116, 198, 157, 0.3)' }}>
            <Video size={16} />
            <span>Authentic Farm Footage</span>
          </div>
          <h2 className="heading-display" style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', color: '#ffffff', marginBottom: '1rem' }}>
            See Our Farm in Action
          </h2>
          <p style={{ color: '#b7e4c7', fontSize: '1.1rem', lineHeight: '1.7' }}>
            Experience the farm through real videos captured directly in our fields and grape vineyards.
          </p>
        </div>

        {/* Highlight Main Featured Video */}
        {videos.length > 0 && (
          <div 
            onClick={() => onPlayVideo(videos[0])}
            style={{
              position: 'relative',
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-xl)',
              marginBottom: '3rem',
              cursor: 'pointer',
              border: '1px solid rgba(116, 198, 157, 0.3)'
            }}
            className="video-card"
          >
            <div style={{ position: 'relative', aspectRatio: '21/9', minHeight: '280px', width: '100%', background: '#050d09' }}>
              <video
                muted
                loop
                playsInline
                preload="metadata"
                style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.7 }}
              >
                <source src={videos[0].src} type="video/mp4" />
              </video>
              
              <div className="play-overlay">
                <div style={{ textAlign: 'center' }}>
                  <div className="play-icon-btn" style={{ margin: '0 auto 1rem auto', width: '72px', height: '72px' }}>
                    <Play size={32} fill="currentColor" />
                  </div>
                  <span style={{ color: '#ffffff', fontWeight: '700', fontSize: '1.1rem', textShadow: '0 2px 8px rgba(0,0,0,0.8)' }}>
                    Watch Featured Farm Tour ({videos[0].duration})
                  </span>
                </div>
              </div>
            </div>

            <div style={{ padding: '1.5rem 2rem', background: 'linear-gradient(135deg, #11281b, #0d1d14)', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
              <div>
                <span className="badge badge-emerald" style={{ marginBottom: '0.4rem', fontSize: '0.75rem' }}>Featured Video</span>
                <h3 style={{ color: '#ffffff', fontSize: '1.35rem', fontWeight: '700' }}>{videos[0].title} — {videos[0].subtitle}</h3>
                <p style={{ color: '#b7e4c7', fontSize: '0.95rem', margin: 0 }}>{videos[0].description}</p>
              </div>
              <button className="btn btn-primary" style={{ pointerEvents: 'none' }}>
                <Play size={16} fill="#ffffff" />
                <span>Play Full Video</span>
              </button>
            </div>
          </div>
        )}

        {/* Video Grid for Remaining Videos */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.75rem'
        }}>
          {videos.slice(1).map((vid) => (
            <div 
              key={vid.id}
              onClick={() => onPlayVideo(vid)}
              className="video-card"
            >
              <div className="video-thumb-wrapper">
                <video
                  muted
                  playsInline
                  preload="metadata"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                >
                  <source src={`${vid.src}#t=0.5`} type="video/mp4" />
                </video>
                <div className="play-overlay">
                  <div className="play-icon-btn">
                    <Play size={24} fill="currentColor" />
                  </div>
                </div>

                <div style={{
                  position: 'absolute',
                  top: '0.75rem',
                  right: '0.75rem',
                  background: 'rgba(0,0,0,0.7)',
                  backdropFilter: 'blur(4px)',
                  color: '#ffffff',
                  padding: '0.2rem 0.6rem',
                  borderRadius: 'var(--radius-pill)',
                  fontSize: '0.78rem',
                  fontWeight: '600',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.3rem'
                }}>
                  <Clock size={12} />
                  <span>{vid.duration}</span>
                </div>
              </div>

              <div style={{ padding: '1.25rem' }}>
                <div style={{ fontSize: '0.78rem', color: '#74c69d', fontWeight: '600', textTransform: 'uppercase', marginBottom: '0.3rem' }}>
                  {vid.subtitle}
                </div>
                <h3 style={{ color: '#ffffff', fontSize: '1.1rem', fontWeight: '700', marginBottom: '0.4rem' }}>
                  {vid.title}
                </h3>
                <p style={{ color: '#9bbfa9', fontSize: '0.88rem', lineHeight: '1.5', margin: 0 }}>
                  {vid.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
