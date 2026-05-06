import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { courses, type Course } from '../data/courses'
import { curricula } from '../data/curriculum'
import { GlowCard } from './GlowCard'

function CourseCard({ course, onClick }: { course: Course; onClick: () => void }) {
  // Extract gradient colors for glow
  const glowColors: Record<string, string> = {
    'from-green-500 to-emerald-700': 'rgba(34,197,94,0.12)',
    'from-red-500 to-orange-600': 'rgba(239,68,68,0.12)',
    'from-purple-500 to-violet-700': 'rgba(249,115,22,0.12)',
    'from-pink-500 to-rose-600': 'rgba(236,72,153,0.12)',
    'from-cyan-500 to-blue-600': 'rgba(236,72,153,0.12)',
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
        {/* Gradient header */}
        <div className={`h-36 bg-gradient-to-br ${course.gradient} flex items-center justify-center relative overflow-hidden`}>
          {/* Animated shine overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          <span className="text-6xl drop-shadow-lg">{course.icon}</span>
          {course.featured && (
            <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-yellow-400/90 text-black text-[11px] font-bold shadow-lg">
              ⭐ POPULAR
            </div>
          )}
          <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/40 backdrop-blur-sm text-white text-[11px] font-medium uppercase tracking-wider">
            {course.difficulty}
          </div>
        </div>

        <div className="p-6 flex-1 flex flex-col">
          <h3 className="text-lg font-bold mb-1">{course.title}</h3>
          <p className="text-xs text-neon-pink font-medium mb-3">{course.subtitle}</p>
          <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1 line-clamp-3">{course.description}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {course.tags.slice(0, 3).map(tag => (
              <span key={tag} className="px-2 py-0.5 rounded-md bg-white/[0.04] text-gray-500 text-[11px] border border-white/[0.04]">
                {tag}
              </span>
            ))}
          </div>

          {/* Spots + Footer */}
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-neon-green animate-pulse" />
            <span className="text-[11px] text-neon-green font-medium">
              {3 + (course.id.charCodeAt(0) % 5)} spots left — Summer cohort
            </span>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-white/[0.04]">
            <div className="flex items-center gap-2 text-xs text-gray-500">
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
        {/* Header */}
        <div className={`p-8 bg-gradient-to-br ${course.gradient} relative`}>
          <button onClick={onClose} className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/50 transition">
            ✕
          </button>
          <span className="text-5xl block mb-3 drop-shadow-lg">{course.icon}</span>
          <h2 className="text-2xl font-extrabold">{course.title}</h2>
          <p className="text-white/80 text-sm mt-1">{course.subtitle}</p>
          <div className="flex gap-4 mt-4 text-sm text-white/70">
            <span className="px-3 py-1 rounded-full bg-black/20 backdrop-blur-sm">🎓 {course.sessions} sessions</span>
            <span className="px-3 py-1 rounded-full bg-black/20 backdrop-blur-sm">👶 Ages {course.ageRange}</span>
            <span className="px-3 py-1 rounded-full bg-black/20 backdrop-blur-sm">📊 {course.difficulty}</span>
          </div>
        </div>

        {/* Highlights */}
        <div className="px-8 py-6 border-b border-white/[0.04]">
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
        <div className="px-8 py-6 overflow-y-auto flex-1">
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
