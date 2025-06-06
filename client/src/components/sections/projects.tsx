import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";

export default function Projects() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const projects = [
    {
      title: "Smart City Solutions",
      description: "Integrated AI systems for traffic optimization, energy management, and public safety enhancement across metropolitan areas.",
      image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      alt: "Smart city with interconnected systems and digital infrastructure",
    },
    {
      title: "Energy Efficiency Solutions", 
      description: "AI-powered energy optimization systems reducing consumption by 35% while maintaining optimal performance levels.",
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      alt: "Solar panels and wind turbines in a sustainable energy facility",
    },
    {
      title: "AI in Education",
      description: "Personalized learning platforms using AI to adapt curriculum delivery and improve student engagement by 60%.",
      image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400", 
      alt: "Students using laptops and tablets in a modern technology-enhanced classroom",
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">AI Project Gallery</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our portfolio of successful AI implementations across diverse industries
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-background border-border overflow-hidden card-hover">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.alt}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl font-bold">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>
                <button className="text-primary font-semibold hover:text-primary/80 transition-colors duration-300 flex items-center group">
                  View Case Study 
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            onClick={() => scrollToSection("contact")}
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            View All Projects 
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
