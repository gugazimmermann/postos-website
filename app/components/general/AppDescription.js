const envAppDescription =
  process.env.NEXT_PUBLIC_DESCRIPTION ||
  'Sistema para Gerenciamento de Frotas para Postos de Combustíveis';
const appDescription = envAppDescription.split(' Frotas ');

const AppDescription = () => {
  return (
    <strong>
      {appDescription[0]}{' '}
      <span className='text-amber-500'>Frotas</span>{' '}
      {appDescription[1]}
    </strong>
  );
};

export default AppDescription;
