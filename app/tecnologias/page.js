import Image from 'next/image';
import sharedMetadata from '../shared-metadata';
import { Section, SectionTitle, SectionSubTitle } from '../components/layout/sections';
import Tecnologies from './Tecnologies';

export const metadata = {
  ...sharedMetadata,
  title: `Tecnologias | ${sharedMetadata.title}`,
  description: `Tecnologias Utilizadas em ${sharedMetadata.title}`,
  alternates: {
    canonical: `${sharedMetadata.alternates.canonical}/tecnologias`,
  },
  keywords: [
    ...sharedMetadata.keywords,
    `${sharedMetadata.title}`,
    'tecnologias',
    'react',
    'aws',
    'go',
    'golang',
    'cicd',
  ],
};

export default function Tecnologias() {
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
        <Tecnologies />
      </div>
    </Section>
  );
}
