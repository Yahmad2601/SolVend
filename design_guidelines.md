# SolVend Landing Page - Design Guidelines

## Design Approach
**Reference-Based + Web3 Modern**: Drawing inspiration from leading Web3 platforms (Phantom, Solana.com, Coinbase) with a focus on trust-building visuals, smooth animations, and clear value communication. The design balances futuristic Web3 aesthetics with approachable, consumer-friendly interfaces.

## Core Design Elements

### Color Palette
**Primary Colors:**
- Primary Blue: #6889BC - Main brand color for CTAs and headings
- Primary Purple: #7F7ABA - Accent color for gradients and highlights
- Gradient: Linear gradient from #6889BC to #7F7ABA (135deg angle)

**Supporting Colors:**
- Background Dark: 15 10% 12% - Rich dark base
- Background Card: 220 15% 18% - Elevated surfaces
- Text Primary: 0 0% 98% - High contrast white
- Text Secondary: 220 10% 70% - Muted descriptions
- Success Green: 142 76% 36% - For positive indicators (NFT growth, earnings)
- Solana Purple: 270 80% 65% - For Solana-specific elements

### Typography
**Font Stack:**
- Primary: 'Inter' (Google Fonts) - Clean, modern, excellent Web3 standard
- Headings: 'Space Grotesk' (Google Fonts) - Geometric, futuristic feel
- Code/Blockchain: 'JetBrains Mono' (Google Fonts) - For addresses, technical details

**Scale:**
- Hero Headline: text-6xl md:text-7xl lg:text-8xl, font-bold
- Section Headers: text-4xl md:text-5xl, font-bold
- Subsection Headers: text-2xl md:text-3xl, font-semibold
- Body Text: text-base md:text-lg, leading-relaxed
- Captions: text-sm, opacity-80

### Layout System
**Spacing Primitives:** Use Tailwind units of 4, 8, 12, 16, 20, 24 for consistent rhythm
- Section Padding: py-20 md:py-32
- Container Max Width: max-w-7xl mx-auto px-6 md:px-8
- Card Spacing: gap-8 md:gap-12
- Element Spacing: space-y-4 to space-y-8

### Component Library

**Hero Section:**
- Full viewport height (min-h-screen) with gradient background
- Centered content with max-w-6xl
- Tagline "Own the Future" in large, bold typography with subtle fade-in animation
- Primary CTA: Large button (px-8 py-4) with gradient background, white text, scale-on-hover
- Secondary CTA: Smaller link below (text-sm, underline decoration) that smoothly scrolls to Enterprise section
- Hero Visual: 3D-style illustration with floating elements (use CSS transforms and Framer Motion)

**Section Cards:**
- Glass-morphism effect: backdrop-blur-lg with subtle border
- Background: bg-background-card/60 with border border-white/10
- Rounded corners: rounded-2xl
- Padding: p-8 md:p-12
- Hover effect: translate-y-[-4px] with transition

**Feature Cards (3-column grid):**
- Grid: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6
- Each card: Icon (w-12 h-12) + Title (text-xl font-semibold) + Description
- Icon styling: Gradient fill or brand color, subtle pulse animation on scroll-into-view

**How It Works (Step Flow):**
- Horizontal timeline on desktop, vertical on mobile
- Numbered steps (1→2→3→4) with connecting lines
- Each step: Large number + Icon + Title + Description
- Animate in sequence with stagger effect (150ms delay between steps)

**Enterprise Section:**
- 2-column layout (lg:grid-cols-2)
- Left: Benefits list with checkmark icons
- Right: Visual mockup or stats display
- Call-out box for partnership inquiries

### Images
**Hero Image: YES - Large, High-Impact**
- Position: Right side of hero (hidden on mobile, visible md:block)
- Content: Composite illustration showing:
  - Solar-powered SolVend vending machine (sleek, modern design with Solana branding)
  - Smartphone displaying clean app UI (positioned next to machine)
  - Floating NFT card with evolving visual (top-right, with gentle float animation)
  - USDC coin icon (bottom-left of phone, gentle rotation animation)
  - Connection lines/particles between elements suggesting blockchain interaction
- Style: Semi-3D illustration with depth, gradient overlays matching brand colors
- Animation: Parallax scroll effect, floating elements with different speeds

**Additional Images:**
- How It Works: Icon illustrations for each step (custom designed to match brand)
- Features: Abstract visuals showing data flow, NFT evolution, earnings dashboard
- Enterprise Section: Professional product shots or mockups of vending machines in retail settings

### Animations
**Entry Animations (Framer Motion):**
- Fade-up: Default for most content (y: 40 → 0, opacity: 0 → 1)
- Stagger Children: For lists and grids (staggerChildren: 0.1)
- Scale: For CTAs and important elements (scale: 0.95 → 1)

**Scroll Animations:**
- Parallax: Hero image elements move at different speeds
- Progress Bars: Animate width on scroll into view for stats
- Number Counters: Count up animation for metrics (0 → final value)

**Micro-interactions:**
- Button Hover: Scale(1.05) + subtle glow effect
- Card Hover: Lift (translateY: -4px) + increased shadow
- Icon Pulse: Gentle scale pulse on feature icons (scale: 1 → 1.1 → 1)
- Link Underline: Animated underline expand on hover

**Performance Notes:**
- Use `will-change: transform` sparingly
- Prefer transform and opacity for animations
- Lazy load images below fold
- Keep animation duration between 200-400ms

### Dark Mode Implementation
**Consistent Dark Theme:**
- All sections use dark background variations
- Form inputs: Dark background (bg-background-card) with light border (border-white/20)
- Input focus: Bright border with brand gradient
- Placeholder text: text-white/40
- No light mode toggle needed - fully dark experience

## Page Structure

1. **Hero Section** - Gradient background, centered CTA, hero visual
2. **How It Works** - 4-step horizontal/vertical flow
3. **Key Features** - 3-column grid of benefits (NFTs, Passive Income, Data Marketplace)
4. **For Users** - Personal benefits, app preview
5. **For Businesses** - ROI focus, partnership opportunities  
6. **Enterprise/For Brands** - B2B value proposition, case studies
7. **Footer** - Social links, newsletter signup, company info

**Total Sections: 7** - Comprehensive, feature-rich landing experience with smooth scroll progression between sections.