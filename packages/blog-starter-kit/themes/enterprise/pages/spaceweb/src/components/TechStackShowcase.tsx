
import React, { useState } from 'react';
import { Code, CircleCheck, Github, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface Technology {
  name: string;
  description: string;
  icon: string;
}

const frontendTech: Technology[] = [
  { 
    name: "WebAssembly", 
    description: "Runs native code at near-native speed in the browser", 
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/WebAssembly_Logo.svg/1200px-WebAssembly_Logo.svg.png"
  },
  { 
    name: "WebGPU", 
    description: "Next-generation graphics and compute for the web", 
    icon: "https://www.w3.org/blog/wp-content/uploads/2023/03/webgpu-logo-square.png" 
  },
  { 
    name: "WebRTC", 
    description: "Real-time communication directly between browsers", 
    icon: "https://webrtc.github.io/webrtc-org/assets/images/webrtc-logo-vert-retro-255x305.png" 
  }
];

const backendTech: Technology[] = [
  { 
    name: "Rust", 
    description: "Blazingly fast and memory-efficient language", 
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Rust_programming_language_black_logo.svg/1200px-Rust_programming_language_black_logo.svg.png" 
  },
  { 
    name: "IPFS", 
    description: "Distributed file system for decentralized storage", 
    icon: "https://upload.wikimedia.org/wikipedia/commons/1/18/Ipfs-logo-1024-ice-text.png" 
  },
  { 
    name: "Hypercore", 
    description: "Distributed append-only log for P2P applications", 
    icon: "https://hypercore-protocol.org/images/hypercore-protocol.png" 
  }
];

const securityTech: Technology[] = [
  { 
    name: "Zero Knowledge Proofs", 
    description: "Cryptographic method for privacy-preserving verification", 
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Circle-icons-document.svg/1200px-Circle-icons-document.svg.png" 
  },
  { 
    name: "WASM Sandboxing", 
    description: "Secure execution environment for untrusted code", 
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/WebAssembly_Logo.svg/1200px-WebAssembly_Logo.svg.png" 
  },
  { 
    name: "End-to-End Encryption", 
    description: "Secure communication with no intermediary access", 
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Gnome-stock_lock.svg/1200px-Gnome-stock_lock.svg.png" 
  }
];

const TechStackShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('frontend');
  
  return (
    <section className="py-24 px-4 relative" id="tech">
      <div className="absolute inset-0 bg-cosmic-gradient opacity-30 -z-10"></div>
      <div className="absolute top-20 right-20 w-64 h-64 bg-space-blue opacity-10 rounded-full blur-3xl -z-5"></div>
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-space-purple opacity-10 rounded-full blur-3xl -z-5"></div>
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-space-purple bg-opacity-20 rounded-full text-space-purple text-sm font-medium mb-3">
            Technology
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            <span className="text-space-purple">Innovative</span> Tech Stack
          </h2>
          <p className="text-xl text-space-light-purple max-w-2xl mx-auto">
            Cutting-edge technologies that power SPACE Web's capabilities
          </p>
          <div className="h-1.5 w-24 bg-gradient-to-r from-space-purple to-space-blue rounded-full mx-auto mt-6"></div>
        </div>
        
        <div className="mb-12">
          <Tabs defaultValue="frontend" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-3 bg-space-deeper-purple border border-space-purple/20">
              <TabsTrigger 
                value="frontend" 
                className={activeTab === 'frontend' ? 'bg-space-purple text-white data-[state=active]:bg-space-purple data-[state=active]:text-white' : ''}
              >
                Frontend
              </TabsTrigger>
              <TabsTrigger 
                value="backend" 
                className={activeTab === 'backend' ? 'bg-space-purple text-white data-[state=active]:bg-space-purple data-[state=active]:text-white' : ''}
              >
                Backend
              </TabsTrigger>
              <TabsTrigger 
                value="security" 
                className={activeTab === 'security' ? 'bg-space-purple text-white data-[state=active]:bg-space-purple data-[state=active]:text-white' : ''}
              >
                Security
              </TabsTrigger>
            </TabsList>
            
            <div className="mt-8">
              <TabsContent value="frontend" className="m-0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {frontendTech.map((tech, index) => (
                    <div 
                      key={index} 
                      className="bg-space-deeper-purple border border-space-purple/20 rounded-xl p-6 shadow-lg hover:shadow-space-purple/20 transition-shadow"
                    >
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 mr-4 bg-white rounded-full flex items-center justify-center">
                          <img src={tech.icon} alt={tech.name} className="w-8 h-8 object-contain" />
                        </div>
                        <h3 className="text-xl font-bold text-white">{tech.name}</h3>
                      </div>
                      <p className="text-space-light-purple mb-4">{tech.description}</p>
                      <div className="flex items-center text-space-light-purple/70 text-sm">
                        <CircleCheck className="h-4 w-4 mr-2 text-green-500" /> Implemented
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="backend" className="m-0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {backendTech.map((tech, index) => (
                    <div 
                      key={index} 
                      className="bg-space-deeper-purple border border-space-purple/20 rounded-xl p-6 shadow-lg hover:shadow-space-purple/20 transition-shadow"
                    >
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 mr-4 bg-white rounded-full flex items-center justify-center">
                          <img src={tech.icon} alt={tech.name} className="w-8 h-8 object-contain" />
                        </div>
                        <h3 className="text-xl font-bold text-white">{tech.name}</h3>
                      </div>
                      <p className="text-space-light-purple mb-4">{tech.description}</p>
                      <div className="flex items-center text-space-light-purple/70 text-sm">
                        <CircleCheck className="h-4 w-4 mr-2 text-green-500" /> Implemented
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="security" className="m-0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {securityTech.map((tech, index) => (
                    <div 
                      key={index} 
                      className="bg-space-deeper-purple border border-space-purple/20 rounded-xl p-6 shadow-lg hover:shadow-space-purple/20 transition-shadow"
                    >
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 mr-4 bg-white rounded-full flex items-center justify-center">
                          <img src={tech.icon} alt={tech.name} className="w-8 h-8 object-contain" />
                        </div>
                        <h3 className="text-xl font-bold text-white">{tech.name}</h3>
                      </div>
                      <p className="text-space-light-purple mb-4">{tech.description}</p>
                      <div className="flex items-center text-space-light-purple/70 text-sm">
                        <CircleCheck className="h-4 w-4 mr-2 text-green-500" /> Implemented
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-flex items-center justify-center gap-3 bg-space-deeper-purple/80 backdrop-blur-sm border border-space-purple/20 rounded-full px-6 py-3 mb-6">
            <Code className="h-5 w-5 text-space-purple" />
            <span className="text-space-light-purple">Open Source Technology</span>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button className="bg-space-purple hover:bg-space-dark-purple shadow-lg shadow-space-purple/20">
              <Github className="mr-2 h-5 w-5" />
              View Core Repository
            </Button>
            
            <Button variant="outline" className="border-space-light-purple text-space-light-purple">
              <ExternalLink className="mr-2 h-5 w-5" />
              Technical Whitepaper
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackShowcase;
