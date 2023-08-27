import sharedMetadata from '../shared-metadata';
import AboutUsText from '../components/pages/about-us/AboutUsText';

export const metadata = {
  ...sharedMetadata,
  title: `Sobre Nós | ${sharedMetadata.title}`,
  description: `Conheça mais sobre o ${sharedMetadata.title}`,
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
  return <AboutUsText />;
}
