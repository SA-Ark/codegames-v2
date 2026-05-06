import { motion } from 'framer-motion'
import { STRIPE_CHECKOUT_URL } from '../data/config'

const included = [
  { icon: '⛏️', name: 'Minecraft AI Builder', sessions: 8 },
  { icon: '🎮', name: 'Roblox AI Game Studio', sessions: 10 },
  { icon: '🤖', name: 'AI Chatbot Creator', sessions: 8 },
  { icon: '🎨', name: 'AI Art & Game Assets', sessions: 6 },
  { icon: '🚀', name: 'AI Web App Builder', sessions: 10 },
  { icon: '🎵', name: 'AI Music & Sound FX', sessions: 6 },
  { icon: '👾', name: 'AI Game Maker', sessions: 10 },
  { icon: '🎬', name: 'AI Video Creator', sessions: 6 },
]

const perks = [
  'All 8 AI courses — unlimited access',
  'New courses and content added monthly',
  'Live instructor sessions available',
  'Build real projects you can share',
  'Cancel anytime — no lock-in',
  'Money-back guarantee after first session',
]

export function SubscribePage() {
  return (
    <div className="min-h-screen bg-dark-900 text-white flex items-center justify-center px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-lg w-full"
      >
        {/* Back link */}
        <a href="/" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-colors mb-8">
          ← Back to AI Games Academy
        </a>

        {/* Card */}
        <div className="glass-card rounded-3xl overflow-hidden">
          {/* Header */}
          <div className="p-8 pb-6 bg-gradient-to-br from-neon-orange/10 via-neon-pink/5 to-transparent border-b border-white/[0.04]">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">🎮</span>
              <div>
                <h1 className="text-xl font-extrabold">AI Games Academy</h1>
                <p className="text-sm text-gray-400">Full Access Membership</p>
              </div>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-2 mb-3">
              <span className="text-5xl font-extrabold tracking-tight">$767</span>
              <span className="text-gray-400 text-base">/month</span>
            </div>
            <p className="text-sm text-gray-500">Cancel anytime. No contracts.</p>
          </div>

          {/* What's included */}
          <div className="p-8 pt-6">
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Everything included</h3>

            {/* Course list */}
            <div className="space-y-2.5 mb-6">
              {included.map(c => (
                <div key={c.name} className="flex items-center gap-3">
                  <span className="text-lg">{c.icon}</span>
                  <span className="text-sm text-white flex-1">{c.name}</span>
                  <span className="text-sm text-gray-600">{c.sessions} sessions</span>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="h-px bg-white/[0.04] my-6" />

            {/* Perks */}
            <div className="space-y-2.5 mb-8">
              {perks.map(p => (
                <div key={p} className="flex items-center gap-3 text-sm">
                  <span className="text-neon-green">✓</span>
                  <span className="text-gray-300">{p}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href={STRIPE_CHECKOUT_URL}
              className="block w-full py-4 rounded-xl bg-neon-green text-dark-900 text-center font-bold text-base hover:bg-green-400 transition-all hover:scale-[1.01] active:scale-[0.99] shadow-lg shadow-neon-green/20"
            >
              Subscribe Now — $767/mo
            </a>

            <p className="text-center text-sm text-gray-600 mt-4">
              Secure payment via Stripe. 🔒
            </p>

            {/* Book a call option */}
            <div className="mt-6 pt-6 border-t border-white/[0.04] text-center">
              <p className="text-sm text-gray-500 mb-2">Want to learn more first?</p>
              <a href="#" className="text-sm text-neon-orange hover:text-neon-pink transition-colors font-medium">
                Book a Free Call →
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
