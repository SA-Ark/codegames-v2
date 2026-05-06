import { motion } from 'framer-motion'
import { GlowCard } from './GlowCard'

const platforms = [
  {
    name: 'Minecraft',
    icon: '⛏️',
    gradient: 'from-green-500 to-emerald-700',
    glowColor: 'rgba(34,197,94,0.15)',
    description: 'Use AI to build insane worlds, automate redstone, create mods, and generate custom textures. Your imagination is the only limit.',
    features: ['AI-Generated Builds', 'Custom Mods', 'Redstone Automation', 'Texture Packs'],
    badge: 'Ages 8+',
  },
  {
    name: 'Roblox',
    icon: '🎮',
    gradient: 'from-red-500 to-orange-600',
    glowColor: 'rgba(239,68,68,0.15)',
    description: 'Build and publish your own Roblox games. AI writes the Lua scripts, designs levels, and creates NPC behavior while you direct the vision.',
    features: ['Game Publishing', 'AI Scripting', 'Level Design', 'Multiplayer'],
    badge: 'Ages 10+',
  },
]

export function MinecraftRoblox() {
  return (
    <section className="py-28 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-neon-green text-sm font-semibold tracking-widest uppercase mb-4">Featured Platforms</p>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
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
            <GlowCard key={p.name} glowColor={p.glowColor} className="rounded-2xl">
              <div className="glass-card rounded-2xl overflow-hidden h-full">
                <div className={`h-44 bg-gradient-to-br ${p.gradient} flex items-center justify-center relative overflow-hidden`}>
                  <motion.span
                    className="text-8xl drop-shadow-2xl"
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: i * 0.5 }}
                  >
                    {p.icon}
                  </motion.span>
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/30 backdrop-blur-sm text-white text-xs font-bold">
                    {p.badge}
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-extrabold mb-3">{p.name} + AI</h3>
                  <p className="text-gray-400 leading-relaxed mb-6 text-sm">{p.description}</p>

                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {p.features.map(f => (
                      <div key={f} className="flex items-center gap-2 text-sm text-gray-300">
                        <span className="text-neon-green text-xs">✓</span> {f}
                      </div>
                    ))}
                  </div>

                  <a href="#courses" className={`inline-flex px-6 py-3 rounded-full bg-gradient-to-r ${p.gradient} text-white font-semibold hover:shadow-lg hover:scale-105 transition-all text-sm`}>
                    View Course →
                  </a>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  )
}
