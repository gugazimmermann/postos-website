import Link from 'next/link';
import Image from 'next/image';

const Techs = () => {
  return (
    <section className='container mx-auto'>
      <div className='mx-4 sm:mx-0 mt-8 py-4 bg-white rounded-3xl shadow-xl'>
        <h2 className='px-2 text-center text-3xl font-bold text-slate-800'>
          Explore as tecnologias que impulsionam nossas soluções
        </h2>
        <Link
          href='/tecnologias'
          className='flex flex-row flex-wrap gap-2 justify-evenly items-center my-4 px-4'
        >
          <Image
            src='/images/technologies/aws2.webp'
            width={0}
            height={0}
            className='w-auto h-8 sm:h-10 rounded-lg'
            alt='Amazon Web Services'
          />
          <Image
            src='/images/technologies/cicd.webp'
            width={0}
            height={0}
            className='w-auto h-8 sm:h-10 rounded-lg'
            alt='CI/CD'
          />
          <Image
            src='/images/technologies/react2.webp'
            width={0}
            height={0}
            className='w-auto h-8 sm:h-10 rounded-lg'
            alt='React'
          />
          <Image
            src='/images/technologies/node.webp'
            width={0}
            height={0}
            className='w-auto h-8 sm:h-10 rounded-lg'
            alt='Node'
          />
          <Image
            src='/images/technologies/flutter.webp'
            width={0}
            height={0}
            className='w-auto h-8 sm:h-10 rounded-lg'
            alt='Flutter'
          />
          <Image
            src='/images/technologies/nextjs.webp'
            width={0}
            height={0}
            className='w-auto h-8 sm:h-10 rounded-lg'
            alt='NextJS'
          />
          <Image
            src='/images/technologies/electron.webp'
            width={0}
            height={0}
            className='w-auto h-8 sm:h-10 rounded-lg'
            alt='Electron'
          />
          <Image
            src='/images/technologies/go.webp'
            width={0}
            height={0}
            className='w-auto h-8 sm:h-10 rounded-lg'
            alt='Go'
          />
        </Link>
      </div>
    </section>
  );
};

export default Techs;
