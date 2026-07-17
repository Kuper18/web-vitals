import Image from 'next/image';

import Section from './section';

const articles = [
  {
    title: 'Branding',
    description:
      'We create additional value for companies, products, services as well as verbal and visual ways to deliver it to the audience.',
    image: '/expertise/branding.webp',
  },
  {
    title: 'Communication',
    description:
      'We strive to create communications that can increase media performance. We use everything — words, meanings, stories, art, movies.',
    image: '/expertise/communication.webp',
  },
  {
    title: 'Strategy',
    description:
      'We create business growth strategies, from the moment of its birth to the achievement of the necessary business indicators.',
    image: '/expertise/strategy.webp',
  },
] as const;

const Expertise = () => {
  return (
    <Section id="work" className="space-y-16 py-32 lg:pb-33.5">
      <h2
        className="font-poppins text-center text-[44px] font-semibold
          sm:text-[52px]"
      >
        Our expertise
      </h2>

      <div
        className="flex flex-col items-center justify-center gap-14 sm:gap-18
          lg:flex-row lg:items-start lg:gap-34.25"
      >
        {articles.map(({ title, description, image }) => (
          <article
            key={title}
            className="max-w-90.5 space-y-8 lg:max-w-full lg:space-y-10"
          >
            <Image
              className="mx-auto"
              src={image}
              alt={title}
              width={166}
              height={166}
            />

            <div className="space-y-4">
              <h3 className="font-poppins text-center text-xl font-semibold">
                {title}
              </h3>
              <p className="text-secondary-foreground text-center text-sm">
                {description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
};

export default Expertise;
