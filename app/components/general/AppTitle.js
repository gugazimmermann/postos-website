const envAppTitle = process.env.NEXT_PUBLIC_TITLE || "Touch Sistemas - Postos";
const appTitle = envAppTitle.split(' - ');

const AppTitle = () => {
  return <strong>{appTitle[0]} - <span className="text-amber-500">{appTitle[1]}</span></strong>;
};

export default AppTitle;
