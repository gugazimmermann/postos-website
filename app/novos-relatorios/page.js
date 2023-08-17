import sharedMetadata from '../shared-metadata';
import { Section, SectionTitle, SectionParagraph } from '../components/layout/sections';

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
  return (
    <Section>
      <SectionTitle title='Novos Relatórios' />
      <SectionParagraph>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem modi reprehenderit vitae
        exercitationem aliquid dolores ullam temporibus enim expedita aperiam mollitia iure
        consectetur dicta tenetur, porro consequuntur saepe accusantium consequatur.
      </SectionParagraph>
    </Section>
  );
}
