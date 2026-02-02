import React from 'react';
import { cn } from '@/lib/utils';

export default function InteractiveCard({ 
  children, 
  onClick, 
  href,
  isSelected = false,
  className = '',
  as = 'div',
  ...props 
}) {
  // Interactive cards must render as button or link
  const Component = href ? 'a' : 'button';
  const isButton = !href;

  return (
    <Component
      onClick={onClick}
      href={href}
      type={isButton ? 'button' : undefined}
      className={cn(
        // Outer interactive container with border, glow, and hover states
        'w-full text-left bg-white/5 rounded-lg p-6 border transition-all duration-200 group',
        isSelected 
          ? 'border-[#00C4C4] shadow-[inset_0_0_20px_rgba(0,196,196,0.08)]' 
          : 'border-white/20 hover:border-[#00C4C4]/40 hover:bg-[#00C4C4]/10 hover:shadow-[0_0_20px_rgba(0,196,196,0.2)] cursor-pointer',
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

export function InteractiveCardTitle({ children, className = '' }) {
  return (
    <h3 className={cn(
      'font-semibold text-white transition-colors duration-200 group-hover:text-[#00C4C4]',
      className
    )}>
      {children}
    </h3>
  );
}

export function InteractiveCardDescription({ children, className = '' }) {
  return (
    <p className={cn('text-gray-400 text-sm transition-colors duration-200 group-hover:text-[#00C4C4]', className)}>
      {children}
    </p>
  );
}