import { Github, Linkedin, Mail } from 'lucide-react'
import ScrollReveal from './ScrollReveal'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className='py-12 border-t border-border/50 bg-card/20 backdrop-blur-sm'>
            <div className='container mx-auto px-4 max-w-6xl'>
                <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
                    <ScrollReveal direction="left">
                        <div className='text-center md:text-left'>
                            <h2 className='text-2xl font-bold text-foreground'>
                                Abu<span className='text-primary'>Bakar</span>
                            </h2>
                            <p className='text-muted-foreground mt-2 max-w-xs'>
                                Engineering high-performance digital products and scalable web experiences.
                            </p>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal direction="right">
                        <div className='flex flex-col items-center md:items-end gap-4'>
                            <div className='flex space-x-6'>
                                <a href='https://github.com/abubakarcodeer' target='_blank' rel='noreferrer' className='text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110'>
                                    <Github size={22} />
                                </a>
                                <a href='https://www.linkedin.com/in/muhammad-abu-bakar-6492062b8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target='_blank' rel='noreferrer' className='text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110'>
                                    <Linkedin size={22} />
                                </a>
                                <a href='mailto:abubakarhouse1@gmail.com' className='text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110'>
                                    <Mail size={22} />
                                </a>
                            </div>
                            <p className='text-xs text-muted-foreground font-medium tracking-widest uppercase'>
                                Built with React & Tailwind
                            </p>
                        </div>
                    </ScrollReveal>
                </div>

                <div className='mt-12 pt-8 border-t border-border/20 text-center text-sm text-muted-foreground'>
                    <p>© {currentYear} AbuBakar Codeer. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
