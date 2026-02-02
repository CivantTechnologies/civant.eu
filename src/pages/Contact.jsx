import React, { useState } from 'react';
import SectionWrapper from '@/components/sections/SectionWrapper';
import HeroSection from '@/components/sections/HeroSection';
import PageHead from '@/components/PageHead';
import InteractiveCard, { InteractiveCardTitle, InteractiveCardDescription } from '@/components/ui/InteractiveCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { DollarSign, Briefcase, Handshake, GraduationCap, Loader2, CheckCircle2 } from 'lucide-react';
import { base44 } from '@/api/base44Client';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    reason: null,
    message: ''
  });
  const [consentRequired, setConsentRequired] = useState(false);
  const [consentOptional, setConsentOptional] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactReasons = [
    { value: 'grants', label: 'Grants & Funding' },
    { value: 'investment', label: 'Investment & Finance' },
    { value: 'partnership', label: 'Partnerships' },
    { value: 'research', label: 'Research & Collaboration' }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!consentRequired) return;
    
    setIsSubmitting(true);
    
    try {
      await base44.entities.contact_submissions.create({
        name: formData.name,
        email: formData.email,
        conversation_topic: contactReasons.find(r => r.value === formData.reason)?.label || formData.reason,
        message: formData.message,
        gdpr_consent: consentRequired,
        marketing_opt_in: consentOptional,
        page_source: 'contact'
      });
      
      // Clear form
      setFormData({
        name: '',
        email: '',
        reason: null,
        message: ''
      });
      setConsentRequired(false);
      setConsentOptional(false);
      
      setIsSubmitted(true);
    } catch (error) {
      console.error('Failed to submit form:', error);
      alert('Failed to submit form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleTopicClick = (reasonValue) => {
    setFormData(prev => ({ ...prev, reason: reasonValue }));
    // Scroll to form
    setTimeout(() => {
      const formElement = document.getElementById('contact-form');
      if (formElement) {
        formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  if (isSubmitted) {
    return (
      <>
        <PageHead 
          title="Get in Touch | Civant"
          description="Connect with Civant for grant discussions, pilot partnerships, research collaboration, or early-stage investment conversations."
        />
        <section className="bg-[#0A1628] pt-24 lg:pt-32 pb-16 lg:pb-20 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-16 h-16 bg-[#00C4C4]/20 rounded-full flex items-center justify-center mx-auto mb-6" role="img" aria-label="Message confirmed">
               <CheckCircle2 className="w-8 h-8 text-[#00C4C4]" aria-hidden="true" />
             </div>
            <h1 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
              Message received
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Thanks for reaching out. We will review your message and respond as soon as possible.
            </p>
          </div>
        </div>
      </section>
      </>
    );
  }

  return (
    <>
      <PageHead 
        title="Contact Civant | Procurement Intelligence"
        description="Get in touch with Civant to discuss pilots, research, or funding related to public-sector procurement intelligence."
      />
      <HeroSection
        label="GET IN TOUCH"
        headline="Let's talk"
        description="We welcome conversations about grants, investment, partnerships, and research. Tell us what you are exploring, and we will point you in the right direction."
        variant="home"
      />

      {/* Contact Form */}
      <SectionWrapper darker>
        <div className="max-w-2xl mx-auto" id="contact-form">
          <h2 className="text-3xl font-semibold text-white mb-8 text-center">
            How can we help?
          </h2>

          <div className="bg-white/5 border border-[#00C4C4]/75 rounded-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-gray-200">
                Name <span className="text-[#00C4C4]">*</span>
              </Label>
              <Input
                id="name"
                required
                value={formData.name}
                onChange={(e) => handleChange('name', e.target.value)}
                className="bg-white/5 border-white/30 text-white placeholder:text-gray-500 focus:border-[#00C4C4] focus:ring-[#00C4C4]/20"
                placeholder="Your name"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-200">
                Email <span className="text-[#00C4C4]">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                className="bg-white/5 border-white/30 text-white placeholder:text-gray-500 focus:border-[#00C4C4] focus:ring-[#00C4C4]/20"
                placeholder="email@example.com"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="reason" className="text-gray-200">
                Conversation topic <span className="text-[#00C4C4]">*</span>
              </Label>
              <Select 
                value={formData.reason || ''} 
                onValueChange={(value) => handleChange('reason', value)}
                required
              >
                <SelectTrigger className="bg-white/5 border-white/30 text-white focus:border-[#00C4C4] focus:ring-[#00C4C4]/20">
                  <SelectValue placeholder="Select one" />
                </SelectTrigger>
                <SelectContent className="bg-[#0A1628] border-white/30">
                  {contactReasons.map((reason) => (
                    <SelectItem 
                      key={reason.value} 
                      value={reason.value}
                      className="text-gray-300 focus:bg-white/10 focus:text-white"
                    >
                      {reason.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-gray-200">
                Message <span className="text-[#00C4C4]">*</span>
              </Label>
              <Textarea
                id="message"
                required
                rows={6}
                value={formData.message}
                onChange={(e) => handleChange('message', e.target.value)}
                className="bg-white/5 border-white/30 text-white placeholder:text-gray-500 focus:border-[#00C4C4] focus:ring-[#00C4C4]/20 resize-none"
                placeholder="Tell us what you'd like to discuss"
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting || !consentRequired}
              className="w-full bg-[#00C4C4] hover:bg-[#3D8585] text-white font-medium py-3 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Sending...
                </>
              ) : (
                'SEND'
              )}
            </Button>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <Checkbox 
                  id="consent-required"
                  checked={consentRequired}
                  onCheckedChange={setConsentRequired}
                  required
                  className="mt-1 border-white/30 data-[state=checked]:bg-[#00C4C4] data-[state=checked]:border-[#00C4C4]"
                />
                <Label htmlFor="consent-required" className="text-xs font-normal text-gray-400 leading-snug cursor-pointer">
                  I consent to Civant storing and processing my contact details and message for the purpose of responding to this enquiry. <span className="text-[#00C4C4]">*</span>
                </Label>
              </div>

              <div className="flex items-start gap-3">
                <Checkbox 
                  id="consent-optional"
                  checked={consentOptional}
                  onCheckedChange={setConsentOptional}
                  className="mt-1 border-white/30 data-[state=checked]:bg-[#00C4C4] data-[state=checked]:border-[#00C4C4]"
                />
                <Label htmlFor="consent-optional" className="text-xs font-normal text-gray-500 leading-snug cursor-pointer">
                  I would like to receive occasional updates and insights from Civant. (Optional)
                </Label>
              </div>
            </div>

            <p className="text-gray-500/70 text-[11px] leading-snug italic mt-4">
              We typically respond within two business days. We only use your details to respond to your enquiry. You can unsubscribe from updates at any time.
            </p>
          </form>
          </div>
        </div>
      </SectionWrapper>

      {/* Contact Categories */}
      <SectionWrapper>
        <div className="max-w-4xl mx-auto text-center mb-8">
          <h3 className="text-gray-400 text-sm font-medium uppercase tracking-wider">
            Common reasons people reach out
          </h3>
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <InteractiveCard onClick={() => handleTopicClick('grants')}>
            <div className="w-10 h-10 bg-[#00C4C4]/20 rounded-lg flex items-center justify-center mb-4" role="img" aria-label="Grants and funding icon">
              <DollarSign className="w-5 h-5 text-[#00C4C4]" aria-hidden="true" />
            </div>
            <InteractiveCardTitle className="mb-2">Grants & Funding</InteractiveCardTitle>
            <InteractiveCardDescription>
              EU and national grant programs, innovation funding, ecosystem support
            </InteractiveCardDescription>
          </InteractiveCard>

          <InteractiveCard onClick={() => handleTopicClick('investment')}>
            <div className="w-10 h-10 bg-[#00C4C4]/20 rounded-lg flex items-center justify-center mb-4" role="img" aria-label="Investment and finance icon">
              <Briefcase className="w-5 h-5 text-[#00C4C4]" aria-hidden="true" />
            </div>
            <InteractiveCardTitle className="mb-2">Investment & Finance</InteractiveCardTitle>
            <InteractiveCardDescription>
              Angel, seed, and early-stage investment conversations
            </InteractiveCardDescription>
          </InteractiveCard>

          <InteractiveCard onClick={() => handleTopicClick('partnership')}>
            <div className="w-10 h-10 bg-[#00C4C4]/20 rounded-lg flex items-center justify-center mb-4" role="img" aria-label="Partnerships icon">
              <Handshake className="w-5 h-5 text-[#00C4C4]" aria-hidden="true" />
            </div>
            <InteractiveCardTitle className="mb-2">Partnerships</InteractiveCardTitle>
            <InteractiveCardDescription>
              Commercial partnerships, pilot opportunities, strategic collaboration
            </InteractiveCardDescription>
          </InteractiveCard>

          <InteractiveCard onClick={() => handleTopicClick('research')}>
            <div className="w-10 h-10 bg-[#00C4C4]/20 rounded-lg flex items-center justify-center mb-4" role="img" aria-label="Research and collaboration icon">
              <GraduationCap className="w-5 h-5 text-[#00C4C4]" aria-hidden="true" />
            </div>
            <InteractiveCardTitle className="mb-2">Research & Collaboration</InteractiveCardTitle>
            <InteractiveCardDescription>
              Academic partnerships, procurement research, data science collaboration
            </InteractiveCardDescription>
          </InteractiveCard>
        </div>
      </SectionWrapper>
    </>
  );
}