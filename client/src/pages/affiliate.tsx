import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Users, DollarSign, TrendingUp, Star } from "lucide-react";

export default function Affiliate() {
  useEffect(() => {
    // Track affiliate page visit
    if (typeof window !== 'undefined' && window.createPushLapEmail) {
      // Track anonymous visit to affiliate page
      console.log('Affiliate page visited');
    }
  }, []);

  const handleJoinNow = () => {
    // Redirect to PushLap Growth affiliate registration
    window.open('https://liv8.pushlapgrowth.com/login', '_blank');
  };

  const benefits = [
    {
      icon: DollarSign,
      title: "High Commissions",
      description: "Earn up to 50% commission on every successful referral",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: TrendingUp,
      title: "Growing Market",
      description: "AI consulting is exploding - get in on the ground floor",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Users,
      title: "Premium Support",
      description: "Full marketing materials and dedicated affiliate support",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Star,
      title: "Proven Results",
      description: "Join successful affiliates already earning $10K+ monthly",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-purple-50/20 dark:to-purple-950/20">
      {/* Header */}
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 mb-6 animate-pulse">
            <Users className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
            Join the LIV8AI
            <br />
            Affiliate Program
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Partner with the leading AI consulting agency and earn exceptional commissions 
            while helping businesses transform with cutting-edge AI solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              onClick={handleJoinNow}
              className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-8 py-4 text-lg font-semibold"
            >
              Join Now - Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <p className="text-sm text-muted-foreground">
              Free to join • No setup fees • Start earning today
            </p>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <Card key={index} className="border-2 border-border/50 hover:border-primary/50 transition-all duration-300 transform hover:scale-105">
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${benefit.color} mx-auto mb-4 flex items-center justify-center`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-lg font-semibold">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-purple-900/20 via-black/40 to-cyan-900/20 rounded-3xl p-8 border border-purple-400/30 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Earning?
          </h2>
          <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
            Join hundreds of successful affiliates who are already earning substantial commissions 
            by promoting our premium AI consulting services.
          </p>
          <Button 
            size="lg" 
            onClick={handleJoinNow}
            className="bg-gradient-to-r from-cyan-400 to-purple-500 text-black hover:opacity-90 px-8 py-4 text-lg font-semibold"
          >
            Access Affiliate Portal
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}