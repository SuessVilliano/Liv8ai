import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import BookACall from "@/pages/book-a-call";
import ExitPopup from "@/components/exit-popup";
import { useExitPopup } from "@/hooks/use-exit-popup";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/home" component={Home} />
      <Route path="/book-a-call" component={BookACall} />
    </Switch>
  );
}

function App() {
  const { showPopup, closePopup } = useExitPopup();

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
        <ExitPopup isOpen={showPopup} onClose={closePopup} />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
