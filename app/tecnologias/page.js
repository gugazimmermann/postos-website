import sharedMetadata from '../shared-metadata';
import TechnologiesText from '../components/pages/technologies/TechnologiesText';

export const metadata = {
  ...sharedMetadata,
  title: `Tecnologias | ${sharedMetadata.title}`,
  description: `Tecnologias Utilizadas em ${sharedMetadata.title}`,
  alternates: {
    canonical: `${sharedMetadata.alternates.canonical}/tecnologias`,
  },
  keywords: [
    ...sharedMetadata.keywords,
    `${sharedMetadata.title}`,
    'tecnologias',
    'react',
    'aws',
    'go',
    'golang',
    'cicd',
  ],
};

export default function Tecnologias() {
  return <TechnologiesText />;
}
