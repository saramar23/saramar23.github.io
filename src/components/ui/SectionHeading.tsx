import { ReactNode } from 'react';
import { motion } from 'motion/react';

interface SectionHeadingProps {
  children: ReactNode;
  subtitle?: string;
  centered?: boolean;
}

export const SectionHeading = ({ children, subtitle, centered = false }: SectionHeadingProps) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-size-heading-lg mb-4 text-primary"
      >
        {children}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-text-muted text-size-body-lg max-w-2xl mx-auto"
        >
          {subtitle}
        </motion.p>
      )}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className={`h-1.5 w-20 bg-emphasis mt-6 ${centered ? 'mx-auto' : ''}`}
        aria-hidden
      />
    </div>
  );
};
