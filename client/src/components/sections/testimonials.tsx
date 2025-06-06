import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Partnering with LIV8AI was a game-changer for our operations. Their machine learning solutions increased our efficiency by 40% within the first quarter.",
      author: "Joan Wallace",
      title: "CEO, TechCorp Industries",
      initials: "JW",
    },
    {
      quote: "The AI integration was seamless and the results were immediate. We've seen a 50% reduction in processing time and significantly improved accuracy.",
      author: "Michael Chen", 
      title: "CTO, DataFlow Systems",
      initials: "MC",
    },
    {
      quote: "LIV8AI's computer vision solution revolutionized our quality control process. The accuracy and speed improvements have been phenomenal.",
      author: "Sarah Rodriguez",
      title: "Director, Innovation Labs", 
      initials: "SR",
    },
  ];

  return (
    <section className="bg-card py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">What Our Clients Say</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real results and testimonials from businesses transformed by our AI solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-background border-border card-hover">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                    <span className="text-primary-foreground font-semibold">{testimonial.initials}</span>
                  </div>
                  <div>
                    <h4 className="font-bold">{testimonial.author}</h4>
                    <p className="text-muted-foreground text-sm">{testimonial.title}</p>
                  </div>
                </div>
                <p className="text-muted-foreground italic leading-relaxed mb-4">
                  "{testimonial.quote}"
                </p>
                <div className="flex text-primary">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
