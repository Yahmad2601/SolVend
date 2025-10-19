import { X, Github, MessageCircle } from "lucide-react";
import { SiSolana } from "react-icons/si";

const socialLinks = [
  {
    icon: X,
    href: "https://x.com/Vend4Sol",
    label: "X (Twitter)",
    testId: "link-x",
  },
  {
    icon: Github,
    href: "http://github.com/sadiqsaidu/solvend/",
    label: "GitHub",
    testId: "link-github",
  },
  { icon: MessageCircle, href: "#", label: "Discord", testId: "link-discord" },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-black">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-gray-500 dark:text-gray-400 order-3 md:order-1 text-center md:text-left">
            © 2025 SolVend. All rights reserved.
          </p>

          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 order-1 md:order-2">
            <span>Powered by</span>
            <SiSolana className="w-5 h-5 text-accent" />
            <span className="font-semibold text-gray-900 dark:text-white">
              Solana
            </span>
          </div>

          <div className="flex gap-4 order-2 md:order-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                data-testid={social.testId}
                className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-900 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
