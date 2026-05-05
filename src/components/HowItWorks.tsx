import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    icon: '🎯',
    title: 'Pick Your Project',
    description: 'Choose from Minecraft mods, Roblox games, chatbots, web apps, and more. Start with what excites YOU.',
    color: 'from-neon-purple to-violet-600',
  },
  {
    number: '02',
    icon: '🤖',
    title: 'AI Helps You Build',
    description: 'Learn to direct AI like a boss. It writes code, generates art, and creates music — you make the creative decisions.',
    color: 'from-neon-cyan to-blue-600',
  },
  {
    number: '03',
    icon: '🚀',
    title: 'Launch & Share',
    description: 'Deploy your creation to the real world. Share Roblox games with friends, publish apps, show off your portfolio.',
    color: 'from-neon-green to-emerald-600',
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How It{' '}
            <span className="bg-gradient-to-r from-neon-cyan to-neon-green bg-clip-text text-transparent">
              Works
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            No boring lectures. No memorizing syntax. Just building cool stuff with AI.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative group"
            >
              <div className="bg-dark-800 rounded-2xl p-8 border border-white/5 hover:border-white/10 transition-all duration-300 h-full">
                {/* Number badge */}
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${step.color} text-white font-bold text-lg mb-6`}>
                  {step.number}
                </div>

                <div className="text-4xl mb-4">{step.icon}</div>

                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed">{step.description}</p>
              </div>

              {/* Connector line (desktop) */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 border-t border-dashed border-white/10" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
