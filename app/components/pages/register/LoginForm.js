'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { api } from '../../../utils';
import { masks } from '../../../utils';
import { Alert, Button, Form, Grid } from '../../helpers';

const LoginForm = ({ id, name, fetchError }) => {
  const router = useRouter();
  const [alert, setAlert] = useState();
  const [loading, setLoading] = useState(false);
  const [code, setCode] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const resetForm = () => {
    setCode('');
    setLogin('');
    setPassword('');
    setRepeatPassword('');
  };

  const validate = (form) => {
    if (!form.id) return 'Ocorreu um erro, tente acessar a página novamente!';
    if (!form.code || !form.login || !form.password || !form.repeatPassword)
      return 'Todos os campos são obrigatórios!';
    if (form.password?.code < 3) return 'Código deve ter mínimo de 3 caracteres!';
    if (form.password?.login < 3) return 'Usuário deve ter mínimo de 3 caracteres!';
    if (form.password?.length < 3) return 'Senha deve ter mínimo de 3 caracteres!';
    if (form.password !== form.repeatPassword) return 'Senhas são diferentes!';
    return false;
  };

  const handleSubmit = async (e) => {
    setAlert();
    e.preventDefault();
    setLoading(true);
    const form = { id, code, login, password, repeatPassword };
    const validationError = validate(form);
    if (validationError) {
      setAlert(validationError);
      setLoading(false);
      return;
    }
    const data = await api.saveOrganizationLogin(form);
    if (data?.id) {
      setLoading(false);
      resetForm();
      router.push(`/cadastro/codigo/${data.id}`);
    } else {
      if (data === 'Code is already registered.') {
        setAlert('Código da Organização já está cadastrado.');
      } else {
        setAlert('Ocorreu um erro no envio do formulário, tente novamente.');
      }
      setLoading(false);
      return;
    }
  };

  useEffect(() => setLoading(!name), [name]);

  useEffect(() => {
    if (fetchError) setAlert('Ocorreu um erro, tente atualizar a página!');
  }, [fetchError]);

  return (
    <>
      {alert && <Alert type='error' text={alert} />}
      <form onSubmit={(e) => handleSubmit(e)} className='mt-8 space-y-6'>
        <Grid.Col2>
          <Grid.Row>
            <Form.Label htmlFor='code' text='Código da Organização' />
            <Form.Input
              loading={loading}
              value={masks.code(code)}
              editValue={(e) => setCode(masks.code(e.target.value))}
              required={true}
              name='code'
            />
          </Grid.Row>
          <Grid.Row>
            <Form.Label htmlFor='login' text='Usuário' />
            <Form.Input
              loading={loading}
              value={login}
              editValue={(e) => setLogin(masks.code(e.target.value))}
              required={true}
              name='login'
            />
          </Grid.Row>
        </Grid.Col2>
        <Grid.Col2>
          <Grid.Row>
            <Form.Label htmlFor='password' text='Senha' />
            <Form.Input
              loading={loading}
              value={password}
              editValue={(e) => setPassword(e.target.value)}
              required={true}
              name='password'
              type='password'
            />
          </Grid.Row>
          <Grid.Row>
            <Form.Label htmlFor='repeatPassword' text='Repita a Senha' />
            <Form.Input
              loading={loading}
              value={repeatPassword}
              editValue={(e) => setRepeatPassword(e.target.value)}
              required={true}
              name='repeatPassword'
              type='password'
            />
          </Grid.Row>
        </Grid.Col2>
        <div className='w-full text-center'>
          <Button type='submit' loading={loading} text='Validar' />
        </div>
      </form>
    </>
  );
};

export default LoginForm;
