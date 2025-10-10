import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import BuyToEarnEngine from "@/components/BuyToEarnEngine";
import OnboardingSection from "@/components/OnboardingSection";
import EnterpriseSection from "@/components/EnterpriseSection";
import Footer from "@/components/Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <HowItWorks />
      <BuyToEarnEngine />
      <OnboardingSection />
      <EnterpriseSection />
      <Footer />
    </div>
  );
}
