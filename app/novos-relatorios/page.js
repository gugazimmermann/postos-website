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
  title: `Novos Relatórios | ${sharedMetadata.title}`,
  description: `Novos Relatórios no ${sharedMetadata.title}`,
  alternates: {
    canonical: `${sharedMetadata.alternates.canonical}/novos-relatorios`,
  },
  keywords: [...sharedMetadata.keywords, 'relatórios', 'gráficos', 'tabelas'],
};

export default function NewReports() {
  return (
    <Section>
      <SectionTitle title='Novos Relatórios' />
      <SectionSubTitle>Desvendando Insights: Relatórios e Gráficos Personalizados</SectionSubTitle>
      <Image src='/images/reports.svg' width={0} height={0} className='w-full my-4' alt='reports' />
      <SectionParagraph>
        O <strong>{process.env.NEXT_PUBLIC_TITLE}</strong> valoriza a importância da tomada de
        decisões bem informadas para o sucesso empresarial. Por esse motivo, oferecemos a capacidade
        de obter insights detalhados por meio de Relatórios e Gráficos Personalizados. Reconhecemos
        que cada posto de combustível possui métricas e áreas de interesse exclusivas, permitindo
        que você solicite relatórios específicos que atendam às suas necessidades.
      </SectionParagraph>
      <SectionParagraph>
        A compreensão dos dados é crucial para desenvolver uma estratégia eficaz. Nossos Relatórios
        e Gráficos Personalizados fornecem o contexto necessário para decisões confiantes e
        informadas. Imagine observar o crescimento das vendas dia a dia, analisar os efeitos das
        ações de marketing ou identificar áreas de aprimoramento operacional. A análise de dados se
        torna a base para alcançar objetivos ambiciosos.
      </SectionParagraph>
      <SectionSubTitle>Suas Informações, Seus Insights</SectionSubTitle>
      <SectionParagraph>
        Nosso <strong>{process.env.NEXT_PUBLIC_DESCRIPTION}</strong> já oferece uma variedade de
        relatórios pré-configurados, fornecendo informações valiosas sobre abastecimentos, vendas e
        desempenho geral do posto. No entanto, entendemos que suas necessidades podem ser únicas.
        Com Relatórios e Gráficos Personalizados, é possível aprofundar ainda mais, solicitando
        análises específicas relevantes para o seu negócio.
      </SectionParagraph>
      <SectionParagraph>
        Compreender o desempenho do posto vai além de números em uma planilha. Trata-se de insights
        que possibilitam a compreensão de padrões, a identificação de oportunidades e a previsão de
        desafios. Nossos Relatórios e Gráficos Personalizados oferecem uma visão detalhada de suas
        operações. Seja para avaliar tendências de consumo, monitorar a eficácia de promoções ou
        planejar estrategicamente, essas ferramentas transformam dados brutos em informações
        práticas.
      </SectionParagraph>
      <SectionSubTitle>Perfeitamente Alinhado com seu Negócio</SectionSubTitle>
      <SectionParagraph>
        Reconhecemos que dados são valiosos apenas quando se aplicam às suas operações. Por isso,
        nossos Relatórios e Gráficos Personalizados são desenvolvidos para se alinharem plenamente
        com as prioridades de seu posto de combustível. Seja para apresentar informações à equipe
        interna, compartilhar insights com partes interessadas ou tomar decisões estratégicas,
        nossos relatórios são a base sólida para suas escolhas.
      </SectionParagraph>
      <SectionParagraph>
        Nossos relatórios e gráficos são como uma solução personalizada para seu posto.
        Independentemente de você precisar de visualizações claras para apresentações, análises
        aprofundadas para decisões ou dados específicos para parceiros, desenvolvemos esses recursos
        para atender às suas necessidades exclusivas. Cada relatório é criado considerando sua
        perspectiva, trazendo clareza às informações cruciais para o sucesso.
      </SectionParagraph>
      <SectionSubTitle>Como Funciona</SectionSubTitle>
      <SectionParagraph>
        Solicitar Relatórios e Gráficos Personalizados é simples. Basta entrar em contato conosco e
        compartilhar suas necessidades específicas. Quer esteja procurando detalhes sobre o consumo
        de combustível por tipo de veículo, análises sazonais de vendas ou qualquer outro indicador
        crucial, nossa equipe está pronta para trabalhar com você e criar relatórios que ofereçam
        insights sob medida.
      </SectionParagraph>
      <SectionSubTitle>Transparência e Eficiência</SectionSubTitle>
      <SectionParagraph>
        Assim como nas personalizações, garantimos total transparência em relação aos custos
        associados à criação de Relatórios e Gráficos Personalizados. Nossa equipe analisará suas
        solicitações, avaliará a complexidade e fornecerá uma estimativa clara dos custos antes de
        prosseguir com o trabalho.
      </SectionParagraph>
      <SectionParagraph>
        No <strong>{process.env.NEXT_PUBLIC_TITLE}</strong>, acreditamos que os dados são o coração
        de um negócio inteligente. Nossos Relatórios e Gráficos Personalizados capacitam você a
        extrair informações valiosas dos seus dados e a tomar decisões informadas que impulsionam o
        crescimento do seu posto de combustível.
      </SectionParagraph>
    </Section>
  );
}
