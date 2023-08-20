import sharedMetadata from '../shared-metadata';
import PersonalizationText from '../components/pages/personalization/PersonalizationText';

export const metadata = {
  ...sharedMetadata,
  title: `Personalizações | ${sharedMetadata.title}`,
  description: `Personalize o ${sharedMetadata.title} para sua organização e postos`,
  alternates: {
    canonical: `${sharedMetadata.alternates.canonical}/personalizacoes`,
  },
  keywords: [...sharedMetadata.keywords, 'personalização', 'suporte'],
};

export default function Customizations() {
  return (
    <PersonalizationText />
  );
}
