const ParallaxWhatWeDo = () => {
  return (
    <div className='w-full bg-slate-50 rounded-3xl p-4 text-center my-16 shadow-xl'>
      <h2 className='text-3xl font-bold text-slate-800'>O Que Oferecemos</h2>
      <p className='mt-4 text-slate-800 font-semibold'>
        O <strong>{process.env.NEXT_PUBLIC_TITLE}</strong> é um{' '}
        <strong>{process.env.NEXT_PUBLIC_DESCRIPTION}</strong>, nossa essência reside no controle
        apurado dos abastecimentos de veículos de frotas. Afinamos cada detalhe, desde a
        autenticação dos abastecimentos, acompanhamento de faturamento, controle granular,
        notificações em tempo real, relatórios detalhados, passando por agendamento de serviços até
        promoções personalizadas.
      </p>
    </div>
  );
};

export default ParallaxWhatWeDo;
