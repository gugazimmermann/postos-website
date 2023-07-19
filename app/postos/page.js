import sharedMetadata from '../shared-metadata';
import { Section, SectionTitle, SectionParagraph } from '../components/layout/sections';

export const metadata = {
  ...sharedMetadata,
  title: `Para os Postos | ${sharedMetadata.title}`,
  description: `Informações para os postos e organizações no ${sharedMetadata.title}`,
  alternates: {
    canonical: `${sharedMetadata.alternates.canonical}/postos`,
  },
  keywords: [...sharedMetadata.keywords],
};

export default function GasStations() {
  return (
    <Section>
      <SectionTitle title='Para os' word='Postos' />
      <SectionParagraph>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem modi reprehenderit vitae
        exercitationem aliquid dolores ullam temporibus enim expedita aperiam mollitia iure
        consectetur dicta tenetur, porro consequuntur saepe accusantium consequatur.
      </SectionParagraph>
    </Section>
  );
}
