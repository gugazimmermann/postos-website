import sharedMetadata from '../shared-metadata';
import { Section, SectionTitle } from '../components/layout/sections';
import { UsageTermsText } from '../components/pages/usage-terms';

export const metadata = {
  ...sharedMetadata,
  title: `Termos de Uso | ${sharedMetadata.title}`,
  description: `Termos de Uso do ${sharedMetadata.title}`,
  alternates: {
    canonical: `${sharedMetadata.alternates.canonical}/termos-de-uso`,
  },
  keywords: [...sharedMetadata.keywords, 'termos', 'uso', 'utilização'],
};

export default function UsageTerms() {
  return (
    <Section>
      <SectionTitle title='Termos de Uso' />
      <UsageTermsText />
    </Section>
  );
}
