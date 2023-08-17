import sharedMetadata from '../shared-metadata';
import { Section, SectionTitle } from '../components/layout/sections';
import { PrivacityText } from '../components/pages/privacity-terms';

export const metadata = {
  ...sharedMetadata,
  title: `Políticas de Privacidade | ${sharedMetadata.title}`,
  description: `Políticas de Privacidade do ${sharedMetadata.title}`,
  alternates: {
    canonical: `${sharedMetadata.alternates.canonical}/privacidade`,
  },
  keywords: [...sharedMetadata.keywords, 'privacidade'],
};

export default function PrivacityTerms() {
  return (
    <Section>
      <SectionTitle title='Políticas de Privacidade' />
      <PrivacityText />
    </Section>
  );
}
