const Title = ({ text, white }) => {
  return (
    <h2
      className={`mb-4 text-4xl font-bold text-center ${!white ? 'text-slate-800' : 'text-white'}`}
    >
      {text}
    </h2>
  );
};

export default Title;
