import Image from 'next/image';
import sharedMetadata from '../shared-metadata';
import {
  Section,
  SectionTitle,
  SectionSubTitle,
} from '../components/layout/sections';
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
      <div className='w-full text-center'>
        <SectionSubTitle>
          Excelência Tecnológica: Potencializando Eficiência e Segurança Avançadas
        </SectionSubTitle>
      </div>
      <div className='w-full mt-4'>
        <Image
          priority
          src='/images/tecnology.svg'
          width={0}
          height={0}
          className='w-1/2 float-left mr-4'
          alt='Follow us on Twitter'
        />
        <Tecnologies />
      </div>
    </Section>
  );
}
