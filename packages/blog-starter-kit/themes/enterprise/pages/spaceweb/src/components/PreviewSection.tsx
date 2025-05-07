
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const PreviewSection: React.FC = () => {
  return (
    <section className="py-20 px-4 relative" id="preview">
      <div className="absolute inset-0 bg-space-gradient opacity-30 -z-10"></div>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-6 text-white">
          <span className="text-space-purple">Live</span> Preview
        </h2>
        <p className="text-xl text-center mb-12 text-space-light-purple max-w-2xl mx-auto">
          Experience the power of SPACE Web firsthand with our interactive demo
        </p>
        
        <Card className="bg-space-deeper-purple border border-space-purple/30 shadow-lg shadow-space-purple/10">
          <CardContent className="p-0 overflow-hidden rounded-lg">
            <div className="relative p-8">
              <div className="bg-black/50 rounded-lg p-4 overflow-hidden">
                <div className="flex gap-2 mb-3">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <pre className="text-green-400 overflow-x-auto font-mono text-sm">
                  <code>
{`// Running Windows app in SPACE Web
import { runApp } from 'space-web';

// Initialize the cross-platform runtime
const app = await runApp({
  source: './my-windows-app.exe',
  runtime: 'win32',
  permissions: ['filesystem', 'network'],
  mode: 'sandbox'
});

// Connect to P2P network
const peers = await app.connectP2P({
  protocol: 'hyperswarm',
  topic: 'space-web-demo'
});

// Start the app with real-time collaboration
app.start();
console.log('Application running in SPACE Web!');`}
                  </code>
                </pre>
              </div>
              <div className="absolute right-10 bottom-10 transform rotate-6">
                <div className="bg-space-blue bg-opacity-90 text-white px-5 py-2 rounded-lg font-bold shadow-lg">
                  Try it in SPACE
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default PreviewSection;
