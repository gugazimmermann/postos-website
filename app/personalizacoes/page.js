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
  title: `Personalizações | ${sharedMetadata.title}`,
  description: `Personalize o ${sharedMetadata.title} para sua organização e postos`,
  alternates: {
    canonical: `${sharedMetadata.alternates.canonical}/personalizacoes`,
  },
  keywords: [...sharedMetadata.keywords, 'personalização', 'suporte'],
};

export default function Customizations() {
  return (
    <Section>
      <SectionTitle title='Personalizações' />
      <div className='w-full text-center'>
        <SectionSubTitle>
          Transformando Nossa Solução para Atender às Suas Necessidades Únicas
        </SectionSubTitle>
      </div>
      <div className='w-full mt-4'>
        <Image
          src='/images/customizations.svg'
          width={0}
          height={0}
          className='w-1/2 float-right mr-4'
          alt='customizations'
        />
        <SectionParagraph>
          No <strong>{process.env.NEXT_PUBLIC_TITLE}</strong>, compreendemos que cada posto de
          combustível tem necessidades únicas e que um sistema de gerenciamento de frotas deve se
          adaptar perfeitamente às suas operações. É por isso que oferecemos uma gama abrangente de
          opções de personalização, para que você possa moldar nosso{' '}
          <strong>{process.env.NEXT_PUBLIC_DESCRIPTION}</strong> de acordo com as suas preferências
          e requisitos específicos.
        </SectionParagraph>
        <SectionSubTitle>Notificações Sob Medida para Você e seus Clientes</SectionSubTitle>
        <SectionParagraph>
          Com nossa solução de personalização de notificações, você está no controle total das
          comunicações com seus clientes. Seja no envio de notificações por e-mail sobre
          abastecimentos, agendamentos ou faturamentos, nosso sistema flexível permite que você
          adapte cada mensagem para refletir a identidade da sua marca. Quer esteja buscando um tom
          mais formal ou casual, mostrar sua marca, destacar a bandeira, quer deseje informar
          promoções especiais, estamos aqui para garantir que suas mensagens sejam exatamente como
          você imagina.
        </SectionParagraph>
        <SectionSubTitle>Transforme o do Ponto de Vendas</SectionSubTitle>
        <SectionParagraph>
          Sabemos que a eficiência no ponto de vendas é fundamental para o sucesso do seu posto. Com
          nossa capacidade de personalização do sistema no Caixa, você pode modificar a aparência do
          software utilizado exclusivamente pelos funcionários do posto. Desde esquemas de cores até
          layouts, personalizar a interface do caixa permite que seus colaboradores trabalhem de
          forma mais intuitiva e eficaz, resultando em um atendimento mais ágil e satisfação do
          cliente.
        </SectionParagraph>
        <SectionSubTitle>Análise e Cobranças Transparentes</SectionSubTitle>
        <SectionParagraph>
          Entendemos que personalizações específicas podem ter impacto em nossos recursos e esforços
          de desenvolvimento. Nossa equipe dedicada analisará cuidadosamente suas solicitações para
          garantir que possamos atendê-las de maneira eficaz e eficiente. É importante notar que
          algumas personalizações podem estar sujeitas a cobranças adicionais. No entanto,
          priorizamos a transparência em todas as etapas e garantimos que você esteja ciente de
          quaisquer custos antes de prosseguirmos com o trabalho.
        </SectionParagraph>
        <SectionSubTitle>Como Começar</SectionSubTitle>
        <SectionParagraph>
          Iniciar o processo de personalização é simples. Basta entrar em contato conosco e
          compartilhar suas ideias e necessidades. Nossa equipe terá prazer em orientá-lo através
          das opções disponíveis, avaliar a viabilidade técnica e fornecer uma estimativa
          transparente dos custos associados.
        </SectionParagraph>
        <SectionParagraph>
          No <strong>{process.env.NEXT_PUBLIC_TITLE}</strong>, estamos empenhados em fornecer um
          sistema de gerenciamento de frotas que se adapte a você. Nossas opções de personalização
          garantem que você possa tirar o máximo proveito do nosso{' '}
          <strong>{process.env.NEXT_PUBLIC_DESCRIPTION}</strong>, otimizando suas operações e
          proporcionando uma experiência única para seus clientes e funcionários.
        </SectionParagraph>
      </div>
    </Section>
  );
}
