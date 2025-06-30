import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Calendar, Clock, Video, CheckCircle, Phone, Users, Star } from "lucide-react";
import { Link } from "wouter";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

declare global {
  interface Window {
    makeforms: any;
    createPushLapEmail: any;
  }
}

export default function BookACall() {
  const [formLoaded, setFormLoaded] = useState(false);

  useEffect(() => {
    // Load MakeForms script with error handling
    const script = document.createElement('script');
    script.src = 'https://assets.makeforms.io/bundles/scripts/live/us/embed.js';
    script.async = true;
    script.onload = () => {
      try {
        setFormLoaded(true);
        // Initialize the embedded form
        if (window.makeforms && window.makeforms.Embed) {
          new window.makeforms.Embed({ 
            sourceId: "685197ffe60395ec724f4244", 
            root: "makeform-embed" 
          }).build();
        }
      } catch (error) {
        console.log('MakeForms initialization error:', error);
        setFormLoaded(true); // Still show the form area
      }
    };
    script.onerror = () => {
      console.log('MakeForms script failed to load');
      setFormLoaded(true);
    };
    
    // Check if script already exists
    const existingScript = document.querySelector('script[src*="makeforms.io"]');
    if (!existingScript) {
      document.head.appendChild(script);
    } else {
      setFormLoaded(true);
    }

    return () => {
      // Cleanup - remove script if it exists
      try {
        const scriptToRemove = document.querySelector('script[src*="makeforms.io"]');
        if (scriptToRemove && scriptToRemove.parentNode) {
          scriptToRemove.parentNode.removeChild(scriptToRemove);
        }
      } catch (error) {
        // Ignore cleanup errors
      }
    };
  }, []);

  const handleFormSubmit = () => {
    // Track form submission for affiliate system
    const urlParams = new URLSearchParams(window.location.search);
    const email = urlParams.get('email');
    const name = urlParams.get('name');

    if (email && window.createPushLapEmail) {
      window.createPushLapEmail(email, name || '');
    }
  };

  const benefits = [
    {
      icon: CheckCircle,
      title: "Free Consultation",
      description: "30-minute strategy session at no cost",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Video,
      title: "Expert Analysis",
      description: "AI readiness assessment for your business",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Calendar,
      title: "Custom Roadmap",
      description: "Personalized AI implementation plan",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Clock,
      title: "Quick Results",
      description: "See potential ROI within 24 hours",
      color: "from-orange-500 to-red-500"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CEO, TechStart",
      content: "The AI strategy call was incredibly valuable. We implemented their recommendations and saw 40% efficiency gains within 2 weeks.",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      role: "Operations Director",
      content: "LIV8AI's expertise helped us identify automation opportunities we never considered. The ROI has been phenomenal.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-blue-50/20 dark:to-blue-950/20">
      <Navbar />
      <div className="container mx-auto px-4 py-16 pt-24">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mb-6 animate-pulse">
              <Phone className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Book Your Free
              <br />
              AI Strategy Call
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Discover how AI can transform your business in just 30 minutes. 
              No sales pitch - just actionable insights tailored to your industry.
            </p>
            <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground mb-8">
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-2" />
                500+ Businesses Helped
              </div>
              <div className="flex items-center">
                <Star className="h-4 w-4 mr-2 text-yellow-500" />
                4.9/5 Average Rating
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                30 Min Session
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Form */}
            <div className="order-2 lg:order-1">
              <Card className="border-2 border-primary/20 shadow-2xl">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-bold">
                    Schedule Your Free Call
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll contact you within 24 hours
                  </p>
                </CardHeader>
                <CardContent>
                  {/* MakeForms Embed */}
                  <div id="makeform-embed" className="min-h-[400px]">
                    {!formLoaded && (
                      <div className="flex items-center justify-center h-64">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                      </div>
                    )}
                  </div>
                  
                  {/* Next Steps */}
                  <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                    <p className="text-sm text-muted-foreground text-center">
                      After submitting this form, you'll be redirected to schedule your call time.
                    </p>
                    <div className="mt-4 text-center">
                      <Link href="/schedule">
                        <Button variant="outline" className="w-full">
                          Or Schedule Directly
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Benefits & Testimonials */}
            <div className="order-1 lg:order-2">
              {/* Benefits */}
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {benefits.map((benefit, index) => {
                  const IconComponent = benefit.icon;
                  return (
                    <Card key={index} className="border-border/50 hover:border-primary/50 transition-all duration-300">
                      <CardHeader className="pb-3">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${benefit.color} mb-3 flex items-center justify-center`}>
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                        <CardTitle className="text-lg font-semibold">{benefit.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <p className="text-muted-foreground text-sm">
                          {benefit.description}
                        </p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* Testimonials */}
              <div className="space-y-4">
                {testimonials.map((testimonial, index) => (
                  <Card key={index} className="border-border/50">
                    <CardContent className="pt-6">
                      <div className="flex items-center mb-3">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                        ))}
                      </div>
                      <p className="text-muted-foreground mb-3 italic">
                        "{testimonial.content}"
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mr-3">
                          <span className="text-white font-semibold text-sm">
                            {testimonial.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div>
                          <p className="font-semibold text-sm">{testimonial.name}</p>
                          <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}