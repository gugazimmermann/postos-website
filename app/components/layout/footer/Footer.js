import Link from 'next/link';
import Logo from '../logo/Logo';
import Social from '../social/Social';

const MainCol = () => {
  return (
    <div className='w-full'>
      <div className='flex flex-col md:flex-row justify-between items-center p-4'>
        <Logo />
        <p className='text-slate-500 font-semibold mt-2 text-center md:text-right md:mt-0'>
          Sistema para Gerenciamento de Frotas para Postos de Combustíveis
        </p>
      </div>
      <hr className='border-slate-300' />
    </div>
  );
};

const ColumnTitle = ({ title }) => (
  <h3 className='text-gray-800 text-sm uppercase font-bold'>{title}</h3>
);

const Column = ({ title, items }) => {
  return (
    <div>
      <ColumnTitle title={title} />
      {items.map((item) => (
        <Link
          key={item.name}
          href={item.link}
          className='block mt-2 text-sm text-gray-500 hover:underline hover:cursor-pointer'
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
};

const ContactColumn = () => {
  return (
    <div>
      <ColumnTitle title='Contato' />
      <a
        href='https://wa.me/5547988704247'
        className='block mt-2 text-sm text-gray-500 hover:underline hover:cursor-pointer'
      >
        WhatsApp
      </a>
      <a href='tel:+5547988704247' className='block mt-2 text-sm text-gray-500'>
        (47) 98870-4247
      </a>
      <a
        href='mailto:contato@touchsistemas.com.br'
        className='block mt-2 text-sm text-gray-500 hover:underline hover:cursor-pointer'
      >
        contato@touchsistemas.com.br
      </a>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className='bg-slate-50 mt-8 px-4'>
      <div className='container mx-auto mb-4'>
        <MainCol />
        <div className='grid grid-cols-2 md:grid-cols-5 place-content-around text-center gap-4 mt-4'>
          <Column
            title='Sobre Nós'
            items={[
              {
                name: 'A Empresa',
                link: '/empresa',
              },
              {
                name: 'Tecnologias Utilizadas',
                link: '/tecnologias',
              },
              {
                name: 'Trabalhe Conosco',
                link: '/vagas',
              },
            ]}
          />
          <Column
            title='O Sistema'
            items={[
              {
                name: 'Personalizações',
                link: '/personalizacoes',
              },
              {
                name: 'Novos Relatórios',
                link: '/novos-relatorios',
              },
            ]}
          />
          <Column
            title='Ajuda'
            items={[
              {
                name: 'FAQ',
                link: '/faq',
              },
              {
                name: 'Contato',
                link: '/contato',
              },
            ]}
          />
          <Column
            title='Informações'
            items={[
              {
                name: 'Termos de Uso',
                link: '/termos-de-uso',
              },
              {
                name: 'Privacidade',
                link: '/privacidade',
              },
            ]}
          />
          <ContactColumn />
        </div>
        <Social className='mt-6' />
      </div>
    </footer>
  );
};

export default Footer;
