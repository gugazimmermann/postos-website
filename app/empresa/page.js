import { Section, SectionTitle, SectionParagraph } from '../components/layout/sections';

export default function AboutUs() {
  return (
    <Section>
      <SectionTitle title='Sobre a' word={process.env.NEXT_PUBLIC_TITLE} />
      <SectionParagraph>{process.env.NEXT_PUBLIC_DESCRIPTION}</SectionParagraph>
    </Section>
  );
}
