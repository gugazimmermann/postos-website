/* eslint-disable @next/next/no-img-element */
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Title, SubTitle, Paragraph, AppTitle } from '../../general';

const Dots = () => {
  return (
    <span className='absolute -right-7 -bottom-7 z-[-1]'>
      <svg
        width={134}
        height={106}
        viewBox='0 0 134 106'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <circle
          cx='1.66667'
          cy={104}
          r='1.66667'
          transform='rotate(-90 1.66667 104)'
          fill='#f59e0b'
        />
        <circle
          cx='16.3333'
          cy={104}
          r='1.66667'
          transform='rotate(-90 16.3333 104)'
          fill='#f59e0b'
        />
        <circle cx={31} cy={104} r='1.66667' transform='rotate(-90 31 104)' fill='#f59e0b' />
        <circle
          cx='45.6667'
          cy={104}
          r='1.66667'
          transform='rotate(-90 45.6667 104)'
          fill='#f59e0b'
        />
        <circle
          cx='60.3334'
          cy={104}
          r='1.66667'
          transform='rotate(-90 60.3334 104)'
          fill='#f59e0b'
        />
        <circle
          cx='88.6667'
          cy={104}
          r='1.66667'
          transform='rotate(-90 88.6667 104)'
          fill='#f59e0b'
        />
        <circle
          cx='117.667'
          cy={104}
          r='1.66667'
          transform='rotate(-90 117.667 104)'
          fill='#f59e0b'
        />
        <circle
          cx='74.6667'
          cy={104}
          r='1.66667'
          transform='rotate(-90 74.6667 104)'
          fill='#f59e0b'
        />
        <circle cx={103} cy={104} r='1.66667' transform='rotate(-90 103 104)' fill='#f59e0b' />
        <circle cx={132} cy={104} r='1.66667' transform='rotate(-90 132 104)' fill='#f59e0b' />
        <circle
          cx='1.66667'
          cy='89.3333'
          r='1.66667'
          transform='rotate(-90 1.66667 89.3333)'
          fill='#f59e0b'
        />
        <circle
          cx='16.3333'
          cy='89.3333'
          r='1.66667'
          transform='rotate(-90 16.3333 89.3333)'
          fill='#f59e0b'
        />
        <circle
          cx={31}
          cy='89.3333'
          r='1.66667'
          transform='rotate(-90 31 89.3333)'
          fill='#f59e0b'
        />
        <circle
          cx='45.6667'
          cy='89.3333'
          r='1.66667'
          transform='rotate(-90 45.6667 89.3333)'
          fill='#f59e0b'
        />
        <circle
          cx='60.3333'
          cy='89.3338'
          r='1.66667'
          transform='rotate(-90 60.3333 89.3338)'
          fill='#f59e0b'
        />
        <circle
          cx='88.6667'
          cy='89.3338'
          r='1.66667'
          transform='rotate(-90 88.6667 89.3338)'
          fill='#f59e0b'
        />
        <circle
          cx='117.667'
          cy='89.3338'
          r='1.66667'
          transform='rotate(-90 117.667 89.3338)'
          fill='#f59e0b'
        />
        <circle
          cx='74.6667'
          cy='89.3338'
          r='1.66667'
          transform='rotate(-90 74.6667 89.3338)'
          fill='#f59e0b'
        />
        <circle
          cx={103}
          cy='89.3338'
          r='1.66667'
          transform='rotate(-90 103 89.3338)'
          fill='#f59e0b'
        />
        <circle
          cx={132}
          cy='89.3338'
          r='1.66667'
          transform='rotate(-90 132 89.3338)'
          fill='#f59e0b'
        />
        <circle
          cx='1.66667'
          cy='74.6673'
          r='1.66667'
          transform='rotate(-90 1.66667 74.6673)'
          fill='#f59e0b'
        />
        <circle
          cx='1.66667'
          cy='31.0003'
          r='1.66667'
          transform='rotate(-90 1.66667 31.0003)'
          fill='#f59e0b'
        />
        <circle
          cx='16.3333'
          cy='74.6668'
          r='1.66667'
          transform='rotate(-90 16.3333 74.6668)'
          fill='#f59e0b'
        />
        <circle
          cx='16.3333'
          cy='31.0003'
          r='1.66667'
          transform='rotate(-90 16.3333 31.0003)'
          fill='#f59e0b'
        />
        <circle
          cx={31}
          cy='74.6668'
          r='1.66667'
          transform='rotate(-90 31 74.6668)'
          fill='#f59e0b'
        />
        <circle
          cx={31}
          cy='31.0003'
          r='1.66667'
          transform='rotate(-90 31 31.0003)'
          fill='#f59e0b'
        />
        <circle
          cx='45.6667'
          cy='74.6668'
          r='1.66667'
          transform='rotate(-90 45.6667 74.6668)'
          fill='#f59e0b'
        />
        <circle
          cx='45.6667'
          cy='31.0003'
          r='1.66667'
          transform='rotate(-90 45.6667 31.0003)'
          fill='#f59e0b'
        />
        <circle
          cx='60.3333'
          cy='74.6668'
          r='1.66667'
          transform='rotate(-90 60.3333 74.6668)'
          fill='#f59e0b'
        />
        <circle
          cx='60.3333'
          cy='30.9998'
          r='1.66667'
          transform='rotate(-90 60.3333 30.9998)'
          fill='#f59e0b'
        />
        <circle
          cx='88.6667'
          cy='74.6668'
          r='1.66667'
          transform='rotate(-90 88.6667 74.6668)'
          fill='#f59e0b'
        />
        <circle
          cx='88.6667'
          cy='30.9998'
          r='1.66667'
          transform='rotate(-90 88.6667 30.9998)'
          fill='#f59e0b'
        />
        <circle
          cx='117.667'
          cy='74.6668'
          r='1.66667'
          transform='rotate(-90 117.667 74.6668)'
          fill='#f59e0b'
        />
        <circle
          cx='117.667'
          cy='30.9998'
          r='1.66667'
          transform='rotate(-90 117.667 30.9998)'
          fill='#f59e0b'
        />
        <circle
          cx='74.6667'
          cy='74.6668'
          r='1.66667'
          transform='rotate(-90 74.6667 74.6668)'
          fill='#f59e0b'
        />
        <circle
          cx='74.6667'
          cy='30.9998'
          r='1.66667'
          transform='rotate(-90 74.6667 30.9998)'
          fill='#f59e0b'
        />
        <circle
          cx={103}
          cy='74.6668'
          r='1.66667'
          transform='rotate(-90 103 74.6668)'
          fill='#f59e0b'
        />
        <circle
          cx={103}
          cy='30.9998'
          r='1.66667'
          transform='rotate(-90 103 30.9998)'
          fill='#f59e0b'
        />
        <circle
          cx={132}
          cy='74.6668'
          r='1.66667'
          transform='rotate(-90 132 74.6668)'
          fill='#f59e0b'
        />
        <circle
          cx={132}
          cy='30.9998'
          r='1.66667'
          transform='rotate(-90 132 30.9998)'
          fill='#f59e0b'
        />
        <circle
          cx='1.66667'
          cy='60.0003'
          r='1.66667'
          transform='rotate(-90 1.66667 60.0003)'
          fill='#f59e0b'
        />
        <circle
          cx='1.66667'
          cy='16.3333'
          r='1.66667'
          transform='rotate(-90 1.66667 16.3333)'
          fill='#f59e0b'
        />
        <circle
          cx='16.3333'
          cy='60.0003'
          r='1.66667'
          transform='rotate(-90 16.3333 60.0003)'
          fill='#f59e0b'
        />
        <circle
          cx='16.3333'
          cy='16.3333'
          r='1.66667'
          transform='rotate(-90 16.3333 16.3333)'
          fill='#f59e0b'
        />
        <circle
          cx={31}
          cy='60.0003'
          r='1.66667'
          transform='rotate(-90 31 60.0003)'
          fill='#f59e0b'
        />
        <circle
          cx={31}
          cy='16.3333'
          r='1.66667'
          transform='rotate(-90 31 16.3333)'
          fill='#f59e0b'
        />
        <circle
          cx='45.6667'
          cy='60.0003'
          r='1.66667'
          transform='rotate(-90 45.6667 60.0003)'
          fill='#f59e0b'
        />
        <circle
          cx='45.6667'
          cy='16.3333'
          r='1.66667'
          transform='rotate(-90 45.6667 16.3333)'
          fill='#f59e0b'
        />
        <circle
          cx='60.3333'
          cy='60.0003'
          r='1.66667'
          transform='rotate(-90 60.3333 60.0003)'
          fill='#f59e0b'
        />
        <circle
          cx='60.3333'
          cy='16.3333'
          r='1.66667'
          transform='rotate(-90 60.3333 16.3333)'
          fill='#f59e0b'
        />
        <circle
          cx='88.6667'
          cy='60.0003'
          r='1.66667'
          transform='rotate(-90 88.6667 60.0003)'
          fill='#f59e0b'
        />
        <circle
          cx='88.6667'
          cy='16.3333'
          r='1.66667'
          transform='rotate(-90 88.6667 16.3333)'
          fill='#f59e0b'
        />
        <circle
          cx='117.667'
          cy='60.0003'
          r='1.66667'
          transform='rotate(-90 117.667 60.0003)'
          fill='#f59e0b'
        />
        <circle
          cx='117.667'
          cy='16.3333'
          r='1.66667'
          transform='rotate(-90 117.667 16.3333)'
          fill='#f59e0b'
        />
        <circle
          cx='74.6667'
          cy='60.0003'
          r='1.66667'
          transform='rotate(-90 74.6667 60.0003)'
          fill='#f59e0b'
        />
        <circle
          cx='74.6667'
          cy='16.3333'
          r='1.66667'
          transform='rotate(-90 74.6667 16.3333)'
          fill='#f59e0b'
        />
        <circle
          cx={103}
          cy='60.0003'
          r='1.66667'
          transform='rotate(-90 103 60.0003)'
          fill='#f59e0b'
        />
        <circle
          cx={103}
          cy='16.3333'
          r='1.66667'
          transform='rotate(-90 103 16.3333)'
          fill='#f59e0b'
        />
        <circle
          cx={132}
          cy='60.0003'
          r='1.66667'
          transform='rotate(-90 132 60.0003)'
          fill='#f59e0b'
        />
        <circle
          cx={132}
          cy='16.3333'
          r='1.66667'
          transform='rotate(-90 132 16.3333)'
          fill='#f59e0b'
        />
        <circle
          cx='1.66667'
          cy='45.3333'
          r='1.66667'
          transform='rotate(-90 1.66667 45.3333)'
          fill='#f59e0b'
        />
        <circle
          cx='1.66667'
          cy='1.66683'
          r='1.66667'
          transform='rotate(-90 1.66667 1.66683)'
          fill='#f59e0b'
        />
        <circle
          cx='16.3333'
          cy='45.3333'
          r='1.66667'
          transform='rotate(-90 16.3333 45.3333)'
          fill='#f59e0b'
        />
        <circle
          cx='16.3333'
          cy='1.66683'
          r='1.66667'
          transform='rotate(-90 16.3333 1.66683)'
          fill='#f59e0b'
        />
        <circle
          cx={31}
          cy='45.3333'
          r='1.66667'
          transform='rotate(-90 31 45.3333)'
          fill='#f59e0b'
        />
        <circle
          cx={31}
          cy='1.66683'
          r='1.66667'
          transform='rotate(-90 31 1.66683)'
          fill='#f59e0b'
        />
        <circle
          cx='45.6667'
          cy='45.3333'
          r='1.66667'
          transform='rotate(-90 45.6667 45.3333)'
          fill='#f59e0b'
        />
        <circle
          cx='45.6667'
          cy='1.66683'
          r='1.66667'
          transform='rotate(-90 45.6667 1.66683)'
          fill='#f59e0b'
        />
        <circle
          cx='60.3333'
          cy='45.3338'
          r='1.66667'
          transform='rotate(-90 60.3333 45.3338)'
          fill='#f59e0b'
        />
        <circle
          cx='60.3333'
          cy='1.66683'
          r='1.66667'
          transform='rotate(-90 60.3333 1.66683)'
          fill='#f59e0b'
        />
        <circle
          cx='88.6667'
          cy='45.3338'
          r='1.66667'
          transform='rotate(-90 88.6667 45.3338)'
          fill='#f59e0b'
        />
        <circle
          cx='88.6667'
          cy='1.66683'
          r='1.66667'
          transform='rotate(-90 88.6667 1.66683)'
          fill='#f59e0b'
        />
        <circle
          cx='117.667'
          cy='45.3338'
          r='1.66667'
          transform='rotate(-90 117.667 45.3338)'
          fill='#f59e0b'
        />
        <circle
          cx='117.667'
          cy='1.66683'
          r='1.66667'
          transform='rotate(-90 117.667 1.66683)'
          fill='#f59e0b'
        />
        <circle
          cx='74.6667'
          cy='45.3338'
          r='1.66667'
          transform='rotate(-90 74.6667 45.3338)'
          fill='#f59e0b'
        />
        <circle
          cx='74.6667'
          cy='1.66683'
          r='1.66667'
          transform='rotate(-90 74.6667 1.66683)'
          fill='#f59e0b'
        />
        <circle
          cx={103}
          cy='45.3338'
          r='1.66667'
          transform='rotate(-90 103 45.3338)'
          fill='#f59e0b'
        />
        <circle
          cx={103}
          cy='1.66683'
          r='1.66667'
          transform='rotate(-90 103 1.66683)'
          fill='#f59e0b'
        />
        <circle
          cx={132}
          cy='45.3338'
          r='1.66667'
          transform='rotate(-90 132 45.3338)'
          fill='#f59e0b'
        />
        <circle
          cx={132}
          cy='1.66683'
          r='1.66667'
          transform='rotate(-90 132 1.66683)'
          fill='#f59e0b'
        />
      </svg>
    </span>
  );
};

const GasStationsDashBoards = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (src) => {
    setSelectedImage(src);
    setShowModal(true);
  };

  return (
    <div id='RelatorioGraficos' className='w-full sm:flex sm:items-center sm:justify-between mt-8'>
      <div className='px-8 w-full'>
        <div className='flex items-center -mx-3 sm:-mx-4'>
          <div className='w-full sm:px-2 flex flex-col gap-8'>
            <Image
              onClick={() => handleImageClick('/images/gas-stations/dashboard/2.webp')}
              src='/images/gas-stations/dashboard/2.webp'
              width={0}
              height={0}
              className='w-full sm:py-2 cursor-pointer'
              alt='gas-stations'
            />
            <Image
              onClick={() => handleImageClick('/images/gas-stations/dashboard/3.webp')}
              src='/images/gas-stations/dashboard/3.webp'
              width={0}
              height={0}
              className='w-full sm:py-2 cursor-pointer'
              alt='payments'
            />
          </div>
          <div className='w-full px-2'>
            <div className='relative z-10'>
              <Image
                onClick={() => handleImageClick('/images/gas-stations/dashboard/1.webp')}
                src='/images/gas-stations/dashboard/1.webp'
                width={0}
                height={0}
                className='w-full  cursor-pointer'
                alt='transactions'
              />
              <Dots />
            </div>
          </div>
        </div>
      </div>
      <div className='mt-4 sm:mt-0 sm:px-8 w-full'>
        <SubTitle text='Dashboard' />
        <Title text='Relatórios e Gráficos' />
        <Paragraph>
          Ao acessar o <AppTitle />, nosso <span className='font-semibold'>Dashboard</span>,
          consolidado ou por posto, oferece uma visão panorâmica de todas as suas operações ativas.
          Você visualiza de imediato operações pendentes, como confirmações de agendamentos e envios
          de boletos, além de acessar rapidamente novos cadastros de clientes, detectar clientes
          inativos e obter insights outros valiosos.
        </Paragraph>
        <Paragraph>
          Nossos <span className='font-semibold'>Relatórios e Gráficos</span>, disponíveis de forma
          consolidada ou detalhada por posto, é essencial para análises mais profundas. Você pode
          gerar dados sobre abastecimentos, pagamentos, clientes e muito mais. Os relatórios podem
          ser visualizados na plataforma ou exportados para PDF ou CSV, permitindo uma fácil
          integração com o Excel e adaptando-se ao seu modo de trabalho.
        </Paragraph>
      </div>
      {showModal && (
        <div
          className='fixed inset-0 flex items-center justify-center z-50 overflow-y-auto'
          onClick={() => setShowModal(false)}
        >
          <div className='bg-black bg-opacity-60 absolute inset-0' />
          <div className='relative z-10 max-h-[90vh] overflow-y-auto'>
            <img src={selectedImage} alt='Selected' className='rounded-3xl mx-auto' />
          </div>
        </div>
      )}
    </div>
  );
};

export default GasStationsDashBoards;
