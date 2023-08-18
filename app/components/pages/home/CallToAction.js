import Link from 'next/link';

const CallToAction = () => {
  return (
    <section className='container mt-4'>
      <div className='flex flex-col justify-center items-center bg-slate-50 rounded-3xl shadow-xl uppercase p-4 mx-4'>
        <h2 className='text-amber-500 text-center mb-4 text-3xl tracking-tight font-bold'>
          Leve a Modernidade ao Seu Posto!
        </h2>
        <p className='mb-6 text-slate-800 text-center tracking-tight'>
          Saiba mais sobre o {process.env.NEXT_PUBLIC_TITLE} clicando abaixo
        </p>
        <div className='w-full flex flex-col items-center gap-4'>
            <Link
              href='/postos'
              className='flex cursor-pointer text-slate-50 bg-amber-500 px-4 py-2 rounded-lg'
            >
              Para os Postos
            </Link>
            <Link
              href='/clientes'
              className='flex cursor-pointer text-slate-50 bg-sky-500 px-4 py-2 rounded-lg '
            >
              Para os Clientes
            </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
