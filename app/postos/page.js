import sharedMetadata from '../shared-metadata';
import { Section } from '../components/layout/sections';
import GasStationsContent from '../components/pages/gas-stations/GasStationsContent';

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
      <GasStationsContent />
    </Section>
  );
}
