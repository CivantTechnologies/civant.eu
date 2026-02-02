import { createClientFromRequest } from 'npm:@base44/sdk@0.8.6';

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);

    const { url } = await base44.integrations.Core.GenerateImage({
      prompt: `Create a professional Open Graph preview image (1200x630px) for a B2B SaaS company called Civant Technologies. 
      
Design specifications:
- Background: Dark navy blue (#0A1628)
- Center decoration: Very subtle concentric circular rings/radar pattern in cyan (#00C4C4) with 5-8% opacity, centered in the image
- Logo/Text: Place "Civant" text in white at the top-left area, professional sans-serif bold font, about 60-80px size
- Headline: Below the logo, display "Predict Public-Sector Tenders Before They Go Live." in white, bold, clean sans-serif, approximately 48px, center-aligned to main content area
- Style: Minimal, corporate, professional. No gradients, no paragraphs, no extra UI elements, no decorative badges or borders
- Format: 1200x630px, optimized for social media (LinkedIn, Twitter, WhatsApp, Slack)
- Overall aesthetic: Premium, clean, B2B focused`
    });

    return Response.json({ 
      success: true, 
      imageUrl: url 
    });
  } catch (error) {
    return Response.json({ 
      error: error.message 
    }, { status: 500 });
  }
});