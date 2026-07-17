import Link from 'next/link';

import { cn } from '@/lib/utils';

const links = [
  { href: '#about', label: 'About us' },
  { href: '#services', label: 'Services' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#contact', label: 'Contact Us' },
] as const;

type Props = {
  className?: string;
  onClose?: () => void;
};

const HeaderNav = ({ className, onClose }: Props) => {
  return (
    <nav
      className={cn(
        `font-poppins hidden flex-1 justify-between text-[13px] font-bold
        tracking-[3px] uppercase lg:flex`,
        className,
      )}
    >
      <ul
        className="mb-8 flex flex-col gap-8 lg:mb-0 lg:flex-row lg:items-center
          lg:gap-12"
      >
        {links.map((link) => (
          <li key={link.href}>
            <Link
              className="decoration-accent decoration-2 hover:underline
                hover:underline-offset-8"
              href={link.href}
              onClick={onClose}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <Link
        className="decoration-accent decoration-2 hover:underline
          hover:underline-offset-8"
        href="#"
        onClick={onClose}
      >
        Hire us
      </Link>
    </nav>
  );
};

export default HeaderNav;
