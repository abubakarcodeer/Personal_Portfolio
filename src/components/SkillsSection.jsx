import { useState } from 'react'
import { cn } from '../lib/util'
import ScrollReveal from './ScrollReveal'

const skills = [
    // Frontend
    { name: "React", category: "frontend", icon: "react" },
    { name: "React Native", category: "frontend", icon: "react" },
    { name: "Javascript", category: "frontend", icon: "javascript" },
    { name: "TailwindCSS", category: "frontend", icon: "tailwindcss" },
    { name: "Redux", category: "frontend", icon: "redux" },
    { name: "HTML5/CSS3", category: "frontend", icon: "html5" },

    // Backend
    { name: "Node.js", category: "backend", icon: "nodedotjs" },
    { name: "Express", category: "backend", icon: "express" },
    { name: "Python", category: "backend", icon: "python" },
    { name: "Kotlin", category: "backend", icon: "kotlin" },

    // Database
    { name: "Firebase", category: "database", icon: "firebase" },
    { name: "Supabase", category: "database", icon: "supabase" },
    { name: "MongoDB", category: "database", icon: "mongodb" },
    { name: "MySQL", category: "database", icon: "mysql" },

    // Tools & AI
    { name: "Claude", category: "tools", icon: "anthropic" },
    { name: "Gemini AI", category: "tools", icon: "googlegemini" },
    { name: "Lovable AI", category: "tools", icon: "probot" }, // Using a generic bot/ai icon fallback
    { name: "Git/GitHub", category: "tools", icon: "github" },
    { name: "Figma", category: "tools", icon: "figma" },
    { name: "VS Code", category: "tools", icon: "visualstudiocode" },
    { name: "Android Studio", category: "tools", icon: "androidstudio" },
]

const categorys = ['all', 'frontend', 'backend', 'database', 'tools']

const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all")

    const filteredSkills = skills.filter((skill) => (
        activeCategory === "all" || skill.category === activeCategory
    ))

    return (
        <section id='skills' className='py-24 px-4 relative'>
            <div className="container mx-auto max-w-6xl">
                <ScrollReveal>
                    <div className="flex flex-col items-center mb-16">
                        <h2 className='text-4xl md:text-5xl font-bold mb-4 text-center tracking-tight'>
                            Technical <span className='text-primary'>Expertise</span>
                        </h2>
                        <div className="h-1.5 w-20 bg-primary rounded-full mb-6" />
                        <p className='text-muted-foreground text-center max-w-2xl mx-auto'>
                            I leverage a modern tech stack to build scalable, high-performance applications with a focus on clean code and user experience.
                        </p>
                    </div>
                </ScrollReveal>

                <ScrollReveal delay={0.2}>
                    <div className='flex flex-wrap justify-center gap-3 mb-16'>
                        {categorys.map((category, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveCategory(category)}
                                className={cn(
                                    'px-6 py-2.5 cursor-pointer rounded-full transition-all duration-300 capitalize font-medium text-sm border',
                                    activeCategory === category
                                        ? "bg-primary border-primary text-white shadow-lg shadow-primary/20 scale-105"
                                        : "bg-background border-border text-muted-foreground hover:border-primary/50 hover:text-primary"
                                )}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </ScrollReveal>

                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6'>
                    {filteredSkills.map((skill, index) => (
                        <ScrollReveal key={index} delay={index * 0.05} distance={10}>
                            <div
                                className='group bg-card/40 backdrop-blur-sm p-8 rounded-3xl border border-border/50 transition-all duration-500 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-2 flex flex-col items-center text-center relative overflow-hidden'
                            >
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.05),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className='w-16 h-16 rounded-2xl bg-background/50 border border-border/50 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-primary/30 transition-all duration-500 z-10'>
                                    <img
                                        src={`https://cdn.simpleicons.org/${skill.icon}/${activeCategory === 'all' ? '0ea5e9' : '0ea5e9'}`}
                                        alt={skill.name}
                                        className="w-8 h-8 object-contain transition-all group-hover:brightness-110"
                                        onError={(e) => {
                                            e.target.src = `https://ui-avatars.com/api/?name=${skill.name}&background=0ea5e9&color=fff&bold=true`;
                                        }}
                                    />
                                </div>
                                <div className="z-10">
                                    <h3 className='font-bold text-foreground mb-1 group-hover:text-primary transition-colors'>{skill.name}</h3>
                                    <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold opacity-60 group-hover:opacity-100 transition-opacity">
                                        {skill.category}
                                    </span>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default SkillsSection
