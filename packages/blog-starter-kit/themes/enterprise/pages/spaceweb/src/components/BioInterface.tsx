
import React, { useEffect, useState, useRef } from 'react';
import { Brain, Activity, Heart, Eye, Fingerprint } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BioInterface: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    }, { threshold: 0.2 });
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-4 relative" id="bio-interface">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/30 to-space-deeper-purple/50 -z-10"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-500 opacity-10 rounded-full blur-3xl -z-5"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 opacity-10 rounded-full blur-3xl -z-5"></div>
      
      <div className="max-w-6xl mx-auto">
        <div 
          className={`flex flex-col lg:flex-row items-center gap-12 transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
        >
          <div className="lg:w-1/2 space-y-6">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/30">
              <Brain className="h-4 w-4 mr-2 text-indigo-400" />
              <span className="text-indigo-300 text-sm">Bio Interface</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white text-glow">Connect With Your Mind</h2>
            
            <p className="text-lg text-indigo-100">
              Experience a browser that adapts to your cognitive state, emotions, and focus level in real-time. 
              SPACE Web's Bio Interface creates a truly symbiotic relationship between you and your digital environment.
            </p>
            
            <div className="grid grid-cols-2 gap-5">
              <div className="p-4 rounded-xl bg-indigo-900/20 border border-indigo-500/20 backdrop-blur-sm">
                <Heart className="h-6 w-6 text-pink-400 mb-2 animate-pulse" />
                <h3 className="text-lg font-semibold text-white mb-1">Emotion-Aware</h3>
                <p className="text-sm text-indigo-200">Adapts color schemes and content based on your emotional state</p>
              </div>
              
              <div className="p-4 rounded-xl bg-indigo-900/20 border border-indigo-500/20 backdrop-blur-sm">
                <Activity className="h-6 w-6 text-green-400 mb-2" />
                <h3 className="text-lg font-semibold text-white mb-1">Focus Tracking</h3>
                <p className="text-sm text-indigo-200">Minimizes distractions when you need to concentrate</p>
              </div>
              
              <div className="p-4 rounded-xl bg-indigo-900/20 border border-indigo-500/20 backdrop-blur-sm">
                <Eye className="h-6 w-6 text-blue-400 mb-2" />
                <h3 className="text-lg font-semibold text-white mb-1">Eye Control</h3>
                <p className="text-sm text-indigo-200">Navigate and select with just your gaze</p>
              </div>
              
              <div className="p-4 rounded-xl bg-indigo-900/20 border border-indigo-500/20 backdrop-blur-sm">
                <Fingerprint className="h-6 w-6 text-yellow-400 mb-2" />
                <h3 className="text-lg font-semibold text-white mb-1">Biometric Auth</h3>
                <p className="text-sm text-indigo-200">Secure access with your unique biological signature</p>
              </div>
            </div>
            
            <div className="pt-4">
              <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-lg shadow-indigo-500/30 group">
                <Brain className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-indigo-400 to-purple-600 opacity-75 blur"></div>
              <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto rounded-full border-8 border-indigo-900/50 bg-gradient-to-br from-indigo-800/30 to-purple-900/30 backdrop-blur-lg overflow-hidden">
                {/* Brain wave visualization */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Brain graphic */}
                  <div className="absolute w-40 h-40 rounded-full bg-gradient-to-r from-indigo-600/30 to-purple-600/30 animate-pulse-slow"></div>
                  <div className="absolute w-32 h-32 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 animate-spin-slow"></div>
                  
                  {/* Pulse rings */}
                  {[...Array(3)].map((_, i) => (
                    <div 
                      key={i} 
                      className="absolute rounded-full border border-indigo-500/20"
                      style={{ 
                        width: `${50 + i * 20}%`,
                        height: `${50 + i * 20}%`,
                        animationDelay: `${i * 0.5}s`,
                      }}
                    ></div>
                  ))}
                  
                  {/* Neural connection lines */}
                  {[...Array(15)].map((_, i) => {
                    const angle = Math.random() * Math.PI * 2;
                    const length = 30 + Math.random() * 70;
                    return (
                      <div 
                        key={i} 
                        className="absolute bg-indigo-400/30 animate-pulse-slow"
                        style={{ 
                          width: `${length}px`,
                          height: '1px',
                          top: '50%',
                          left: '50%',
                          transform: `rotate(${angle}rad)`,
                          transformOrigin: '0 0',
                          animationDelay: `${Math.random() * 2}s`,
                          animationDuration: `${2 + Math.random() * 3}s`,
                        }}
                      ></div>
                    );
                  })}
                  
                  <Brain className="h-16 w-16 text-indigo-300 relative z-10" />
                </div>
                
                {/* Status indicators */}
                <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                  <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" style={{ animationDelay: '0.3s' }}></div>
                  <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" style={{ animationDelay: '0.6s' }}></div>
                </div>
                
                {/* Data stream visualization */}
                {[...Array(20)].map((_, i) => {
                  const delay = Math.random() * 5;
                  const duration = 2 + Math.random() * 3;
                  const size = Math.random() * 4 + 1;
                  return (
                    <div 
                      key={i} 
                      className="absolute bg-white rounded-full"
                      style={{ 
                        width: `${size}px`,
                        height: `${size}px`,
                        opacity: 0.5,
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        animation: `twinkle ${duration}s infinite ${delay}s`
                      }}
                    ></div>
                  );
                })}
              </div>
            </div>
            
            {/* Connection status */}
            <div className="mt-6 flex justify-center items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse"></div>
              <span className="text-green-300 text-sm">Bio Interface Active</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BioInterface;
