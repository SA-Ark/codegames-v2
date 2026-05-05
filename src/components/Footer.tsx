export function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-white/[0.04] relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 text-xl font-bold mb-4">
              <span className="text-2xl">🎮</span>
              <span className="bg-gradient-to-r from-neon-purple to-neon-cyan bg-clip-text text-transparent font-extrabold">
                AI Games Academy
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-md">
              Teaching the next generation to build with AI. Not memorize syntax — build real things.
              Minecraft mods, Roblox games, chatbots, web apps, and more. Ages 8–16.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-xs mb-4 text-gray-400 uppercase tracking-widest">Courses</h4>
            <ul className="space-y-2.5 text-sm text-gray-600">
              <li><a href="#courses" className="hover:text-white transition-colors">Minecraft AI Builder</a></li>
              <li><a href="#courses" className="hover:text-white transition-colors">Roblox AI Studio</a></li>
              <li><a href="#courses" className="hover:text-white transition-colors">AI Chatbot Creator</a></li>
              <li><a href="#courses" className="hover:text-white transition-colors">AI Web App Builder</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-xs mb-4 text-gray-400 uppercase tracking-widest">Company</h4>
            <ul className="space-y-2.5 text-sm text-gray-600">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-700 text-xs">
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
