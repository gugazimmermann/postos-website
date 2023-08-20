const Paragraph = ({ white, children }) => {
  return <p className={`mb-4 leading-relaxed ${!white ? 'text-slate-600' : 'text-white'}`}>{children}</p>;
};

export default Paragraph;
