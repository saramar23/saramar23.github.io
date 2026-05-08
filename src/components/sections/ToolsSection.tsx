import { motion } from 'motion/react';
import { tools } from '../../data/tools';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { Wrench } from 'lucide-react';

export const ToolsSection = () => {
  return (
    <section id="tools" className="section-padding bg-background">
      <div className="container-width">
        <SectionHeading centered subtitle="Software and tools I use on a daily basis to maintain workflow and quality.">
          Daily Drivers
        </SectionHeading>

        <div className="flex flex-wrap justify-center gap-6">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="px-6 py-4 flex items-center gap-3 border shadow-none bg-white/40 border-primary/5 min-w-[140px] justify-center">
                <Wrench className="w-4 h-4 text-emphasis" aria-hidden />
                <span className="font-medium text-primary text-size-body-sm">{tool.name}</span>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
