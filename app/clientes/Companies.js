/* eslint-disable @next/next/no-img-element */
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { AppTitle, AppDescription } from '../components/general';

const imageUrls = [
  '/images/companies/transactions-open.webp',
  '/images/companies/transactions-graph.webp',
  '/images/companies/transactions-graph2.webp',
];

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

const Title = ({ text }) => {
  return <h2 className='mb-4 text-3xl font-bold text-slate-800 text-center'>{text}</h2>;
};

const SubTitle = ({ text }) => {
  return <h2 className='text-2xl font-bold text-slate-800 text-center'>{text}</h2>;
};

const Paragraph = ({ children }) => {
  return <p className='mb-4 text-slate-600 leading-relaxed'>{children}</p>;
};

const Companies = () => {
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
    <>
      <div className='flex flex-col md:flex-row items-center mt-4'>
        <div className='w-full mb-4 md:hidden md:w-4/12'>
          <Image
            src='/images/gas-stations/gasstation1.svg'
            width={0}
            height={0}
            className='w-full'
            alt='companies'
          />
        </div>
        <div className='w-full md:w-8/12 '>
          <Title text='Liberdade para o Clientes' />
          <Paragraph>
            O <AppTitle /> foi desenvolvido tendo em mente a liberdade. Um posto parceiro pode
            convidá-lo para aderir ao sistema. Ao aceitar o convite, se você ainda não tiver um
            cadastro, pode realizá-lo de forma rápida e simples. Caso já possua cadastro, basta
            aceitar o convite. Assim, você terá a liberdade de aproveitar nosso sistema em
            diferentes postos parceiros, o que lhe permite acompanhar seus relatórios de
            abastecimento, visualizar gráficos, entender métricas como quilômetros por litro e muito
            mais – tudo isso centralizado de forma prática.
          </Paragraph>
          <Paragraph>
            Ao utilizar o <AppTitle />, você não precisará cadastrar veículos e motoristas
            repetidamente; uma vez cadastrados, eles estarão disponíveis para serem usados em
            diferentes postos, mesmo que pertençam a organizações distintas. O sistema é um hub
            centralizado para gerenciar suas operações. Além do fácil cadastro de veículos e
            motoristas, permite configurar datas de faturamento, visualizar notificações e receber
            e-mails sobre abastecimentos em tempo real.
          </Paragraph>
        </div>
        <div className='hidden md:flex md:w-4/12'>
          <Image
            src='/images/gas-stations/gasstation1.svg'
            width={0}
            height={0}
            className='w-full mt-16'
            alt='companies'
          />
        </div>
      </div>

      <div className='w-full sm:flex sm:items-center sm:justify-between sm:mt-8'>
        <div className='px-8 w-full'>
          <div className='flex items-center -mx-3 sm:-mx-4'>
            <div className='w-full sm:px-2'>
              <Image
                onClick={() => handleImageClick('/images/companies/gas-stations.webp')}
                src='/images/companies/gas-stations.webp'
                width={0}
                height={0}
                className='w-full sm:py-2 cursor-pointer'
                alt='gas-stations'
              />
              <Image
                onClick={() => handleImageClick('/images/companies/payments.webp')}
                src='/images/companies/payments.webp'
                width={0}
                height={0}
                className='w-full sm:py-2 cursor-pointer'
                alt='payments'
              />
            </div>
            <div className='w-full px-2'>
              <div className='relative z-10'>
                <Image
                  onClick={() => handleImageClick('/images/companies/transactions.webp')}
                  src='/images/companies/transactions.webp'
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
          <SubTitle text='Acesso Único' />
          <Title text='Múltipos Postos' />
          <Paragraph>
            Você também pode solicitar faturamentos, acessar detalhes completos dos abastecimentos
            relacionados a uma fatura, agendar serviços e estabelecer autorizações específicas. Por
            exemplo, pode decidir quais veículos ou motoristas têm permissão para abastecer em
            determinados postos ou adquirir produtos específicos. Esse nível de detalhamento e
            personalização visa atender às necessidades específicas de cada cliente.
          </Paragraph>
          <Paragraph>
            Ao ingressar no sistema, você será introduzido a um ambiente de gestão avançada,
            projetado para otimizar o controle de sua frota. Pode-se estabelecer restrições, como o
            tipo de combustível permitido para um veículo, controle de quilometragem, associar
            motoristas a veículos específicos e determinar os métodos de assinatura, incluindo o
            cadastro antecipado de assinaturas digitais. Além disso, é possível especificar quais
            produtos e serviços cada motorista pode acessar, garantindo segurança e eficiência na
            gestão de sua frota.
          </Paragraph>
        </div>
      </div>

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
            evitando surpresas indesejadas. Com relatórios e gráficos disponíveis em várias seções
            do sistema, como &quot;Abastecimentos&quot; ou &quot;Postos&quot;, seu planejamento e
            controle são significativamente aprimorados.
          </Paragraph>
          <Paragraph>
            E não para por aí! Para os motoristas, temos um aplicativo prático onde podem
            identificar postos nos quais estão cadastrados, verificar os combustíveis autorizados
            para seus veículos, os produtos que podem ser faturados e até mesmo encontrar a rota
            mais próxima para o posto.
          </Paragraph>
          <Paragraph>
            Converse com seu posto de confiança, começe a usar o <AppDescription /> e traga sua
            frota para o <AppTitle />.
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
    </>
  );
};

export default Companies;
