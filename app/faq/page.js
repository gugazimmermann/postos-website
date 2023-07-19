import sharedMetadata from '../shared-metadata';
import { Section, SectionTitle } from '../components/layout/sections';
import Faq from './Faq';

export const metadata = {
  ...sharedMetadata,
  title: `Perguntas Frequentes | ${sharedMetadata.title}`,
  description: `Perguntas Frequentes sobre o ${sharedMetadata.title}`,
  alternates: {
    canonical: `${sharedMetadata.alternates.canonical}/faq`,
  },
  keywords: [...sharedMetadata.keywords, 'faq', 'perguntas', 'frequentes', 'suporte', 'ajuda'],
}

export default function FAQ() {
  return (
    <Section>
      <SectionTitle title='Perguntas Frequentes' />
      <Faq />
    </Section>
  );
}
