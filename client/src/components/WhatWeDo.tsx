import React from "react";
import { motion } from "framer-motion";
import { DollarSign, Zap } from "lucide-react";
import nftBottleImage from "@/assets/nft_bottle.png";
import UsainBolt from "@/assets/Usain.png";
import Revenue from "@/assets/revenue.png";

const features = [
  {
    imageSrc: nftBottleImage,
    title: "Own Collectible NFTs",
    description:
      "Every drink you buy helps you build a unique, evolving NFT. Starting with a base collectible, as it transforms with each purchase, thereby unlocking rare tradable assets.",
  },
  {
    imageSrc: Revenue,
    title: "Earn Direct Revenue",
    description:
      "You have the choice to anonymously contribute your purchasing habits to a secure data pool and when companies like Coca-Cola & PepsiCo pay for insights, you get a share of the revenue in USDC.",
  },
  {
    imageSrc: UsainBolt,
    title: "Enjoy Fast Transaction",
    description:
      "Process your payment and dispense your drink in 9.58 seconds. The same time it took Usain Bolt to set the 100m world record.",
  },
];

export default function WhatWeDo() {
  return (
    <section
      id="what-we-do"
      className="py-20 md:py-28 bg-gray-50 dark:bg-gray-900/50"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            A Transaction That Pays You Back
          </h2>
          <p className="text-lg md:text-xl">
            SolVend transforms a simple purchase into a rewarding economic
            activity with the aid of a mobile app and a vending machine.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              {/* {feature.icon && (
                <feature.icon className="w-20 h-20 mx-auto mb-5 text-primary" />
              )} */}
              {feature.imageSrc && (
                <img
                  src={feature.imageSrc}
                  alt={feature.title}
                  className="w-20 h-20 mx-auto mb-5 object-contain"
                />
              )}
              <h3 className="text-xl font-bold mb-3 ">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
