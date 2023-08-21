/* eslint-disable @next/next/no-img-element */
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Title, SubTitle, Paragraph, AppTitle, AppDescription } from '../../general';

const imageUrls = ['/images/gas-stations/payments/1.webp', '/images/gas-stations/payments/2.webp'];

const GasStationsPayments = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (imageUrls.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
      }, 15000);

      return () => {
        clearInterval(interval);
      };
    }
  }, []);

  const handleImageClick = (src) => {
    setSelectedImage(src);
    setShowModal(true);
  };

  return (
    <div id='Faturamentos' className='w-full sm:flex sm:items-center sm:justify-between mt-4'>
      <div className='mt-4 sm:mt-0 sm:px-8 w-full'>
        <SubTitle text='Faturamento Eficiente' />
        <Title text='Simplifique Processos e Otimize a Gestão' />
        <div className='w-full flex flex-col sm:flex-row'>
          <div className='w-full sm:w-1/3 mr-4 mt-4 flex justify-center sm:block'>
            <Image
              onClick={() => handleImageClick(imageUrls[currentImageIndex])}
              src={imageUrls[currentImageIndex]}
              width={0}
              height={0}
              className='w-full rounded-xl shadow-lg'
              alt='payments'
            />
          </div>
          <div className='sm:flex-1 mt-8 sm:mt-0'>
            <Paragraph>
              Deixe para trás a desordem de papéis, envelopes acumulados e a constante necessidade
              de contatar clientes! Com o <AppTitle />, ao chegar a data de fechamento, os
              abastecimentos pendentes são automaticamente faturados. Mas a inovação não para por
              aí: para uma gestão ainda mais personalizada, postos podem optar pelo faturamento
              antes da data estipulada e, caso um cliente deseje, ele mesmo tem a liberdade de
              solicitar o faturamento de seus abastecimentos em aberto antecipadamente.
            </Paragraph>
            <Paragraph>
              Os clientes desfrutam de uma visão clara e detalhada de seus abastecimentos e srecebem
              notificações instantâneas em cada etapa, desde o envio do boleto até a confirmação do
              pagamento.
            </Paragraph>
          </div>
        </div>
        <div className='sm:flex-1'>
          <Paragraph>
            Nosso <AppDescription /> oferece total controle sobre datas de vencimento e status de
            pagamentos. Identifique rapidamente pagamentos em aberto ou atrasados e, quando
            necessário, limite o acesso de determinado cliente até a regularização. Para aprofundar
            sua análise, os relatórios e gráficos integrados proporcionam um entendimento mais
            aprofundado, auxiliando em análises acertadas e projeções precisas.
          </Paragraph>
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

export default GasStationsPayments;
