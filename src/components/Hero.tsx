import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Shield, Cloud, Search } from 'lucide-react';
import heroImage from '@/assets/hero-cybersecurity.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(34, 34, 34, 0.8), rgba(34, 34, 34, 0.9)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-1">
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-pulse" />
        <div className="absolute top-40 right-20 w-1 h-1 bg-accent rounded-full animate-pulse delay-1000" />
        <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-primary-glow rounded-full animate-pulse delay-500" />
      </div>

      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-card/50 backdrop-blur-sm rounded-full px-4 py-2 mb-8 border border-border">
            <Shield className="h-4 w-4 text-primary" />
            <span className="text-sm text-muted-foreground">16+ Years of Industry Expertise</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Securing Your
            </span>
            <br />
            <span className="text-foreground">Digital Future</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Professional cybersecurity services for cloud infrastructure, IT audits, and comprehensive security operations. 
            Protect your business from evolving threats with our expert team.
          </p>

          {/* Service Icons */}
          <div className="flex justify-center items-center space-x-8 mb-12">
            <div className="flex flex-col items-center">
              <Cloud className="h-8 w-8 text-primary mb-2" />
              <span className="text-sm text-muted-foreground">Cloud Security</span>
            </div>
            <div className="flex flex-col items-center">
              <Shield className="h-8 w-8 text-accent mb-2" />
              <span className="text-sm text-muted-foreground">Cybersecurity</span>
            </div>
            <div className="flex flex-col items-center">
              <Search className="h-8 w-8 text-primary-glow mb-2" />
              <span className="text-sm text-muted-foreground">IT Audits</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button size="lg" className="shadow-glow group">
              Get Free Risk Assessment
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="group">
              <Play className="mr-2 h-4 w-4" />
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-border">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Companies Protected</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime Guaranteed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-glow mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Security Monitoring</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;