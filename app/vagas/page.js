import sharedMetadata from '../shared-metadata';
import WorkWithUsText from '../components/pages/work-with-us/WorkWithUsText';

export const metadata = {
  ...sharedMetadata,
  title: `Trabalhe Conosco | ${sharedMetadata.title}`,
  description: `Vagas e Oportunidades de Emprego na ${sharedMetadata.title}`,
  alternates: {
    canonical: `${sharedMetadata.alternates.canonical}/vagas`,
  },
  keywords: [
    ...sharedMetadata.keywords,
    'vagas',
    'posições',
    'emprego',
    'trabalho',
    'desenvolvedor',
    'developer',
    'programador',
  ],
};

export default function WorkWithUs() {
  return <WorkWithUsText />;
}
