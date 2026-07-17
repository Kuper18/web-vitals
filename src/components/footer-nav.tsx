import Link from 'next/link';

import Logo from '@/components/icons/Logo.svg';

const links = [
  { href: '#about', label: 'About us' },
  { href: '#home', label: 'Home' },
  { href: '#work', label: 'Work' },
  { href: '#services', label: 'Services' },
  { href: '#contact', label: 'Contact Us' },
] as const;

const FooterNav = () => {
  return (
    <div
      className="flex flex-1 flex-col justify-between gap-12 sm:gap-6
        lg:flex-row lg:items-center"
    >
      <Logo className="h-7 w-11.5" />

      <nav
        className="font-poppins text-[13px] font-bold tracking-[3px] uppercase
          lg:flex"
      >
        <ul
          className="flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-10
            lg:gap-16"
        >
          {links.map((link) => (
            <li key={link.href}>
              <Link
                className="decoration-accent decoration-2 hover:underline
                  hover:underline-offset-8"
                href={link.href}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default FooterNav;
