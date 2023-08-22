'use client';

import { useEffect, useState } from 'react';
import { Arrow, Loading } from '../../icons';
import { Alert } from '../../helpers';
import { AppTitle } from '../../general';

const SuccessText = ({ code, name, login, email, fetchError }) => {
  const [alert, setAlert] = useState();

  useEffect(() => {
    if (fetchError) setAlert('Ocorreu um erro, tente atualizar a página!');
  }, [fetchError]);

  const AccessButton = ({ code }) => {
    return (
      <a
        className='text-amber-500 hover:underline hover:cursor-pointer text-lg justify-center md:justify-start inline-flex items-center'
        href={`${process.env.NEXT_PUBLIC_APP_URL}/${code}`}
        target='_blank'
        rel='noopener noreferrer'
      >
        <span className='mr-2'>Acessar</span><AppTitle />
        <Arrow />
      </a>
    );
  };

  const renderText = (text) => {
    if (text) {
      return <span className='font-bold'>{text}</span>;
    }
    return <Loading className='text-amber-500' />;
  };

  return (
    <div className='flex flex-col justify-center text-center md:text-left gap-4 w-full'>
      <h1 className='text-3xl font-bold text-slate-800'>Cadastro Concluído</h1>
      {alert ? (
        <Alert type='error' text={alert} />
      ) : (
        <>
          <p className='text-lg text-slate-600 inline'>
            {renderText(name)}, seu cadastro foi concluído com sucesso e seus dados foram enviados
            para {renderText(email)}.
          </p>
          <p className='text-lg text-slate-600 inline'>
            Para acessar o sistema, utilize os dados abaixo:
          </p>
          <p className='text-lg text-slate-600 inline'>Código da Organização: {renderText(code)}</p>
          <p className='text-lg text-slate-600 inline'>Usuário: {renderText(login)}</p>
        </>
      )}
      {code && <AccessButton code={code} />}
    </div>
  );
};

export default SuccessText;
