import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, MessageSquare, Eye, Settings } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Brain,
      title: "Machine Learning",
      description: "Development of algorithms and statistical models that learn from data to make intelligent predictions and decisions.",
    },
    {
      icon: MessageSquare,
      title: "Natural Language Processing",
      description: "Transforming language understanding for smarter data insights, automated communication, and enhanced user interactions.",
    },
    {
      icon: Eye,
      title: "Computer Vision",
      description: "Empowering machines to interpret and understand visual data, enabling automated analysis and intelligent visual processing.",
    },
    {
      icon: Settings,
      title: "AI Integration",
      description: "Seamlessly integrating AI solutions into existing systems to enable smarter decision-making across all industries.",
    },
  ];

  return (
    <section id="services" className="bg-card py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Cutting-edge AI solutions tailored to transform your business operations and drive measurable results
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="card-hover bg-background border-border">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl font-bold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
