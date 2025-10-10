import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import KeyFeatures from "@/components/KeyFeatures";
import AudienceSection from "@/components/AudienceSection";
import Footer from "@/components/Footer";
import { 
  Wallet, Gift, TrendingUp, 
  BarChart3, Users, Zap,
  Building2, Globe2, Handshake
} from "lucide-react";
import phoneImg from "@assets/stock_images/smartphone_mobile_ap_6c71c2b2.jpg";
import vendingImg from "@assets/stock_images/modern_sleek_vending_800ad9d8.jpg";

export default function LandingPage() {
  const userBenefits = [
    {
      icon: Wallet,
      title: "Instant Rewards",
      description: "Earn USDC instantly with every purchase, no waiting or complicated processes",
    },
    {
      icon: Gift,
      title: "Unique NFT Collection",
      description: "Build a personal collection of evolving NFTs that grow with your journey",
    },
    {
      icon: TrendingUp,
      title: "Passive Income",
      description: "Generate ongoing revenue from the ethical data marketplace",
    },
  ];

  const businessBenefits = [
    {
      icon: BarChart3,
      title: "Increase Revenue",
      description: "Boost sales by 30-40% with gamified rewards that keep customers coming back",
    },
    {
      icon: Users,
      title: "Customer Insights",
      description: "Get real-time analytics on customer preferences and buying patterns",
    },
    {
      icon: Zap,
      title: "Easy Integration",
      description: "Retrofit existing vending machines or deploy new SolVend units effortlessly",
    },
  ];

  const enterpriseBenefits = [
    {
      icon: Building2,
      title: "Brand Engagement",
      description: "Connect with Web3-native consumers and build lasting on-chain relationships",
    },
    {
      icon: Globe2,
      title: "Global Reach",
      description: "Access a worldwide network of SolVend machines and engaged users",
    },
    {
      icon: Handshake,
      title: "Ethical Data Access",
      description: "Get consented, valuable consumer insights while respecting privacy",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <HowItWorks />
      <KeyFeatures />
      
      <AudienceSection
        id="users"
        title="For Users"
        subtitle="Turn every purchase into an opportunity to earn and grow your digital assets"
        benefits={userBenefits}
        ctaText="Join the Waitlist"
        imagePosition="right"
        imageSrc={phoneImg}
      />
      
      <div className="bg-card/30">
        <AudienceSection
          id="businesses"
          title="For Businesses"
          subtitle="Transform your vending machines into revenue-generating smart devices"
          benefits={businessBenefits}
          ctaText="Partner With Us"
          imagePosition="left"
          imageSrc={vendingImg}
        />
      </div>
      
      <AudienceSection
        id="enterprise"
        title="For Brands"
        subtitle="Bridge the gap between traditional retail and Web3 with ethical, on-chain engagement"
        benefits={enterpriseBenefits}
        ctaText="Schedule a Demo"
        imagePosition="right"
      />
      
      <Footer />
    </div>
  );
}
