import Link from 'next/link';
import { Login, Register } from '../../icons';

const Access = () => {
  const LoginButton = () => {
    return (
      <a
        className='flex cursor-pointer text-slate-800 hover:text-amber-500 hover:font-bold transition-colors duration-300'
        href={process.env.REACT_APP_APP_URL}
        target='_blank'
        rel='noopener noreferrer'
      >
        <Login />
        Entrar
      </a>
    );
  };

  const RegisterButton = () => {
    return (
      <Link
        href='/cadastro'
        className='flex cursor-pointer text-slate-800 hover:text-amber-500 hover:font-bold transition-colors duration-300'
      >
        <Register />
        Cadastro
      </Link>
    );
  };

  return (
    <div className='items-center space-x-5 flex'>
      <RegisterButton />
      <LoginButton />
    </div>
  );
};

export default Access;
