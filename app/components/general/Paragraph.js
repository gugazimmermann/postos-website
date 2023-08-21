const Paragraph = ({ white, dark, center, children }) => {
  return (
    <p
      className={`mb-4 leading-relaxed ${
        white ? 'text-white' : dark ? 'text-slate-800 font-semibold' : 'text-slate-600'
      } ${center ? 'text-center' : ''}`}
    >
      {children}
    </p>
  );
};

export default Paragraph;
