import React from 'react';

export default function SectionHeader({ 
  label, 
  title, 
  description,
  centered = false 
}) {
  return (
    <div className={`mb-12 lg:mb-16 ${centered ? 'text-center' : ''}`}>
      {label && (
        <p className="text-[#4A9B9B] text-sm font-medium uppercase tracking-wider mb-3">
          {label}
        </p>
      )}
      <h2 className="text-3xl lg:text-4xl font-semibold text-white leading-tight mb-4">
        {title}
      </h2>
      {description && (
        <p className={`text-gray-400 text-lg leading-relaxed ${centered ? 'max-w-3xl mx-auto' : 'max-w-3xl'}`}>
          {description}
        </p>
      )}
    </div>
  );
}