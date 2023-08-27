import sharedMetadata from '../shared-metadata';
import { Section } from '../components/layout/sections';
import CompaniesContent from '../components/pages/companies/CompaniesContent';

export const metadata = {
  ...sharedMetadata,
  title: `Para os Frotistas | ${sharedMetadata.title}`,
  description: `Informações para os Frotistas do ${sharedMetadata.title}`,
  alternates: {
    canonical: `${sharedMetadata.alternates.canonical}/postos`,
  },
  keywords: [...sharedMetadata.keywords],
};

export default function Clients() {
  return (
    <Section>
      <CompaniesContent />
    </Section>
  );
}
