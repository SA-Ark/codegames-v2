export interface Lesson {
  title: string;
  objectives: string[];
  activities: string[];
  aiTools: string[];
  project: string;
}

export interface Session {
  sessionNumber: number;
  title: string;
  description: string;
  lessons: Lesson[];
}

export interface CourseCurriculum {
  courseId: string;
  sessions: Session[];
}

export const curricula: CourseCurriculum[] = [
  {
    courseId: 'minecraft-ai',
    sessions: [
      {
        sessionNumber: 1, title: 'Welcome to AI Building', description: 'Discover how AI can supercharge your Minecraft experience',
        lessons: [
          { title: 'What is AI & Why It Matters', objectives: ['Understand what AI is in simple terms', 'See real examples of AI in gaming'], activities: ['Play with AI chatbot to generate build ideas', 'Compare AI-generated vs manual builds'], aiTools: ['ChatGPT', 'Claude'], project: 'Generate your first 5 build ideas with AI' },
          { title: 'Your First AI-Assisted Build', objectives: ['Use AI to plan a build step-by-step', 'Learn to give good instructions to AI'], activities: ['Write prompts for a medieval castle', 'Follow AI instructions to build in Minecraft'], aiTools: ['ChatGPT', 'Minecraft'], project: 'Build a castle following AI blueprints' }
        ]
      },
      {
        sessionNumber: 2, title: 'Prompt Engineering for Minecraft', description: 'Master the art of telling AI exactly what you want',
        lessons: [
          { title: 'Good Prompts vs Bad Prompts', objectives: ['Write clear, specific prompts', 'Iterate and improve AI output'], activities: ['Prompt battle: students compete for best AI builds', 'Refine prompts through 3 iterations'], aiTools: ['ChatGPT', 'Claude'], project: 'Create a prompt template library for builds' },
          { title: 'Complex Build Planning', objectives: ['Break large builds into phases', 'Use AI for material lists and layouts'], activities: ['Plan a full village with AI', 'Generate block-by-block instructions'], aiTools: ['ChatGPT', 'Minecraft Wiki'], project: 'Design a complete village blueprint with AI' }
        ]
      },
      {
        sessionNumber: 3, title: 'Redstone Automation with AI', description: 'Use AI to design complex redstone contraptions',
        lessons: [
          { title: 'AI-Designed Redstone Circuits', objectives: ['Understand basic redstone components', 'Use AI to design working circuits'], activities: ['Ask AI to explain redstone logic', 'Build an AI-designed automatic door'], aiTools: ['ChatGPT', 'Minecraft'], project: 'Build 3 working redstone machines from AI designs' },
          { title: 'Advanced Redstone Projects', objectives: ['Create complex automated systems', 'Debug redstone with AI help'], activities: ['Build an automated farm', 'Use AI to troubleshoot broken circuits'], aiTools: ['ChatGPT', 'Claude'], project: 'Build an automated sorting system' }
        ]
      },
      {
        sessionNumber: 4, title: 'Command Blocks & AI', description: 'Create custom game mechanics with command blocks',
        lessons: [
          { title: 'Command Block Basics via AI', objectives: ['Understand command block syntax', 'Use AI to generate commands'], activities: ['Generate teleport and effect commands', 'Build a mini-game with command blocks'], aiTools: ['ChatGPT', 'Minecraft Commands'], project: 'Create a custom mini-game arena' },
          { title: 'Custom Game Modes', objectives: ['Design original game modes', 'Chain command blocks for complex behavior'], activities: ['Design rules for a custom game', 'AI generates all command block code'], aiTools: ['ChatGPT', 'Claude'], project: 'Build and test a complete custom game mode' }
        ]
      },
      {
        sessionNumber: 5, title: 'Texture & Resource Packs', description: 'Use AI art tools to create custom Minecraft visuals',
        lessons: [
          { title: 'AI-Generated Textures', objectives: ['Generate custom block textures with AI', 'Understand texture pack structure'], activities: ['Create textures with AI image tools', 'Package into a resource pack'], aiTools: ['DALL-E', 'Midjourney', 'Minecraft'], project: 'Create a 10-block custom texture pack' },
          { title: 'Complete Visual Overhaul', objectives: ['Create a cohesive visual theme', 'Test and iterate on designs'], activities: ['Design a themed texture pack', 'Get feedback and iterate with AI'], aiTools: ['DALL-E', 'ChatGPT'], project: 'Complete themed resource pack' }
        ]
      },
      {
        sessionNumber: 6, title: 'Mod Concepts with AI', description: 'Design Minecraft mods using AI as your coding partner',
        lessons: [
          { title: 'Mod Design Document', objectives: ['Design a mod concept', 'Plan features and mechanics'], activities: ['Brainstorm mod ideas with AI', 'Create a feature specification'], aiTools: ['ChatGPT', 'Claude'], project: 'Complete mod design document' },
          { title: 'Data Packs & Behavior', objectives: ['Create data packs for custom behavior', 'Use AI to generate JSON configurations'], activities: ['Build custom crafting recipes', 'Create custom loot tables'], aiTools: ['ChatGPT', 'Minecraft Data Packs'], project: 'Working data pack with 5+ custom features' }
        ]
      },
      {
        sessionNumber: 7, title: 'Mega Build Project', description: 'Plan and execute a massive AI-assisted build',
        lessons: [
          { title: 'Project Planning', objectives: ['Plan a large-scale build', 'Decompose into manageable sections'], activities: ['Use AI to create a project timeline', 'Assign build sections and materials'], aiTools: ['ChatGPT', 'Claude'], project: 'Detailed plan for mega build' },
          { title: 'Build Execution', objectives: ['Execute build with AI guidance', 'Problem-solve and adapt'], activities: ['Build main structures', 'Add details and finishing touches'], aiTools: ['ChatGPT', 'Minecraft'], project: 'Complete mega build (Part 1)' }
        ]
      },
      {
        sessionNumber: 8, title: 'Showcase & Share', description: 'Polish your work and share it with the world',
        lessons: [
          { title: 'Polish & Detail', objectives: ['Add finishing touches', 'Create cinematic screenshots'], activities: ['Landscape and detail work', 'Set up camera angles with shaders'], aiTools: ['ChatGPT', 'Shader Packs'], project: 'Polished final build with screenshots' },
          { title: 'Presentation & Portfolio', objectives: ['Present your work', 'Build a portfolio of AI-assisted creations'], activities: ['Create a build showcase', 'Present to class and get feedback'], aiTools: ['Canva AI', 'ChatGPT'], project: 'Final portfolio and presentation' }
        ]
      }
    ]
  },
  {
    courseId: 'roblox-ai',
    sessions: [
      {
        sessionNumber: 1, title: 'Roblox Studio + AI = Superpowers', description: 'Set up your dev environment and see what AI can do',
        lessons: [
          { title: 'Studio Setup & AI Introduction', objectives: ['Set up Roblox Studio', 'Connect AI tools to your workflow'], activities: ['Install and configure Studio', 'Generate your first Lua script with AI'], aiTools: ['ChatGPT', 'Roblox Studio'], project: 'Create a "Hello World" Roblox experience' },
          { title: 'AI-Generated Game Concepts', objectives: ['Brainstorm game ideas with AI', 'Create a game design document'], activities: ['Prompt AI for game ideas in your favorite genre', 'Write a 1-page game design doc'], aiTools: ['ChatGPT', 'Claude'], project: 'Complete game design document' }
        ]
      },
      {
        sessionNumber: 2, title: 'Building Worlds with AI', description: 'Create stunning game environments using AI',
        lessons: [
          { title: 'Terrain & Environment', objectives: ['Generate terrain with AI guidance', 'Place objects and create atmosphere'], activities: ['Use AI to plan biome layouts', 'Build environment from AI specifications'], aiTools: ['ChatGPT', 'Roblox Terrain Editor'], project: 'Complete game environment with 3+ biomes' },
          { title: 'Building & Architecture', objectives: ['Design structures with AI blueprints', 'Create modular building systems'], activities: ['AI-designed buildings and structures', 'Learn to create reusable building modules'], aiTools: ['ChatGPT', 'Roblox Studio'], project: 'Build a town or base with 5+ structures' }
        ]
      },
      {
        sessionNumber: 3, title: 'Scripting with AI', description: 'Let AI write Lua code while you design the game',
        lessons: [
          { title: 'Your First AI-Written Scripts', objectives: ['Use AI to generate working Lua scripts', 'Understand script structure basics'], activities: ['Generate movement, jumping, and interaction scripts', 'Test and debug with AI help'], aiTools: ['ChatGPT', 'Claude', 'Roblox Studio'], project: 'Player controller with 5+ actions' },
          { title: 'Game Mechanics Scripts', objectives: ['Create core game mechanics', 'Use AI for complex logic'], activities: ['Build scoring, health, and inventory systems', 'AI generates each system from your descriptions'], aiTools: ['ChatGPT', 'Roblox Studio'], project: 'Working game with score, health, and items' }
        ]
      },
      {
        sessionNumber: 4, title: 'NPCs & AI Behavior', description: 'Create intelligent non-player characters',
        lessons: [
          { title: 'NPC Creation', objectives: ['Design and build NPCs', 'Give NPCs basic behavior'], activities: ['Create NPC models', 'AI-generate pathfinding and dialogue scripts'], aiTools: ['ChatGPT', 'Roblox Studio'], project: '3 unique NPCs with behavior' },
          { title: 'Advanced NPC AI', objectives: ['Create complex NPC behaviors', 'Build quest and dialogue systems'], activities: ['Design branching dialogue trees with AI', 'Implement quest-giving NPCs'], aiTools: ['ChatGPT', 'Claude'], project: 'Quest system with 3+ quests' }
        ]
      },
      {
        sessionNumber: 5, title: 'UI & Player Experience', description: 'Design beautiful game interfaces with AI',
        lessons: [
          { title: 'Game UI Design', objectives: ['Design HUD, menus, and overlays', 'Use AI for UI code generation'], activities: ['Design UI mockups with AI art tools', 'Generate ScreenGui scripts with AI'], aiTools: ['ChatGPT', 'DALL-E', 'Roblox Studio'], project: 'Complete game UI with HUD, menu, and shop' },
          { title: 'Player Onboarding', objectives: ['Create tutorials and guides', 'Design smooth first-time experience'], activities: ['Build an interactive tutorial', 'AI designs the optimal player flow'], aiTools: ['ChatGPT', 'Roblox Studio'], project: 'Interactive tutorial for new players' }
        ]
      },
      {
        sessionNumber: 6, title: 'Multiplayer & Social', description: 'Make your game multiplayer',
        lessons: [
          { title: 'Multiplayer Basics', objectives: ['Understand client-server model', 'Use AI for networking scripts'], activities: ['AI generates RemoteEvents and Functions', 'Build multiplayer interactions'], aiTools: ['ChatGPT', 'Roblox Studio'], project: 'Working multiplayer with 2+ shared mechanics' },
          { title: 'Social Features', objectives: ['Add leaderboards, trading, teams', 'Create competitive/cooperative modes'], activities: ['Build a leaderboard system', 'Add team mechanics'], aiTools: ['ChatGPT', 'Roblox Studio'], project: 'Social features: leaderboard + teams' }
        ]
      },
      {
        sessionNumber: 7, title: 'Monetization & Game Economy', description: 'Learn how real Roblox games make Robux',
        lessons: [
          { title: 'Game Economy Design', objectives: ['Design a balanced in-game economy', 'Create game passes and dev products'], activities: ['AI helps design economy balance', 'Implement currency and shop systems'], aiTools: ['ChatGPT', 'Roblox Studio'], project: 'Complete shop with 5+ purchasable items' },
          { title: 'Game Passes & Products', objectives: ['Create monetization features', 'Balance free vs premium experience'], activities: ['Design and implement game passes', 'AI helps test economy balance'], aiTools: ['ChatGPT', 'Roblox Studio'], project: 'Working monetization system' }
        ]
      },
      {
        sessionNumber: 8, title: 'Polish & Effects', description: 'Add professional-quality effects and polish',
        lessons: [
          { title: 'Visual Effects', objectives: ['Add particles, lighting, and atmosphere', 'Create wow moments'], activities: ['AI-designed particle systems', 'Implement dynamic lighting'], aiTools: ['ChatGPT', 'Roblox Studio'], project: 'Game with professional visual effects' },
          { title: 'Sound & Music', objectives: ['Add sound design to your game', 'Create immersive audio'], activities: ['Source/create sound effects', 'Implement spatial audio'], aiTools: ['AI Music Tools', 'Roblox Studio'], project: 'Complete audio design' }
        ]
      },
      {
        sessionNumber: 9, title: 'Testing & Optimization', description: 'Make your game smooth and bug-free',
        lessons: [
          { title: 'Playtesting', objectives: ['Run structured playtests', 'Gather and analyze feedback'], activities: ['Playtest with classmates', 'Use AI to analyze feedback patterns'], aiTools: ['ChatGPT', 'Google Forms'], project: 'Playtest report with 5+ improvements' },
          { title: 'Optimization', objectives: ['Improve game performance', 'Fix bugs with AI debugging'], activities: ['AI helps identify performance issues', 'Optimize scripts and assets'], aiTools: ['ChatGPT', 'Roblox Performance Tools'], project: 'Optimized game passing Roblox guidelines' }
        ]
      },
      {
        sessionNumber: 10, title: 'Launch Day!', description: 'Publish your game to Roblox',
        lessons: [
          { title: 'Pre-Launch Checklist', objectives: ['Prepare for public launch', 'Create marketing materials'], activities: ['AI generates game description and thumbnails', 'Final bug check and polish'], aiTools: ['ChatGPT', 'DALL-E', 'Canva AI'], project: 'Launch-ready game with marketing materials' },
          { title: 'Publish & Promote', objectives: ['Publish to Roblox', 'Share and get initial players'], activities: ['Hit the publish button!', 'Share with friends and community'], aiTools: ['ChatGPT', 'Social Media'], project: 'LIVE game on Roblox! 🎉' }
        ]
      }
    ]
  },
  {
    courseId: 'ai-chatbot',
    sessions: [
      { sessionNumber: 1, title: 'Meet Your Future AI', description: 'Explore what chatbots can do and design yours', lessons: [
        { title: 'The World of AI Chatbots', objectives: ['Understand how chatbots work', 'Explore different types of AI'], activities: ['Test 5 different chatbots', 'Rate their strengths and weaknesses'], aiTools: ['ChatGPT', 'Claude', 'Gemini'], project: 'Chatbot comparison report' },
        { title: 'Design Your Bot Personality', objectives: ['Create a unique bot character', 'Write a personality specification'], activities: ['Design name, personality, voice', 'Write system prompts'], aiTools: ['ChatGPT'], project: 'Complete bot personality document' }
      ]},
      { sessionNumber: 2, title: 'Prompt Engineering Mastery', description: 'The #1 skill for the AI age', lessons: [
        { title: 'Prompt Patterns & Techniques', objectives: ['Master 5+ prompt patterns', 'Chain prompts for complex tasks'], activities: ['Practice each prompt pattern', 'Build a prompt playbook'], aiTools: ['ChatGPT', 'Claude'], project: 'Personal prompt engineering playbook' },
        { title: 'System Prompts & Guardrails', objectives: ['Write effective system prompts', 'Add safety guardrails'], activities: ['Write and test system prompts', 'Try to break your own bot'], aiTools: ['ChatGPT API Playground'], project: 'Bulletproof system prompt for your bot' }
      ]},
      { sessionNumber: 3, title: 'APIs — Connecting to AI', description: 'Learn to talk to AI programmatically', lessons: [
        { title: 'What Are APIs', objectives: ['Understand APIs conceptually', 'Make your first API call'], activities: ['Explore APIs with visual tools', 'Send requests to AI APIs'], aiTools: ['ChatGPT', 'API Playground'], project: 'Working API connection to AI' },
        { title: 'Building the Chat Interface', objectives: ['Create a chat UI', 'Connect UI to AI API'], activities: ['AI generates the chat interface code', 'Wire up send/receive messages'], aiTools: ['ChatGPT', 'Claude', 'Replit'], project: 'Working chat interface' }
      ]},
      { sessionNumber: 4, title: 'Memory & Context', description: 'Give your bot memory and context awareness', lessons: [
        { title: 'Conversation Memory', objectives: ['Implement chat history', 'Manage context windows'], activities: ['Add message history to bot', 'Test multi-turn conversations'], aiTools: ['ChatGPT', 'Claude'], project: 'Bot with conversation memory' },
        { title: 'Knowledge Base', objectives: ['Give your bot specialized knowledge', 'Implement RAG concepts'], activities: ['Create a knowledge document', 'Feed knowledge to your bot'], aiTools: ['ChatGPT', 'Claude'], project: 'Bot with custom knowledge base' }
      ]},
      { sessionNumber: 5, title: 'Special Skills', description: 'Give your bot superpowers', lessons: [
        { title: 'Tool Use & Actions', objectives: ['Make your bot take actions', 'Connect to external services'], activities: ['Add weather, math, or search tools', 'AI helps write tool integrations'], aiTools: ['ChatGPT', 'Claude', 'APIs'], project: 'Bot with 3+ special skills' },
        { title: 'Image & Voice', objectives: ['Add multimodal capabilities', 'Handle images and audio'], activities: ['Add image understanding', 'Implement text-to-speech'], aiTools: ['DALL-E API', 'TTS APIs'], project: 'Multimodal bot' }
      ]},
      { sessionNumber: 6, title: 'Testing & Safety', description: 'Make your bot reliable and safe', lessons: [
        { title: 'Red Teaming Your Bot', objectives: ['Find and fix vulnerabilities', 'Implement safety measures'], activities: ['Try to trick your bot', 'Add content filtering'], aiTools: ['ChatGPT', 'Claude'], project: 'Safety-tested bot' },
        { title: 'Edge Cases & Error Handling', objectives: ['Handle unexpected inputs', 'Build graceful error handling'], activities: ['Test 20+ edge cases', 'Implement fallback responses'], aiTools: ['ChatGPT'], project: 'Robust bot handling all edge cases' }
      ]},
      { sessionNumber: 7, title: 'Deployment', description: 'Put your bot on the internet', lessons: [
        { title: 'Deployment Prep', objectives: ['Prepare for deployment', 'Set up hosting'], activities: ['Configure environment and secrets', 'AI helps with deployment scripts'], aiTools: ['ChatGPT', 'Vercel/Replit'], project: 'Bot deployed and accessible via URL' },
        { title: 'Sharing & Integration', objectives: ['Share your bot', 'Add to websites or messaging'], activities: ['Create an embed widget', 'Share link with friends'], aiTools: ['ChatGPT'], project: 'Shareable bot with public link' }
      ]},
      { sessionNumber: 8, title: 'Demo Day', description: 'Present your AI creation', lessons: [
        { title: 'Polish & Present', objectives: ['Final polish', 'Present to an audience'], activities: ['Add finishing touches', 'Prepare demo presentation'], aiTools: ['Canva AI', 'ChatGPT'], project: 'Live demo of your AI chatbot! 🤖' }
      ]}
    ]
  },
  {
    courseId: 'ai-art',
    sessions: [
      { sessionNumber: 1, title: 'AI Art Fundamentals', description: 'Learn how AI creates images', lessons: [
        { title: 'How AI Art Works', objectives: ['Understand AI image generation', 'Explore different AI art tools'], activities: ['Generate images with 3+ tools', 'Compare results and styles'], aiTools: ['DALL-E', 'Midjourney', 'Stable Diffusion'], project: 'Gallery of 10 AI-generated images' },
        { title: 'Prompt Craft for Art', objectives: ['Write effective art prompts', 'Control style, mood, and composition'], activities: ['Practice style keywords', 'Generate same subject in 5 styles'], aiTools: ['DALL-E', 'Midjourney'], project: 'Style guide with prompt templates' }
      ]},
      { sessionNumber: 2, title: 'Character Design', description: 'Create game characters with AI', lessons: [
        { title: 'Character Concepts', objectives: ['Design original characters', 'Generate consistent character art'], activities: ['Create character sheets with AI', 'Generate multiple poses and expressions'], aiTools: ['DALL-E', 'Midjourney'], project: '3 original characters with full sheets' },
        { title: 'Sprite Creation', objectives: ['Create game-ready sprites', 'Build sprite sheets'], activities: ['Generate pixel art sprites', 'Create animation frames'], aiTools: ['DALL-E', 'Piskel', 'ChatGPT'], project: 'Complete sprite sheet for one character' }
      ]},
      { sessionNumber: 3, title: 'Environments & Textures', description: 'Build game worlds visually', lessons: [
        { title: 'Environment Art', objectives: ['Generate game backgrounds', 'Create tileable textures'], activities: ['Generate environment concepts', 'Create seamless tile textures'], aiTools: ['DALL-E', 'Midjourney', 'Photopea'], project: 'Complete environment art set' },
        { title: 'UI & Icon Design', objectives: ['Design game UI elements', 'Create icon sets'], activities: ['Generate buttons, menus, icons', 'Build a consistent UI kit'], aiTools: ['DALL-E', 'Canva AI'], project: 'Complete game UI kit' }
      ]},
      { sessionNumber: 4, title: 'Style Consistency', description: 'Master the art of consistent visuals', lessons: [
        { title: 'Style Guides with AI', objectives: ['Create and maintain art style guides', 'Use reference images effectively'], activities: ['Build a style reference board', 'Generate art matching specific styles'], aiTools: ['DALL-E', 'Midjourney'], project: 'Complete style guide for a game' }
      ]},
      { sessionNumber: 5, title: 'Animation & Effects', description: 'Bring your art to life', lessons: [
        { title: 'AI-Assisted Animation', objectives: ['Create animated assets', 'Generate particle effects'], activities: ['Animate characters and effects', 'Create loading screens and transitions'], aiTools: ['AI Animation Tools', 'DALL-E'], project: 'Animated game assets' }
      ]},
      { sessionNumber: 6, title: 'Portfolio Showcase', description: 'Present your AI art portfolio', lessons: [
        { title: 'Build Your Portfolio', objectives: ['Curate your best work', 'Present professionally'], activities: ['Create a digital portfolio', 'Present to class'], aiTools: ['Canva AI', 'ChatGPT'], project: 'Complete AI art portfolio 🎨' }
      ]}
    ]
  },
  {
    courseId: 'ai-webapp',
    sessions: [
      { sessionNumber: 1, title: 'Think Like a Builder', description: 'Learn to plan before you build', lessons: [
        { title: 'From Idea to Plan', objectives: ['Transform ideas into specifications', 'Break projects into components'], activities: ['Brainstorm app ideas', 'AI helps write a project spec'], aiTools: ['ChatGPT', 'Claude'], project: 'Complete app specification document' },
        { title: 'Design & Wireframing', objectives: ['Create wireframes with AI', 'Design user flows'], activities: ['Generate wireframes with AI tools', 'Map out the user journey'], aiTools: ['ChatGPT', 'v0.dev', 'Figma'], project: 'Complete wireframes for your app' }
      ]},
      { sessionNumber: 2, title: 'AI-Powered Coding', description: 'Let AI write code from your instructions', lessons: [
        { title: 'Your AI Coding Partner', objectives: ['Use AI coding assistants effectively', 'Understand code without memorizing syntax'], activities: ['Build a component with AI', 'Learn to read and modify AI code'], aiTools: ['Claude', 'Cursor', 'Replit'], project: 'First working component built with AI' },
        { title: 'Building the Frontend', objectives: ['Create the user interface', 'Make it responsive and beautiful'], activities: ['AI generates page layouts', 'Style with AI-assisted CSS'], aiTools: ['Claude', 'v0.dev', 'Tailwind'], project: 'Complete frontend UI' }
      ]},
      { sessionNumber: 3, title: 'Making It Work', description: 'Add functionality and logic', lessons: [
        { title: 'Interactivity & State', objectives: ['Add user interactions', 'Manage app state'], activities: ['AI helps add click handlers, forms', 'Build dynamic data display'], aiTools: ['Claude', 'ChatGPT'], project: 'Interactive app with 3+ features' },
        { title: 'Data & Storage', objectives: ['Save and load data', 'Connect to databases'], activities: ['Set up data storage', 'AI generates data layer code'], aiTools: ['Claude', 'Supabase', 'Firebase'], project: 'App with persistent data storage' }
      ]},
      { sessionNumber: 4, title: 'APIs & Integrations', description: 'Connect your app to the world', lessons: [
        { title: 'Using External APIs', objectives: ['Integrate third-party APIs', 'Handle API data'], activities: ['Connect to weather/news/game APIs', 'Display real-time data'], aiTools: ['ChatGPT', 'Claude'], project: 'App connected to 2+ external APIs' }
      ]},
      { sessionNumber: 5, title: 'AI Features in Your App', description: 'Add AI capabilities to your app', lessons: [
        { title: 'Adding AI to Your App', objectives: ['Integrate AI APIs into your app', 'Build AI-powered features'], activities: ['Add chatbot or AI analysis features', 'Implement smart suggestions'], aiTools: ['OpenAI API', 'Claude API'], project: 'App with built-in AI feature' }
      ]},
      { sessionNumber: 6, title: 'Authentication & Users', description: 'Add user accounts', lessons: [
        { title: 'User System', objectives: ['Implement sign up/login', 'Manage user data'], activities: ['AI generates auth code', 'Build profile pages'], aiTools: ['Claude', 'Supabase Auth'], project: 'Working user authentication' }
      ]},
      { sessionNumber: 7, title: 'Polish & Performance', description: 'Make it production-quality', lessons: [
        { title: 'UI Polish', objectives: ['Add animations and polish', 'Optimize for mobile'], activities: ['AI helps add micro-interactions', 'Test on multiple devices'], aiTools: ['Claude', 'ChatGPT'], project: 'Polished, responsive app' }
      ]},
      { sessionNumber: 8, title: 'Testing', description: 'Make sure everything works', lessons: [
        { title: 'Testing & Debugging', objectives: ['Test all features', 'Fix bugs with AI help'], activities: ['Write test cases', 'AI helps debug issues'], aiTools: ['ChatGPT', 'Claude'], project: 'Fully tested app' }
      ]},
      { sessionNumber: 9, title: 'Deployment', description: 'Put it on the internet!', lessons: [
        { title: 'Deploy to the Web', objectives: ['Deploy your app live', 'Set up a custom domain'], activities: ['AI walks you through deployment', 'Configure hosting'], aiTools: ['Vercel', 'Claude'], project: 'App live on the internet!' }
      ]},
      { sessionNumber: 10, title: 'Launch & Demo', description: 'Show the world what you built', lessons: [
        { title: 'Launch Day!', objectives: ['Present your app', 'Share with the world'], activities: ['Live demo', 'Get feedback and plan next features'], aiTools: ['Canva AI', 'ChatGPT'], project: 'Launched web app! 🚀' }
      ]}
    ]
  },
  {
    courseId: 'ai-music',
    sessions: [
      { sessionNumber: 1, title: 'AI Music Basics', description: 'Discover AI music creation', lessons: [
        { title: 'How AI Makes Music', objectives: ['Understand AI music generation', 'Explore AI music tools'], activities: ['Generate tracks with 3+ AI tools', 'Compare styles and quality'], aiTools: ['Suno', 'Udio', 'AIVA'], project: 'Generate 5 different music tracks' },
        { title: 'Music Prompting', objectives: ['Write effective music prompts', 'Control genre, mood, tempo'], activities: ['Experiment with music descriptions', 'Create same vibe in different genres'], aiTools: ['Suno', 'Udio'], project: 'Music prompt template library' }
      ]},
      { sessionNumber: 2, title: 'Game Soundtracks', description: 'Compose music for games', lessons: [
        { title: 'Composing for Games', objectives: ['Understand game music needs', 'Create themed soundtracks'], activities: ['Generate boss battle music', 'Create exploration themes'], aiTools: ['Suno', 'AIVA'], project: 'Complete 4-track game soundtrack' }
      ]},
      { sessionNumber: 3, title: 'Sound Effects', description: 'Create custom SFX', lessons: [
        { title: 'AI Sound Effects', objectives: ['Generate custom sound effects', 'Edit and process audio'], activities: ['Create explosion, coin, jump SFX', 'Layer and mix effects'], aiTools: ['ElevenLabs SFX', 'Audacity'], project: 'Sound effect library with 15+ effects' }
      ]},
      { sessionNumber: 4, title: 'Ambient & Atmosphere', description: 'Build immersive soundscapes', lessons: [
        { title: 'Soundscape Design', objectives: ['Create ambient environments', 'Layer sounds for immersion'], activities: ['Design forest, city, space ambience', 'Mix multiple layers'], aiTools: ['Suno', 'AI Ambient Tools'], project: '3 complete ambient soundscapes' }
      ]},
      { sessionNumber: 5, title: 'Mixing & Mastering', description: 'Polish your audio', lessons: [
        { title: 'Audio Polish', objectives: ['Basic mixing concepts', 'Use AI for mastering'], activities: ['Balance volumes and EQ', 'AI-assisted mastering'], aiTools: ['LANDR', 'Audacity'], project: 'Professionally mixed game audio' }
      ]},
      { sessionNumber: 6, title: 'Final Showcase', description: 'Present your audio portfolio', lessons: [
        { title: 'Audio Portfolio', objectives: ['Compile your best work', 'Present your creations'], activities: ['Build audio showreel', 'Present to class'], aiTools: ['SoundCloud', 'Canva AI'], project: 'Complete game audio portfolio 🎵' }
      ]}
    ]
  },
  {
    courseId: 'ai-gamemaker',
    sessions: [
      { sessionNumber: 1, title: 'Game Design Foundations', description: 'Think like a game designer', lessons: [
        { title: 'What Makes Games Fun', objectives: ['Understand core game design principles', 'Analyze games you love'], activities: ['Break down 3 favorite games', 'Identify mechanics, aesthetics, dynamics'], aiTools: ['ChatGPT', 'Claude'], project: 'Game analysis of 3 games' },
        { title: 'Your Game Concept', objectives: ['Design an original game', 'Create a game design document'], activities: ['Brainstorm with AI', 'Write GDD with AI help'], aiTools: ['ChatGPT', 'Claude'], project: 'Complete game design document' }
      ]},
      { sessionNumber: 2, title: 'Game #1: Clicker Game', description: 'Build your first browser game', lessons: [
        { title: 'Building a Clicker', objectives: ['Create a complete clicker game', 'Understand game loops and progression'], activities: ['AI generates the game code', 'You design upgrades and balance'], aiTools: ['Claude', 'ChatGPT', 'Replit'], project: 'Playable clicker game' }
      ]},
      { sessionNumber: 3, title: 'Game #1: Polish & Publish', description: 'Make it beautiful and share it', lessons: [
        { title: 'Polish & Ship', objectives: ['Add visuals and effects', 'Deploy to the web'], activities: ['AI-generated art and animations', 'Deploy and share link'], aiTools: ['Claude', 'DALL-E', 'Vercel'], project: 'Published clicker game with URL' }
      ]},
      { sessionNumber: 4, title: 'Game #2: Platformer', description: 'Build a side-scrolling platformer', lessons: [
        { title: 'Platformer Mechanics', objectives: ['Implement jumping, physics, collisions', 'Design levels'], activities: ['AI generates platformer engine', 'You design levels and enemies'], aiTools: ['Claude', 'ChatGPT'], project: 'Platformer with 3 levels' }
      ]},
      { sessionNumber: 5, title: 'Game #2: Levels & Enemies', description: 'Add depth to your platformer', lessons: [
        { title: 'Content & Challenge', objectives: ['Design engaging levels', 'Balance difficulty curve'], activities: ['Create 5+ levels with AI', 'Add power-ups and secrets'], aiTools: ['Claude', 'ChatGPT'], project: 'Platformer with 5+ levels and enemies' }
      ]},
      { sessionNumber: 6, title: 'Game #2: Ship It', description: 'Polish and publish platformer', lessons: [
        { title: 'Polish & Deploy', objectives: ['Final polish and testing', 'Deploy second game'], activities: ['Playtest and fix bugs', 'Deploy and get feedback'], aiTools: ['Claude', 'Vercel'], project: 'Published platformer game' }
      ]},
      { sessionNumber: 7, title: 'Game #3: Your Dream Game', description: 'Build whatever you want', lessons: [
        { title: 'Dream Game: Design', objectives: ['Design your dream browser game', 'Plan the full project'], activities: ['Detailed GDD with AI', 'Technical planning'], aiTools: ['Claude', 'ChatGPT'], project: 'Complete dream game plan' }
      ]},
      { sessionNumber: 8, title: 'Game #3: Build Phase 1', description: 'Core mechanics', lessons: [
        { title: 'Core Implementation', objectives: ['Build core game loop', 'Implement main mechanics'], activities: ['AI generates core code', 'Test and iterate'], aiTools: ['Claude', 'ChatGPT', 'Replit'], project: 'Playable prototype' }
      ]},
      { sessionNumber: 9, title: 'Game #3: Build Phase 2', description: 'Content and polish', lessons: [
        { title: 'Content & Polish', objectives: ['Add content and visuals', 'Polish the experience'], activities: ['Add levels, art, sound', 'Balance and test'], aiTools: ['Claude', 'DALL-E', 'Suno'], project: 'Complete game with full content' }
      ]},
      { sessionNumber: 10, title: 'Game Jam Showcase', description: 'Present all 3 games', lessons: [
        { title: 'Portfolio & Demo Day', objectives: ['Present your game portfolio', 'Celebrate your creations'], activities: ['Demo all 3 games', 'Peer play and feedback'], aiTools: ['Canva AI', 'ChatGPT'], project: '3 published browser games! 👾' }
      ]}
    ]
  },
  {
    courseId: 'ai-video',
    sessions: [
      { sessionNumber: 1, title: 'AI Video Basics', description: 'Learn AI video creation tools', lessons: [
        { title: 'The AI Video Toolkit', objectives: ['Explore AI video tools', 'Create your first AI video'], activities: ['Test 3+ AI video generators', 'Create a 30-second gaming clip'], aiTools: ['Runway', 'Pika', 'CapCut AI'], project: 'First AI-enhanced video clip' },
        { title: 'Gaming Content Strategy', objectives: ['Plan engaging content', 'Understand what gets views'], activities: ['Analyze popular gaming channels', 'AI helps plan content calendar'], aiTools: ['ChatGPT', 'YouTube'], project: 'Content strategy document' }
      ]},
      { sessionNumber: 2, title: 'Recording & Editing', description: 'Capture and edit gaming content', lessons: [
        { title: 'AI-Powered Editing', objectives: ['Record gameplay efficiently', 'Use AI for editing'], activities: ['Record gaming footage', 'AI auto-edits highlights'], aiTools: ['OBS', 'CapCut AI', 'Opus Clip'], project: 'Edited gaming highlight reel' }
      ]},
      { sessionNumber: 3, title: 'Thumbnails & Graphics', description: 'Create eye-catching visuals', lessons: [
        { title: 'AI Thumbnail Design', objectives: ['Create click-worthy thumbnails', 'Design channel graphics'], activities: ['Generate thumbnails with AI', 'A/B test designs'], aiTools: ['DALL-E', 'Canva AI', 'Midjourney'], project: '10 thumbnails for different video types' }
      ]},
      { sessionNumber: 4, title: 'Trailers & Montages', description: 'Create cinematic game content', lessons: [
        { title: 'Cinematic Trailers', objectives: ['Create game trailers', 'Add music and effects'], activities: ['Build a 60-second game trailer', 'Add AI music and transitions'], aiTools: ['CapCut AI', 'Suno', 'Runway'], project: 'Polished game trailer' }
      ]},
      { sessionNumber: 5, title: 'Tutorials & Guides', description: 'Teach others through video', lessons: [
        { title: 'Tutorial Creation', objectives: ['Create clear tutorials', 'Add AI-generated voiceover'], activities: ['Record a how-to video', 'Add AI narration and captions'], aiTools: ['ElevenLabs', 'CapCut AI', 'ChatGPT'], project: 'Complete tutorial video with AI voiceover' }
      ]},
      { sessionNumber: 6, title: 'Channel Launch', description: 'Start your content creator journey', lessons: [
        { title: 'Launch Your Channel', objectives: ['Set up and launch a channel', 'Publish your first videos'], activities: ['Create channel branding', 'Upload and optimize 3 videos'], aiTools: ['Canva AI', 'ChatGPT', 'YouTube'], project: 'Live channel with 3+ videos! 🎬' }
      ]}
    ]
  }
];
