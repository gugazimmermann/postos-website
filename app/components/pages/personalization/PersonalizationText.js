import Image from 'next/image';
import { Section, SectionTitle, SectionSubTitle, SectionParagraph } from '../../layout/sections';
import { AppTitle, AppDescription } from '../../general';

const PersonalizationText = () => {
  return (
    <Section>
      <SectionTitle title='Personalizações' />
      <SectionSubTitle>
        Transformando Nossa Solução para Atender Suas Necessidades Únicas
      </SectionSubTitle>
      <div className='w-full'>
        <Image
          src='/images/customizations/customizations.svg'
          width={0}
          height={0}
          className='w-full my-4 md:w-1/2 md:float-right md:mr-4'
          alt='customizations'
        />
        <SectionParagraph>
          Em <AppTitle />, entendemos que cada posto de combustível possui necessidades distintas, e
          um sistema de gerenciamento de frotas deve se adaptar perfeitamente a elas. Por isso,
          disponibilizamos uma extensa gama de opções de personalização, permitindo que você
          configure nosso <AppDescription /> de acordo com seus critérios e requisitos específicos.
        </SectionParagraph>
        <SectionSubTitle>Notificações Sob Medida para Você e Seus Clientes</SectionSubTitle>
        <SectionParagraph>
          Com nossa opção de personalização de notificações, você controla integralmente as
          comunicações com seus clientes. Seja para enviar notificações por e-mail sobre
          abastecimentos, agendamentos ou faturamentos, nosso sistema adaptável permite que cada
          mensagem reflita a identidade da sua marca. Se busca um tom mais formal ou informal,
          deseja destacar sua marca, informar promoções especiais ou enfatizar a bandeira do posto,
          estamos aqui para assegurar que suas mensagens sejam exatamente como você imagina.
        </SectionParagraph>
        <SectionSubTitle>Transformando o Ponto de Vendas</SectionSubTitle>
        <SectionParagraph>
          Sabemos que a eficácia no ponto de vendas é crucial para o sucesso do seu posto. Com a
          capacidade de personalizar o sistema de caixa, você pode alterar o visual do software
          usado pelos funcionários. Desde paletas de cores até layouts, a customização da interface
          do caixa possibilita um trabalho mais intuitivo para seus colaboradores, agilizando o
          atendimento e aumentando a satisfação do cliente.
        </SectionParagraph>
        <SectionSubTitle>Análise e Cobranças Transparentes</SectionSubTitle>
        <SectionParagraph>
          Reconhecemos que personalizações específicas podem influenciar nossos recursos e esforços
          de desenvolvimento. Nossa equipe dedicada avaliará atentamente suas solicitações para
          assegurar uma implementação eficaz e eficiente. É relevante mencionar que algumas
          customizações podem incorrer em custos adicionais. Porém, sempre priorizamos a
          transparência e garantimos que você estará informado sobre quaisquer despesas antes de
          continuarmos com o projeto.
        </SectionParagraph>
        <SectionSubTitle>Como Começar</SectionSubTitle>
        <SectionParagraph>
          Iniciar o processo de personalização é simples. Entre em contato conosco e compartilhe
          suas ideias e necessidades. Nosso time estará à disposição para orientá-lo sobre as opções
          disponíveis, avaliar a viabilidade técnica e fornecer uma estimativa clara dos custos
          envolvidos.
        </SectionParagraph>
        <SectionParagraph>
          Em <AppTitle />, estamos comprometidos em fornecer um sistema de gerenciamento de frotas
          adaptado ao seu negócio. Nossas opções de personalização garantem que você maximize o
          potencial do nosso <AppDescription />, otimizando operações e proporcionando uma
          experiência singular para seus clientes e equipe.
        </SectionParagraph>
      </div>
    </Section>
  );
};

export default PersonalizationText;
