import React from "react";
import { motion } from "framer-motion";
import { Twitter, Github, MessageCircle } from "lucide-react";
import { SiSolana } from "react-icons/si";
import logoLight from "@assets/SolVend_Logo_1760092890705.png"; // Your original logo
import logoDark from "@assets/SolVend_Logo2.png"; // Your new dark mode logo

interface FooterProps {
  isDark: boolean;
}

export default function Footer({ isDark }: FooterProps) {
  const socialLinks = [
    {
      icon: Twitter,
      href: "https://twitter.com/solvend",
      label: "Twitter/X",
      testId: "link-twitter",
    },
    { icon: Github, href: "#", label: "GitHub", testId: "link-github" },
    {
      icon: MessageCircle,
      href: "#",
      label: "Discord",
      testId: "link-discord",
    },
  ];

  const links = {
    product: [
      { label: "How It Works", href: "#how-it-works" },
      { label: "Buy-to-Earn", href: "#buy-to-earn" },
      { label: "Join Now", href: "#onboarding" },
      { label: "For Businesses", href: "#enterprise" },
    ],
    company: [
      { label: "About", href: "#" },
      { label: "Hackathon", href: "#" },
      { label: "Contact", href: "mailto:hello@solvend.xyz" },
      { label: "Press Kit", href: "#" },
    ],
    resources: [
      { label: "Documentation", href: "#" },
      { label: "API", href: "#" },
      { label: "Support", href: "#" },
      { label: "FAQ", href: "#" },
    ],
  };

  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-black">
      <div className="container mx-auto px-6 py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-4"
            >
              <img
                src={isDark ? logoDark : logoLight}
                alt="SolVend Logo"
                className="h-8 w-auto"
              />
            </motion.div>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-sm">
              The world's first Buy-to-Earn vending machine, powered by Solana.
              Own the future of retail.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <span>Powered by</span>
              <SiSolana className="w-5 h-5 text-purple-500" />
              <span className="font-semibold">Solana</span>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-4 text-gray-900 dark:text-white">
              Product
            </h3>
            <ul className="space-y-2">
              {links.product.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-gray-900 dark:text-white">
              Company
            </h3>
            <ul className="space-y-2">
              {links.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-gray-900 dark:text-white">
              Resources
            </h3>
            <ul className="space-y-2">
              {links.resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © 2025 SolVend. All rights reserved.
          </p>

          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                data-testid={social.testId}
                className="w-10 h-10 rounded-lg bg-white dark:bg-gray-900/50 hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white transition-colors"
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
