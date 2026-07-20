import { motion } from 'motion/react';
import { SectionHeading } from '../ui/SectionHeading';

export const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-surface-muted">
      <div className="container-width">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeading subtitle="Vancouver based • Frontend-first • Expanding into full-stack">
              The Person Behind the Code
            </SectionHeading>

            <div className="space-y-6 text-text-muted text-size-body-md leading-relaxed">
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                I&apos;m a Vancouver-based developer with a frontend focus in React and TypeScript.
                I care about clean, type-safe interfaces — and I&apos;m expanding into full-stack so I can own more of the path from UI to data.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-accent/30 border-l-4 border-emphasis p-6 pb-6 rounded-r-xl"
              >
                <strong>The Pivot:</strong><br />
                Before transitioning into tech, I spent years as a barista.
                That experience was my &quot;soft-skills bootcamp&quot;, teaching me how to stay calm during a rush,
                communicate clearly with a team, and solve problems for customers on the fly.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                I recently graduated from Langara College in Internet and Web Development.
                School gave me a foundation in Java and Linux; since then I&apos;ve been self-teaching modern tools
                like Next.js, Convex, and AI assistants (Mastra / OpenRouter) to build fuller product experiences.
              </motion.p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white rounded-3xl overflow-hidden relative border border-primary/10 flex flex-col justify-center p-8" role="figure" aria-label="Decorative TypeScript interface describing a portfolio project">
              <pre className="font-mono text-lg leading-7">
                <code>
                  <span className="text-blue-600">export interface </span>
                    <span className="text-pink-400">Project </span>
                    <span className="text-gray-800">{"{"}</span>{"\n"}
                    <span className="text-gray-800">{"  "}</span>
                    <span className="text-red-500">id</span>
                    <span className="text-gray-800">: </span><span className="text-green-600">string</span>
                    <span className="text-gray-800">{";\n"}</span>
                  <span className="text-gray-800">{"  "}</span>
                    <span className="text-red-500">title</span>
                    <span className="text-gray-800">: </span>
                    <span className="text-green-600">string</span>
                    <span className="text-gray-800">{";\n"}</span>
                  <span className="text-gray-800">{"  "}</span>
                    <span className="text-red-500">descriptionWhy</span>
                    <span className="text-gray-800">: </span>
                    <span className="text-green-600">string</span>
                    <span className="text-gray-800">{";\n"}</span>
                  <span className="text-gray-800">{"  "}</span>
                    <span className="text-red-500">techStack</span>
                    <span className="text-gray-800">: </span>
                    <span className="text-green-600">string</span>
                    <span className="text-gray-800">{"[];\n"}</span>
                  <span className="text-gray-800">{"  "}</span>
                    <span className="text-red-500">liveDemoUrl</span>
                    <span className="text-gray-800">: </span>
                    <span className="text-green-600">string</span>
                    <span className="text-gray-800">{";\n"}</span>
                  <span className="text-gray-800">{"  "}</span>
                    <span className="text-red-500">repositoryUrl</span>
                    <span className="text-gray-800">: </span>
                    <span className="text-green-600">string</span>
                    <span className="text-gray-800">{";\n"}</span>
                  <span className="text-gray-800">{"  "}</span>
                    <span className="text-red-500">imageAlt</span>
                    <span className="text-gray-800">: </span>
                    <span className="text-green-600">string</span>
                    <span className="text-gray-800">{";\n"}</span>
                  <span className="text-gray-800">{"  "}</span>
                    <span className="text-red-500">imageSrc</span>
                    <span className="text-gray-800">: </span>
                    <span className="text-green-600">string</span>
                    <span className="text-gray-800">{";\n"}</span>
                  <span className="text-gray-800">{"}"}</span>
                </code>
              </pre>
            </div>
            {/* Stats badges */}
            <div className="absolute -bottom-6 -right-6 md:right-12 bg-white p-4 rounded-2xl shadow-xl border border-primary/5 mx-2">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <span className="block text-2xl font-bold text-primary">3+</span>
                  <span className="text-[10px] uppercase text-text-muted font-bold tracking-widest">Projects</span>
                </div>
                <div>
                  <span className="block text-2xl font-bold text-emphasis">100%</span>
                  <span className="text-[10px] uppercase text-text-muted font-bold tracking-widest">TypeScript</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
