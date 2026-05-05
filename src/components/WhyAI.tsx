import { motion } from 'framer-motion'

const benefits = [
  {
    icon: '🧠',
    title: 'Think, Don\'t Memorize',
    description: 'We teach problem decomposition and critical thinking — skills that work with ANY technology, forever.',
  },
  {
    icon: '🚀',
    title: '10x Faster Building',
    description: 'Kids build in weeks what used to take months. AI handles the tedious parts so they focus on creativity.',
  },
  {
    icon: '🎯',
    title: 'Real Projects, Real Skills',
    description: 'Every course ends with a published, shareable project. Not toy exercises — real things people can use.',
  },
  {
    icon: '🔮',
    title: 'Future-Proof Skills',
    description: 'AI isn\'t going away. Kids who learn to build WITH AI now will have a massive advantage in any career.',
  },
  {
    icon: '🎮',
    title: 'Games They Already Love',
    description: 'Minecraft, Roblox, and more. We meet kids where they are and turn play time into build time.',
  },
  {
    icon: '💡',
    title: 'Prompt Engineering',
    description: 'The #1 skill of the AI age. Our students learn to communicate with AI systems effectively and precisely.',
  },
]

export function WhyAI() {
  return (
    <section className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/10 to-transparent" />

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why{' '}
            <span className="bg-gradient-to-r from-neon-purple to-neon-cyan bg-clip-text text-transparent">
              AI-First
            </span>{' '}
            Learning?
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Traditional coding bootcamps teach syntax. We teach the skill that matters: building with AI.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-dark-800 rounded-2xl p-6 border border-white/5 hover:border-neon-purple/20 transition-all group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform inline-block">{b.icon}</div>
              <h3 className="text-lg font-bold mb-2">{b.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{b.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
