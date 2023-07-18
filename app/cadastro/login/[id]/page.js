'use client';

import { useCallback, useEffect, useState } from 'react';
import { api } from '../../../utils';
import { Section } from '../../../components/layout/sections';
import { Card } from '../../../components/helpers';
import { LoginText, LoginForm } from '../../../components/pages/register';

export default function RegisterLogin({ params }) {
  const [name, setName] = useState('');
  const [fetchError, setFetchError] = useState(false);

  const getRegister = useCallback(async () => {
    const data = await api.getOrganization(params.id);
    if (data?.name) setName(data.name);
    else setFetchError(true);
  }, [params.id]);

  useEffect(() => {
    if (params.id) getRegister();
  }, [getRegister, params.id]);

  return (
    <Section>
      <div className='flex flex-col md:flex-row gap-4 md:gap-8 items-start'>
        <LoginText name={name} />
        <Card title='Dados Gerais'>
          <LoginForm id={params.id} name={name} fetchError={fetchError} />
        </Card>
      </div>
    </Section>
  );
}
