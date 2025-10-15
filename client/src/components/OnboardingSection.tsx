import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SiGoogle, SiSolana } from "react-icons/si";

export default function OnboardingSection() {
  return (
    <section
      className="py-24 md:py-32 bg-gray-50 dark:bg-gray-900/50"
      id="onboarding"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            Seamless Onboarding
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            We believe the future of the internet should be for everyone. That's
            why we are implementing a dual login system. A standard "Connect
            Wallet" button for Crypto Natives and a familiar "Continue with
            Google" button for Mainstream Users which will automatically and
            non-custodially generate a unique Solana wallet tied to the user's
            Google account while we provide a gentle on-ramp to full
            self-custody later on.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="w-full sm:flex-1"
            >
              <Button
                size="lg"
                variant="outline"
                className="w-full text-lg h-16 border-2 hover-elevate active-elevate-2 text-accent"
                data-testid="button-wallet-connect"
              >
                <SiSolana className="w-6 h-6 mr-3" />
                Connect Solana Wallet
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="w-full sm:flex-1"
            >
              <Button
                size="lg"
                className="w-full text-lg h-16 bg-white hover:bg-gray-100 text-gray-900 border border-gray-200 hover-elevate active-elevate-2"
                data-testid="button-google-signin"
              >
                <SiGoogle className="w-6 h-6 mr-3" />
                Continue with Google
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
