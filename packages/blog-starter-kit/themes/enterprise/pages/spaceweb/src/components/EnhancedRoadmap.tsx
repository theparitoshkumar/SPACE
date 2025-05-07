
import React, { useState, useEffect } from 'react';
import { Check, Brain, Globe, ChevronDown, ChevronUp, Sparkles, CalendarDays, Github } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

interface Milestone {
  title: string;
  status: 'complete' | 'wip' | 'next' | 'design' | 'tbd';
  icon: React.ReactNode;
  description: string;
  date?: string;
  details?: {
    challenges: string[];
    benefits: string[];
    team: string[];
    resources?: string;
  };
}

const milestones: Milestone[] = [
  {
    title: "P2P Messaging",
    status: "complete",
    icon: <Check className="h-6 w-6" />,
    description: "Secure peer-to-peer communication with no server required",
    date: "Q4 2023",
    details: {
      challenges: [
        "NAT traversal in various network environments",
        "Encryption key management",
        "Message delivery guarantees"
      ],
      benefits: [
        "Complete privacy - messages never touch a server",
        "Works offline within local networks",
        "End-to-end encrypted by default"
      ],
      team: ["Alex Chen", "Maria Rodriguez", "Jamal Washington"],
      resources: "https://github.com/space-web/p2p-messaging"
    }
  },
  {
    title: "Multi-runtime Support",
    status: "wip",
    icon: <Brain className="h-6 w-6" />,
    description: "Run Windows, Android, and Linux apps directly in your browser",
    date: "Q3 2024",
    details: {
      challenges: [
        "System call translation",
        "Graphics subsystem compatibility",
        "Performance optimization"
      ],
      benefits: [
        "Run any application regardless of OS",
        "No need for multiple devices or VMs",
        "Seamless integration with web applications"
      ],
      team: ["Sarah Johnson", "David Kim", "Elena Petrov"],
      resources: "https://github.com/space-web/multi-runtime"
    }
  },
  {
    title: "Privacy Tunnels",
    status: "next",
    icon: <Check className="h-6 w-6" />,
    description: "Enhanced security with multi-layer encryption",
    date: "Q4 2024",
    details: {
      challenges: [
        "Routing optimization",
        "Minimizing latency",
        "Ensuring no single point of failure"
      ],
      benefits: [
        "Complete anonymity when desired",
        "Protection from network surveillance",
        "Bypass regional restrictions"
      ],
      team: ["Michael Brown", "Sophia Garcia", "Li Wei"],
      resources: "https://github.com/space-web/privacy-tunnels"
    }
  },
  {
    title: "Emotional AI Assistant",
    status: "design",
    icon: <Brain className="h-6 w-6" />,
    description: "Context-aware AI that understands you on a deeper level",
    date: "Q2 2025",
    details: {
      challenges: [
        "Ethical emotion recognition",
        "Maintaining user privacy",
        "Avoiding manipulation"
      ],
      benefits: [
        "AI that responds to your emotional state",
        "Helps with focus and mental wellbeing",
        "Adapts interface based on cognitive load"
      ],
      team: ["Olivia Martinez", "James Wilson", "Aisha Patel"],
      resources: "https://github.com/space-web/emotional-ai"
    }
  },
  {
    title: "Web3/Mesh Network",
    status: "tbd",
    icon: <Globe className="h-6 w-6" />,
    description: "Decentralized infrastructure for true ownership",
    date: "Q1 2026",
    details: {
      challenges: [
        "Decentralized consensus",
        "Reliable data propagation",
        "Energy efficiency"
      ],
      benefits: [
        "Internet that works without ISPs in emergencies",
        "Community-owned digital infrastructure",
        "Censorship-resistant communication"
      ],
      team: ["Robert Zhang", "Amara Okafor", "Thomas Schmidt"],
      resources: "https://github.com/space-web/mesh-network"
    }
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

const EnhancedRoadmap: React.FC = () => {
  const isMobile = useIsMobile();
  const [expandedMilestone, setExpandedMilestone] = React.useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedMilestone, setSelectedMilestone] = useState<Milestone | null>(null);
  
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

  const openMilestoneDetails = (milestone: Milestone) => {
    setSelectedMilestone(milestone);
  };

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
                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-2 ${
                      statusColors[milestone.status]
                    } transform transition-transform hover:scale-105 cursor-default shadow-lg`}
                  >
                    {statusText[milestone.status]}
                    {milestone.date && (
                      <span className="flex items-center ml-1">
                        <CalendarDays className="h-3 w-3 mr-1" />
                        {milestone.date}
                      </span>
                    )}
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-space-purple group flex items-center gap-2">
                    {milestone.title}
                    {milestone.status === 'wip' && (
                      <Sparkles className="h-5 w-5 text-yellow-400 animate-pulse" />
                    )}
                  </h3>
                  <p className="text-space-light-purple mb-3">{milestone.description}</p>
                  
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => openMilestoneDetails(milestone)} 
                    className="border-space-purple/30 text-space-light-purple hover:bg-space-purple hover:text-white"
                  >
                    View Details
                  </Button>
                </div>
                
                <div className="w-16 flex justify-center">
                  <div 
                    className={cn(
                      `w-12 h-12 rounded-full flex items-center justify-center z-10 shadow-lg transition-all duration-300 hover:scale-110 cursor-pointer`,
                      statusColors[milestone.status],
                      milestone.status === 'complete' ? 'animate-pulse-slow' : '',
                      statusGlows[milestone.status]
                    )}
                    onClick={() => openMilestoneDetails(milestone)}
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
                      statusColors[milestone.status],
                      statusGlows[milestone.status]
                    )}
                  >
                    {milestone.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-space-purple">{milestone.title}</h3>
                    {milestone.date && (
                      <div className="flex items-center text-xs text-space-light-purple/70">
                        <CalendarDays className="h-3 w-3 mr-1" />
                        {milestone.date}
                      </div>
                    )}
                  </div>
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
                  expandedMilestone === i ? "max-h-80" : "max-h-0"
                )}
              >
                <div className="p-4 pt-0">
                  <div 
                    className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-2 ${
                      statusColors[milestone.status]
                    } shadow-sm`}
                  >
                    {statusText[milestone.status]}
                  </div>
                  <p className="text-space-light-purple mb-4">{milestone.description}</p>
                  <Button 
                    onClick={() => openMilestoneDetails(milestone)}
                    className="w-full bg-space-deeper-purple border border-space-purple/30 hover:bg-space-purple text-space-light-purple hover:text-white"
                    variant="outline"
                    size="sm"
                  >
                    View Details
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Dialog>
          <DialogTrigger asChild>
            <span className="hidden">{/* Hidden trigger, will be triggered programmatically */}</span>
          </DialogTrigger>
          <DialogContent className="bg-space-deeper-purple border border-space-purple/30 text-white max-w-2xl max-h-[80vh] overflow-y-auto">
            {selectedMilestone && (
              <>
                <DialogHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div 
                      className={cn(
                        `w-10 h-10 rounded-full flex items-center justify-center shadow-lg`,
                        statusColors[selectedMilestone.status],
                        statusGlows[selectedMilestone.status]
                      )}
                    >
                      {selectedMilestone.icon}
                    </div>
                    <DialogTitle className="text-xl text-space-purple">{selectedMilestone.title}</DialogTitle>
                  </div>
                  <DialogDescription className="text-space-light-purple">
                    {selectedMilestone.description}
                  </DialogDescription>
                </DialogHeader>
                
                <div className="mt-4">
                  <div className="flex items-center gap-2 mb-4">
                    <div className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColors[selectedMilestone.status]}`}>
                      {statusText[selectedMilestone.status]}
                    </div>
                    
                    {selectedMilestone.date && (
                      <div className="flex items-center text-sm text-space-light-purple bg-space-purple/10 px-3 py-1 rounded-full">
                        <CalendarDays className="h-4 w-4 mr-1" />
                        {selectedMilestone.date}
                      </div>
                    )}
                  </div>
                  
                  {selectedMilestone.details && (
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-semibold text-space-light-purple mb-2">Challenges</h4>
                        <ul className="list-disc pl-5 space-y-1 text-space-light-purple/80">
                          {selectedMilestone.details.challenges.map((challenge, i) => (
                            <li key={i}>{challenge}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-space-light-purple mb-2">Benefits</h4>
                        <ul className="list-disc pl-5 space-y-1 text-space-light-purple/80">
                          {selectedMilestone.details.benefits.map((benefit, i) => (
                            <li key={i}>{benefit}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-space-light-purple mb-2">Development Team</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedMilestone.details.team.map((member, i) => (
                            <div key={i} className="bg-space-purple/20 px-3 py-1 rounded-full text-sm text-space-light-purple">
                              {member}
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {selectedMilestone.details.resources && (
                        <div className="pt-4 border-t border-space-purple/20">
                          <Button 
                            variant="default" 
                            className="w-full bg-space-purple hover:bg-space-dark-purple"
                            onClick={() => window.open(selectedMilestone.details?.resources, '_blank')}
                          >
                            <Github className="mr-2 h-4 w-4" />
                            View Project Repository
                          </Button>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
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

export default EnhancedRoadmap;
