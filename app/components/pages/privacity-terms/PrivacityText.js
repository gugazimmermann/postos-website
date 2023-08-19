import { SectionParagraph, SectionSubTitle } from '../../layout/sections';
import { AppTitle, AppDescription } from '../../general';

const PrivacityText = () => {
  return (
    <>
      <SectionSubTitle>Última Atualização: 18/08/2023</SectionSubTitle>
      <SectionParagraph>
        Bem-vindo ao <AppTitle />, um <AppDescription />. Esta política esclarece como lidamos com
        suas informações pessoais. Ao utilizar nosso sistema, você aceita as práticas descritas
        aqui.
      </SectionParagraph>
      <SectionSubTitle>1. Informações Coletadas</SectionSubTitle>
      <SectionParagraph>
        <strong>1.1 Cadastro</strong>: Para criar uma conta, solicitamos dados como nome, e-mail e
        outros detalhes de contato, visando a prestação adequada dos serviços.
      </SectionParagraph>
      <SectionParagraph>
        <strong>1.2 Uso do Sistema</strong>: Monitoramos a atividade dentro do sistema, incluindo
        logs, registros de acesso e dados de navegação, para otimizar a performance e a experiência
        do usuário.
      </SectionParagraph>
      <SectionParagraph>
        <strong>1.3 Transações</strong>: Coletamos dados de transações e informações da frota para
        fornecer nossos serviços.
      </SectionParagraph>
      <SectionSubTitle>2. Como Utilizamos as Informações</SectionSubTitle>
      <SectionParagraph>
        <strong>2.1 Prestação de Serviço</strong>: Seus dados possibilitam a oferta de serviços
        personalizados e o gerenciamento eficiente das transações da frota.
      </SectionParagraph>
      <SectionParagraph>
        <strong>2.2 Comunicações</strong>: Seu contato nos permite enviar notificações sobre
        novidades, mudanças e outros avisos relevantes.
      </SectionParagraph>
      <SectionParagraph>
        <strong>2.3 Melhoria do Sistema</strong>: Usamos dados anônimos e agregados para pesquisa e
        evolução do sistema.
      </SectionParagraph>
      <SectionSubTitle>3. Compartilhamento</SectionSubTitle>
      <SectionParagraph>
        <strong>3.1 Com Terceiros</strong>: Não divulgamos dados pessoais a terceiros, a menos que
        seja essencial para a prestação do serviço ou por obrigação legal.
      </SectionParagraph>
      <SectionParagraph>
        <strong>3.2 Parceiros de Serviço</strong>: Alguns serviços são apoiados por parceiros
        terceirizados, que têm acesso limitado aos seus dados e compromisso com sua privacidade
      </SectionParagraph>
      <SectionParagraph>
        <strong>3.3 Consentimento</strong>: Caso necessário compartilhar seus dados em outras
        circunstâncias, solicitaremos sua autorização.
      </SectionParagraph>
      <SectionSubTitle>4. Segurança</SectionSubTitle>
      <SectionParagraph>
        <strong>4.1 Medidas Protetivas</strong>: Adotamos estratégias técnicas e administrativas
        para resguardar seus dados contra ameaças e vazamentos.
      </SectionParagraph>
      <SectionParagraph>
        <strong>4.2 Acesso Controlado</strong>: Somente profissionais autorizados têm acesso aos
        dados pessoais, conforme sua relevância para a operação.
      </SectionParagraph>
      <SectionParagraph>
        <strong>4.3 Retenção</strong>: Seus dados são mantidos pelo período necessário ao serviço ou
        conforme legislação aplicável.
      </SectionParagraph>
      <SectionSubTitle>5. Seus Direitos</SectionSubTitle>
      <SectionParagraph>
        <strong>5.1 Consulta e Alteração</strong>: Você pode visualizar e retificar seus dados a
        qualquer momento. Para isso, basta nos contatar.
      </SectionParagraph>
      <SectionParagraph>
        <strong>5.2 Encerramento</strong>: Pode optar por cancelar a assinatura e pedir a remoção de
        seus dados. No entanto, a supressão pode impactar a disponibilidade de serviços.
      </SectionParagraph>
      <SectionSubTitle>6. Atualizações desta Política</SectionSubTitle>
      <SectionParagraph>
        <strong>6.1</strong> Eventuais mudanças nesta política serão comunicadas em nosso site ou
        por e-mail.
      </SectionParagraph>
      <SectionParagraph>
        Ao utilizar o <AppTitle />, você reconhece que leu, compreendeu e concordou com estas
        Políticas de Privacidade. Se tiver alguma dúvida ou preocupação, entre em contato conosco
        através das informações de contato fornecidas.
      </SectionParagraph>
    </>
  );
};

export default PrivacityText;
