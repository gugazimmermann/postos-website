/* eslint-disable @next/next/no-img-element */
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { AppTitle, AppDescription } from '../../general';
import { Title, Paragraph } from '../../general';

const CompaniesReports = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (src) => {
    setSelectedImage(src);
    setShowModal(true);
  };

  return (
    <div className='w-full mt-4 md:mt-16'>
      <Title text='Visão Completa' />
      <div className='block md:flex gap-4'>
        <div className='w-full md:w-3/4'>
          <Paragraph>
            No Dashboard, monitorize abastecimentos pendentes de todos os postos, evite surpresas e
            faça o acompanhamento de faturamentos. Relatórios e gráficos, disponíveis em seções
            distintas do sistema, potencializam seu planejamento e controle. Adicionalmente, é
            possível solicitar faturamentos, acompanhar os recebimentos de boletos, confirmações
            pagamentos e agendar serviços, entre outras funções.
          </Paragraph>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4 justify-center items-center'>
            <Image
              priority
              onClick={() => handleImageClick('/images/companies/5.webp')}
              src='/images/companies/5.webp'
              width={0}
              height={0}
              className='w-full rounded-lg shadow-xl cursor-pointer'
              alt='organizations'
            />
            <Image
              priority
              onClick={() => handleImageClick('/images/companies/6.webp')}
              src='/images/companies/6.webp'
              width={0}
              height={0}
              className='w-full rounded-lg shadow-xl cursor-pointer'
              alt='organizations'
            />
            <Image
              priority
              onClick={() => handleImageClick('/images/companies/7.webp')}
              src='/images/companies/7.webp'
              width={0}
              height={0}
              className='w-full rounded-lg shadow-xl cursor-pointer'
              alt='organizations'
            />
          </div>
        </div>
        <div className='w-full md:w-1/4'>
          <Image
            priority
            onClick={() => handleImageClick('/images/companies/4.webp')}
            src='/images/companies/4.webp'
            width={0}
            height={0}
            className='w-full rounded-lg shadow-xl cursor-pointer'
            alt='organizations'
          />
        </div>
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

export default CompaniesReports;
