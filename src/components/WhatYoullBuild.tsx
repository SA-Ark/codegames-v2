import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Build a complete Roblox game',
    description: 'NPCs, multiplayer, leaderboards — published for friends to play',
    gradient: 'from-red-500 to-orange-600',
    icon: '🎮',
  },
  {
    title: 'Create Minecraft worlds with AI',
    description: 'Custom builds, automated redstone, texture packs, command blocks',
    gradient: 'from-green-500 to-emerald-700',
    icon: '⛏️',
  },
  {
    title: 'Deploy a real web app',
    description: 'A live website with a URL you can share — built entirely with AI assistance',
    gradient: 'from-cyan-500 to-blue-600',
    icon: '🚀',
  },
  {
    title: 'Launch your own AI chatbot',
    description: 'A custom personality chatbot you design, build, and share with anyone',
    gradient: 'from-purple-500 to-violet-700',
    icon: '🤖',
  },
  {
    title: 'Compose a game soundtrack',
    description: 'Original music, sound effects, and ambient audio — all AI-generated',
    gradient: 'from-amber-500 to-yellow-600',
    icon: '🎵',
  },
  {
    title: 'Create a game from scratch',
    description: 'Playable browser games with levels, enemies, and power-ups',
    gradient: 'from-indigo-500 to-purple-600',
    icon: '👾',
  },
]

export function WhatYoullBuild() {
  return (
    <section className="py-20 md:py-28 px-4 md:px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-neon-pink text-sm font-semibold tracking-widest uppercase mb-4">Real Projects</p>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight">
            What Your Child{' '}
            <span className="bg-gradient-to-r from-neon-orange to-neon-pink bg-clip-text text-transparent">
              Will Build
            </span>
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-lg mx-auto">
            Not toy exercises — real projects they can share, play, and show off.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass-card rounded-xl p-5 flex items-start gap-4"
            >
              <div className={`w-11 h-11 rounded-lg bg-gradient-to-br ${p.gradient} flex items-center justify-center text-xl flex-shrink-0 shadow-md`}>
                {p.icon}
              </div>
              <div>
                <h3 className="font-bold text-sm mb-1">{p.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{p.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
