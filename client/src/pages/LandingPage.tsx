import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WhatWeDo from "@/components/WhatWeDo";
import HowItWorks from "@/components/HowItWorks";
import BuyToEarnEngine from "@/components/BuyToEarnEngine";
import OnboardingSection from "@/components/OnboardingSection";
import EnterpriseSection from "@/components/EnterpriseSection";
import Footer from "@/components/Footer";

export default function LandingPage() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const initialTheme = savedTheme ? savedTheme === "dark" : prefersDark;

    setIsDark(initialTheme);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Header isDark={isDark} setIsDark={setIsDark} />
      <main>
        <HeroSection />
        <WhatWeDo />
        <HowItWorks />
        {/* <BuyToEarnEngine /> */}
        <OnboardingSection />
        <EnterpriseSection />
      </main>
      <Footer isDark={isDark} />
    </div>
  );
}
