import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ExternalLink, Globe, Zap, TrendingUp, DollarSign, Brain, Users, Shield, Smartphone } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      title: "PooPatrol Check",
      category: "Quality Assurance",
      description: "Advanced inspection and quality control system with real-time monitoring capabilities.",
      icon: Shield,
      color: "bg-blue-500",
      industry: "Quality Control",
      url: "https://sqr.co/PooPatrolCheck"
    },
    {
      title: "TCC Credit Solutions",
      category: "FinTech",
      description: "Comprehensive credit management and financial solutions platform.",
      icon: DollarSign,
      color: "bg-green-500",
      industry: "Financial Services",
      url: "https://tccreditsolutions.com"
    },
    {
      title: "Hybrid Funding",
      category: "Investment Platform",
      description: "Revolutionary funding platform connecting investors with innovative opportunities.",
      icon: TrendingUp,
      color: "bg-purple-500",
      industry: "Investment",
      url: "https://hybridfunding.co"
    },
    {
      title: "Trade Hybrid",
      category: "Trading Platform",
      description: "Advanced trading interface with AI-powered market analysis and automation.",
      icon: Zap,
      color: "bg-orange-500",
      industry: "Trading",
      url: "https://tradehybrid.co"
    },
    {
      title: "Trade Hybrid Pro",
      category: "Professional Trading",
      description: "Professional-grade trading platform with advanced analytics and portfolio management.",
      icon: Brain,
      color: "bg-cyan-500",
      industry: "Professional Trading",
      url: "https://pro.tradehybrid.club/"
    },
    {
      title: "Hybrid Holdings",
      category: "Asset Management",
      description: "Comprehensive asset management platform with intelligent portfolio optimization.",
      icon: Globe,
      color: "bg-indigo-500",
      industry: "Asset Management",
      url: "https://hybridholdings.co/"
    },
    {
      title: "Smart Life Brokers",
      category: "Insurance Platform",
      description: "AI-powered insurance brokerage platform with personalized policy recommendations.",
      icon: Users,
      color: "bg-teal-500",
      industry: "Insurance",
      url: "https://www.smartlifebrokers.com"
    },
    {
      title: "LIV8AI Platform",
      category: "AI Solutions",
      description: "Our flagship AI platform delivering intelligent automation and business solutions.",
      icon: Brain,
      color: "bg-cyan-400",
      industry: "Artificial Intelligence",
      url: "https://liv8ai.com/"
    },
    {
      title: "Growth Pilot",
      category: "Business Analytics",
      description: "Advanced business growth analytics platform with predictive insights.",
      icon: TrendingUp,
      color: "bg-emerald-500",
      industry: "Business Intelligence",
      url: "https://growthpilot.replit.app/login"
    },
    {
      title: "KP Designs",
      category: "Design Platform",
      description: "Creative design platform with AI-enhanced tools and collaboration features.",
      icon: Smartphone,
      color: "bg-pink-500",
      industry: "Design Services",
      url: "https://kpdesigns.replit.app/"
    },
    {
      title: "MSG Master",
      category: "Communication Hub",
      description: "Intelligent messaging platform with automated response and analytics capabilities.",
      icon: Users,
      color: "bg-violet-500",
      industry: "Communications",
      url: "https://msgmaster.liv8ai.com/"
    },
    {
      title: "Plant Vybes",
      category: "E-commerce",
      description: "Modern e-commerce platform for plant enthusiasts with smart care recommendations.",
      icon: Globe,
      color: "bg-green-600",
      industry: "E-commerce",
      url: "https://plant-vybes.replit.app/"
    },
    {
      title: "Wealth Wizard",
      category: "Financial Planning",
      description: "AI-powered wealth management platform with personalized financial strategies.",
      icon: DollarSign,
      color: "bg-yellow-500",
      industry: "Wealth Management",
      url: "https://wealthwizard.liv8ai.com/"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Portfolio Universe</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Step into our VR-like portfolio world - explore 22+ live platforms in an immersive experience
          </p>
        </div>

        <div className="relative">
          {/* VR Portal Preview */}
          <div className="bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20 rounded-3xl p-8 border border-cyan-400/30 mb-8">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 mb-4 animate-pulse">
                <Globe className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Enter Portfolio Universe</h3>
              <p className="text-cyan-100">22+ live platforms • VR-style navigation • Full functionality</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl mx-auto mb-2 flex items-center justify-center">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <p className="text-sm text-cyan-100">Quality Assurance</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl mx-auto mb-2 flex items-center justify-center">
                  <DollarSign className="h-8 w-8 text-white" />
                </div>
                <p className="text-sm text-cyan-100">FinTech Solutions</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl mx-auto mb-2 flex items-center justify-center">
                  <Brain className="h-8 w-8 text-white" />
                </div>
                <p className="text-sm text-cyan-100">AI Platforms</p>
              </div>
            </div>
            
            <div className="text-center">
              <Link href="/portfolio">
                <Button size="lg" className="bg-gradient-to-r from-cyan-400 to-purple-500 text-black hover:opacity-90 px-8 py-4 text-lg font-semibold">
                  Enter Portfolio Universe
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Quick Preview Grid */}
          <div className="grid md:grid-cols-4 lg:grid-cols-6 gap-4">
            {projects.slice(0, 12).map((project, index) => {
              const IconComponent = project.icon;
              return (
                <div key={index} className="group cursor-pointer" onClick={() => window.open(project.url, '_blank')}>
                  <div className={`w-full aspect-square rounded-xl bg-gradient-to-br ${project.color} p-4 
                                transform transition-all duration-300 hover:scale-105 hover:rotate-3`}>
                    <div className="w-full h-full bg-white/10 rounded-lg flex flex-col items-center justify-center">
                      <IconComponent className="h-6 w-6 text-white mb-2" />
                      <p className="text-white text-xs text-center font-medium">{project.title}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">Ready to build your own platform?</p>
          <Button 
            onClick={() => window.open('https://us.makeforms.co/auitqnj/', '_blank')}
            size="lg" 
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg"
          >
            Start Your Project
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
