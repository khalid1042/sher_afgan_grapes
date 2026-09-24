import React from 'react';
import { FARM_CONFIG } from '../config/farmConfig';
import { MessageSquare } from 'lucide-react';

export default function WhatsAppFloat() {
  const { whatsappRaw } = FARM_CONFIG.contact;
  const { whatsappMessage } = FARM_CONFIG;

  const whatsappUrl = `https://wa.me/${whatsappRaw}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <a 
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float pulse-animation"
      aria-label="Chat with Sher Afgan Khan Sawansi on WhatsApp"
    >
      <MessageSquare size={24} />
      <span>Chat on WhatsApp</span>
    </a>
  );
}
