import sharedMetadata from '../../../shared-metadata';
import { Section } from '../../../components/layout/sections';
import Code from './Code';

export const metadata = {
  ...sharedMetadata,
  title: `Cadastro de Organização | ${sharedMetadata.title}`,
  description: `Cadastro de Organização no ${sharedMetadata.title}`,
  alternates: {
    canonical: `${sharedMetadata.alternates.canonical}/cadastro/sucesso`,
  },
  keywords: [...sharedMetadata.keywords, 'cadastro', 'organização', 'organizações'],
};

export default function RegisterCode({ params }) {
  return (
    <Section>
      <div className='flex flex-col md:flex-row gap-4 md:gap-8 items-start'>
        <Code params={params} />
      </div>
    </Section>
  );
}
