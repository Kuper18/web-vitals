import Section from './section';

const About = () => {
  return (
    <Section id="about" className="space-y-4">
      <h2
        className="font-poppins text-foreground text-center text-[32px]
          font-semibold"
      >
        Who we are
      </h2>
      <p
        className="text-secondary-foreground flex w-full text-center text-[22px]
          leading-[150%] font-semibold sm:text-2xl"
      >
        We embrace a strategic approach to creative ideas. We are interested in
        people and human relationships. This is the main thing you need to know
        about us. We believe in the power of bold ideas that can solve business
        challenges.
      </p>
    </Section>
  );
};

export default About;
