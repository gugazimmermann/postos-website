const Hero = () => {
  return (
    <section className='container mx-auto mt-[122px]'>
      <div className="relative overflow-hidden bg-scroll bg-top bg-no-repeat bg-[url('/images/home/hero.png')] h-[500px]" />
      <div className='-mt-[135px] mx-6 py-10 block rounded-3xl shadow-xl bg-amber-500 backdrop-blur-3xl'>
        <div className='text-slate-800 text-3xl font-bold text-center leading-snug'>
          <h2>Sistema para Gerenciamento de</h2>
          <h2 className='text-slate-50 text-6xl py-4'>Frotas</h2>
          <h2>para Postos de Combustíveis</h2>
        </div>
      </div>
    </section>
  );
};

export default Hero;
