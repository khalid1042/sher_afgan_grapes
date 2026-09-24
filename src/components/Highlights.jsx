import React from 'react';
import { FARM_CONFIG } from '../config/farmConfig';
import { Grape, Apple, Video, Sprout, Users, MessageSquare } from 'lucide-react';

const iconMap = {
  Grape: Grape,
  Apple: Apple,
  Video: Video,
  Sprout: Sprout,
  Users: Users,
  MessageSquare: MessageSquare,
};

export default function Highlights() {
  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-alt)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3.5rem auto' }}>
          <div className="badge badge-emerald" style={{ marginBottom: '0.75rem' }}>
            <span>Farm Highlights</span>
          </div>
          <h2 className="heading-display" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', marginBottom: '1rem' }}>
            What Defines Sawansi Farm
          </h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1.05rem', lineHeight: '1.6' }}>
            Built on authentic agricultural principles, family dedication, and honest farming.
          </p>
        </div>

        {/* Highlights Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem'
        }}>
          {FARM_CONFIG.highlights.map((item, index) => {
            const IconComponent = iconMap[item.icon] || Sprout;
            return (
              <div key={index} className="card-farm" style={{ position: 'relative', overflow: 'hidden' }}>
                <div style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '14px',
                  backgroundColor: 'var(--color-accent-mint)',
                  color: 'var(--color-primary-dark)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.25rem'
                }}>
                  <IconComponent size={26} />
                </div>
                
                <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '0.6rem', color: 'var(--color-primary-dark)' }}>
                  {item.title}
                </h3>
                
                <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', lineHeight: '1.6', margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
