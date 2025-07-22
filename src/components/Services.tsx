import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Cloud, 
  Shield, 
  Search, 
  Monitor, 
  Lock, 
  Users, 
  AlertTriangle, 
  CheckCircle,
  ArrowRight 
} from 'lucide-react';
import cloudSecurityImage from '@/assets/cloud-security.jpg';
import itAuditImage from '@/assets/it-audit.jpg';
import cyberToolsImage from '@/assets/cyber-tools.jpg';

const Services = () => {
  const services = [
    {
      icon: <Cloud className="h-8 w-8" />,
      title: "Cloud Security Services",
      description: "Comprehensive protection for AWS, Azure, and GCP environments with advanced posture management.",
      image: cloudSecurityImage,
      features: [
        "Cloud Security Posture Reviews",
        "DevSecOps Implementation & CI/CD Security",
        "Container (K8s) and Serverless Security",
        "IAM & Resource Policy Hardening",
        "Cloud Threat Detection and Response"
      ],
      highlight: "93% of breaches are from misconfigurations"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Cybersecurity Services",
      description: "End-to-end cybersecurity solutions from network protection to incident response and forensics.",
      image: cyberToolsImage,
      features: [
        "Network Security & VPN Design",
        "Endpoint Security (EDR, AV, DLP)",
        "Incident Response & Forensics",
        "Penetration Testing & Red Teaming",
        "Security Awareness & Phishing Simulation",
        "Malware Analysis & Legal Consultancy"
      ],
      highlight: "70% of businesses hit by cyber incidents"
    },
    {
      icon: <Search className="h-8 w-8" />,
      title: "IT Infrastructure Audits",
      description: "Thorough security assessments and compliance mapping for your entire IT infrastructure.",
      image: itAuditImage,
      features: [
        "Identity and Access Review (AD, SSO, MFA)",
        "VPN, Firewall & Server Security Audit",
        "GRC Compliance Mapping",
        "Backup, DR and BCP Checks",
        "SOP and Policy Creation"
      ],
      highlight: "Proactive risk identification"
    }
  ];

  const processSteps = [
    {
      icon: <Search className="h-6 w-6" />,
      title: "Assessment",
      description: "Discovery & Risk Assessment"
    },
    {
      icon: <Monitor className="h-6 w-6" />,
      title: "Audit",
      description: "Hands-on Security Audits"
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: "Remediate",
      description: "Fix Vulnerabilities, Harden Infrastructure"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Monitor",
      description: "Continuous Monitoring (MSSP optional)"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Comprehensive Security
            </span>
            <br />
            <span className="text-foreground">Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Protecting your digital assets with industry-leading expertise and cutting-edge technology
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <Card key={index} className="bg-gradient-card border-border shadow-card hover:shadow-glow transition-all duration-300 group overflow-hidden">
              {/* Service Image */}
              <div 
                className="h-48 bg-cover bg-center relative"
                style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url(${service.image})`
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                </div>
              </div>

              <div className="p-6">
                {/* Highlight Badge */}
                <div className="inline-flex items-center space-x-2 bg-destructive/20 text-destructive px-3 py-1 rounded-full text-xs mb-4">
                  <AlertTriangle className="h-3 w-3" />
                  <span>{service.highlight}</span>
                </div>

                <h3 className="text-xl font-bold mb-3 text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button variant="outline" className="w-full group">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Process Section */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-4 text-foreground">How We Work</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our proven methodology ensures comprehensive protection through systematic assessment, remediation, and monitoring
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow group-hover:scale-110 transition-transform duration-300">
                  <div className="text-primary-foreground">
                    {step.icon}
                  </div>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-16 w-full h-0.5 bg-border"></div>
                )}
              </div>
              <h4 className="text-lg font-semibold mb-2 text-foreground">{step.title}</h4>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button size="lg" className="shadow-glow">
            Start Your Security Assessment
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;