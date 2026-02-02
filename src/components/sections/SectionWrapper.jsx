import React from 'react';

export default function SectionWrapper({ 
  children, 
  className = '', 
  darker = false,
  id 
}) {
  return (
    <section 
      id={id}
      className={`py-16 lg:py-24 ${darker ? 'bg-[#060D18]' : 'bg-[#0A1628]'} ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}