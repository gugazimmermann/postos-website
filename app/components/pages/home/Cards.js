import Image from 'next/image';

const Card = ({ image, title, text }) => {
  return (
    <div className='flex items-start gap-4 shadow-xl rounded-xl p-4 bg-slate-50'>
      <div className='flex flex-col gap-2'>
        <div className='flex flex-row justify-start items-center'>
          <Image src={image} width={0} height={0} className='w-16 float-right mr-4' alt={title} />
          <h2 className='text-lg font-bold'>{title}</h2>
        </div>
        <p className='mt-1 text-sm text-slate-600 leading-relaxed'>{text}</p>
      </div>
    </div>
  );
};

const Cards = () => {
  return (
    <section className='container mt-4 px-4 lg:px-16 grid gap-8 lg:gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
      <Card
        image='images/home/cards/facial_recognition.png'
        title='Segurança Aprimorada'
        text='Durante o abastecimento, destacamos a segurança como prioridade. Oferecemos opções modernas de Reconhecimento Facial, Biometria e Assinatura Digital, proporcionando um processo robusto e confiável.'
      />
      <Card
        image='images/home/cards/email.png'
        title='Notificações Instantâneas'
        text='A cada abastecimento, informamos o cliente em tempo real. Notificações e e-mails detalhados fornecem todas as informações pertinentes, incluindo veículo, motorista, posto e dados de abastecimento.'
      />
      <Card
        image='images/home/cards/invoice.png'
        title='Gerenciamento Ágil e Descomplicado'
        text='Nosso sistema facilita a gestão. Receba alertas automáticos sobre fechamentos de fatura e, com apenas alguns cliques, mantenha-se atualizado sobre o status dos pagamentos'
      />
      <Card
        image='images/home/cards/clients.png'
        title='Gestão de Clientes Evoluída'
        text='Gerencie seus clientes frotistas com eficiência e ofereça a eles a autonomia necessária. O cadastro de veículos e motoristas é simplificado e mantido pelos próprios clientes, otimizando seu processo.'
      />
      <Card
        image='images/home/cards/vehicles.png'
        title='Informações dos Veículos'
        text='Nosso sistema não só fornece a placa, mas também detalha marca, modelo e ano dos veículos, incluindo a capacidade de verificar restrição de combustíveis para cada veículo em postos específicos.'
      />
      <Card
        image='images/home/cards/drivers.png'
        title='Facilidade para Motoristas'
        text='Aplicativo para verificar as rotas pra chegar nos postos autorizados, os combustíveis autorizados para o veículo utilizado, e até os produtos que ele tem acesso no posto.'
      />
    </section>
  );
};

export default Cards;
