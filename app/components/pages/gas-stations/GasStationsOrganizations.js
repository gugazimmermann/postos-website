/* eslint-disable @next/next/no-img-element */
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { CheckMark } from '../../icons';
import { AppTitle, Paragraph, Title } from '../../general';

const GasStationsOrganizations = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (src) => {
    setSelectedImage(src);
    setShowModal(true);
  };

  return (
    <div id='Centralizacao' className='md:flex sm:mt-8'>
      <div className='md:w-5/12'>
        <div className='md:flex md:py-6'>
          <Image
            priority
            onClick={() => handleImageClick('/images/gas-stations/organizations/3.webp')}
            src='/images/gas-stations/organizations/3.webp'
            width={0}
            height={0}
            className='z-[10] w-full h-full rounded-lg shadow-xl mb-4 md:mb-0 md:shadow-2xl md:ml-6 mt-6 cursor-pointer'
            alt='organizations'
          />
        </div>
      </div>
      <div className='md:w-7/12'>
        <div className='flex items-center rounded-lg bg-amber-500 p-2 md:p-6 text-white text-left'>
          <div className='md:pl-6'>
            <Title text='Centralização e Controle' white={true} />
            <Paragraph white={true}>
              Seja um empreendedor com um único posto ou o gestor de uma ampla rede de postos de
              combustíveis, o <AppTitle inverted={true} /> foi desenhado pensando em você. Em nossa
              plataforma, centralizar a gestão de múltiplos postos torna-se uma tarefa
              descomplicada.
            </Paragraph>
            <Paragraph white={true}>
              Além da simples gestão de postos, entendemos a dinâmica e interação entre postos e
              seus clientes. Nossa plataforma permite que cada posto gerencie uma extensa lista de
              clientes, promovendo a possibilidade de compartilhá-los com outros postos da rede. E
              cada um desses clientes tem a liberdade de registrar e administrar múltiplos veículos
              e motoristas associados.
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
        <div className='mt-4 grid grid-cols-2 gap-4 justify-center items-center'>
          <Image
            priority
            onClick={() => handleImageClick('/images/gas-stations/organizations/1.webp')}
            src='/images/gas-stations/organizations/1.webp'
            width={0}
            height={0}
            className='w-full rounded-lg shadow-xl cursor-pointer'
            alt='organizations'
          />
          <Image
            priority
            onClick={() => handleImageClick('/images/gas-stations/organizations/2.webp')}
            src='/images/gas-stations/organizations/2.webp'
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

export default GasStationsOrganizations;
