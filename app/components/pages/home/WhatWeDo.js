import Image from 'next/image';

const WhatWeDo = () => {
  return (
    <section className='container my-8 space-y-4 md:space-y-8 text-slate-800'>
      <div className='w-full'>
        <h2 className='text-3xl font-bold sm:text-4xl'>O que oferecemos</h2>
        <p className='mt-4 text-slate-500'>
          A {process.env.NEXT_PUBLIC_TITLE} não é um sistema para o controle geral dos postos. Não
          fazemos controle de estoque, controle fiscal, etc.
        </p>
      </div>

      <div className='mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3'>
        <div className='flex items-start gap-4'>
          <Image
            priority
            src='/images/what-we-do/facial_recognition.png'
            width={0}
            height={0}
            className='w-16 float-right mr-4'
            alt='Segurança'
          />
          <div>
            <h2 className='text-lg font-bold'>Segurança</h2>
            <p className='mt-1 text-sm text-slate-500'>
              No momento do abastecimento o motorista pode assinar com Reconhecimento Facial ou com
              Assinatura Digital, deixando o processo muito mais seguro e confiável.
            </p>
          </div>
        </div>

        <div className='flex items-start gap-4'>
          <Image
            priority
            src='/images/what-we-do/email.png'
            width={0}
            height={0}
            className='w-16 float-right mr-4'
            alt='Transparência'
          />
          <div>
            <h2 className='text-lg font-bold'>Transparência</h2>
            <p className='mt-1 text-sm text-slate-500'>
              Em cada abastecimento realizado o cliente recebe em tempo real um email informando
              sobre o abastecimento realizado, com os dados do abastecimento, do posto, do veículo e
              do motorista.
            </p>
          </div>
        </div>

        <div className='flex items-start gap-4'>
          <Image
            priority
            src='/images/what-we-do/invoice.png'
            width={0}
            height={0}
            className='w-16 float-right mr-4'
            alt='Agilidade'
          />
          <div>
            <h2 className='text-lg font-bold'>Agilidade</h2>
            <p className='mt-1 text-sm text-slate-500'>
              Receba notificações sobre as datas automatizadas de fechamento das faturas para cada
              clientes, controle tudo com simples cliques no sistema, e visualize os status dos
              pagamentos.
            </p>
          </div>
        </div>

        <div className='flex items-start gap-4'>
          <Image
            priority
            src='/images/what-we-do/clients.png'
            width={0}
            height={0}
            className='w-16 float-right mr-4'
            alt='Clientes'
          />
          <div>
            <h2 className='text-lg font-bold'>Clientes</h2>
            <p className='mt-1 text-sm text-slate-500'>
              Tenha controle sobre os seus clientes frotistas. E de controle aos seus clientes. O
              dados de cadastros de veículos e motoristas é responsabilidade do cliente, não do
              posto.
            </p>
          </div>
        </div>

        <div className='flex items-start gap-4'>
          <Image
            priority
            src='/images/what-we-do/vehicles.png'
            width={0}
            height={0}
            className='w-16 float-right mr-4'
            alt='Veículos'
          />
          <div>
            <h2 className='text-lg font-bold'>Veículos</h2>
            <p className='mt-1 text-sm text-slate-500'>
              Saiba além da placa, a marca, modelo e ano de cada veículo. Ou se aquele veículo pode
              abastecer com determinado combustível no posto específico.
            </p>
          </div>
        </div>

        <div className='flex items-start gap-4'>
          <Image
            priority
            src='/images/what-we-do/drivers.png'
            width={0}
            height={0}
            className='w-16 float-right mr-4'
            alt='Motoristas'
          />
          <div>
            <h2 className='text-lg font-bold'>Motoristas</h2>
            <p className='mt-1 text-sm text-slate-500'>
              O motorista é autorizado a abastecer naquele posto? Ou aquela placa? Tem autorizado
              aquele determinado produto para faturar?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
