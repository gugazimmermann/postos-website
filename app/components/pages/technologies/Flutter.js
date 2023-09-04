import Image from 'next/image';
import { SectionParagraph } from '../../layout/sections';

const Flutter = () => {
  return (
    <div className='px-4 w-full'>
      <div className='flex justify-center sm:float-right'>
        <Image
          src='/images/technologies/flutter.webp'
          width={0}
          height={0}
          className='h-auto w-48 sm:m-4'
          alt='Flutter'
        />
      </div>
      <SectionParagraph>
        Desenvolvido pelo Google, o Flutter emergiu como uma poderosa ferramenta para a criação de
        experiências móveis nativas e impressionantes. Facilita o processo de desenvolvimento de
        aplicativos para iOS e Android a partir de uma única base de código, promovendo a eficiência
        e agilidade no ciclo de desenvolvimento. Atrás do Flutter, encontramos a expertise da equipe
        de engenheiros do Google, que já estiveram envolvidos em várias outras inovações marcantes
        no setor de tecnologia.
      </SectionParagraph>
      <SectionParagraph>
        Gigantes da indústria como Alibaba, Google Ads e eBay integraram o Flutter em seus
        processos, reconhecendo sua flexibilidade, desempenho sólido e eficácia na implementação
        multiplataforma. Além de oferecer uma interface de usuário refinada e nativa, o Flutter é
        conhecido por sua capacidade de se harmonizar perfeitamente com código nativo quando
        necessário, assegurando que os aplicativos atinjam um pico de desempenho notável.
      </SectionParagraph>
      <SectionParagraph>
        Ao adotarmos o Flutter para nossas soluções móveis, estamos nos posicionando à par de uma
        tecnologia robusta e amplamente aceita pelos pioneiros da indústria. Isso assegura que
        nossos aplicativos proporcionem uma experiência de usuário excepcional, dinâmica e homogênea
        em várias plataformas, reafirmando nosso compromisso com a liderança nas soluções móveis
        contemporâneas.
      </SectionParagraph>
    </div>
  );
};

export default Flutter;
