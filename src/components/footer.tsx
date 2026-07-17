import ContactUs from './contact-us';
import FooterNav from './footer-nav';
import FormSection from './form-section';
import Section from './section';

const Footer = () => {
  return (
    <footer className="bg-primary text-secondary rounded-t-[30px]">
      <Section
        id="contact"
        className="mt-18 mb-20 flex flex-col gap-20 sm:mt-45 sm:mb-20
          sm:gap-34.75 lg:gap-26"
      >
        <div
          className="grid grid-cols-2 gap-20 sm:grid-cols-6 sm:gap-30
            lg:grid-cols-12 lg:gap-0"
        >
          <div className="col-span-2 sm:col-span-4 lg:col-span-5">
            <FormSection />
          </div>
          <div className="col-span-2 sm:col-span-4 lg:col-span-5 lg:col-start-8">
            <ContactUs />
          </div>
        </div>

        <FooterNav />
      </Section>
    </footer>
  );
};

export default Footer;
