import { ArrowDown } from 'lucide-react'
import Modern3DScene from './Modern3DScene'
import { motion } from 'framer-motion'
import MagneticButton from './MagneticButton'

const HeroSection = () => {
  return (
    <section id='hero' className='relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden'>
        <Modern3DScene />

        <div className="container max-w-4xl mx-auto text-center z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8 backdrop-blur-[2px] py-12 rounded-3xl"
            >
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-wider text-primary uppercase bg-primary/10 rounded-full"
                >
                    Available for New Opportunities
                </motion.div>

                <h1 className='text-5xl md:text-7xl font-bold tracking-tighter leading-tight'>
                    <motion.span
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4, duration: 0.8 }}
                      className='block text-foreground/80'
                    >
                      Architecting
                    </motion.span>
                    <motion.span
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6, duration: 0.8 }}
                      className='text-gradient block'
                    >
                      Digital Value
                    </motion.span>
                </h1>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8, duration: 1 }}
                  className='text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed'
                >
                   Crafting high-performance digital solutions with a focus on <span className="text-foreground font-medium">scalability</span>, <span className="text-foreground font-medium">seamless UX</span>, and <span className="text-foreground font-medium">modern architectural patterns</span>.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.8 }}
                  className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6"
                >
                    <MagneticButton className='cosmic-button px-8 py-3 text-lg font-bold'>
                        <a href="#projects">Explore Portfolio</a>
                    </MagneticButton>
                    <MagneticButton className='px-8 py-3 rounded-full border border-border bg-background/50 backdrop-blur-md hover:bg-background/80 transition-all font-bold'>
                        <a href="#contact">Start a Conversation</a>
                    </MagneticButton>
                </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
              className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce opacity-50"
            >
                <ArrowDown className='h-6 w-6 text-primary'/>
            </motion.div>
        </div>
    </section>
  )
}

export default HeroSection
