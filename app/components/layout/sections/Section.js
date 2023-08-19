const Section = ({ children }) => {
  return (
    <section className='bg-white container flex flex-col p-4 mt-32 md:mt-20 rounded-xl'>
      {children}
    </section>
  );
};

export default Section;
