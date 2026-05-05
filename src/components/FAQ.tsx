import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const faqs = [
  { q: 'Does my child need coding experience?', a: 'Not at all! Our courses are designed for complete beginners. The whole point of AI-first learning is that AI handles the code — your child focuses on thinking, designing, and building.' },
  { q: 'What age range are the courses for?', a: 'Our courses are designed for ages 8-16. Beginner courses (Minecraft, AI Art, Music) start at age 8. Intermediate courses (Chatbot, Web App, Game Maker) are best for 12+. Each course page shows the recommended age.' },
  { q: 'What equipment does my child need?', a: 'A computer (Mac or PC) with internet access. For Minecraft and Roblox courses, they\'ll need those games installed. All AI tools we use either have free tiers or are provided as part of the course.' },
  { q: 'Will they actually learn to code?', a: 'They\'ll learn something MORE valuable — how to direct AI to code for them, how to read and debug code, and how to think computationally. These skills transfer to traditional coding and are increasingly more valuable in the AI age.' },
  { q: 'Are the courses live or self-paced?', a: 'Courses are live with a real instructor guiding your child through each session. Small class sizes (max 8 students) ensure everyone gets personal attention and can ask questions.' },
  { q: 'What if my child doesn\'t like it?', a: 'We offer a full refund after the first session if your child decides it\'s not for them. But honestly? Kids love this stuff. Building games and apps with AI is incredibly engaging.' },
  { q: 'How is this different from regular coding classes?', a: 'Traditional coding classes spend months on syntax before students build anything cool. Our students build real projects from day one because AI handles the syntax. We focus on the skills that matter: thinking, designing, and building.' },
]

function FAQItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left p-5 flex items-start justify-between gap-4 bg-dark-800/60 backdrop-blur-sm rounded-xl border border-white/[0.04] hover:border-white/[0.08] transition-all group"
      >
        <span className="font-semibold text-sm md:text-base">{faq.q}</span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          className="text-neon-purple text-xl flex-shrink-0 mt-0.5 group-hover:text-neon-cyan transition-colors"
        >
          +
        </motion.span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="px-5 py-4 text-gray-400 text-sm leading-relaxed">
              {faq.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export function FAQ() {
  return (
    <section id="faq" className="py-28 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-neon-green text-sm font-semibold tracking-widest uppercase mb-4">For Parents</p>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            Got{' '}
            <span className="bg-gradient-to-r from-neon-cyan to-neon-green bg-clip-text text-transparent">
              Questions?
            </span>
          </h2>
          <p className="text-gray-400">Here are the most common ones from parents.</p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
