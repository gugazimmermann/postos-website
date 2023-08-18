import Image from 'next/image';
import sharedMetadata from '../shared-metadata';
import { Section, SectionTitle, SectionSubTitle } from '../components/layout/sections';

export const metadata = {
  ...sharedMetadata,
  title: `Trabalhe Conosco | ${sharedMetadata.title}`,
  description: `Vagas e Oportunidades de Emprego na ${sharedMetadata.title}`,
  alternates: {
    canonical: `${sharedMetadata.alternates.canonical}/vagas`,
  },
  keywords: [
    ...sharedMetadata.keywords,
    'vagas',
    'posições',
    'emprego',
    'trabalho',
    'desenvolvedor',
    'developer',
    'programador',
  ],
};

export default function WorkWithUs() {
  return (
    <Section>
      <SectionTitle title='Trabalhe Conosco' />
      <Image
        src='/images/work.svg'
        width={0}
        height={0}
        className='w-full my-4'
        alt='Vagas'
      />
      <SectionSubTitle>Sem vagas abertas no momento.</SectionSubTitle>
    </Section>
  );
}
