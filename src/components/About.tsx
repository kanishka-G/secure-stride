import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Users, 
  Target, 
  Award, 
  TrendingUp, 
  Globe, 
  Gamepad2, 
  ShoppingCart, 
  DollarSign, 
  Heart, 
  GraduationCap,
  Wifi
} from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <Users className="h-6 w-6" />, label: "Years Experience", value: "16+" },
    { icon: <Target className="h-6 w-6" />, label: "Companies Protected", value: "500+" },
    { icon: <Award className="h-6 w-6" />, label: "Success Rate", value: "99.9%" },
    { icon: <TrendingUp className="h-6 w-6" />, label: "Threats Blocked", value: "1M+" }
  ];

  const industries = [
    { icon: <Gamepad2 className="h-6 w-6" />, name: "Gaming & Media", color: "text-primary" },
    { icon: <ShoppingCart className="h-6 w-6" />, name: "eCommerce Platforms", color: "text-accent" },
    { icon: <DollarSign className="h-6 w-6" />, name: "FinTech & SaaS", color: "text-primary-glow" },
    { icon: <Heart className="h-6 w-6" />, name: "Healthcare", color: "text-success" },
    { icon: <GraduationCap className="h-6 w-6" />, name: "EdTech Startups", color: "text-warning" },
    { icon: <Wifi className="h-6 w-6" />, name: "Remote-First Teams", color: "text-primary" }
  ];

  const benefits = [
    {
      title: "Peace of Mind",
      description: "Stay compliant and secure with comprehensive protection strategies",
      icon: <Target className="h-6 w-6" />
    },
    {
      title: "Cost Optimization",
      description: "Reduce cloud costs by optimizing resources and eliminating waste",
      icon: <TrendingUp className="h-6 w-6" />
    },
    {
      title: "Improved Uptime",
      description: "Enhance uptime and incident response time with proactive monitoring",
      icon: <Award className="h-6 w-6" />
    },
    {
      title: "Brand Protection",
      description: "Protect your brand reputation from security breaches and threats",
      icon: <Globe className="h-6 w-6" />
    }
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Why Choose</span>
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              CyberGuard Pro
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A cybersecurity startup focused on protecting digital businesses with 16+ years of industry expertise 
            in cloud, broadcast, and IT operations. We're passionate about securing modern infrastructure, 
            applications, and data.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-gradient-card border-border text-center p-6 shadow-card hover:shadow-glow transition-all duration-300">
              <div className="text-primary mb-3 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </Card>
          ))}
        </div>

        {/* Why Critical Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 text-foreground">
              Why Cybersecurity is More Critical Than Ever
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-destructive/10 border-destructive/20 p-6 text-center">
              <div className="text-4xl font-bold text-destructive mb-2">70%</div>
              <p className="text-muted-foreground">of businesses experienced a cyber incident in the last year</p>
            </Card>
            <Card className="bg-warning/10 border-warning/20 p-6 text-center">
              <div className="text-4xl font-bold text-warning mb-2">93%</div>
              <p className="text-muted-foreground">of cloud breaches are from misconfigurations</p>
            </Card>
            <Card className="bg-primary/10 border-primary/20 p-6 text-center">
              <div className="text-4xl font-bold text-primary mb-2">∞</div>
              <p className="text-muted-foreground">Remote workforce & SaaS usage increases attack surfaces</p>
            </Card>
          </div>
          
          <div className="text-center mt-8">
            <Badge variant="outline" className="text-lg px-6 py-2">
              Our mission: To reduce risk and secure digital growth
            </Badge>
          </div>
        </div>

        {/* Industries We Serve */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 text-foreground">Industries We Serve</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Specialized security solutions tailored for diverse industry requirements and compliance standards
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <Card key={index} className="bg-gradient-card border-border p-6 hover:shadow-glow transition-all duration-300 group">
                <div className="flex items-center space-x-3">
                  <div className={`${industry.color} group-hover:scale-110 transition-transform duration-300`}>
                    {industry.icon}
                  </div>
                  <span className="font-medium text-foreground">{industry.name}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 text-foreground">Benefits to Your Business</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Tangible advantages that drive business value and competitive advantage
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-gradient-card border-border p-6 shadow-card hover:shadow-glow transition-all duration-300 group">
                <div className="flex items-start space-x-4">
                  <div className="text-primary group-hover:scale-110 transition-transform duration-300 mt-1">
                    {benefit.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-foreground">{benefit.title}</h4>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;