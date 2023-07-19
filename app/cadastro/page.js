import sharedMetadata from '../shared-metadata';
import { Section } from '../components/layout/sections';
import { Card } from '../components/helpers';
import { RegisterText, RegisterForm } from '../components/pages/register';

export const metadata = {
  ...sharedMetadata,
  title: `Cadastro de Organização | ${sharedMetadata.title}`,
  description: `Cadastro de Organização no ${sharedMetadata.title}`,
  alternates: {
    canonical: `${sharedMetadata.alternates.canonical}/cadastro`,
  },
  keywords: [...sharedMetadata.keywords, 'cadastro', 'organização', 'organizações'],
};

export default function Register() {
  return (
    <Section>
      <div className='flex flex-col md:flex-row gap-4 md:gap-8 items-start'>
        <RegisterText />
        <Card title='Dados Gerais'>
          <RegisterForm />
        </Card>
      </div>
    </Section>
  );
}
