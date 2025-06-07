import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Methodology() {
  const steps = [
    {
      number: "1",
      title: "Discover & Consultation",
      description: "Deep dive into your business challenges, data landscape, and objectives to identify optimal AI opportunities.",
    },
    {
      number: "2", 
      title: "Solution Design",
      description: "Custom AI architecture development with scalable solutions tailored to your specific requirements and infrastructure.",
    },
    {
      number: "3",
      title: "Testing & Deployment", 
      description: "Rigorous testing, seamless integration, and ongoing support to ensure optimal performance and continuous improvement.",
    },
  ];

  return (
    <section className="bg-card py-20 relative overflow-hidden">
      {/* Background circuit pattern */}
      <div className="absolute inset-0 circuit-pattern opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Methodology</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A proven 3-step approach that ensures successful AI implementation and maximum ROI
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="bg-background border-border text-center card-hover group">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6 pulse-glow group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-bold text-cyan-400">{step.number}</span>
                  </div>
                  <CardTitle className="text-2xl font-bold group-hover:text-cyan-400 transition-colors duration-300">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
                
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Card>
              
              {/* Animated connection line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 transform -translate-y-1/2 animate-pulse"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
