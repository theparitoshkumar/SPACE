import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Github, Menu, X, Star } from 'lucide-react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      // Update active section based on scroll position
      const sections = ['features', 'demo', 'testimonials', 'preview', 'investment', 'tech', 'roadmap', 'contributors', 'download'];
      let current = 'home';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 200) {
          current = section;
        }
      }
      
      setActiveSection(current);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled ? 'bg-space-deeper-purple/90 backdrop-blur-xl py-2 shadow-lg shadow-black/10' : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-space-purple rounded-full flex items-center justify-center">
              <Star className="h-5 w-5 text-white" />
            </div>
            <span className="text-2xl font-bold text-white">SPACE<span className="text-space-purple">Web</span></span>
          </div>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <a 
            href="#features" 
            className={`hover:text-white transition-colors relative ${
              activeSection === 'features' ? 'text-white' : 'text-space-light-purple'
            }`}
          >
            <span>Features</span>
            {activeSection === 'features' && (
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-space-purple rounded-full"></span>
            )}
          </a>
          <a 
            href="#demo" 
            className={`hover:text-white transition-colors relative ${
              activeSection === 'demo' ? 'text-white' : 'text-space-light-purple'
            }`}
          >
            <span>Demo</span>
            {activeSection === 'demo' && (
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-space-purple rounded-full"></span>
            )}
          </a>
          <a 
            href="#testimonials" 
            className={`hover:text-white transition-colors relative ${
              activeSection === 'testimonials' ? 'text-white' : 'text-space-light-purple'
            }`}
          >
            <span>Testimonials</span>
            {activeSection === 'testimonials' && (
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-space-purple rounded-full"></span>
            )}
          </a>
          <a 
            href="#investment" 
            className={`hover:text-white transition-colors relative ${
              activeSection === 'investment' ? 'text-white' : 'text-space-light-purple'
            }`}
          >
            <span>Invest</span>
            {activeSection === 'investment' && (
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-space-purple rounded-full"></span>
            )}
          </a>
          <a 
            href="#tech" 
            className={`hover:text-white transition-colors relative ${
              activeSection === 'tech' ? 'text-white' : 'text-space-light-purple'
            }`}
          >
            <span>Tech</span>
            {activeSection === 'tech' && (
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-space-purple rounded-full"></span>
            )}
          </a>
          <a 
            href="#roadmap" 
            className={`hover:text-white transition-colors relative ${
              activeSection === 'roadmap' ? 'text-white' : 'text-space-light-purple'
            }`}
          >
            <span>Roadmap</span>
            {activeSection === 'roadmap' && (
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-space-purple rounded-full"></span>
            )}
          </a>
          <a 
            href="#download" 
            className={`hover:text-white transition-colors relative ${
              activeSection === 'download' ? 'text-white' : 'text-space-light-purple'
            }`}
          >
            <span>Download</span>
            {activeSection === 'download' && (
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-space-purple rounded-full"></span>
            )}
          </a>
          <Button 
            variant="default" 
            size="sm" 
            className="bg-space-purple hover:bg-space-dark-purple ml-4 shadow-md shadow-space-purple/20"
          >
            <Github className="mr-2 h-4 w-4" />
            GitHub
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white p-2 focus:outline-none focus:ring-2 focus:ring-space-purple rounded-lg"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-space-light-purple" />
            ) : (
              <Menu className="h-6 w-6 text-space-light-purple" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={`md:hidden fixed inset-0 z-40 bg-black/90 backdrop-blur-xl transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="h-full flex flex-col px-4 py-20">
          <div className="flex justify-end mb-8">
            <button 
              onClick={() => setMobileMenuOpen(false)}
              className="text-space-light-purple p-2 focus:outline-none"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          
          <div className="flex flex-col gap-4 items-center">
            <a 
              href="#features" 
              className="text-xl text-space-light-purple hover:text-white transition-colors w-full py-3 text-center border-b border-space-purple/20"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#demo" 
              className="text-xl text-space-light-purple hover:text-white transition-colors w-full py-3 text-center border-b border-space-purple/20"
              onClick={() => setMobileMenuOpen(false)}
            >
              Demo
            </a>
            <a 
              href="#testimonials" 
              className="text-xl text-space-light-purple hover:text-white transition-colors w-full py-3 text-center border-b border-space-purple/20"
              onClick={() => setMobileMenuOpen(false)}
            >
              Testimonials
            </a>
            <a 
              href="#investment" 
              className="text-xl text-space-light-purple hover:text-white transition-colors w-full py-3 text-center border-b border-space-purple/20"
              onClick={() => setMobileMenuOpen(false)}
            >
              Invest
            </a>
            <a 
              href="#tech" 
              className="text-xl text-space-light-purple hover:text-white transition-colors w-full py-3 text-center border-b border-space-purple/20"
              onClick={() => setMobileMenuOpen(false)}
            >
              Tech
            </a>
            <a 
              href="#roadmap" 
              className="text-xl text-space-light-purple hover:text-white transition-colors w-full py-3 text-center border-b border-space-purple/20"
              onClick={() => setMobileMenuOpen(false)}
            >
              Roadmap
            </a>
            <a 
              href="#download" 
              className="text-xl text-space-light-purple hover:text-white transition-colors w-full py-3 text-center border-b border-space-purple/20"
              onClick={() => setMobileMenuOpen(false)}
            >
              Download
            </a>
            <Button 
              variant="default" 
              className="w-full mt-4 bg-space-purple hover:bg-space-dark-purple"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
