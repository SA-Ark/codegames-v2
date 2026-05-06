import { FooterWaves } from './FooterWaves'

export function Footer() {
  return (
    <footer className="relative py-20 px-6 border-t border-white/[0.03] overflow-hidden">
      <FooterWaves />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-4 gap-10 mb-14">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 text-xl font-bold mb-5">
              <span className="text-2xl">🎮</span>
              <span className="bg-gradient-to-r from-neon-orange to-neon-pink bg-clip-text text-transparent font-extrabold tracking-tight">
                AI Games Academy
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-sm font-light">
              Teaching the next generation to build with AI. Not memorize syntax — build real things.
              Minecraft mods, Roblox games, chatbots, web apps, and more. Ages 8–16.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-[11px] mb-5 text-gray-400 uppercase tracking-[0.15em]">Courses</h4>
            <ul className="space-y-3 text-[13px] text-gray-600">
              <li><a href="#courses" className="hover:text-white transition-colors duration-200">Minecraft AI Builder</a></li>
              <li><a href="#courses" className="hover:text-white transition-colors duration-200">Roblox AI Studio</a></li>
              <li><a href="#courses" className="hover:text-white transition-colors duration-200">AI Chatbot Creator</a></li>
              <li><a href="#courses" className="hover:text-white transition-colors duration-200">AI Web App Builder</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-[11px] mb-5 text-gray-400 uppercase tracking-[0.15em]">Company</h4>
            <ul className="space-y-3 text-[13px] text-gray-600">
              <li><a href="#" className="hover:text-white transition-colors duration-200">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/[0.03] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-700 text-xs font-light">
            © {new Date().getFullYear()} AI Games Academy. All rights reserved.
          </p>
          <a href="mailto:hello@codegames.tech" className="text-gray-600 hover:text-white transition-colors text-xs">
            hello@codegames.tech
          </a>
        </div>
      </div>
    </footer>
  )
}
