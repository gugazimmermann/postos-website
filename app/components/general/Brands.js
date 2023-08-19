import Image from 'next/image';

const SingleImage = ({ src, alt }) => {
  return (
    <Image priority src={src} width={0} height={0} className='h-8 sm:h-16 w-auto rounded-lg' alt={alt} />
  );
};

const Brand = () => {
  return (
    <section className='container my-4'>
      <h2 className='mb-4 text-2xl sm:text-3xl font-bold text-slate-800 text-center'>
       Todas as Bandeiras
      </h2>
      <div className='flex flex-row justify-evenly items-center'>
        <SingleImage alt='Petrobras (BR)' src='/images/home/flags/br.png' />
        <SingleImage alt='Ipiranga' src='/images/home/flags/ipiranga.png' />
        <SingleImage alt='Shell' src='/images/home/flags/shell.png' />
        <SingleImage alt='Ale' src='/images/home/flags/ale.png' />
        <SingleImage alt='Raízen' src='/images/home/flags/raizen.png' />
      </div>
    </section>
  );
};

export default Brand;
