import React from 'react';
import SectionWrapper from '@/components/sections/SectionWrapper';
import HeroSection from '@/components/sections/HeroSection';
import PageHead from '@/components/PageHead';
import { CheckCircle2, MessageSquare, TrendingUp, Code, Calendar } from 'lucide-react';

export default function Proof() {
  return (
    <>
      <PageHead 
        title="Procurement Data Analysis & Evidence | Civant"
        description="How Civant structures, normalises, and analyses public procurement data to generate reliable, confidence-scored opportunity insights."
      />
      <HeroSection
        label="PROOF"
        headline="Validation, traction, and technical progress"
        description="Early commercial signals, technical milestones, and forward timeline demonstrating technical feasibility, market demand, and execution capability."
        variant="home"
      />

      {/* Early Validation */}
      <SectionWrapper darker>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 rounded-lg bg-[#00C4C4]/20 flex items-center justify-center flex-shrink-0" role="img" aria-label="Early validation icon">
               <MessageSquare className="w-6 h-6 text-[#00C4C4]" aria-hidden="true" />
             </div>
            <div>
              <h2 className="text-2xl lg:text-3xl font-semibold text-white mb-4">
                Early validation
              </h2>
              <ul className="space-y-3">
                 <li className="text-gray-300 leading-relaxed text-lg flex items-start gap-2">
                   <span className="text-[#00C4C4] mt-1 flex-shrink-0">•</span>
                   <span>Structured discovery conversations with procurement professionals, technology suppliers, and institutional buyers in Ireland and France</span>
                 </li>
                 <li className="text-gray-300 leading-relaxed text-lg flex items-start gap-2">
                   <span className="text-[#00C4C4] mt-1 flex-shrink-0">•</span>
                   <span>Validated core value proposition through partner conversations focused on timing disadvantage and renewal visibility</span>
                 </li>
                 <li className="text-gray-300 leading-relaxed text-lg flex items-start gap-2">
                   <span className="text-[#00C4C4] mt-1 flex-shrink-0">•</span>
                   <span>Confirmed market demand for procurement intelligence reducing vendor timing disadvantage</span>
                 </li>
                 <li className="text-gray-300 leading-relaxed text-lg flex items-start gap-2">
                   <span className="text-[#00C4C4] mt-1 flex-shrink-0">•</span>
                   <span>Expressed pilot interest from enterprise technology suppliers in education and public-sector markets</span>
                 </li>
               </ul>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Commercial Signals */}
      <SectionWrapper>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 rounded-lg bg-[#00C4C4]/20 flex items-center justify-center flex-shrink-0" role="img" aria-label="Commercial signals icon">
               <TrendingUp className="w-6 h-6 text-[#00C4C4]" aria-hidden="true" />
             </div>
            <div>
              <h2 className="text-2xl lg:text-3xl font-semibold text-white mb-4">
                Commercial signals
              </h2>
              <p className="text-gray-400 leading-relaxed text-base mb-5">
                Validation focused on willingness-to-pay and adoption intent rather than near-term revenue generation.
              </p>
              <ul className="space-y-3">
                 <li className="text-gray-300 leading-relaxed text-lg flex items-start gap-2">
                   <span className="text-[#00C4C4] mt-1 flex-shrink-0">•</span>
                   <span>Market feedback shows willingness to pay for early-stage tender intelligence</span>
                 </li>
                 <li className="text-gray-300 leading-relaxed text-lg flex items-start gap-2">
                   <span className="text-[#00C4C4] mt-1 flex-shrink-0">•</span>
                   <span>Particularly strong demand from SME suppliers competing against incumbents</span>
                 </li>
                 <li className="text-gray-300 leading-relaxed text-lg flex items-start gap-2">
                   <span className="text-[#00C4C4] mt-1 flex-shrink-0">•</span>
                   <span>Refined product features through user feedback loops</span>
                 </li>
                 <li className="text-gray-300 leading-relaxed text-lg flex items-start gap-2">
                   <span className="text-[#00C4C4] mt-1 flex-shrink-0">•</span>
                   <span>Validated subscription-based pricing models</span>
                 </li>
               </ul>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Technical Progress */}
      <SectionWrapper darker>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 rounded-lg bg-[#00C4C4]/20 flex items-center justify-center flex-shrink-0" role="img" aria-label="Technical progress icon">
               <Code className="w-6 h-6 text-[#00C4C4]" aria-hidden="true" />
             </div>
            <div>
              <h2 className="text-2xl lg:text-3xl font-semibold text-white mb-4">
                Technical progress
              </h2>
              <p className="text-gray-300 leading-relaxed text-lg mb-6">
                Core technical milestones completed to date:
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00C4C4] flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="text-white font-medium mb-1">Data aggregation infrastructure</p>
                    <p className="text-gray-400 text-sm">
                      Automated, repeatable pipelines collect and normalize tender records from Irish and 
                      French procurement portals.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00C4C4] flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="text-white font-medium mb-1">Pattern recognition algorithms</p>
                    <p className="text-gray-400 text-sm">
                      Initial models identify cyclical procurement behavior and renewal windows 
                      in education technology categories.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00C4C4] flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="text-white font-medium mb-1">Prototype platform</p>
                    <p className="text-gray-400 text-sm">
                      Functional prototype demonstrates prediction generation, confidence scoring, 
                      and user notification workflows.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Roadmap Timeline */}
      <SectionWrapper>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start gap-4 mb-8">
            <div className="w-12 h-12 rounded-lg bg-[#00C4C4]/20 flex items-center justify-center flex-shrink-0" role="img" aria-label="Roadmap timeline icon">
               <Calendar className="w-6 h-6 text-[#00C4C4]" aria-hidden="true" />
             </div>
            <div>
              <h2 className="text-2xl lg:text-3xl font-semibold text-white mb-4">
                Roadmap timeline
              </h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                Next 12–24 months of technical and commercial development.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="border-l-2 border-[#00C4C4]/30 pl-6 pb-8">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 rounded-full bg-[#00C4C4] -ml-[1.6rem]" />
                <div>
                  <p className="text-sm font-medium text-[#00C4C4] uppercase tracking-wider">
                    Q1–Q2 2026
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Grant-accelerated phase
                  </p>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Platform refinement and pilot launch
              </h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-[#00C4C4] mt-1">•</span>
                  <span>Expand data coverage across Irish and French education procurement</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00C4C4] mt-1">•</span>
                  <span>Launch pilot program with 3–5 enterprise technology suppliers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00C4C4] mt-1">•</span>
                  <span>Refine prediction accuracy through feedback integration</span>
                </li>
              </ul>
            </div>

            <div className="border-l-2 border-[#00C4C4]/30 pl-6 pb-8">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 rounded-full bg-[#00C4C4]/60 -ml-[1.6rem]" />
                <p className="text-sm font-medium text-gray-400 uppercase tracking-wider">
                  Q3–Q4 2026
                </p>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Commercial validation and product iteration
              </h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-[#00C4C4] mt-1">•</span>
                  <span>Convert pilot participants to paying subscribers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00C4C4] mt-1">•</span>
                  <span>Extend coverage to public-sector IT infrastructure and SaaS categories</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00C4C4] mt-1">•</span>
                  <span>Build self-service subscription and onboarding flows</span>
                </li>
              </ul>
            </div>

            <div className="border-l-2 border-[#00C4C4]/30 pl-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 rounded-full bg-[#00C4C4]/40 -ml-[1.6rem]" />
                <p className="text-sm font-medium text-gray-400 uppercase tracking-wider">
                  2027
                </p>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Market expansion
              </h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-[#00C4C4] mt-1">•</span>
                  <span>Geographic expansion to additional EU member states</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00C4C4] mt-1">•</span>
                  <span>Vertical expansion into adjacent public-sector procurement categories</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00C4C4] mt-1">•</span>
                  <span>Scale customer acquisition and subscription growth</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Note */}
      <SectionWrapper darker>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/5 border border-white/10 rounded-lg p-6">
            <p className="text-gray-400 text-sm leading-relaxed">
              Timeline milestones are subject to adjustment based on pilot outcomes, 
              funding availability, and market conditions. Civant prioritizes technical 
              validation and commercial proof points before scaling operations.
            </p>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}