import Image from 'next/image';
import Link from 'next/link';

const CallToAction = () => {
  return (
    <section className='container flex flex-col bg-slate-50 rounded-3xl shadow-lg'>
      <div className='py-8 px-4 flex flex-col justify-center items-center uppercase'>
        <h2 className='text-amber-500 text-center mb-4 text-3xl tracking-tight font-extrabold leading-tight'>
          Leve a Modernidade ao Seu Posto!
        </h2>
        <p className='mb-6 text-slate-800 text-center'>
          Faça sua conta no {process.env.NEXT_PUBLIC_TITLE} Gratuitamente.
        </p>
        <Link
          href='/cadastro'
          className='flex cursor-pointer text-slate-50 bg-amber-500 px-4 py-2 rounded '
        >
          Cadastro
        </Link>
      </div>
      <Image
        src='/images/abastecimento.png'
        width={0}
        height={0}
        className='w-full rounded-b-3xl'
        alt='CallToAction'
      />
      <h3 className=''></h3>
    </section>
  );
};

export default CallToAction;
