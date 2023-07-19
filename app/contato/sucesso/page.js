import sharedMetadata from '../../shared-metadata';
import { Section, SectionTitle, SectionParagraph } from '../../components/layout/sections';

export const metadata = {
  ...sharedMetadata,
  title: `Contato | ${sharedMetadata.title}`,
};

export default function ContactUsSuccess() {
  return (
    <Section>
      <SectionTitle title='Mensagem Enviada' />
      <SectionParagraph>
        Sua mensagem foi enviada com sucesso, entraremos em contato em breve.
      </SectionParagraph>
    </Section>
  );
}
