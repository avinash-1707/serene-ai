// src/components/FloatingHearts.tsx
import React from 'react';

// Define a type for a single heart's properties
interface HeartConfig {
  id: string; // Unique ID for key prop
  sizeClasses: string; // Tailwind classes for width/height (e.g., "w-6 h-6")
  positionClasses: string; // Tailwind classes for positioning (e.g., "top-12 left-8")
  isBlurred?: boolean; // Optional prop to apply blur
  animationDuration?: string; // Optional: Override default animation duration
}

const heartsConfig: HeartConfig[] = [
  { id: 'h1', sizeClasses: 'w-6 h-6', positionClasses: 'top-12 left-8', isBlurred: true, animationDuration: '6s' },
  { id: 'h2', sizeClasses: 'w-8 h-8', positionClasses: 'top-1/2 right-1/4', isBlurred: true, animationDuration: '8s' },
  { id: 'h3', sizeClasses: 'w-5 h-5', positionClasses: 'bottom-20 left-1/3', isBlurred: true, animationDuration: '7s' },
  // Add more hearts here as needed, adjust positions, sizes, and blur
  { id: 'h4', sizeClasses: 'w-7 h-7', positionClasses: 'top-1/4 left-1/2', isBlurred: true, animationDuration: '5s' },
  { id: 'h5', sizeClasses: 'w-9 h-9', positionClasses: 'bottom-10 right-10', isBlurred: true, animationDuration: '9s' },
  { id: 'h6', sizeClasses: 'w-10 h-10', positionClasses: 'top-32 right-1/3', isBlurred: true, animationDuration: '6.5s' },
  { id: 'h7', sizeClasses: 'w-7 h-7', positionClasses: 'bottom-50 left-8', isBlurred: true, animationDuration: '7.5s' },
  { id: 'h8', sizeClasses: 'w-8 h-8', positionClasses: 'top-40 right-8', isBlurred: true, animationDuration: '8.2s' },
  { id: 'h9', sizeClasses: 'w-5 h-5', positionClasses: 'bottom-60 left-1/4', isBlurred: true, animationDuration: '6.8s' },
  { id: 'h10', sizeClasses: 'w-6 h-6', positionClasses: 'top-15 right-1/4', isBlurred: true, animationDuration: '7.2s' },
  { id: 'h11', sizeClasses: 'w-7 h-7', positionClasses: 'bottom-55 left-1/2', isBlurred: true, animationDuration: '8.5s' },
  { id: 'h12', sizeClasses: 'w-9 h-9', positionClasses: 'top-16 left-1/3', isBlurred: true, animationDuration: '6.3s' },
  { id: 'h13', sizeClasses: 'w-8 h-8', positionClasses: 'bottom-32 right-1/4', isBlurred: true, animationDuration: '7.8s' },

];

const FloatingHearts: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Define the gradient once for all hearts within this component */}
      {/* Hidden SVG for defs - important for the gradient to be available */}
      <svg width="0" height="0" className="absolute" style={{ visibility: 'hidden', position: 'absolute' }}>
        <defs>
          <linearGradient id="heartGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E5DFFD" /> {/* Lighter purple/pink */}
            <stop offset="100%" stopColor="#C7B4F9" /> {/* Deeper purple */}
          </linearGradient>
        </defs>
      </svg>

      {heartsConfig.map((heart) => (
        <div
          key={heart.id}
          className={`absolute ${heart.positionClasses} heart-floating-container`}
          style={{ '--animation-duration': heart.animationDuration } as React.CSSProperties}
        >
          <svg
            className={`heart-svg ${heart.sizeClasses} ${heart.isBlurred ? 'heart-blurred' : ''}`}
            viewBox="0 0 24 24"
            fill="url(#heartGradient)"
          >
            <path
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 
                 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 
                 4.5 2.09C13.09 3.81 14.76 3 16.5 3 
                 19.58 3 22 5.42 22 8.5c0 3.78-3.4 
                 6.86-8.55 11.54L12 21.35z"
            />
          </svg>
        </div>
      ))}

      {/* Styled-JSX for component-scoped CSS */}
      <style jsx>{`
        .heart-floating-container {
          z-index: 0;
          /* If you want more varied initial positions for animation, you'd add JS to
             generate a random animation-delay for each heart here. */
        }

        .heart-svg {
          opacity: 0.8; /* Default opacity for all hearts */
          animation: float var(--animation-duration, 6s) ease-in-out infinite;
        }

        .heart-blurred {
          filter: blur(1.5px); /* Adjust blur amount as needed */
          opacity: 0.6; /* Slightly lower opacity for a more distant/ethereal feel */
        }

        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default FloatingHearts;