
import React from 'react';
import { Button } from '@/components/ui/button';
import { Github, Heart } from 'lucide-react';

const contributors = [
  { name: "Alex Chen", role: "Core Dev", avatar: "/placeholder.svg" },
  { name: "Maria Santos", role: "UI/UX Lead", avatar: "/placeholder.svg" },
  { name: "Jamal Khan", role: "P2P Expert", avatar: "/placeholder.svg" },
  { name: "Sarah Wu", role: "AI Engineer", avatar: "/placeholder.svg" },
  { name: "Raj Patel", role: "Security Lead", avatar: "/placeholder.svg" },
  { name: "Emma Lee", role: "Community Lead", avatar: "/placeholder.svg" },
];

const ContributorsSection: React.FC = () => {
  return (
    <section className="py-20 px-4" id="contributors">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-6">
          <span className="text-space-purple">Built by Everyone</span>, for Everyone
        </h2>
        <p className="text-xl text-center mb-12 text-space-light-purple max-w-2xl mx-auto">
          Join our amazing community of creators, developers, and dreamers building the future of the web
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {contributors.map((contributor, i) => (
            <div 
              key={i} 
              className="flex flex-col items-center hover:scale-105 transition-transform"
            >
              <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-space-purple mb-3 animate-pulse-glow">
                <img 
                  src={contributor.avatar} 
                  alt={contributor.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="font-medium text-white">{contributor.name}</h4>
              <p className="text-sm text-space-light-purple">{contributor.role}</p>
            </div>
          ))}
        </div>
        
        <div className="bg-space-deeper-purple bg-opacity-60 rounded-xl p-6 border border-space-purple/20 mb-12">
          <h3 className="text-2xl font-bold mb-4 text-center text-space-purple">
            Start Contributing in 2 Minutes
          </h3>
          <div className="bg-black/40 rounded-lg p-4 font-mono text-sm mb-6 overflow-x-auto">
            <code className="text-green-400">
              git clone https://github.com/space-web/browser.git && cd browser && npm install
            </code>
          </div>
          <div className="flex justify-center">
            <Button variant="default" className="bg-space-purple hover:bg-space-dark-purple text-white">
              <Github className="mr-2 h-5 w-5" />
              View Contribution Guide
            </Button>
          </div>
        </div>
        
        <div className="text-center">
          <div className="text-4xl mb-4 animate-float">
            <Heart className="inline-block text-red-500 h-12 w-12" />
          </div>
          <p className="text-space-light-purple text-lg">
            Over 2,500 GitHub stars and growing daily!
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContributorsSection;
