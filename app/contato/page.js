import sharedMetadata from '../shared-metadata';
import { Section } from '../components/layout/sections';
import { ContactText, ContactForm } from '../components/pages/contact-us';
import { Card } from '../components/helpers';

export const metadata = {
  ...sharedMetadata,
  title: `Contato | ${sharedMetadata.title}`,
  description: `Informações de Contato do ${sharedMetadata.title}`,
  alternates: {
    canonical: `${sharedMetadata.alternates.canonical}/contato`,
  },
  keywords: [...sharedMetadata.keywords],
};

export default function ContactUs() {
  return (
    <Section>
      <div className='flex flex-col md:flex-row gap-4 md:gap-8 items-start'>
        <ContactText />
        <Card title='Envie uma mensagem'>
          <ContactForm />
        </Card>
      </div>
    </Section>
  );
}
