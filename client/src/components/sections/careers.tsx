import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Mail } from "lucide-react";

export default function Careers() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const jobs = [
    {
      title: "Senior AI Engineer",
      type: "Full-time",
      location: "Remote",
      description: "Lead the development of next-generation machine learning models and AI systems.",
      skills: ["Python", "TensorFlow", "PyTorch"],
    },
    {
      title: "Data Scientist",
      type: "Full-time", 
      location: "Hybrid",
      description: "Transform complex data into actionable insights using advanced analytics and ML techniques.",
      skills: ["R/Python", "SQL", "Statistics"],
    },
    {
      title: "AI Product Manager",
      type: "Contract",
      location: "Remote", 
      description: "Drive AI product strategy and work with cross-functional teams to deliver innovative solutions.",
      skills: ["Strategy", "AI/ML", "Leadership"],
    },
  ];

  return (
    <section id="careers" className="bg-card py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Join Our Team</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Build the future of AI with us. We're always looking for talented individuals passionate about innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobs.map((job, index) => (
            <Card key={index} className="bg-background border-border card-hover">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/20">
                    {job.type}
                  </Badge>
                  <div className="text-muted-foreground text-sm">{job.location}</div>
                </div>
                <CardTitle className="text-2xl font-bold">{job.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {job.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {job.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
                <button className="text-primary font-semibold hover:text-primary/80 transition-colors duration-300 flex items-center group">
                  Apply Now 
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">Don't see the perfect role? We're always interested in talking to talented people.</p>
          <Button
            onClick={() => scrollToSection("contact")}
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Get In Touch 
            <Mail className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
