import sharedMetadata from '../shared-metadata';
import CompanyText from '../components/pages/company/CompanyText';

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
  return <CompanyText />;
}
