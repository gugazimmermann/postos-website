import Image from 'next/image';
import sharedMetadata from '../shared-metadata';
import {
  Section,
  SectionTitle,
  SectionSubTitle,
  SectionParagraph,
} from '../components/layout/sections';

export const metadata = {
  ...sharedMetadata,
  title: `Para os Postos | ${sharedMetadata.title}`,
  description: `Informações para os postos e organizações no ${sharedMetadata.title}`,
  alternates: {
    canonical: `${sharedMetadata.alternates.canonical}/postos`,
  },
  keywords: [...sharedMetadata.keywords],
};

export default function GasStations() {
  return (
    <Section>
      <SectionTitle title='Para os' word='Postos' />
      <div className='w-full mt-4'>
        <Image
          src='/images/gasstation1.svg'
          width={0}
          height={0}
          className='w-1/4 float-left mr-4'
          alt='gasstation'
        />
        <SectionSubTitle>Centralização e Controle Múltiplo</SectionSubTitle>
        <SectionParagraph>
          Seja você um dono individual de um posto ou parte de uma vasta rede de postos de
          combustíveis, o Touch Sistemas está pronto para atendê-lo. Aqui, a organização pode
          registrar e gerir múltiplos postos de combustíveis com facilidade. E não paramos por aí -
          cada posto pode ter inúmeros clientes. E, por sua vez, esses clientes podem ter vários
          veículos e motoristas associados.
        </SectionParagraph>
      </div>
      <div className='w-full mt-4'>
        <Image
          src='/images/gasstation2.svg'
          width={0}
          height={0}
          className='w-1/4 float-right ml-4'
          alt='gasstation'
        />
        <SectionSubTitle>Flexibilidade para Postos e Clientes</SectionSubTitle>
        <SectionParagraph>
          Nosso sistema é construído sobre a base da flexibilidade. Um posto pode convidar um
          cliente a se juntar ao Touch Sistemas. E esse cliente? Bem, ele tem a liberdade de usar
          nosso sistema em diferentes postos, independentemente de sua filiação.
        </SectionParagraph>
      </div>
      <div className='w-full mt-4'>
        <Image
          src='/images/gasstation3.svg'
          width={0}
          height={0}
          className='w-1/4 float-left mr-4'
          alt='gasstation'
        />
        <SectionSubTitle>Personalização e Configuração</SectionSubTitle>
        <SectionParagraph>
          Quando um posto se junta a nós, ele tem a capacidade de personalizar seu perfil. Desde
          cadastrar os métodos de verificação, como Reconhecimento Facial, Biometria e Assinatura
          Digital, até definir o que oferecem - seja gasolina, produtos específicos por categoria ou
          serviços diversos. Além disso, o posto tem a capacidade de definir configurações de
          faturamento para seus clientes, personalizando experiências para cada cliente.
        </SectionParagraph>
      </div>
      <div className='w-full mt-4'>
        <Image
          src='/images/gasstation4.svg'
          width={0}
          height={0}
          className='w-1/4 float-right ml-4'
          alt='gasstation'
        />
        <SectionSubTitle>Gestão Detalhada para Clientes</SectionSubTitle>
        <SectionParagraph>
          O cliente, ao aceitar o convite, entra em um ambiente onde pode gerir seus veículos,
          definindo restrições como tipo de combustível ou monitoramento de quilometragem. Além
          disso, o cliente tem o poder de associar motoristas específicos a veículos específicos,
          definir os métodos de assinatura que o motorista usará e quais produtos e serviços o
          motorista tem acesso.
        </SectionParagraph>
      </div>
      <div className='w-full mt-4'>
        <Image
          src='/images/gasstation5.svg'
          width={0}
          height={0}
          className='w-1/4 float-left mr-4'
          alt='gasstation'
        />
        <SectionSubTitle>O Processo de Abastecimento</SectionSubTitle>
        <SectionParagraph>
          Quando o motorista visita um posto de gasolina, o processo é simplificado. O atendente do
          posto verifica a autorização do motorista, realiza verificações de restrições do veículo e
          garante que todas as operações estejam em conformidade com as diretrizes definidas. Uma
          vez que tudo é verificado e o abastecimento é concluído, o cliente é notificado em tempo
          real com todos os detalhes do abastecimento.
        </SectionParagraph>
      </div>
      <div className='w-full mt-4'>
        <Image
          src='/images/gasstation6.svg'
          width={0}
          height={0}
          className='w-1/4 float-right ml-4'
          alt='gasstation'
        />
        <SectionSubTitle>Registro e Faturamento</SectionSubTitle>
        <SectionParagraph>
          Cada abastecimento é meticulosamente registrado em nosso sistema, pronto para consultas
          futuras e processos de faturamento, se aplicável. Assim, você tem total controle sobre
          todas as transações e históricos.
        </SectionParagraph>
      </div>
    </Section>
  );
}
