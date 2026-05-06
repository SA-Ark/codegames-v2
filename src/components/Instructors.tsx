import { motion } from 'framer-motion'

const instructors = [
  {
    name: 'Alex Rivera',
    role: 'Lead Instructor — Game Dev',
    bio: 'Former Roblox engineer. Built games with 1M+ plays. Teaches Minecraft & Roblox courses.',
    initials: 'AR',
    gradient: 'from-green-500 to-emerald-700',
    stats: '200+ students taught',
    courses: ['Minecraft AI Builder', 'Roblox AI Game Studio'],
  },
  {
    name: 'Priya Sharma',
    role: 'Lead Instructor — AI & Web',
    bio: 'AI researcher turned educator. Makes complex AI concepts fun and accessible for young minds.',
    initials: 'PS',
    gradient: 'from-purple-500 to-violet-700',
    stats: '150+ students taught',
    courses: ['AI Chatbot Creator', 'AI Web App Builder'],
  },
  {
    name: 'Marcus Chen',
    role: 'Lead Instructor — Creative',
    bio: 'Digital artist and musician. Uses AI daily to create game assets, music, and videos.',
    initials: 'MC',
    gradient: 'from-pink-500 to-rose-600',
    stats: '180+ students taught',
    courses: ['AI Art & Game Assets', 'AI Music & Sound FX'],
  },
]

export function Instructors() {
  return (
    <section className="py-20 md:py-28 px-4 md:px-6 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-neon-pink text-sm font-semibold tracking-widest uppercase mb-4">Expert Guidance</p>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight">
            Meet Your{' '}
            <span className="bg-gradient-to-r from-neon-pink to-neon-orange bg-clip-text text-transparent">
              Instructors
            </span>
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-lg mx-auto">
            Real builders who use AI every day — not just teachers reading from slides.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {instructors.map((inst, i) => (
            <motion.div
              key={inst.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-2xl p-7 text-center"
            >
              {/* Avatar */}
              <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${inst.gradient} flex items-center justify-center text-xl font-bold text-white mx-auto mb-5 shadow-lg`}>
                {inst.initials}
              </div>

              <h3 className="text-lg font-bold mb-1">{inst.name}</h3>
              <p className="text-neon-pink text-xs font-medium mb-3">{inst.role}</p>
              <p className="text-gray-400 text-sm leading-relaxed mb-4 font-light">{inst.bio}</p>

              <div className="text-[11px] text-gray-500 mb-3">{inst.stats}</div>

              <div className="flex flex-wrap justify-center gap-1.5">
                {inst.courses.map(c => (
                  <span key={c} className="px-2 py-0.5 rounded-full bg-white/[0.04] text-gray-400 text-[10px] border border-white/[0.03]">
                    {c}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
