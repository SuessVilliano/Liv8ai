import { lazy, Suspense } from "react";
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
import Support from "@/pages/support";
import Affiliate from "@/pages/affiliate";
import Schedule from "@/pages/schedule";
import ThankYou from "@/pages/thank-you";
import AppointmentConfirmed from "@/pages/appointment-confirmed";
import FormSubmitted from "@/pages/form-submitted";
import ExitPopup from "@/components/exit-popup";
import { useExitPopup } from "@/hooks/use-exit-popup";


const Editorial = lazy(() => import('@/pages/editorial'));
const Launchpad = lazy(() => import('@/pages/launchpad'));
const lpPage = (name: 'Onboarding'|'Login'|'Workspace'|'Library'|'Community'|'LevelUp'|'Privacy') => lazy(() => import('@/pages/launchpad').then(m=>({default:m[name]})));
const LPOnboarding=lpPage('Onboarding'), LPLogin=lpPage('Login'), LPWorkspace=lpPage('Workspace'), LPLibrary=lpPage('Library'), LPCommunity=lpPage('Community'), LPLevelUp=lpPage('LevelUp'), LPPrivacy=lpPage('Privacy');

function Router() {
  return (
    <Suspense fallback={<div role="status" className="p-8">Loading LIV8 AI…</div>}><Switch>
      <Route path="/launchpad" component={Launchpad} />
      <Route path="/launchpad/editorial" component={Editorial} />
      <Route path="/launchpad/onboarding" component={LPOnboarding} />
      <Route path="/launchpad/login" component={LPLogin} />
      <Route path="/launchpad/workspace" component={LPWorkspace} />
      <Route path="/launchpad/library" component={LPLibrary} />
      <Route path="/launchpad/community" component={LPCommunity} />
      <Route path="/launchpad/levelup-2026" component={LPLevelUp} />
      <Route path="/launchpad/privacy" component={LPPrivacy} />
      <Route path="/" component={Home} />
      <Route path="/home" component={Home} />
      <Route path="/book-a-call" component={BookACall} />
      <Route path="/built-in-minutes" component={BuiltInMinutes} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/support" component={Support} />
      <Route path="/affiliate" component={Affiliate} />
      <Route path="/schedule" component={Schedule} />
      <Route path="/thank-you" component={ThankYou} />
      <Route path="/appointment-confirmed" component={AppointmentConfirmed} />
      <Route path="/form-submitted" component={FormSubmitted} />
    </Switch></Suspense>
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
