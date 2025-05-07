
import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Github, Twitter, Linkedin, Send, Star, ExternalLink, Anchor } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative py-20 px-4 border-t border-sky-500/20 overflow-hidden">
      {/* Ocean wave footer background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-full bg-gradient-to-t from-blue-900/70 via-blue-800/30 to-transparent"></div>
        <div className="absolute -bottom-5 -left-10 -right-10 h-32 bg-blue-600/40 rounded-[100%] filter blur-xl"></div>
        <div className="absolute -bottom-20 -left-10 -right-10 h-32 bg-blue-500/20 rounded-[100%] filter blur-xl"></div>
        <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-blue-500 opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute -top-32 -left-32 w-64 h-64 bg-blue-600 opacity-10 rounded-full blur-3xl"></div>
        
        {/* Tiny bubbles */}
        {[...Array(15)].map((_, i) => (
          <div 
            key={i} 
            className="absolute rounded-full bg-white"
            style={{ 
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              bottom: `${Math.random() * 50}%`, 
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.3,
              animation: `bubble-rise ${Math.random() * 10 + 10}s linear infinite ${Math.random() * 5}s`
            }}
          ></div>
        ))}
      </div>
      
      <div className="max-w-6xl mx-auto">
        {/* Investor & Sponsor Section */}
        <div className="mb-16 p-8 rounded-2xl bg-gradient-to-br from-blue-900/30 to-blue-800/20 backdrop-blur-md border border-blue-500/30 shadow-lg">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-white">Partner with SPACE Web</h3>
              <p className="text-blue-100 mb-6">
                Join us on our mission to revolutionize the web. We're seeking visionary investors and partners who want to shape the future of digital experience.
              </p>
              <div className="flex gap-3 flex-wrap">
                <Button variant="default" className="bg-blue-600 hover:bg-blue-700">
                  Investor Deck
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" className="border-blue-400 text-blue-300 hover:bg-blue-600/20">
                  Partnership Opportunities
                </Button>
              </div>
            </div>
            <div className="bg-blue-900/30 p-6 rounded-xl border border-blue-500/20 shadow-inner">
              <h4 className="font-semibold mb-3 text-blue-200">Trusted By</h4>
              <div className="grid grid-cols-3 gap-4">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="h-12 bg-white/5 rounded-md flex items-center justify-center border border-white/10">
                    <div className="text-white/50 text-xs">Partner {i}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/30">
                <Anchor className="h-5 w-5 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">SPACE<span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-400">Web</span></span>
            </div>
            <p className="text-blue-100 mb-6">
              The world's first universal browser that puts your privacy and freedom first. Created on Earth by humans and AI working together.
            </p>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-blue-900/40 flex items-center justify-center border border-blue-500/30 hover:bg-blue-500/20 transition-colors shadow-md hover:shadow-blue-500/30"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5 text-blue-200" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-blue-900/40 flex items-center justify-center border border-blue-500/30 hover:bg-blue-500/20 transition-colors shadow-md hover:shadow-blue-500/30"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5 text-blue-200" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-blue-900/40 flex items-center justify-center border border-blue-500/30 hover:bg-blue-500/20 transition-colors shadow-md hover:shadow-blue-500/30"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-blue-200" />
              </a>
            </div>
          </div>
          
          <div className="md:col-span-2 grid sm:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-medium mb-4 text-white">Resources</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-blue-100 hover:text-blue-300 transition-colors">Docs</a></li>
                <li><a href="#" className="text-blue-100 hover:text-blue-300 transition-colors">API Reference</a></li>
                <li><a href="#" className="text-blue-100 hover:text-blue-300 transition-colors">Tutorials</a></li>
                <li><a href="#" className="text-blue-100 hover:text-blue-300 transition-colors">Blog</a></li>
                <li><a href="#" className="text-blue-100 hover:text-blue-300 transition-colors">Investor Relations</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-4 text-white">Community</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-blue-100 hover:text-blue-300 transition-colors">Discord</a></li>
                <li><a href="#" className="text-blue-100 hover:text-blue-300 transition-colors">GitHub</a></li>
                <li><a href="#" className="text-blue-100 hover:text-blue-300 transition-colors">Reddit</a></li>
                <li><a href="#" className="text-blue-100 hover:text-blue-300 transition-colors">Twitter</a></li>
                <li><a href="#" className="text-blue-100 hover:text-blue-300 transition-colors">Contributors</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-4 text-white">Let's stay in SPACE</h3>
              <p className="text-blue-100 mb-4 text-sm">
                Subscribe for updates on releases, features, and investment opportunities
              </p>
              <div className="relative">
                <Input 
                  placeholder="Your email address" 
                  className="bg-blue-900/30 border-blue-500/30 focus-visible:ring-blue-500 pr-12 shadow-inner"
                />
                <Button size="sm" className="absolute right-1 top-1 bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 h-8 w-8 p-0">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-blue-500/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-blue-200">
          <div>
            &copy; {new Date().getFullYear()} SPACE Web. All rights reserved.
          </div>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-blue-300 transition-colors">Terms</a>
            <a href="#" className="hover:text-blue-300 transition-colors">Privacy</a>
            <a href="#" className="hover:text-blue-300 transition-colors">Cookies</a>
            <a href="#" className="hover:text-blue-300 transition-colors">Investors</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
