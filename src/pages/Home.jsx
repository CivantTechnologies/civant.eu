import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import SectionWrapper from '@/components/sections/SectionWrapper';
import HeroSection from '@/components/sections/HeroSection';
import PageHead from '@/components/PageHead';
import InteractiveCard, { InteractiveCardTitle, InteractiveCardDescription } from '@/components/ui/InteractiveCard';
import { Database, TrendingUp, Shield, Globe } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export default function Home() {
  const [expandedSection, setExpandedSection] = useState('');

  useEffect(() => {
    // Check if URL has #executive-summary anchor
    if (window.location.hash === '#executive-summary') {
      setExpandedSection('executive-summary');
      // Scroll to the section
      setTimeout(() => {
        const element = document.getElementById('executive-summary');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, []);

  return (
    <>
      <PageHead 
        title="Public Procurement Intelligence & Early Signals | Civant"
        description="Civant helps organisations identify public-sector procurement opportunities early using data, signals, and funding cycles across Europe."
      />
      <section className="relative bg-[#0A1628] min-h-screen flex items-center overflow-hidden">
        {/* Background micro logo - absolute center, atmospheric accent */}
        <div 
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1550px] h-[1550px] lg:w-[2000px] lg:h-[2000px] opacity-[0.04] pointer-events-none"
          aria-hidden="true"
        >
          <img 
            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/697a52afa63291e0147b78b4/0733be937_Civant-Micrologo.jpg"
            alt=""
            className="w-full h-full object-contain"
            aria-hidden="true"
          />
        </div>

        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-8 pb-16 -mt-0 md:-mt-[15vh]">
          {/* Hero text content */}
          <div className="max-w-5xl">
            {/* Section eyebrow label - canonical token */}
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#00C4C4] mb-5">
              PROCUREMENT INTELLIGENCE
            </p>
            
            {/* Hero title - canonical token, max 2 lines */}
            <h1 className="text-4xl lg:text-5xl font-semibold text-white leading-[1.2] mb-6 max-w-4xl">
              Anticipate public-sector tenders<br />
              before they are published
            </h1>
            
            {/* Supporting description - canonical token */}
            <p className="text-lg lg:text-xl text-gray-300 leading-relaxed max-w-3xl">
              Civant identifies early public-sector procurement signals and cycles, enabling organisations to engage, prepare, and allocate resources before tender publication restricts interaction.
            </p>
          </div>

          {/* Desktop CTA - Fixed bottom-right positioning */}
          <div className="hidden lg:block absolute bottom-4 right-8">
            <a 
              href="#executive-summary"
              className="inline-flex items-center px-6 py-3 border border-white/20 text-gray-300 text-sm font-medium rounded hover:bg-[#00C4C4]/10 hover:text-[#00C4C4] hover:border-[#00C4C4]/40 transition-all duration-200 whitespace-nowrap"
            >
              View Executive Summary
            </a>
          </div>

          {/* Mobile CTA */}
          <div className="lg:hidden mt-16 max-w-5xl">
            <a 
              href="#executive-summary"
              className="inline-flex items-center px-6 py-3 border border-white/20 text-gray-300 text-sm font-medium rounded hover:bg-[#00C4C4]/10 hover:text-[#00C4C4] hover:border-[#00C4C4]/40 transition-all duration-200"
            >
              View Executive Summary
            </a>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <SectionWrapper darker>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl lg:text-3xl font-semibold text-white leading-relaxed mb-8">
            From Reactive Tender Hunting to Proactive Procurement Intelligence
          </h2>
          
          <p className="text-gray-300 leading-relaxed text-lg lg:text-xl">
            Public-sector procurement rules limit supplier engagement once tenders are published, often favouring incumbents and compressing preparation timelines. This frequently results in rushed bids or late 'no-go' decisions, reducing effective competition and shifting outcomes toward lowest-price selection rather than best-fit solutions. Civant identifies market patterns, early procurement signals, and funding cycles across European transparency and national data sources, enabling organisations to engage, prepare, and allocate resources before formal tender publication restricts interaction.
          </p>
        </div>
      </SectionWrapper>

      {/* Executive Summary */}
      <SectionWrapper id="executive-summary">
        <div className="max-w-4xl mx-auto">
          <Accordion 
            type="single" 
            collapsible 
            value={expandedSection}
            onValueChange={setExpandedSection}
            className="w-full"
          >
            <AccordionItem 
              value="executive-summary" 
              className="border border-white/10 rounded-lg bg-white/5 overflow-hidden"
            >
              <AccordionTrigger className="px-6 py-5 hover:no-underline hover:bg-white/5 transition-colors text-left">
                <h2 className="text-2xl lg:text-3xl font-semibold text-white">
                  Executive Summary
                </h2>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 bg-white/[0.03]">
                <div className="space-y-4 text-gray-300 leading-relaxed text-base lg:text-lg pt-2">
                  <p>
                    Civant Technologies is an Irish-founded SaaS company developing predictive intelligence solutions for public-sector procurement markets. The platform aggregates historical tender data, identifies cyclical purchasing patterns, and applies machine learning to forecast when specific agencies are likely to retender existing contracts.
                  </p>
                  
                  <p>
                    Public procurement across the European Union exceeds €2 trillion annually, representing one of the largest structured purchasing ecosystems globally. However, current discovery mechanisms force suppliers to react after tender publication, creating information asymmetry that favours incumbents and compresses preparation timelines.
                  </p>
                  
                  <p>
                    Civant addresses this market inefficiency by enabling proactive engagement. The platform delivers confidence-scored predictions before tenders go live, allowing suppliers to position themselves weeks or months ahead of formal publication. This shifts procurement engagement from reactive to strategic, replacing late-stage scrambling with structured market planning.
                  </p>
                  
                  <p>
                    Initial market validation has confirmed demand from both technology suppliers and procurement advisory firms. Early engagements demonstrate willingness to pay for predictive intelligence that reduces sales cycle friction and improves resource allocation efficiency.
                  </p>
                  
                  <p>
                    Civant initially focuses on education and public-sector technology procurement in Ireland and France, targeting categories with predictable renewal cycles and structured classification codes. Once validated, this analytical framework can be extended across additional jurisdictions and verticals without linear increases in operational complexity.
                  </p>
                  
                  <p>
                    The company is pursuing grant funding, early-stage investment, and pilot partnerships to accelerate platform development, validate forecasting accuracy, and establish commercial traction within controlled market segments.
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10">
                  <Link 
                    to={createPageUrl('Contact')}
                    className="inline-flex items-center px-5 py-2.5 border border-[#00C4C4]/60 text-[#00C4C4] text-sm font-medium rounded hover:bg-[#00C4C4]/10 transition-colors duration-200"
                  >
                    Discuss Pilot or Funding
                  </Link>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </SectionWrapper>

      {/* Key Capabilities */}
      <SectionWrapper>
        <h2 className="text-2xl lg:text-3xl font-semibold text-white mb-12">
          Core functionality
        </h2>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          <div className="bg-white/5 border border-white/10 rounded-lg p-8 lg:p-10">
            <div className="w-12 h-12 flex items-center justify-center mb-6" role="img" aria-label="Unified tender data hub icon">
               <Database className="w-8 h-8 text-[#00C4C4]" strokeWidth={1.5} aria-hidden="true" />
             </div>
             <h3 className="text-xl font-semibold text-white mb-4">
               Unified Tender Data Hub
             </h3>
            <p className="text-gray-400 leading-relaxed text-base">
              Aggregate and normalize procurement data across EU portals into a single source of truth.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-lg p-8 lg:p-10">
            <div className="w-12 h-12 flex items-center justify-center mb-6" role="img" aria-label="Predictive renewal signals icon">
               <TrendingUp className="w-8 h-8 text-[#00C4C4]" strokeWidth={1.5} aria-hidden="true" />
             </div>
             <h3 className="text-xl font-semibold text-white mb-4">
               Predictive Renewal Signals
             </h3>
            <p className="text-gray-400 leading-relaxed text-base">
              Detect contract expirations, budget rhythms, and cyclical procurement behavior.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-lg p-8 lg:p-10">
            <div className="w-12 h-12 flex items-center justify-center mb-6" role="img" aria-label="AI confidence scoring icon">
               <Shield className="w-8 h-8 text-[#00C4C4]" strokeWidth={1.5} aria-hidden="true" />
             </div>
             <h3 className="text-xl font-semibold text-white mb-4">
               AI Confidence Scoring
             </h3>
            <p className="text-gray-400 leading-relaxed text-base">
              Machine-learning models rank opportunities by probability and strategic relevance.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-lg p-8 lg:p-10">
            <div className="w-12 h-12 flex items-center justify-center mb-6" role="img" aria-label="Pan-European coverage icon">
               <Globe className="w-8 h-8 text-[#00C4C4]" strokeWidth={1.5} aria-hidden="true" />
             </div>
             <h3 className="text-xl font-semibold text-white mb-4">
               Pan-European Coverage
             </h3>
            <p className="text-gray-400 leading-relaxed text-base">
              Starting with Ireland and France, expanding progressively across EU member states and priority verticals.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Navigation Cards */}
      <SectionWrapper darker>
        <div className="grid md:grid-cols-3 gap-6">
          <InteractiveCard as={Link} to={createPageUrl('Challenge')}>
            <p className="text-sm font-medium uppercase tracking-wider text-[#00C4C4] mb-2">
              Understand
            </p>
            <InteractiveCardTitle className="text-lg mb-2">
              The Challenge
            </InteractiveCardTitle>
            <InteractiveCardDescription>
              Why current procurement discovery fails vendors and public buyers alike.
            </InteractiveCardDescription>
          </InteractiveCard>

          <InteractiveCard as={Link} to={createPageUrl('Proof')}>
            <p className="text-sm font-medium uppercase tracking-wider text-[#00C4C4] mb-2">
              Evidence
            </p>
            <InteractiveCardTitle className="text-lg mb-2">
              Proof
            </InteractiveCardTitle>
            <InteractiveCardDescription>
              Validation, traction, and technical progress.
            </InteractiveCardDescription>
          </InteractiveCard>

          <InteractiveCard as={Link} to={createPageUrl('Contact')}>
            <p className="text-sm font-medium uppercase tracking-wider text-[#00C4C4] mb-2">
              Connect
            </p>
            <InteractiveCardTitle className="text-lg mb-2">
              Get in Touch
            </InteractiveCardTitle>
            <InteractiveCardDescription>
              For grant discussions, investment conversations, or strategic partnerships.
            </InteractiveCardDescription>
          </InteractiveCard>
        </div>
      </SectionWrapper>
    </>
  );
}