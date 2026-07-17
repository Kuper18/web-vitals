import Section from './section';
import TestimonialCard from './testimonial-card';

export const testimonials = [
  {
    name: 'Tal Gilad',
    title: 'Teach for America',
    feedback:
      'AIR&apos;s ideas are refreshing and out of the box. Authentic team that focuses on the important path of the brand.',
    image: '/feedback/tal-gilad.webp',
  },
  {
    name: 'Azadeh Hawkins',
    title: 'Hawkins Consulting',
    feedback:
      'AIR is an exceptional agency that leads with creative talent, first-class account servicing.',
    image: '/feedback/azadeh-hawkins.webp',
  },
  {
    name: 'Michel Grover',
    title: 'Hulu',
    feedback:
      'AIR raises the agency bar to stratospheric heights on both creative output and client service.',
    image: '/feedback/michel-grover.webp',
  },
] as const;

const Testimonials = () => {
  return (
    <Section id="testimonials">
      <div className="mb-12 space-y-4 sm:mb-14 lg:mb-21.25">
        <p
          className="font-poppins text-muted text-[13px] font-bold
            tracking-[3px] uppercase"
        >
          Testimonials
        </p>
        <h2 className="font-poppins text-[32px] leading-[150%] font-semibold">
          What <br className="hidden sm:block" /> people say
        </h2>
      </div>

      <div
        className="flex flex-col items-center gap-6 sm:gap-7.5 lg:flex-row
          lg:gap-5 xl:gap-7.5"
      >
        {testimonials.map((item) => (
          <TestimonialCard key={item.name} {...item} />
        ))}
      </div>
    </Section>
  );
};

export default Testimonials;
