const ParallaxItems = () => {
  const Item = ({ text }) => {
    return (
      <div className='text-center font-bold bg-white bg-opacity-90 text-slate-800 rounded-full shadow-xl'>
        {text}
      </div>
    );
  };

  return (
    <div className='relative w-full grid grid-cols-1 md:grid-cols-3 px-8 sm:14 gap-4'>
    <Item text='⛽️ Controle de Abastecimentos' />
    <Item text='🛒 Abastecimentos com Produtos' />
    <Item text='💵 Controle de Faturamentos' />
    <Item text='📅 Agendamentos de Serviços' />
    <Item text='🎉 Promoções Personalizadas' />
    <Item text='📈 Relatórios e Gráficos' />
    <Item text='🌐 Controle de Rede' />
    <Item text='⚙️ Totalmente Granular' />
    <Item text='🤝 Total liberdade para o Cliente' />
  </div>
  );
};

export default ParallaxItems;
