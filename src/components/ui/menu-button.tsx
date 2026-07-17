'use client';

import { useState } from 'react';

import Menu from '@/components/icons/menu.svg';
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer';

import HeaderNav from '../header-nav';

const MenuButton = () => {
  const [open, setOpen] = useState(false);

  const onclose = () => {
    setOpen(false);
  };

  return (
    <Drawer open={open} onOpenChange={setOpen} direction="left">
      <DrawerTrigger className="lg:hidden" asChild>
        <Menu />
      </DrawerTrigger>

      <DrawerContent>
        <div className="p-4">
          <HeaderNav onClose={onclose} className="block" />
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default MenuButton;
