import Image from 'next/image';

const WhatWeDoCard = ({ image, title, text }) => {
  return (
    <div className='flex items-start gap-4 shadow-lg rounded-lg p-4 bg-slate-50'>
      <Image src={image} width={0} height={0} className='w-16 float-right mr-4' alt={title} />
      <div>
        <h2 className='text-lg font-bold'>{title}</h2>
        <p className='mt-1 text-sm text-slate-500'>{text}</p>
      </div>
    </div>
  );
};

const WhatWeDo = () => {
  return (
    <section className='container my-4 space-y-4 text-slate-800'>
      <div className='w-full'>
        <h2 className='text-center md:text-left text-3xl font-bold'>O Que Oferecemos</h2>
        <p className='mt-4 text-center md:text-left text-slate-500'>
          A {process.env.NEXT_PUBLIC_TITLE} é especialista em oferecer soluções focadas no controle
          de abastecimentos de veículos de frotas em postos de combustíveis. Concentramo-nos no que
          fazemos de melhor, permitindo que sua operação de abastecimento seja otimizada sem as
          complexidades adicionais de gestão de notas fiscais, estoque ou impostos.
        </p>
      </div>
      <div className='mt-4 grid gap-4 grid-cols-3'>
        <WhatWeDoCard
          image='/images/what-we-do/facial_recognition.png'
          title='Segurança Aprimorada'
          text='Durante o abastecimento, destacamos a segurança como prioridade. Oferecemos opções modernas de Reconhecimento Facial, Biometria e Assinatura Digital, proporcionando um processo robusto e confiável.'
        />
        <WhatWeDoCard
          image='/images/what-we-do/email.png'
          title='Notificações Instantâneas'
          text='A cada abastecimento, informamos o cliente em tempo real. E-mails detalhados fornecem todas as informações pertinentes, incluindo veículo, motorista, posto e dados de abastecimento.'
        />

        <WhatWeDoCard
          image='/images/what-we-do/invoice.png'
          title='Gerenciamento Ágil e Descomplicado'
          text='Nosso sistema facilita a gestão. Receba alertas automáticos sobre fechamentos de fatura e, com apenas alguns cliques, mantenha-se atualizado sobre o status dos pagamentos'
        />

        <WhatWeDoCard
          image='/images/what-we-do/clients.png'
          title='Gestão de Clientes Evoluída'
          text='Gerencie seus clientes frotistas com eficiência e ofereça a eles a autonomia necessária. O cadastro de veículos e motoristas é simplificado e mantido pelos próprios clientes, otimizando seu processo.'
        />

        <WhatWeDoCard
          image='/images/what-we-do/vehicles.png'
          title='Informações Detalhadas de Veículos'
          text='Nosso sistema não só fornece dados básicos, mas também detalha marca, modelo e ano dos veículos, incluindo a capacidade de verificar compatibilidade de combustíveis para cada veículo em postos específicos.'
        />

        <WhatWeDoCard
          image='/images/what-we-do/drivers.png'
          title='Verificação Simplificada de Motoristas'
          text='Nosso sistema possibilita a rápida verificação da autorização de um motorista para abastecer em determinados postos ou para ter acesso a produtos específicos.'
        />
      </div>
    </section>
  );
};

export default WhatWeDo;
