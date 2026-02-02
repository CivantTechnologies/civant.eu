import { createClientFromRequest } from 'npm:@base44/sdk@0.8.6';

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    
    const { url } = await base44.integrations.Core.GenerateImage({
      prompt: `Create a professional Open Graph social preview image (1200x630px) for Civant Technologies:
- Background: Dark navy color (#0A1628)
- Center: Civant micro logo (circular, with cyan accents)
- Style: Minimal, clean, professional
- No text, no paragraphs, no UI elements, no gradients
- Logo should be prominent and centered
- Use cyan (#00C4C4) accent lighting around the logo
- High resolution, suitable for social media previews`,
      existing_image_urls: ['https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/697a52afa63291e0147b78b4/0733be937_Civant-Micrologo.jpg']
    });

    return Response.json({ image_url: url });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
});