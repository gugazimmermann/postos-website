import sharedMetadata from '../shared-metadata';
import { Section, SectionTitle, SectionParagraph } from '../components/layout/sections';

export const metadata = {
  ...sharedMetadata,
  title: `Para os Clientes | ${sharedMetadata.title}`,
  description: `Informações para os clientes dos postos e organizações no ${sharedMetadata.title}`,
  alternates: {
    canonical: `${sharedMetadata.alternates.canonical}/postos`,
  },
  keywords: [...sharedMetadata.keywords, 'cliente', 'clientes'],
};

export default function Companies() {
  return (
    <Section>
      <SectionTitle title='Para os' word='Clientes' />
      <SectionParagraph>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem modi reprehenderit vitae
        exercitationem aliquid dolores ullam temporibus enim expedita aperiam mollitia iure
        consectetur dicta tenetur, porro consequuntur saepe accusantium consequatur.
      </SectionParagraph>
    </Section>
  );
}
