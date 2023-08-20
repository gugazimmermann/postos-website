'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { CheckMark } from '../../icons';
import { AppTitle, Paragraph, Title } from '../../general';

const imageUrls = [
  '/images/gas-stations/organizations/1.webp',
  '/images/gas-stations/organizations/2a.webp',
  '/images/gas-stations/organizations/2b.webp',
  '/images/gas-stations/organizations/2c.webp',
  '/images/gas-stations/organizations/3.webp',
  '/images/gas-stations/organizations/4.webp',
];

const GasStationsOrganizations = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (imageUrls.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
      }, 8000);

      return () => {
        clearInterval(interval);
      };
    }
  }, []);

  return (
    <div id='CentralizacaodePostos' className='md:flex sm:my-8'>
      <div className='md:w-5/12'>
        <div className='md:flex md:py-12'>
          <Image
            priority
            src={imageUrls[currentImageIndex]}
            width={0}
            height={0}
            className='z-[10] w-full rounded-lg shadow-xl mb-4 md:mb-0 md:shadow-2xl md:ml-12'
            alt='organizations'
          />
        </div>
      </div>
      <div className='md:w-7/12'>
        <div className='flex h-full items-center rounded-lg bg-amber-500 p-2 md:p-6 text-white text-left'>
          <div className='md:pl-12'>
            <Title text='Centralização e Controle Múltiplo' white={true} />
            <Paragraph white={true}>
              Seja você um dono de um posto individual ou de uma vasta Rede de Postos de
              Combustíveis, o <AppTitle inverted={true} /> está pronto para atendê-lo. Aqui, a
              Organização pode registrar e gerir múltiplos Postos de Combustíveis com facilidade. E
              não paramos por aí - cada posto pode ter inúmeros clientes e compartilhar os clientes.
              E, por sua vez, esses clientes podem ter vários veículos e motoristas associados.
            </Paragraph>
            <div className='flex flex-col md:flex-row gap-4 md:gap-0 justify-around'>
              <div className='flex items-center font-bold'>
                <CheckMark />
                Controle Centralizado
              </div>
              <div className='flex items-center font-bold'>
                <CheckMark />
                Relatórios Consolidados
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GasStationsOrganizations;
