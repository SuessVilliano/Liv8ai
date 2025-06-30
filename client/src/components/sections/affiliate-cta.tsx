import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, DollarSign, TrendingUp, Users, Star, Target } from "lucide-react";
import { Link } from "wouter";

export default function AffiliateCTA() {
  const stats = [
    {
      icon: DollarSign,
      number: "50%",
      label: "Commission Rate",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: TrendingUp,
      number: "$10K+",
      label: "Top Earners Monthly",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Users,
      number: "200+",
      label: "Active Affiliates",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Target,
      number: "85%",
      label: "Conversion Rate",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50/50 via-background to-cyan-50/50 dark:from-purple-950/50 dark:via-background dark:to-cyan-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 mb-6 animate-pulse">
            <Users className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
            Join Our Partner Network
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Earn exceptional commissions promoting the leading AI consulting services. 
            Perfect for agencies, coaches, and tech professionals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card key={index} className="border-2 border-border/50 hover:border-primary/50 transition-all duration-300 transform hover:scale-105">
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${stat.color} mx-auto mb-4 flex items-center justify-center`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-3xl font-bold text-primary">{stat.number}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground font-medium">
                    {stat.label}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Why Partner With Us */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold mb-6">Why Partner With LIV8AI?</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <Star className="h-3 w-3 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">High-Converting Services</h4>
                  <p className="text-muted-foreground text-sm">AI consulting has 85% conversion rate with proven ROI</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <Star className="h-3 w-3 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Premium Commission Structure</h4>
                  <p className="text-muted-foreground text-sm">Up to 50% commissions on all successful referrals</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <Star className="h-3 w-3 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Full Marketing Support</h4>
                  <p className="text-muted-foreground text-sm">Complete marketing materials and dedicated support team</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <Star className="h-3 w-3 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Growing Market</h4>
                  <p className="text-muted-foreground text-sm">AI consulting market expanding 40% annually</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-900/20 via-black/40 to-cyan-900/20 rounded-3xl p-8 border border-purple-400/30">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Start Earning?</h3>
              <p className="text-purple-100 mb-6">
                Join successful affiliates already earning substantial monthly commissions 
                by promoting our premium AI consulting services.
              </p>
              <div className="space-y-4">
                <Link href="/affiliate">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-cyan-400 to-purple-500 text-black hover:opacity-90 px-8 py-4 text-lg font-semibold w-full"
                  >
                    Join Affiliate Program
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <p className="text-xs text-purple-200">
                  Free to join • No setup fees • Start earning today
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Perfect For */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-8">Perfect For:</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Digital Agencies",
              "Business Coaches", 
              "Tech Consultants",
              "Marketing Professionals",
              "Sales Teams",
              "Industry Experts"
            ].map((audience, index) => (
              <div key={index} className="bg-muted/50 px-4 py-2 rounded-full text-sm font-medium">
                {audience}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}