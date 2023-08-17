const Parallax = () => {
  const Item = ({ text }) => {
    return <div className='text-slate-50 text-center font-bold'>{text}</div>;
  };

  const Divider = () => <hr className='my-4' />;

  return (
    <section className='relative w-full'>
      <div
        className='absolute top-0 left-0 w-full h-full bg-cover bg-fixed bg-center'
        style={{
          backgroundImage: `url('https://t3.ftcdn.net/jpg/05/42/17/70/360_F_542177036_v12rYhGPt06ZrbVyLHenryRtsHc6r2S5.jpg')`,
        }}
      ></div>
      <div className='absolute top-0 left-0 w-full h-full bg-amber-800 opacity-50'></div>
      <div className='relative flex flex-col justify-center items-center h-full'>
        <h1 className='text-slate-50 text-3xl md:text-5xl text-center font-semibold mt-10 md:mt-20 md:mb-10'>
          {process.env.NEXT_PUBLIC_TITLE}
        </h1>
        <div className='my-20 w-full flex flex-row justify-evenly items-center'>
        <div>
            <Item text='Controle de Abastecimentos' />
            <Divider />
            <Item text='Abastecimentos com Produtos' />
            <Divider />
            <Item text='Controle de Faturamentos' />
          </div>
          <div>
            <Item text='Agendamentos de Serviços' />
            <Divider />
            <Item text='Promoções Personalizadas' />
            <Divider />
            <Item text='Relatórios e Gráficos' />
          </div>
          <div>
            <Item text='Controle de Rede' />
            <Divider />
            <Item text='Totalmente Granular' />
            <Divider />
            <Item text='Total liberdade para o Cliente' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Parallax;
