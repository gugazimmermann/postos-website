'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { CheckMark } from '../../icons';
import { AppTitle } from '../../general';

const imageUrls = [
  '/images/gas-stations/1.webp',
  '/images/gas-stations/2.webp',
  '/images/gas-stations/3.webp',
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
    <div id="CentralizacaodePostos" className='md:flex my-8'>
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
        <div className='flex h-full items-center rounded-lg bg-amber-600 p-2 md:p-6 text-white text-left'>
          <div className='md:pl-12'>
            <h2 className='mb-8 text-2xl text-center font-bold'>
              Centralização e Controle Múltiplo
            </h2>
            <p>
              Seja você um dono de um posto individual ou de uma vasta rede de Postos de
              Combustíveis, o <AppTitle inverted={true} /> está pronto para atendê-lo. Aqui, a
              Organização pode registrar e gerir múltiplos Postos de Combustíveis com facilidade. E
              não paramos por aí - cada posto pode ter inúmeros clientes. E, por sua vez, esses
              clientes podem ter vários veículos e motoristas associados.
            </p>
            <div className='m-8 flex flex-col md:flex-row gap-4 md:gap-0 justify-around'>
              <div className='flex items-center'>
                <CheckMark />
                Controle Centralizado
              </div>
              <div className='flex items-center'>
                <CheckMark />
                Relatórios Consolidados
              </div>
            </div>
            <p>
              Cadastrando um Posto, você pode controlar os tipos de Assinatura, os Combustíveis, as
              Configurações padrão de cadastro de cliente, os Produtos disponíveis, os Serviços, e
              muito mais.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GasStationsOrganizations;
