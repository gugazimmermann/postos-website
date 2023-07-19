import sharedMetadata from '../shared-metadata';
import { Section, SectionTitle, SectionParagraph } from '../components/layout/sections';

export const metadata = {
  ...sharedMetadata,
  title: `Trabalhe Conosco | ${sharedMetadata.title}`,
  description: `Vagas e Oportunidades de Emprego na ${sharedMetadata.title}`,
  alternates: {
    canonical: `${sharedMetadata.alternates.canonical}/vagas`,
  },
  keywords: [...sharedMetadata.keywords, 'vagas', 'posições', 'emprego', 'trabalho', 'desenvolvedor', 'developer', 'programador'],
};

export default function WorkWithUs() {
  return (
    <Section>
      <SectionTitle title='Trabalhe Conosco' />
      <SectionParagraph>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem modi reprehenderit vitae
        exercitationem aliquid dolores ullam temporibus enim expedita aperiam mollitia iure
        consectetur dicta tenetur, porro consequuntur saepe accusantium consequatur.
      </SectionParagraph>
    </Section>
  );
}
