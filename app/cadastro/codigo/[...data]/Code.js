'use client';

import { useCallback, useEffect, useState } from 'react';
import { api } from '../../../utils';
import { Card } from '../../../components/helpers';
import { CodeText, CodeForm } from '../../../components/pages/register';

export default function Code({ params }) {
  const [email, setEmail] = useState('');
  const [fetchError, setFetchError] = useState(false);

  const getRegister = useCallback(async () => {
    const data = await api.getOrganization(params?.data?.[0]);
    if (data?.email) setEmail(data.email);
    else setFetchError(true);
  }, [params]);

  useEffect(() => {
    if (params?.data?.[0]) getRegister();
  }, [getRegister, params]);

  return (
    <>
      <CodeText email={email} />
      <Card title='Digite seu Código de Confirmação'>
        <CodeForm
          id={params?.data?.[0]}
          email={email}
          confirmationCode={params?.data?.[1]}
          fetchError={fetchError}
        />
      </Card>
    </>
  );
}
