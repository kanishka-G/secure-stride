import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  ArrowRight, 
  Shield,
  CheckCircle,
  Clock,
  Users
} from 'lucide-react';

const Contact = () => {
  const contactMethods = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Us",
      content: "security@cyberguardpro.com",
      subtitle: "Response within 2 hours"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Call Us",
      content: "+1 (555) 123-CYBER",
      subtitle: "24/7 Emergency Support"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Visit Us",
      content: "123 Security Blvd, Tech City",
      subtitle: "Schedule an appointment"
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Book Meeting",
      content: "calendly.com/cyberguard",
      subtitle: "Free consultation"
    }
  ];

  const assessmentFeatures = [
    "Comprehensive Security Posture Review",
    "Cloud Configuration Assessment",
    "Vulnerability Identification",
    "Risk Prioritization Matrix",
    "Actionable Remediation Plan",
    "Compliance Gap Analysis"
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Ready for a</span>
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Secure Future?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Take the first step towards comprehensive cybersecurity. Book your free risk assessment today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card className="bg-gradient-card border-border shadow-elegant p-8">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Get Your Free Cyber Risk Assessment
                </h3>
                <p className="text-muted-foreground">
                  Fill out the form below and our security experts will contact you within 24 hours.
                </p>
              </div>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      First Name *
                    </label>
                    <Input placeholder="John" className="bg-background" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Last Name *
                    </label>
                    <Input placeholder="Doe" className="bg-background" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <Input type="email" placeholder="john.doe@company.com" className="bg-background" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Company Name *
                  </label>
                  <Input placeholder="Your Company Inc." className="bg-background" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <Input placeholder="+1 (555) 123-4567" className="bg-background" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Current Security Challenges
                  </label>
                  <Textarea 
                    placeholder="Tell us about your current security concerns, cloud infrastructure, compliance requirements, etc."
                    className="bg-background min-h-[120px]"
                  />
                </div>

                <Button size="lg" className="w-full shadow-glow group">
                  Schedule Free Assessment
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </form>
            </Card>
          </div>

          {/* Contact Information & Assessment Details */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contactMethods.map((method, index) => (
                  <Card key={index} className="bg-gradient-card border-border shadow-card hover:shadow-glow transition-all duration-300 p-4 group">
                    <div className="flex items-start space-x-3">
                      <div className="text-primary group-hover:scale-110 transition-transform duration-300 mt-1">
                        {method.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{method.title}</h4>
                        <p className="text-foreground mb-1">{method.content}</p>
                        <p className="text-xs text-muted-foreground">{method.subtitle}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Free Assessment Details */}
            <Card className="bg-gradient-card border-border shadow-elegant p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Shield className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-bold text-foreground">
                  What's Included in Your Free Assessment
                </h3>
              </div>
              
              <ul className="space-y-3 mb-6">
                {assessmentFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div className="text-sm text-muted-foreground">2-Hour Assessment</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Users className="h-5 w-5 text-accent" />
                  </div>
                  <div className="text-sm text-muted-foreground">Expert Consultation</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Shield className="h-5 w-5 text-primary-glow" />
                  </div>
                  <div className="text-sm text-muted-foreground">Detailed Report</div>
                </div>
              </div>
            </Card>

            {/* Emergency Contact */}
            <Card className="bg-destructive/10 border-destructive/20 p-6">
              <h3 className="text-lg font-bold text-foreground mb-2">
                Security Emergency?
              </h3>
              <p className="text-muted-foreground mb-4">
                If you're experiencing an active security incident, contact our emergency response team immediately.
              </p>
              <Button variant="destructive" size="sm">
                Emergency: +1 (555) 911-HACK
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;