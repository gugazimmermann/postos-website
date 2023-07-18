'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { api } from '../../../utils';
import { isValidEmail } from '../../../utils';
import { Alert, Button, Form, Grid } from '../../helpers';

const ContactForm = () => {
  const router = useRouter();
  const [alert, setAlert] = useState();
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const resetForm = () => {
    setName('');
    setEmail('');
    setMessage('');
  };

  const validate = (form) => {
    if (!form.name || !form.email || !form.message) return 'Todos os campos são obrigatórios!';
    if (!isValidEmail(form.email)) return 'Email inválido!';
    if (form?.name?.length < 3) return 'Nome deve ter mínimo de 3 caracteres!';
    return false;
  };

  const handleSubmit = async (e) => {
    setAlert();
    e.preventDefault();
    setLoading(true);
    const form = { name, email, message };
    const validationError = validate(form);
    if (validationError) {
      setAlert(validationError);
      setLoading(false);
      return;
    }
    const data = await api.contact(form);
    if (data?.message === 'Message sent successfully!') {
      setLoading(false);
      resetForm();
      router.push('/contato/sucesso');
    } else {
      setAlert('Ocorreu um erro no envio do formulário, tente novamente.');
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
            <Form.Label htmlFor='name' text='Nome' />
            <Form.Input
              loading={loading}
              value={name}
              editValue={(e) => setName(e.target.value)}
              required={true}
              name='name'
            />
          </Grid.Row>
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
        </Grid.Col2>
        <Grid.Row>
          <Form.Label htmlFor='message' text='Mensagem' />
          <Form.TextArea
            loading={loading}
            value={message}
            editValue={(e) => setMessage(e.target.value)}
            required={true}
            name='message'
          />
        </Grid.Row>
        <div className='w-full text-center'>
          <Button type='submit' loading={loading} text='Enviar' />
        </div>
      </form>
    </>
  );
};

export default ContactForm;
