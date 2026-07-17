import Link from 'next/link';

import Facebook from '@/components/icons/facebook.svg';
import Instagram from '@/components/icons/instagram.svg';
import Twitter from '@/components/icons/twitter.svg';

const ContactUs = () => {
  return (
    <article className="space-y-14">
      <h2 className="font-poppins text-[32px] leading-[150%] font-semibold">
        Contact us
      </h2>

      <div className="space-y-12">
        <div className="flex flex-col gap-2">
          <span
            className="font-poppins text-secondary-foreground text-[13px]
              font-bold tracking-[3px] uppercase"
          >
            Call us
          </span>

          <Link href="tel:654 321 987" className="text-2xl font-semibold">
            654 321 987
          </Link>
        </div>

        <div className="flex flex-col gap-2">
          <span
            className="font-poppins text-secondary-foreground text-[13px]
              font-bold tracking-[3px] uppercase"
          >
            Visit us
          </span>

          <p className="text-2xl font-semibold">
            2905 West Drive, Buffalo Grove
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <span
            className="font-poppins text-secondary-foreground text-[13px]
              font-bold tracking-[3px] uppercase"
          >
            our socials
          </span>

          <div className="flex items-center gap-8">
            <Link
              href="https://www.linkedin.com/in/oleh-kuper-939a432a2/"
              className="text-secondary hover:text-accent"
            >
              <Facebook className="[&_path]:fill-current" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/oleh-kuper-939a432a2/"
              className="text-secondary hover:text-accent"
            >
              <Twitter className="[&_path]:fill-current" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/oleh-kuper-939a432a2/"
              className="text-secondary hover:text-accent"
            >
              <Instagram className="[&_path]:fill-current" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ContactUs;
