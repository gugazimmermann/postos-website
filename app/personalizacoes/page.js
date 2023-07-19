import sharedMetadata from '../shared-metadata';
import { Section, SectionTitle, SectionParagraph } from '../components/layout/sections';

export const metadata = {
  ...sharedMetadata,
  title: `Personalizações | ${sharedMetadata.title}`,
  description: `Personalize o ${sharedMetadata.title} para sua organização e postos`,
  alternates: {
    canonical: `${sharedMetadata.alternates.canonical}/personalizacoes`,
  },
  keywords: [...sharedMetadata.keywords, 'personalização', 'suporte'],
}

export default function Customizations() {
  return (
    <Section>
      <SectionTitle title='Personalizações' />
      <SectionParagraph>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem modi reprehenderit vitae
        exercitationem aliquid dolores ullam temporibus enim expedita aperiam mollitia iure
        consectetur dicta tenetur, porro consequuntur saepe accusantium consequatur.
      </SectionParagraph>
    </Section>
  );
}
