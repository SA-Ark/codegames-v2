import { motion } from 'framer-motion'
import { Navbar } from './Navbar'
import { Footer } from './Footer'

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <motion.section {...fadeIn} className="mb-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-neon-orange to-neon-pink bg-clip-text text-transparent">
        {title}
      </h2>
      {children}
    </motion.section>
  )
}

const regions = [
  { name: 'The Spire', emoji: '🧠', teaches: 'AI-native thinking, critical reasoning, systems analysis', skills: 'Understanding how AI works, evaluating information, making decisions in an AI-driven world, ethical reasoning' },
  { name: 'The Forge', emoji: '🎮', teaches: 'Game design, interactive systems, player psychology', skills: 'Systems thinking, cause-and-effect reasoning, iterative design, project management' },
  { name: 'The Nexus', emoji: '🤖', teaches: 'AI tools, prompt engineering, AI collaboration', skills: 'Effective AI use, communication clarity, creative problem-solving, tool mastery' },
  { name: 'The Grid', emoji: '💻', teaches: 'Web and app concepts, digital systems, architecture', skills: 'How the internet works, information architecture, system design, data thinking' },
  { name: 'The Atelier', emoji: '🎨', teaches: 'Visual design, UX thinking, creative expression', skills: 'Design principles, visual communication, user empathy, aesthetic judgment' },
  { name: 'The Workshop', emoji: '🔧', teaches: 'Robotics, physical computing, smart systems', skills: 'Engineering thinking, sensor/actuator logic, real-world problem solving' },
  { name: 'The Bazaar', emoji: '💰', teaches: 'Entrepreneurship, economics, value creation', skills: 'Financial literacy, marketing, customer thinking, business strategy' },
]

const attributes = [
  { name: 'Logic', desc: 'Analytical and computational thinking', color: 'from-blue-400 to-blue-600' },
  { name: 'Craft', desc: 'Building, creating, and making things work', color: 'from-orange-400 to-orange-600' },
  { name: 'Vision', desc: 'Design thinking and creative expression', color: 'from-purple-400 to-purple-600' },
  { name: 'Influence', desc: 'Communication, leadership, and persuasion', color: 'from-green-400 to-green-600' },
  { name: 'Insight', desc: 'Critical thinking, evaluation, and judgment', color: 'from-yellow-400 to-yellow-600' },
  { name: 'Synergy', desc: 'Collaboration with AI and other people', color: 'from-pink-400 to-pink-600' },
]

const faqs = [
  {
    q: 'Is this just a video game disguised as education?',
    a: 'No — it\'s education designed to feel like a game. Every quest teaches a real concept. Every battle tests real understanding. Every boss fight is a real project. The game elements (XP, levels, badges) are there because decades of research show that motivation, feedback, and progression drive deeper learning than traditional instruction.'
  },
  {
    q: 'Will my child actually learn, or just play?',
    a: 'Both. The game is designed so that learning IS the gameplay. You can\'t progress without genuinely understanding the concepts. The AI Companion verifies understanding through conversation, not just multiple-choice quizzes.'
  },
  {
    q: 'How much screen time does Arcana require?',
    a: 'We recommend 30-60 minutes per session, 3-5 times per week. Daily challenges take 5-10 minutes. A full quest takes 20-40 minutes. The game is designed for consistent, moderate engagement.'
  },
  {
    q: 'Is the AI Companion safe?',
    a: 'Yes. The AI Companion operates within strict safety guidelines, cannot discuss inappropriate topics, encourages independent thinking, and all conversations are logged and reviewable by parents.'
  },
  {
    q: 'How does Arcana connect to Minecraft and Roblox?',
    a: 'Several quests in The Forge take place directly inside Minecraft and Roblox. Your child opens those games as part of their quest, builds something specific, and returns to Arcana to continue the story. Their creations become artifacts in their character\'s inventory.'
  },
  {
    q: 'What ages is this for?',
    a: 'Ages 9+. Explorer courses target 9-11, Builder courses 11-14, Creator courses 14+. These are guidelines — motivated younger kids can tackle harder content, and older newcomers benefit from Explorer content.'
  },
  {
    q: 'What does the $159/month subscription include?',
    a: 'Full access to all 7 regions and 24 courses, the AI Companion (personalized AI tutor), daily and weekly challenges, community features, seasonal events, and weekly parent progress reports. Human tutoring is available at $80/hour.'
  },
]

export function ParentGuide() {
  return (
    <div className="min-h-screen bg-dark-900 text-white">
      <Navbar />

      {/* Hero */}
      <div className="relative pt-32 pb-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-neon-orange/5 via-transparent to-transparent" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-block px-4 py-2 rounded-full bg-neon-orange/10 border border-neon-orange/20 text-neon-orange text-sm font-medium mb-6">
              For Parents
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold leading-tight mb-6"
          >
            Welcome to{' '}
            <span className="bg-gradient-to-r from-neon-orange via-neon-pink to-neon-yellow bg-clip-text text-transparent">
              Arcana
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed"
          >
            A revolutionary learning experience where your child masters AI literacy,
            critical thinking, and digital creation through immersive RPG gameplay.
            They think they're playing. They're learning.
          </motion.p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 pb-24">

        {/* What Is Arcana */}
        <Section title="What Is Arcana?">
          <div className="space-y-4 text-white/80 text-lg leading-relaxed">
            <p>
              Arcana is a role-playing game world where your child learns the most important skills
              of their generation — AI literacy, critical thinking, systems thinking, creative design,
              and digital entrepreneurship — through immersive gameplay rather than traditional lessons.
            </p>
            <p>
              Your child creates a character called an <strong className="text-white">Arcanist</strong> and
              embarks on quests through seven distinct regions. The "spells" they learn are real skills.
              The "enemies" they fight are real problems. The "boss battles" they face are real projects.
              And the "loot" they collect is real knowledge.
            </p>
            <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-neon-orange/10 to-neon-pink/10 border border-neon-orange/20">
              <p className="text-xl font-semibold text-white text-center">
                Your child will never feel like they're studying.<br />
                They will feel like they're playing. They will be doing both.
              </p>
            </div>
          </div>
        </Section>

        {/* The Seven Regions */}
        <Section title="The Seven Regions">
          <p className="text-white/70 text-lg mb-8">
            Each region of Arcana teaches a different domain of skills through themed quests and challenges:
          </p>
          <div className="grid gap-4">
            {regions.map((r) => (
              <motion.div
                key={r.name}
                whileHover={{ scale: 1.01 }}
                className="p-5 rounded-xl bg-dark-700/50 border border-white/5 hover:border-neon-orange/20 transition-all"
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{r.emoji}</span>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{r.name}</h3>
                    <p className="text-white/60 text-sm mb-2">{r.teaches}</p>
                    <p className="text-neon-orange/80 text-sm">
                      <strong>Skills gained:</strong> {r.skills}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* Character Attributes */}
        <Section title="Your Child's Character">
          <p className="text-white/70 text-lg mb-8">
            Every Arcanist has six attributes that grow as they learn. You can see your
            child's attribute profile at any time — showing their strengths and development areas at a glance.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {attributes.map((a) => (
              <div key={a.name} className="p-4 rounded-xl bg-dark-700/50 border border-white/5 text-center">
                <div className={`text-2xl font-bold bg-gradient-to-r ${a.color} bg-clip-text text-transparent mb-1`}>
                  {a.name}
                </div>
                <p className="text-white/50 text-sm">{a.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* How Learning Happens */}
        <Section title="How Learning Happens">
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl bg-dark-700/50 border border-red-500/10">
                <h3 className="text-lg font-bold text-red-400 mb-3">Traditional Approach</h3>
                <p className="text-white/50 italic">
                  "Lesson 3: AI uses tokenization to process text. Tokens are subword units that..."
                </p>
              </div>
              <div className="p-6 rounded-xl bg-dark-700/50 border border-neon-green/20">
                <h3 className="text-lg font-bold text-neon-green mb-3">The Arcana Way</h3>
                <p className="text-white/70">
                  "The Oracle speaks in fragments. To communicate with it, you must learn to break
                  language into the same pieces it sees. Complete the Token Puzzle to earn the
                  'Token Sight' ability."
                </p>
              </div>
            </div>
            <p className="text-white/60 text-center text-lg">
              The educational content is identical. The experience is completely different.
            </p>
          </div>
        </Section>

        {/* The AI Companion */}
        <Section title="The AI Companion">
          <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20">
            <div className="space-y-4 text-white/80 text-lg">
              <p>
                Every student has an AI companion — a character powered by advanced AI
                that serves as a personalized tutor. It:
              </p>
              <ul className="space-y-3 ml-4">
                {[
                  'Explains concepts using the game\'s language and your child\'s level',
                  'Offers hints when stuck — but only when asked (encourages independence)',
                  'Adapts to your child\'s learning style over time',
                  'Never gives direct answers — it guides thinking',
                  'Is available 24/7 within the game',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-neon-orange mt-1">✦</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        {/* Progress Tracking */}
        <Section title="How You Track Progress">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-dark-700/50 border border-white/5">
              <h3 className="text-xl font-bold text-neon-orange mb-4">What Your Child Sees</h3>
              <ul className="space-y-2 text-white/70">
                <li>⚡ XP and Level — overall progress</li>
                <li>📊 Attribute Chart — strength across 6 skills</li>
                <li>📖 Spellbook — every concept mastered</li>
                <li>🗺️ World Map — regions explored</li>
                <li>🏆 Badges — special achievements</li>
              </ul>
            </div>
            <div className="p-6 rounded-xl bg-dark-700/50 border border-neon-orange/20">
              <h3 className="text-xl font-bold text-neon-orange mb-4">What You See (Weekly Report)</h3>
              <ul className="space-y-2 text-white/70">
                <li>📋 Quests completed this week</li>
                <li>🧠 New skills learned (translated from game terms)</li>
                <li>⏱️ Time spent learning</li>
                <li>🔥 Current streak</li>
                <li>📈 AI Companion's assessment and recommendations</li>
              </ul>
            </div>
          </div>
          <p className="text-white/50 text-center mt-6 text-sm">
            When your child earns "Token Sight," your report says: "Your child now understands
            how AI processes language through tokenization — helping them write better prompts
            and understand why AI sometimes makes mistakes."
          </p>
        </Section>

        {/* FAQ */}
        <Section title="Frequently Asked Questions">
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group p-5 rounded-xl bg-dark-700/50 border border-white/5 hover:border-neon-orange/20 transition-all cursor-pointer">
                <summary className="text-lg font-semibold text-white flex items-center justify-between list-none">
                  {faq.q}
                  <span className="text-neon-orange group-open:rotate-45 transition-transform text-2xl">+</span>
                </summary>
                <p className="mt-4 text-white/70 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </Section>

        {/* Closing */}
        <Section title="The Skills That Matter">
          <div className="text-center space-y-6">
            <p className="text-white/80 text-lg leading-relaxed max-w-2xl mx-auto">
              In a world where AI can write essays, generate art, and build websites —
              what makes a human valuable? <strong className="text-white">Thinking.</strong> The
              ability to ask the right questions, see systems, evaluate information, make ethical
              decisions, and create with purpose.
            </p>
            <p className="text-white/80 text-lg leading-relaxed max-w-2xl mx-auto">
              That's what Arcana teaches. Not how to use today's tools — tools change every year.
              But how to <strong className="text-white">think</strong> in a way that makes every
              tool more powerful in their hands.
            </p>
            <div className="pt-8">
              <a
                href="/subscribe"
                className="inline-block px-10 py-4 rounded-full bg-gradient-to-r from-neon-orange to-neon-pink text-white font-bold text-lg hover:shadow-lg hover:shadow-neon-orange/25 transition-all hover:scale-105"
              >
                Start Your Child's Journey — $159/mo
              </a>
              <p className="text-white/40 text-sm mt-3">All 24 courses + AI Companion included. Cancel anytime.</p>
            </div>
          </div>
        </Section>

      </div>

      <Footer />
    </div>
  )
}
