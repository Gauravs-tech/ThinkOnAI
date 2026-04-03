import { forwardRef } from 'react';
import type { ButtonHTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', ...props }, ref) => {
    const baseClass = "px-6 py-3 rounded-full font-body font-semibold text-sm transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background disabled:opacity-50 disabled:cursor-not-allowed";
    
    // Primary: Signature Gradient over full radius
    // Secondary: Background fill
    // Outline: "Ghost Border" from Stitch CSS rules
    const variants = {
      primary: "bg-primary-gradient text-background hover:brightness-110",
      secondary: "bg-surface-high text-text-primary hover:bg-surface-highest",
      outline: "border border-outline-variant/15 text-text-primary hover:bg-surface-low"
    };

    return (
      <button
        ref={ref}
        className={cn(baseClass, variants[variant], className)}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export default Button;
