import type { ReactElement } from 'react';
import { motion } from 'motion/react';
import { fullStackAiSkills, powerStackSkills } from '../../data/skills';
import type { Skill } from '../../types';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { Code2, Braces, Palette, Layers, Server, Sparkles, Bot, Wand2, Brain } from 'lucide-react';

const iconMap: Record<string, ReactElement> = {
  'React': <Code2 className="w-6 h-6" aria-hidden />,
  'TypeScript': <Braces className="w-6 h-6" aria-hidden />,
  'JavaScript': <Layers className="w-6 h-6" aria-hidden />,
  'HTML/CSS': <Layers className="w-6 h-6" aria-hidden />,
  'Tailwind CSS': <Palette className="w-6 h-6" aria-hidden />,
  'Next.js': <Layers className="w-6 h-6" aria-hidden />,
  'Convex': <Server className="w-6 h-6" aria-hidden />,
  'Mastra': <Bot className="w-6 h-6" aria-hidden />,
  'OpenRouter': <Sparkles className="w-6 h-6" aria-hidden />,
  'Claude': <Brain className="w-6 h-6" aria-hidden />,
  'Cursor': <Wand2 className="w-6 h-6" aria-hidden />,
};

const SkillCard = ({ skill, index }: { skill: Skill; index: number }) => {
  const iconKey = skill.tool ?? skill.name;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
    >
      <Card className="p-6 text-center group cursor-default h-full" hover={true}>
        <div className="flex justify-center text-emphasis mb-3 group-hover:scale-110 transition-transform">
          {iconMap[iconKey] || <Code2 className="w-6 h-6" aria-hidden />}
        </div>
        <span className="font-bold text-primary block">{skill.name}</span>
        {skill.tool ? (
          <span className="text-size-body-sm text-text-muted mt-1 block">{skill.tool}</span>
        ) : null}
      </Card>
    </motion.div>
  );
};

export const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding bg-surface-muted">
      <div className="container-width">
        <SectionHeading
          centered
          subtitle="Languages, frameworks, and the product skills behind them."
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
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-size-body-lg font-bold text-primary mb-8 flex items-center gap-3">
              <span className="w-10 h-10 rounded-lg bg-emphasis flex items-center justify-center text-white">
                2
              </span>
              Full-stack & AI
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {fullStackAiSkills.map((skill, index) => (
                <SkillCard key={skill.tool ?? skill.name} skill={skill} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
