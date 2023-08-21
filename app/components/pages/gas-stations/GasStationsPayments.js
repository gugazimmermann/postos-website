import { Title, SubTitle, Paragraph, AppTitle } from '../../general';

const GasStationsPayments = () => {
  return (
    <div id='Faturamentos' className='w-full sm:flex sm:items-center sm:justify-between mt-8'>
      <div className='mt-4 sm:mt-0 sm:px-8 w-full'>
        <Title text='Simplifique Processos e Otimize a Gestão' />
        <SubTitle text='Faturamento Eficiente' />
        <Paragraph>
          Deixe para trás a desordem de papéis, envelopes acumulados e a constante necessidade de
          contatar clientes! Com o <AppTitle />, ao chegar a data de fechamento, os abastecimentos
          pendentes são automaticamente faturados. Mas a inovação não para por aí: para uma gestão
          ainda mais personalizada, postos podem optar pelo faturamento antes da data estipulada e,
          caso um cliente deseje, ele mesmo tem a liberdade de solicitar o faturamento de seus
          abastecimentos em aberto antecipadamente.
        </Paragraph>
        <Paragraph>
          Os clientes desfrutam de uma visão clara e detalhada de seus abastecimentos e srecebem
          notificações instantâneas em cada etapa, desde o envio do boleto até a confirmação do
          pagamento.
        </Paragraph>
        <Paragraph>
          Nossa plataforma oferece total controle sobre datas de vencimento e status de pagamentos.
          Identifique rapidamente pagamentos em aberto ou atrasados e, quando necessário, limite o
          acesso de determinado cliente até a regularização. Para aprofundar sua análise, os
          relatórios e gráficos integrados proporcionam um entendimento mais aprofundado, auxiliando
          em análises acertadas e projeções precisas.
        </Paragraph>
      </div>
    </div>
  );
};

export default GasStationsPayments;
