
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight, Calendar, Star, Zap, Clock, Target, Users, Code, Sparkles, Play, MessageCircle } from "lucide-react";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { Link } from "wouter";

declare global {
  interface Window {
    createPushLapEmail: any;
  }
}

export default function BuiltInMinutes() {
  useEffect(() => {
    // Track page visit for affiliate system
    console.log('Built in Minutes page visited - affiliate tracking active');
  }, []);

  const handleBookCall = () => {
    // Redirect to our funnel instead of external form
    window.location.href = '/book-a-call';
  };



  const pricingPlans = [
    {
      name: "Strategy Only",
      price: "$197",
      description: "30-min deep dive call + game plan + referrals",
      features: [
        "Creative consultation call",
        "Strategic roadmap & plan",
        "Tech stack recommendations",
        "Resource referrals",
        "Follow-up documentation"
      ],
      popular: false
    },
    {
      name: "Done-With-You Build",
      price: "$997",
      description: "Strategy call + live AI build + automations",
      features: [
        "Everything in Strategy",
        "Live building session",
        "Real-time implementation",
        "AI automation setup",
        "3-7 day post-call support",
        "Complete system handover"
      ],
      popular: true
    },
    {
      name: "Custom Systems",
      price: "Custom",
      description: "Full-stack builds for complex requirements",
      features: [
        "Everything in Done-With-You",
        "Multi-platform integration",
        "Advanced automation",
        "Brand & design assets",
        "Complete documentation",
        "Ongoing support options"
      ],
      popular: false
    }
  ];

  const processSteps = [
    {
      number: "1",
      title: "You Talk",
      description: "Book a call. Share your idea, brand, or goal. We listen, understand, and map out the fastest path forward.",
      icon: Users
    },
    {
      number: "2", 
      title: "We Build",
      description: "If it's simple, we'll do it live on the call. If it's complex, our AI agents go to work—often within 24 hours.",
      icon: Code
    },
    {
      number: "3",
      title: "You Own It",
      description: "You walk away with the working version of your platform, system, brand or funnel—plus docs, automation, and growth systems.",
      icon: Target
    }
  ];

  const testimonials = [
    {
      quote: "This is exactly what I needed. No 8-week proposals, no bloated agency fees. Just straight execution that actually works.",
      author: "Sarah M.",
      role: "Creative Director",
      rating: 5
    },
    {
      quote: "We went from idea to fully functional system in one call. I've never experienced anything like this level of immediate value.",
      author: "Marcus T.",
      role: "Startup Founder", 
      rating: 5
    },
    {
      quote: "Finally found someone who speaks entrepreneur. Built what I needed without the typical agency runaround.",
      author: "Jessica R.",
      role: "Coach & Consultant",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero-gradient pt-20 pb-16 relative overflow-hidden min-h-screen flex items-center dark:bg-gradient-to-br dark:from-gray-900 dark:via-blue-900 dark:to-purple-900">
        <div className="absolute inset-0 circuit-pattern opacity-20 dark:opacity-20 light:opacity-10"></div>
        
        {/* Animated floating code elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-cyan-400 rounded-full pulse-glow animate-bounce [animation-delay:0s]"></div>
          <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-cyan-300 rounded-full pulse-glow animate-bounce [animation-delay:1s]"></div>
          <div className="absolute bottom-1/3 left-1/3 w-5 h-5 bg-cyan-500 rounded-full pulse-glow animate-bounce [animation-delay:2s]"></div>
          <div className="absolute top-2/3 right-1/3 w-2 h-2 bg-cyan-200 rounded-full pulse-glow animate-bounce [animation-delay:0.5s]"></div>
        </div>

        <div className="relative w-full max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <div className="mb-6">
            <Badge className="bg-cyan-400/20 text-cyan-400 border-cyan-400/30 px-4 py-2 text-sm font-semibold">
              Built in Minutes
            </Badge>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in-up leading-tight">
            Ready to Stop
            <br />
            <span className="gradient-text">Waiting?</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 max-w-2xl mx-auto leading-relaxed animate-fade-in-up [animation-delay:0.2s]">
            This is the last time you downplay your power.
          </p>
          
          <p className="text-sm sm:text-base text-gray-400 mb-8 max-w-xl mx-auto animate-fade-in-up [animation-delay:0.3s] leading-relaxed">
            You create in minutes. You automate what others complicate. You're not here to blend in—you're here to build what frees you.
          </p>
          
          <div className="flex flex-col gap-4 items-center animate-fade-in-up [animation-delay:0.4s]">
            <Button
              onClick={handleBookCall}
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 text-base font-semibold pulse-glow w-full max-w-sm"
            >
              Book Your Creative Makeover Call Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              onClick={() => document.getElementById('ai-chat')?.scrollIntoView({ behavior: 'smooth' })}
              variant="outline"
              size="lg"
              className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-background px-6 py-3 text-base font-semibold w-full max-w-sm"
            >
              Start AI Conversation
              <MessageCircle className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="mt-6 text-gray-400 animate-fade-in-up [animation-delay:0.6s]">
            <p className="text-xs sm:text-sm max-w-lg mx-auto">Join the creative revolution. Your vision deserves the right hands.</p>
          </div>

          {/* YouTube Video */}
          <div className="mt-12 animate-fade-in-up [animation-delay:0.8s]">
            <div className="max-w-4xl mx-auto">
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-cyan-400/20">
                <iframe
                  src="https://www.youtube.com/embed/msamk5o3UrM?si=t8t0VB14FTFlHYFY"
                  title="LIV8AI - Built in Minutes"
                  className="absolute inset-0 w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16 bg-card">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">You're Not Crazy.</h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              You just haven't packaged your genius the right way.
            </p>
          </div>

          <div className="space-y-12">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-6 text-red-400 text-center">The Truth About Why You're Stuck:</h3>
              <div className="space-y-4 max-w-2xl mx-auto">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <span className="text-white text-xs">✕</span>
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold mb-1">You're brilliant but broke</h4>
                    <p className="text-sm sm:text-base text-muted-foreground">Amazing ideas, zero execution support</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <span className="text-white text-xs">✕</span>
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold mb-1">Agencies want 8-week proposals</h4>
                    <p className="text-sm sm:text-base text-muted-foreground">While your vision dies in meeting rooms</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <span className="text-white text-xs">✕</span>
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold mb-1">Freelancers disappear mid-project</h4>
                    <p className="text-sm sm:text-base text-muted-foreground">Leaving you with half-built dreams</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-2xl p-6 sm:p-8 text-center max-w-2xl mx-auto">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-cyan-400">I'm That Someone.</h3>
              <div className="space-y-3 sm:space-y-4 text-sm sm:text-base">
                <p>You don't need a team. You need a trigger.</p>
                <p>Someone who sees the system behind your ideas.</p>
                <p>Someone who helps you build in minutes—what you've dreamed for years.</p>
              </div>
              <Button
                onClick={handleBookCall}
                className="mt-4 sm:mt-6 bg-cyan-400 text-black hover:bg-cyan-300 px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-semibold w-full max-w-xs"
              >
                Let's Make Your Business Make Sense Again
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-8">This Is For You If...</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Founders tired of 'almost' launching",
                description: "You have the vision, you just need someone who can execute without the runaround"
              },
              {
                icon: Users,
                title: "Creators with vision but no tech team",
                description: "Your ideas are solid, you just need the right hands to bring them to life"
              },
              {
                icon: Zap,
                title: "Coaches wanting client flows",
                description: "That don't require manual work and actually convert prospects into paying clients"
              },
              {
                icon: Code,
                title: "Agencies wanting better delivery",
                description: "Show clients real results instead of endless proposals and scope creep"
              },
              {
                icon: Clock,
                title: "Side hustlers ready to level up",
                description: "From hobby to real business with systems that actually work"
              },
              {
                icon: Sparkles,
                title: "Anyone who's tired of waiting",
                description: "For the 'perfect moment' or the 'right resources' to start building"
              }
            ].map((item, index) => (
              <Card key={index} className="bg-background border-border card-hover text-center group">
                <CardHeader>
                  <div className="w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="h-10 w-10 text-cyan-400" />
                  </div>
                  <CardTitle className="text-xl font-bold group-hover:text-cyan-400 transition-colors duration-300">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* The Process */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-8">The Process</h2>
            <p className="text-2xl text-muted-foreground">From consultation to creation—here's how we make magic happen</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {processSteps.map((step, index) => (
              <div key={index} className="relative text-center">
                <Card className="bg-background border-border card-hover group">
                  <CardHeader>
                    <div className="w-24 h-24 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <step.icon className="h-12 w-12 text-cyan-400" />
                    </div>
                    <div className="w-16 h-16 bg-cyan-400 rounded-full flex items-center justify-center mx-auto mb-6 pulse-glow">
                      <span className="text-3xl font-bold text-black">{step.number}</span>
                    </div>
                    <CardTitle className="text-3xl font-bold group-hover:text-cyan-400 transition-colors duration-300">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-lg leading-relaxed">{step.description}</p>
                  </CardContent>
                </Card>
                
                {/* Connection arrow */}
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-6 w-12 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 transform -translate-y-1/2 animate-pulse">
                    <ArrowRight className="absolute -right-2 -top-2 h-5 w-5 text-cyan-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Don't Need */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-8">What You Don't Need</h2>
            <p className="text-2xl text-muted-foreground">We build in minutes what others drag out for months</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-red-900/20 border-red-500/30 p-8">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-red-400 text-center mb-8">The Old Way</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center text-muted-foreground text-lg">❌ Bloated design agencies</div>
                <div className="text-center text-muted-foreground text-lg">❌ 8-week proposals</div>
                <div className="text-center text-muted-foreground text-lg">❌ Disappearing freelancers</div>
                <div className="text-center text-muted-foreground text-lg">❌ Overpriced SaaS tools</div>
                <div className="text-center text-muted-foreground text-lg">❌ Dev teams you can't afford</div>
              </CardContent>
            </Card>

            <Card className="bg-green-900/20 border-green-500/30 p-8">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-green-400 text-center mb-8">The New Way</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center text-green-400 text-lg">✅ No fluff. No agency. Just vision made real.</div>
                <div className="text-center text-green-400 text-lg">✅ Done in minutes. Owned for life.</div>
                <div className="text-center text-green-400 text-lg">✅ AI-powered rapid execution</div>
                <div className="text-center text-green-400 text-lg">✅ Complete system ownership</div>
                <div className="text-center text-green-400 text-lg">✅ No dependencies, no subscriptions</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-8">Investment Options</h2>
            <p className="text-2xl text-muted-foreground">Choose the level of support that matches your vision</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`bg-background border-border relative group card-hover ${plan.popular ? 'ring-2 ring-cyan-400 scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-cyan-400 text-black px-8 py-2 font-bold text-lg">Most Popular</Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-3xl font-bold mb-2">{plan.name}</CardTitle>
                  <p className="text-muted-foreground text-lg mb-6">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-cyan-400">{plan.price}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="h-6 w-6 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-lg">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    onClick={handleBookCall}
                    className={`w-full text-lg py-6 ${plan.popular ? 'bg-cyan-400 text-black hover:bg-cyan-300' : 'bg-primary text-primary-foreground hover:bg-primary/90'}`}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-8">What People Are Saying</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-background border-border card-hover">
                <CardContent className="p-8">
                  <div className="flex text-yellow-400 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic text-lg leading-relaxed mb-6">"{testimonial.quote}"</p>
                  <div>
                    <div className="font-semibold text-lg">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-cyan-900/50 to-purple-900/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">Ready to Stop Waiting?</h2>
          <p className="text-2xl text-gray-300 mb-8">
            This is the last time you downplay your power.
          </p>
          <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            You create in minutes. You automate what others complicate. You're not here to blend in—you're here to build what frees you.
          </p>
          
          <Button
            onClick={handleBookCall}
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-12 py-6 text-2xl font-semibold pulse-glow"
          >
            Book Your Creative Makeover Call Now
            <ArrowRight className="ml-3 h-7 w-7" />
          </Button>

          <div className="mt-8 text-gray-400">
            <p className="text-lg">Join the creative revolution. Your vision deserves the right hands.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background py-12 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-12 relative mr-4">
                <div className="absolute inset-0 rounded-full border-2 border-cyan-400 animate-spin [animation-duration:8s]"></div>
                <div className="absolute inset-1 rounded-full border border-cyan-300 animate-spin [animation-duration:6s] [animation-direction:reverse]"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-cyan-400 font-bold text-lg">8</span>
                </div>
              </div>
              <span className="text-4xl font-bold">
                LIV<span className="gradient-text">8AI</span>
              </span>
            </div>
            <p className="text-muted-foreground text-lg mb-4">
              Built in Minutes - Where vision meets execution
            </p>
            <p className="text-muted-foreground">
              &copy; 2025 LIV8AI. All Rights Reserved. Built to Elevate You.
            </p>
          </div>
        </div>
      </footer>

      {/* AI Chat Section */}
      <section id="ai-chat" className="py-20 bg-gradient-to-br from-purple-900/20 to-cyan-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 px-4">Let's Build Your Solution</h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
              Talk to our AI business consultant. Tell us your challenges and we'll capture your requirements to build your solution instantly.
            </p>
          </div>
          
          <div className="flex justify-center">
            <iframe 
              src="https://staff.liv8ai.com/_embed/69FW9UC82RB?d=deployment-61a58b78-6740-4bd6-b590-fdb20d625253" 
              style={{
                width: "100%", 
                height: "500px", 
                maxWidth: "700px", 
                borderRadius: "4px"
              }} 
              frameBorder="0"
              title="AI Business Consultant"
            />
          </div>
          
          <div className="text-center mt-8">
            <p className="text-sm text-muted-foreground px-4">
              This AI consultant captures your business requirements and automatically generates solutions for instant implementation.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}