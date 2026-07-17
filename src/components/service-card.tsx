import Arrow from '@/components/icons/Arrow.svg';
import { cn } from '@/lib/utils';

import { Badge } from './ui/badge';
import { Button } from './ui/button';

type Props = {
  service: string;
  serviceNum: string;
  className?: string;
};

const ServiceCard = ({ service, serviceNum, className }: Props) => {
  return (
    <article
      className={cn(
        `bg-accent/15 flex w-full flex-col rounded-[16px] p-8 lg:w-53.5
        lg:pr-7.5 xl:w-66 xl:pr-8`,
        className,
      )}
    >
      <Badge className="mb-6">{serviceNum}</Badge>
      <p
        className="text-secondary-foreground mb-8 text-[13px] leading-[150%]
          font-semibold whitespace-pre-line"
      >
        {service}
      </p>

      <Button
        className="h-10 max-w-35.75 gap-4 p-0 hover:bg-transparent"
        variant="ghost"
      >
        <Arrow className="size-10" />
        Learn more
      </Button>
    </article>
  );
};

export default ServiceCard;
