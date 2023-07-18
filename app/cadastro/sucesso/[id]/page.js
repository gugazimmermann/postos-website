'use client';

import { useCallback, useEffect, useState } from 'react';
import { api } from '../../../utils';
import { Section } from '../../../components/layout/sections';
import { SuccessText } from '../../../components/pages/register';

export default function RegisterLogin({ params }) {
  const [code, setCode] = useState('');
  const [name, setName] = useState('');
  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [fetchError, setFetchError] = useState(false);

  const getRegister = useCallback(async () => {
    const data = await api.getOrganization(params.id);
    if (data?.code) {
      setCode(data.code);
      setName(data.name);
      setLogin(data.login);
      setEmail(data.email);
    } else setFetchError(true);
  }, [params.id]);

  useEffect(() => {
    if (params.id) getRegister();
  }, [getRegister, params.id]);

  return (
    <Section>
      <div className='flex flex-col md:flex-row gap-4 md:gap-8 items-start'>
        <SuccessText code={code} name={name} login={login} email={email} fetchError={fetchError} />
      </div>
    </Section>
  );
}
