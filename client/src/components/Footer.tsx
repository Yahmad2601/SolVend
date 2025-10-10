import { motion } from "framer-motion";
import { Twitter, Github, MessageCircle } from "lucide-react";
import { SiSolana } from "react-icons/si";
import logoSymbol from "@assets/SolVend_Logo_Symbol3_1760091042423.png";

export default function Footer() {
  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter", testId: "link-twitter" },
    { icon: Github, href: "#", label: "GitHub", testId: "link-github" },
    { icon: MessageCircle, href: "#", label: "Discord", testId: "link-discord" },
  ];

  const links = {
    product: [
      { label: "How It Works", href: "#how-it-works" },
      { label: "Features", href: "#features" },
      { label: "For Users", href: "#users" },
      { label: "For Businesses", href: "#businesses" },
    ],
    company: [
      { label: "About", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Careers", href: "#" },
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
    <footer className="border-t border-border bg-card/30">
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
              <img src={logoSymbol} alt="SolVend" className="w-10 h-10" />
              <span className="font-heading text-2xl font-bold">SolVend</span>
            </motion.div>
            <p className="text-muted-foreground mb-6 max-w-sm">
              The world's first Buy-to-Earn vending machine, powered by Solana. 
              Own the future of retail.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Powered by</span>
              <SiSolana className="w-5 h-5 text-accent" />
              <span className="font-semibold">Solana</span>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              {links.product.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {links.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {links.resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 SolVend. All rights reserved.
          </p>

          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                data-testid={social.testId}
                className="w-10 h-10 rounded-lg bg-card hover-elevate active-elevate-2 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
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
