import React from 'react';

export default function HeroSection({ 
  label, 
  headline, 
  description,
  variant = 'default', // 'home' or 'default'
  children
}) {
  // Fixed height classes - canonical hero system
  const heightClass = variant === 'home' 
    ? 'min-h-screen' 
    : 'min-h-[68vh]';

  // Micro logo scales proportionally with hero height
  const microLogoSize = variant === 'home'
    ? 'w-[1550px] h-[1550px] lg:w-[2000px] lg:h-[2000px]'
    : 'w-[1050px] h-[1050px] lg:w-[1350px] lg:h-[1350px]';

  return (
    <section className={`relative bg-[#0A1628] ${heightClass} flex items-center overflow-hidden`}>
      {/* Background micro logo - absolute center, atmospheric accent */}
      <div 
        className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${microLogoSize} opacity-[0.04] pointer-events-none`}
        aria-hidden="true"
      >
        <img 
          src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/697a52afa63291e0147b78b4/0733be937_Civant-Micrologo.jpg"
          alt=""
          className="w-full h-full object-contain"
          aria-hidden="true"
        />
      </div>

      <div className={`relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 ${variant === 'home' ? 'pt-16 md:pt-8 -mt-[15vh]' : 'pt-16 md:pt-8'}`}>
        <div className="max-w-5xl">
           {/* HeroTextGroup - text elements container */}
           <div>
             {/* Section eyebrow label - canonical token */}
             <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#00C4C4] mb-5">
               {label}
             </p>

             {/* Hero title - canonical token, max 2 lines */}
             {/* Aligned to middle ring of micro-logo */}
             <h1 className="text-4xl lg:text-5xl font-semibold text-white leading-[1.2] mb-6 max-w-5xl">
              {headline}
            </h1>
            
            {/* Supporting description - canonical token */}
            <p className="text-lg lg:text-xl text-gray-300 leading-relaxed max-w-3xl">
              {description}
            </p>
          </div>
          
          {/* Optional CTA section for Home page */}
          {children && (
            <div className="mt-8">
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}