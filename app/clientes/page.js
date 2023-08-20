import sharedMetadata from '../shared-metadata';
import { Section } from '../components/layout/sections';
import Companies from './Companies';

export const metadata = {
  ...sharedMetadata,
  title: `Para os Clientes | ${sharedMetadata.title}`,
  description: `Informações para os clientes dos postos e organizações no ${sharedMetadata.title}`,
  alternates: {
    canonical: `${sharedMetadata.alternates.canonical}/postos`,
  },
  keywords: [...sharedMetadata.keywords],
};

export default function Clients() {
  return (
    <Section>
      <Companies />
    </Section>
  );
}
