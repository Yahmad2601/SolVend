import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import LandingPage from "@/pages/LandingPage";
import NotFound from "@/pages/not-found";
// UPDATE: Imported the new DataMarketplace page.
import DataMarketplace from "@/pages/DataMarketplace";

function Router() {
  return (
    <Switch>
      <Route path="/" component={LandingPage} />
      {/* UPDATE: Added the new route for the Data Marketplace page. */}
      <Route path="/data-marketplace" component={DataMarketplace} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
