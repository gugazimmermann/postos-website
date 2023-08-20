import sharedMetadata from '../shared-metadata';
import NewReportsText from '../components/pages/new-reports/NewReportsText';

export const metadata = {
  ...sharedMetadata,
  title: `Novos Relatórios | ${sharedMetadata.title}`,
  description: `Novos Relatórios no ${sharedMetadata.title}`,
  alternates: {
    canonical: `${sharedMetadata.alternates.canonical}/novos-relatorios`,
  },
  keywords: [...sharedMetadata.keywords, 'relatórios', 'gráficos', 'tabelas'],
};

export default function NewReports() {
  return <NewReportsText />;
}
