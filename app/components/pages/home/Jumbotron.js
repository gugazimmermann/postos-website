import Image from 'next/image';

const Jumbotron = () => {
  return (
    <div className='bg-amber-300 lg:bg-transparent mx-auto px-4 mt-4 lg:mt-8 lg:px-0 lg:max-w-5xl xl:max-w-7xl xl:px-32'>
      <div className='pt-28 pb-4 lg:pt-0 lg:pb-0'>
      <div className='grid items-center lg:grid-cols-2'>
        <div className='px-6 py-12 lg:px-12 lg:-mr-14 block rounded-3xl shadow-xl bg-[hsla(0,0%,100%,0.55)] backdrop-blur-[30px]'>
          <h2 className='text-3xl lg:text-5xl font-bold text-center text-slate-800'>
            Sistema para Gerenciamento de{' '}
            <span className='text-4xl lg:text-6xl text-slate-950'>Frotas</span> para Postos de
            Combustível
          </h2>
        </div>
        <Image
          src='/images/home/jumbotron.webp'
          width={0}
          height={0}
          className='mt-4 lg:mt-0 w-full rounded-xl shadow'
          alt='Jumbotron'
        />
      </div>
      </div>
    </div>
  );
};

export default Jumbotron;
