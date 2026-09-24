import React, { useState } from 'react';
import { FARM_CONFIG } from '../config/farmConfig';
import { MessageSquare, Phone, MapPin, Play, ChevronDown, Grape, ShieldCheck } from 'lucide-react';

export default function Hero({ onOpenVideo }) {
  const [videoError, setVideoError] = useState(false);

  return (
    <section id="hero" style={{ position: 'relative', minHeight: '90vh', display: 'flex', alignItems: 'center', background: '#0a1e14', color: '#ffffff', overflow: 'hidden' }}>
      
      {/* Background Media Container (Video with Fallback Image) */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
        {!videoError ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            onError={() => setVideoError(true)}
            poster={FARM_CONFIG.media.heroImage}
            style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.45 }}
          >
            <source src={FARM_CONFIG.media.heroVideo} type="video/mp4" />
          </video>
        ) : (
          <img
            src={FARM_CONFIG.media.heroImage}
            alt={FARM_CONFIG.brandName}
            style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.45 }}
          />
        )}
        
        {/* Dark Gradient Overlays for High Contrast Text Readability */}
        <div style={{ 
          position: 'absolute', 
          inset: 0, 
          background: 'linear-gradient(180deg, rgba(10,30,20,0.85) 0%, rgba(10,30,20,0.55) 50%, rgba(10,30,20,0.95) 100%)' 
        }} />
      </div>

      {/* Hero Content Container */}
      <div className="container" style={{ position: 'relative', zIndex: 2, paddingTop: '4rem', paddingBottom: '5rem' }}>
        <div style={{ maxWidth: '820px' }}>
          
          {/* Authentic Farm Badge */}
          <div 
            className="badge badge-emerald" 
            style={{ 
              marginBottom: '1.5rem', 
              background: 'rgba(216, 243, 220, 0.15)', 
              color: '#d8f3dc', 
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(116, 198, 157, 0.4)' 
            }}
          >
            <ShieldCheck size={16} />
            <span>Family Farm • Real Vineyard Media</span>
          </div>

          {/* Main Title */}
          <h1 
            style={{ 
              fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', 
              fontWeight: '800', 
              color: '#ffffff',
              lineHeight: '1.15',
              marginBottom: '1.25rem',
              letterSpacing: '-0.02em'
            }}
          >
            {FARM_CONFIG.brandName}
          </h1>

          {/* Subtitle / Tagline */}
          <p 
            style={{ 
              fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)', 
              fontWeight: '600', 
              color: '#74c69d',
              marginBottom: '1.25rem'
            }}
          >
            {FARM_CONFIG.tagline}
          </p>

          {/* Farm Description */}
          <p 
            style={{ 
              fontSize: 'clamp(0.98rem, 1.5vw, 1.15rem)', 
              color: '#e2e8df', 
              lineHeight: '1.7',
              marginBottom: '2.5rem',
              maxWidth: '720px'
            }}
          >
            {FARM_CONFIG.description}
          </p>

          {/* Call to Action Buttons */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center', marginBottom: '2.5rem' }}>
            <a href="#contact" className="btn btn-primary" style={{ padding: '0.95rem 2rem', fontSize: '1.05rem' }}>
              <Phone size={18} />
              <span>Contact Farm</span>
            </a>

            <a 
              href={`https://wa.me/${FARM_CONFIG.contact.whatsappRaw}?text=${encodeURIComponent(FARM_CONFIG.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp pulse-animation"
              style={{ padding: '0.95rem 2rem', fontSize: '1.05rem' }}
            >
              <MessageSquare size={18} />
              <span>Chat on WhatsApp</span>
            </a>

            <button 
              onClick={() => onOpenVideo(FARM_CONFIG.media.videos[0])}
              className="btn btn-outline-white"
              style={{ padding: '0.95rem 1.75rem', fontSize: '1rem', cursor: 'pointer' }}
            >
              <Play size={18} fill="#ffffff" />
              <span>Watch Farm Video</span>
            </button>
          </div>

          {/* Hero Quick Location / Owner Info Bar */}
          <div style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: '1.5rem', 
            paddingTop: '1.5rem', 
            borderTop: '1px solid rgba(255,255,255,0.15)',
            fontSize: '0.9rem',
            color: '#b7e4c7'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Grape size={18} style={{ color: '#52b788' }} />
              <span>Owner: <strong>{FARM_CONFIG.ownerName}</strong></span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <MapPin size={18} style={{ color: '#52b788' }} />
              <span>Sawansi Village Fruit Belt</span>
            </div>
          </div>

        </div>
      </div>

      {/* Down Arrow Indicator */}
      <a 
        href="#about" 
        aria-label="Scroll to About Section"
        style={{
          position: 'absolute',
          bottom: '1.5rem',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 3,
          color: '#ffffff',
          opacity: 0.7,
          transition: 'var(--transition-fast)'
        }}
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
}
