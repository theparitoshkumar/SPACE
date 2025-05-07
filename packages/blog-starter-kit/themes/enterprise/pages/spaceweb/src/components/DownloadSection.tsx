
import React from 'react';
import { Button } from '@/components/ui/button';
import { Github, FileText, Download } from 'lucide-react';

const DownloadSection: React.FC = () => {
  return (
    <section className="py-20 px-4" id="download">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-6">
          <span className="text-space-purple">Download</span> & Explore
        </h2>
        <p className="text-xl text-center mb-12 text-space-light-purple max-w-2xl mx-auto">
          Ready to blast off? Get SPACE Web on your favorite platform
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Button variant="outline" size="lg" className="h-auto py-6 flex flex-col items-center border-space-purple/30 hover:bg-space-purple/20">
            <Github className="h-8 w-8 mb-2" />
            <span className="text-lg font-medium">GitHub Repo</span>
          </Button>
          
          <Button variant="outline" size="lg" className="h-auto py-6 flex flex-col items-center border-space-purple/30 hover:bg-space-purple/20">
            <FileText className="h-8 w-8 mb-2" />
            <span className="text-lg font-medium">Dev Docs</span>
          </Button>
          
          <Button variant="outline" size="lg" className="h-auto py-6 flex flex-col items-center border-space-purple/30 hover:bg-space-purple/20">
            <Download className="h-8 w-8 mb-2" />
            <span className="text-lg font-medium">Beta Builds</span>
          </Button>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <div className="px-4 py-2 bg-green-500/20 text-green-400 rounded-full text-sm font-medium">
            Mac OS
          </div>
          <div className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium">
            Linux
          </div>
          <div className="px-4 py-2 bg-yellow-500/20 text-yellow-400 rounded-full text-sm font-medium">
            WebAssembly
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4">
          <div className="px-4 py-2 bg-space-deeper-purple rounded-full text-sm font-medium border border-space-purple/30">
            MIT Licensed ✅
          </div>
          <div className="px-4 py-2 bg-space-deeper-purple rounded-full text-sm font-medium border border-space-purple/30">
            Made with ❤️ by humans + AI
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
