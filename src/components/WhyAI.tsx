import { motion } from 'framer-motion'
import { GlowCard } from './GlowCard'

const benefits = [
  {
    icon: '🧠', title: 'Think, Don\'t Memorize',
    description: 'We teach problem decomposition and critical thinking — skills that work with ANY technology, forever.',
    glowColor: 'rgba(249,115,22,0.12)',
  },
  {
    icon: '🚀', title: '10x Faster Building',
    description: 'Kids build in weeks what used to take months. AI handles the tedious parts so they focus on creativity.',
    glowColor: 'rgba(236,72,153,0.12)',
  },
  {
    icon: '🎯', title: 'Real Projects, Real Skills',
    description: 'Every course ends with a published, shareable project. Not toy exercises — real things people can use.',
    glowColor: 'rgba(34,197,94,0.12)',
  },
  {
    icon: '🔮', title: 'Future-Proof Skills',
    description: 'AI isn\'t going away. Kids who learn to build WITH AI now will have a massive advantage in any career.',
    glowColor: 'rgba(236,72,153,0.12)',
  },
  {
    icon: '🎮', title: 'Games They Already Love',
    description: 'Minecraft, Roblox, and more. We meet kids where they are and turn play time into build time.',
    glowColor: 'rgba(245,158,11,0.12)',
  },
  {
    icon: '💡', title: 'Prompt Engineering',
    description: 'The #1 skill of the AI age. Our students learn to communicate with AI systems effectively and precisely.',
    glowColor: 'rgba(99,102,241,0.12)',
  },
]

export function WhyAI() {
  return (
    <section className="py-20 md:py-28 px-4 md:px-6 relative">
      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-neon-orange text-sm font-semibold tracking-widest uppercase mb-4">The AI Advantage</p>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight">
            Why{' '}
            <span className="bg-gradient-to-r from-neon-orange to-neon-pink bg-clip-text text-transparent">
              AI-First
            </span>{' '}
            Learning?
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Traditional coding bootcamps teach syntax. We teach the skill that matters: building with AI.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b) => (
            <GlowCard key={b.title} glowColor={b.glowColor} className="rounded-2xl">
              <div className="glass-card rounded-2xl p-7 h-full">
                <div className="text-4xl mb-4 inline-block">{b.icon}</div>
                <h3 className="text-lg font-bold mb-2">{b.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{b.description}</p>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  )
}
