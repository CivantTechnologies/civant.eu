import React from 'react';
import SectionWrapper from '@/components/sections/SectionWrapper';
import HeroSection from '@/components/sections/HeroSection';
import PageHead from '@/components/PageHead';
import { Target, Briefcase, Lightbulb, Shield, Users, CheckCircle2, XCircle } from 'lucide-react';

export default function About() {
  return (
    <>
      <PageHead 
        title="About Civant & Our Mission | Civant"
        description="Civant was created to improve visibility, preparation, and fairness in public procurement through structured data and early insight."
      />
      <HeroSection
        label="ABOUT"
        headline="Who we are and why we exist"
        description="Civant enables organisations to identify relevant opportunities at the right time, even in unfamiliar markets."
        variant="home"
      />

      {/* Mission */}
      <SectionWrapper darker>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 rounded-lg bg-[#00C4C4]/20 flex items-center justify-center flex-shrink-0" role="img" aria-label="Mission icon">
               <Target className="w-6 h-6 text-[#00C4C4]" aria-hidden="true" />
             </div>
            <div>
              <h2 className="text-2xl lg:text-3xl font-semibold text-white mb-4">
                Mission
              </h2>
              <p className="text-gray-300 leading-relaxed text-lg" style={{ lineHeight: '1.7' }}>
                Civant exists to transform traditionally complex public procurement processes into structured, confident, and well-timed decisions for sellers, buyers, and the public sector.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Background */}
      <SectionWrapper>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 rounded-lg bg-[#00C4C4]/20 flex items-center justify-center flex-shrink-0" role="img" aria-label="Company background icon">
               <Briefcase className="w-6 h-6 text-[#00C4C4]" aria-hidden="true" />
             </div>
            <div>
              <h2 className="text-2xl lg:text-3xl font-semibold text-white mb-4">
                Background
              </h2>
              <p className="text-gray-300 leading-relaxed text-lg mb-4">
                Civant Technologies was founded in Ireland by David Manrique, who spent over 15 years working in SaaS and educational technology, supporting public sector buyers and suppliers across global markets.
              </p>
              <p className="text-gray-300 leading-relaxed text-lg mb-4">
                Over the years, David repeatedly saw strong teams lose opportunities not because of poor solutions, but because tenders arrived too late, timelines collided, and decisions were forced under pressure. Technical teams were overwhelmed, budgets were wasted, and account managers were expected to react without the time or structure needed to succeed.
              </p>
              <p className="text-gray-300 leading-relaxed text-lg mb-4">
                While expanding into new markets, David experienced this challenge first-hand. With no clear visibility into who was buying, when contracts were ending, or where effort should be focused, he began manually mapping institutions, incumbents, and renewal cycles using spreadsheets and reminders. That process was time-consuming, imperfect, and entirely manual, but it worked. It became the first real iteration of Civant.
              </p>
              <p className="text-gray-300 leading-relaxed text-lg mb-6">
                That experience revealed a deeper, systemic issue. Public procurement data has existed for years, but it has not been usable, structured, or connected in a way that supports informed planning. Preparation time is unevenly distributed, favouring incumbents and disadvantaging capable organisations that simply lack early visibility.
              </p>

              <blockquote className="border-l-4 border-[#00C4C4] pl-6 py-4 mb-6 bg-white/5 rounded-r-lg">
                <p className="text-gray-200 leading-relaxed text-lg italic">
                  "When preparation replaces reaction, tenders stop being feared and start becoming a viable, repeatable path to growth."
                </p>
                <p className="text-[#00C4C4] text-sm italic mt-2 text-right pr-8">
                  Founder, Civant
                </p>
              </blockquote>

              <a 
                href="https://www.linkedin.com/in/davidmanriquec/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#00C4C4] hover:text-[#00C4C4]/80 transition-colors text-sm"
              >
                View David Manrique on LinkedIn →
              </a>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Advisory Board */}
      <SectionWrapper darker>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 rounded-lg bg-[#00C4C4]/20 flex items-center justify-center flex-shrink-0" role="img" aria-label="Advisory board icon">
               <Users className="w-6 h-6 text-[#00C4C4]" aria-hidden="true" />
             </div>
            <div>
              <h2 className="text-2xl lg:text-3xl font-semibold text-white mb-4">
                Advisory Board
              </h2>
              <p className="text-gray-300 leading-relaxed text-lg mb-4">
                Civant is supported by a small group of trusted advisors who have mentored the founder throughout his career across public procurement, enterprise technology, data, and go-to-market leadership.
              </p>
              <p className="text-gray-300 leading-relaxed text-lg mb-4">
                These advisors act as a sounding board for strategic decisions, product direction, and market alignment, offering perspective grounded in real-world experience across public-sector and regulated environments.
              </p>
              <p className="text-gray-300 leading-relaxed text-lg">
                Their role is advisory in nature, providing guidance, challenge, and feedback as Civant grows, while the company remains independently led and fully founder-owned.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Why This Matters */}
      <SectionWrapper>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 rounded-lg bg-[#00C4C4]/20 flex items-center justify-center flex-shrink-0" role="img" aria-label="Why this matters icon">
               <Lightbulb className="w-6 h-6 text-[#00C4C4]" aria-hidden="true" />
             </div>
            <div>
              <h2 className="text-2xl lg:text-3xl font-semibold text-white mb-4">
                Why this matters
              </h2>
              <p className="text-gray-300 leading-relaxed text-lg mb-4">
                Public procurement is designed to promote fair competition, better outcomes, and responsible use of public funds.
              </p>
              <p className="text-gray-300 leading-relaxed text-lg mb-4">
                When procurement timelines are unclear and preparation is uneven, those goals break down. Capable suppliers are excluded, buyers receive fewer viable responses, and public resources are not used to their full potential.
              </p>
              <p className="text-gray-300 leading-relaxed text-lg mb-4">
                Making procurement timing visible and usable changes that dynamic. It allows suppliers to compete on merit rather than speed, enables buyers to plan proactively, and supports healthier participation across the public sector.
              </p>
              <p className="text-gray-300 leading-relaxed text-lg">
                This is why visibility, preparation, and timing matter. They are key to changing how public tenders are perceived, from complex and reactive processes into intentional, transparent paths to growth for the wider economy.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Commitment to Transparency */}
      <SectionWrapper>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 rounded-lg bg-[#00C4C4]/20 flex items-center justify-center flex-shrink-0" role="img" aria-label="Transparency commitment icon">
               <Shield className="w-6 h-6 text-[#00C4C4]" aria-hidden="true" />
             </div>
            <div>
              <h2 className="text-2xl lg:text-3xl font-semibold text-white mb-6">
                Commitment to transparency
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Card 1: What Civant is */}
                <div className="bg-white/5 border border-[#00C4C4] rounded-lg p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <CheckCircle2 className="w-6 h-6 text-[#00C4C4] flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <h3 className="text-lg font-semibold text-white">What Civant is</h3>
                  </div>
                  <ul className="space-y-3 ml-9">
                    <li className="text-gray-300 leading-relaxed flex items-start gap-2">
                      <span className="mt-1 flex-shrink-0">•</span>
                      <span>Civant brings visibility to public procurement opportunities</span>
                    </li>
                    <li className="text-gray-300 leading-relaxed flex items-start gap-2">
                      <span className="mt-1 flex-shrink-0">•</span>
                      <span>Civant reconciles and normalises data from EU and national procurement sources</span>
                    </li>
                    <li className="text-gray-300 leading-relaxed flex items-start gap-2">
                      <span className="mt-1 flex-shrink-0">•</span>
                      <span>Civant analyses publicly available procurement data</span>
                    </li>
                    <li className="text-gray-300 leading-relaxed flex items-start gap-2">
                      <span className="mt-1 flex-shrink-0">•</span>
                      <span>Civant supports earlier preparation and more intentional planning</span>
                    </li>
                  </ul>
                </div>

                {/* Card 2: What Civant is not */}
                <div className="bg-white/5 border border-gray-500/40 rounded-lg p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <XCircle className="w-6 h-6 text-gray-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <h3 className="text-lg font-semibold text-white">What Civant is not</h3>
                  </div>
                  <ul className="space-y-3 ml-9">
                    <li className="text-gray-300 leading-relaxed flex items-start gap-2">
                      <span className="mt-1 flex-shrink-0">•</span>
                      <span>Civant is not an insider tool or source of non-public information</span>
                    </li>
                    <li className="text-gray-300 leading-relaxed flex items-start gap-2">
                      <span className="mt-1 flex-shrink-0">•</span>
                      <span>Civant is not a tender issuer, influencer, or intermediary</span>
                    </li>
                    <li className="text-gray-300 leading-relaxed flex items-start gap-2">
                      <span className="mt-1 flex-shrink-0">•</span>
                      <span>Civant does not guarantee tender outcomes</span>
                    </li>
                    <li className="text-gray-300 leading-relaxed flex items-start gap-2">
                      <span className="mt-1 flex-shrink-0">•</span>
                      <span>Civant does not replace sales strategy, account management expertise, or commercial judgement</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}