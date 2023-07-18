import Link from 'next/link';

const NavItems = () => {
  const NavItem = ({ to, text }) => (
    <Link
      href={to}
      className='flex cursor-pointer text-slate-800 hover:text-amber-500 hover:font-bold transition-colors duration-300'
    >
      {text}
    </Link>
  );

  return (
    <>
      <NavItem to='/postos' text='Para os Postos' />
      <NavItem to='/clientes' text='Para os Clientes' />
    </>
  );
};

export default NavItems;
