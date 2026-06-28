import { Code, Smartphone, User } from 'lucide-react'
import ScrollReveal from './ScrollReveal'

const About = () => {
    return (
        <section id='about' className='py-24 px-4 relative'>
            <div className='container mx-auto max-w-6xl'>
                <ScrollReveal>
                    <div className="flex flex-col items-center mb-16">
                        <h2 className='text-4xl md:text-5xl font-bold mb-4 text-center tracking-tight'>
                            About <span className='text-primary'>Me</span>
                        </h2>
                        <div className="h-1.5 w-20 bg-primary rounded-full mb-6" />
                    </div>
                </ScrollReveal>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
                    <ScrollReveal direction="left">
                        <div className='space-y-8'>
                            <h3 className='text-3xl font-bold leading-tight'>
                                Passionate Web & Mobile <br />
                                <span className="text-primary">Developer</span>
                            </h3>
                            <p className='text-muted-foreground text-lg leading-relaxed'>
                                With over 1 year of experience in development, I specialize in creating responsive, accessible, and performant digital applications using <span className="text-foreground font-medium">React</span> and <span className="text-foreground font-medium">React Native</span>.
                            </p>
                            <p className='text-muted-foreground text-lg leading-relaxed'>
                                I am dedicated to crafting elegant solutions for complex problems and constantly stay at the forefront of the ever-evolving technology landscape.
                            </p>

                            <div className='flex flex-wrap gap-4 pt-4'>
                                <a href='#contact' className='cosmic-button px-8 py-3'>Get In Touch</a>
                                <a href='/CV.pdf' download={true} className='px-8 py-3 rounded-full border border-border hover:border-primary/50 transition-all font-medium'>Download CV</a>
                            </div>
                        </div>
                    </ScrollReveal>

                    <div className='grid grid-cols-1 gap-4'>
                        {[
                            { icon: <Code className='h-6 w-6 text-primary'/>, title: "Web Development", desc: "Creating responsive websites and web applications with modern frameworks." },
                            { icon: <Smartphone className='h-6 w-6 text-primary'/>, title: "Mobile App Development", desc: "Developing high-performance Android & iOS apps with React Native." },
                            { icon: <User className='h-6 w-6 text-primary'/>, title: "UI/UX Design", desc: "Designing intuitive user interfaces and seamless user experiences." }
                        ].map((item, i) => (
                            <ScrollReveal key={i} direction="right" delay={i * 0.2}>
                                <div className='p-6 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/50 transition-all duration-300 group'>
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
