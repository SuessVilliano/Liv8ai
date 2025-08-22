import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight, MessageCircle, Users, Settings, Star, Zap, Clock, Target, Code, Phone, Monitor, Shield } from "lucide-react";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { Link } from "wouter";

declare global {
  interface Window {
    gtag: any;
  }
}

export default function Support() {
  useEffect(() => {
    // Track page visit for affiliate system
    console.log('LIV8 Support page visited - affiliate tracking active');
    
    // GTM conversion tracking
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'page_view', {
        page_title: 'LIV8 Support',
        page_location: window.location.href
      });
    }
  }, []);

  const handleGetSupport = () => {
    // Direct to book-a-call for support consultation
    window.location.href = '/book-a-call';
  };

  const supportTiers = [
    {
      name: "Essential",
      price: "$197/mo",
      description: "Perfect for solo entrepreneurs and small businesses",
      features: [
        "Live chat support",
        "AI-powered responses",
        "Knowledge base access",
        "Basic coaching sessions",
        "Email ticket support",
        "Standard response time"
      ],
      popular: false,
      icon: MessageCircle
    },
    {
      name: "Proactive",
      price: "$497/mo", 
      description: "Ideal for growing agencies and established businesses",
      features: [
        "Everything in Essential",
        "Zoom support sessions",
        "Screen share assistance",
        "Priority ticket escalation",
        "Faster response times",
        "Monthly strategy calls",
        "CRM optimization reviews"
      ],
      popular: true,
      icon: Users
    },
    {
      name: "Full-Service",
      price: "$997/mo",
      description: "Complete white-glove support for enterprises",
      features: [
        "Everything in Proactive",
        "Hands-on execution",
        "Automation builds & maintenance",
        "CRM management",
        "Appointment setting",
        "Sub-account support",
        "White-labeled for your clients",
        "Dedicated account manager"
      ],
      popular: false,
      icon: Settings
    }
  ];

  const certifications = [
    { name: "Generative AI Certified", icon: Zap },
    { name: "Google Studio Certified", icon: Target },
    { name: "GoHighLevel CRM Certified", icon: Settings },
    { name: "VBOUT Certified Partner", icon: Users },
    { name: "LIV8 CRM Experts", icon: Code }
  ];

  const workflowSteps = [
    {
      number: "1",
      title: "Embed Widget",
      description: "Add our chat widget with a single line of code to your CRM or dashboard.",
      icon: Code
    },
    {
      number: "2", 
      title: "Connect Instantly",
      description: "Live chat, AI triage, screen share, or Zoom - choose how you want to connect.",
      icon: Phone
    },
    {
      number: "3",
      title: "Choose Support Level",
      description: "Get guidance, automation tweaks, or hands-on done-for-you work.",
      icon: Monitor
    },
    {
      number: "4",
      title: "Scale Effortlessly",
      description: "We handle support for your sub-accounts and agency clients too.",
      icon: Shield
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero-gradient pt-20 pb-16 relative overflow-hidden min-h-screen flex items-center dark:bg-gradient-to-br dark:from-gray-900 dark:via-blue-900 dark:to-purple-900">
        <div className="absolute inset-0 circuit-pattern opacity-20 dark:opacity-20 light:opacity-10"></div>
        
        {/* Animated floating elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-cyan-400 rounded-full pulse-glow animate-bounce [animation-delay:0s]"></div>
          <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-cyan-300 rounded-full pulse-glow animate-bounce [animation-delay:1s]"></div>
          <div className="absolute bottom-1/3 left-1/3 w-5 h-5 bg-cyan-500 rounded-full pulse-glow animate-bounce [animation-delay:2s]"></div>
          <div className="absolute top-2/3 right-1/3 w-2 h-2 bg-cyan-200 rounded-full pulse-glow animate-bounce [animation-delay:0.5s]"></div>
        </div>
        
        <div className="relative w-full max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <div className="mb-6">
            <Badge className="bg-cyan-400/20 text-cyan-400 border-cyan-400/30 px-4 py-2 text-sm font-semibold">
              LIV8 SUPPORT
            </Badge>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in-up leading-tight">
            One Line of Code.
            <br />
            <span className="gradient-text">Infinite Business Support.</span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up [animation-delay:0.2s]">
            We're not just a help desk — we're your certified support powerhouse, built to maintain, manage, and elevate your business after setup.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up [animation-delay:0.4s]">
            <Button
              onClick={handleGetSupport}
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg font-semibold pulse-glow"
            >
              Get Support Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Link href="#tiers">
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/10">
                View Support Tiers
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* What Makes LIV8 Support Different */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              What Makes LIV8 SUPPORT Different
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Human + AI hybrid support that lives inside your systems and gets things done.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-all duration-300 border border-cyan-400/20">
              <CardHeader>
                <div className="w-16 h-16 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-cyan-400" />
                </div>
                <CardTitle className="text-xl">24/7 Responsiveness</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  AI-powered instant responses with live certified professionals behind the screen.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300 border border-cyan-400/20">
              <CardHeader>
                <div className="w-16 h-16 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="h-8 w-8 text-cyan-400" />
                </div>
                <CardTitle className="text-xl">Embedded Systems</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Not just external chat — we live inside your CRM and dashboard systems.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300 border border-cyan-400/20">
              <CardHeader>
                <div className="w-16 h-16 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="h-8 w-8 text-cyan-400" />
                </div>
                <CardTitle className="text-xl">Hands-On Execution</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We don't just advise. We do the work if you want us to — from automation to CRM management.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300 border border-cyan-400/20">
              <CardHeader>
                <div className="w-16 h-16 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-cyan-400" />
                </div>
                <CardTitle className="text-xl">Agency-Ready</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  White-labeled support for your sub-accounts and clients — scale without limits.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How LIV8 Support Works */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              How LIV8 SUPPORT Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Four simple steps to transform your business support experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workflowSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 pulse-glow">
                    <step.icon className="h-10 w-10 text-primary" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-cyan-400 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {step.number}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Tiers */}
      <section id="tiers" className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Support Tiers
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the level of support that matches your business needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {supportTiers.map((tier, index) => (
              <Card key={index} className={`relative hover:shadow-xl transition-all duration-300 ${
                tier.popular ? 'border-2 border-primary ring-2 ring-primary/20' : 'border border-muted'
              }`}>
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-2">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <tier.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{tier.name}</CardTitle>
                  <div className="text-3xl font-bold text-primary mb-2">{tier.price}</div>
                  <p className="text-sm text-muted-foreground">{tier.description}</p>
                </CardHeader>
                
                <CardContent className="pt-4">
                  <ul className="space-y-3 mb-6">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button
                    onClick={handleGetSupport}
                    className={`w-full ${
                      tier.popular 
                        ? 'bg-primary text-primary-foreground hover:bg-primary/90' 
                        : 'bg-muted text-foreground hover:bg-muted/80'
                    }`}
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Certified. Trusted. Proven.
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our team holds industry-leading certifications to provide expert support.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 border border-cyan-400/20">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <cert.icon className="h-6 w-6 text-cyan-400" />
                  </div>
                  <p className="text-sm font-medium">{cert.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Elevate Your Business Support?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join hundreds of businesses that trust LIV8 SUPPORT for their ongoing success.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handleGetSupport}
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg font-semibold pulse-glow"
            >
              Start with LIV8 SUPPORT Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Link href="/schedule">
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg border-primary/30 text-primary hover:bg-primary/10">
                Schedule Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}