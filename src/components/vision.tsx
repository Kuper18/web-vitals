import Section from './section';
import { Button } from './ui/button';

const Vision = () => {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat sm:bg-[url(/shapes.webp)]
        sm:bg-contain"
    >
      <Section className="mb-0 py-18 sm:mb-0 sm:py-50">
        <div className="mx-auto flex max-w-188.5 flex-col">
          <h2
            className="font-poppins mb-6 text-center text-[44px] leading-[120%]
              font-semibold sm:text-[52px] sm:leading-[150%]"
          >
            Vision, Passion, Results
          </h2>
          <p
            className="text-secondary-foreground mb-14 text-center text-[22px]
              leading-[150%] font-semibold sm:mb-16 sm:text-2xl"
          >
            We are sure that first-rate job is possible only if all three
            components are united.
          </p>

          <Button className="mx-auto h-14 w-full sm:w-66">Apply</Button>
        </div>
      </Section>
    </div>
  );
};

export default Vision;
