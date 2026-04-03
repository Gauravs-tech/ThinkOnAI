import { forwardRef } from 'react';
import type { InputHTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1 w-full relative">
        {label && (
          <label className="text-xs font-body font-medium text-primary mb-1">
            {label}
          </label>
        )}
        <input
          type={type}
          className={cn(
            "flex w-full bg-transparent border-b border-outline-variant/40 py-2 text-sm text-text-primary font-body placeholder:text-text-variant/50 focus:outline-none focus:border-primary focus:border-b-2 transition-all",
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);
Input.displayName = 'Input';

export default Input;
