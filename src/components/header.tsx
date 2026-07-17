import Logo from '@/components/icons/Logo.svg';

import HeaderNav from './header-nav';
import MenuButton from './ui/menu-button';

const Header = () => {
  return (
    <header className="flex items-center gap-8 lg:gap-34 xl:gap-62.75">
      <Logo className="h-7 w-11.5" />
      <MenuButton />
      <HeaderNav />
    </header>
  );
};

export default Header;
