import React from 'react';

export default function ContentCard({ 
  children, 
  className = '',
  hover = false 
}) {
  return (
    <div 
      className={`
        bg-white/5 border border-white/10 rounded-lg p-6 lg:p-8
        ${hover ? 'transition-all duration-300 hover:bg-white/[0.07] hover:border-white/20' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
}