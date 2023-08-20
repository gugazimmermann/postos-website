'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { api, statesBR } from '../../../utils';
import { useModal } from '../../hooks';
import { isValidCNPJ, isValidEmail, masks } from '../../../utils';
import { Alert, Button, Form, Grid } from '../../helpers';
import { UsageTermsText2 } from '../usage-terms';
import { PrivacityText } from '../privacity-terms';

const RegisterForm = () => {
  const router = useRouter();
  const { openModal: openUsageTermsModal, Modal: UsageTermsModal } = useModal({
    closeoutside: true,
  });
  const { openModal: openPrivacityModal, Modal: PrivacityModal } = useModal({ closeoutside: true });
  const [alert, setAlert] = useState();
  const [loading, setLoading] = useState(false);
  const [document, setDocument] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [accept, setAccept] = useState(false);

  const resetForm = () => {
    setDocument('');
    setName('');
    setEmail('');
    setPhone('');
    setAddress('');
    setCity('');
    setState('');
  };

  const validate = (form) => {
    if (!form.accept) return 'É necessário aceitar os Termos de Uso e Privacidade!';
    if (
      !form.document ||
      !form.name ||
      !form.email ||
      !form.phone ||
      !form.address ||
      !form.city ||
      !form.state
    )
      return 'Todos os campos são obrigatórios!';
    if (!isValidCNPJ(form.document)) return 'CNPJ inválido!';
    if (!isValidEmail(form.email)) return 'Email inválido!';
    if (form?.name?.length < 3) return 'Nome deve ter mínimo de 3 caracteres!';
    return false;
  };

  const handleSubmit = async (e) => {
    setAlert();
    e.preventDefault();
    setLoading(true);
    const form = {
      accept,
      document,
      name,
      email,
      phone,
      address,
      city,
      state,
    };
    const validationError = validate(form);
    if (validationError) {
      setAlert(validationError);
      setLoading(false);
      return;
    }
    const data = await api.saveOrganization(form);
    if (data?.id) {
      setLoading(false);
      resetForm();
      router.push(`/cadastro/login/${data.id}`);
    } else {
      if (data === 'Email is already registered.') {
        setAlert('Email já está cadastrado.');
      } else if (data === 'Document is already registered.') {
        setAlert('CNPJ já está cadastrado.');
      } else {
        setAlert('Ocorreu um erro no envio do formulário, tente novamente.');
      }
      setLoading(false);
      return;
    }
  };

  return (
    <>
      {alert && <Alert type='error' text={alert} />}
      <form onSubmit={(e) => handleSubmit(e)} className='mt-8 space-y-6'>
        <Grid.Col2>
          <Grid.Row>
            <Form.Label htmlFor='document' text='CNPJ' />
            <Form.Input
              loading={loading}
              value={masks.cnpj(document)}
              editValue={(e) => setDocument(masks.cnpj(e.target.value))}
              required={true}
              name='document'
            />
          </Grid.Row>
          <Grid.Row>
            <Form.Label htmlFor='name' text='Nome' />
            <Form.Input
              loading={loading}
              value={name}
              editValue={(e) => setName(e.target.value)}
              required={true}
              name='name'
            />
          </Grid.Row>
        </Grid.Col2>
        <Grid.Col2>
          <Grid.Row>
            <Form.Label htmlFor='email' text='Email' />
            <Form.Input
              loading={loading}
              value={email}
              editValue={(e) => setEmail(e.target.value)}
              required={true}
              type='email'
              name='email'
            />
          </Grid.Row>
          <Grid.Row>
            <Form.Label htmlFor='phone' text='Telefone' />
            <Form.Input
              loading={loading}
              value={masks.phone(phone)}
              editValue={(e) => setPhone(masks.phone(e.target.value))}
              required={true}
              name='phone'
            />
          </Grid.Row>
        </Grid.Col2>
        <Grid.Col2>
          <Grid.Row>
            <Form.Label htmlFor='address' text='Endedreço' />
            <Form.Input
              loading={loading}
              value={address}
              editValue={(e) => setAddress(e.target.value)}
              required={true}
              name='address'
            />
          </Grid.Row>
          <Grid.Col2>
            <Grid.Row>
              <Form.Label htmlFor='city' text='Cidade' />
              <Form.Input
                loading={loading}
                value={city}
                editValue={(e) => setCity(e.target.value)}
                required={true}
                name='city'
              />
            </Grid.Row>
            <Grid.Row>
              <Form.Label htmlFor='state' text='Estado' />
              <Form.Select
                loading={loading}
                value={state}
                editValue={(e) => setState(e.target.value)}
                required={true}
                name='state'
                data={statesBR}
              />
            </Grid.Row>
          </Grid.Col2>
        </Grid.Col2>
        <Grid.Row>
          <div className='flex flex-row justify-center items-center'>
            <input
              id='accept-checkbox'
              type='checkbox'
              checked={accept}
              onChange={(e) => setAccept(e.target.checked)}
              className='w-4 h-4 rounded'
            />
            <label
              htmlFor='accept-checkbox'
              className='ml-2 text-sm font-medium text-slate-800 flex flex-row justify-start items-start'
            >
              Li e concordo com os
              <button
                type='button'
                onClick={openUsageTermsModal}
                className='text-amber-500 hover:underline mx-1'
              >
                Termos de Uso
              </button>
              e
              <button
                type='button'
                onClick={openPrivacityModal}
                className='text-amber-500 hover:underline ml-1'
              >
                Privacidade
              </button>
              .
            </label>
          </div>
          <UsageTermsModal title='Termos de Uso' scroll={true}>
            <UsageTermsText2 />
          </UsageTermsModal>
          <PrivacityModal title='Políticas de Privacidade' scroll={true}>
            <PrivacityText />
          </PrivacityModal>
        </Grid.Row>
        <div className='w-full text-center'>
          <Button type='submit' loading={loading} text='Registrar' />
        </div>
      </form>
    </>
  );
};

export default RegisterForm;
