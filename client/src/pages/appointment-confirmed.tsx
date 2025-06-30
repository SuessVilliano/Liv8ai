import { useEffect, useState } from "react";
import { CheckCircle, Calendar, Mail, Phone, ArrowRight, Sparkles, Clock, Star, MessageCircle, Video, Users, Shield, FileText, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

declare global {
  interface Window {
    createPushLapSale: any;
    dataLayer: any[];
  }
}

export default function AppointmentConfirmed() {
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [isTracked, setIsTracked] = useState(false);

  useEffect(() => {
    // Get email and name from URL parameters or localStorage
    const urlParams = new URLSearchParams(window.location.search);
    const emailParam = urlParams.get('email');
    const nameParam = urlParams.get('name');
    
    if (emailParam) {
      setEmail(emailParam);
      localStorage.setItem('userEmail', emailParam);
    } else {
      const storedEmail = localStorage.getItem('userEmail');
      if (storedEmail) setEmail(storedEmail);
    }
    
    if (nameParam) {
      setName(nameParam);
      localStorage.setItem('userName', nameParam);
    } else {
      const storedName = localStorage.getItem('userName');
      if (storedName) setName(storedName);
    }

    // Track conversion with both systems
    if (!isTracked) {
      try {
        // PushLap conversion tracking
        if (window.createPushLapSale) {
          window.createPushLapSale({
            email: emailParam || localStorage.getItem('userEmail') || '',
            amount: 0, // Free consultation
            currency: 'USD',
            product: 'AI Strategy Consultation',
            orderId: Date.now().toString()
          });
          console.log('PushLap conversion tracked');
        }
        
        // Google Tag Manager conversion tracking
        if (window.dataLayer) {
          window.dataLayer.push({
            event: 'conversion',
            event_category: 'appointment',
            event_action: 'booked',
            event_label: 'ai_strategy_call',
            value: 1
          });
          console.log('GTM conversion tracked');
        }
        
        setIsTracked(true);
      } catch (error) {
        console.log('Tracking error:', error);
        setIsTracked(true);
      }
    }
  }, [isTracked]);

  const nextSteps = [
    {
      icon: Mail,
      title: "Check Your Email",
      description: "You'll receive a confirmation email with meeting details within 5 minutes",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: FileText,
      title: "Pre-Call Questionnaire",
      description: "Complete the brief form we'll send to maximize our session time",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Video,
      title: "Meeting Link",
      description: "You'll get the Zoom/Teams link 24 hours before your call",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Users,
      title: "Expert Consultation",
      description: "Meet with our senior AI strategists to discuss your goals",
      color: "from-orange-500 to-red-500"
    }
  ];

  const whatToBring = [
    "Your current business challenges and goals",
    "Information about your industry and target market",
    "Any existing data or systems you want to optimize",
    "Questions about AI implementation in your business",
    "Your timeline and budget considerations"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Success Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-500 rounded-full mb-6 animate-pulse">
              <CheckCircle className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Appointment Confirmed!
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-2">
              {name ? `Great news, ${name}!` : 'Great news!'} Your AI Strategy Call has been successfully scheduled.
            </p>
            {email && (
              <p className="text-green-400 font-medium">
                Confirmation details sent to: {email}
              </p>
            )}
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Left Column - Next Steps */}
            <div>
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 mb-8">
                <CardHeader>
                  <CardTitle className="text-2xl text-white flex items-center">
                    <Calendar className="h-6 w-6 mr-2 text-green-400" />
                    What Happens Next
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {nextSteps.map((step, index) => {
                      const IconComponent = step.icon;
                      return (
                        <div key={index} className="flex items-start space-x-4">
                          <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${step.color} flex items-center justify-center flex-shrink-0`}>
                            <IconComponent className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-white mb-1">{step.title}</h3>
                            <p className="text-gray-300 text-sm">{step.description}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              {/* What to Prepare */}
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardHeader>
                  <CardTitle className="text-xl text-white flex items-center">
                    <FileText className="h-5 w-5 mr-2 text-blue-400" />
                    Come Prepared
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {whatToBring.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-300 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Call Details & Support */}
            <div>
              {/* Call Details */}
              <Card className="bg-gradient-to-br from-green-900/40 to-emerald-900/40 border-green-400/30 mb-8">
                <CardHeader>
                  <CardTitle className="text-xl text-white flex items-center">
                    <Sparkles className="h-5 w-5 mr-2 text-yellow-400" />
                    Your AI Strategy Session
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Clock className="h-5 w-5 text-green-400" />
                      <span className="text-white">45-60 minutes of focused consultation</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Users className="h-5 w-5 text-green-400" />
                      <span className="text-white">Senior AI strategists and industry experts</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Shield className="h-5 w-5 text-green-400" />
                      <span className="text-white">Confidential discussion of your business</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Zap className="h-5 w-5 text-green-400" />
                      <span className="text-white">Custom AI implementation roadmap</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-green-500/20 rounded-lg border border-green-400/50">
                    <p className="text-green-100 text-sm font-medium">
                      💡 Pro Tip: This consultation typically results in 3-5x ROI within the first quarter of AI implementation.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Support */}
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardHeader>
                  <CardTitle className="text-xl text-white">
                    Need to Reschedule or Have Questions?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">
                    We're here to help make this process as smooth as possible.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Mail className="h-4 w-4 text-blue-400" />
                      <span className="text-white text-sm">contact@liv8ai.com</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="h-4 w-4 text-green-400" />
                      <span className="text-white text-sm">(404) 495-5397</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MessageCircle className="h-4 w-4 text-purple-400" />
                      <span className="text-white text-sm">Live chat available 9 AM - 6 PM EST</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center">
            <Card className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 border-purple-400/30 max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Ready to Transform Your Business with AI?
                </h2>
                <p className="text-gray-300 mb-6">
                  While you wait for your call, explore our portfolio and see how we've helped other businesses succeed.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/portfolio">
                    <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white">
                      View Our Work
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/">
                    <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
                      Return Home
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}