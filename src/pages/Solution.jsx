import React from 'react';
import SectionWrapper from '@/components/sections/SectionWrapper';
import HeroSection from '@/components/sections/HeroSection';
import PageHead from '@/components/PageHead';
import MarketSizeVisualization from '@/components/MarketSizeVisualization';

export default function Solution() {
  return (
    <>
      <PageHead 
        title="Tender Forecasting & Procurement Signals | Civant"
        description="Civant analyses public data, budgets, and market signals to help organisations anticipate procurement activity before tenders are published."
      />
      <HeroSection
        label="SOLUTION"
        headline="From public data to actionable procurement intelligence"
        description="Civant transforms fragmented public-sector data into structured, confidence-scored forecasts that allow suppliers to act before tenders are published."
        variant="home"
      />

      {/* How Civant Solves the Problem */}
      <SectionWrapper darker>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl lg:text-3xl font-semibold text-white mb-6">
            How Civant solves the problem
          </h2>
          <p className="text-gray-300 leading-relaxed text-lg">
            Civant does not rely on privileged access or insider information. Instead, it aggregates, structures, translates, normalises, and analyses legally public procurement data alongside budgetary signals, market trends, and funding allocations. This layered intelligence enables earlier visibility, more accurate prioritisation, and better-timed engagement, without compromising compliance or fair competition.
          </p>
        </div>
      </SectionWrapper>

      {/* How It Works */}
      <SectionWrapper>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl lg:text-3xl font-semibold text-white mb-12">
            How it works
          </h2>

          <div className="space-y-10">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#00C4C4]/20 flex items-center justify-center text-[#00C4C4] font-semibold" aria-hidden="true">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Data aggregation
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Systematic collection and normalization of tender records from national 
                  and EU-wide procurement portals. Multi-year datasets provide the foundation 
                  for pattern recognition.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#00C4C4]/20 flex items-center justify-center text-[#00C4C4] font-semibold" aria-hidden="true">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Pattern detection
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Algorithmic analysis identifies institutions with recurring procurement 
                  cycles, contract renewal windows, and budget-aligned purchasing rhythms. 
                  Historical trends reveal predictable behavior.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#00C4C4]/20 flex items-center justify-center text-[#00C4C4] font-semibold" aria-hidden="true">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  AI forecasting
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Machine-learning models forecast when specific agencies will likely publish 
                  tenders in particular categories. Forecasts account for contract durations, 
                  renewal signals, and institutional purchasing patterns.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#00C4C4]/20 flex items-center justify-center text-[#00C4C4] font-semibold" aria-hidden="true">
                4
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Confidence scoring
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Each forecast includes probabilistic confidence indicators based on data 
                  quality, pattern consistency, and historical accuracy. This enables prioritisation 
                  and intelligent resource allocation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Market Opportunity */}
      <SectionWrapper>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl lg:text-3xl font-semibold text-white mb-6">
            Market opportunity
          </h2>
          <p className="text-gray-300 leading-relaxed text-lg mb-6">
            Public procurement across the European Union exceeds €2 trillion annually. 
            This represents one of the largest structured purchasing ecosystems globally, 
            with predictable renewal cycles and standardized frameworks.
          </p>
          
          <MarketSizeVisualization />
          
          <h3 className="text-xl font-semibold text-white mb-4 mt-8">
            Initial vertical focus (Ireland and France)
          </h3>
          <p className="text-gray-300 leading-relaxed text-lg mb-6">
            Civant initially focuses on education and public-sector technology procurement in 
            Ireland and France, targeting categories including Software-as-a-Service platforms, 
            Learning Management Systems, Customer Relationship Management, Unified Communications 
            infrastructure, Virtual and Augmented Reality educational tools, Enterprise Resource 
            Planning systems, and IT hardware services.
          </p>
          <p className="text-gray-300 leading-relaxed text-lg mb-6">
            These categories are characterized by predictable renewal cycles, multi-year contracts, 
            and structured classification codes, conditions particularly suited for early 
            forecast-model validation.
          </p>

          <h3 className="text-xl font-semibold text-white mb-4 mt-8">
            Scalable expansion logic
          </h3>
          <p className="text-gray-300 leading-relaxed text-lg">
            By refining forecast accuracy within a controlled subset of markets, Civant 
            establishes a repeatable analytical framework. Once validated, this framework 
            can be extended across additional jurisdictions and verticals without linear 
            increases in operational complexity.
          </p>
        </div>
      </SectionWrapper>
    </>
  );
}