import Image from 'next/image';
import { Section, SectionTitle, SectionSubTitle } from '../../layout/sections';
import TecnologiesContent from './TecnologiesContent';

const TechnologiesText = () => {
    return (
        <Section>
        <SectionTitle title='Tecnologias Utilizadas' />
        <SectionSubTitle>
          Inovação e Segurança: Conectando a Gestão de Frotas à Excelência Tecnológica
        </SectionSubTitle>
        <div className='w-full'>
          <Image
            src='/images/technologies/tecnology.svg'
            width={0}
            height={0}
            className='w-full my-4 md:w-1/2 md:float-right md:mr-4'
            alt='Tecnologias'
          />
          <TecnologiesContent />
        </div>
      </Section>
    )
}

export default TechnologiesText;
