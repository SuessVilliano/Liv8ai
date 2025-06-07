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
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
      alt: "Futuristic robotic arms and AI systems working in automated manufacturing facility",
    },
    {
      title: "Deep Learning Breakthroughs",
      date: "Nov 8, 2023", 
      description: "How advanced neural networks are achieving human-level performance in complex tasks.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
      alt: "Abstract visualization of neural network connections with glowing nodes and pathways",
    },
    {
      title: "Computer Vision Revolution",
      date: "Nov 2, 2023",
      description: "Advanced AI vision systems enabling machines to see and understand like humans.",
      image: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
      alt: "Futuristic computer vision interface with AI analyzing visual data",
    },
    {
      title: "Future of AI Interfaces", 
      date: "Nov 2, 2023",
      description: "Next-generation human-AI interaction through intuitive and intelligent interfaces.",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
      alt: "Holographic AI interface display showing futuristic data visualization",
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
            onClick={() => window.open('https://sqr.co/LIV8DigitalCallForm/', '_blank')}
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            Get AI Insights for Your Business 
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
