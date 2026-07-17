import * as React from 'react';

import { cn } from '@/lib/utils';

function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        `border-b-secondary font-poppins file:text-foreground
        placeholder:text-muted focus-visible:border-b-input disabled:bg-input/50
        aria-invalid:border-destructive aria-invalid:ring-destructive/20
        dark:bg-input/30 dark:disabled:bg-input/80
        dark:aria-invalid:border-destructive/50
        dark:aria-invalid:ring-destructive/40 h-10.25 w-full min-w-0
        rounded-none border-0 border-b bg-transparent px-0 py-1 text-base
        font-semibold transition-colors outline-none file:inline-flex file:h-6
        file:border-0 file:bg-transparent file:text-sm file:font-medium
        focus-visible:border-b disabled:pointer-events-none
        disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:ring-3
        md:text-[15px]`,
        className,
      )}
      {...props}
    />
  );
}

export { Input };
