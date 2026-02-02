import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const marketData = [
  {
    title: 'EU Public Procurement',
    value: '€2T',
    numericValue: 2000,
    description: 'Total annual public procurement spend across EU member states',
  },
  {
    title: 'Technology & Digital Spend',
    value: '€450B',
    numericValue: 450,
    description: 'IT, software, and digital infrastructure procurement',
  },
  {
    title: 'Higher Education Segment',
    value: '€85B',
    numericValue: 85,
    description: 'Technology procurement by universities and research institutions',
  },
  {
    title: 'Initial Civant Focus',
    value: '€12B',
    numericValue: 12,
    description: 'Education technology in Ireland and France',
  },
];

const maxValue = marketData[0].numericValue;

// Logarithmic scale calculation for honest but readable visualization
const calculateLogWidth = (value) => {
  const minValue = marketData[marketData.length - 1].numericValue;
  const logValue = Math.log10(value);
  const logMin = Math.log10(minValue);
  const logMax = Math.log10(maxValue);
  
  // Map log values to 25%-100% range to ensure visibility
  const normalizedLog = (logValue - logMin) / (logMax - logMin);
  return 25 + (normalizedLog * 75);
};

export default function MarketSizeVisualization() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <div ref={containerRef} className="py-16 max-w-[1000px] mx-auto px-4 sm:px-6">
      <p className="text-xs uppercase tracking-wider text-gray-400 mb-8 text-center">
        Market segmentation overview
      </p>

      <div className="space-y-6">
        {marketData.map((item, index) => {
          const visualWidth = calculateLogWidth(item.numericValue);

          return (
            <div key={index} className="relative">
              {/* Label and Value */}
              <div className="flex items-baseline justify-between mb-2">
                <span className="text-sm text-gray-300">{item.title}</span>
                <span className="text-lg font-semibold text-white">{item.value}</span>
              </div>

              {/* Bar Container */}
              <div className="relative h-12 bg-white/5 rounded-sm overflow-hidden">
                {/* Vertical gridlines for scale integrity */}
                <div className="absolute inset-0 flex">
                  {[...Array(10)].map((_, i) => (
                    <div
                      key={i}
                      className="flex-1 border-r border-white/[0.08] last:border-r-0"
                    />
                  ))}
                </div>

                {/* Animated Bar */}
                <motion.div
                  className="absolute inset-y-0 left-0 cursor-pointer"
                  style={{
                    background: 'linear-gradient(90deg, #00C4C4 0%, #00E5E5 100%)',
                  }}
                  initial={{ width: 0 }}
                  animate={{ width: isInView ? `${visualWidth}%` : 0 }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onTouchStart={() => setHoveredIndex(index)}
                  aria-label={`${item.title}: ${item.value} - ${item.description}`}
                  role="progressbar"
                  aria-valuenow={item.numericValue}
                  aria-valuemin={0}
                  aria-valuemax={maxValue}
                />

                {/* Tooltip */}
                {hoveredIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.15 }}
                    className="absolute z-10 left-4 top-full mt-2 bg-[#0A1628] border border-white/20 rounded px-4 py-3 shadow-xl min-w-[280px] max-w-[320px]"
                    style={{
                      pointerEvents: 'none',
                    }}
                  >
                    <p className="text-white font-semibold mb-1">{item.title}</p>
                    <p className="text-[#00C4C4] text-lg font-bold mb-2">{item.value}</p>
                    <p className="text-gray-400 text-xs leading-relaxed mb-2">
                      {item.description}
                    </p>
                    <p className="text-gray-500 text-xs italic">
                      Source: EU Commission / OECD
                    </p>
                  </motion.div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}