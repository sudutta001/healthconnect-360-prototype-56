import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Heart, Shield, Users } from "lucide-react";
import heroImage from "@/assets/hero-healthcare.jpg";

interface HeroSectionProps {
  onGetStarted?: () => void;
}

const HeroSection = ({ onGetStarted }: HeroSectionProps) => {
  return (
    <div className="relative min-h-screen bg-gradient-subtle">
      {/* Hero Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-primary">
                <Heart className="h-6 w-6" />
                <span className="font-semibold">HealthConnect 360</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Connecting Health.
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  {" "}Empowering Communities.
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                A collaborative healthcare ecosystem that brings together providers, NGOs, volunteers, and communities for better health outcomes and well-being.
              </p>
            </div>

            {/* Feature Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 p-4 bg-card rounded-lg border cursor-pointer hover:border-primary transition-colors">
                <Shield className="h-8 w-8 text-primary" />
                <div>
                  <h3 className="font-semibold text-sm">Secure & Compliant</h3>
                  <p className="text-xs text-muted-foreground">HIPAA compliant platform</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-card rounded-lg border cursor-pointer hover:border-primary transition-colors">
                <Users className="h-8 w-8 text-secondary" />
                <div>
                  <h3 className="font-semibold text-sm">Community Driven</h3>
                  <p className="text-xs text-muted-foreground">Collaborative approach</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-card rounded-lg border cursor-pointer hover:border-primary transition-colors">
                <Heart className="h-8 w-8 text-accent" />
                <div>
                  <h3 className="font-semibold text-sm">Inclusive Access</h3>
                  <p className="text-xs text-muted-foreground">Healthcare for everyone</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                variant="health"
                className="group"
                onClick={onGetStarted}
              >
                Get Started Today
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => console.log("Learn more clicked")}
              >
                Learn More About Features
              </Button>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative animate-scale-in" style={{ animationDelay: "0.3s" }}>
            <Card className="overflow-hidden shadow-glow">
              <img 
                src={heroImage} 
                alt="Healthcare professionals collaborating through digital technology" 
                className="w-full h-auto"
              />
            </Card>
            
            {/* Floating Stats */}
            <div className="absolute -top-6 -left-6 bg-card p-4 rounded-lg shadow-card border animate-fade-in" style={{ animationDelay: "0.6s" }}>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">1,234+ Active Users</span>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-card p-4 rounded-lg shadow-card border animate-fade-in" style={{ animationDelay: "0.9s" }}>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">89% Health Improvement</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;