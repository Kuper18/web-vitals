import Section from './section';
import ServiceCard from './service-card';

const Services = () => {
  return (
    <Section id="services">
      <div className="flex flex-col justify-between gap-12 md:gap-0 lg:flex-row">
        <div
          className="col-span-2 w-full space-y-6 sm:col-span-3 sm:max-w-66.5
            lg:col-span-4 lg:max-w-73.5 xl:max-w-91"
        >
          <div className="space-y-4">
            <p
              className="font-poppins text-muted text-[13px] font-bold
                tracking-[3px] uppercase"
            >
              Services
            </p>
            <h2
              className="font-poppins text-[32px] leading-[130%] font-semibold"
            >
              Air is a full service creative agency
            </h2>
          </div>

          <div className="text-secondary-foreground space-y-6 text-sm">
            <p>Deep analytics, strong strategy and bright creative ideas.</p>
            <p>
              We are sure that first-rate job is possible only if all three
              components are united.
            </p>
          </div>
        </div>

        <div
          className="grid grid-cols-1 gap-6 sm:-mt-33 sm:grid-cols-2 sm:gap-7.5
            lg:mt-0 lg:gap-5"
        >
          <div className="space-y-5 sm:pt-34.75">
            <ServiceCard
              className="col-start-1 row-span-2 row-start-2 row-end-3"
              serviceNum="001"
              service={
                'Brand Development\nCopywriting\nLogo & Website\nDesign Packaging'
              }
            />
            <ServiceCard
              className="col-start-2 row-span-2 row-start-1 row-end-3"
              serviceNum="002"
              service={
                'Marketing Strategy\nEmail Marketing\nPaid Advertising\nBlog Content & SEO'
              }
            />
          </div>

          <div className="space-y-5 sm:pb-34.75">
            <ServiceCard
              className="col-start-1 row-span-2 row-start-2 row-end-3"
              serviceNum="003"
              service={
                'Content Production\nGraphic Design\nVideo Production\nPost Production'
              }
            />
            <ServiceCard
              className="col-start-2 row-span-2 row-start-1 row-end-3"
              serviceNum="004"
              service={
                'Digital Communications\nInfluencer Marketing\nProduct Placements\nStrategic Partnerships'
              }
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Services;
