import sharedMetadata from '../shared-metadata';
import CompanyText from '../components/pages/company/CompanyText';

export const metadata = {
  ...sharedMetadata,
  title: `Sobre Nós | ${sharedMetadata.title}`,
  description: `Informações sobre ${sharedMetadata.title}`,
  alternates: {
    canonical: `${sharedMetadata.alternates.canonical}/empresa`,
  },
  keywords: [
    ...sharedMetadata.keywords,
    `${sharedMetadata.title}`,
    'Inovação em Gerenciamento de Frotas',
    'Tecnologia para Postos de Combustível',
    'Visão Estratégica em Abastecimento',
    'Eficiência em Gerenciamento de Frotas',
    'Excelência em Tecnologia para Postos',
  ],
};

export default function AboutUs() {
  return <CompanyText />;
}
