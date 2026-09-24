import React, { useEffect } from 'react';
import { X, MessageSquare } from 'lucide-react';
import { FARM_CONFIG } from '../config/farmConfig';

export default function LightboxModal({ image, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!image) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div 
        onClick={(e) => e.stopPropagation()}
        style={{
          position: 'relative',
          maxWidth: '1000px',
          width: '100%',
          maxHeight: '92vh',
          backgroundColor: '#07160e',
          borderRadius: 'var(--radius-lg)',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: 'var(--shadow-xl)',
          border: '1px solid rgba(255,255,255,0.15)'
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close Lightbox"
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            zIndex: 10,
            width: '42px',
            height: '42px',
            borderRadius: '50%',
            backgroundColor: 'rgba(0,0,0,0.75)',
            color: '#ffffff',
            border: '1px solid rgba(255,255,255,0.3)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backdropFilter: 'blur(4px)'
          }}
        >
          <X size={22} />
        </button>

        {/* Full Image Display Container */}
        <div style={{ flex: 1, overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#000000', padding: '1rem' }}>
          <img 
            src={image.src} 
            alt={image.alt}
            style={{ 
              maxWidth: '100%', 
              maxHeight: '75vh', 
              objectFit: 'contain',
              display: 'block',
              filter: 'contrast(1.05) brightness(1.02) saturate(1.05)',
              borderRadius: 'var(--radius-sm)'
            }}
          />
        </div>

        {/* Image Description Footer */}
        <div style={{ padding: '1.25rem 1.5rem', background: '#0a1d13', color: '#ffffff', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
          <div>
            <span className="badge badge-emerald" style={{ marginBottom: '0.4rem', fontSize: '0.75rem' }}>
              {image.category || 'Full Farm Media'}
            </span>
            <h3 style={{ color: '#ffffff', fontSize: '1.2rem', fontWeight: '700' }}>{image.title}</h3>
            <p style={{ color: '#a2c2b0', fontSize: '0.9rem', margin: 0 }}>{image.description}</p>
          </div>

          <a 
            href={`https://wa.me/${FARM_CONFIG.contact.whatsappRaw}?text=${encodeURIComponent(`Hello, I saw photo '${image.title}' on your website and want to ask about grape/fruit availability.`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp"
            style={{ padding: '0.65rem 1.25rem', fontSize: '0.88rem' }}
          >
            <MessageSquare size={16} />
            <span>Inquire About Produce</span>
          </a>
        </div>
      </div>
    </div>
  );
}
