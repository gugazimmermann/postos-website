import sharedMetadata from '../shared-metadata';
import PersonalizationText from '../components/pages/personalization/PersonalizationText';

export const metadata = {
  ...sharedMetadata,
  title: `Personalizações | ${sharedMetadata.title}`,
  description: `Personalize o ${sharedMetadata.title} para sua organização e postos`,
  alternates: {
    canonical: `${sharedMetadata.alternates.canonical}/personalizacoes`,
  },
  keywords: [
    ...sharedMetadata.keywords,
    `${sharedMetadata.title}`,
    'Personalização de Sistema para Postos',
    'Notificações Customizadas para Postos',
    'Ponto de Vendas Personalizado',
    'Análise de Custos de Personalização',
    'Customização de Gerenciamento de Frotas',
  ],
};

export default function Customizations() {
  return (
    <PersonalizationText />
  );
}
