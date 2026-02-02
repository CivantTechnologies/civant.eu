import React, { useState } from 'react';
import { Info } from 'lucide-react';

export default function MarketFunnel() {
  const [showTooltip, setShowTooltip] = useState(false);

  const levels = [
    {
      label: 'European Public Procurement',
      value: '~€2.4 Trillion Annually',
      width: '100%'
    },
    {
      label: 'Ireland + France Public Procurement',
      value: '~€320–370 Billion Annually',
      width: '60%'
    },
    {
      label: 'Education & Public-Sector Technology',
      value: '~€4–10 Billion Annually',
      width: '32%'
    }
  ];

  return (
    <div className="my-12 flex flex-col items-center">
      <div className="w-full max-w-3xl">
        <div className="space-y-2.5">
          {levels.map((level, index) => (
            <div 
              key={index}
              className="flex flex-col"
            >
              <div className="text-sm font-medium text-gray-200 mb-1.5">
                {level.label}
              </div>
              <div 
                className="h-12 flex items-center px-4"
                style={{ 
                  backgroundColor: 'rgba(0, 196, 196, 0.87)',
                  width: level.width
                }}
              >
                <span className="text-xs text-[#0A1628] font-medium">
                  {level.value}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-6 relative">
          <button
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            onClick={() => setShowTooltip(!showTooltip)}
            className="text-gray-500 hover:text-gray-400 transition-colors"
            aria-label="Market data information"
          >
            <Info className="w-4 h-4" />
          </button>

          {showTooltip && (
            <div className="absolute bottom-full mb-2 w-72 bg-[#0A1628] border border-white/20 rounded-lg p-3 text-xs text-gray-300 leading-relaxed shadow-xl">
              Estimates derived from publicly available EU, OECD, and national 
              procurement datasets. Figures are indicative and used for analytical 
              segmentation rather than audited financial reporting.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}