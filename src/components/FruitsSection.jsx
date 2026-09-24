import React from 'react';
import { FARM_CONFIG } from '../config/farmConfig';
import { Apple, Sun, Calendar, MessageSquare, PhoneCall, Leaf } from 'lucide-react';

export default function FruitsSection() {
  const { fruitsInfo } = FARM_CONFIG;

  return (
    <section id="fruits" className="section-padding" style={{ backgroundColor: 'var(--color-bg-light)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3.5rem auto' }}>
          <div className="badge badge-emerald" style={{ marginBottom: '0.75rem' }}>
            <Apple size={16} />
            <span>Farm Harvest</span>
          </div>
          <h2 className="heading-display" style={{ fontSize: 'clamp(2rem, 4vw, 2.6rem)', marginBottom: '1rem' }}>
            Our Fruits & Produce
          </h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1.05rem', lineHeight: '1.7' }}>
            Fresh agricultural produce grown according to natural weather cycles and harvest seasons.
          </p>
        </div>

        {/* Fruit Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          {fruitsInfo.map((fruit, idx) => (
            <div key={idx} className="card-farm" style={{ justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    backgroundColor: 'var(--color-accent-mint)',
                    color: 'var(--color-primary-dark)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Leaf size={24} />
                  </div>
                  <span className={`badge badge-${fruit.statusColor === 'emerald' ? 'emerald' : 'emerald'}`}>
                    {fruit.status}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.3rem', fontWeight: '700', color: 'var(--color-primary-dark)', marginBottom: '0.5rem' }}>
                  {fruit.name}
                </h3>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', color: 'var(--color-accent-leaf)', fontWeight: '600', marginBottom: '0.85rem' }}>
                  <Calendar size={14} />
                  <span>{fruit.season}</span>
                </div>

                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                  {fruit.desc}
                </p>
              </div>

              {/* Inquiry Action */}
              <div style={{ paddingTop: '1.25rem', borderTop: '1px solid var(--color-border)' }}>
                <a 
                  href={`https://wa.me/${FARM_CONFIG.contact.whatsappRaw}?text=${encodeURIComponent(`Hello, I am asking about availability of ${fruit.name} at Sawansi Farm.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  style={{ width: '100%', fontSize: '0.9rem', padding: '0.7rem 1rem' }}
                >
                  <MessageSquare size={16} />
                  <span>Inquire About {fruit.name}</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Note Box for Owner Customization */}
        <div style={{
          marginTop: '3rem',
          padding: '1.5rem',
          borderRadius: 'var(--radius-md)',
          backgroundColor: '#ffffff',
          border: '1px border var(--color-border)',
          boxShadow: 'var(--shadow-sm)',
          textAlign: 'center',
          maxWidth: '800px',
          margin: '3rem auto 0 auto'
        }}>
          <p style={{ fontSize: '0.92rem', color: 'var(--color-text-muted)', margin: 0 }}>
            📌 <strong>Direct Farm Sales:</strong> Seasonal fruit availability varies based on weekly harvest progress. Contact Sher Afgan Khan Sawansi directly for current yield updates.
          </p>
        </div>

      </div>
    </section>
  );
}
