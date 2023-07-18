import { Section } from '../components/layout/sections';
import { ContactText, ContactForm } from '../components/pages/contact-us';
import { Card } from '../components/helpers';

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
