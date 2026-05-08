import type { ReactElement } from 'react';
import { motion } from 'motion/react';
import { powerStackSkills, supportingSkills } from '../../data/skills';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { Code2, Braces, Palette, Database, Layers } from 'lucide-react';

const iconMap: Record<string, ReactElement> = {
  'React': <Code2 className="w-6 h-6" aria-hidden />,
  'TypeScript': <Braces className="w-6 h-6" aria-hidden />,
  'Tailwind CSS': <Palette className="w-6 h-6" aria-hidden />,
  'JavaScript': <Layers className="w-6 h-6" aria-hidden />,
  'HTML/CSS': <Layers className="w-6 h-6" aria-hidden />,
  'Node.js': <Database className="w-6 h-6" aria-hidden />,
  'Java': <Code2 className="w-6 h-6" aria-hidden />,
  'MySQL': <Database className="w-6 h-6" aria-hidden />,
  'Linux': <Database className="w-6 h-6" aria-hidden />,
};

export const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding bg-surface-muted">
      <div className="container-width">
        <SectionHeading 
          centered
          subtitle="My primary development stack and supporting technologies."
        >
          My Arsenal
        </SectionHeading>
        <div className="space-y-16">
          <div>
            <h3 className="text-size-body-lg font-bold text-primary mb-8 flex items-center gap-3">
              <span className="w-10 h-10 rounded-lg bg-emphasis flex items-center justify-center text-white">
                1
              </span>
              The Power Stack
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {powerStackSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Card className="p-6 text-center group cursor-default" hover={true}>
                    <div className="flex justify-center text-emphasis mb-3 group-hover:scale-110 transition-transform">
                      {iconMap[skill.name] || <Code2 className="w-6 h-6" aria-hidden />}
                    </div>
                    <span className="font-bold text-primary block">{skill.name}</span>
                    <span className="text-[10px] uppercase tracking-wider text-text-muted font-bold block mt-1">
                      {skill.label}
                    </span>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-size-body-lg font-bold text-primary mb-8 flex items-center gap-3">
              <span className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center text-primary">
                2
              </span>
              The Supporting Cast
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {supportingSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Card className="p-4 flex items-center gap-4 group cursor-default" hover={true}>
                    <div className="text-primary/60 group-hover:text-primary transition-colors">
                      {iconMap[skill.name] || <Code2 className="w-5 h-5" aria-hidden />}
                    </div>
                    <div>
                      <span className="font-semibold text-primary block text-size-body-sm">{skill.name}</span>
                      <span className="text-[10px] text-text-muted block">{skill.label}</span>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
