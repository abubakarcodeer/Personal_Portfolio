import React, { useState } from 'react'
import { Code, Smartphone, User, Download, ChevronRight } from 'lucide-react'
import ScrollReveal from './ScrollReveal'
import { motion, AnimatePresence } from 'framer-motion'

const About = () => {
    const [showDownloadOptions, setShowDownloadOptions] = useState(false);

    return (
        <section id='about' className='py-24 px-4 relative'>
            <div className='container mx-auto max-w-6xl'>
                <ScrollReveal>
                    <div className="flex flex-col items-center mb-16">
                        <h2 className='text-4xl md:text-5xl font-bold mb-4 text-center tracking-tight'>
                            Professional <span className='text-primary'>Profile</span>
                        </h2>
                        <div className="h-1.5 w-20 bg-primary rounded-full mb-6" />
                    </div>
                </ScrollReveal>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
                    <ScrollReveal direction="left">
                        <div className='space-y-8'>
                            <h3 className='text-3xl font-bold leading-tight'>
                                Bridging the gap between <br />
                                <span className="text-primary">Vision and Reality</span>
                            </h3>
                            <p className='text-muted-foreground text-lg leading-relaxed'>
                                I am a Full-Stack Developer specialized in the React ecosystem, dedicated to building scalable web and mobile applications. With a strong foundation in <span className="text-foreground font-medium">frontend aesthetics</span> and <span className="text-foreground font-medium">backend logic</span>, I translate complex technical requirements into intuitive user experiences.
                            </p>
                            <p className='text-muted-foreground text-lg leading-relaxed'>
                                My approach combines rigorous engineering standards with a user-centric design philosophy. I thrive on solving intricate problems and delivering high-quality, production-ready code that drives business value.
                            </p>

                            <div className='flex flex-wrap gap-4 pt-4 relative'>
                                <a href='#contact' className='cosmic-button px-8 py-3 font-bold'>Collaborate With Me</a>

                                <div className="relative">
                                    <button
                                        onClick={() => setShowDownloadOptions(!showDownloadOptions)}
                                        className='px-8 py-3 rounded-full border border-border bg-background/50 backdrop-blur-md hover:border-primary/50 transition-all font-bold flex items-center gap-2'
                                    >
                                        <Download size={18} /> Download Resume
                                    </button>

                                    <AnimatePresence>
                                        {showDownloadOptions && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                                className="absolute top-full left-0 mt-2 w-64 bg-card border border-border rounded-2xl shadow-2xl z-50 overflow-hidden"
                                            >
                                                <div className="p-2 space-y-1">
                                                    <a
                                                        href="/WEB_DEVELOPER_M.ABU BAKAR.pdf"
                                                        download="WEB_DEVELOPER_M.ABU BAKAR.pdf"
                                                        className="flex items-center justify-between p-3 rounded-xl hover:bg-primary/10 transition-colors group text-sm font-medium"
                                                    >
                                                        <span>Web Development CV</span>
                                                        <ChevronRight size={16} className="text-muted-foreground group-hover:text-primary transition-transform group-hover:translate-x-1" />
                                                    </a>
                                                    <div className="h-px bg-border/50 mx-2" />
                                                    <a
                                                        href="/MOBILE_APP_DEVELOPER_M.ABU BAKAR.pdf"
                                                        download="MOBILE_APP_DEVELOPER_M.ABU BAKAR.pdf"
                                                        className="flex items-center justify-between p-3 rounded-xl hover:bg-primary/10 transition-colors group text-sm font-medium"
                                                    >
                                                        <span>Mobile App Development CV</span>
                                                        <ChevronRight size={16} className="text-muted-foreground group-hover:text-primary transition-transform group-hover:translate-x-1" />
                                                    </a>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                    <div className='grid grid-cols-1 gap-4'>
                        {[
                            { icon: <Code className='h-6 w-6 text-primary'/>, title: "Full-Stack Development", desc: "Engineering robust end-to-end solutions using modern frameworks and distributed systems." },
                            { icon: <Smartphone className='h-6 w-6 text-primary'/>, title: "Mobile Engineering", desc: "Developing high-performance, cross-platform mobile experiences with React Native." },
                            { icon: <User className='h-6 w-6 text-primary'/>, title: "User Experience Design", desc: "Crafting intentional, accessible interfaces focused on user engagement and conversion." }
                        ].map((item, i) => (
                            <ScrollReveal key={i} direction="right" delay={i * 0.2}>
                                <div className='p-6 rounded-2xl bg-card/40 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 group'>
                                    <div className='flex items-start gap-6'>
                                        <div className='p-4 rounded-xl bg-primary/5 group-hover:bg-primary/10 transition-colors'>
                                            {item.icon}
                                        </div>
                                        <div>
                                            <h4 className='font-bold text-xl mb-2'>{item.title}</h4>
                                            <p className='text-muted-foreground leading-relaxed'>
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
