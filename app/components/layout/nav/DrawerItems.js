'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

const DrawerItems = ({ setIsDrawerOpen }) => {
  const pathname = usePathname();

  const NavItem = ({ setIsDrawerOpen, to, text }) => {
    const isActive = pathname.startsWith(to);
    return (
      <Link
        href={to}
        onClick={() => setIsDrawerOpen(false)}
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
      <NavItem setIsDrawerOpen={setIsDrawerOpen} to='/postos' text='🏠 Página Inicial' />
      <NavItem setIsDrawerOpen={setIsDrawerOpen} to='/postos' text='⛽️ Para os Postos' />
      <NavItem setIsDrawerOpen={setIsDrawerOpen} to='/clientes' text='🤝 Para os Clientes' />
      <NavItem setIsDrawerOpen={setIsDrawerOpen} to='/empresa' text='🎯 A Empresa' />
      <NavItem
        setIsDrawerOpen={setIsDrawerOpen}
        to='/tecnologias'
        text='🖥️ Tecnologias Utilizadas'
      />
      <NavItem setIsDrawerOpen={setIsDrawerOpen} to='/personalizacoes' text='⚙️ Personalizações' />
      <NavItem
        setIsDrawerOpen={setIsDrawerOpen}
        to='/novos-relatorios'
        text='📈 Novos Relatórios'
      />
      <NavItem setIsDrawerOpen={setIsDrawerOpen} to='/faq' text='❓ FAQ' />
      <NavItem setIsDrawerOpen={setIsDrawerOpen} to='/contato' text='✉️ Contato' />
    </>
  );
};

export default DrawerItems;
