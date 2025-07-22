import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Cloud, 
  Shield, 
  Search, 
  Monitor, 
  Lock, 
  Database,
  Cpu,
  Globe,
  Mail,
  Users
} from 'lucide-react';
import cyberToolsImage from '@/assets/cyber-tools.jpg';

const Tools = () => {
  const toolCategories = [
    {
      category: "Cloud Security Tools",
      icon: <Cloud className="h-6 w-6" />,
      color: "text-primary",
      tools: [
        { name: "AWS Security Hub", type: "CSPM" },
        { name: "Azure Defender", type: "Cloud Protection" },
        { name: "Prisma Cloud", type: "CWPP" },
        { name: "CloudSploit", type: "IAM Audit" },
        { name: "Falco", type: "K8s Security" }
      ]
    },
    {
      category: "SIEM & Monitoring",
      icon: <Monitor className="h-6 w-6" />,
      color: "text-accent",
      tools: [
        { name: "Splunk", type: "SIEM" },
        { name: "ELK Stack", type: "Log Analysis" },
        { name: "Wazuh", type: "Security Monitoring" },
        { name: "Sumo Logic", type: "Cloud SIEM" },
        { name: "QRadar", type: "Enterprise SIEM" }
      ]
    },
    {
      category: "Endpoint & Network Security",
      icon: <Shield className="h-6 w-6" />,
      color: "text-primary-glow",
      tools: [
        { name: "CrowdStrike", type: "EDR/XDR" },
        { name: "SentinelOne", type: "Endpoint Protection" },
        { name: "Fortinet", type: "Firewall/UTM" },
        { name: "OpenVPN", type: "Secure Access" },
        { name: "Zscaler", type: "Zero Trust" }
      ]
    },
    {
      category: "Vulnerability Assessment",
      icon: <Search className="h-6 w-6" />,
      color: "text-success",
      tools: [
        { name: "Nessus", type: "Vulnerability Scanner" },
        { name: "Burp Suite", type: "Web App Testing" },
        { name: "Nmap", type: "Network Discovery" },
        { name: "Metasploit", type: "Penetration Testing" },
        { name: "OWASP ZAP", type: "Web Security" }
      ]
    },
    {
      category: "Identity & Access Management",
      icon: <Users className="h-6 w-6" />,
      color: "text-warning",
      tools: [
        { name: "Okta", type: "Identity Platform" },
        { name: "Azure AD", type: "Cloud Identity" },
        { name: "HashiCorp Vault", type: "Secrets Management" },
        { name: "Duo Security", type: "MFA" },
        { name: "Ping Identity", type: "SSO" }
      ]
    },
    {
      category: "Compliance & Governance",
      icon: <Database className="h-6 w-6" />,
      color: "text-primary",
      tools: [
        { name: "Drata", type: "Compliance Automation" },
        { name: "Secureframe", type: "SOC 2 Compliance" },
        { name: "Netwrix", type: "AD Auditing" },
        { name: "Varonis", type: "Data Security" },
        { name: "CIS-CAT", type: "Configuration Assessment" }
      ]
    }
  ];

  const certifications = [
    "AWS Certified Security",
    "Azure Security Engineer",
    "CISSP",
    "CEH",
    "CISA",
    "ISO 27001",
    "SOC 2",
    "PCI DSS"
  ];

  return (
    <section id="tools" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Advanced Security
            </span>
            <br />
            <span className="text-foreground">Tools & Platforms</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We leverage industry-leading tools and platforms to provide comprehensive security coverage 
            across your entire digital infrastructure
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-16">
          <Card className="overflow-hidden shadow-elegant">
            <div 
              className="h-64 bg-cover bg-center relative"
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url(${cyberToolsImage})`
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <Monitor className="h-16 w-16 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Enterprise-Grade Security Stack
                  </h3>
                  <p className="text-muted-foreground">
                    Protecting your assets with the most advanced cybersecurity tools available
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {toolCategories.map((category, index) => (
            <Card key={index} className="bg-gradient-card border-border shadow-card hover:shadow-glow transition-all duration-300 group">
              <div className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`${category.color} group-hover:scale-110 transition-transform duration-300`}>
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {category.category}
                  </h3>
                </div>
                
                <div className="space-y-3">
                  {category.tools.map((tool, toolIndex) => (
                    <div key={toolIndex} className="flex items-center justify-between">
                      <span className="text-foreground font-medium">{tool.name}</span>
                      <Badge variant="outline" className="text-xs">
                        {tool.type}
                      </Badge>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Methodology Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 text-foreground">
              Our Security Methodology
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Defense in depth strategy with layered security controls
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { layer: "Identity", icon: <Users className="h-5 w-5" />, desc: "User & Device Authentication" },
              { layer: "Network", icon: <Globe className="h-5 w-5" />, desc: "Perimeter & Internal Security" },
              { layer: "Application", icon: <Cpu className="h-5 w-5" />, desc: "Code & Runtime Protection" },
              { layer: "Data", icon: <Lock className="h-5 w-5" />, desc: "Encryption & Access Control" },
              { layer: "Monitoring", icon: <Monitor className="h-5 w-5" />, desc: "24/7 Threat Detection" }
            ].map((layer, index) => (
              <Card key={index} className="bg-gradient-card border-border p-4 text-center hover:shadow-glow transition-all duration-300 group">
                <div className="text-primary mb-2 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {layer.icon}
                </div>
                <h4 className="font-semibold text-foreground mb-1">{layer.layer}</h4>
                <p className="text-xs text-muted-foreground">{layer.desc}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-6 text-foreground">
            Industry Certifications & Compliance
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {certifications.map((cert, index) => (
              <Badge key={index} variant="outline" className="px-4 py-2 text-sm">
                {cert}
              </Badge>
            ))}
          </div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            Our team holds industry-recognized certifications and maintains compliance with 
            major security frameworks to ensure the highest standards of service delivery.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Tools;