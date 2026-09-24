import React from 'react';
import { FARM_CONFIG } from '../config/farmConfig';
import { Grape, Phone, MessageSquare, MapPin, Mail, Heart } from 'lucide-react';

export default function Footer() {
  const { brandName, shortBrandName, ownerName, contact, navLinks, tagline } = FARM_CONFIG;

  return (
    <footer style={{ backgroundColor: '#07160e', color: '#a2c2b0', paddingTop: '4.5rem', paddingBottom: '2.5rem', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '3rem', marginBottom: '3.5rem' }}>
          
          {/* Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem', color: '#ffffff' }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                backgroundColor: 'var(--color-accent-leaf)',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Grape size={22} />
              </div>
              <span style={{ fontWeight: '800', fontSize: '1.15rem', color: '#ffffff' }}>
                {shortBrandName}
              </span>
            </div>

            <p style={{ fontSize: '0.92rem', lineHeight: '1.75', color: '#88a896', marginBottom: '1.25rem' }}>
              {brandName} is a family-owned agricultural farm dedicated to cultivating fresh grapes and quality seasonal fruits with genuine care and respect for the land.
            </p>

            <div style={{ fontSize: '0.88rem', color: '#52b788', fontWeight: '600' }}>
              Owner: {ownerName}
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '1.1rem', fontWeight: '700', marginBottom: '1.25rem' }}>
              Quick Navigation
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    style={{ color: '#a2c2b0', textDecoration: 'none', fontSize: '0.92rem', transition: 'var(--transition-fast)' }}
                    className="footer-link-hover"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '1.1rem', fontWeight: '700', marginBottom: '1.25rem' }}>
              Direct Contact
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.92rem', color: '#a2c2b0' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Phone size={16} style={{ color: '#52b788', flexShrink: 0 }} />
                <span>Phone: {contact.phone}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <MessageSquare size={16} style={{ color: '#25d366', flexShrink: 0 }} />
                <span>WhatsApp: {contact.whatsapp}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Mail size={16} style={{ color: '#52b788', flexShrink: 0 }} />
                <span>Email: {contact.email}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <MapPin size={16} style={{ color: '#52b788', flexShrink: 0, marginTop: '3px' }} />
                <span>{contact.address}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar & Copyright */}
        <div style={{
          paddingTop: '2rem',
          borderTop: '1px solid rgba(255,255,255,0.08)',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '1rem',
          fontSize: '0.85rem',
          color: '#658574'
        }}>
          <div>
            © 2026 {brandName}. All rights reserved.
          </div>
          <div>
            Cultivated with Care & Tradition
          </div>
        </div>

      </div>

      <style>{`
        .footer-link-hover:hover {
          color: #52b788 !important;
          padding-left: 4px;
        }
      `}</style>
    </footer>
  );
}
