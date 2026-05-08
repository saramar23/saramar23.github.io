import { ReactNode, HTMLAttributes } from 'react';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  variant?: 'primary' | 'accent' | 'emphasis' | 'outline';
  className?: string;
}

export const Badge = ({ children, variant = 'primary', className = '', ...props }: BadgeProps) => {
  const variants = {
    primary: 'bg-primary/10 text-primary',
    accent: 'bg-accent/20 text-primary',
    emphasis: 'bg-emphasis/10 text-emphasis',
    outline: 'border border-text-muted/30 text-text-muted',
  };

  return (
    <span 
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
};
