import AudienceSection from '../AudienceSection'
import { Wallet, Gift, TrendingUp } from 'lucide-react'

export default function AudienceSectionExample() {
  const benefits = [
    {
      icon: Wallet,
      title: "Instant Rewards",
      description: "Earn USDC instantly with every purchase, no waiting or complicated processes",
    },
    {
      icon: Gift,
      title: "Unique NFT Collection",
      description: "Build a personal collection of evolving NFTs that grow with your journey",
    },
    {
      icon: TrendingUp,
      title: "Passive Income",
      description: "Generate ongoing revenue from the ethical data marketplace",
    },
  ]

  return (
    <AudienceSection
      id="users"
      title="For Users"
      subtitle="Turn every purchase into an opportunity to earn and grow your digital assets"
      benefits={benefits}
      ctaText="Join the Waitlist"
      imagePosition="right"
    />
  )
}
