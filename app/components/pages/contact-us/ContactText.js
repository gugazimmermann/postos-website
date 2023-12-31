import Social from '../../layout/social/Social';

const Address = () => {
  return (
    <a
      href='https://www.google.com/maps/search/Rua+Benjamin+Franklin+Pereira,+410,+apto+705+-+Itaja%C3%AD+%2F+SC+-+88.304-070/@-26.9040195,-48.6740984,17z/data=!3m1!4b1?entry=ttu'
      target='_blank'
      rel='noopener noreferrer'
      className='flex items-start'
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='w-10 h-10 text-amber-500'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
        strokeWidth='2'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
        />
        <path strokeLinecap='round' strokeLinejoin='round' d='M15 11a3 3 0 11-6 0 3 3 0 016 0z' />
      </svg>

      <span className='mx-2 text-slate-600 text-left'>
        Rua Benjamin Franklin Pereira, 410, apto 705 - Itajaí / SC - 88.304-070
      </span>
    </a>
  );
};

const Phone = () => {
  return (
    <a href='tel:+5547997014984' className='flex items-start'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='w-6 h-6 text-amber-500'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
        strokeWidth='2'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
        />
      </svg>

      <span className='mx-2 text-slate-600'>(47) 99701-4984</span>
    </a>
  );
};

const Email = () => {
  return (
    <a href='mailto:contato@touchsistemas.com.br' className='flex items-start'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='w-6 h-6 text-amber-500'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
        strokeWidth='2'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
        />
      </svg>
      <span className='mx-2 text-slate-600'>contato@touchsistemas.com.br</span>
    </a>
  );
};

const ContactText = () => {
  return (
    <div className='flex flex-col justify-center text-center md:text-left gap-4 w-full md:w-1/3'>
      <h1 className='text-3xl font-bold text-slate-800'>Contato</h1>
      <Address />
      <Phone />
      <Email />
      <Social />
    </div>
  );
};

export default ContactText;
