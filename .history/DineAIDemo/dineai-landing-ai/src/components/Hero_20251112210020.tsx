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
src="/assets/dineai-logo.svg"
alt="DineAI Logo"
className="h-12 w-auto md:h-14 drop-shadow-lg"
/>
</div>


<div className="inline-block px-4 py-2 bg-secondary/20 backdrop-blur-sm rounded-full border border-secondary/30 animate-fade-in" style={{ animationDelay: "0.05s" }}>
<span className="text-secondary font-semibold text-sm">✨ AI-Powered Restaurant Revolution</span>
</div>


<h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in leading-tight" style={{ animationDelay: "0.1s" }}>
Smarter Dining,{' '}
<span className="text-gradient-secondary">Happier Customers</span>
</h1>


<p className="text-xl md:text-2xl text-white/90 mb-8 animate-fade-in leading-relaxed" style={{ animationDelay: "0.2s" }}>
AI-powered QR ordering system that helps restaurants save{' '}
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
export default Hero;