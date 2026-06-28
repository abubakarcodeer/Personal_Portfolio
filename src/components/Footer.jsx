import { Github, Linkedin, Mail, Twitter } from 'lucide-react'
import ScrollReveal from './ScrollReveal'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className='py-12 border-t border-border/50'>
            <div className='container mx-auto px-4 max-w-6xl'>
                <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
                    <ScrollReveal direction="left">
                        <div className='text-center md:text-left'>
                            <h2 className='text-2xl font-bold text-foreground'>
                                Abu<span className='text-primary'>Bakar</span>
                            </h2>
                            <p className='text-muted-foreground mt-2'>
                                Building digital products, brands, and experiences.
                            </p>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal direction="right">
                        <div className='flex space-x-6'>
                            <a href='#' className='text-muted-foreground hover:text-primary transition-colors'>
                                <Github size={20} />
                            </a>
                            <a href='#' className='text-muted-foreground hover:text-primary transition-colors'>
                                <Linkedin size={20} />
                            </a>
                            <a href='#' className='text-muted-foreground hover:text-primary transition-colors'>
                                <Twitter size={20} />
                            </a>
                            <a href='mailto:abubakarhouse1@gmail.com' className='text-muted-foreground hover:text-primary transition-colors'>
                                <Mail size={20} />
                            </a>
                        </div>
                    </ScrollReveal>
                </div>

                <div className='mt-12 pt-8 border-t border-border/20 text-center text-sm text-muted-foreground'>
                    <p>© {currentYear} AbuBakar. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
