'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { AppTitle } from '../../general';

const BackgroundBar = () => {
  return (
    <div className='absolute bottom-0 right-0 z-[-1]'>
      <svg
        width='1440'
        height='886'
        viewBox='0 0 1440 886'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          opacity='0.5'
          d='M193.307 -273.321L1480.87 1014.24L1121.85 1373.26C1121.85 1373.26 731.745 983.231 478.513 729.927C225.976 477.317 -165.714 85.6993 -165.714 85.6993L193.307 -273.321Z'
          fill='url(#paint0_linear)'
        />
        <defs>
          <linearGradient
            id='paint0_linear'
            x1='1308.65'
            y1='1142.58'
            x2='602.827'
            y2='-418.681'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#f59e0b' stopOpacity='0.36' />
            <stop offset='1' stopColor='#f59e0b' stopOpacity='0' />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

const GasStatiosCompaniesItem = ({ title, text, active, handleToggle }) => (
  <div
    className={`mb-4 w-full rounded-3xl border border-slate-300 bg-white px-4 sm:px-8 ${
      active ? 'h-auto' : 'h-[40px]'
    } overflow-hidden transition-height duration-300 ease-in-out`}
  >
    <button className='flex w-full text-left items-center' onClick={handleToggle}>
      <div className='mr-3 sm:mr-5 flex h-10 w-full max-w-[20px] sm:max-w-[40px] items-center justify-center text-slate-800'>
        <svg
          className={`duration-200 ease-in-out fill-slate-800 stroke-slate-800 ${
            active ? 'rotate-180' : ''
          }`}
          width='17'
          height='10'
          viewBox='0 0 17 10'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z' />
        </svg>
      </div>
      <h4 className='w-full sm:text-lg font-semibold text-slate-800'>{title}</h4>
    </button>
    <div className={`pl-[62px] duration-200 ease-in-out ${active ? 'block' : 'hidden'}`}>
      <p className='pb-4 text-base leading-relaxed text-slate-900'>{text}</p>
    </div>
  </div>
);

const GasStatiosCompanies = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const handleToggle = (index) => setActiveIndex(activeIndex === index ? null : index);

  const items = [
    {
      title: 'Cadastro Ágil e Direto',
      text: 'Para convidar, basta cadastrar o e-mail no Touch Sistemas - Postos. O convidado receberá uma notificação para se associar como cliente do posto (ou postos). Caso não possua cadastro, irá preencher um formulário rápido para ter acesso; se já estiver cadastrado, basta aceitar o convite, liberar seus veículos e motoristas para abastecerem no posto, e estará pronto para começar!',
    },
    {
      title: 'Múltiplos Postos',
      text: 'Não há necessidade de re-cadastrar veículos e motoristas. Uma vez registrados, estão aptos a serem utilizados em qualquer posto, independentemente da organização a que pertençam. O cliente pode configurar datas de faturamento, liberar produtos, e restringir veículos ou motoristas para cada posto de forma individual.',
    },
    {
      title: 'Dashboard, Relatórios e Gráficos',
      text: 'Com dashboard, relatórios e gráficos, centralizados ou por posto, veículo ou motorista, o cliente obtém um controle total sobre seus abastecimentos. Pode visualizar abastecimentos pendentes, pagamentos à espera de atualização e muito mais.',
    },
    {
      title: 'Veículos e Motoristas',
      text: 'Os dados dos veículos e motoristas são de responsabilidade do cliente, que também gerencia suas liberações e restrições. No Touch Sistemas - Postos, o cliente pode facilmente registrar, inativar ou liberar motoristas, autorizar postos e mais – tudo com apenas alguns cliques.',
    },
    {
      title: 'Restrições Sob Medida',
      text: 'Cada cliente sabe como quer gerenciar sua frota. Por isso, tem a liberdade de solicitar registro da quilometragem do veículo ao abastecer, limitar o tipo de combustível e determinar os horários em que os motoristas podem abastecer.',
    },
    {
      title: 'Permissões de Produtos',
      text: ' Reconhecemos que, em alguns casos, certos motoristas têm acesso a produtos específicos, enquanto outros não. Nosso sistema permite que o posto libere os produtos que julgar necessários para um cliente. Este, por sua vez, pode escolher quais deseja e, também, determinar quais motoristas têm permissão para cada produto.',
    },
    {
      title: 'Aplicativo com Postos Autorizado',
      text: 'Dispomos de um aplicativo simples e prático que auxilia os motoristas a localizar postos onde estão autorizados a abastecer, considerando tanto o veículo quanto sua própria permissão. Ao escolher um posto, o app exibe distância, rota, combustíveis e produtos autorizados, bem como possíveis agendamentos de serviço.',
    },
    {
      title: 'Agendamento de Serviços',
      text: 'O Touch Sistemas - Postos oferece uma ferramenta de agendamento que permite aos clientes marcar serviços com facilidade. Isso proporciona comodidade para o cliente e potencializa a fidelização ao posto. Notificações são enviadas por e-mail e pelo aplicativo. Alguns serviços, que dependem de peças e produtos específicos, aguardam confirmação.',
    },
  ];

  return (
    <div id='Clientes' className='relative z-20 overflow-hidden sm:mt-4'>
      <div className='flex flex-wrap my-8 px-8'>
        <div className='mx-auto text-center w-full'>
          <h2 className='mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px]'>
            Controle para o Cliente
          </h2>
          <p className='text-base text-body-color'>
            Vejo um pouco do que o cliente pode realizar utilizando o <AppTitle />, dê controle e
            responsabilidade total para seus clientes. Visite também nossa área{' '}
            <Link href='/clientes' className='font-bold underline hover:cursor-pointer'>
              Para os Frotistas
            </Link>.
          </p>
        </div>
      </div>
      <div className='w-full sm:flex flex-wrap mb-8'>
        {items.map((item, index) => (
          <div className='sm:w-1/2 px-4' key={index}>
            <GasStatiosCompaniesItem
              key={index}
              title={item.title}
              text={item.text}
              active={activeIndex === index}
              handleToggle={() => handleToggle(index)}
            />
          </div>
        ))}
      </div>
      <BackgroundBar />
    </div>
  );
};

export default GasStatiosCompanies;
