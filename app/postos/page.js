import sharedMetadata from '../shared-metadata';
import {
  Section,
} from '../components/layout/sections';
import Organizations from './Organizations';

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
      <h2 className='text-2xl text-center font-bold text-slate-800 md:text-3xl m-6'>
        Para os<span className='text-amber-500 ml-2'>Postos</span>
      </h2>
      <Organizations />
    </Section>
  );
}
