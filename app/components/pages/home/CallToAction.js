import Link from 'next/link';

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
      fill='url(#paint0_linear)'
    />
    <defs>
      <linearGradient
        id='paint0_linear'
        x1={-157}
        y1='-107.754'
        x2='98.5011'
        y2='-106.425'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='white' stopOpacity='0.3' />
        <stop offset={1} stopColor='white' stopOpacity='0.1' />
      </linearGradient>
    </defs>
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
    <ellipse cx={173} cy='178.5' rx={173} ry='178.5' fill='url(#paint0_linear)' />
    <defs>
      <linearGradient
        id='paint0_linear'
        x1='-3.27832e-05'
        y1='87.2457'
        x2='255.501'
        y2='88.5747'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='white' stopOpacity='0.3' />
        <stop offset={1} stopColor='white' stopOpacity='0.1' />
      </linearGradient>
    </defs>
  </svg>
);

const CallToAction = () => {
  return (
    <section className='container mx-auto bg-amber-500 mt-8 rounded-3xl shadow-xl'>
      <div className='relative z-10 rounded px-8 p-16'>
        <div className='flex items-center'>
          <div className='w-2/3'>
            <span className='text-xl font-semibold text-slate-50'>
              Saiba mais sobre o {process.env.NEXT_PUBLIC_TITLE}
            </span>
            <h2 className='text-3xl font-bold text-slate-50'>Leve a Modernidade ao Seu Posto!</h2>
          </div>
          <div className='w-1/3'>
            <div className='flex flex-col gap-4'>
              <Link
                href='/postos'
                className='rounded-lg text-center bg-slate-50 py-2 px-4 text-slate-800 font-bold text-xl transition hover:bg-opacity-90'
              >
                Para os Postos
              </Link>
              <Link
                href='/postos'
                className='rounded-lg text-center bg-sky-500 py-2 px-4 text-slate-50 font-bold text-xl transition hover:bg-opacity-90'
              >
                Para os Clientes
              </Link>
            </div>
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
    </section>
  );
};

export default CallToAction;
