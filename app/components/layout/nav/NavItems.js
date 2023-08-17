'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

const NavItems = () => {
  const pathname = usePathname();

  const NavItem = ({ to, text }) => {
    const isActive = pathname.startsWith(to);
    return (
      <Link
        href={to}
        className={`flex cursor-pointer ${
          isActive
            ? 'text-amber-500 font-bold'
            : 'text-slate-800 hover:text-amber-500 hover:font-bold transition-colors duration-300'
        }`}
      >
        {text}
      </Link>
    );
  };

  return (
    <>
      <NavItem to='/postos' text='Para os Postos' />
      <NavItem to='/clientes' text='Para os Clientes' />
    </>
  );
};

export default NavItems;
