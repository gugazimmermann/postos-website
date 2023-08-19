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
      <SectionSubTitle>Relatórios e Gráficos Personalizados</SectionSubTitle>
      <div className='w-full'>
        <Image
          src='/images/reports/reports.svg'
          width={0}
          height={0}
          className='w-full my-4 md:w-1/2 md:float-right md:mr-4'
          alt='reports'
        />
        <SectionParagraph>
          O <strong>{process.env.NEXT_PUBLIC_TITLE}</strong> entende que decisões informadas são
          vitais para o sucesso empresarial. A interpretação correta dos dados é a chave para uma
          estratégia eficaz. Com nossas ferramentas, você tem acesso a insights para acompanhar o
          crescimento das vendas, avaliar campanhas de marketing e identificar áreas de melhoria.
        </SectionParagraph>
        <SectionParagraph>
          Disponibilizamos uma gama de relatórios pré-configurados sobre abastecimentos, clientes e
          desempenho geral. Porém, sabemos que cada posto tem características próprias. Caso haja
          necessidade de relatórios adaptados ao seu cenário, temos a solução com os Relatórios e
          Gráficos Personalizados, permitindo análises mais específicas e alinhadas ao seu negócio.
        </SectionParagraph>
        <SectionSubTitle>Seu Negócio, Seus Insights</SectionSubTitle>
        <SectionParagraph>
          Na era dos dados, a diferenciação reside na personalização. Cada posto de combustível é
          uma entidade única, com desafios e objetivos próprios. Nossos Relatórios e Gráficos
          Personalizados permitem refletir a singularidade do seu empreendimento - é uma extensão de
          nossa parceria com você. Ao nos comunicar suas necessidades, nossa equipe dedicada
          trabalhará meticulosamente para entregar relatórios e gráficos que ressoem diretamente com
          as nuances de seu posto.
        </SectionParagraph>
        <SectionParagraph>
          Dê a si mesmo a vantagem competitiva de insights moldados exatamente para sua realidade.
          Deixe que nossos Relatórios e Gráficos Personalizados se tornem a lente através da qual
          você vê o potencial completo de seu negócio.
        </SectionParagraph>
        <SectionSubTitle>Como Funciona</SectionSubTitle>
        <SectionParagraph>
          Solicitar Relatórios e Gráficos Personalizados é simples. Basta entrar em contato conosco
          e compartilhar suas necessidades específicas.
        </SectionParagraph>
        <SectionParagraph>
          Assim como nas personalizações, garantimos total transparência em relação aos custos
          associados à criação de Relatórios e Gráficos Personalizados. Nossa equipe analisará suas
          solicitações, avaliará a complexidade e fornecerá uma estimativa clara dos custos antes de
          prosseguir com o trabalho.
        </SectionParagraph>
        <SectionParagraph>
          No <strong>{process.env.NEXT_PUBLIC_TITLE}</strong>, acreditamos que os dados são o
          coração de um negócio inteligente. Nossos{' '}
          <strong>{process.env.NEXT_PUBLIC_DESCRIPTION}</strong> capacita você a extrair informações
          valiosas e a tomar decisões informadas que impulsionam o crescimento do seu posto de
          combustível.
        </SectionParagraph>
      </div>
    </Section>
  );
}
