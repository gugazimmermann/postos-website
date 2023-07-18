import { Section, SectionTitle } from '../components/layout/sections';
import { PrivacityText } from '../components/pages/privacity-terms';

export default function PrivacityTerms() {
  return (
    <Section>
      <SectionTitle title='Políticas de Privacidade' />
      <PrivacityText />
    </Section>
  );
}
