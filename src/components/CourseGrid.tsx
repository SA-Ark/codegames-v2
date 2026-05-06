import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { courses, type Course } from '../data/courses'
import { curricula } from '../data/curriculum'
import { GlowCard } from './GlowCard'

/**
 * Unique animated scene per course — pure CSS art, no emojis as hero.
 * Each scene tells a visual story about what the course IS.
 */
function CourseScene({ courseId, gradient }: { courseId: string; gradient: string }) {
  const scenes: Record<string, React.ReactNode> = {
    'minecraft-ai': (
      // Minecraft: floating blocks in isometric grid
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-full h-full">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-sm border border-white/20"
              style={{
                width: 16 + (i % 3) * 8,
                height: 16 + (i % 3) * 8,
                left: `${15 + (i % 4) * 20}%`,
                top: `${10 + Math.floor(i / 4) * 28}%`,
                background: `rgba(255,255,255,${0.05 + (i % 3) * 0.05})`,
                transform: 'rotate(45deg)',
              }}
              animate={{ y: [0, -6, 0], rotate: [45, 45, 45] }}
              transition={{ duration: 2 + i * 0.3, repeat: Infinity, ease: 'easeInOut', delay: i * 0.2 }}
            />
          ))}
          <motion.div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 border border-white/30 rounded"
            animate={{ rotate: [0, 90, 180, 270, 360] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          />
        </div>
      </div>
    ),
    'roblox-ai': (
      // Roblox: character silhouettes and game elements
      <div className="absolute inset-0 flex items-center justify-center">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/10 border border-white/20"
            style={{
              width: 20 + i * 12,
              height: 20 + i * 12,
              left: `${20 + i * 14}%`,
              top: `${50 - i * 5}%`,
            }}
            animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.4 }}
          />
        ))}
        <motion.div className="absolute w-8 h-12 bg-white/15 rounded-t-lg rounded-b-sm left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border border-white/25"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>
    ),
    'ai-chatbot': (
      // Chatbot: message bubbles floating
      <div className="absolute inset-0">
        {[
          { w: 50, h: 16, x: '15%', y: '25%', delay: 0 },
          { w: 40, h: 16, x: '55%', y: '40%', delay: 0.5 },
          { w: 60, h: 16, x: '25%', y: '55%', delay: 1 },
          { w: 35, h: 16, x: '60%', y: '70%', delay: 1.5 },
        ].map((b, i) => (
          <motion.div
            key={i}
            className="absolute rounded-xl bg-white/8 border border-white/15"
            style={{ width: b.w, height: b.h, left: b.x, top: b.y }}
            initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
            animate={{ opacity: [0, 0.15, 0.15, 0], x: 0 }}
            transition={{ duration: 3, repeat: Infinity, delay: b.delay }}
          >
            <div className="flex gap-1 p-2">
              {[...Array(2 + (i % 2))].map((_, j) => (
                <div key={j} className="h-1.5 rounded-full bg-white/20" style={{ width: 8 + j * 6 }} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    ),
    'ai-art': (
      // Art: paintbrush strokes / color splashes
      <div className="absolute inset-0">
        {['rgba(255,100,100,0.15)', 'rgba(100,200,255,0.12)', 'rgba(255,200,50,0.12)', 'rgba(150,100,255,0.15)', 'rgba(100,255,150,0.1)'].map((color, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full blur-sm"
            style={{
              width: 30 + i * 15,
              height: 30 + i * 15,
              left: `${10 + i * 18}%`,
              top: `${20 + (i % 3) * 20}%`,
              background: color,
            }}
            animate={{ scale: [0.8, 1.2, 0.8], rotate: [0, 10, -10, 0] }}
            transition={{ duration: 3 + i * 0.5, repeat: Infinity, delay: i * 0.3 }}
          />
        ))}
      </div>
    ),
    'ai-webapp': (
      // Web app: browser window with code lines
      <div className="absolute inset-0 flex items-center justify-center p-6">
        <motion.div
          className="w-full max-w-[120px] bg-white/5 rounded-lg border border-white/15 overflow-hidden"
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <div className="h-4 bg-white/10 flex items-center gap-1 px-2">
            <div className="w-1.5 h-1.5 rounded-full bg-red-400/50" />
            <div className="w-1.5 h-1.5 rounded-full bg-yellow-400/50" />
            <div className="w-1.5 h-1.5 rounded-full bg-green-400/50" />
          </div>
          <div className="p-2 space-y-1.5">
            {[60, 45, 70, 35, 55].map((w, i) => (
              <motion.div
                key={i}
                className="h-1.5 rounded-full bg-white/10"
                style={{ width: `${w}%` }}
                animate={{ opacity: [0.1, 0.25, 0.1] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    ),
    'ai-music': (
      // Music: sound wave bars
      <div className="absolute inset-0 flex items-end justify-center gap-1 pb-8 px-8">
        {[...Array(16)].map((_, i) => (
          <motion.div
            key={i}
            className="flex-1 rounded-t-sm bg-white/12"
            animate={{
              height: [
                `${20 + Math.sin(i * 0.8) * 30}%`,
                `${50 + Math.cos(i * 0.5) * 40}%`,
                `${20 + Math.sin(i * 0.8) * 30}%`,
              ],
            }}
            transition={{ duration: 1.5 + (i % 3) * 0.3, repeat: Infinity, ease: 'easeInOut', delay: i * 0.08 }}
          />
        ))}
      </div>
    ),
    'ai-gamemaker': (
      // Game maker: platformer elements
      <div className="absolute inset-0">
        {/* Ground */}
        <div className="absolute bottom-4 left-4 right-4 h-3 bg-white/8 rounded" />
        {/* Platforms */}
        <motion.div className="absolute bottom-12 left-[20%] w-14 h-2 bg-white/12 rounded"
          animate={{ x: [0, 15, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <div className="absolute bottom-20 left-[50%] w-12 h-2 bg-white/10 rounded" />
        <div className="absolute bottom-28 left-[30%] w-16 h-2 bg-white/8 rounded" />
        {/* Player */}
        <motion.div className="absolute w-4 h-6 bg-white/20 rounded-sm border border-white/30"
          style={{ bottom: 16, left: '25%' }}
          animate={{ y: [0, -20, 0], x: [0, 40, 80] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* Coins */}
        {[35, 55, 75].map((x, i) => (
          <motion.div key={i} className="absolute w-3 h-3 rounded-full bg-yellow-400/20 border border-yellow-400/30"
            style={{ left: `${x}%`, bottom: `${36 + i * 10}%` }}
            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
          />
        ))}
      </div>
    ),
    'ai-video': (
      // Video: film strip / play button
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="w-16 h-16 rounded-full border-2 border-white/20 flex items-center justify-center"
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-0 h-0 border-l-[12px] border-l-white/25 border-y-[8px] border-y-transparent ml-1" />
        </motion.div>
        {/* Film strip holes */}
        <div className="absolute left-3 top-0 bottom-0 w-4 flex flex-col justify-around">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="w-3 h-2 rounded-sm bg-white/6 border border-white/10" />
          ))}
        </div>
        <div className="absolute right-3 top-0 bottom-0 w-4 flex flex-col justify-around">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="w-3 h-2 rounded-sm bg-white/6 border border-white/10" />
          ))}
        </div>
      </div>
    ),
  }

  return (
    <div className={`h-44 bg-gradient-to-br ${gradient} relative overflow-hidden`}>
      {/* Noise texture */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'3\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'0.5\'/%3E%3C/svg%3E")',
        backgroundSize: '128px',
      }} />
      {/* Vignette */}
      <div className="absolute inset-0 bg-radial-gradient" style={{
        background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.3) 100%)',
      }} />
      {scenes[courseId] || null}
    </div>
  )
}

function CourseCard({ course, onClick }: { course: Course; onClick: () => void }) {
  const glowColors: Record<string, string> = {
    'from-green-500 to-emerald-700': 'rgba(34,197,94,0.12)',
    'from-red-500 to-orange-600': 'rgba(239,68,68,0.12)',
    'from-purple-500 to-violet-700': 'rgba(249,115,22,0.12)',
    'from-pink-500 to-rose-600': 'rgba(236,72,153,0.12)',
    'from-cyan-500 to-blue-600': 'rgba(249,115,22,0.12)',
    'from-amber-500 to-yellow-600': 'rgba(245,158,11,0.12)',
    'from-indigo-500 to-purple-600': 'rgba(99,102,241,0.12)',
    'from-teal-500 to-green-600': 'rgba(20,184,166,0.12)',
  }

  return (
    <GlowCard
      onClick={onClick}
      glowColor={glowColors[course.gradient] || 'rgba(249,115,22,0.12)'}
      className="rounded-2xl"
    >
      <div className="glass-card rounded-2xl overflow-hidden h-full flex flex-col">
        {/* Animated scene header */}
        <CourseScene courseId={course.id} gradient={course.gradient} />
        {/* Badges overlay */}
        <div className="relative">
          <div className="absolute -top-7 left-4 flex items-center gap-2">
            {course.featured && (
              <span className="px-2 py-0.5 rounded-md bg-yellow-400/90 text-black text-[10px] font-bold shadow-lg">
                ★ POPULAR
              </span>
            )}
            <span className="px-2 py-0.5 rounded-md bg-dark-800/80 backdrop-blur-sm text-white text-[10px] font-medium uppercase tracking-wider border border-white/10">
              {course.difficulty}
            </span>
          </div>
        </div>

        <div className="p-5 pt-4 flex-1 flex flex-col">
          <h3 className="text-base font-bold mb-1">{course.title}</h3>
          <p className="text-[11px] text-neon-pink font-medium mb-2">{course.subtitle}</p>
          <p className="text-gray-400 text-[13px] leading-relaxed mb-4 flex-1 line-clamp-2">{course.description}</p>

          {/* Spots */}
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-neon-green animate-pulse" />
            <span className="text-[11px] text-neon-green font-medium">
              {3 + (course.id.charCodeAt(0) % 5)} spots left
            </span>
          </div>

          <div className="flex items-center justify-between pt-3 border-t border-white/[0.04]">
            <div className="flex items-center gap-2 text-[11px] text-gray-500">
              <span>{course.sessions} sessions</span>
              <span className="w-1 h-1 rounded-full bg-gray-700" />
              <span>Ages {course.ageRange}</span>
            </div>
            <span className="text-lg font-bold text-neon-pink">
              {course.price}
            </span>
          </div>
        </div>
      </div>
    </GlowCard>
  )
}

function CurriculumModal({ course, onClose }: { course: Course; onClose: () => void }) {
  const curriculum = curricula.find(c => c.courseId === course.id)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.92, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.92, opacity: 0, y: 20 }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        onClick={e => e.stopPropagation()}
        className="bg-dark-800/95 backdrop-blur-xl rounded-3xl border border-white/[0.08] max-w-3xl w-full max-h-[85vh] overflow-hidden flex flex-col shadow-2xl shadow-black/50"
      >
        {/* Header with scene */}
        <div className="relative">
          <CourseScene courseId={course.id} gradient={course.gradient} />
          <button onClick={onClose} className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/60 transition z-10">
            ✕
          </button>
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-dark-800 via-dark-800/80 to-transparent">
            <h2 className="text-2xl font-extrabold">{course.title}</h2>
            <p className="text-white/70 text-sm mt-1">{course.subtitle}</p>
            <div className="flex flex-wrap gap-2 mt-3">
              <span className="px-2.5 py-1 rounded-md bg-white/10 backdrop-blur-sm text-xs text-white/80">{course.sessions} sessions</span>
              <span className="px-2.5 py-1 rounded-md bg-white/10 backdrop-blur-sm text-xs text-white/80">Ages {course.ageRange}</span>
              <span className="px-2.5 py-1 rounded-md bg-white/10 backdrop-blur-sm text-xs text-white/80">{course.difficulty}</span>
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div className="px-8 py-5 border-b border-white/[0.04]">
          <h3 className="font-bold text-xs text-gray-500 uppercase tracking-widest mb-3">What You'll Build</h3>
          <div className="grid grid-cols-2 gap-2">
            {course.highlights.map(h => (
              <div key={h} className="flex items-start gap-2 text-sm text-gray-300">
                <span className="text-neon-green mt-0.5 text-xs">✓</span>
                {h}
              </div>
            ))}
          </div>
        </div>

        {/* Curriculum */}
        <div className="px-8 py-5 overflow-y-auto flex-1">
          <h3 className="font-bold text-xs text-gray-500 uppercase tracking-widest mb-4">Full Curriculum</h3>
          {curriculum ? (
            <div className="space-y-3">
              {curriculum.sessions.map(session => (
                <details key={session.sessionNumber} className="group">
                  <summary className="flex items-center gap-3 cursor-pointer p-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.04] transition border border-white/[0.03]">
                    <span className="w-8 h-8 rounded-lg bg-gradient-to-r from-neon-orange/20 to-neon-pink/20 flex items-center justify-center text-sm font-bold text-neon-orange flex-shrink-0">
                      {session.sessionNumber}
                    </span>
                    <div className="flex-1 min-w-0">
                      <span className="font-semibold text-sm block">{session.title}</span>
                      <p className="text-xs text-gray-500 truncate">{session.description}</p>
                    </div>
                    <span className="text-gray-600 group-open:rotate-90 transition-transform text-lg">›</span>
                  </summary>
                  <div className="ml-11 mt-2 space-y-2">
                    {session.lessons.map((lesson, li) => (
                      <div key={li} className="p-3 rounded-lg bg-white/[0.015] border border-white/[0.03]">
                        <p className="font-medium text-sm mb-2">{lesson.title}</p>
                        <div className="space-y-1">
                          {lesson.objectives.map((obj, oi) => (
                            <p key={oi} className="text-xs text-gray-400 flex items-start gap-2">
                              <span className="text-neon-pink">→</span> {obj}
                            </p>
                          ))}
                        </div>
                        <div className="flex flex-wrap gap-1 mt-2">
                          {lesson.aiTools.map(tool => (
                            <span key={tool} className="px-2 py-0.5 rounded bg-neon-orange/10 text-neon-orange text-[10px] font-medium">
                              {tool}
                            </span>
                          ))}
                        </div>
                        <p className="text-[11px] text-neon-green mt-2 font-medium">🎯 {lesson.project}</p>
                      </div>
                    ))}
                  </div>
                </details>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-sm">Curriculum details coming soon!</p>
          )}
        </div>

        {/* CTA */}
        <div className="px-8 py-5 border-t border-white/[0.04] flex items-center justify-between bg-dark-900/50">
          <span className="text-2xl font-extrabold bg-gradient-to-r from-neon-orange to-neon-pink bg-clip-text text-transparent">
            {course.price}
          </span>
          <a href={course.checkoutUrl} className="px-6 py-3 rounded-full bg-gradient-to-r from-neon-orange to-neon-pink text-white font-semibold hover:shadow-[0_0_30px_rgba(249,115,22,0.3)] hover:scale-105 transition-all">
            Enroll Now →
          </a>
        </div>
      </motion.div>
    </motion.div>
  )
}

export function CourseGrid() {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null)

  return (
    <section id="courses" className="py-20 md:py-28 px-4 md:px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-neon-pink text-sm font-semibold tracking-widest uppercase mb-4">8 Courses Available</p>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight">
            Choose Your{' '}
            <span className="bg-gradient-to-r from-neon-orange to-neon-pink bg-clip-text text-transparent">
              Adventure
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Click any course to explore the full curriculum, projects, and AI tools you'll master.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6">
          {courses.map(course => (
            <CourseCard key={course.id} course={course} onClick={() => setSelectedCourse(course)} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedCourse && (
          <CurriculumModal course={selectedCourse} onClose={() => setSelectedCourse(null)} />
        )}
      </AnimatePresence>
    </section>
  )
}
