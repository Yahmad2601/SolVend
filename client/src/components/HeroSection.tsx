import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import yourVendingMachineImage from "@/assets/SolVend_Machine2.png"; // <-- THE FIX IS HERE

const texts = [
  "Quench Your Thirst",
  "A simple choice",
  "Your data, your world",
  "Your daily reward",
];
const typingSpeed = 100;
const erasingSpeed = 50;
const delayBetweenTexts = 2000;

export default function HeroSection() {
  const [textIndex, setTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isErasing, setIsErasing] = useState(false);

  const handleTyping = useCallback(() => {
    const currentText = texts[textIndex];
    if (isErasing) {
      if (displayedText.length > 0) {
        setDisplayedText((prev) => prev.substring(0, prev.length - 1));
      } else {
        setIsErasing(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }
    } else {
      if (displayedText.length < currentText.length) {
        setDisplayedText((prev) => currentText.substring(0, prev.length + 1));
      } else {
        setTimeout(() => setIsErasing(true), delayBetweenTexts);
      }
    }
  }, [displayedText, isErasing, textIndex]);

  useEffect(() => {
    const timer = setTimeout(
      handleTyping,
      isErasing ? erasingSpeed : typingSpeed
    );
    return () => clearTimeout(timer);
  }, [handleTyping, isErasing]);

  return (
    <section className="relative min-h-screen flex items-center text-left bg-white dark:bg-black overflow-hidden">
      <div className="absolute inset-0 bg-grid-gray-200/40 dark:bg-grid-gray-900/40 bg-center [mask-image:linear-gradient(to_bottom,white,white,transparent)] dark:[mask-image:linear-gradient(to_bottom,black,black,transparent)]"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="font-heading text-5xl md:text-6xl font-black text-gray-900 dark:text-white leading-tight flex items-center justify-start h-32">
              <span>{displayedText}</span>
              <span className="animate-pulse text-gradient-cursor">|</span>
            </h1>
            <h1 className="font-heading text-5xl md:text-6xl font-black text-gray-900 dark:text-white leading-tight">
              Own the Future.
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mt-6 mb-8 max-w-lg">
              SolVend is the world's first Buy-to-Earn vending machine, powered
              by Solana. Get paid every time you buy a drink.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-start">
              <Button
                size="lg"
                className="text-sm font-semibold px-8 py-3 h-auto bg-gray-900 text-white rounded-lg hover:bg-gray-700 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200 transition-colors"
              >
                Download App (Coming Soon)
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-sm font-semibold px-8 py-3 h-auto border-gray-100 text-gray-800 bg-white rounded-lg hover:bg-gray-100 dark:border-gray-700 dark:text-gray-300 dark:bg-transparent dark:hover:bg-gray-800 transition-colors"
                onClick={() =>
                  document
                    .getElementById("enterprise")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Data Marketplace (Coming Soon)
              </Button>
            </div>
          </motion.div>

          {/* Right Column: Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:flex justify-center items-center"
          >
            <div className="relative max-w-lg w-full">
              <img
                src={yourVendingMachineImage}
                alt="SolVend Vending Machine"
                className="w-full"
              />
              {/* Animated Lights */}
              <div
                className="absolute top-[17%] left-[10%] w-10 h-10 rounded-full animate-light-flash"
                style={{ animationDelay: "0s" }}
              ></div>
              <div
                className="absolute top-[21%] right-[30%] w-10 h-10 rounded-full animate-light-flash"
                style={{ animationDelay: "0.5s" }}
              ></div>
            </div>
          </motion.div>
        </div>
      </div>
      <style>{`
        .bg-grid-gray-200\\/40 {
          background-image: linear-gradient(
              to right,
              rgba(229, 231, 235, 0.4) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(229, 231, 235, 0.4) 1px,
              transparent 1px
            );
          background-size: 40px 40px;
        }
        .dark .dark\\:bg-grid-gray-900\\/40 {
          background-image: linear-gradient(
              to right,
              rgba(255, 255, 255, 0.1) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(255, 255, 255, 0.1) 1px,
              transparent 1px
            );
        }
            @keyframes light-flash {
          0%, 100% {
            background-color: rgba(255, 255, 255, 0.7);
            box-shadow: 0 0 12px 4px rgba(255, 255, 255, 0.5);
          }
          50% {
            background-color: rgba(255, 255, 255, 0.9);
            box-shadow: 0 0 28px 10px rgba(255, 255, 255, 0.7);
          }
        }
        .animate-light-flash {
          animation: light-flash 2s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
}
