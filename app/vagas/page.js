import Image from 'next/image';
import sharedMetadata from '../shared-metadata';
import { Section, SectionTitle, SectionParagraph } from '../components/layout/sections';

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
      <div className='w-full flex flex-row justify-around items-center mt-4'>
        <Image
          priority
          src='/images/work.svg'
          width={0}
          height={0}
          className='w-1/4 float-left mr-4'
          alt='Vagas'
        />
        <SectionParagraph>
          Sem vagas abertas no momento.
        </SectionParagraph>
      </div>
    </Section>
  );
}
