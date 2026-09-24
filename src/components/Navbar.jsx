import React, { useState } from 'react';
import { FARM_CONFIG } from '../config/farmConfig';
import { Menu, X, Phone, MessageSquare, Grape } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="navbar-sticky">
      <div className="container">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '80px' }}>
          
          {/* Brand Logo & Name */}
          <a 
            href="#hero" 
            onClick={closeMenu}
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.75rem', 
              textDecoration: 'none',
              color: 'var(--color-primary-dark)'
            }}
          >
            <div style={{
              width: '44px',
              height: '44px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, var(--color-primary-dark), var(--color-accent-leaf))',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              boxShadow: '0 4px 12px rgba(27, 67, 50, 0.2)'
            }}>
              <Grape size={24} />
            </div>
            <div>
              <div style={{ fontWeight: '800', fontSize: '1.1rem', letterSpacing: '-0.01em', lineHeight: '1.2' }}>
                Sawansi Farm
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', fontWeight: '600' }}>
                Grapes & Fruit Farm
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav style={{ display: 'none', md: 'flex', gap: '1.75rem', alignItems: 'center' }} className="desktop-nav">
            {FARM_CONFIG.navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                style={{
                  textDecoration: 'none',
                  color: 'var(--color-text-main)',
                  fontWeight: '600',
                  fontSize: '0.95rem',
                  transition: 'var(--transition-fast)'
                }}
                className="nav-link-hover"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Action Buttons */}
          <div style={{ display: 'none', md: 'flex', alignItems: 'center', gap: '0.75rem' }} className="desktop-actions">
            <a 
              href={`tel:${FARM_CONFIG.contact.phoneRaw}`}
              className="btn btn-secondary"
              style={{ padding: '0.65rem 1.25rem', fontSize: '0.88rem' }}
            >
              <Phone size={16} />
              <span>Call Farm</span>
            </a>
            <a 
              href={`https://wa.me/${FARM_CONFIG.contact.whatsappRaw}?text=${encodeURIComponent(FARM_CONFIG.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
              style={{ padding: '0.65rem 1.25rem', fontSize: '0.88rem' }}
            >
              <MessageSquare size={16} />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button 
            onClick={toggleMobileMenu}
            aria-label="Toggle Navigation Menu"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '42px',
              height: '42px',
              borderRadius: '10px',
              border: '1px solid var(--color-border)',
              background: '#ffffff',
              cursor: 'pointer',
              color: 'var(--color-primary-dark)'
            }}
            className="mobile-toggle-btn"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div style={{
          background: '#ffffff',
          borderTop: '1px solid var(--color-border)',
          padding: '1.5rem',
          boxShadow: 'var(--shadow-lg)'
        }} className="mobile-drawer">
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
            {FARM_CONFIG.navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                style={{
                  textDecoration: 'none',
                  color: 'var(--color-primary-dark)',
                  fontWeight: '700',
                  fontSize: '1.05rem',
                  padding: '0.5rem 0',
                  borderBottom: '1px solid #f0f0f0'
                }}
              >
                {link.name}
              </a>
            ))}
          </nav>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <a 
              href={`tel:${FARM_CONFIG.contact.phoneRaw}`}
              className="btn btn-secondary"
              style={{ width: '100%', justifyContent: 'center' }}
              onClick={closeMenu}
            >
              <Phone size={18} />
              <span>Call Farm ({FARM_CONFIG.contact.phone})</span>
            </a>
            <a 
              href={`https://wa.me/${FARM_CONFIG.contact.whatsappRaw}?text=${encodeURIComponent(FARM_CONFIG.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
              style={{ width: '100%', justifyContent: 'center' }}
              onClick={closeMenu}
            >
              <MessageSquare size={18} />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      )}

      {/* Style tweaks for navbar responsive rules */}
      <style>{`
        @media (min-width: 992px) {
          .desktop-nav, .desktop-actions {
            display: flex !important;
          }
          .mobile-toggle-btn {
            display: none !important;
          }
        }
        .nav-link-hover:hover {
          color: var(--color-accent-leaf) !important;
        }
      `}</style>
    </header>
  );
}
