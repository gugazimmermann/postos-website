import sharedMetadata from '../shared-metadata';
import {
  Section,
} from '../components/layout/sections';
import Organizations from './Organizations';
import Companies from './Companies';
import CompaniesConfig from './CompaniesConfig';

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
      <h2 className='text-2xl text-center font-bold text-slate-800 md:text-3xl m-6'>
        Para os<span className='text-amber-500 ml-2'>Postos</span>
      </h2>
      <Organizations />
      <Companies />
      <CompaniesConfig />
      {/* <div className='w-full mt-4'>
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
      </div> */}
    </Section>
  );
}
