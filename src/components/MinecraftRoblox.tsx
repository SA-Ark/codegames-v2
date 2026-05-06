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
    <section className="py-20 md:py-28 px-4 md:px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-neon-green text-sm font-semibold tracking-widest uppercase mb-4">Featured Platforms</p>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight">
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
                <div className={`h-48 bg-gradient-to-br ${p.gradient} relative overflow-hidden`}>
                  {/* Geometric overlay */}
                  <div className="absolute inset-0 opacity-[0.1]" style={{
                    backgroundImage: `radial-gradient(circle at 30% 40%, rgba(255,255,255,0.3) 1px, transparent 1px),
                      radial-gradient(circle at 70% 60%, rgba(255,255,255,0.2) 1px, transparent 1px)`,
                    backgroundSize: '30px 30px, 45px 45px',
                  }} />
                  <div className="absolute inset-0 opacity-[0.06]" style={{
                    backgroundImage: 'repeating-linear-gradient(135deg, transparent, transparent 12px, rgba(255,255,255,0.4) 12px, rgba(255,255,255,0.4) 13px)',
                  }} />
                  <div className="absolute -right-10 -bottom-10 w-40 h-40 rounded-full bg-white/10 blur-3xl" />
                  <div className="absolute -left-6 -top-6 w-28 h-28 rounded-full bg-black/15 blur-2xl" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      className="w-24 h-24 rounded-2xl bg-black/20 backdrop-blur-sm flex items-center justify-center shadow-xl border border-white/10"
                      animate={{ y: [0, -6, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: i * 0.5 }}
                    >
                      <span className="text-5xl">{p.icon}</span>
                    </motion.div>
                  </div>
                  <div className="absolute top-4 right-4 px-2.5 py-1 rounded-md bg-black/30 backdrop-blur-sm text-white text-xs font-bold">
                    {p.badge}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-dark-800/80 to-transparent" />
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
