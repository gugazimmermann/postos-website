import Image from 'next/image';
import { SectionParagraph } from '../components/layout/sections';

const React = () => {
  return (
    <div className='px-4 w-full'>
      <div className='flex justify-center sm:float-right'>
        <Image
          src='/images/technologies/react.png'
          width={0}
          height={0}
          className='w-auto h-32 sm:m-4'
          alt='CI/CD'
        />
      </div>
      <SectionParagraph>
        Nossa plataforma é construída com o React, uma tecnologia que torna o sistema mais rápido e
        fácil de usar. Isso significa que você pode acessá-lo de qualquer dispositivo com internet,
        seja um computador ou celular, sem complicações. Ele permite que nossa plataforma se adapte
        perfeitamente a diferentes tamanhos de tela, garantindo uma experiência coesa e amigável,
        independentemente do dispositivo usado.
      </SectionParagraph>
      <SectionParagraph>
        Desenvolvido pelo Facebook, o React tem uma sólida reputação e um histórico comprovado em
        várias aplicações de grande escala. Isso nos oferece a confiança de que estamos utilizando
        uma tecnologia robusta e confiável.
      </SectionParagraph>
      <SectionParagraph>
        Grandes empresas, como Netflix, Instagram e Airbnb, também adotaram o React em suas
        aplicações. Essa adoção por líderes do setor destaca a credibilidade e a capacidade do React
        em lidar com complexas demandas tecnológicas.
      </SectionParagraph>
      <SectionParagraph>
        Portanto, ao escolher o React como base para nossa plataforma, estamos garantindo um
        desempenho otimizado, uma experiência consistente em todos os dispositivos e a confiança de
        que estamos utilizando uma tecnologia respaldada por gigantes da indústria. Isso resulta em
        uma plataforma moderna, ágil e confiável para o gerenciamento eficiente de frotas.
      </SectionParagraph>
    </div>
  );
};

export default React;
