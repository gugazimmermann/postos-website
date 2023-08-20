const envAppTitle = process.env.NEXT_PUBLIC_TITLE || 'Touch Sistemas - Postos';
const appTitle = envAppTitle.split(' - ');

const AppTitle = ({ inverted }) => {
  return (
    <strong>
      {appTitle[0]} -{' '}
      <span className={`${!inverted ? 'text-amber-500' : 'text-white'}`}>{appTitle[1]}</span>
    </strong>
  );
};

export default AppTitle;
