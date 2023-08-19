import Image from 'next/image';
import { SectionParagraph } from '../components/layout/sections';

const Go = () => {
  return (
    <div className='px-4 w-full'>
      <div className='flex justify-center sm:float-right'>
        <Image
          src='/images/technologies/go.png'
          width={0}
          height={0}
          className='w-auto h-16 sm:m-4'
          alt='CI/CD'
        />
      </div>
      <SectionParagraph>
        Criada pelo Google, o Go foi projetado para eficiência e velocidade, tornando-o ideal para
        aplicativos de alto desempenho como o nosso sistema de gerenciamento de frotas. O Go foi
        desenvolvido por renomados engenheiros do Google, incluindo Rob Pike e Ken Thompson,
        criadores do sistema operacional Unix e das linguagens de programação C e UTF-8. Esses
        históricos criadores são um testemunho da qualidade e inovação que embasam o Go.
      </SectionParagraph>
      <SectionParagraph>
        Grandes empresas como a Uber, Dropbox e SoundCloud optaram pelo Go devido à sua combinação
        única de desempenho, eficiência e legibilidade de código. Além disso, o Go é reconhecido por
        sua segurança, minimizando riscos de vulnerabilidades e garantindo a proteção dos dados.
      </SectionParagraph>
      <SectionParagraph>
        Ao escolhermos o Go para nossa integração com o Desbravador, estamos priorizando a
        qualidade, segurança e desempenho, alinhando-nos a uma linguagem amplamente respaldada e
        adotada por líderes do setor. Isso assegura que nossa solução de gerenciamento de frotas
        seja confiável, eficaz e de ponta.
      </SectionParagraph>
    </div>
  );
};

export default Go;
