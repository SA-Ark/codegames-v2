import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { courses, type Course } from '../data/courses'
import { curricula } from '../data/curriculum'

function CourseCard({ course, onClick }: { course: Course; onClick: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      onClick={onClick}
      className="cursor-pointer group relative"
    >
      <div className="bg-dark-800 rounded-2xl overflow-hidden border border-white/5 hover:border-white/15 transition-all duration-300 h-full flex flex-col">
        {/* Gradient header */}
        <div className={`h-32 bg-gradient-to-r ${course.gradient} flex items-center justify-center relative overflow-hidden`}>
          <span className="text-6xl group-hover:scale-110 transition-transform duration-300">{course.icon}</span>
          {course.featured && (
            <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-yellow-500/90 text-black text-xs font-bold">
              ⭐ POPULAR
            </div>
          )}
          <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/30 backdrop-blur-sm text-white text-xs font-medium">
            {course.difficulty}
          </div>
        </div>

        <div className="p-6 flex-1 flex flex-col">
          <h3 className="text-xl font-bold mb-1">{course.title}</h3>
          <p className="text-sm text-neon-cyan mb-3">{course.subtitle}</p>
          <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">{course.description}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {course.tags.slice(0, 3).map(tag => (
              <span key={tag} className="px-2 py-1 rounded-md bg-white/5 text-gray-400 text-xs">
                {tag}
              </span>
            ))}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-white/5">
            <div className="flex items-center gap-3 text-sm text-gray-400">
              <span>🎓 {course.sessions} sessions</span>
              <span>👶 {course.ageRange}</span>
            </div>
            <span className="text-lg font-bold bg-gradient-to-r from-neon-purple to-neon-cyan bg-clip-text text-transparent">
              {course.price}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function CurriculumModal({ course, onClose }: { course: Course; onClose: () => void }) {
  const curriculum = curricula.find(c => c.courseId === course.id)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={e => e.stopPropagation()}
        className="bg-dark-800 rounded-2xl border border-white/10 max-w-3xl w-full max-h-[85vh] overflow-hidden flex flex-col"
      >
        {/* Header */}
        <div className={`p-6 bg-gradient-to-r ${course.gradient} relative`}>
          <button onClick={onClose} className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/30 flex items-center justify-center text-white hover:bg-black/50 transition">
            ✕
          </button>
          <span className="text-5xl block mb-3">{course.icon}</span>
          <h2 className="text-2xl font-bold">{course.title}</h2>
          <p className="text-white/80 text-sm mt-1">{course.subtitle}</p>
          <div className="flex gap-4 mt-3 text-sm text-white/70">
            <span>🎓 {course.sessions} sessions</span>
            <span>👶 Ages {course.ageRange}</span>
            <span>📊 {course.difficulty}</span>
          </div>
        </div>

        {/* Highlights */}
        <div className="p-6 border-b border-white/5">
          <h3 className="font-bold text-sm text-gray-400 uppercase tracking-wider mb-3">What You'll Build</h3>
          <div className="grid grid-cols-2 gap-2">
            {course.highlights.map(h => (
              <div key={h} className="flex items-start gap-2 text-sm text-gray-300">
                <span className="text-neon-green mt-0.5">✓</span>
                {h}
              </div>
            ))}
          </div>
        </div>

        {/* Curriculum */}
        <div className="p-6 overflow-y-auto flex-1">
          <h3 className="font-bold text-sm text-gray-400 uppercase tracking-wider mb-4">Full Curriculum</h3>
          {curriculum ? (
            <div className="space-y-4">
              {curriculum.sessions.map(session => (
                <details key={session.sessionNumber} className="group">
                  <summary className="flex items-center gap-3 cursor-pointer p-3 rounded-xl bg-white/3 hover:bg-white/5 transition">
                    <span className="w-8 h-8 rounded-lg bg-gradient-to-r from-neon-purple/20 to-neon-cyan/20 flex items-center justify-center text-sm font-bold text-neon-purple">
                      {session.sessionNumber}
                    </span>
                    <div className="flex-1">
                      <span className="font-semibold text-sm">{session.title}</span>
                      <p className="text-xs text-gray-500">{session.description}</p>
                    </div>
                    <span className="text-gray-500 group-open:rotate-90 transition-transform">›</span>
                  </summary>
                  <div className="ml-11 mt-2 space-y-3">
                    {session.lessons.map((lesson, li) => (
                      <div key={li} className="p-3 rounded-lg bg-white/2 border border-white/5">
                        <p className="font-medium text-sm mb-2">{lesson.title}</p>
                        <div className="space-y-1">
                          {lesson.objectives.map((obj, oi) => (
                            <p key={oi} className="text-xs text-gray-400 flex items-start gap-2">
                              <span className="text-neon-cyan">→</span> {obj}
                            </p>
                          ))}
                        </div>
                        <div className="flex flex-wrap gap-1 mt-2">
                          {lesson.aiTools.map(tool => (
                            <span key={tool} className="px-2 py-0.5 rounded bg-neon-purple/10 text-neon-purple text-xs">
                              {tool}
                            </span>
                          ))}
                        </div>
                        <p className="text-xs text-neon-green mt-2">🎯 Project: {lesson.project}</p>
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
        <div className="p-6 border-t border-white/5 flex items-center justify-between">
          <span className="text-2xl font-bold bg-gradient-to-r from-neon-purple to-neon-cyan bg-clip-text text-transparent">
            {course.price}
          </span>
          <button className="px-6 py-3 rounded-full bg-gradient-to-r from-neon-purple to-neon-pink text-white font-semibold hover:scale-105 transition-transform">
            Enroll Now →
          </button>
        </div>
      </motion.div>
    </motion.div>
  )
}

export function CourseGrid() {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null)

  return (
    <section id="courses" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Choose Your{' '}
            <span className="bg-gradient-to-r from-neon-purple to-neon-pink bg-clip-text text-transparent">
              Adventure
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            8 courses designed to turn you into an AI-powered builder. Click any course to see the full curriculum.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
