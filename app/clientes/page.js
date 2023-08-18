import sharedMetadata from '../shared-metadata';
import {
  Section,
} from '../components/layout/sections';
import Companies from '../postos/Companies';
import CompaniesConfig from '../postos/CompaniesConfig';

export const metadata = {
  ...sharedMetadata,
  title: `Para os Clientes | ${sharedMetadata.title}`,
  description: `Informações para os clientes dos postos e organizações no ${sharedMetadata.title}`,
  alternates: {
    canonical: `${sharedMetadata.alternates.canonical}/postos`,
  },
  keywords: [...sharedMetadata.keywords, 'cliente', 'clientes'],
};

export default function Clients() {
  return (
    <Section>
      <h2 className='text-2xl text-center font-bold text-slate-800 md:text-3xl m-4'>
        Para os<span className='text-amber-500 ml-2'>Clientes</span>
      </h2>
      <Companies />
      <CompaniesConfig />
    </Section>
  );
}
