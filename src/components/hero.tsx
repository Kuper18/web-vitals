import Header from './header';
import ImageSlider from './image-slider';
import { Button } from './ui/button';

const Hero = () => {
  return (
    <div
      id="home"
      className="text-primary-foreground bg-primary relative mb-30 h-fit
        rounded-b-[30px] p-5 pb-109.5 sm:mb-37 sm:px-10 sm:pt-12 sm:pb-134.25
        lg:h-200 lg:px-13.5 lg:pb-5 xl:px-0"
    >
      <div
        className="mx-auto flex max-w-287 flex-col gap-12 sm:gap-14 lg:gap-11"
      >
        <Header />

        <div className="flex h-fit flex-col items-start justify-center lg:h-170">
          <div className="flex max-w-95.5 flex-col gap-8 sm:gap-6 lg:gap-8">
            <h1
              className="font-poppins text-[52px] leading-17 font-semibold
                tracking-[-2px] sm:text-[64px]"
            >
              Strategic Agency
            </h1>
            <p className="text-lg">
              We believe in the power of bold ideas that can solve business
              challenges.
            </p>
          </div>

          <Button className="mt-18 w-full sm:mt-14 sm:w-66 lg:mt-20.75">
            Learn more
          </Button>
        </div>

        <ImageSlider />
      </div>
    </div>
  );
};

export default Hero;
