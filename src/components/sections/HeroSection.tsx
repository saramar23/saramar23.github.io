import { ArrowRight, Mail } from 'lucide-react';
import { motion } from 'motion/react';
import { Button } from '../ui/Button';
import { useSmoothScroll } from '../../hooks/useSmoothScroll';

export const HeroSection = () => {
  const { scrollToId } = useSmoothScroll();

  return (
    <section
      id="home"
      className="section-padding min-h-[90vh] flex flex-col justify-center relative overflow-hidden bg-gradient-to-b from-accent/35 via-accent/10 to-surface-muted"
    >
      {/* Decorative background elements */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl -z-10" aria-hidden />
      <div className="absolute bottom-1/4 left-0 w-[300px] h-[300px] bg-secondary/10 rounded-full blur-3xl -z-10" aria-hidden />

      <div className="container-width">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <span className="text-emphasis font-bold uppercase tracking-widest text-body-sm block mb-4 border-l-4 border-emphasis pl-4">
                Available for projects
              </span>
              <h1 className="text-size-heading-xl text-primary leading-tight mb-6">
                Hi, I&apos;m <span className="text-emphasis">Sara</span>.<br />
                I build clean, <span className="italic text-secondary">type-safe</span> web apps.
              </h1>
              <p className="text-text-muted text-size-body-lg mb-10 max-w-xl leading-relaxed">
                Vancouver-based developer with a frontend focus in React and TypeScript, expanding into full-stack with tools like Next.js and Convex.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                type="button"
                variant="primary"
                size="lg"
                className="gap-2"
                onClick={() => scrollToId('#projects')}
                aria-label="Scroll to featured projects"
              >
                View Projects
                <ArrowRight className="w-5 h-5" aria-hidden />
              </Button>
              <Button
                type="button"
                variant="outline"
                size="lg"
                className="gap-2"
                onClick={() => scrollToId('#contact')}
                aria-label="Request resume — go to contact section"
              >
                <Mail className="w-5 h-5" aria-hidden />
                Contact me
              </Button>
            </motion.div>
          </div>

          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative aspect-square max-w-md mx-auto"
            >
              {/* Photo frame decoration */}
              <div className="absolute inset-0 bg-secondary/20 rounded-3xl -rotate-6 z-0 border-2 border-secondary/20" aria-hidden />
              <div className="absolute inset-0 bg-accent/20 rounded-3xl rotate-3 z-0 border-2 border-accent/20" aria-hidden />
              <div className="relative z-10 w-full h-full bg-white rounded-3xl overflow-hidden shadow-2xl border-4 border-white flex items-center justify-center">
                  <img 
                    src='/media/mephoto.jpg' 
                    alt="Sara's portrait"          
                  />     
               
                <div className="absolute top-8 right-8 bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-lg border border-primary/5 flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs font-bold text-primary">Status: Coding</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
