import React, { useState } from 'react';
import { FARM_CONFIG } from '../config/farmConfig';
import { Phone, MessageSquare, Mail, MapPin, Send, User, MessageCircle, Clock } from 'lucide-react';

export default function Contact() {
  const { contact, ownerName, brandName, whatsappMessage } = FARM_CONFIG;

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    cropInterest: 'Fresh Grapes',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formattedText = `Hello Mr. ${ownerName},\n\nMy name is ${formData.name} (${formData.phone}).\nI am interested in: ${formData.cropInterest}.\nMessage: ${formData.message}`;
    const whatsappUrl = `https://wa.me/${contact.whatsappRaw}?text=${encodeURIComponent(formattedText)}`;
    window.open(whatsappUrl, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-padding" style={{ backgroundColor: 'var(--color-bg-alt)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3.5rem auto' }}>
          <div className="badge badge-emerald" style={{ marginBottom: '0.75rem' }}>
            <MessageCircle size={16} />
            <span>Direct Communication</span>
          </div>
          <h2 className="heading-display" style={{ fontSize: 'clamp(1.9rem, 4vw, 2.7rem)', marginBottom: '1rem' }}>
            Contact {brandName}
          </h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1.08rem', lineHeight: '1.7' }}>
            Reach out directly to Sher Afgan Khan Sawansi for grape & seasonal fruit availability, farm visits, and order inquiries.
          </p>
        </div>

        {/* Contact Layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2.5rem'
        }}>
          
          {/* Left Column: Direct Info Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            
            {/* Owner Info Box */}
            <div className="card-farm" style={{ background: 'linear-gradient(135deg, var(--color-primary-dark), var(--color-primary))', color: '#ffffff' }}>
              <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', tracking: '0.05em', color: '#74c69d', fontWeight: '700' }}>
                Farm Owner & Contact
              </span>
              <h3 style={{ color: '#ffffff', fontSize: '1.4rem', fontWeight: '800', marginTop: '0.2rem', marginBottom: '1rem' }}>
                {ownerName}
              </h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: '#e2e8df', fontSize: '0.98rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <Phone size={18} style={{ color: '#52b788', flexShrink: 0 }} />
                  <span>Phone: <strong>{contact.phone}</strong></span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <MessageSquare size={18} style={{ color: '#25d366', flexShrink: 0 }} />
                  <span>WhatsApp: <strong>{contact.whatsapp}</strong></span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <Mail size={18} style={{ color: '#52b788', flexShrink: 0 }} />
                  <span>Email: <strong>{contact.email}</strong></span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <MapPin size={18} style={{ color: '#52b788', flexShrink: 0, marginTop: '3px' }} />
                  <span>Address: {contact.address}</span>
                </div>
              </div>

              {/* Quick Action Buttons */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginTop: '1.5rem' }}>
                <a 
                  href={`tel:${contact.phoneRaw}`}
                  className="btn btn-secondary"
                  style={{ flex: 1, minWidth: '130px', padding: '0.75rem 1rem', fontSize: '0.9rem' }}
                >
                  <Phone size={16} />
                  <span>Call Now</span>
                </a>
                <a 
                  href={`https://wa.me/${contact.whatsappRaw}?text=${encodeURIComponent(whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                  style={{ flex: 1, minWidth: '130px', padding: '0.75rem 1rem', fontSize: '0.9rem' }}
                >
                  <MessageSquare size={16} />
                  <span>WhatsApp Us</span>
                </a>
              </div>
            </div>

            {/* Farm Working Info */}
            <div className="card-farm">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                <Clock size={20} style={{ color: 'var(--color-accent-leaf)' }} />
                <h4 style={{ fontSize: '1.1rem', fontWeight: '700', color: 'var(--color-primary-dark)' }}>
                  Farm Response & Availability
                </h4>
              </div>
              <p style={{ fontSize: '0.92rem', color: 'var(--color-text-muted)', margin: 0, lineHeight: '1.6' }}>
                We respond promptly to phone calls and WhatsApp messages during daytime agricultural hours. For visiting the vineyard or bulk produce inquiries, prior notice via WhatsApp is recommended.
              </p>
            </div>

          </div>

          {/* Right Column: Inquiry Form */}
          <div className="card-farm" style={{ background: '#ffffff' }}>
            <h3 style={{ fontSize: '1.35rem', fontWeight: '700', color: 'var(--color-primary-dark)', marginBottom: '0.5rem' }}>
              Send an Availability Inquiry
            </h3>
            <p style={{ fontSize: '0.92rem', color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
              Fill in your details below to instantly send a message to Sher Afgan Khan on WhatsApp.
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: '600', color: 'var(--color-primary-dark)', marginBottom: '0.4rem' }}>
                  Your Name *
                </label>
                <input 
                  type="text"
                  required
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--color-border)',
                    outline: 'none',
                    fontSize: '0.95rem'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: '600', color: 'var(--color-primary-dark)', marginBottom: '0.4rem' }}>
                  Phone / WhatsApp Number *
                </label>
                <input 
                  type="tel"
                  required
                  placeholder="e.g. +92 300 0000000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--color-border)',
                    outline: 'none',
                    fontSize: '0.95rem'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: '600', color: 'var(--color-primary-dark)', marginBottom: '0.4rem' }}>
                  Produce Interest
                </label>
                <select 
                  value={formData.cropInterest}
                  onChange={(e) => setFormData({ ...formData, cropInterest: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--color-border)',
                    outline: 'none',
                    fontSize: '0.95rem',
                    backgroundColor: '#ffffff'
                  }}
                >
                  <option value="Fresh Grapes">Fresh Grapes</option>
                  <option value="Seasonal Fruits">Seasonal Fruits</option>
                  <option value="Farm Visit Inquiry">Farm Visit Inquiry</option>
                  <option value="General Information">General Information</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: '600', color: 'var(--color-primary-dark)', marginBottom: '0.4rem' }}>
                  Your Message / Question
                </label>
                <textarea 
                  rows={4}
                  placeholder="Ask about current crop stage, availability, or quantity..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--color-border)',
                    outline: 'none',
                    fontSize: '0.95rem',
                    fontFamily: 'inherit'
                  }}
                />
              </div>

              <button type="submit" className="btn btn-whatsapp" style={{ width: '100%', padding: '0.9rem', marginTop: '0.5rem' }}>
                <Send size={18} />
                <span>Send WhatsApp Inquiry</span>
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}

export function MapSection() {
  const { contact, brandName } = FARM_CONFIG;

  return (
    <section className="section-padding" style={{ backgroundColor: '#ffffff', paddingTop: '2rem' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 2.5rem auto' }}>
          <div className="badge badge-emerald" style={{ marginBottom: '0.75rem' }}>
            <MapPin size={16} />
            <span>Farm Location</span>
          </div>
          <h2 className="heading-display" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', marginBottom: '0.75rem' }}>
            Find Our Farm
          </h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1rem' }}>
            Visit Sher Afgan Khan Sawansi Grapes & Fruit Farm in Sawansi village.
          </p>
        </div>

        {/* Responsive Map Container */}
        <div style={{
          borderRadius: 'var(--radius-lg)',
          overflow: 'hidden',
          boxShadow: 'var(--shadow-lg)',
          border: '1px solid var(--color-border)',
          height: '420px',
          width: '100%',
          position: 'relative'
        }}>
          <iframe 
            title={`${brandName} Location Map`}
            src={contact.mapsEmbedUrl} 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
          <a 
            href={contact.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
            style={{ padding: '0.85rem 1.75rem' }}
          >
            <MapPin size={18} />
            <span>Get Directions on Google Maps</span>
          </a>
        </div>

      </div>
    </section>
  );
}
