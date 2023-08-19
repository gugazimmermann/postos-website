import Image from 'next/image';
import sharedMetadata from '../shared-metadata';
import {
  Section,
  SectionTitle,
  SectionParagraph,
  SectionSubTitle,
} from '../components/layout/sections';
import { AppTitle, AppDescription } from '../components/general';

export const metadata = {
  ...sharedMetadata,
  title: `Sobre Nós | ${sharedMetadata.title}`,
  description: `Informações sobre ${sharedMetadata.title}`,
  alternates: {
    canonical: `${sharedMetadata.alternates.canonical}/empresa`,
  },
  keywords: [...sharedMetadata.keywords, `${sharedMetadata.title}`, 'sobre nós'],
};

export default function AboutUs() {
  return (
    <Section>
      <SectionTitle title='Sobre a' word={process.env.NEXT_PUBLIC_TITLE} />
      <SectionSubTitle>
        Inovação no Gerenciamento de Frotas para Postos de Combustíveis
      </SectionSubTitle>
      <div className='w-full'>
        <Image
          src='/images/abouts_us/about_us.svg'
          width={0}
          height={0}
          className='w-full my-4 md:w-1/2 md:float-right md:mr-4'
          alt='About Us'
        />
        <SectionParagraph>
          Bem-vindos à <AppTitle />, uma empresa que nasceu da fusão entre visão estratégica e
          competência técnica. Fundada em Itajaí, Santa Catarina, nossa história teve início a
          partir de um encontro entre um programador e um proprietário de postos de combustíveis,
          cujas discussões revelaram oportunidades cruciais no setor de gerenciamento de frotas.
        </SectionParagraph>
        <SectionParagraph>
          Esse diálogo inicial despertou nossa consciência para as complexidades enfrentadas pelos
          postos de combustíveis no que se refere ao controle de suas frotas. Reconhecemos a
          necessidade de soluções que permitissem um gerenciamento mais eficaz do abastecimento, ao
          mesmo tempo em que aprimorássemos a experiência dos clientes finais, os gestores das
          frotas.
        </SectionParagraph>
        <SectionParagraph>
          Assumindo o compromisso de criar um <AppDescription /> de ponta, a <AppTitle /> entrou em
          ação. Cada linha de código escrita e cada funcionalidade desenvolvida eram movidas por
          nossa incessante busca por eficiência e excelência operacional.
        </SectionParagraph>
        <SectionParagraph>
          No entanto, nosso foco não estava somente na operação interna dos postos. Compreendemos a
          importância de capacitar os gestores das frotas com as ferramentas necessárias para um
          gerenciamento estratégico e informado. Afinal, a base de qualquer empreendimento
          bem-sucedido reside na satisfação de todas as partes envolvidas.
        </SectionParagraph>
        <blockquote class='text-xl italic font-semibold text-slate-800 text-center mt-4'>
          <p>&quot;Um negócio para ser bom, tem que ser bom para todo mundo.&quot;</p>
        </blockquote>
        <SectionParagraph>
          À medida que nossas soluções ganharam forma e funcionalidade, nosso impacto no mercado se
          tornou evidente. Atualmente, a <AppTitle /> é reconhecida como um líder no desenvolvimento
          de tecnologias inovadoras voltadas para o gerenciamento de frotas em postos de
          combustíveis. Nossa jornada é marcada por parcerias sólidas, resultados concretos
          entregues aos nossos clientes e um comprometimento contínuo com a evolução.
        </SectionParagraph>
        <SectionParagraph>
          No <AppTitle />, nossa trajetória é um testemunho da convergência entre visão estratégica
          e habilidades técnicas. Estamos dedicados a moldar o cenário do gerenciamento de frotas,
          adaptando-nos constantemente às necessidades em mutação dos nossos clientes e às demandas
          por soluções que transcendam as convenções.
        </SectionParagraph>
        <SectionParagraph>
          Convidamos você a se unir a nós nessa jornada em direção a um futuro onde a tecnologia
          redefine o potencial e onde o gerenciamento de frotas é sinônimo de excelência,
          praticidade e sucesso. Seja bem-vindo à <AppTitle />, onde a inovação impulsiona a
          eficiência!
        </SectionParagraph>
      </div>
    </Section>
  );
}
