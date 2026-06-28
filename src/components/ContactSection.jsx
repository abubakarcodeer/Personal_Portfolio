import React from 'react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import ScrollReveal from './ScrollReveal'
import MagneticButton from './MagneticButton'

const ContactSection = () => {
  return (
    <section id='contact' className='py-24 px-4 relative'>
      <div className='container mx-auto max-w-6xl'>
        <ScrollReveal>
          <div className="flex flex-col items-center mb-16">
            <h2 className='text-4xl md:text-5xl font-bold mb-4 text-center tracking-tight'>
              Let's <span className='text-primary'>Connect</span>
            </h2>
            <div className="h-1.5 w-20 bg-primary rounded-full mb-6" />
          </div>
        </ScrollReveal>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
          <ScrollReveal direction="left">
            <div className='space-y-8'>
              <h3 className='text-2xl font-bold'>Initiate a Collaboration</h3>
              <p className='text-muted-foreground text-lg'>
                I am currently open to new opportunities, freelance partnerships, and technical collaborations. If you have a vision you'd like to bring to life, let's discuss the possibilities.
              </p>

              <div className='space-y-6'>
                <div className='flex items-center gap-4'>
                  <div className='w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary'>
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className='text-sm text-muted-foreground'>Professional Email</p>
                    <p className='font-medium text-lg'>abubakarhouse1@gmail.com</p>
                  </div>
                </div>
                <div className='flex items-center gap-4'>
                  <div className='w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary'>
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className='text-sm text-muted-foreground'>Direct Contact</p>
                    <p className='font-medium text-lg'>03345791540</p>
                  </div>
                </div>
                <div className='flex items-center gap-4'>
                  <div className='w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary'>
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className='text-sm text-muted-foreground'>Location</p>
                    <p className='font-medium text-lg'>Sargodha, Pakistan</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <form className='space-y-6 bg-card/40 backdrop-blur-sm p-8 rounded-3xl border border-border/50'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div className='space-y-2'>
                  <label className='text-sm font-medium'>Full Name</label>
                  <input className='w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all' placeholder='Enter your name' />
                </div>
                <div className='space-y-2'>
                  <label className='text-sm font-medium'>Email Address</label>
                  <input className='w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all' placeholder='Enter your email' />
                </div>
              </div>
              <div className='space-y-2'>
                <label className='text-sm font-medium'>Subject</label>
                <input className='w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all' placeholder='What is this regarding?' />
              </div>
              <div className='space-y-2'>
                <label className='text-sm font-medium'>Message</label>
                <textarea rows='4' className='w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all' placeholder='How can I help you?' />
              </div>
              <MagneticButton className='w-full cosmic-button py-4 flex items-center justify-center gap-2 font-bold text-lg'>
                Submit Inquiry <Send size={18} />
              </MagneticButton>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
