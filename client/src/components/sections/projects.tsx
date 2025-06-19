import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ExternalLink, Globe, Zap, TrendingUp, DollarSign, Brain, Users, Shield, Smartphone } from "lucide-react";
import { useState } from "react";

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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Live Portfolio</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our active platforms and applications - click to experience them live
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card key={index} className="bg-background border-border overflow-hidden card-hover group cursor-pointer"
                    onClick={() => window.open(project.url, '_blank')}>
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className={`w-12 h-12 rounded-xl ${project.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {project.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground text-sm mb-3 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                      {project.industry}
                    </span>
                    <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                </CardContent>
              </Card>
            );
          })}
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
