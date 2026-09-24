import React from 'react';
import { FARM_CONFIG } from '../config/farmConfig';
import { Sprout, Droplets, Sun, Calendar, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function FarmingPractices() {
  const { farmingPractices } = FARM_CONFIG;

  return (
    <section id="farming" className="section-padding" style={{ backgroundColor: 'var(--color-bg-alt)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3.5rem auto' }}>
          <div className="badge badge-emerald" style={{ marginBottom: '0.75rem' }}>
            <Sprout size={16} />
            <span>Agricultural Stewardship</span>
          </div>
          <h2 className="heading-display" style={{ fontSize: 'clamp(2rem, 4vw, 2.7rem)', marginBottom: '1rem' }}>
            Our Farming Practices
          </h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1.08rem', lineHeight: '1.7' }}>
            Combining traditional agricultural experience with attentive daily crop monitoring and resource care.
          </p>
        </div>

        {/* Practice Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.75rem'
        }}>
          {farmingPractices.map((practice, idx) => (
            <div key={idx} className="card-farm" style={{ position: 'relative' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '1.25rem'
              }}>
                <span style={{
                  fontSize: '1.75rem',
                  fontWeight: '800',
                  color: 'var(--color-accent-leaf)',
                  lineHeight: 1
                }}>
                  {practice.step}
                </span>
                <CheckCircle2 size={22} style={{ color: 'var(--color-accent-bright)' }} />
              </div>

              <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: 'var(--color-primary-dark)', marginBottom: '0.6rem' }}>
                {practice.title}
              </h3>

              <p style={{ fontSize: '0.94rem', color: 'var(--color-text-muted)', lineHeight: '1.6', margin: 0 }}>
                {practice.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
