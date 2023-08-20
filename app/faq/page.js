import sharedMetadata from '../shared-metadata';
import { Section, SectionTitle } from '../components/layout/sections';
import FaqContent from '../components/pages/faq/FaqContent';

export const metadata = {
  ...sharedMetadata,
  title: `Perguntas Frequentes | ${sharedMetadata.title}`,
  description: `Perguntas Frequentes sobre o ${sharedMetadata.title}`,
  alternates: {
    canonical: `${sharedMetadata.alternates.canonical}/faq`,
  },
  keywords: [...sharedMetadata.keywords],
};

export default function FAQ() {
  return (
    <Section>
      <SectionTitle title='Perguntas Frequentes' />
      <FaqContent />
    </Section>
  );
}
