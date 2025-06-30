import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, Video, CheckCircle, Users, Shield } from "lucide-react";

declare global {
  interface Window {
    createPushLapEmail: any;
  }
}

export default function Schedule() {
  useEffect(() => {
    // Track page visit and capture any referral data
    const urlParams = new URLSearchParams(window.location.search);
    const email = urlParams.get('email');
    const name = urlParams.get('name');

    if (email && window.createPushLapEmail) {
      window.createPushLapEmail(email, name || '');
    }

    // Store email in localStorage for fallback tracking
    if (email) {
      localStorage.setItem('affiliate_email', email);
      localStorage.setItem('affiliate_name', name || '');
    }
  }, []);

  const benefits = [
    {
      icon: Calendar,
      title: "Flexible Scheduling",
      description: "Choose from available time slots that work for you",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Video,
      title: "Professional Setup",
      description: "High-quality video call with screen sharing",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Shield,
      title: "Confidential",
      description: "Your business information stays secure",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Meet with our senior AI consultants",
      color: "from-orange-500 to-red-500"
    }
  ];

  const whatToExpect = [
    "Business goals and current challenges assessment",
    "AI readiness evaluation for your industry",
    "Custom implementation roadmap",
    "ROI projections and timeline discussion",
    "Next steps and partnership options"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-purple-50/20 dark:to-purple-950/20">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 mb-6 animate-pulse">
              <Calendar className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
              Schedule Your
              <br />
              Strategy Session
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Select a convenient time for your 30-minute AI strategy consultation. 
              Our experts are ready to help transform your business.
            </p>
            <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground mb-8">
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                30 Minutes
              </div>
              <div className="flex items-center">
                <Video className="h-4 w-4 mr-2" />
                Video Call
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-2" />
                Free Consultation
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 items-start">
            {/* Left Column - What to Expect */}
            <div className="lg:col-span-1 order-2 lg:order-1">
              <Card className="border-border/50 mb-6">
                <CardHeader>
                  <CardTitle className="text-xl font-bold flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2 text-green-500" />
                    What to Expect
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {whatToExpect.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Benefits Grid */}
              <div className="grid gap-4">
                {benefits.map((benefit, index) => {
                  const IconComponent = benefit.icon;
                  return (
                    <Card key={index} className="border-border/50">
                      <CardContent className="pt-4">
                        <div className="flex items-start">
                          <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${benefit.color} mr-3 flex items-center justify-center flex-shrink-0`}>
                            <IconComponent className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-sm mb-1">{benefit.title}</h3>
                            <p className="text-xs text-muted-foreground">{benefit.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Right Column - Scheduler */}
            <div className="lg:col-span-2 order-1 lg:order-2">
              <Card className="border-2 border-primary/20 shadow-2xl">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-bold">
                    Choose Your Time Slot
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Select a date and time that works best for your schedule
                  </p>
                </CardHeader>
                <CardContent>
                  {/* TidyCal Embed */}
                  <div className="w-full">
                    <iframe 
                      src="https://tidycal.com/jamaur-smith" 
                      width="100%" 
                      height="600" 
                      style={{ border: 'none', borderRadius: '8px' }}
                      title="Schedule Your AI Strategy Call"
                    ></iframe>
                  </div>
                  
                  {/* Instructions */}
                  <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                    <h3 className="font-semibold mb-2">After Scheduling:</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• You'll receive a confirmation email with meeting details</li>
                      <li>• We'll send you a pre-call questionnaire to maximize our time</li>
                      <li>• Meeting link will be provided 24 hours before the call</li>
                      <li>• Have your business goals and questions ready</li>
                    </ul>
                    <div className="mt-4 p-3 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
                      <p className="text-xs text-green-700 dark:text-green-300">
                        <strong>Note:</strong> TidyCal should be configured to redirect to: 
                        <code className="bg-green-100 dark:bg-green-900 px-1 rounded">
                          https://your-domain.com/thank-you?email=&#123;&#123;email&#125;&#125;&name=&#123;&#123;name&#125;&#125;
                        </code>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-purple-900/20 via-black/40 to-cyan-900/20 rounded-3xl p-8 border border-purple-400/30">
              <h2 className="text-2xl font-bold text-white mb-4">
                Questions Before Your Call?
              </h2>
              <p className="text-purple-100 mb-4">
                Need help scheduling or have specific questions about our AI solutions?
              </p>
              <p className="text-sm text-purple-200">
                Email us at <span className="font-semibold">hello@liv8ai.com</span> or call <span className="font-semibold">(555) 123-4567</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}