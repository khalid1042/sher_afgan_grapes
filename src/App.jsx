import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Highlights from './components/Highlights';
import GrapesSection from './components/GrapesSection';
import FruitsSection from './components/FruitsSection';
import VideoShowcase from './components/VideoShowcase';
import FarmingPractices from './components/FarmingPractices';
import Gallery from './components/Gallery';
import { FarmExperience, WhyChooseUs } from './components/FarmExperience';
import Contact, { MapSection } from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import LightboxModal from './components/LightboxModal';
import VideoModal from './components/VideoModal';

export default function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleOpenImage = (img) => {
    setSelectedImage(img);
  };

  const handleCloseImage = () => {
    setSelectedImage(null);
  };

  const handleOpenVideo = (vid) => {
    setSelectedVideo(vid);
  };

  const handleCloseVideo = () => {
    setSelectedVideo(null);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* 1. Sticky Navigation Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main style={{ flex: 1 }}>
        {/* 2. Hero Section */}
        <Hero onOpenVideo={handleOpenVideo} />

        {/* 3. About the Farm */}
        <About />

        {/* 4. Farm Highlights */}
        <Highlights />

        {/* 5. Our Grapes */}
        <GrapesSection onOpenImage={handleOpenImage} />

        {/* 6. Seasonal Fruits */}
        <FruitsSection />

        {/* 7. Farm Video Showcase */}
        <VideoShowcase onPlayVideo={handleOpenVideo} />

        {/* 8. Our Farming Practices */}
        <FarmingPractices />

        {/* 9. Image Gallery */}
        <Gallery onOpenImage={handleOpenImage} />

        {/* 10. Farm Experience (Fields to Table) */}
        <FarmExperience onOpenGallery={() => {}} />

        {/* 11. Why Choose Us */}
        <WhyChooseUs />

        {/* 12. Contact Form & Direct Owner Info */}
        <Contact />

        {/* 13. Google Maps Location */}
        <MapSection />
      </main>

      {/* 14. Footer */}
      <Footer />

      {/* 15. Floating Sticky WhatsApp Button */}
      <WhatsAppFloat />

      {/* Modals & Overlays */}
      <LightboxModal image={selectedImage} onClose={handleCloseImage} />
      <VideoModal video={selectedVideo} onClose={handleCloseVideo} />

    </div>
  );
}
