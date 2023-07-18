const Section = ({ children }) => {
  return (
    <section className='bg-white shadow-md rounded-xl w-full max-w-6xl m-auto p-4 flex flex-col mt-32 md:mt-24 mx-4 md:mx-0'>
      {children}
    </section>
  );
};

export default Section;
