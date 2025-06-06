import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Target, Lightbulb, Rocket } from "lucide-react";

export default function About() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const features = [
    {
      icon: CheckCircle,
      title: "Expertise",
      description: "Industry-leading AI specialists with proven track records",
    },
    {
      icon: Target,
      title: "Tailored Solutions",
      description: "Custom AI implementations designed for your specific needs",
    },
    {
      icon: Lightbulb,
      title: "Innovation at the Core",
      description: "Cutting-edge technologies and forward-thinking approaches",
    },
    {
      icon: Rocket,
      title: "Results-Driven Approach",
      description: "Measurable outcomes that drive real business value",
    },
  ];

  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            {/* Modern abstract AI visualization */}
            <div className="relative h-96 bg-gradient-to-br from-primary/20 to-primary/10 rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-background/20 to-card/20"></div>
              <div className="absolute top-8 left-8 w-12 h-12 bg-primary rounded-full opacity-60 animate-pulse-slow"></div>
              <div className="absolute top-16 right-12 w-8 h-8 bg-primary/80 rounded-full opacity-40 animate-pulse-slow [animation-delay:1s]"></div>
              <div className="absolute bottom-12 left-12 w-16 h-16 bg-primary/30 rounded-full opacity-50 animate-pulse-slow [animation-delay:2s]"></div>
              <div className="absolute bottom-8 right-8 w-6 h-6 bg-primary/80 rounded-full opacity-70 animate-pulse-slow [animation-delay:0.5s]"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-6xl text-primary/60">
                  <Brain className="h-24 w-24" />
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">About LIV8AI</h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Where we merge cutting-edge AI technology with innovative solutions to transform businesses across industries.
            </p>

            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-6">Why Choose LIV8AI?</h3>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <feature.icon className="h-4 w-4 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{feature.title}</h4>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Learn More About Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Brain({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9C21 10.1 20.1 11 19 11C17.9 11 17 10.1 17 9C17 7.9 17.9 7 19 7C20.1 7 21 7.9 21 9ZM3 9C3 10.1 3.9 11 5 11C6.1 11 7 10.1 7 9C7 7.9 6.1 7 5 7C3.9 7 3 7.9 3 9ZM12 15C13.1 15 14 15.9 14 17C14 18.1 13.1 19 12 19C10.9 19 10 18.1 10 17C10 15.9 10.9 15 12 15ZM17.5 13C18.6 13 19.5 13.9 19.5 15C19.5 16.1 18.6 17 17.5 17C16.4 17 15.5 16.1 15.5 15C15.5 13.9 16.4 13 17.5 13ZM6.5 13C7.6 13 8.5 13.9 8.5 15C8.5 16.1 7.6 17 6.5 17C5.4 17 4.5 16.1 4.5 15C4.5 13.9 5.4 13 6.5 13Z"
        fill="currentColor"
      />
    </svg>
  );
}
