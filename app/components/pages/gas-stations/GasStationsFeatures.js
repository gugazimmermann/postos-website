'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Paragraph, Title } from '../../general';

const GasStationsFeaturesCard = ({
  title,
  ImageHref,
  buttonHref,
  categories,
  showCard,
  className,
}) => {
  return (
    <div className={`${categories.includes(showCard) ? `block ${className}` : 'hidden'} `}>
      <div className='h-full flex flex-col justify-between'>
        <div className='overflow-hidden p-1 rounded-xl bg-slate-500'>
          <Image
            src={ImageHref}
            width={0}
            height={0}
            className='w-full rounded-xl'
            alt={categories.join(', ')}
          />
        </div>
        <div className='relative z-10 px-2 -mt-14 text-center bg-slate-100 rounded-xl shadow-xl mx-4 py-4'>
          <h3 className='mb-4 font-bold text-dark'>{title}</h3>
          <a
            href={buttonHref}
            className='py-2 text-sm font-semibold border border-slate-500 bg-white rounded-md px-6 text-slate-800 hover:bg-amber-500 hover:text-white'
          >
            Saiba Mais
          </a>
        </div>
      </div>
    </div>
  );
};

const GasStationsFeaturesButton = ({ title, feature, handleProject, showCard }) => {
  return (
    <li className='mb-1'>
      <button
        onClick={() => handleProject(feature)}
        className={`rounded-xl text-center font-semibold transition py-2 px-6 ${
          showCard === feature ? 'bg-amber-500 text-white' : 'text-slate-800'
        }`}
      >
        {title}
      </button>
    </li>
  );
};

const GasStationsFeaturesButtonsRow = ({ handleProject, showCard }) => {
  return (
    <div className='w-full px-4'>
      <ul className='flex flex-wrap justify-center mb-4 space-x-1'>
        <GasStationsFeaturesButton
          title='Postos'
          feature='postos'
          handleProject={handleProject}
          showCard={showCard}
        />
        <GasStationsFeaturesButton
          title='Abastecimentos e Pagamentos'
          feature='abastecimentos'
          handleProject={handleProject}
          showCard={showCard}
        />
        <GasStationsFeaturesButton
          title='Clientes'
          feature='clientes'
          handleProject={handleProject}
          showCard={showCard}
        />
      </ul>
    </div>
  );
};

const GasStationsFeatures = () => {
  const [showCard, setShowCard] = useState('postos');

  const handleProject = (category) => {
    setShowCard(category);
  };

  return (
    <div className='mt-4'>
      <div className='mx-auto mb-8 md:mb-4 sm:px-32 text-center'>
        <Title text='Maximize a Eficiência com o' />
        <Title text='Touch Postos' />
        <Paragraph>
          Conheça algumas de nossas funcionalidades que transformarão seu posto em um modelo de
          eficiência, inovação e satisfação do cliente.
        </Paragraph>
      </div>
      <div className='hidden sm:w-full sm:flex sm:flex-wrap sm:justify-center'>
        <GasStationsFeaturesButtonsRow handleProject={handleProject} showCard={showCard} />
      </div>
      <div className='hidden sm:grid md:grid-cols-5 2xl:grid-cols-6 sm:gap-8'>
        <GasStationsFeaturesCard
          title='Centralização de Postos'
          ImageHref='/images/gas-stations/controle.webp'
          buttonHref='#Centralizacao'
          categories={['postos']}
          showCard={showCard}
        />
        <GasStationsFeaturesCard
          title='Configurações Simples'
          ImageHref='/images/gas-stations/configuracoes.webp'
          buttonHref='#ConfiguracoesSimples'
          categories={['postos']}
          showCard={showCard}
        />
        <GasStationsFeaturesCard
          title='Cadastro Ágil e Direto'
          ImageHref='/images/gas-stations/convite.webp'
          buttonHref='#Clientes'
          categories={['clientes']}
          showCard={showCard}
        />
        <GasStationsFeaturesCard
          title='Múltiplos Postos'
          ImageHref='/images/gas-stations/multiplos.webp'
          buttonHref='#Clientes'
          categories={['clientes']}
          showCard={showCard}
        />
        <GasStationsFeaturesCard
          title='Dashboard Completo'
          ImageHref='/images/gas-stations/dashboard.webp'
          buttonHref='#RelatorioGraficos'
          categories={['postos', 'clientes']}
          showCard={showCard}
          className='hidden 2xl:flex'
        />
        <GasStationsFeaturesCard
          title='Relatórios e Gráficos'
          ImageHref='/images/gas-stations/relatorios.webp'
          buttonHref='#RelatorioGraficos'
          categories={['postos', 'clientes']}
          showCard={showCard}
        />
        <GasStationsFeaturesCard
          title='Tela de Caixa Moderna'
          ImageHref='/images/gas-stations/abastecimentos.webp'
          buttonHref='#Caixa'
          categories={['abastecimentos']}
          showCard={showCard}
        />
        <GasStationsFeaturesCard
          title='Abastecimentos Seguros'
          ImageHref='/images/gas-stations/seguranca.webp'
          buttonHref='#Caixa'
          categories={['abastecimentos']}
          showCard={showCard}
        />
        <GasStationsFeaturesCard
          title='Integrações com as Bombas'
          ImageHref='/images/gas-stations/integracao.webp'
          buttonHref='#Caixa'
          categories={['abastecimentos']}
          showCard={showCard}
        />
        <GasStationsFeaturesCard
          title='Notificações Instantâneas'
          ImageHref='/images/gas-stations/transparencia.webp'
          buttonHref='#Caixa'
          categories={['abastecimentos']}
          showCard={showCard}
        />
        <GasStationsFeaturesCard
          title='Faturamentos Automatizados'
          ImageHref='/images/gas-stations/faturamentos.webp'
          buttonHref='#Faturamentos'
          categories={['abastecimentos']}
          showCard={showCard}
        />
        <GasStationsFeaturesCard
          title='Detalhes dos Pagamentos'
          ImageHref='/images/gas-stations/pagamentos.webp'
          buttonHref='#Faturamentos'
          categories={['abastecimentos']}
          showCard={showCard}
          className='hidden 2xl:flex'
        />
        <GasStationsFeaturesCard
          title='Veículos e Motoristas'
          ImageHref='/images/gas-stations/veiculos.webp'
          buttonHref='#Clientes'
          categories={['clientes']}
          showCard={showCard}
        />
        <GasStationsFeaturesCard
          title='Restrições Sob Medida'
          ImageHref='/images/gas-stations/permissoes.webp'
          buttonHref='#Clientes'
          categories={['clientes']}
          showCard={showCard}
        />
        <GasStationsFeaturesCard
          title='Permissões de Produtos'
          ImageHref='/images/gas-stations/produtos.webp'
          buttonHref='#Clientes'
          categories={['clientes']}
          showCard={showCard}
        />
        <GasStationsFeaturesCard
          title='Aplicativo com Postos Autorizados'
          ImageHref='/images/gas-stations/dados.webp'
          buttonHref='#Clientes'
          categories={['clientes']}
          showCard={showCard}
        />
        <GasStationsFeaturesCard
          title='Agendamento de Serviços'
          ImageHref='/images/gas-stations/servicos.webp'
          buttonHref='#Agendamentos'
          categories={['postos', 'clientes']}
          showCard={showCard}
        />
        <GasStationsFeaturesCard
          title='Promoções Personalizadas'
          ImageHref='/images/gas-stations/promocoes.webp'
          buttonHref='#Promocoes'
          categories={['postos']}
          showCard={showCard}
        />
      </div>
    </div>
  );
};

export default GasStationsFeatures;
