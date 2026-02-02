import React, { useState } from 'react';
import SectionWrapper from '@/components/sections/SectionWrapper';
import HeroSection from '@/components/sections/HeroSection';
import PageHead from '@/components/PageHead';
import { AlertCircle, Clock, Users, TrendingDown, Eye, Grid3x3, Shield } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export default function Challenge() {
  const [expandedSection, setExpandedSection] = useState('');

  const flowSteps = [
    { text: 'Transparency exists — public procurement data is legally public', icon: Eye },
    { text: 'Data is fragmented and unusable — spread across portals, formats, and languages', icon: Grid3x3 },
    { text: 'Suppliers discover too late — engagement is restricted once tenders are published', icon: Clock },
    { text: 'Incumbents gain structural advantage — early access and historical knowledge', icon: Shield },
    { text: 'Competition and outcomes suffer — fewer bids and lowest-price bias', icon: TrendingDown }
  ];

  const problems = [
    {
      icon: Clock,
      title: 'Structural Inefficiency',
      points: [
        'Vendors discover tenders only after publication, when requirements are finalized and specifications are locked.',
        'By that point, months of internal planning have already happened without supplier input.',
        'This reactive model creates a systematic timing disadvantage that limits competitive positioning.'
      ]
    },
    {
      icon: Users,
      title: 'Incumbent Advantage',
      points: [
        'Existing suppliers know when their contracts expire. They participate in early consultations and understand agency priorities.',
        'New entrants lack this visibility, making market entry structurally harder regardless of product quality or pricing.'
      ]
    },
    {
      icon: AlertCircle,
      title: 'Renewal Opacity',
      points: [
        'Contract registers are incomplete, outdated, or scattered across jurisdictions.',
        'Vendors cannot systematically track when public agencies will retender existing services.',
        'This lack of accessible renewal timelines prevents strategic resource allocation and market planning.'
      ]
    },
    {
      icon: TrendingDown,
      title: 'Market Consequences',
      points: [
        'Public buyers receive fewer competitive bids.',
        'SMEs cannot compete on equal terms with incumbents.',
        'Procurement teams waste time fielding reactive vendor inquiries.',
        'The entire market operates less efficiently—not because of capability gaps, but because of information gaps.'
      ]
    }
  ];

  return (
    <>
      <PageHead 
        title="The Procurement Discovery Problem | Civant"
        description="Why public-sector tenders are discovered too late, how timing breaks competition, and where current procurement visibility fails."
      />
      <HeroSection
        label="THE CHALLENGE"
        headline="The problem Civant is built to solve"
        description="Why public-sector procurement discovery structurally favours incumbents and limits fair competition."
        variant="home"
      />

      {/* Flow Diagram */}
      <SectionWrapper darker>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl lg:text-3xl font-semibold text-white mb-8">
            How public procurement discovery breaks down
          </h2>
          <div className="relative">
            {/* Vertical connector line */}
            <div 
              className="absolute left-5 top-5 w-px bg-white/10" 
              style={{ height: 'calc(100% - 120px)' }}
              aria-hidden="true"
            />
            
            <div className="space-y-4 relative">
              {flowSteps.map((step, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center relative z-10" aria-hidden="true">
                    <step.icon className="w-5 h-5 text-[#00C4C4]" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1 bg-white/5 border border-white/10 rounded-lg px-6 py-4">
                    <p className="text-gray-300 leading-relaxed text-base lg:text-lg">
                      {step.text}
                    </p>
                  </div>
                </div>
              ))}
              
              {/* Verdict block */}
              <div className="flex items-start gap-4 mt-10 pt-6 border-t border-white/5">
                <div className="flex-shrink-0 w-10" aria-hidden="true"></div>
                <div className="flex-1 border-l-2 border-[#00C4C4]/40 bg-white/[0.02] rounded-lg px-6 py-5">
                  <p className="text-[#00C4C4] text-base lg:text-lg italic leading-relaxed">
                    The issue is not lack of transparency — it is lack of usable intelligence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Detailed Breakdown Accordion */}
      <SectionWrapper>
        <div className="max-w-4xl mx-auto">
          <Accordion 
            type="single" 
            collapsible 
            value={expandedSection}
            onValueChange={setExpandedSection}
            className="w-full"
          >
            <AccordionItem 
              value="detailed-breakdown" 
              className="border border-white/10 rounded-lg bg-white/5 overflow-hidden"
            >
              <AccordionTrigger className="px-6 py-5 hover:no-underline hover:bg-white/5 transition-colors text-left">
                <h2 className="text-2xl lg:text-3xl font-semibold text-white">
                  Detailed breakdown of the problem
                </h2>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 bg-white/[0.03]">
                <div className="space-y-8 pt-4">
                  {problems.map((problem, index) => (
                    <div key={index} className="space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-[#00C4C4]/20 rounded-lg flex items-center justify-center" role="img" aria-label={`${problem.title} icon`}>
                          <problem.icon className="w-6 h-6 text-[#00C4C4]" aria-hidden="true" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-white mb-3">
                            {problem.title}
                          </h3>
                          <ul className="space-y-3">
                            {problem.points.map((point, idx) => (
                              <li key={idx} className="text-gray-400 leading-relaxed text-base flex items-start gap-2">
                                <span className="text-[#00C4C4] mt-1.5 flex-shrink-0">•</span>
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      {index < problems.length - 1 && (
                        <div className="border-b border-white/10 mt-6" />
                      )}
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </SectionWrapper>

    </>
  );
}