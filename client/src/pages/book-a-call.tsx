import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight, Calendar, Star, Users, Zap, Target, Shield } from "lucide-react";
import LandingNavbar from "@/components/layout/landing-navbar";

export default function BookACall() {
  const handleBookCall = () => {
    window.open('https://sqr.co/LIV8DigitalCallForm/', '_blank');
  };

  const plans = [
    {
      name: "Launch",
      target: "New businesses or side hustlers",
      price: "$297",
      period: "/mo",
      features: [
        "Pre-built systems setup",
        "1 conversion funnel",
        "3 core automations",
        "Branded dashboard",
        "Basic support"
      ],
      popular: false
    },
    {
      name: "Elevate",
      target: "Agencies & coaches ready to grow",
      price: "$997",
      period: "/mo",
      features: [
        "Full GHL system implementation",
        "Branded client portal",
        "Managed AI support chat",
        "Advanced automations",
        "Content flow management",
        "Priority support"
      ],
      popular: true
    },
    {
      name: "Scale",
      target: "6-7 figure businesses & white-label partners",
      price: "$1997",
      period: "/mo+",
      features: [
        "Everything in Elevate",
        "Full client support management",
        "Advanced AI integration",
        "Dedicated sales closers",
        "VA systems management",
        "White-label partnership"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      quote: "Liv8AI took our messy backend and turned it into a profit machine. My support tickets dropped 80%, and I finally had time to close deals again.",
      author: "Trey M.",
      role: "Agency Owner",
      rating: 5
    },
    {
      quote: "We went from overwhelmed to optimized in 10 days. I've had VAs before — but nothing like this.",
      author: "Sarah J.",
      role: "Business Coach",
      rating: 5
    },
    {
      quote: "I resell their setup to my clients — I look like a genius, and they handle everything.",
      author: "Michael R.",
      role: "SaaS White-Labeler",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "Is this just GoHighLevel white-label?",
      answer: "That's the foundation — but our service includes custom setup, support systems, AI bots, and management services. You're not buying software. You're buying results."
    },
    {
      question: "Can I resell your systems?",
      answer: "Yes — our Elevate and Scale plans are fully white-labeled. Use your own brand. We'll do the backend."
    },
    {
      question: "What if I already use GHL or another CRM?",
      answer: "Perfect. We can build around it or migrate your workflows into a unified dashboard."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <LandingNavbar />
      {/* Hero Section */}
      <section className="hero-gradient pt-20 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 circuit-pattern opacity-20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="mb-6">
            <Badge className="bg-cyan-400/20 text-cyan-400 border-cyan-400/30 px-6 py-2 text-lg">
              Built to Elevate You
            </Badge>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in-up">
            Where Business Meets
            <span className="gradient-text block mt-2">Intelligence</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            We help agencies, entrepreneurs, and startups implement done-for-you AI, automation, and backend support systems to scale fast.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-12 text-lg">
            <div className="flex items-center text-cyan-400">
              <Check className="h-6 w-6 mr-2" />
              White-Label Tech Infrastructure
            </div>
            <div className="flex items-center text-cyan-400">
              <Check className="h-6 w-6 mr-2" />
              Automated Systems & AI Workflows
            </div>
            <div className="flex items-center text-cyan-400">
              <Check className="h-6 w-6 mr-2" />
              Scalable Support-as-a-Service
            </div>
          </div>
          
          <Button
            onClick={handleBookCall}
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-12 py-6 text-xl font-semibold pulse-glow"
          >
            Get a Free Strategy Call
            <Calendar className="ml-3 h-6 w-6" />
          </Button>
        </div>
      </section>

      {/* Why Liv8AI Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Liv8AI?</h2>
            <p className="text-2xl text-muted-foreground mb-8">
              You don't need more software. You need the systems that run your business.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-red-400">We've seen it firsthand:</h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <span className="text-white text-xs">✕</span>
                  </div>
                  <p className="text-lg">Agencies drowning in support tickets</p>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <span className="text-white text-xs">✕</span>
                  </div>
                  <p className="text-lg">Coaches burning out trying to automate workflows</p>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <span className="text-white text-xs">✕</span>
                  </div>
                  <p className="text-lg">Founders stuck in setup hell with no results</p>
                </div>
              </div>
              <div className="text-3xl font-bold text-cyan-400 mb-4">We solve that.</div>
            </div>

            <div className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">At Liv8AI, we don't just consult — we build, implement, and run the backend for you:</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Zap className="h-5 w-5 text-cyan-400 mr-3" />
                  <span>CRMs, Funnels, Automations (GoHighLevel, VBout, TaskMagic)</span>
                </div>
                <div className="flex items-center">
                  <Zap className="h-5 w-5 text-cyan-400 mr-3" />
                  <span>AI chat & email support (white-labeled or managed)</span>
                </div>
                <div className="flex items-center">
                  <Zap className="h-5 w-5 text-cyan-400 mr-3" />
                  <span>Sales systems, lead gen flows, appointment automation</span>
                </div>
                <div className="flex items-center">
                  <Zap className="h-5 w-5 text-cyan-400 mr-3" />
                  <span>Custom portals, workflows, and templates</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Help Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Who We Help</h2>
            <p className="text-xl text-muted-foreground">You're a fit if you're a...</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Target,
                title: "Digital Agency",
                description: "Trying to scale without hiring a full ops team"
              },
              {
                icon: Users,
                title: "Coach/Consultant",
                description: "Who needs more automation & fewer headaches"
              },
              {
                icon: Zap,
                title: "Startup Founder",
                description: "Who wants to launch fast with done-for-you support"
              },
              {
                icon: Shield,
                title: "White-label Reseller",
                description: "Who wants your own backend & brand"
              }
            ].map((item, index) => (
              <Card key={index} className="bg-background border-border card-hover text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-8 w-8 text-cyan-400" />
                  </div>
                  <CardTitle className="text-xl font-bold">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">The Liv8AI Engine</h2>
            <p className="text-2xl text-muted-foreground">"Operations as a Service"</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card key={index} className={`bg-background border-border relative ${plan.popular ? 'ring-2 ring-cyan-400 scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-cyan-400 text-black px-6 py-1 font-semibold">Most Popular</Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-2">
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <p className="text-muted-foreground text-sm mb-4">{plan.target}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-muted-foreground ml-1">{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="h-5 w-5 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    onClick={handleBookCall}
                    className={`w-full ${plan.popular ? 'bg-cyan-400 text-black hover:bg-cyan-300' : 'bg-primary text-primary-foreground hover:bg-primary/90'}`}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">What Makes Us Different?</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-red-900/20 border-red-500/30">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-red-400 text-center">Others Talk</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center text-muted-foreground">Strategy sessions</div>
                <div className="text-center text-muted-foreground">Hourly consultants</div>
                <div className="text-center text-muted-foreground">AI fluff</div>
                <div className="text-center text-muted-foreground">Advice</div>
              </CardContent>
            </Card>

            <Card className="bg-green-900/20 border-green-500/30">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-green-400 text-center">We Execute</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center text-green-400">Plug-and-play systems</div>
                <div className="text-center text-green-400">Monthly white-label packages</div>
                <div className="text-center text-green-400">Actual workflow bots that close deals</div>
                <div className="text-center text-green-400">Done-for-you, branded operations</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Proof in Action</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-background border-border">
                <CardContent className="p-6">
                  <div className="flex text-yellow-400 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">"{testimonial.quote}"</p>
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-900/50 to-purple-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Book Your Free Strategy Call</h2>
          <p className="text-xl text-gray-300 mb-12">
            Let's build your backend together. You bring the vision — we bring the system.
          </p>
          
          <Button
            onClick={handleBookCall}
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-12 py-6 text-xl font-semibold pulse-glow"
          >
            Book My Strategy Call Now
            <ArrowRight className="ml-3 h-6 w-6" />
          </Button>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="bg-background border-border">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-20 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl p-8 border border-green-500/30">
            <Shield className="h-16 w-16 text-green-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">100% Satisfaction Guarantee</h2>
            <p className="text-lg text-muted-foreground">
              We don't believe in half-baked tech. If you're not seeing clear progress and real results in your first 30 days, we'll rebuild your system or refund your setup fee — no questions asked.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background py-12 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 relative mr-3">
                  <div className="absolute inset-0 rounded-full border-2 border-cyan-400 animate-spin [animation-duration:8s]"></div>
                  <div className="absolute inset-1 rounded-full border border-cyan-300 animate-spin [animation-duration:6s] [animation-direction:reverse]"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-cyan-400 font-bold">8</span>
                  </div>
                </div>
                <span className="text-3xl font-bold">
                  LIV<span className="gradient-text">8AI</span>
                </span>
              </div>
              <p className="text-muted-foreground mb-6 text-lg leading-relaxed max-w-md">
                Built to Elevate You - Transforming businesses with intelligent AI solutions and automated operations.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-3">
                <li className="text-muted-foreground">AI Automation</li>
                <li className="text-muted-foreground">Backend Operations</li>
                <li className="text-muted-foreground">White-label Solutions</li>
                <li className="text-muted-foreground">Support Systems</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-3">
                <li>
                  <Button
                    onClick={handleBookCall}
                    variant="ghost"
                    className="p-0 h-auto text-muted-foreground hover:text-primary"
                  >
                    Book Strategy Call
                  </Button>
                </li>
                <li className="text-muted-foreground">San Francisco, CA</li>
                <li className="text-muted-foreground">contact@liv8ai.com</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-8 mt-8 text-center">
            <p className="text-muted-foreground">
              &copy; 2025 LIV8AI. All Rights Reserved. Built to Elevate You.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}