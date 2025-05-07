
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import InteractiveDemo from '@/components/InteractiveDemo';
import TestimonialsSection from '@/components/TestimonialsSection';
import InvestmentMetrics from '@/components/InvestmentMetrics';
import TechStackShowcase from '@/components/TechStackShowcase';
import EnhancedRoadmap from '@/components/EnhancedRoadmap';
import PreviewSection from '@/components/PreviewSection';
import ContributorsSection from '@/components/ContributorsSection';
import DownloadSection from '@/components/DownloadSection';
import Footer from '@/components/Footer';
import StarField from '@/components/StarField';
import OceanSection from '@/components/OceanSection';
import BioInterface from '@/components/BioInterface';
import QuantumEncryption from '@/components/QuantumEncryption';

const Index = () => {
  return (
    <div className="min-h-screen overflow-hidden relative">
      <StarField />
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <InteractiveDemo />
      <TestimonialsSection />
      <BioInterface />
      <PreviewSection />
      <QuantumEncryption />
      <InvestmentMetrics />
      <TechStackShowcase />
      <EnhancedRoadmap />
      <ContributorsSection />
      <DownloadSection />
      <OceanSection />
      <Footer />
    </div>
  );
};

export default Index;
