import { motion } from 'framer-motion'

const testimonials = [
  {
    quote: "My son went from playing Roblox all day to actually BUILDING games in Roblox. He's so proud of what he's made. Worth every penny.",
    name: 'Sarah M.',
    detail: 'Parent of Lucas, 11',
    course: 'Roblox AI Game Studio',
  },
  {
    quote: "She used to say she hated coding. After one week with AI Games Academy, she built a chatbot for her school project. The teacher was blown away.",
    name: 'David K.',
    detail: 'Parent of Anika, 13',
    course: 'AI Chatbot Creator',
  },
  {
    quote: "The AI-first approach is genius. My kids aren't memorizing syntax — they're learning to THINK and BUILD. That's the real skill.",
    name: 'Priya R.',
    detail: 'Parent of Arjun, 9 & Maya, 12',
    course: 'Minecraft AI Builder',
  },
  {
    quote: "Within 3 sessions, my daughter created a full web app and deployed it. She literally showed her friends a link to something she built. I've never seen her this excited about learning.",
    name: 'James T.',
    detail: 'Parent of Emma, 14',
    course: 'AI Web App Builder',
  },
]

export function Testimonials() {
  return (
    <section className="py-24 md:py-28 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-neon-pink text-sm font-semibold tracking-widest uppercase mb-4">What Parents Say</p>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight">
            Real Parents.{' '}
            <span className="bg-gradient-to-r from-neon-orange to-neon-pink bg-clip-text text-transparent">
              Real Results.
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-2xl p-7 md:p-8 flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4 text-yellow-400 text-sm">
                {'★★★★★'}
              </div>

              <p className="text-gray-300 text-sm md:text-[15px] leading-relaxed flex-1 mb-5 font-light italic">
                "{t.quote}"
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-white/[0.04]">
                {/* Avatar placeholder */}
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-neon-orange/30 to-neon-pink/30 flex items-center justify-center text-sm font-bold text-white/70">
                  {t.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.detail}</p>
                </div>
                <div className="ml-auto">
                  <span className="text-sm px-2 py-1 rounded-full bg-neon-orange/10 text-neon-orange font-medium">
                    {t.course}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
