import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Mail, Calendar, Clock, ArrowRight, Phone, MessageCircle } from "lucide-react";
import { Link } from "wouter";

declare global {
  interface Window {
    createPushLapSale: any;
  }
}

export default function ThankYou() {
  useEffect(() => {
    // Track conversion for affiliate system
    const urlParams = new URLSearchParams(window.location.search);
    const email = urlParams.get('email');
    const name = urlParams.get('name');

    // Fallback to localStorage if URL params not available
    const storedEmail = email || localStorage.getItem('affiliate_email');
    const storedName = name || localStorage.getItem('affiliate_name');

    if (storedEmail && window.createPushLapSale) {
      window.createPushLapSale({
        name: storedName || '',
        email: storedEmail,
        amount: 0 // Free consultation - track as conversion
      });
    }

    // Clear stored data after tracking
    localStorage.removeItem('affiliate_email');
    localStorage.removeItem('affiliate_name');
  }, []);

  const nextSteps = [
    {
      icon: Mail,
      title: "Check Your Email",
      description: "Confirmation and meeting details sent to your inbox",
      time: "Within 5 minutes"
    },
    {
      icon: Calendar,
      title: "Prepare for Your Call",
      description: "We'll send a brief questionnaire to maximize our time",
      time: "24 hours before"
    },
    {
      icon: Phone,
      title: "Join the Meeting",
      description: "Click the meeting link in your confirmation email",
      time: "At scheduled time"
    }
  ];

  const whatWeWillCover = [
    "Current business challenges and goals",
    "AI readiness assessment for your industry",
    "Potential ROI and implementation timeline",
    "Custom strategy recommendations",
    "Partnership and next step options"
  ];

  const resources = [
    {
      title: "AI Readiness Checklist",
      description: "Prepare for your call with our comprehensive checklist",
      href: "/resources/ai-checklist"
    },
    {
      title: "Case Studies",
      description: "See how we've helped businesses like yours",
      href: "/portfolio"
    },
    {
      title: "FAQ",
      description: "Common questions about AI implementation",
      href: "/faq"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-green-50/20 dark:to-green-950/20">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 mb-6 animate-bounce">
              <CheckCircle className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Congratulations!
              <br />
              Your Call is Scheduled
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              We're excited to help transform your business with AI. 
              Check your email for confirmation details and next steps.
            </p>
            <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                30-minute session
              </div>
              <div className="flex items-center">
                <MessageCircle className="h-4 w-4 mr-2" />
                Free consultation
              </div>
            </div>
          </div>

          {/* What Happens Next */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">What Happens Next</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {nextSteps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <Card key={index} className="border-2 border-green-200 dark:border-green-800 relative">
                    <div className="absolute -top-3 -left-3 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>
                    <CardHeader className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-lg font-semibold">{step.title}</CardTitle>
                      <p className="text-xs text-green-600 font-medium">{step.time}</p>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-muted-foreground text-sm">
                        {step.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* What We'll Cover */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">What We'll Cover</CardTitle>
                <p className="text-muted-foreground">
                  Our 30-minute strategy session will focus on:
                </p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {whatWeWillCover.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Prepare for Success</CardTitle>
                <p className="text-muted-foreground">
                  Get the most out of your consultation:
                </p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm">Identify your biggest business challenges</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm">Think about your ideal outcomes</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm">Prepare questions about AI implementation</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm">Consider your budget and timeline</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Resources */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Helpful Resources</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {resources.map((resource, index) => (
                <Card key={index} className="border-border/50 hover:border-primary/50 transition-all duration-300 group cursor-pointer">
                  <Link href={resource.href}>
                    <CardHeader>
                      <CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors">
                        {resource.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm mb-3">
                        {resource.description}
                      </p>
                      <div className="flex items-center text-primary text-sm font-medium">
                        Learn more
                        <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Link>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-green-900/20 via-black/40 to-emerald-900/20 rounded-3xl p-8 border border-green-400/30">
              <h2 className="text-2xl font-bold text-white mb-4">
                Need to Reschedule or Have Questions?
              </h2>
              <p className="text-green-100 mb-6">
                We're here to help make this process as smooth as possible.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="text-sm text-green-200">
                  <strong>Email:</strong> hello@liv8ai.com
                </div>
                <div className="text-sm text-green-200">
                  <strong>Phone:</strong> (404) 495-5397
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}