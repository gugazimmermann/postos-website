export const Title = ({ text }) => {
  return <h2 className='mb-4 text-4xl font-bold text-slate-800 text-center'>{text}</h2>;
};

export const SubTitle = ({ text }) => {
  return <h2 className='text-3xl font-bold text-slate-800 text-center'>{text}</h2>;
};

export const Paragraph = ({ children }) => {
  return <p className='mb-4 text-slate-600 leading-relaxed'>{children}</p>;
};
