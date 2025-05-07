
import React, { useState } from 'react';
import { Play, ArrowRight, Code, Terminal, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

const InteractiveDemo: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState<'browser' | 'code' | 'terminal'>('browser');
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-24 px-4 relative" id="demo">
      <div className="absolute inset-0 bg-space-gradient opacity-30 -z-10"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent opacity-20 rounded-full blur-3xl -z-5"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-space-blue opacity-20 rounded-full blur-3xl -z-5"></div>
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-space-purple bg-opacity-20 rounded-full text-space-purple text-sm font-medium mb-3">
            Interactive Experience
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            <span className="text-space-purple">Experience</span> the Platform
          </h2>
          <p className="text-xl text-center mb-6 text-space-light-purple max-w-2xl mx-auto">
            See SPACE Web in action with our interactive demo
          </p>
          <div className="h-1.5 w-24 bg-gradient-to-r from-space-purple to-space-blue rounded-full mx-auto"></div>
        </div>
        
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          <Button 
            variant={activeDemo === 'browser' ? 'default' : 'outline'}
            onClick={() => setActiveDemo('browser')}
            className={activeDemo === 'browser' ? 'bg-space-purple' : 'border-space-purple/30 text-space-light-purple'}
          >
            <Globe className="mr-2 h-4 w-4" />
            Browser View
          </Button>
          
          <Button 
            variant={activeDemo === 'code' ? 'default' : 'outline'}
            onClick={() => setActiveDemo('code')}
            className={activeDemo === 'code' ? 'bg-space-purple' : 'border-space-purple/30 text-space-light-purple'}
          >
            <Code className="mr-2 h-4 w-4" />
            Code Editor
          </Button>
          
          <Button 
            variant={activeDemo === 'terminal' ? 'default' : 'outline'}
            onClick={() => setActiveDemo('terminal')}
            className={activeDemo === 'terminal' ? 'bg-space-purple' : 'border-space-purple/30 text-space-light-purple'}
          >
            <Terminal className="mr-2 h-4 w-4" />
            Terminal
          </Button>
        </div>
        
        <div className="bg-space-deeper-purple border border-space-purple/30 rounded-xl shadow-xl shadow-space-purple/20 overflow-hidden">
          <div className="flex items-center justify-between bg-black/50 p-3 border-b border-space-purple/20">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="text-space-light-purple text-sm">
              {activeDemo === 'browser' ? 'SPACE Web Browser' : activeDemo === 'code' ? 'Code Editor' : 'Terminal'}
            </div>
            <div></div>
          </div>
          
          <div className="p-6 h-96 relative">
            {activeDemo === 'browser' && (
              <div className="h-full flex flex-col items-center justify-center text-center">
                <div className="glassmorphism p-8 rounded-xl animate-float">
                  <h3 className="text-2xl font-bold text-white mb-4">Cross-Platform Web Experience</h3>
                  <p className="text-space-light-purple mb-6">
                    Run Windows, Android, and Linux applications directly in your browser with no emulators or installations.
                  </p>
                  <Button 
                    onClick={() => setIsPlaying(!isPlaying)} 
                    className="bg-space-purple hover:bg-space-dark-purple"
                  >
                    {isPlaying ? (
                      <>Pause Demo</>
                    ) : (
                      <>Play Demo <Play className="ml-2 h-4 w-4" /></>
                    )}
                  </Button>
                </div>
                
                {isPlaying && (
                  <div className="absolute inset-0 bg-black/70 flex items-center justify-center backdrop-blur-sm z-10">
                    <div className="animate-pulse-slow">
                      <div className="w-16 h-16 rounded-full bg-space-purple flex items-center justify-center">
                        <Play className="h-8 w-8 text-white" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
            
            {activeDemo === 'code' && (
              <div className="h-full overflow-auto font-mono text-sm">
                <pre className="text-green-400">
                  <code>
{`// SPACE Web Framework Example
import { spaceWeb } from 'space-web';
import { win32 } from 'space-web/platforms';

// Initialize a cross-platform app instance
const app = spaceWeb.createApp({
  name: 'MyWindowsApp',
  platform: win32,
  permissions: {
    storage: true,
    network: true,
    notifications: true
  }
});

// Configure P2P networking
app.useP2P({
  protocol: 'hyperswarm',
  encryption: true,
  discovery: {
    seed: 'space-web-demo',
    bootstrap: ['discovery1.spaceweb.io:49737']
  }
});

// Set up AI assistant integration
app.useAI({
  features: ['summarization', 'voice-control', 'context-awareness'],
  privacyLevel: 'maximum', // All AI processing happens locally
});

// Implement mindfulness features
app.useMindfulness({
  focusMode: true,
  usageTracking: true,
  breakReminders: {
    interval: 50 * 60 * 1000, // 50 minutes
    strategy: 'smart' // Won't interrupt important tasks
  }
});

// Start the application
app.start();

console.log('SPACE Web application is running...');`}
                  </code>
                </pre>
              </div>
            )}
            
            {activeDemo === 'terminal' && (
              <div className="h-full bg-black p-4 font-mono text-sm overflow-auto">
                <div className="text-green-500">
                  $ space-web init my-cross-platform-app
                </div>
                <div className="text-white mt-2">
                  <div>Initializing SPACE Web project...</div>
                  <div>✓ Project structure created</div>
                  <div>✓ Dependencies installed</div>
                  <div>✓ Configuration generated</div>
                </div>
                <div className="text-green-500 mt-4">
                  $ space-web run --platform=win32
                </div>
                <div className="text-white mt-2">
                  <div>Starting SPACE Web Runtime...</div>
                  <div>✓ P2P network connected (6 peers)</div>
                  <div>✓ Win32 compatibility layer loaded</div>
                  <div>✓ Application sandbox initialized</div>
                  <div>✓ Running application in isolated container</div>
                </div>
                <div className="text-yellow-400 mt-4">
                  [SPACE Web] Application running at https://localhost:3000
                </div>
              </div>
            )}
          </div>
          
          <div className="bg-black/30 p-4 border-t border-space-purple/20 flex justify-between items-center">
            <div className="text-space-light-purple text-sm">
              Ready to explore more features?
            </div>
            <Button size="sm" className="bg-space-blue hover:bg-space-sky-blue">
              Full Demo <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveDemo;
