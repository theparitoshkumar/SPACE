
import React, { useState } from 'react';
import { Circle, ArrowLeft, ArrowRight, Star } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Alex Morgan",
    role: "CTO",
    company: "TechVentures Inc.",
    quote: "SPACE Web has revolutionized how we think about browser technologies. The cross-platform capabilities allowed us to reduce development time by 60%.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  {
    name: "Sarah Chen",
    role: "Lead Developer",
    company: "Quantum Solutions",
    quote: "As a developer, the freedom and privacy aspects of SPACE Web are game-changing. Truly serverless architecture means we own our applications completely.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  {
    name: "Mark Johnson",
    role: "Angel Investor",
    company: "Tech Capital Group",
    quote: "I've invested in dozens of browser technologies, but SPACE Web stands out for its innovative approach to privacy and cross-platform compatibility.",
    rating: 4,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  {
    name: "Dr. Lisa Patel",
    role: "Research Director",
    company: "Future Web Institute",
    quote: "The mindfulness features built into SPACE Web represent the future of ethical tech design. This is the direction all browsers should be heading.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  }
];

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const prev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };
  
  return (
    <section className="py-24 px-4 relative" id="testimonials">
      <div className="absolute inset-0 bg-space-deeper-purple/50 -z-10"></div>
      <div className="absolute top-20 left-20 w-64 h-64 bg-space-purple opacity-10 rounded-full blur-3xl -z-5"></div>
      <div className="absolute bottom-20 right-20 w-64 h-64 bg-space-blue opacity-10 rounded-full blur-3xl -z-5"></div>
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-space-purple bg-opacity-20 rounded-full text-space-purple text-sm font-medium mb-3">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            <span className="text-space-purple">Early Adopters</span> Speak
          </h2>
          <p className="text-xl text-space-light-purple max-w-2xl mx-auto">
            Hear from developers, investors, and organizations already using SPACE Web
          </p>
          <div className="h-1.5 w-24 bg-gradient-to-r from-space-purple to-space-blue rounded-full mx-auto mt-6"></div>
        </div>
        
        <div className="relative">
          <div className="flex overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out w-full" 
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <Card className="bg-gradient-to-br from-space-deeper-purple to-space-dark-purple/30 border border-space-purple/20 shadow-xl overflow-hidden">
                    <div className="p-8 md:p-10 flex flex-col md:flex-row gap-8 items-center">
                      <div className="relative">
                        <div className="absolute -inset-1 bg-gradient-to-r from-space-purple to-space-blue rounded-full blur opacity-70"></div>
                        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden relative">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name} 
                            className="object-cover w-full h-full"
                          />
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex mb-4">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'}`} 
                            />
                          ))}
                        </div>
                        <blockquote className="text-xl md:text-2xl text-white italic mb-6 leading-relaxed">
                          "{testimonial.quote}"
                        </blockquote>
                        <div className="flex items-center">
                          <div>
                            <div className="text-lg font-bold text-white">{testimonial.name}</div>
                            <div className="text-space-light-purple">
                              {testimonial.role}, {testimonial.company}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-8 gap-4">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={prev} 
              className="rounded-full border-space-purple/30 text-space-light-purple hover:bg-space-purple hover:text-white"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button 
                  key={index} 
                  onClick={() => setCurrentIndex(index)}
                  className="p-1 focus:outline-none"
                >
                  <Circle 
                    className={`h-2 w-2 ${
                      index === currentIndex 
                        ? 'text-space-purple fill-space-purple' 
                        : 'text-space-light-purple/30'
                    }`} 
                  />
                </button>
              ))}
            </div>
            
            <Button 
              variant="outline" 
              size="icon" 
              onClick={next} 
              className="rounded-full border-space-purple/30 text-space-light-purple hover:bg-space-purple hover:text-white"
            >
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
