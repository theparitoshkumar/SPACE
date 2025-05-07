
import React, { useEffect, useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { TrendingUp, Users, CircleDollarSign, CirclePercent, BarChart as BarChartIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

// Sample data for the charts
const marketGrowthData = [
  { year: '2023', users: 500 },
  { year: '2024', users: 2500 },
  { year: '2025', users: 15000 },
  { year: '2026', users: 50000 },
  { year: '2027', users: 200000 },
  { year: '2028', users: 500000 },
];

const revenueProjectionData = [
  { year: '2023', revenue: 0 },
  { year: '2024', revenue: 100000 },
  { year: '2025', revenue: 500000 },
  { year: '2026', revenue: 2000000 },
  { year: '2027', revenue: 5000000 },
  { year: '2028', revenue: 12000000 },
];

const competitiveAnalysisData = [
  { name: 'SPACE Web', privacy: 95, performance: 85, features: 90, openSource: 100 },
  { name: 'Chrome', privacy: 40, performance: 75, features: 85, openSource: 50 },
  { name: 'Firefox', privacy: 70, performance: 65, features: 75, openSource: 90 },
  { name: 'Safari', privacy: 60, performance: 80, features: 65, openSource: 30 },
  { name: 'Edge', privacy: 35, performance: 70, features: 80, openSource: 40 },
];

const InvestmentMetrics: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'growth' | 'revenue' | 'comparison'>('growth');
  const [animatedValues, setAnimatedValues] = useState({
    marketSize: 0,
    growthRate: 0,
    roi: 0,
    userBase: 0
  });

  useEffect(() => {
    // Animate the metric values
    const targetValues = {
      marketSize: 240,
      growthRate: 38,
      roi: 285,
      userBase: 2.5
    };
    
    const duration = 2000; // 2 seconds
    const frameRate = 60;
    const totalFrames = (duration / 1000) * frameRate;
    let frame = 0;
    
    const animateValues = () => {
      const progress = frame / totalFrames;
      
      setAnimatedValues({
        marketSize: Math.floor(progress * targetValues.marketSize),
        growthRate: Math.floor(progress * targetValues.growthRate),
        roi: Math.floor(progress * targetValues.roi),
        userBase: parseFloat((progress * targetValues.userBase).toFixed(1))
      });
      
      frame++;
      
      if (frame <= totalFrames) {
        requestAnimationFrame(animateValues);
      }
    };
    
    animateValues();
  }, []);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  };
  
  // Type-safe formatter function for tooltips
  const formatUserValue = (value: number | string) => {
    const numValue = typeof value === 'number' ? value : parseInt(value);
    return [`${numValue.toLocaleString()} users`, 'User Base'];
  };
  
  const formatRevenueValue = (value: number | string) => {
    const numValue = typeof value === 'number' ? value : parseInt(value);
    return [formatCurrency(numValue), 'Revenue'];
  };
  
  return (
    <section className="py-24 px-4 relative" id="investment">
      <div className="absolute inset-0 bg-space-gradient opacity-30 -z-10"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-space-purple opacity-10 rounded-full blur-3xl -z-5"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-space-blue opacity-10 rounded-full blur-3xl -z-5"></div>
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-space-purple bg-opacity-20 rounded-full text-space-purple text-sm font-medium mb-3">
            Investor Opportunity
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            <span className="text-space-purple">Investment</span> Potential
          </h2>
          <p className="text-xl text-space-light-purple max-w-2xl mx-auto">
            Market analysis and growth projections for SPACE Web
          </p>
          <div className="h-1.5 w-24 bg-gradient-to-r from-space-purple to-space-blue rounded-full mx-auto mt-6"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card className="bg-space-deeper-purple border border-space-purple/20 shadow-lg hover:shadow-space-purple/20 transition-shadow">
            <CardContent className="p-6 flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-space-purple/10 flex items-center justify-center mb-4">
                <BarChartIcon className="h-8 w-8 text-space-purple" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">${animatedValues.marketSize}B</div>
              <div className="text-space-light-purple text-sm text-center">Total Addressable Market</div>
            </CardContent>
          </Card>
          
          <Card className="bg-space-deeper-purple border border-space-purple/20 shadow-lg hover:shadow-space-purple/20 transition-shadow">
            <CardContent className="p-6 flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-space-purple/10 flex items-center justify-center mb-4">
                <TrendingUp className="h-8 w-8 text-space-purple" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{animatedValues.growthRate}%</div>
              <div className="text-space-light-purple text-sm text-center">Annual Market Growth</div>
            </CardContent>
          </Card>
          
          <Card className="bg-space-deeper-purple border border-space-purple/20 shadow-lg hover:shadow-space-purple/20 transition-shadow">
            <CardContent className="p-6 flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-space-purple/10 flex items-center justify-center mb-4">
                <CirclePercent className="h-8 w-8 text-space-purple" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{animatedValues.roi}%</div>
              <div className="text-space-light-purple text-sm text-center">Projected 5-Year ROI</div>
            </CardContent>
          </Card>
          
          <Card className="bg-space-deeper-purple border border-space-purple/20 shadow-lg hover:shadow-space-purple/20 transition-shadow">
            <CardContent className="p-6 flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-space-purple/10 flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-space-purple" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{animatedValues.userBase}K+</div>
              <div className="text-space-light-purple text-sm text-center">Early Adopter Base</div>
            </CardContent>
          </Card>
        </div>
        
        <div className="mb-8">
          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
              variant={activeTab === 'growth' ? 'default' : 'outline'}
              onClick={() => setActiveTab('growth')}
              className={activeTab === 'growth' ? 'bg-space-purple' : 'border-space-purple/30 text-space-light-purple'}
            >
              User Growth
            </Button>
            
            <Button 
              variant={activeTab === 'revenue' ? 'default' : 'outline'}
              onClick={() => setActiveTab('revenue')}
              className={activeTab === 'revenue' ? 'bg-space-purple' : 'border-space-purple/30 text-space-light-purple'}
            >
              Revenue Projections
            </Button>
            
            <Button 
              variant={activeTab === 'comparison' ? 'default' : 'outline'}
              onClick={() => setActiveTab('comparison')}
              className={activeTab === 'comparison' ? 'bg-space-purple' : 'border-space-purple/30 text-space-light-purple'}
            >
              Competitive Analysis
            </Button>
          </div>
        </div>
        
        <Card className="bg-space-deeper-purple border border-space-purple/20 shadow-xl overflow-hidden">
          <CardContent className="p-6">
            <div className="h-80 w-full">
              {activeTab === 'growth' && (
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={marketGrowthData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#9b87f5" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#9b87f5" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="year" stroke="#D6BCFA" />
                    <YAxis stroke="#D6BCFA" />
                    <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#1A1F2C', borderColor: '#9b87f5', color: '#fff' }}
                      formatter={(value: number | string) => {
                        const numValue = typeof value === 'number' ? value : parseInt(value);
                        return [`${numValue.toLocaleString()} users`, 'User Base'];
                      }}
                    />
                    <Area type="monotone" dataKey="users" stroke="#9b87f5" fillOpacity={1} fill="url(#colorUsers)" />
                  </AreaChart>
                </ResponsiveContainer>
              )}
              
              {activeTab === 'revenue' && (
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={revenueProjectionData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#1EAEDB" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#1EAEDB" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="year" stroke="#D6BCFA" />
                    <YAxis stroke="#D6BCFA" />
                    <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#1A1F2C', borderColor: '#1EAEDB', color: '#fff' }}
                      formatter={(value: number | string) => {
                        const numValue = typeof value === 'number' ? value : parseInt(value);
                        return [formatCurrency(numValue), 'Revenue'];
                      }}
                    />
                    <Area type="monotone" dataKey="revenue" stroke="#1EAEDB" fillOpacity={1} fill="url(#colorRevenue)" />
                  </AreaChart>
                </ResponsiveContainer>
              )}
              
              {activeTab === 'comparison' && (
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={competitiveAnalysisData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                    <XAxis dataKey="name" stroke="#D6BCFA" />
                    <YAxis stroke="#D6BCFA" />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#1A1F2C', borderColor: '#9b87f5', color: '#fff' }}
                    />
                    <Bar dataKey="privacy" name="Privacy" fill="#9b87f5" />
                    <Bar dataKey="performance" name="Performance" fill="#1EAEDB" />
                    <Bar dataKey="features" name="Features" fill="#E5DEFF" />
                    <Bar dataKey="openSource" name="Open Source" fill="#7E69AB" />
                  </BarChart>
                </ResponsiveContainer>
              )}
            </div>
          </CardContent>
        </Card>
        
        <div className="mt-12 text-center">
          <Button className="bg-space-purple hover:bg-space-dark-purple shadow-lg shadow-space-purple/20">
            <CircleDollarSign className="mr-2 h-5 w-5" />
            Download Full Investment Deck
          </Button>
          <p className="mt-4 text-space-light-purple text-sm">
            Contact our investor relations team at <span className="text-space-purple">invest@spaceweb.io</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default InvestmentMetrics;
