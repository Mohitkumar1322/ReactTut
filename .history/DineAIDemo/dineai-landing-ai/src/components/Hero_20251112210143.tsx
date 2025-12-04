import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-dark via-primary to-primary-light animate-gradient">
      {/* Animated background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-primary-light/30 rounded-full blur-3xl animate-float" style={{ animationDelay: "4s" }} />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left: Text Content */}
          <div className="space-y-8">

            {/* Logo Section */}
            <div className="flex items-center space-x-3 animate-fade-in" style={{ animationDelay: "0s" }}>
              <img 
                src="/public/.png" 
                alt="DineAI Logo" 
                className="h-12 w-auto md:h-14 drop-shadow-lg"
              />
            </div>

            <div className="inline-block px-4 py-2 bg-secondary/20 backdrop-blur-sm rounded-full border border-secondary/30 animate-fade-in">
              <span className="text-secondary font-semibold text-sm">✨ AI-Powered Restaurant Revolution</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in leading-tight" style={{ animationDelay: "0.1s" }}>
              Smarter Dining,{" "}
              <span className="text-gradient-secondary">Happier Customers</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 animate-fade-in leading-relaxed" style={{ animationDelay: "0.2s" }}>
              AI-powered QR ordering system that helps restaurants save{" "}
              <span className="text-secondary font-bold">₹15,000–₹25,000/month</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <Button 
                size="lg" 
                className="bg-secondary hover:bg-secondary/90 text-foreground text-lg px-8 py-6 rounded-2xl glow-button shadow-2xl hover:scale-105 transition-all font-semibold"
              >
                Book a Demo <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-primary text-lg px-8 py-6 rounded-2xl transition-all hover:scale-105 font-semibold"
              >
                Join Early Access
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary">500+</div>
                <div className="text-sm text-white/70">Restaurants</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary">₹20k</div>
                <div className="text-sm text-white/70">Avg. Savings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary">98%</div>
                <div className="text-sm text-white/70">Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right: Video Placeholder */}
          <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative group">
              {/* Video container with glow effect */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-white/20 backdrop-blur-sm bg-white/5 aspect-video card-glow">
                {/* Placeholder for video - user can add their own video */}
                <div className="w-full h-full bg-gradient-to-br from-primary-light/30 to-accent/30 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-20 h-20 mx-auto bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform cursor-pointer">
                      <Play className="w-10 h-10 text-white fill-white" />
                    </div>
                    <p className="text-white/90 text-lg font-medium">Watch Demo Video</p>
                    <p className="text-white/60 text-sm px-4">See how DineAI transforms restaurant operations</p>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/30 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/30 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;