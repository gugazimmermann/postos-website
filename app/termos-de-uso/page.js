import { Section, SectionTitle } from '../components/layout/sections';
import { UsageTermsText } from '../components/pages/usage-terms';

export default function UsageTerms() {
  return (
    <Section>
      <SectionTitle title='Termos de Uso' />
      <UsageTermsText />
    </Section>
  );
}
