import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/hooks/use-theme";
import Home from "@/pages/home";
import BookACall from "@/pages/book-a-call";
import BuiltInMinutes from "@/pages/built-in-minutes";
import Portfolio from "@/pages/portfolio";
import Affiliate from "@/pages/affiliate";
import Schedule from "@/pages/schedule";
import ThankYou from "@/pages/thank-you";
import AppointmentConfirmed from "@/pages/appointment-confirmed";
import FormSubmitted from "@/pages/form-submitted";
import ExitPopup from "@/components/exit-popup";
import { useExitPopup } from "@/hooks/use-exit-popup";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/home" component={Home} />
      <Route path="/book-a-call" component={BookACall} />
      <Route path="/built-in-minutes" component={BuiltInMinutes} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/affiliate" component={Affiliate} />
      <Route path="/schedule" component={Schedule} />
      <Route path="/thank-you" component={ThankYou} />
      <Route path="/appointment-confirmed" component={AppointmentConfirmed} />
      <Route path="/form-submitted" component={FormSubmitted} />
    </Switch>
  );
}

function App() {
  const { showPopup, closePopup } = useExitPopup();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark" storageKey="liv8ai-theme">
        <TooltipProvider>
          <Toaster />
          <Router />
          <ExitPopup isOpen={showPopup} onClose={closePopup} />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
