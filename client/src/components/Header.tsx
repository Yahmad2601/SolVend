import React from "react";
import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoLight from "@assets/SolVend_Logo_1760092890705.png"; // Your original logo
import logoDark from "@assets/SolVend_Logo2.png"; // Your new dark mode logo

interface HeaderProps {
  isDark: boolean;
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
}

const navLinks = [
  { name: "How it Works", id: "how-it-works" },
  { name: "Onboarding", id: "onboarding" },
  { name: "For Businesses", id: "enterprise" },
];

export default function Header({ isDark, setIsDark }: HeaderProps) {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 dark:bg-black/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-6 h-20 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src={isDark ? logoDark : logoLight}
            alt="SolVend Logo"
            className="h-7 w-auto"
          />
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.id);
              }}
              className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Theme Toggle and CTA */}
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsDark(!isDark)}
            className="h-9 w-9 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </Button>
          <Button
            size="sm"
            className="hidden sm:flex text-xs font-semibold px-4 h-9 bg-gray-900 text-white rounded-lg hover:bg-accent dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200 transition-colors"
            onClick={() =>
              document
                .getElementById("EmailCTA")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Join Waitlist
          </Button>
        </div>
      </div>
    </header>
  );
}
