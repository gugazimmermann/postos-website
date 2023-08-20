import Image from 'next/image';
import { SectionParagraph } from '../../layout/sections';

const Electron = () => {
  return (
    <div className='px-4 w-full'>
      <div className='flex justify-center sm:float-right'>
        <Image
          src='/images/technologies/electron.webp'
          width={0}
          height={0}
          className='w-auto h-32 sm:m-4'
          alt='Electron'
        />
      </div>
      <SectionParagraph>
        Nossa plataforma incorpora a eficiência do Electron, uma tecnologia que traz diversas
        vantagens. Desenvolvida pela GitHub, uma das maiores e mais influentes plataformas de
        desenvolvimento colaborativo, o Electron permite a criação de aplicativos de desktop com
        tecnologias web, otimizando a experiência do usuário e a acessibilidade. A solução garante
        acesso direto ao nosso sistema sem a necessidade de um navegador de internet, oferecendo um
        ambiente de trabalho ágil e seguro.
      </SectionParagraph>
      <SectionParagraph>
        Grandes empresas como Microsoft, Slack, que é um pilar da comunicação empresarial moderna, e
        Trello confiam no Electron para suas aplicações, o que demonstra sua robustez e
        adaptabilidade. A tecnologia também enfatiza a segurança ao fornecer ambientes isolados para
        aplicativos, protegendo seus dados e garantindo a integridade das operações.
      </SectionParagraph>
      <SectionParagraph>
        Com o Electron, garantimos uma experiência desktop prática e otimizada, com a confiança de
        uma tecnologia amplamente utilizada e aprovada por líderes do setor. Isso nos permite
        oferecer a você uma experiência confiável e eficaz ao utilizar nosso sistema.
      </SectionParagraph>
    </div>
  );
};

export default Electron;
