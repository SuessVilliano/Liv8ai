import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";

export default function Blog() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const articles = [
    {
      title: "AI in Manufacturing",
      date: "Nov 8, 2023",
      description: "Discover how AI is revolutionizing production lines and quality control systems.",
      image: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
      alt: "Robotic arms in a modern manufacturing facility with automated assembly lines",
    },
    {
      title: "AI for E-commerce Success",
      date: "Nov 8, 2023", 
      description: "How personalization engines are transforming online shopping experiences.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
      alt: "Person shopping online on laptop with multiple product recommendations displayed",
    },
    {
      title: "Revolutionizing Learning",
      date: "Nov 2, 2023",
      description: "Adaptive learning platforms powered by AI are changing education forever.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
      alt: "Students collaborating around laptops in a modern educational setting",
    },
    {
      title: "Neural Networks in AI", 
      date: "Nov 2, 2023",
      description: "Deep dive into the architecture that powers modern AI applications.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
      alt: "Abstract visualization of neural network connections with glowing nodes and pathways",
    },
  ];

  return (
    <section id="blog" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">AI Spotlight</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay updated with the latest insights, trends, and innovations in artificial intelligence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {articles.map((article, index) => (
            <Card key={index} className="bg-background border-border overflow-hidden card-hover">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={article.image}
                  alt={article.alt}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader className="pb-2">
                <div className="text-sm text-primary font-semibold mb-2">{article.date}</div>
                <CardTitle className="text-lg font-bold">{article.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {article.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            onClick={() => scrollToSection("contact")}
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            View All Articles 
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
