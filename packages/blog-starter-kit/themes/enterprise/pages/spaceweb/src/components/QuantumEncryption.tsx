
import React, { useEffect, useState, useRef } from 'react';
import { Lock, Shield, Key, RefreshCw, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const QuantumEncryption: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [encryptionStatus, setEncryptionStatus] = useState(75);
  const sectionRef = useRef<HTMLElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          
          // Start the encryption animation when visible
          intervalRef.current = setInterval(() => {
            setEncryptionStatus(prev => {
              const newValue = prev + (Math.random() > 0.7 ? 1 : -1);
              return Math.min(98, Math.max(70, newValue));
            });
          }, 500);
        } else {
          // Clear interval when not visible
          if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
          }
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
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  // Generate random binary strings for visual effect
  const generateRandomBinary = (length: number) => {
    return Array.from({ length }, () => Math.random() > 0.5 ? '1' : '0').join('');
  };

  const [binaryStrings, setBinaryStrings] = useState<string[]>([]);
  
  useEffect(() => {
    setBinaryStrings(Array.from({ length: 20 }, () => generateRandomBinary(16)));
    
    const interval = setInterval(() => {
      setBinaryStrings(prev => {
        const newStrings = [...prev];
        const indexToChange = Math.floor(Math.random() * newStrings.length);
        newStrings[indexToChange] = generateRandomBinary(16);
        return newStrings;
      });
    }, 200);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-4 relative" id="quantum-encryption">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 to-space-deeper-purple/70 -z-10"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500 opacity-5 rounded-full blur-3xl -z-5"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500 opacity-5 rounded-full blur-3xl -z-5"></div>
      
      <div className="max-w-6xl mx-auto">
        <div 
          className={`flex flex-col-reverse lg:flex-row items-center gap-12 transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
        >
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-teal-400 to-indigo-500 opacity-75 blur"></div>
              <div className="relative rounded-xl overflow-hidden border border-teal-500/30 bg-black/80">
                <div className="h-10 bg-gray-900 flex items-center px-3">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                  </div>
                  <div className="ml-4 text-xs text-white">quantum-security.terminal</div>
                </div>
                
                <div className="h-80 p-4 font-mono text-xs overflow-hidden">
                  {/* Terminal content */}
                  <div className="text-green-500">$ initiating quantum encryption protocol</div>
                  <div className="text-white mt-1">Quantum key distribution in progress...</div>
                  <div className="text-white mt-1">Secure protocol: SPQKS-V3 (Superposition Quantum Key Sharing)</div>
                  
                  <div className="mt-3">
                    <div className="text-yellow-400">
                      [QUANTUM] Establishing entanglement pairs...
                    </div>
                    <div className="text-teal-400 mt-1">
                      Entanglement established: {encryptionStatus}%
                    </div>
                    
                    {/* Progress bar */}
                    <div className="mt-2 h-1 bg-gray-800 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-teal-500 to-indigo-500 animate-pulse-slow"
                        style={{ width: `${encryptionStatus}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  {/* Binary visualization */}
                  <div className="mt-4 grid grid-cols-2 gap-x-4">
                    <div>
                      <div className="text-indigo-400 mb-1">QUANTUM STATE VECTOR A:</div>
                      {binaryStrings.slice(0, 10).map((str, i) => (
                        <div key={i} className="text-white opacity-70">{str}</div>
                      ))}
                    </div>
                    <div>
                      <div className="text-teal-400 mb-1">QUANTUM STATE VECTOR B:</div>
                      {binaryStrings.slice(10, 20).map((str, i) => (
                        <div key={i} className="text-white opacity-70">{str}</div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Status */}
                  <div className="mt-4">
                    <div className="text-green-500 animate-pulse">
                      [SECURE] Connection established with quantum-resilient encryption
                    </div>
                    <div className="text-white mt-1 flex items-center">
                      <RefreshCw className="h-3 w-3 mr-1 animate-spin-slow" />
                      <span>Rotating keys every 600ms</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Status indicators */}
            <div className="mt-4 flex justify-center items-center gap-4">
              <div className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-green-400 mr-2 animate-pulse"></div>
                <span className="text-green-300 text-sm">Quantum Secure</span>
              </div>
              <div className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-indigo-400 mr-2 animate-pulse" style={{ animationDelay: '0.3s' }}></div>
                <span className="text-indigo-300 text-sm">Post-Quantum Ready</span>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 space-y-6">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-teal-500/20 border border-teal-400/30">
              <Lock className="h-4 w-4 mr-2 text-teal-400" />
              <span className="text-teal-300 text-sm">Quantum Security</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white text-glow">Unbreakable By Design</h2>
            
            <p className="text-lg text-teal-100">
              SPACE Web implements cutting-edge quantum-resistant encryption to ensure your data remains secure even against quantum computing attacks. Your privacy is future-proofed.
            </p>
            
            <div className="grid grid-cols-2 gap-5">
              <div className="p-4 rounded-xl bg-teal-900/20 border border-teal-500/20 backdrop-blur-sm">
                <Key className="h-6 w-6 text-yellow-400 mb-2" />
                <h3 className="text-lg font-semibold text-white mb-1">Quantum Keys</h3>
                <p className="text-sm text-teal-200">Encryption that leverages quantum randomness</p>
              </div>
              
              <div className="p-4 rounded-xl bg-teal-900/20 border border-teal-500/20 backdrop-blur-sm">
                <Shield className="h-6 w-6 text-red-400 mb-2" />
                <h3 className="text-lg font-semibold text-white mb-1">Zero Leakage</h3>
                <p className="text-sm text-teal-200">Absolutely no data sent to third parties</p>
              </div>
              
              <div className="p-4 rounded-xl bg-teal-900/20 border border-teal-500/20 backdrop-blur-sm">
                <Zap className="h-6 w-6 text-blue-400 mb-2" />
                <h3 className="text-lg font-semibold text-white mb-1">Ultra-Fast</h3>
                <p className="text-sm text-teal-200">No performance impact despite high security</p>
              </div>
              
              <div className="p-4 rounded-xl bg-teal-900/20 border border-teal-500/20 backdrop-blur-sm">
                <RefreshCw className="h-6 w-6 text-purple-400 mb-2" />
                <h3 className="text-lg font-semibold text-white mb-1">Auto Rotation</h3>
                <p className="text-sm text-teal-200">Keys change every 600ms for maximum protection</p>
              </div>
            </div>
            
            <div className="pt-4">
              <Button className="bg-gradient-to-r from-teal-600 to-indigo-600 hover:from-teal-700 hover:to-indigo-700 text-white shadow-lg shadow-teal-500/30 group">
                <Lock className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                Learn About Security
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuantumEncryption;
