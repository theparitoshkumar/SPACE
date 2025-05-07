
import React, { useState, useEffect } from 'react';
import { Check, Brain, Globe, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';

const milestones = [
  {
    title: "P2P Messaging",
    status: "complete",
    icon: <Check className="h-6 w-6" />,
    description: "Secure peer-to-peer communication with no server required"
  },
  {
    title: "Multi-runtime Support",
    status: "wip",
    icon: <Brain className="h-6 w-6" />,
    description: "Run Windows, Android, and Linux apps directly in your browser"
  },
  {
    title: "Privacy Tunnels",
    status: "next",
    icon: <Check className="h-6 w-6" />,
    description: "Enhanced security with multi-layer encryption"
  },
  {
    title: "Emotional AI Assistant",
    status: "design",
    icon: <Brain className="h-6 w-6" />,
    description: "Context-aware AI that understands you on a deeper level"
  },
  {
    title: "Web3/Mesh Network",
    status: "tbd",
    icon: <Globe className="h-6 w-6" />,
    description: "Decentralized infrastructure for true ownership"
  }
];

const statusColors = {
  complete: "bg-green-500",
  wip: "bg-yellow-500",
  next: "bg-blue-500",
  design: "bg-purple-500",
  tbd: "bg-gray-500"
};

const statusGlows = {
  complete: "shadow-green-500/50",
  wip: "shadow-yellow-500/50",
  next: "shadow-blue-500/50",
  design: "shadow-purple-500/50",
  tbd: "shadow-gray-500/50"
};

const statusText = {
  complete: "✅ Complete",
  wip: "🧪 Work In Progress",
  next: "🔐 Coming Next",
  design: "🧠 In Design",
  tbd: "🌐 To Be Determined"
};

const RoadmapSection: React.FC = () => {
  const isMobile = useIsMobile();
  const [expandedMilestone, setExpandedMilestone] = React.useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  const toggleMilestone = (index: number) => {
    setExpandedMilestone(expandedMilestone === index ? null : index);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    }, { threshold: 0.2 });
    
    const section = document.getElementById('roadmap');
    if (section) observer.observe(section);
    
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section className="py-20 px-4 relative overflow-hidden" id="roadmap">
      <div className="absolute inset-0 bg-cosmic-gradient opacity-30 -z-10"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-5">
        <div className="absolute -top-32 -right-32 w-64 h-64 bg-space-purple opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-space-blue opacity-20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-space-purple bg-opacity-20 rounded-full text-space-purple text-sm font-medium mb-3">
            Our Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 animate-fade-in">
            <span className="text-space-purple">Roadmap</span> Showcase
          </h2>
          <p className="text-xl text-center mb-6 text-space-light-purple max-w-2xl mx-auto animate-fade-in" style={{animationDelay: "200ms"}}>
            Our cosmic journey through the development of SPACE Web
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-space-purple to-space-blue rounded-full mx-auto"></div>
        </div>
        
        {/* Desktop Timeline */}
        <div className={`relative hidden md:block ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-space-purple via-space-blue to-transparent -ml-0.5"></div>
          
          <div className="space-y-16 relative">
            {milestones.map((milestone, i) => (
              <div 
                key={i} 
                className={`flex flex-row items-center ${i % 2 === 0 ? 'flex-row-reverse' : ''} gap-8 transition-all duration-500 opacity-0 translate-y-4`}
                style={{ 
                  animationName: 'fadeInUp', 
                  animationDuration: '1s', 
                  animationDelay: `${i * 0.2}s`, 
                  animationFillMode: 'forwards' 
                }}
              >
                <div className={`w-1/2 ${i % 2 === 0 ? 'text-right' : ''} mb-6 md:mb-0 transform transition-all duration-300 hover:-translate-y-1`}>
                  <div 
                    className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-2 ${
                      statusColors[milestone.status as keyof typeof statusColors]
                    } transform transition-transform hover:scale-105 cursor-default shadow-lg`}
                  >
                    {statusText[milestone.status as keyof typeof statusText]}
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-space-purple group flex items-center gap-2">
                    {milestone.title}
                    {milestone.status === 'wip' && (
                      <Sparkles className="h-5 w-5 text-yellow-400 animate-pulse" />
                    )}
                  </h3>
                  <p className="text-space-light-purple">{milestone.description}</p>
                </div>
                
                <div className="w-16 flex justify-center">
                  <div 
                    className={cn(
                      `w-12 h-12 rounded-full flex items-center justify-center z-10 shadow-lg transition-all duration-300 hover:scale-110`,
                      statusColors[milestone.status as keyof typeof statusColors],
                      milestone.status === 'complete' ? 'animate-pulse-slow' : '',
                      statusGlows[milestone.status as keyof typeof statusGlows]
                    )}
                  >
                    {milestone.icon}
                  </div>
                </div>
                
                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Mobile Timeline */}
        <div className="block md:hidden space-y-6">
          {milestones.map((milestone, i) => (
            <div 
              key={i}
              className="bg-space-deeper-purple/80 backdrop-blur-md rounded-xl border border-space-purple/30 overflow-hidden transition-all duration-300 shadow-lg hover:shadow-space-purple/20 opacity-0 translate-y-4"
              style={{ 
                animationName: 'fadeInUp', 
                animationDuration: '1s', 
                animationDelay: `${i * 0.2}s`, 
                animationFillMode: 'forwards' 
              }}
            >
              <div 
                className="flex items-center justify-between p-4 cursor-pointer"
                onClick={() => toggleMilestone(i)}
              >
                <div className="flex items-center gap-3">
                  <div 
                    className={cn(
                      `w-10 h-10 rounded-full flex items-center justify-center shadow-lg`,
                      statusColors[milestone.status as keyof typeof statusColors],
                      statusGlows[milestone.status as keyof typeof statusGlows]
                    )}
                  >
                    {milestone.icon}
                  </div>
                  <h3 className="font-bold text-space-purple">{milestone.title}</h3>
                </div>
                <div>
                  {expandedMilestone === i ? 
                    <ChevronUp className="h-5 w-5 text-space-light-purple" /> : 
                    <ChevronDown className="h-5 w-5 text-space-light-purple" />}
                </div>
              </div>
              
              <div 
                className={cn(
                  "overflow-hidden transition-all duration-300",
                  expandedMilestone === i ? "max-h-40" : "max-h-0"
                )}
              >
                <div className="p-4 pt-0">
                  <div 
                    className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-2 ${
                      statusColors[milestone.status as keyof typeof statusColors]
                    } shadow-sm`}
                  >
                    {statusText[milestone.status as keyof typeof statusText]}
                  </div>
                  <p className="text-space-light-purple">{milestone.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add keyframe animations */}
      <style>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes pulse-slow {
            0%, 100% { 
              box-shadow: 0 0 0 0 rgba(74, 222, 128, 0.6);
            }
            50% { 
              box-shadow: 0 0 0 10px rgba(74, 222, 128, 0);
            }
          }
        `}
      </style>
    </section>
  );
};

export default RoadmapSection;
