import { useState } from 'react';
import goldConsole from '../images/gold-console.jpg';
import purpleConsole from '../images/purple-console.jpg';

export const ConsoleTransition = () => {
  const [isTouching, setIsTouching] = useState(false);
  
  return (
    <div 
      className="flex items-center justify-center w-full min-h-screen bg-black p-4 touch-none select-none"
      onTouchStart={() => setIsTouching(true)}
      onTouchEnd={() => setIsTouching(false)}
      onMouseDown={() => setIsTouching(true)}
      onMouseUp={() => setIsTouching(false)}
      onMouseLeave={() => setIsTouching(false)}
    >
      <div className="relative w-full max-w-md aspect-[9/16]">
        <img
          src={goldConsole}
          alt="Gold console"
          className="absolute inset-0 w-full h-full object-contain pointer-events-none"
        />
        <img
          src={purpleConsole}
          alt="Purple console"
          className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-1000 ease-in-out pointer-events-none ${
            isTouching ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </div>
    </div>
  );
};