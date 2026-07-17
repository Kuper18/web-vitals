import React from 'react';

import { cn } from '@/lib/utils';

type Props = {
  children: React.ReactNode;
  id?: string;
  className?: string;
};

const Section = ({ children, className, id }: Props) => {
  return (
    <section
      id={id}
      className={cn(
        'mx-auto mb-30 max-w-287 px-5 sm:mb-37 sm:px-10 lg:px-13.5 xl:px-0',
        className,
      )}
    >
      {children}
    </section>
  );
};

export default Section;
