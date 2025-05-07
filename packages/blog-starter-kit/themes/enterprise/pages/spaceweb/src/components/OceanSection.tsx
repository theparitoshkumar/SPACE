
import React, { useEffect, useState, useRef } from 'react';
import { Anchor, Droplet, Fish, Waves, Ship } from 'lucide-react';
import { Button } from '@/components/ui/button';

const OceanSection: React.FC = () => {
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
    <section ref={sectionRef} className="py-24 px-4 relative overflow-hidden" id="ocean-mode">
      {/* Ocean wave background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900 to-blue-500 opacity-20 -z-10"></div>
      
      {/* Animated waves */}
      <div className="absolute bottom-0 left-0 right-0 h-64 overflow-hidden -z-5">
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-blue-400 opacity-20 transform -skew-y-3 animate-wave" style={{ animationDelay: '0s' }}></div>
        <div className="absolute bottom-5 left-0 right-0 h-16 bg-blue-500 opacity-30 transform -skew-y-3 animate-wave" style={{ animationDelay: '0.3s' }}></div>
        <div className="absolute bottom-10 left-0 right-0 h-16 bg-blue-600 opacity-40 transform -skew-y-3 animate-wave" style={{ animationDelay: '0.6s' }}></div>
      </div>
      
      {/* Floating bubbles */}
      {[...Array(10)].map((_, i) => (
        <div 
          key={i} 
          className="absolute rounded-full bg-white bg-opacity-50 animate-bubble-rise"
          style={{ 
            width: `${Math.random() * 10 + 5}px`,
            height: `${Math.random() * 10 + 5}px`,
            left: `${Math.random() * 100}%`,
            bottom: '0',
            animationDuration: `${Math.random() * 10 + 5}s`,
            animationDelay: `${Math.random() * 5}s`
          }}
        ></div>
      ))}
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div 
          className={`flex flex-col lg:flex-row items-center gap-8 transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
        >
          <div className="lg:w-1/2 order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 opacity-75 blur"></div>
              <div className="ocean-glassmorphism relative h-96 rounded-xl overflow-hidden">
                {/* Ocean scene mockup */}
                <div className="absolute inset-0 flex flex-col">
                  {/* Browser controls */}
                  <div className="h-10 bg-slate-800 flex items-center px-3 gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                    </div>
                    <div className="mx-auto text-xs text-white">Underwater Mode - SPACE Web</div>
                  </div>
                  
                  {/* Browser content */}
                  <div className="flex-1 bg-gradient-to-b from-blue-900 to-blue-600 p-4 relative">
                    {/* Interface elements */}
                    <div className="absolute top-4 left-4 right-4 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center px-4 text-white">
                      <Waves className="h-4 w-4 mr-2 text-cyan-300" />
                      <span className="text-sm">ocean-explorer.space</span>
                    </div>
                    
                    <div className="absolute bottom-4 left-4 right-4 h-24 bg-white/10 backdrop-blur-md rounded-xl p-3">
                      <div className="text-xs text-cyan-200 mb-1">Deep Web Explorer</div>
                      <div className="text-white text-sm">Discovered: 3 underwater databases with rare archives</div>
                      <div className="mt-2 flex justify-between">
                        <div className="text-xs text-cyan-300 flex items-center">
                          <Droplet className="h-3 w-3 mr-1" />
                          <span>Depth: 2,450m</span>
                        </div>
                        <div className="text-xs text-cyan-300 flex items-center">
                          <Fish className="h-3 w-3 mr-1" />
                          <span>Content preserved: 98.5%</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Floating elements */}
                    {[...Array(5)].map((_, i) => (
                      <div 
                        key={i} 
                        className="absolute bg-white/30 rounded-md animate-floating"
                        style={{ 
                          width: `${Math.random() * 60 + 40}px`,
                          height: `${Math.random() * 40 + 20}px`,
                          top: `${20 + Math.random() * 40}%`,
                          left: `${10 + Math.random() * 80}%`,
                          animationDelay: `${Math.random() * 2}s`,
                          opacity: Math.random() * 0.3 + 0.1
                        }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 space-y-6 order-1 lg:order-2">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30">
              <Anchor className="h-4 w-4 mr-2 text-blue-400" />
              <span className="text-blue-300 text-sm">Underwater Mode</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white text-ocean-glow">Dive Deep Into Content</h2>
            
            <p className="text-lg text-blue-100">
              Experience the web like never before with our revolutionary Underwater Mode. Explore content in a fully immersive environment that reveals hidden connections and depths.
            </p>
            
            <ul className="space-y-3">
              {[
                "Access archived and preserved content from the depths of the internet",
                "Visualize data connections through fluid, intuitive navigation",
                "Explore with pressure-based content density controls",
                "Save discoveries in your personal treasury"
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <div className="mr-2 mt-1 h-4 w-4 rounded-full bg-blue-400 flex-shrink-0 animate-ocean-pulse"></div>
                  <span className="text-blue-200">{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="pt-4">
              <Button className="bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white shadow-lg shadow-blue-500/30 group">
                <Ship className="mr-2 h-5 w-5 group-hover:animate-floating" />
                Try Ocean Explorer
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OceanSection;
