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
    <section className='container my-8 space-y-4 md:space-y-8 text-slate-800'>
      <div className='w-full'>
        <h2 className='text-3xl font-bold sm:text-4xl'>O Que Oferecemos</h2>
        <p className='mt-4 text-slate-500'>
          A {process.env.NEXT_PUBLIC_TITLE} oferece um sistema altamente especializado para o
          controle de abastecimentos de veículos de frota em postos de combustíveis.
          Diferenciando-se de sistemas genéricos, não nos envolvemos em funções como controle de
          estoque ou aspectos fiscais.
        </p>
      </div>

      <div className='mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3'>
        <WhatWeDoCard
          image='/images/what-we-do/facial_recognition.png'
          title='Segurança Aprimorada'
          text='No momento do abastecimento, priorizamos a segurança. Os motoristas têm a opção de utilizar o Reconhecimento Facial ou a Assinatura Digital, garantindo um processo altamente seguro e confiável.'
        />

        <WhatWeDoCard
          image='/images/what-we-do/email.png'
          title='Transparência em Tempo Real'
          text='A cada abastecimento realizado, nosso sistema notifica imediatamente o cliente. Através de e-mails em tempo real, fornecemos informações detalhadas sobre o abastecimento, incluindo dados do veículo, motorista, posto, valor e quantidade abastecida.'
        />

        <WhatWeDoCard
          image='/images/what-we-do/invoice.png'
          title='Agilidade e Controle Simplificado'
          text='Simplifique o processo de gerenciamento. Receba notificações automáticas sobre datas de fechamento de faturas para cada cliente. Com alguns cliques, tenha controle total e visualize o status dos pagamentos.'
        />

        <WhatWeDoCard
          image='/images/what-we-do/clients.png'
          title='Gestão de Clientes Aperfeiçoada'
          text='Tenha o controle sobre os seus clientes frotistas enquanto oferece maior autonomia a eles. Lembre-se de que os dados de cadastro de veículos e motoristas são de responsabilidade do cliente, não do posto.'
        />

        <WhatWeDoCard
          image='/images/what-we-do/vehicles.png'
          title='Detalhes de Veículos Precisos'
          text='Além das informações básicas, nosso sistema exibe detalhes como marca, modelo e ano de cada veículo. Isso inclui a capacidade de verificar quais tipos de combustíveis podem ser usados em postos específicos.'
        />

        <WhatWeDoCard
          image='/images/what-we-do/drivers.png'
          title='Verificação de Motoristas Simplificada'
          text='Está autorizado? Nossos recursos permitem verificar se um motorista tem permissão para abastecer em determinado posto ou acesso a um produto específico.'
        />
      </div>
    </section>
  );
};

export default WhatWeDo;
