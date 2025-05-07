
import React, { useEffect, useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Rocket, Heart, Github, Star, ExternalLink } from 'lucide-react';

const HeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { width, height, left, top } = heroRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width - 0.5;
      const y = (clientY - top) / height - 0.5;
      
      const floatingIcons = document.querySelectorAll('.floating-icon');
      floatingIcons.forEach((icon: Element) => {
        const iconEl = icon as HTMLElement;
        const speed = parseFloat(iconEl.dataset.speed || '1');
        const rotateSpeed = parseFloat(iconEl.dataset.rotate || '0');
        
        iconEl.style.transform = `translate(${x * 20 * speed}px, ${y * 20 * speed}px) rotate(${rotateSpeed * x}deg)`;
      });
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      <div className="absolute inset-0 z-0 bg-nebula opacity-70"></div>
      
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-space-deeper-purple via-space-purple/20 to-space-blue/30 animate-gradient-shift"></div>
        
        {/* Stars that twinkle with different sizes */}
        {[...Array(50)].map((_, i) => (
          <div 
            key={i} 
            className="absolute rounded-full bg-white"
            style={{ 
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              top: `${Math.random() * 100}%`, 
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.7 + 0.3,
              animation: `twinkle ${Math.random() * 3 + 2}s ease-in-out infinite ${Math.random() * 3}s`
            }}
          ></div>
        ))}
        
        {/* Enhanced floating elements with parallax effect */}
        <div className="floating-icon absolute top-[20%] left-[15%] w-16 h-16 rounded-full bg-space-purple bg-opacity-30 backdrop-blur-md shadow-lg shadow-space-purple/30" data-speed="1.5">
          <div className="absolute inset-2 bg-space-light-purple rounded-full bg-opacity-40 animate-pulse-glow"></div>
        </div>
        <div className="floating-icon absolute top-[30%] right-[20%] w-20 h-20 rounded-full bg-space-blue bg-opacity-30 backdrop-blur-md shadow-lg shadow-space-blue/30" data-speed="2">
          <div className="absolute inset-3 bg-space-sky-blue rounded-full bg-opacity-40 animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
        </div>
        <div className="floating-icon absolute bottom-[25%] left-[25%] w-24 h-24 rounded-full bg-space-purple bg-opacity-30 backdrop-blur-md shadow-lg shadow-space-purple/30" data-speed="1.2" data-rotate="15">
          <div className="absolute inset-4 flex items-center justify-center">
            <Star className="w-8 h-8 text-space-purple/70" />
          </div>
        </div>
        
        {/* Enhanced central orbit element */}
        <div className="absolute left-1/2 top-1/2 w-60 h-60 -ml-30 -mt-30 rounded-full bg-transparent">
          <div className="absolute inset-0 border-4 border-space-purple/30 rounded-full animate-spin-slow opacity-80 shadow-lg shadow-space-purple/20"></div>
          <div className="absolute inset-8 border-2 border-space-blue/40 rounded-full animate-spin-slow opacity-80 shadow-lg shadow-space-blue/20" style={{ animationDirection: 'reverse', animationDuration: '25s' }}></div>
          <div className="absolute inset-16 border border-space-light-purple/30 rounded-full animate-spin-slow opacity-80 shadow-lg shadow-space-light-purple/20" style={{ animationDuration: '20s' }}></div>
        </div>
      </div>
      
      <div 
        className={`relative z-10 text-center max-w-4xl transition-all duration-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="mb-6">
          <div className="bg-space-deeper-purple/40 backdrop-blur-md border border-space-purple/30 rounded-full px-6 py-2 inline-flex items-center gap-2 mb-4 shadow-lg shadow-space-purple/20 animate-pulse-slow">
            <span className="animate-pulse w-2 h-2 rounded-full bg-space-purple"></span>
            <span className="text-space-light-purple text-sm font-medium">Launching Q4 2025</span>
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight text-space-glow">
          <span className="block">Open. <span className="text-space-purple bg-clip-text text-transparent bg-gradient-to-r from-space-purple to-space-blue animate-text-shimmer">Limitless.</span> Yours.</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-10 text-space-light-purple max-w-3xl mx-auto leading-relaxed">
          SPACE Web is the world's first universal browser that runs apps across platforms, 
          protects your privacy, works offline, and speaks your language—with AI by your side.
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Button variant="default" size="lg" className="bg-gradient-to-r from-space-purple to-space-blue hover:from-space-dark-purple hover:to-space-blue text-white group shadow-lg shadow-space-purple/30 transition-all duration-300 hover:scale-105">
            <Rocket className="mr-2 h-5 w-5 group-hover:animate-float" />
            Get Started
          </Button>
          
          <Button variant="outline" size="lg" className="border-space-light-purple text-space-light-purple hover:bg-space-dark-purple hover:text-white group shadow-lg shadow-space-light-purple/20 backdrop-blur-sm transition-all duration-300 hover:scale-105">
            <Heart className="mr-2 h-5 w-5 group-hover:text-red-400" />
            Join the Mission
          </Button>
          
          <Button variant="outline" size="lg" className="border-space-light-purple text-space-light-purple hover:bg-space-dark-purple hover:text-white group shadow-lg shadow-space-light-purple/20 backdrop-blur-sm transition-all duration-300 hover:scale-105">
            <Github className="mr-2 h-5 w-5" />
            View on GitHub
          </Button>
        </div>
        
        {/* Partnership opportunity section */}
        <div className="mt-12 space-glassmorphism p-6 rounded-xl shadow-lg max-w-2xl mx-auto">
          <h3 className="text-xl font-bold text-white mb-2">Become a Founding Partner</h3>
          <p className="text-space-light-purple mb-4">Join the ecosystem of forward-thinking organizations shaping the future of web navigation.</p>
          <Button variant="default" size="sm" className="bg-space-blue hover:bg-space-sky-blue text-white shadow-md">
            <ExternalLink className="mr-2 h-4 w-4" />
            Partner With Us
          </Button>
        </div>
        
        <div className="mt-16 flex flex-col items-center">
          <div className="animate-bounce">
            <svg className="w-6 h-6 text-space-light-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
          <span className="text-space-light-purple text-sm mt-2">Explore More</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
