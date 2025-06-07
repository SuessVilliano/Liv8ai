import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { X, Calendar, ArrowRight } from "lucide-react";

interface ExitPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ExitPopup({ isOpen, onClose }: ExitPopupProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleScheduleCall = () => {
    // Redirect to your call scheduling form
    window.open('https://sqr.co/LIV8DigitalCallForm/', '_blank');
    onClose();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, redirect to call scheduling - you can add form submission logic here
    handleScheduleCall();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md bg-background border-cyan-400/30 shadow-2xl shadow-cyan-500/20">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 relative">
                <div className="absolute inset-0 rounded-full border-2 border-cyan-400 animate-spin [animation-duration:4s]"></div>
                <div className="absolute inset-1 rounded-full border border-cyan-300 animate-spin [animation-duration:3s] [animation-direction:reverse]"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-cyan-400 font-bold text-sm">8</span>
                </div>
              </div>
              <span className="text-xl font-bold">
                LIV<span className="gradient-text">8AI</span>
              </span>
            </div>
          </div>
          <DialogTitle className="text-2xl font-bold text-center mt-4">
            Wait! Don't Miss Out
          </DialogTitle>
          <DialogDescription className="text-center text-muted-foreground">
            Before you go, let's schedule a free AI consultation to discuss how we can transform your business with intelligent solutions.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 mt-6">
          {/* Quick benefits */}
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg p-4 border border-cyan-400/20">
            <h4 className="font-semibold text-cyan-400 mb-2">What you'll get in this free call:</h4>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>• Personalized AI strategy for your business</li>
              <li>• ROI projections and implementation roadmap</li>
              <li>• Industry-specific use case analysis</li>
              <li>• No commitment, just valuable insights</li>
            </ul>
          </div>

          {/* Call to action buttons */}
          <div className="space-y-3">
            <Button
              onClick={handleScheduleCall}
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 pulse-glow"
              size="lg"
            >
              <Calendar className="mr-2 h-4 w-4" />
              Schedule Free Consultation
            </Button>
            
            <Button
              onClick={onClose}
              variant="outline"
              className="w-full border-gray-600 text-gray-400 hover:bg-gray-800"
            >
              Maybe Later
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="text-center pt-4 border-t border-border">
            <p className="text-xs text-muted-foreground">
              ⚡ 30-minute free consultation • 🔒 No spam, ever • 📈 Proven AI solutions
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}