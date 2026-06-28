import { useState } from 'react'
import { cn } from '../lib/util'
import ScrollReveal from './ScrollReveal'
import {
  SiReact, SiJavascript, SiTailwindcss, SiRedux, SiHtml5,
  SiNodedotjs, SiExpress, SiPython, SiKotlin, SiFirebase, SiSupabase,
  SiMongodb, SiMysql, SiGithub, SiFigma
} from 'react-icons/si'
import { BsRobot, BsStars, BsCpu, BsTerminal } from 'react-icons/bs'
import { VscVscode, VscLayersActive } from 'react-icons/vsc'
import { DiAndroid } from 'react-icons/di'

const skills = [
    // Frontend
    { name: "React", category: "frontend", icon: SiReact },
    { name: "React Native", category: "frontend", icon: SiReact },
    { name: "Javascript", category: "frontend", icon: SiJavascript },
    { name: "TailwindCSS", category: "frontend", icon: SiTailwindcss },
    { name: "Redux", category: "frontend", icon: SiRedux },
    { name: "HTML5/CSS3", category: "frontend", icon: SiHtml5 },

    // Backend
    { name: "Node.js", category: "backend", icon: SiNodedotjs },
    { name: "Express", category: "backend", icon: SiExpress },
    { name: "Python", category: "backend", icon: SiPython },
    { name: "Kotlin", category: "backend", icon: SiKotlin },

    // Database
    { name: "Firebase", category: "database", icon: SiFirebase },
    { name: "Supabase", category: "database", icon: SiSupabase },
    { name: "MongoDB", category: "database", icon: SiMongodb },
    { name: "MySQL", category: "database", icon: SiMysql },

    // Tools & AI
    { name: "Claude", category: "tools", icon: BsCpu },
    { name: "Gemini AI", category: "tools", icon: BsStars },
    { name: "Lovable AI", category: "tools", icon: BsRobot },
    { name: "Git/GitHub", category: "tools", icon: SiGithub },
    { name: "Figma", category: "tools", icon: SiFigma },
    { name: "VS Code", category: "tools", icon: VscVscode },
    { name: "Android Studio", category: "tools", icon: DiAndroid },
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
                    {filteredSkills.map((skill, index) => {
                        const Icon = skill.icon;
                        return (
                            <ScrollReveal key={index} delay={index * 0.05} distance={10}>
                                <div
                                    className='group bg-card/40 backdrop-blur-sm p-8 rounded-3xl border border-border/50 transition-all duration-500 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-2 flex flex-col items-center text-center relative overflow-hidden'
                                >
                                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.05),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    <div className='w-16 h-16 rounded-2xl bg-background/50 border border-border/50 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-primary/30 transition-all duration-500 z-10'>
                                        <Icon className="text-3xl text-primary transition-all group-hover:brightness-110" />
                                    </div>
                                    <div className="z-10">
                                        <h3 className='font-bold text-foreground mb-1 group-hover:text-primary transition-colors'>{skill.name}</h3>
                                        <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold opacity-60 group-hover:opacity-100 transition-opacity">
                                            {skill.category}
                                        </span>
                                    </div>
                                </div>
                            </ScrollReveal>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default SkillsSection
