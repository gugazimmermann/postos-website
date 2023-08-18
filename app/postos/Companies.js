import Image from 'next/image';

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
          <h2 className='text-2xl font-bold text-slate-800 text-center'>
            Liberdade para Postos e Clientes
          </h2>
          <p className='mt-4 text-slate-500'>
            Nosso sistema é construído sobre a base da Liberdade. Um posto pode convidar um cliente
            a se juntar ao <strong>{process.env.NEXT_PUBLIC_TITLE}</strong>. E esse cliente? Bem,
            ele tem a liberdade de usar nosso sistema em diferentes Postos, independentemente de sua
            filiação. Isso significa que o cliente poderá acompanhar seus relatórios de
            abastecimentos, ter seus gráficos, suas métricas de quilometros por litros, etc, de
            maneira fácil e prática.
          </p>
          <p className='mt-4 text-slate-500'>
            E se um cliente já tiver seus veículos e motoristas cadastrados no{' '}
            <strong>{process.env.NEXT_PUBLIC_TITLE}</strong> ele pode rapidamente autorizar os
            mesmos a abastecerem em outros postos que enviarem convite.
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
