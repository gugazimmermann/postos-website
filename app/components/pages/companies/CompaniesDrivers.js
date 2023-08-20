/* eslint-disable @next/next/no-img-element */
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { AppTitle, AppDescription } from '../../general';
import { Title, Paragraph } from '../../general';

const imageUrls = [
  '/images/companies/transactions-open.webp',
  '/images/companies/transactions-graph.webp',
  '/images/companies/transactions-graph2.webp',
];

const CompaniesDrivers = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (src) => {
    setSelectedImage(src);
    setShowModal(true);
  };

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
    <div className='flex flex-col md:flex-row items-center'>
      <div className='w-full mb-8 sm:hidden'>
        <Image
          priority
          src={imageUrls[currentImageIndex]}
          width={0}
          height={0}
          className='w-full rounded-lg shadow-xl'
          alt='organizations'
        />
      </div>
      <div className='w-full md:w-8/12'>
        <Title text='Facilidade para os Motoristas' />
        <Paragraph>
          Você receberá notificações no sistema e por e-mail a cada abastecimento. Além disso, no
          painel de controle, é possível monitorar abastecimentos pendentes de todos os postos,
          evitando surpresas indesejadas. Com relatórios e gráficos disponíveis em várias seções do
          sistema, como &quot;Abastecimentos&quot; ou &quot;Postos&quot;, seu planejamento e
          controle são significativamente aprimorados.
        </Paragraph>
        <Paragraph>
          E não para por aí! Para os motoristas, temos um aplicativo prático onde podem identificar
          postos nos quais estão cadastrados, verificar os combustíveis autorizados para seus
          veículos, os produtos que podem ser faturados e até mesmo encontrar a rota mais próxima
          para o posto.
        </Paragraph>
        <Paragraph>
          Converse com seu posto de confiança, comece a usar o <AppDescription /> e traga sua frota
          para o <AppTitle />.
        </Paragraph>
      </div>
      <div className='hidden w-full sm:flex sm:w-4/12 ml-4'>
        <Image
          onClick={() => handleImageClick(imageUrls[currentImageIndex])}
          priority
          src={imageUrls[currentImageIndex]}
          width={0}
          height={0}
          className='w-full rounded-lg shadow-xl cursor-pointer'
          alt='organizations'
        />
      </div>
      {showModal && (
        <div
          className='fixed inset-0 flex items-center justify-center z-50'
          onClick={() => setShowModal(false)}
        >
          <div className='bg-black bg-opacity-60 absolute inset-0' />
          <img src={selectedImage} alt='Selected' className='z-10' />
        </div>
      )}
    </div>
  );
};

export default CompaniesDrivers;
