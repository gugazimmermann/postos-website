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
        Excelência Tecnológica: Potencializando Eficiência e Segurança Avançadas
      </SectionSubTitle>
      <Image
        src='/images/tecnology.svg'
        width={0}
        height={0}
        className='w-full my-4'
        alt='Tecnologias'
      />
      <Tecnologies />
    </Section>
  );
}
