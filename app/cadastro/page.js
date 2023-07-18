import { Section } from '../components/layout/sections';
import { RegisterText, RegisterForm } from '../components/pages/register';
import { Card } from '../components/helpers';

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
