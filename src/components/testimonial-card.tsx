import Image from 'next/image';

import Ticks from '@/components/icons/Ticks.svg';
import { InferTuple } from '@/types';

import { testimonials } from './testimonials';

const TestimonialCard = ({
  image,
  name,
  title,
  feedback,
}: InferTuple<typeof testimonials>) => {
  return (
    <article
      className="flex flex-col items-center rounded-[16px] px-10.5 py-8 lg:px-12
        xl:px-14"
    >
      <div
        className="testimonial-avatar-bg mb-6 flex size-49 items-center
          justify-center sm:size-62.5 lg:size-49 xl:size-62.5"
      >
        <Image
          className="absolute top-1/2 left-1/2 z-20 -translate-x-1/2
            -translate-y-1/2"
          width={140}
          height={140}
          alt={name}
          src={image}
        />
      </div>

      <div className="mb-4 space-y-2">
        <Ticks className="mx-auto" />

        <p
          className="text-secondary-foreground max-w-49 text-center text-[13px]
            leading-[150%] font-semibold sm:max-w-90.5 lg:max-w-full"
        >
          {feedback}
        </p>
      </div>

      <div className="spce-y-1">
        <span
          className="block text-center text-[13px] leading-[150%] font-semibold"
        >
          {name}
        </span>
        <h3
          className="font-poppins text-muted text-center text-[13px]
            leading-[100%] font-bold tracking-[3px] whitespace-nowrap uppercase"
        >
          {title}
        </h3>
      </div>
    </article>
  );
};

export default TestimonialCard;
