export interface Course {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  ageRange: string;
  sessions: number;
  price: string;
  icon: string;
  gradient: string;
  tags: string[];
  featured?: boolean;
  highlights: string[];
  checkoutUrl: string;
}

export const courses: Course[] = [
  {
    id: 'minecraft-ai',
    title: 'Minecraft AI Builder',
    subtitle: 'Build Insane Worlds with AI',
    description: 'Use AI to design epic Minecraft builds, automate redstone, create custom mods, and generate entire worlds. No coding experience needed — just imagination.',
    difficulty: 'beginner',
    ageRange: '8+',
    sessions: 8,
    price: '$249',
    icon: '⛏️',
    gradient: 'from-green-500 to-emerald-700',
    tags: ['Minecraft', 'AI Building', 'Mods', 'Redstone'],
    featured: true,
    highlights: [
      'Generate massive builds with AI prompts',
      'Create custom mods without coding',
      'Automate redstone with AI logic',
      'Build & share your own world'
    ],
    checkoutUrl: '#enroll-minecraft-ai',
  },
  {
    id: 'roblox-ai',
    title: 'Roblox AI Game Studio',
    subtitle: 'Create Hit Roblox Games',
    description: 'Build and publish your own Roblox games using AI for scripting, level design, and NPC behavior. Learn to use AI as your coding partner.',
    difficulty: 'beginner',
    ageRange: '10+',
    sessions: 10,
    price: '$349',
    icon: '🎮',
    gradient: 'from-red-500 to-orange-600',
    tags: ['Roblox', 'Game Dev', 'Lua', 'AI Scripting'],
    featured: true,
    highlights: [
      'Build a playable Roblox game from scratch',
      'Use AI to write Lua scripts for you',
      'Design levels, NPCs, and game mechanics',
      'Publish to Roblox for friends to play'
    ],
    checkoutUrl: '#enroll-roblox-ai',
  },
  {
    id: 'ai-chatbot',
    title: 'AI Chatbot Creator',
    subtitle: 'Build Your Own AI Assistant',
    description: 'Design, build, and deploy your own AI chatbot with a unique personality. Learn prompt engineering, APIs, and how AI really works under the hood.',
    difficulty: 'intermediate',
    ageRange: '12+',
    sessions: 8,
    price: '$299',
    icon: '🤖',
    gradient: 'from-purple-500 to-violet-700',
    tags: ['Chatbots', 'Prompt Engineering', 'APIs', 'AI'],
    highlights: [
      'Build a chatbot with custom personality',
      'Master prompt engineering techniques',
      'Connect to real AI APIs',
      'Deploy your bot for others to use'
    ],
    checkoutUrl: '#enroll-ai-chatbot',
  },
  {
    id: 'ai-art',
    title: 'AI Art & Game Assets',
    subtitle: 'Create Stunning Game Graphics',
    description: 'Generate professional game art, character sprites, textures, and UI designs using AI. Learn to create consistent art styles and build asset pipelines.',
    difficulty: 'beginner',
    ageRange: '8+',
    sessions: 6,
    price: '$199',
    icon: '🎨',
    gradient: 'from-pink-500 to-rose-600',
    tags: ['AI Art', 'Game Design', 'Sprites', 'Characters'],
    highlights: [
      'Generate characters, sprites & textures',
      'Create consistent art styles with AI',
      'Build a complete game asset library',
      'Design UI/UX for games and apps'
    ],
    checkoutUrl: '#enroll-ai-art',
  },
  {
    id: 'ai-webapp',
    title: 'AI Web App Builder',
    subtitle: 'Ship Real Apps to the Internet',
    description: 'Build and deploy a real web application using AI coding assistants. Plan, design, build, and launch — with AI doing the heavy lifting on code.',
    difficulty: 'intermediate',
    ageRange: '12+',
    sessions: 10,
    price: '$349',
    icon: '🚀',
    gradient: 'from-cyan-500 to-blue-600',
    tags: ['Web Dev', 'AI Coding', 'Deployment', 'Full Stack'],
    highlights: [
      'Build a real app people can use',
      'AI writes code while you direct',
      'Learn deployment & hosting',
      'Portfolio project to show off'
    ],
    checkoutUrl: '#enroll-ai-webapp',
  },
  {
    id: 'ai-music',
    title: 'AI Music & Sound FX',
    subtitle: 'Compose Epic Game Soundtracks',
    description: 'Create original game soundtracks, sound effects, and ambient audio using AI music tools. No musical experience needed.',
    difficulty: 'beginner',
    ageRange: '10+',
    sessions: 6,
    price: '$199',
    icon: '🎵',
    gradient: 'from-amber-500 to-yellow-600',
    tags: ['Music', 'Sound Design', 'AI Audio', 'Game Dev'],
    highlights: [
      'Compose game music with AI',
      'Create custom sound effects',
      'Build ambient soundscapes',
      'Mix and master your tracks'
    ],
    checkoutUrl: '#enroll-ai-music',
  },
  {
    id: 'ai-gamemaker',
    title: 'AI Game Maker',
    subtitle: 'Build Browser Games with AI',
    description: 'Create complete, playable browser games using AI to generate all the code. Learn game design principles while AI handles the programming.',
    difficulty: 'intermediate',
    ageRange: '12+',
    sessions: 10,
    price: '$349',
    icon: '👾',
    gradient: 'from-indigo-500 to-purple-600',
    tags: ['Game Dev', 'AI Coding', 'Browser Games', 'JavaScript'],
    highlights: [
      'Build 3+ complete browser games',
      'AI generates code from your ideas',
      'Learn game design & mechanics',
      'Share games with a URL'
    ],
    checkoutUrl: '#enroll-ai-gamemaker',
  },
  {
    id: 'ai-video',
    title: 'AI Video Creator',
    subtitle: 'Make Gaming Content Like a Pro',
    description: 'Create gaming content, tutorials, trailers, and montages using AI video tools. Learn editing, thumbnails, and content strategy.',
    difficulty: 'beginner',
    ageRange: '10+',
    sessions: 6,
    price: '$199',
    icon: '🎬',
    gradient: 'from-teal-500 to-green-600',
    tags: ['Video', 'Content Creation', 'AI Editing', 'YouTube'],
    highlights: [
      'Create gaming videos & trailers',
      'AI-powered editing & effects',
      'Design click-worthy thumbnails',
      'Build your content brand'
    ],
    checkoutUrl: '#enroll-ai-video',
  }
];
