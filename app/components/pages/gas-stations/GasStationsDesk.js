'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Title, SubTitle, Paragraph, AppTitle } from '../../general';

const imageUrls = [
  '/images/gas-stations/desk/1.webp',
  '/images/gas-stations/desk/2.webp',
  '/images/gas-stations/desk/3.webp',
  '/images/gas-stations/desk/4.webp',
];

const GasStationsDesk = () => {
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
    <div id='Caixa' className='w-full sm:flex sm:items-center sm:justify-between mt-4'>
      <div className='mt-4 sm:mt-0 sm:px-8 w-full'>
        <SubTitle text='Eficiência, Segurança e Transparência' />
        <Title text='Tela do Caixa' />
        <div className='w-full flex flex-col sm:flex-row'>
          <div className='sm:flex-1'>
            <Paragraph>
              Ao utilizar o Caixa no <AppTitle />, a experiência é fluida e direta. Busque
              facilmente por placa, motorista ou cliente. Todas as configurações individuais dos
              clientes, como controle de quilometragem, restrições de combustível e horários, estão
              ao alcance de um clique. E se houver promoções personalizadas? O caixa é
              automaticamente alertado!
            </Paragraph>
            <Paragraph>
              Modernizamos o processo de autorização do abastecimento: opte por Assinatura Digital,
              Reconhecimento Facial ou Biometria, mas ainda suportamos a tradicional assinatura
              manual. E a transparência? Garantida! Após autorizar a transação, o cliente é
              imediatamente notificado em nosso sistema, no aplicativo e por email. Sua operação
              nunca foi tão clara e eficaz!
            </Paragraph>
            <Paragraph>
              Contamos atualmente com integração ao sistema <strong>Desbravador</strong>. Dados das
              bombas podem ser sincronizados ao <AppTitle /> através de nosso aplicativo para
              Windows, de maneira simples, tornando tudo mais prático. Estamos trabalhando para em
              breve ter os principais sistemas do mercado integrados. Aproivete,{' '}
              <Link href='/tecnologias' className='font-bold underline hover:cursor-pointer'>
                clique aqui
              </Link>
              , e conheça mais sobre nossas tecnologias.
            </Paragraph>
          </div>
          <div className='sm:max-w-[256px] sm:ml-4 flex justify-center sm:block'>
            <Image
              src={imageUrls[currentImageIndex]}
              width={0}
              height={0}
              className='w-full max-w-[256px]  rounded'
              alt='desk'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GasStationsDesk;
