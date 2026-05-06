import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { SUBSCRIBE_URL } from '../data/config'
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
      // Minecraft: bold 3D-ish blocks in isometric layout
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Ground row */}
        {[...Array(6)].map((_, i) => (
          <motion.div key={`g${i}`} className="absolute" style={{ left: `${8 + i * 16}%`, bottom: '15%' }}
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.15 }}
          >
            <div className="w-10 h-10 bg-green-800/60 border-2 border-green-500/40 rounded-sm shadow-lg shadow-green-900/30" />
            <div className="w-10 h-6 bg-amber-900/50 border-x-2 border-b-2 border-amber-700/30 -mt-px rounded-b-sm" />
          </motion.div>
        ))}
        {/* Floating blocks */}
        {[[25, 35, 'emerald'], [55, 25, 'sky'], [40, 50, 'amber']].map(([x, y, color], i) => (
          <motion.div key={`f${i}`} className="absolute"
            style={{ left: `${x}%`, top: `${y}%` }}
            animate={{ y: [0, -10, 0], rotate: [0, 5, -5, 0] }}
            transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: 'easeInOut', delay: i * 0.4 }}
          >
            <div className={`w-8 h-8 bg-${color}-600/50 border-2 border-${color}-400/50 rounded-sm shadow-md`}
              style={{ background: i === 0 ? 'rgba(16,185,129,0.5)' : i === 1 ? 'rgba(14,165,233,0.5)' : 'rgba(217,119,6,0.5)',
                       borderColor: i === 0 ? 'rgba(52,211,153,0.5)' : i === 1 ? 'rgba(56,189,248,0.5)' : 'rgba(245,158,11,0.5)' }}
            />
          </motion.div>
        ))}
        {/* Pickaxe icon */}
        <motion.div className="absolute left-1/2 top-[30%] -translate-x-1/2 text-3xl"
          animate={{ rotate: [-15, 15, -15] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >⛏️</motion.div>
      </div>
    ),
    'roblox-ai': (
      // Roblox: character + game UI elements
      <div className="absolute inset-0">
        {/* Character body */}
        <motion.div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="w-12 h-12 bg-white/25 rounded-lg border-2 border-white/40 shadow-lg" /> {/* Head */}
          <div className="w-16 h-14 bg-white/20 rounded-md border-2 border-white/30 -mt-1 mx-auto relative" style={{ marginLeft: -2 }}> {/* Body */}
            <div className="absolute -left-4 top-1 w-4 h-10 bg-white/15 rounded border border-white/20" /> {/* Left arm */}
            <div className="absolute -right-4 top-1 w-4 h-10 bg-white/15 rounded border border-white/20" /> {/* Right arm */}
          </div>
        </motion.div>
        {/* Floating stars */}
        {[[20, 20], [75, 15], [15, 70], [80, 65]].map(([x, y], i) => (
          <motion.div key={i} className="absolute text-xl"
            style={{ left: `${x}%`, top: `${y}%` }}
            animate={{ scale: [0.5, 1, 0.5], opacity: [0.3, 0.7, 0.3], rotate: [0, 180, 360] }}
            transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.5 }}
          >✦</motion.div>
        ))}
      </div>
    ),
    'ai-chatbot': (
      // Chatbot: conversation bubbles with typing indicators
      <div className="absolute inset-0 p-4">
        {[
          { side: 'left', y: '10%', w: 100, delay: 0, text: 'Hello! 👋' },
          { side: 'right', y: '30%', w: 80, delay: 0.8, text: 'Hi there!' },
          { side: 'left', y: '50%', w: 120, delay: 1.6, text: 'How can I help?' },
          { side: 'right', y: '70%', w: 90, delay: 2.4, text: '' }, // typing indicator
        ].map((b, i) => (
          <motion.div key={i}
            className={`absolute ${b.side === 'left' ? 'left-4' : 'right-4'} px-3 py-2 rounded-xl text-sm text-white/70 font-medium`}
            style={{ top: b.y, maxWidth: b.w,
              background: b.side === 'left' ? 'rgba(255,255,255,0.12)' : 'rgba(249,115,22,0.25)',
              border: `1px solid ${b.side === 'left' ? 'rgba(255,255,255,0.15)' : 'rgba(249,115,22,0.3)'}`,
            }}
            initial={{ opacity: 0, x: b.side === 'left' ? -20 : 20, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ delay: b.delay, duration: 0.4 }}
          >
            {b.text || (
              <div className="flex gap-1 py-0.5">
                {[0, 1, 2].map(j => (
                  <motion.div key={j} className="w-1.5 h-1.5 rounded-full bg-white/50"
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 0.6, repeat: Infinity, delay: j * 0.15 }}
                  />
                ))}
              </div>
            )}
          </motion.div>
        ))}
        {/* Bot avatar */}
        <motion.div className="absolute left-4 bottom-3 text-2xl"
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >🤖</motion.div>
      </div>
    ),
    'ai-art': (
      // Art: colorful paint strokes with brush
      <div className="absolute inset-0">
        {[
          { color: 'rgba(239,68,68,0.4)', x: 15, y: 20, w: 80, h: 20, rotate: -12, delay: 0 },
          { color: 'rgba(59,130,246,0.35)', x: 40, y: 35, w: 90, h: 18, rotate: 8, delay: 0.3 },
          { color: 'rgba(234,179,8,0.4)', x: 20, y: 55, w: 70, h: 22, rotate: -5, delay: 0.6 },
          { color: 'rgba(168,85,247,0.35)', x: 50, y: 15, w: 60, h: 16, rotate: 15, delay: 0.9 },
          { color: 'rgba(34,197,94,0.3)', x: 35, y: 70, w: 85, h: 20, rotate: -8, delay: 1.2 },
        ].map((s, i) => (
          <motion.div key={i} className="absolute rounded-full"
            style={{
              left: `${s.x}%`, top: `${s.y}%`, width: s.w, height: s.h,
              background: s.color, transform: `rotate(${s.rotate}deg)`,
              filter: 'blur(2px)',
            }}
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: [0, 1, 1], opacity: [0, 0.8, 0.6] }}
            transition={{ duration: 0.8, delay: s.delay, repeat: Infinity, repeatDelay: 4 }}
          />
        ))}
        <motion.div className="absolute right-6 top-4 text-2xl"
          animate={{ rotate: [-20, 20, -20], x: [-5, 5, -5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >🎨</motion.div>
      </div>
    ),
    'ai-webapp': (
      // Web app: browser window with live code
      <div className="absolute inset-0 flex items-center justify-center p-3">
        <motion.div className="w-full max-w-[160px] rounded-lg border border-white/25 overflow-hidden shadow-2xl"
          style={{ background: 'rgba(0,0,0,0.4)' }}
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          {/* Browser chrome */}
          <div className="h-5 bg-white/10 flex items-center gap-1.5 px-2 border-b border-white/10">
            <div className="w-2 h-2 rounded-full bg-red-500/70" />
            <div className="w-2 h-2 rounded-full bg-yellow-500/70" />
            <div className="w-2 h-2 rounded-full bg-green-500/70" />
            <div className="flex-1 mx-2 h-2.5 rounded bg-white/10" />
          </div>
          {/* Code lines */}
          <div className="p-2.5 space-y-1.5">
            {[
              { w: '70%', color: 'rgba(249,115,22,0.5)' },
              { w: '50%', color: 'rgba(236,72,153,0.4)' },
              { w: '85%', color: 'rgba(255,255,255,0.15)' },
              { w: '40%', color: 'rgba(34,197,94,0.4)' },
              { w: '65%', color: 'rgba(249,115,22,0.3)' },
              { w: '55%', color: 'rgba(255,255,255,0.12)' },
            ].map((line, i) => (
              <motion.div key={i} className="h-2 rounded-sm"
                style={{ width: line.w, background: line.color }}
                animate={{ opacity: [0.4, 0.9, 0.4] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    ),
    'ai-music': (
      // Music: bold equalizer bars
      <div className="absolute inset-0 flex items-end justify-center gap-[3px] pb-6 px-6">
        {[...Array(20)].map((_, i) => {
          const baseH = 25 + Math.sin(i * 0.7) * 20
          return (
            <motion.div key={i} className="flex-1 rounded-t-sm"
              style={{ background: `linear-gradient(to top, rgba(249,115,22,0.6), rgba(236,72,153,0.4))` }}
              animate={{
                height: [
                  `${baseH}%`,
                  `${Math.min(90, baseH + 40 + Math.random() * 20)}%`,
                  `${baseH}%`,
                ],
              }}
              transition={{ duration: 0.8 + (i % 4) * 0.2, repeat: Infinity, ease: 'easeInOut', delay: i * 0.05 }}
            />
          )
        })}
        {/* Music note */}
        <motion.div className="absolute top-3 right-4 text-2xl"
          animate={{ y: [0, -5, 0], rotate: [0, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >🎵</motion.div>
      </div>
    ),
    'ai-gamemaker': (
      // Game maker: side-scroller platformer scene
      <div className="absolute inset-0">
        {/* Sky stars */}
        {[...Array(8)].map((_, i) => (
          <motion.div key={`s${i}`} className="absolute w-1 h-1 rounded-full bg-white/40"
            style={{ left: `${10 + i * 12}%`, top: `${10 + (i % 3) * 15}%` }}
            animate={{ opacity: [0.2, 0.6, 0.2] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
          />
        ))}
        {/* Ground */}
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-green-900/40 border-t-2 border-green-500/30" />
        {/* Platforms */}
        <div className="absolute bottom-14 left-[15%] w-20 h-3 bg-amber-800/50 border border-amber-600/40 rounded-sm" />
        <div className="absolute bottom-24 left-[45%] w-16 h-3 bg-amber-800/50 border border-amber-600/40 rounded-sm" />
        <div className="absolute bottom-32 left-[25%] w-24 h-3 bg-amber-800/50 border border-amber-600/40 rounded-sm" />
        {/* Player character */}
        <motion.div className="absolute"
          style={{ bottom: 32, left: '20%' }}
          animate={{ x: [0, 60, 120, 60, 0], y: [0, -30, -10, -35, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="w-5 h-7 bg-orange-500/60 rounded-t-md rounded-b-sm border border-orange-400/50 shadow-md shadow-orange-500/20" />
        </motion.div>
        {/* Coins */}
        {[[40, 45], [55, 30], [70, 50]].map(([x, y], i) => (
          <motion.div key={`c${i}`} className="absolute w-4 h-4 rounded-full border-2 border-yellow-400/60"
            style={{ left: `${x}%`, bottom: `${y}%`, background: 'rgba(234,179,8,0.35)' }}
            animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.9, 0.5] }}
            transition={{ duration: 1, repeat: Infinity, delay: i * 0.3 }}
          />
        ))}
        {/* Enemy */}
        <motion.div className="absolute bottom-8 right-[20%] w-6 h-6 bg-red-500/40 rounded-full border border-red-400/50"
          animate={{ x: [-15, 15, -15] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </div>
    ),
    'ai-video': (
      // Video: film reel with play button
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Film strip bars */}
        <div className="absolute top-0 left-0 right-0 h-6 flex">
          {[...Array(10)].map((_, i) => (
            <motion.div key={`t${i}`} className="flex-1 mx-0.5 bg-white/8 rounded-sm border border-white/10"
              animate={{ opacity: [0.1, 0.2, 0.1] }}
              transition={{ duration: 1, repeat: Infinity, delay: i * 0.1 }}
            />
          ))}
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-6 flex">
          {[...Array(10)].map((_, i) => (
            <motion.div key={`b${i}`} className="flex-1 mx-0.5 bg-white/8 rounded-sm border border-white/10"
              animate={{ opacity: [0.1, 0.2, 0.1] }}
              transition={{ duration: 1, repeat: Infinity, delay: i * 0.1 + 0.5 }}
            />
          ))}
        </div>
        {/* Central play button */}
        <motion.div className="relative z-10"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-20 h-20 rounded-full border-3 border-white/30 flex items-center justify-center"
            style={{ background: 'rgba(255,255,255,0.08)', borderWidth: 3 }}
          >
            <div className="w-0 h-0 ml-1.5" style={{
              borderLeft: '16px solid rgba(255,255,255,0.5)',
              borderTop: '10px solid transparent',
              borderBottom: '10px solid transparent',
            }} />
          </div>
        </motion.div>
        {/* Recording dot */}
        <motion.div className="absolute top-8 right-4 flex items-center gap-1.5"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <span className="text-sm text-white/50 font-mono">REC</span>
        </motion.div>
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
              <span className="px-2 py-0.5 rounded-md bg-yellow-400/90 text-black text-sm font-bold shadow-lg">
                ★ POPULAR
              </span>
            )}
            <span className="px-2 py-0.5 rounded-md bg-dark-800/80 backdrop-blur-sm text-white text-sm font-medium uppercase tracking-wider border border-white/10">
              {course.difficulty}
            </span>
          </div>
        </div>

        <div className="p-5 pt-4 flex-1 flex flex-col">
          <h3 className="text-base font-bold mb-1">{course.title}</h3>
          <p className="text-sm text-neon-pink font-medium mb-2">{course.subtitle}</p>
          <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1 line-clamp-2">{course.description}</p>

          {/* Spots */}
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-neon-green animate-pulse" />
            <span className="text-sm text-neon-green font-medium">
              {3 + (course.id.charCodeAt(0) % 5)} spots left
            </span>
          </div>

          <div className="flex items-center justify-between pt-3 border-t border-white/[0.04]">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span>{course.sessions} sessions</span>
              <span className="w-1 h-1 rounded-full bg-gray-700" />
              <span>Ages {course.ageRange}</span>
            </div>
            <span className="text-sm font-medium text-neon-green">
              Included
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
              <span className="px-2.5 py-1 rounded-md bg-white/10 backdrop-blur-sm text-sm text-white/80">{course.sessions} sessions</span>
              <span className="px-2.5 py-1 rounded-md bg-white/10 backdrop-blur-sm text-sm text-white/80">Ages {course.ageRange}</span>
              <span className="px-2.5 py-1 rounded-md bg-white/10 backdrop-blur-sm text-sm text-white/80">{course.difficulty}</span>
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div className="px-8 py-5 border-b border-white/[0.04]">
          <h3 className="font-bold text-sm text-gray-500 uppercase tracking-widest mb-3">What You'll Build</h3>
          <div className="grid grid-cols-2 gap-2">
            {course.highlights.map(h => (
              <div key={h} className="flex items-start gap-2 text-sm text-gray-300">
                <span className="text-neon-green mt-0.5 text-sm">✓</span>
                {h}
              </div>
            ))}
          </div>
        </div>

        {/* Curriculum */}
        <div className="px-8 py-5 overflow-y-auto flex-1">
          <h3 className="font-bold text-sm text-gray-500 uppercase tracking-widest mb-4">Full Curriculum</h3>
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
                      <p className="text-sm text-gray-500 truncate">{session.description}</p>
                    </div>
                    <span className="text-gray-600 group-open:rotate-90 transition-transform text-lg">›</span>
                  </summary>
                  <div className="ml-11 mt-2 space-y-2">
                    {session.lessons.map((lesson, li) => (
                      <div key={li} className="p-3 rounded-lg bg-white/[0.015] border border-white/[0.03]">
                        <p className="font-medium text-sm mb-2">{lesson.title}</p>
                        <div className="space-y-1">
                          {lesson.objectives.map((obj, oi) => (
                            <p key={oi} className="text-sm text-gray-400 flex items-start gap-2">
                              <span className="text-neon-pink">→</span> {obj}
                            </p>
                          ))}
                        </div>
                        <div className="flex flex-wrap gap-1 mt-2">
                          {lesson.aiTools.map(tool => (
                            <span key={tool} className="px-2 py-0.5 rounded bg-neon-orange/10 text-neon-orange text-sm font-medium">
                              {tool}
                            </span>
                          ))}
                        </div>
                        <p className="text-sm text-neon-green mt-2 font-medium">🎯 {lesson.project}</p>
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
          <div>
            <span className="text-sm text-gray-400">Included with subscription</span>
          </div>
          <div className="flex gap-3">
            <a href="#courses" className="px-5 py-2.5 rounded-full bg-white/[0.06] border border-white/[0.06] text-white text-sm font-medium hover:bg-white/[0.1] transition-all">
              Book a Call
            </a>
            <a href={SUBSCRIBE_URL} className="px-5 py-2.5 rounded-full bg-neon-green text-dark-900 font-bold hover:bg-green-400 hover:scale-105 transition-all text-sm">
              Start Learning →
            </a>
          </div>
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
