import { motion } from 'framer-motion'

const projects = [
  { title: 'Medieval Castle World', student: 'Lucas, 11', course: 'Minecraft AI', icon: '⛏️', gradient: 'from-green-500 to-emerald-700', description: 'AI-designed castle with automated redstone drawbridge and secret rooms' },
  { title: 'Zombie Survival Arena', student: 'Emma, 13', course: 'Roblox AI', icon: '🎮', gradient: 'from-red-500 to-orange-600', description: 'Published Roblox game with 200+ plays, NPC zombies with AI behavior' },
  { title: 'StudyBuddy Bot', student: 'Arjun, 14', course: 'AI Chatbot', icon: '🤖', gradient: 'from-purple-500 to-violet-700', description: 'Homework helper chatbot that explains math in kid-friendly language' },
  { title: 'Space Pixel Pack', student: 'Maya, 10', course: 'AI Art', icon: '🎨', gradient: 'from-pink-500 to-rose-600', description: '50+ consistent pixel art sprites for a space shooter game' },
  { title: 'Recipe Finder App', student: 'Kai, 15', course: 'AI Web App', icon: '🚀', gradient: 'from-cyan-500 to-blue-600', description: 'Live web app that suggests recipes from fridge photos using AI vision' },
  { title: 'Dungeon Crawler OST', student: 'Sofia, 12', course: 'AI Music', icon: '🎵', gradient: 'from-amber-500 to-yellow-600', description: '8-track game soundtrack with boss battle themes and ambient loops' },
]

export function StudentGallery() {
  return (
    <section className="py-20 md:py-28 px-4 md:px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-neon-green text-sm font-semibold tracking-widest uppercase mb-4">Student Showcase</p>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight">
            Built By{' '}
            <span className="bg-gradient-to-r from-neon-green to-neon-pink bg-clip-text text-transparent">
              Kids Like Yours
            </span>
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-lg mx-auto">
            Real projects built by real students. This is what your child will create.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass-card rounded-2xl overflow-hidden group"
            >
              {/* Project header */}
              <div className={`h-24 bg-gradient-to-br ${p.gradient} flex items-center justify-center relative`}>
                <span className="text-4xl group-hover:scale-110 transition-transform duration-300">{p.icon}</span>
                <div className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-black/30 backdrop-blur-sm text-sm text-white font-medium">
                  {p.course}
                </div>
              </div>

              <div className="p-5">
                <h3 className="font-bold text-sm mb-1">{p.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-3 font-light">{p.description}</p>
                <div className="flex items-center gap-2 pt-3 border-t border-white/[0.04]">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-neon-orange/30 to-neon-pink/30 flex items-center justify-center text-sm font-bold text-white/70">
                    {p.student.split(',')[0][0]}
                  </div>
                  <span className="text-sm text-gray-500">Built by <span className="text-gray-300">{p.student}</span></span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
