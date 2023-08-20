import sharedMetadata from '../shared-metadata';
import NewReportsText from '../components/pages/new-reports/NewReportsText';

export const metadata = {
  ...sharedMetadata,
  title: `Novos Relatórios | ${sharedMetadata.title}`,
  description: `Novos Relatórios no ${sharedMetadata.title}`,
  alternates: {
    canonical: `${sharedMetadata.alternates.canonical}/novos-relatorios`,
  },
  keywords: [
    ...sharedMetadata.keywords,
    `${sharedMetadata.title}`,
    'Relatórios Personalizados para Postos',
    'Gráficos para Postos de Combustível',
    'Insights de Abastecimentos',
    'Análise de Vendas e Marketing para Postos',
    'Decisões Estratégicas baseadas em Dados para Postos',
  ],
};

export default function NewReports() {
  return <NewReportsText />;
}
