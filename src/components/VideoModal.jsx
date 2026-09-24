import React, { useEffect } from 'react';
import { X, MessageSquare, Video } from 'lucide-react';
import { FARM_CONFIG } from '../config/farmConfig';

export default function VideoModal({ video, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!video) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div 
        onClick={(e) => e.stopPropagation()}
        style={{
          position: 'relative',
          maxWidth: '960px',
          width: '100%',
          maxHeight: '90vh',
          backgroundColor: '#07160e',
          borderRadius: 'var(--radius-lg)',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: 'var(--shadow-xl)',
          border: '1px solid rgba(255,255,255,0.1)'
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close Video Player"
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            zIndex: 10,
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            backgroundColor: 'rgba(0,0,0,0.6)',
            color: '#ffffff',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backdropFilter: 'blur(4px)'
          }}
        >
          <X size={22} />
        </button>

        {/* Video Player Container */}
        <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', backgroundColor: '#000000' }}>
          <video
            src={video.src}
            controls
            autoPlay
            playsInline
            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
          >
            Your browser does not support HTML5 video playback.
          </video>
        </div>

        {/* Video Info Footer */}
        <div style={{ padding: '1.25rem 1.5rem', background: '#0a1d13', color: '#ffffff', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.3rem' }}>
              <span className="badge badge-emerald" style={{ fontSize: '0.75rem' }}>{video.subtitle || 'Farm Footage'}</span>
              <span style={{ fontSize: '0.82rem', color: '#74c69d' }}>Duration: {video.duration}</span>
            </div>
            <h3 style={{ color: '#ffffff', fontSize: '1.2rem', fontWeight: '700' }}>{video.title}</h3>
            <p style={{ color: '#a2c2b0', fontSize: '0.9rem', margin: 0 }}>{video.description}</p>
          </div>

          <a 
            href={`https://wa.me/${FARM_CONFIG.contact.whatsappRaw}?text=${encodeURIComponent(`Hello, I watched video '${video.title}' on your website and want to ask about your farm harvest.`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp"
            style={{ padding: '0.65rem 1.25rem', fontSize: '0.88rem' }}
          >
            <MessageSquare size={16} />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
