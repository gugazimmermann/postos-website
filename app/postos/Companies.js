import Image from 'next/image';
import { AppTitle } from '../components/general';

const Companies = () => {
  return (
    <section>
      <div className='flex flex-col md:flex-row items-center'>
        <div className='w-full mb-4 md:hidden md:w-4/12'>
          <Image
            src='/images/gas-stations/gasstation1.svg'
            width={0}
            height={0}
            className='w-full'
            alt='companies'
          />
        </div>
        <div className='w-full md:w-8/12'>
          <h2 className='text-4xl font-bold text-slate-800 text-center'>
            Liberdade para o Clientes
          </h2>
          <p className='mt-4 text-slate-600'>
            Nosso sistema é construído com base na liberdade. Um posto pode convidar um cliente a se
            juntar ao <AppTitle />. E o cliente? Bem, ele tem a liberdade de usar nosso sistema em
            diferentes postos, isso significa que o cliente poderá acompanhar seus relatórios de
            abastecimentos, ter seus gráficos, suas métricas de quilometros por litros, etc, tudo
            centralizado, de maneira fácil e prática.
          </p>
          <p className='mt-4 text-slate-600'>
            E se um cliente já tiver seus veículos e motoristas cadastrados no <AppTitle /> ele pode
            rapidamente autorizar os mesmos a abastecerem em outros postos que enviarem convite.
          </p>
        </div>
        <div className='hidden md:flex md:w-4/12'>
          <Image
            src='/images/gas-stations/gasstation1.svg'
            width={0}
            height={0}
            className='w-full'
            alt='companies'
          />
        </div>
      </div>
    </section>
  );
};

export default Companies;
