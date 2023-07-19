'use client';

import { useCallback, useEffect, useState } from 'react';
import { api } from '../../../utils';
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
    <>
      <LoginText name={name} />
      <Card title='Dados Gerais'>
        <LoginForm id={params.id} name={name} fetchError={fetchError} />
      </Card>
    </>
  );
}
