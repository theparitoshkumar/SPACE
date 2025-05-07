
import React, { useEffect, useState } from 'react';

const StarField: React.FC = () => {
  const [stars, setStars] = useState<JSX.Element[]>([]);
  const [bubbles, setBubbles] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const createStars = () => {
      const starCount = Math.min(window.innerWidth / 3, 200);
      const newStars = [];
      
      for (let i = 0; i < starCount; i++) {
        const size = Math.random() * 2 + 1;
        const left = Math.random() * 100;
        // Stars mostly in the top 70% of the screen
        const top = Math.random() * 70;
        const delay = Math.random() * 5;
        
        newStars.push(
          <div 
            key={`star-${i}`}
            className="star absolute" 
            style={{ 
              '--size': size, 
              '--left': left, 
              '--top': top, 
              '--delay': delay 
            } as React.CSSProperties}
          />
        );
      }
      
      setStars(newStars);
    };
    
    const createBubbles = () => {
      const bubbleCount = Math.min(window.innerWidth / 4, 50);
      const newBubbles = [];
      
      for (let i = 0; i < bubbleCount; i++) {
        const size = Math.random() * 3 + 1;
        const left = Math.random() * 100;
        // Bubbles only in the bottom 40% of the screen
        const top = 60 + Math.random() * 40;
        const speed = Math.random() * 8 + 6;
        const delay = Math.random() * 10;
        
        newBubbles.push(
          <div 
            key={`bubble-${i}`}
            className="bubble absolute rounded-full bg-white bg-opacity-50 animate-bubble-rise" 
            style={{ 
              width: `${size}px`, 
              height: `${size}px`,
              left: `${left}%`, 
              bottom: `${Math.random() * 10}%`, 
              animationDuration: `${speed}s`,
              animationDelay: `${delay}s`
            }}
          />
        );
      }
      
      setBubbles(newBubbles);
    };
    
    createStars();
    createBubbles();
    
    window.addEventListener('resize', () => {
      createStars();
      createBubbles();
    });
    
    return () => {
      window.removeEventListener('resize', createStars);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {stars}
      {bubbles}
    </div>
  );
};

export default StarField;
