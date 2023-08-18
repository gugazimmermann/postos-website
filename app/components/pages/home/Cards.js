import Image from 'next/image';

const Card = ({ image, title, text }) => {
  return (
    <div className='flex items-start gap-4 shadow-xl rounded-lg p-4 bg-slate-50'>
      <Image src={image} width={0} height={0} className='w-16 float-right mr-4' alt={title} />
      <div>
        <h2 className='text-lg font-bold'>{title}</h2>
        <p className='mt-1 text-sm text-slate-500'>{text}</p>
      </div>
    </div>
  );
};

const Cards = () => {
  return (
    <section className='container mt-4 px-4 md:px-16 grid gap-8 md:gap-4 grid-cols-1 md:grid-cols-3'>
      <Card
        image='/images/what-we-do/facial_recognition.png'
        title='Segurança Aprimorada'
        text='Durante o abastecimento, destacamos a segurança como prioridade. Oferecemos opções modernas de Reconhecimento Facial, Biometria e Assinatura Digital, proporcionando um processo robusto e confiável.'
      />
      <Card
        image='/images/what-we-do/email.png'
        title='Notificações Instantâneas'
        text='A cada abastecimento, informamos o cliente em tempo real. E-mails detalhados fornecem todas as informações pertinentes, incluindo veículo, motorista, posto e dados de abastecimento.'
      />

      <Card
        image='/images/what-we-do/invoice.png'
        title='Gerenciamento Ágil e Descomplicado'
        text='Nosso sistema facilita a gestão. Receba alertas automáticos sobre fechamentos de fatura e, com apenas alguns cliques, mantenha-se atualizado sobre o status dos pagamentos'
      />

      <Card
        image='/images/what-we-do/clients.png'
        title='Gestão de Clientes Evoluída'
        text='Gerencie seus clientes frotistas com eficiência e ofereça a eles a autonomia necessária. O cadastro de veículos e motoristas é simplificado e mantido pelos próprios clientes, otimizando seu processo.'
      />

      <Card
        image='/images/what-we-do/vehicles.png'
        title='Informações Detalhadas de Veículos'
        text='Nosso sistema não só fornece dados básicos, mas também detalha marca, modelo e ano dos veículos, incluindo a capacidade de verificar compatibilidade de combustíveis para cada veículo em postos específicos.'
      />

      <Card
        image='/images/what-we-do/drivers.png'
        title='Verificação Simplificada de Motoristas'
        text='Nosso sistema possibilita a rápida verificação da autorização de um motorista para abastecer em determinados postos ou para ter acesso a produtos específicos.'
      />
    </section>
  );
};

export default Cards;
