import sharedMetadata from '../shared-metadata';
import { Section, SectionTitle, SectionParagraph } from '../components/layout/sections';

export const metadata = {
  ...sharedMetadata,
  title: `Sobre Nós | ${sharedMetadata.title}`,
  description: `Informações sobre ${sharedMetadata.title}`,
  alternates: {
    canonical: `${sharedMetadata.alternates.canonical}/empresa`,
  },
  keywords: [...sharedMetadata.keywords, `${sharedMetadata.title}`, 'sobre nós'],
};

export default function AboutUs() {
  return (
    <Section>
      <SectionTitle title='Sobre a' word={process.env.NEXT_PUBLIC_TITLE} />
      <SectionParagraph>{process.env.NEXT_PUBLIC_DESCRIPTION}</SectionParagraph>
    </Section>
  );
}
