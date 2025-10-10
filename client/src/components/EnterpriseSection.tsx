import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart3, Shield, Zap, Users } from "lucide-react";

const benefits = [
  {
    icon: BarChart3,
    title: "Real-Time Insights",
    description: "Access live consumer data and trends as they happen",
  },
  {
    icon: Shield,
    title: "Ethically Sourced",
    description: "100% consented, anonymous data that respects privacy",
  },
  {
    icon: Zap,
    title: "Instant Integration",
    description: "Simple API access to actionable market intelligence",
  },
  {
    icon: Users,
    title: "Community Powered",
    description: "Data from real users, rewarded for their participation",
  },
];

export default function EnterpriseSection() {
  return (
    <section className="py-24 md:py-32 bg-card/30" id="enterprise">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            The Future of Consumer Insights is Here.
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tap into a new era of market research. SolVend provides access to ethically-sourced, real-time, and 
            completely anonymous consumer data. Understand your customers like never before and drive sales, all 
            while rewarding the community.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 hover-elevate h-full" data-testid={`card-enterprise-${index + 1}`}>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex gap-4 justify-center"
        >
          <Button size="lg" className="hover-elevate active-elevate-2" data-testid="button-request-demo">
            Request a Demo
          </Button>
          <Button size="lg" variant="outline" className="hover-elevate active-elevate-2" data-testid="button-learn-more">
            Learn More
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
