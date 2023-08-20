const envAppDescription =
  process.env.NEXT_PUBLIC_DESCRIPTION ||
  'Sistema para Gerenciamento de Frotas para Postos de Combustíveis';
const appDescription = envAppDescription.split(' Frotas ');

const AppDescription = ({ inverted }) => {
  return (
    <strong>
      {appDescription[0]}{' '}
      <span className={`${!inverted ? 'text-amber-500' : 'text-white'}`}>Frotas</span>{' '}
      {appDescription[1]}
    </strong>
  );
};

export default AppDescription;
