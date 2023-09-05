import Link from 'next/link';
import { Title } from '../../general';

const TopLeftSVG = () => (
  <svg
    width={189}
    height={162}
    viewBox='0 0 189 162'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <ellipse
      cx={16}
      cy='-16.5'
      rx={173}
      ry='178.5'
      transform='rotate(180 16 -16.5)'
      fill='rgba(56, 189, 248, 0.5)'
    />
  </svg>
);

const BottomRightSVG = () => (
  <svg
    width={191}
    height={208}
    viewBox='0 0 191 208'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <ellipse cx={173} cy='178.5' rx={173} ry='178.5' fill='rgba(56, 189, 248, 0.5)' />
  </svg>
);

const FAQ = () => {
  return (
    <section className='container mx-auto'>
      <div className='mt-8 mx-4 sm:mx-0 bg-sky-100 rounded-3xl shadow-xl overflow-hidden'>
        <div className='relative z-10 rounded'>
          <div className='flex flex-col justify-center px-8 pt-4'>
            <Title text='Tire Todas Suas Dúvidas' />
            <div className='flex items-center justify-center py-4'>
            <Link
                href='/faq'
                className='rounded-lg text-center bg-white py-2 px-4 md:py-4 md:px-16 text-slate-800 font-bold text-xl transition hover:bg-opacity-90'
              >
                Perguntas Frequentes
              </Link>
            </div>
          </div>
          <div>
            <span className='absolute top-0 left-0 z-[-1]'>
              <TopLeftSVG />
            </span>
            <span className='absolute bottom-0 right-0 z-[-1]'>
              <BottomRightSVG />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
