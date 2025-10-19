import { motion } from "framer-motion";
import { Smartphone, Coins, PackageOpen } from "lucide-react";

const steps = [
  {
    icon: Smartphone,
    number: "01",
    title: "Buy Your Drink",
    description:
      "Choose your favorite drink in the SolVend app and pay seamlessly via Solana Pay.",
  },
  {
    icon: Coins,
    number: "02",
    title: "Earn Instantly",
    description:
      "Receive rewards directly to your wallet for your purchase and for anonymously sharing your data.",
  },
  {
    icon: PackageOpen,
    number: "03",
    title: "Dispense & Enjoy",
    description:
      "Enter your unique 4-digit code on the vending machine keypad and enjoy your cold drink.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 md:py-32" id="how-it-works">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Getting Rewarded is Easy as 1-2-3
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative rounded-2xl p-[1.5px] bg-gradient-to-br from-primary/30 via-transparent to-primary/30"
            >
              <div className="p-8 relative bg-white dark:bg-black rounded-[15px] h-full">
                <div className="absolute top-4 right-4 text-6xl font-bold text-gray-200/50 dark:text-accent font-heading">
                  {step.number}
                </div>

                <div className="relative z-10">
                  <step.icon className="w-12 h-12 text-dark mb-6" />

                  <h3 className="font-heading text-xl font-bold mb-3 text-gray-900 dark:text-white">
                    {step.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
