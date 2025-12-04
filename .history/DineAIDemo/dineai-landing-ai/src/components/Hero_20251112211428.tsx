import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-dark via-primary to-primary-light animate-gradient">
      {/* Navbar (fixed inside hero) */}
      <header className="absolute top-6 left-0 right-0 z-30">
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3">
            <img
              src="/public/logo.png"
              alt="DineAI"
              className="h-14 w-auto md:h- lg:h-35 object-contain drop-shadow-lg"
            />
            {/* Optional brand text */}
            {/* <span className="text-white font-semibold text-lg hidden md:inline">DineAI</span> */}
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-white/80 hover:text-white transition">Features</a>
            <a href="#how" className="text-white/80 hover:text-white transition">How It Works</a>
            <a href="#pricing" className="text-white/80 hover:text-white transition">Pricing</a>
            <a href="/signin" className="text-white/80 hover:text-white transition">Sign In</a>

            <a href="public/DemoVideo.mp4" className="ml-2">
              <Button
                size="sm"
                className="bg-secondary hover:bg-secondary/90 text-foreground px-4 py-2 rounded-full text-sm font-semibold"
              >
                Request Demo <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
              className="p-2 rounded-md bg-white/6 hover:bg-white/10 transition"
            >
              {/* simple hamburger / close */}
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div className="md:hidden mt-4">
            <div className="container mx-auto px-4">
              <div className="rounded-xl bg-white/4 backdrop-blur-md p-4 flex flex-col gap-3">
                <a href="#features" onClick={() => setMenuOpen(false)} className="text-white/90 py-2">Features</a>
                <a href="#how" onClick={() => setMenuOpen(false)} className="text-white/90 py-2">How It Works</a>
                <a href="#pricing" onClick={() => setMenuOpen(false)} className="text-white/90 py-2">Pricing</a>
                <a href="/signin" onClick={() => setMenuOpen(false)} className="text-white/90 py-2">Sign In</a>
                <a href="#request-demo" onClick={() => setMenuOpen(false)} className="pt-2">
                  <Button size="sm" className="w-full bg-secondary text-foreground rounded-full">
                    Request Demo
                  </Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Animated background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-primary-light/30 rounded-full blur-3xl animate-float" style={{ animationDelay: "4s" }} />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Text Content */}
          <div className="space-y-8">
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
                asChild
              >
                <a href="#request-demo">Book a Demo <ArrowRight className="ml-2 h-5 w-5" /></a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-primary text-lg px-8 py-6 rounded-2xl transition-all hover:scale-105 font-semibold"
              >
                <a href="/signin">Join Early Access</a>
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
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-white/20 backdrop-blur-sm bg-white/5 aspect-video card-glow">
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

      {/* Inline helper styles for animation (move to global if you prefer) */}
      <style jsx>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { opacity: 0; animation: fadeInUp 0.7s forwards; }
        .card-glow::after {
          content: "";
          position: absolute;
          inset: 0;
          box-shadow: 0 10px 40px rgba(0,0,0,0.45), 0 0 60px rgba(0, 200, 185, 0.06);
          pointer-events: none;
          border-radius: inherit;
        }
      `}</style>
    </section>
  );
};

export default Hero;
