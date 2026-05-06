import { motion } from 'framer-motion'
import { GlowCard } from './GlowCard'

function MinecraftScene() {
  return (
    <div className="absolute inset-0">
      {/* Grass ground */}
      <div className="absolute bottom-0 left-0 right-0 h-16">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="absolute" style={{ left: `${i * 8.5}%`, bottom: 0 }}>
            <div className="w-14 h-7 bg-green-600/70 border border-green-400/40 rounded-sm" />
            <div className="w-14 h-9 bg-amber-800/60 border-x border-b border-amber-600/30 rounded-b-sm" />
          </div>
        ))}
      </div>
      {/* Trees */}
      {[[12, 28], [75, 32]].map(([x], i) => (
        <div key={`tree${i}`} className="absolute" style={{ left: `${x}%`, bottom: 56 }}>
          <div className="w-4 h-12 bg-amber-900/50 border border-amber-700/30 mx-auto" />
          <div className="w-16 h-10 bg-green-700/60 border border-green-500/40 rounded-sm -mt-2 -ml-6" />
          <div className="w-12 h-8 bg-green-600/50 border border-green-400/30 rounded-sm -mt-1 -ml-4" />
        </div>
      ))}
      {/* Floating blocks */}
      {[[30, 40, 'emerald'], [50, 30, 'sky'], [65, 50, 'amber']].map(([x, y, _c], i) => (
        <motion.div key={`block${i}`} className="absolute"
          style={{ left: `${x}%`, top: `${y}%` }}
          animate={{ y: [0, -8, 0], rotate: [0, 3, -3, 0] }}
          transition={{ duration: 2.5 + i * 0.3, repeat: Infinity, delay: i * 0.5 }}
        >
          <div className="w-10 h-10 rounded-sm border-2 shadow-lg"
            style={{
              background: i === 0 ? 'rgba(16,185,129,0.5)' : i === 1 ? 'rgba(56,189,248,0.45)' : 'rgba(234,179,8,0.5)',
              borderColor: i === 0 ? 'rgba(52,211,153,0.5)' : i === 1 ? 'rgba(125,211,252,0.5)' : 'rgba(253,224,71,0.5)',
            }}
          />
        </motion.div>
      ))}
      {/* Pickaxe swinging */}
      <motion.div className="absolute left-[42%] top-[20%] text-4xl origin-bottom-right"
        animate={{ rotate: [-30, 15, -30] }}
        transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
      >⛏️</motion.div>
      {/* Particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div key={`p${i}`} className="absolute w-2 h-2 bg-green-400/40 rounded-sm"
          style={{ left: `${20 + i * 12}%`, top: `${20 + (i % 3) * 20}%` }}
          animate={{ opacity: [0, 0.6, 0], y: [0, -15], scale: [0.5, 1.2] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.4 }}
        />
      ))}
    </div>
  )
}

function RobloxScene() {
  return (
    <div className="absolute inset-0">
      {/* Platform ground */}
      <div className="absolute bottom-0 left-0 right-0 h-10 bg-gray-700/40 border-t-2 border-gray-500/30" />
      {/* Main character */}
      <motion.div className="absolute left-[35%] bottom-10"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        {/* Head */}
        <div className="w-14 h-14 bg-yellow-200/40 rounded-lg border-2 border-yellow-300/50 mx-auto shadow-lg relative">
          <div className="absolute top-4 left-2.5 w-2.5 h-2.5 rounded-full bg-black/40" />
          <div className="absolute top-4 right-2.5 w-2.5 h-2.5 rounded-full bg-black/40" />
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-4 h-1.5 rounded-full bg-black/20" />
        </div>
        {/* Body */}
        <div className="w-16 h-16 bg-red-500/40 rounded-md border-2 border-red-400/50 -mt-1 relative shadow-md" style={{ marginLeft: -1 }}>
          {/* Arms */}
          <motion.div className="absolute -left-5 top-1 w-5 h-12 bg-yellow-200/35 rounded border border-yellow-300/40"
            animate={{ rotate: [0, -20, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          <motion.div className="absolute -right-5 top-1 w-5 h-12 bg-yellow-200/35 rounded border border-yellow-300/40"
            animate={{ rotate: [0, 20, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
        {/* Legs */}
        <div className="flex gap-1 -mt-0.5" style={{ marginLeft: 1 }}>
          <motion.div className="w-7 h-10 bg-blue-600/40 rounded-b border border-blue-500/40"
            animate={{ rotate: [5, -5, 5] }}
            transition={{ duration: 0.8, repeat: Infinity }}
          />
          <motion.div className="w-7 h-10 bg-blue-600/40 rounded-b border border-blue-500/40"
            animate={{ rotate: [-5, 5, -5] }}
            transition={{ duration: 0.8, repeat: Infinity }}
          />
        </div>
      </motion.div>
      {/* Companion character (smaller) */}
      <motion.div className="absolute right-[20%] bottom-10"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
      >
        <div className="w-8 h-8 bg-green-300/35 rounded-md border border-green-400/40" />
        <div className="w-9 h-9 bg-purple-500/35 rounded-sm border border-purple-400/40 -mt-0.5" style={{ marginLeft: -0.5 }} />
      </motion.div>
      {/* Floating stars / XP */}
      {[[15, 20], [70, 15], [85, 45], [10, 60], [55, 25]].map(([x, y], i) => (
        <motion.div key={i} className="absolute text-lg"
          style={{ left: `${x}%`, top: `${y}%` }}
          animate={{ scale: [0.6, 1.1, 0.6], opacity: [0.3, 0.8, 0.3], rotate: [0, 180, 360] }}
          transition={{ duration: 3, repeat: Infinity, delay: i * 0.6 }}
        >✦</motion.div>
      ))}
      {/* Robux-style coins */}
      {[[25, 30], [60, 55], [80, 25]].map(([x, y], i) => (
        <motion.div key={`c${i}`} className="absolute w-5 h-5 rounded-full border-2 border-yellow-400/60 flex items-center justify-center"
          style={{ left: `${x}%`, top: `${y}%`, background: 'rgba(234,179,8,0.3)' }}
          animate={{ scale: [1, 1.2, 1], rotate: [0, 360] }}
          transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
        >
          <span className="text-[8px] font-bold text-yellow-300/70">R</span>
        </motion.div>
      ))}
    </div>
  )
}

const platforms = [
  {
    name: 'Minecraft',
    gradient: 'from-green-600 to-emerald-800',
    glowColor: 'rgba(34,197,94,0.15)',
    description: 'Use AI to build insane worlds, automate redstone, create mods, and generate custom textures. Your imagination is the only limit.',
    features: ['AI-Generated Builds', 'Custom Mods', 'Redstone Automation', 'Texture Packs'],
    badge: 'Ages 8+',
    Scene: MinecraftScene,
  },
  {
    name: 'Roblox',
    gradient: 'from-red-500 to-orange-700',
    glowColor: 'rgba(239,68,68,0.15)',
    description: 'Build and publish your own Roblox games. AI writes the Lua scripts, designs levels, and creates NPC behavior while you direct the vision.',
    features: ['Game Publishing', 'AI Scripting', 'Level Design', 'Multiplayer'],
    badge: 'Ages 10+',
    Scene: RobloxScene,
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
          {platforms.map((p) => (
            <GlowCard key={p.name} glowColor={p.glowColor} className="rounded-2xl">
              <div className="glass-card rounded-2xl overflow-hidden h-full">
                <div className={`h-56 bg-gradient-to-br ${p.gradient} relative overflow-hidden`}>
                  {/* Vignette */}
                  <div className="absolute inset-0" style={{
                    background: 'radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.25) 100%)',
                  }} />
                  <p.Scene />
                  <div className="absolute top-4 right-4 px-2.5 py-1 rounded-md bg-black/40 backdrop-blur-sm text-white text-sm font-bold">
                    {p.badge}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-t from-dark-800/90 to-transparent" />
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-extrabold mb-3">{p.name} + AI</h3>
                  <p className="text-gray-400 leading-relaxed mb-6 text-sm">{p.description}</p>

                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {p.features.map(f => (
                      <div key={f} className="flex items-center gap-2 text-sm text-gray-300">
                        <span className="text-neon-green text-sm">✓</span> {f}
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
