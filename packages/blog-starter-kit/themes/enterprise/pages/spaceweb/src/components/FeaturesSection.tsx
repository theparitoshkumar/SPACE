
import React, { useEffect, useState, useRef } from 'react';
import { Globe, Shield, Bot, Leaf, Code, Anchor, Rocket } from 'lucide-react';

const features = [
  {
    icon: <Globe className="h-10 w-10" />,
    emoji: "🪐",
    title: "Cross-Platform Magic",
    description: "Run Windows, Android, Linux apps—right in your browser. No emulators, no installs.",
    color: "from-blue-400 to-purple-500",
    theme: "space"
  },
  {
    icon: <Shield className="h-10 w-10" />,
    emoji: "🕊️",
    title: "Freedom & Privacy",
    description: "Fully serverless, peer-to-peer, and open-source. Own your experience.",
    color: "from-green-400 to-teal-500",
    theme: "space"
  },
  {
    icon: <Bot className="h-10 w-10" />,
    emoji: "🤖",
    title: "AI at Your Side",
    description: "Real-time summaries, voice navigation, and emotion-aware browsing support.",
    color: "from-purple-400 to-pink-500",
    theme: "space"
  },
  {
    icon: <Anchor className="h-10 w-10" />,
    emoji: "🌊",
    title: "Deep Web Exploration",
    description: "Dive deeper into content with AI-powered contextual discovery tools.",
    color: "from-blue-500 to-cyan-400",
    theme: "ocean"
  },
  {
    icon: <Leaf className="h-10 w-10" />,
    emoji: "🌿",
    title: "Mindful by Design",
    description: "Focus-first modes, no dark UX tricks, and encouragement for healthy usage.",
    color: "from-yellow-400 to-orange-500",
    theme: "ocean"
  },
  {
    icon: <Rocket className="h-10 w-10" />,
    emoji: "🚀",
    title: "Zero Gravity Mode",
    description: "Explore content in a physics-based interface that responds to your movements.",
    color: "from-indigo-400 to-purple-500",
    theme: "space"
  },
  {
    icon: <Code className="h-10 w-10" />,
    emoji: "🛠️",
    title: "Dev Playground",
    description: "Built-in sandbox, live code previews, and debugging tools you'll love.",
    color: "from-red-400 to-rose-500",
    theme: "ocean"
  }
];

const FeaturesSection: React.FC = () => {
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
    <section ref={sectionRef} className="py-24 px-4 relative" id="features">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-space-deeper-purple/70 to-sky-900/50 -z-10"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-space-purple opacity-10 rounded-full blur-3xl -z-5"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-600 opacity-10 rounded-full blur-3xl -z-5"></div>
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-space-purple/20 to-sky-500/20 rounded-full text-white text-sm font-medium mb-3">
            Innovative Features
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-space-purple to-sky-400">Why</span> SPACE Web?
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-space-purple to-sky-400 rounded-full mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`${feature.theme === 'space' ? 'space-glassmorphism' : 'ocean-glassmorphism'} rounded-xl p-6 backdrop-blur-md hover:shadow-xl hover:shadow-${feature.theme === 'space' ? 'space-purple/20' : 'sky-400/20'} transition-all duration-500 transform ${
                isVisible ? `opacity-100 translate-y-0 scale-100` : 'opacity-0 translate-y-10 scale-95'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="mb-6 relative">
                <div className={`absolute -inset-1.5 bg-gradient-to-r ${feature.color} rounded-full blur-sm opacity-70`}></div>
                <div className="relative flex items-center justify-center h-16 w-16 rounded-full bg-space-deeper-purple mx-auto">
                  <div className="text-3xl">{feature.emoji}</div>
                </div>
              </div>
              <h3 className={`text-xl font-bold mb-3 text-center text-white ${feature.theme === 'space' ? 'text-space-glow' : 'text-ocean-glow'}`}>{feature.title}</h3>
              <p className="text-space-light-purple text-center">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-space-light-purple mb-6 max-w-2xl mx-auto">
            Join over <span className="text-white font-bold">2,500+</span> early adopters and developers already contributing to the SPACE ecosystem.
          </p>
          <div className="inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-gradient-to-r from-space-deeper-purple to-sky-900/50 rounded-full border border-sky-500/30">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-ping absolute"></span>
            <span className="w-2 h-2 bg-green-500 rounded-full relative"></span>
            <span className="text-space-light-purple text-sm">Ready for Investor Preview</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
