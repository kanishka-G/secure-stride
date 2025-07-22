import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  phone: string;
  challenges: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const formData: ContactFormData = await req.json();
    
    console.log("Contact form submission received:", formData);

    const currentDate = new Date().toLocaleString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      timeZoneName: 'short'
    });

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb;">
        <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          <h1 style="color: #1f2937; margin-bottom: 20px; border-bottom: 3px solid #3b82f6; padding-bottom: 10px;">
            🔒 New Cyber Risk Assessment Request
          </h1>
          
          <div style="background-color: #dbeafe; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
            <p style="margin: 0; color: #1e40af; font-weight: bold;">Security In Built - New Lead Alert</p>
            <p style="margin: 5px 0 0 0; color: #374151; font-size: 14px;">Submitted on: ${currentDate}</p>
          </div>

          <h2 style="color: #374151; border-bottom: 1px solid #e5e7eb; padding-bottom: 5px;">📋 Contact Information</h2>
          <div style="background-color: #f8fafc; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
            <p style="margin: 5px 0;"><strong>Name:</strong> ${formData.firstName} ${formData.lastName}</p>
            <p style="margin: 5px 0;"><strong>Email:</strong> <a href="mailto:${formData.email}" style="color: #3b82f6;">${formData.email}</a></p>
            <p style="margin: 5px 0;"><strong>Company:</strong> ${formData.company}</p>
            <p style="margin: 5px 0;"><strong>Phone:</strong> <a href="tel:${formData.phone}" style="color: #3b82f6;">${formData.phone || 'Not provided'}</a></p>
          </div>

          <h2 style="color: #374151; border-bottom: 1px solid #e5e7eb; padding-bottom: 5px;">🔍 Security Challenges</h2>
          <div style="background-color: #fef3c7; padding: 15px; border-radius: 5px; margin-bottom: 20px; border-left: 4px solid #f59e0b;">
            <p style="margin: 0; white-space: pre-wrap;">${formData.challenges || 'No specific challenges mentioned'}</p>
          </div>

          <h2 style="color: #374151; border-bottom: 1px solid #e5e7eb; padding-bottom: 5px;">📝 Next Steps</h2>
          <div style="background-color: #ecfdf5; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
            <ul style="margin: 0; padding-left: 20px; color: #374151;">
              <li>Contact the prospect within 24 hours</li>
              <li>Schedule the free 2-hour cyber risk assessment</li>
              <li>Prepare customized security audit based on their challenges</li>
              <li>Send them the assessment questionnaire if needed</li>
            </ul>
          </div>

          <div style="background-color: #f3f4f6; padding: 15px; border-radius: 5px; text-align: center; margin-top: 30px;">
            <p style="margin: 0; color: #6b7280; font-size: 12px;">
              This email was automatically generated from the Security In Built website contact form.<br>
              Tower 9, 307, Pyramid Urban Homes, Sector 70A, Gurgaon | +91 70658 74157
            </p>
          </div>
        </div>
      </div>
    `;

    const emailResponse = await resend.emails.send({
      from: "Security In Built <noreply@securityinbuilt.com>",
      to: ["csvedantgupta@gmail.com"],
      subject: `🚨 New Cyber Risk Assessment Request from ${formData.company}`,
      html: emailHtml,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ 
      success: true, 
      message: "Contact form submitted successfully",
      emailId: emailResponse.data?.id 
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-contact-notification function:", error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message 
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);