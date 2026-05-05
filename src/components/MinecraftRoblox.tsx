import { motion } from 'framer-motion'

const platforms = [
  {
    name: 'Minecraft',
    icon: '⛏️',
    gradient: 'from-green-500 to-emerald-700',
    description: 'Use AI to build insane worlds, automate redstone, create mods, and generate custom textures. Your imagination is the only limit.',
    features: ['AI-Generated Builds', 'Custom Mods', 'Redstone Automation', 'Texture Packs'],
    badge: 'Ages 8+',
  },
  {
    name: 'Roblox',
    icon: '🎮',
    gradient: 'from-red-500 to-orange-600',
    description: 'Build and publish your own Roblox games. AI writes the Lua scripts, designs levels, and creates NPC behavior while you direct the vision.',
    features: ['Game Publishing', 'AI Scripting', 'Level Design', 'Multiplayer'],
    badge: 'Ages 10+',
  },
]

export function MinecraftRoblox() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-green-500/5 rounded-full blur-[120px]" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-red-500/5 rounded-full blur-[120px]" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Play Your Favorite Games.{' '}
            <span className="bg-gradient-to-r from-green-400 to-red-400 bg-clip-text text-transparent">
              Build With AI.
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            The games they already love — now they'll learn to create inside them.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {platforms.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, x: i === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group"
            >
              <div className="bg-dark-800 rounded-2xl overflow-hidden border border-white/5 hover:border-white/15 transition-all">
                <div className={`h-40 bg-gradient-to-r ${p.gradient} flex items-center justify-center relative`}>
                  <span className="text-7xl group-hover:scale-110 transition-transform duration-500">{p.icon}</span>
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-black/30 text-white text-xs font-bold">
                    {p.badge}
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3">{p.name} + AI</h3>
                  <p className="text-gray-400 leading-relaxed mb-6">{p.description}</p>

                  <div className="grid grid-cols-2 gap-3">
                    {p.features.map(f => (
                      <div key={f} className="flex items-center gap-2 text-sm text-gray-300">
                        <span className="text-neon-green">✓</span> {f}
                      </div>
                    ))}
                  </div>

                  <a href="#courses" className={`mt-6 inline-flex px-6 py-3 rounded-full bg-gradient-to-r ${p.gradient} text-white font-semibold hover:scale-105 transition-transform`}>
                    View Course →
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
