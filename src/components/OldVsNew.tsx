import { motion } from 'framer-motion'

const comparisons = [
  {
    old: 'Spend 6 months learning syntax before building anything',
    new: 'Build a working game on Day 1 with AI',
    icon: '⚡',
  },
  {
    old: 'Memorize programming languages that change every few years',
    new: 'Learn to think and direct AI — a skill that lasts forever',
    icon: '🧠',
  },
  {
    old: 'Get stuck for hours on a single bug',
    new: 'AI helps debug instantly — keep building, keep learning',
    icon: '🔧',
  },
  {
    old: 'Build toy projects nobody sees',
    new: 'Publish real Roblox games, deploy real websites, share with friends',
    icon: '🚀',
  },
]

export function OldVsNew() {
  return (
    <section className="py-20 md:py-28 px-4 md:px-6 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-neon-orange text-sm font-semibold tracking-widest uppercase mb-4">The Difference</p>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight">
            Traditional Coding Class vs{' '}
            <span className="bg-gradient-to-r from-neon-orange to-neon-pink bg-clip-text text-transparent">
              AI-First
            </span>
          </h2>
        </motion.div>

        <div className="space-y-4">
          {comparisons.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-xl p-5 md:p-6 grid md:grid-cols-[1fr,auto,1fr] gap-4 items-center"
            >
              {/* Old way */}
              <div className="flex items-start gap-3">
                <span className="text-red-400/60 text-lg mt-0.5">✕</span>
                <p className="text-gray-500 text-sm line-through decoration-gray-700">{c.old}</p>
              </div>

              {/* Arrow / icon */}
              <div className="hidden md:flex items-center justify-center">
                <span className="text-2xl">{c.icon}</span>
              </div>

              {/* New way */}
              <div className="flex items-start gap-3">
                <span className="text-neon-green text-lg mt-0.5">✓</span>
                <p className="text-white text-sm font-medium">{c.new}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
