import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { X, ExternalLink, ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      title: "Poo Patrol Check",
      category: "Quality Assurance",
      description: "Advanced inspection and quality control system",
      url: "https://poopatrolcheck.liv8ai.com/",
      color: "from-blue-500 to-cyan-500",
      position: { x: 10, y: 20 }
    },
    {
      title: "TCC Credit Solutions", 
      category: "FinTech",
      description: "Comprehensive credit management platform",
      url: "https://tccreditsolutions.com/",
      color: "from-green-500 to-emerald-500",
      position: { x: 80, y: 15 }
    },
    {
      title: "Hybrid Funding",
      category: "Investment",
      description: "Revolutionary funding platform",
      url: "https://hybridfunding.co",
      color: "from-purple-500 to-violet-500",
      position: { x: 15, y: 70 }
    },
    {
      title: "Trade Hybrid",
      category: "Trading",
      description: "Advanced trading interface",
      url: "https://tradehybrid.co",
      color: "from-orange-500 to-red-500",
      position: { x: 60, y: 25 }
    },
    {
      title: "Trade Hybrid Pro",
      category: "Professional Trading",
      description: "Professional-grade trading platform",
      url: "https://pro.tradehybrid.club/",
      color: "from-cyan-500 to-blue-600",
      position: { x: 85, y: 60 }
    },
    {
      title: "Hybrid Holdings",
      category: "Asset Management",
      description: "Comprehensive asset management",
      url: "https://hybridholdings.co/",
      color: "from-indigo-500 to-purple-600",
      position: { x: 25, y: 45 }
    },
    {
      title: "Smart Life Brokers",
      category: "Insurance",
      description: "AI-powered insurance brokerage",
      url: "https://www.smartlifebrokers.com",
      color: "from-teal-500 to-cyan-600",
      position: { x: 70, y: 75 }
    },
    {
      title: "LIV8AI",
      category: "AI Solutions",
      description: "Flagship AI platform",
      url: "https://liv8ai.com/",
      color: "from-cyan-400 to-blue-500",
      position: { x: 45, y: 10 }
    },
    {
      title: "iCopy Trades",
      category: "Copy Trading",
      description: "Social trading platform",
      url: "https://copy.hybridfunding.co/",
      color: "from-pink-500 to-rose-500",
      position: { x: 20, y: 85 }
    },
    {
      title: "Trading Battles",
      category: "Competitive Trading",
      description: "Trading competition platform",
      url: "https://battles.hybridfunding.co",
      color: "from-yellow-500 to-orange-500",
      position: { x: 75, y: 40 }
    },
    {
      title: "Growth Pilot",
      category: "Analytics",
      description: "Business growth analytics",
      url: "https://growthpilot.liv8ai.com/login",
      color: "from-emerald-500 to-green-600",
      position: { x: 40, y: 65 }
    },
    {
      title: "KP Designs",
      category: "Design",
      description: "Creative design platform",
      url: "https://kpdesigns.liv8ai.com/",
      color: "from-pink-500 to-purple-500",
      position: { x: 55, y: 80 }
    },
    {
      title: "MSG Master",
      category: "Communication",
      description: "Intelligent messaging platform",
      url: "https://msgmaster.liv8ai.com/",
      color: "from-violet-500 to-indigo-500",
      position: { x: 30, y: 30 }
    },
    {
      title: "Plant Vybes",
      category: "E-commerce",
      description: "Plant enthusiast marketplace",
      url: "https://plantvybes.liv8ai.com/",
      color: "from-green-600 to-lime-500",
      position: { x: 65, y: 55 }
    },
    {
      title: "Wealth Wizard",
      category: "Financial Planning",
      description: "AI-powered wealth management",
      url: "https://wealthwizard.liv8ai.com/",
      color: "from-yellow-500 to-amber-500",
      position: { x: 80, y: 85 }
    },
    {
      title: "MindFlow",
      category: "Productivity",
      description: "Mental workflow optimization",
      url: "https://mindflow.liv8ai.com/",
      color: "from-blue-600 to-indigo-600",
      position: { x: 50, y: 35 }
    },
    {
      title: "Trade Pulse",
      category: "Market Data",
      description: "Real-time trading signals",
      url: "https://tradepulse.tradehybrid.club/",
      color: "from-red-500 to-pink-500",
      position: { x: 35, y: 15 }
    },
    {
      title: "Kitchen Compass",
      category: "Culinary",
      description: "Smart cooking assistant",
      url: "https://kitchen.liv8ai.com/",
      color: "from-orange-500 to-yellow-500",
      position: { x: 15, y: 55 }
    },
    {
      title: "LIV8 Solar",
      category: "Energy",
      description: "Solar energy solutions",
      url: "https://liv8solar.com/",
      color: "from-yellow-400 to-orange-400",
      position: { x: 85, y: 30 }
    },
    {
      title: "AIVA Assistant",
      category: "AI Assistant",
      description: "Advanced AI virtual assistant",
      url: "https://aiva.liv8ai.com/",
      color: "from-cyan-400 to-teal-400",
      position: { x: 25, y: 60 }
    },
    {
      title: "Signal Room",
      category: "Trading Signals",
      description: "Professional trading signals",
      url: "https://signals.tradehybrid.club/",
      color: "from-indigo-600 to-blue-700",
      position: { x: 60, y: 45 }
    },
    {
      title: "Bot Stack",
      category: "Automation",
      description: "Comprehensive bot automation",
      url: "https://botstack.liv8ai.com/",
      color: "from-purple-600 to-pink-600",
      position: { x: 40, y: 85 }
    }
  ];

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* VR Space Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20"></div>
      
      {/* Animated Grid Lines */}
      <div className="absolute inset-0 opacity-20">
        <div className="grid-lines"></div>
      </div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Header */}
      <div className="relative z-10 p-6">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <Link href="/">
            <Button variant="ghost" className="text-cyan-400 hover:text-cyan-300">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to LIV8AI
            </Button>
          </Link>
          <h1 className="text-4xl md:text-6xl font-bold text-center">
            <span className="text-white">Portfolio</span>
            <span className="text-cyan-400 ml-4">Universe</span>
          </h1>
          <div className="w-32"></div>
        </div>
      </div>

      {/* VR Portfolio Grid */}
      <div className="relative z-10 h-screen">
        <div className="absolute inset-0 perspective-1000">
          <div className="relative w-full h-full transform-style-3d">
            {projects.map((project, index) => (
              <div
                key={index}
                className="absolute cursor-pointer group"
                style={{
                  left: `${project.position.x}%`,
                  top: `${project.position.y}%`,
                  transform: 'translate(-50%, -50%)'
                }}
                onClick={() => setSelectedProject(index)}
              >
                <div className={`w-32 h-32 md:w-40 md:h-40 rounded-2xl bg-gradient-to-br ${project.color} 
                              transform transition-all duration-500 hover:scale-110 hover:rotate-y-12
                              shadow-2xl hover:shadow-cyan-400/50 group-hover:z-20`}>
                  <div className="w-full h-full rounded-2xl backdrop-blur-sm bg-white/10 
                                flex flex-col items-center justify-center p-4 text-center">
                    <Badge className="text-xs mb-2 bg-black/30 border-white/20">
                      {project.category}
                    </Badge>
                    <h3 className="text-white font-bold text-sm md:text-base leading-tight">
                      {project.title}
                    </h3>
                    <ExternalLink className="h-4 w-4 text-white/70 mt-2 group-hover:text-white transition-colors" />
                  </div>
                </div>
                
                {/* Hover Info Card */}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300
                              bg-black/90 backdrop-blur-sm rounded-lg p-3 border border-cyan-400/30
                              min-w-48 z-30">
                  <p className="text-cyan-100 text-sm">{project.description}</p>
                  <p className="text-cyan-400 text-xs mt-1">Click to explore</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Immersive Modal */}
      {selectedProject !== null && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="relative w-full h-full max-w-7xl mx-auto p-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${projects[selectedProject].color} 
                                flex items-center justify-center`}>
                  <ExternalLink className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">{projects[selectedProject].title}</h2>
                  <p className="text-cyan-400">{projects[selectedProject].category}</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="lg"
                onClick={() => setSelectedProject(null)}
                className="text-white hover:bg-white/10"
              >
                <X className="h-6 w-6" />
              </Button>
            </div>
            
            <div className="w-full h-5/6 rounded-2xl overflow-hidden border-2 border-cyan-400/30 
                          shadow-2xl shadow-cyan-400/20">
              <iframe
                src={projects[selectedProject].url}
                className="w-full h-full"
                frameBorder="0"
                title={projects[selectedProject].title}
              />
            </div>
            
            <div className="flex justify-center mt-4">
              <Button
                onClick={() => window.open(projects[selectedProject].url, '_blank')}
                className="bg-cyan-400 text-black hover:bg-cyan-300"
              >
                Open in New Tab
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}


    </div>
  );
}