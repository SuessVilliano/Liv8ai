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
    <section className="bg-card py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Methodology</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A proven 3-step approach that ensures successful AI implementation and maximum ROI
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="bg-background border-border text-center card-hover">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-primary-foreground">{step.number}</span>
                  </div>
                  <CardTitle className="text-2xl font-bold">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
              
              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary transform -translate-y-1/2"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
