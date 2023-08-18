import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <section className='container flex flex-col items-center px-6 py-12 mx-auto'>
      <Image
        src='/images/not-found/not-found.svg'
        width={0}
        height={0}
        className='w-1/2'
        alt='not found'
      />
      <h1 className='mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl'>
        Página Não Encontrada
      </h1>
      <p className='mt-4 text-gray-500 dark:text-gray-400'>
        A Página que você está procurando não existe.
      </p>
      <Link
        href='/'
        className='flex cursor-pointer text-slate-50 bg-amber-500 mt-4 px-4 py-2 rounded-lg '
      >
        Voltar para o Início
      </Link>
    </section>
  );
}
