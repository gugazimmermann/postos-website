import Image from 'next/image';
import { SectionParagraph } from '../../layout/sections';

const ReactNative = () => {
  return (
    <div className='px-4 w-full'>
      <div className='flex justify-center sm:float-right'>
        <Image
          src='/images/technologies/react.webp'
          width={0}
          height={0}
          className='w-auto h-32 sm:m-4'
          alt='React Native'
        />
      </div>
      <SectionParagraph>
        Desenvolvido pelo Facebook, o React Native foi projetado para fornecer experiências nativas
        e de alta qualidade. Ele permite aos desenvolvedores criar aplicativos móveis para iOS e
        Android, utilizando um único código base, o que otimiza a eficiência e a velocidade de
        desenvolvimento. Por trás do React Native estão as mentes brilhantes da equipe de engenharia
        do Facebook, que também contribuíram para outras inovações notáveis no mundo tecnológico.
      </SectionParagraph>
      <SectionParagraph>
        Empresas de renome como Instagram, Airbnb e Tesla adotaram o React Native, valorizando sua
        flexibilidade, desempenho e eficiência no desenvolvimento multiplataforma. Além de
        proporcionar uma experiência de usuário fluida e nativa, o React Native é aclamado por sua
        capacidade de integrar diretamente com código nativo quando necessário, garantindo que os
        aplicativos mantenham um alto nível de desempenho.
      </SectionParagraph>
      <SectionParagraph>
        Ao escolhermos o React Native para nossas soluções móveis, estamos nos alinhando a uma
        tecnologia comprovada e amplamente adotada por líderes da indústria. Isto garante que nossos
        aplicativos ofereçam uma experiência de usuário superior, ágil e consistente em diversas
        plataformas, consolidando nossa posição na vanguarda das soluções móveis modernas.
      </SectionParagraph>
    </div>
  );
};

export default ReactNative;
