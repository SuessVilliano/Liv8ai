import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Calendar, ArrowRight } from "lucide-react";
import { Link, useLocation } from "wouter";

declare global {
  interface Window {
    createPushLapEmail: any;
  }
}

export default function FormSubmitted() {
  const [, navigate] = useLocation();

  useEffect(() => {
    // Track form submission for affiliate system
    const urlParams = new URLSearchParams(window.location.search);
    const email = urlParams.get('email');
    const name = urlParams.get('name');

    if (email && window.createPushLapEmail) {
      window.createPushLapEmail(email, name || '');
    }

    // Store email in localStorage for next step
    if (email) {
      localStorage.setItem('affiliate_email', email);
      localStorage.setItem('affiliate_name', name || '');
    }

    // Auto-redirect to schedule page after 3 seconds
    const timer = setTimeout(() => {
      navigate('/schedule');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-green-50/20 dark:to-green-950/20 flex items-center justify-center">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <Card className="border-2 border-green-200 dark:border-green-800 shadow-2xl">
            <CardHeader className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 mb-6 mx-auto animate-bounce">
                <CheckCircle className="h-10 w-10 text-white" />
              </div>
              <CardTitle className="text-3xl font-bold mb-4 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Form Submitted Successfully!
              </CardTitle>
              <p className="text-muted-foreground text-lg">
                Thank you for your interest in our AI consulting services. 
                We're redirecting you to schedule your strategy call.
              </p>
            </CardHeader>
            <CardContent className="text-center">
              <div className="mb-8">
                <div className="flex items-center justify-center mb-4">
                  <div className="flex items-center text-green-600">
                    <div className="w-4 h-4 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                    Redirecting to scheduling page...
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                  <div className="bg-green-500 h-2 rounded-full animate-pulse" style={{ width: "100%" }}></div>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  You'll be automatically redirected in a few seconds, or click below to continue:
                </p>
                <Link href="/schedule">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-8 py-4 text-lg font-semibold"
                  >
                    Schedule Your Call Now
                    <Calendar className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>

              <div className="mt-8 p-4 bg-muted/50 rounded-lg">
                <h3 className="font-semibold mb-2 text-sm">Next Step:</h3>
                <p className="text-xs text-muted-foreground">
                  Select a convenient time for your 30-minute AI strategy consultation. 
                  Our experts will assess your business needs and provide actionable insights.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}