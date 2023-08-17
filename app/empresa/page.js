import Image from 'next/image';
import sharedMetadata from '../shared-metadata';
import {
  Section,
  SectionTitle,
  SectionParagraph,
  SectionSubTitle,
} from '../components/layout/sections';

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
      <div className='w-full text-center'>
        <SectionSubTitle>
          Inovação no Gerenciamento de Frotas para Postos de Combustíveis
        </SectionSubTitle>
      </div>
      <div className='w-full mt-4'>
        <Image
          priority
          src='/images/about_us.svg'
          width={0}
          height={0}
          className='w-1/2 float-right mr-4'
          alt='About Us'
        />
        <SectionParagraph>
          Bem-vindos à <strong>{process.env.NEXT_PUBLIC_TITLE}</strong>, uma empresa que nasceu da fusão entre visão
          estratégica e competência técnica. Fundada em Itajaí, Santa Catarina, nossa história teve
          início a partir de um encontro entre um programador e um proprietário de postos de
          combustíveis, cujas discussões revelaram oportunidades cruciais no setor de gerenciamento
          de frotas.
        </SectionParagraph>
        <SectionParagraph>
          Esse diálogo inicial despertou nossa consciência para as complexidades enfrentadas pelos
          postos de combustíveis no que se refere ao controle de suas frotas. Reconhecemos a
          necessidade de soluções que permitissem um gerenciamento mais eficaz do abastecimento, ao
          mesmo tempo em que aprimorássemos a experiência dos clientes finais, os gestores das
          frotas.
        </SectionParagraph>
        <SectionParagraph>
          Assumindo o compromisso de criar um Sistema de Gerenciamento de Frotas de ponta,
          customizado especificamente para os postos de combustíveis, a{' '}
          <strong>{process.env.NEXT_PUBLIC_TITLE}</strong> entrou em ação. Cada linha de código escrita e cada
          funcionalidade desenvolvida eram movidas por nossa incessante busca por eficiência e
          excelência operacional.
        </SectionParagraph>
        <SectionParagraph>
          No entanto, nosso foco não estava somente na operação interna dos postos. Compreendemos a
          importância de capacitar os gestores das frotas com as ferramentas necessárias para um
          gerenciamento estratégico e informado. Afinal, a base de qualquer empreendimento
          bem-sucedido reside na satisfação de todas as partes envolvidas.
        </SectionParagraph>
        <SectionParagraph>
          À medida que nossas soluções ganharam forma e funcionalidade, nosso impacto no mercado se
          tornou evidente. Atualmente, a <strong>{process.env.NEXT_PUBLIC_TITLE}</strong> é reconhecida como um líder
          no desenvolvimento de tecnologias inovadoras voltadas para o gerenciamento de frotas em
          postos de combustíveis. Nossa jornada é marcada por parcerias sólidas, resultados
          concretos entregues aos nossos clientes e um comprometimento contínuo com a evolução.
        </SectionParagraph>
        <SectionParagraph>
          Na <strong>{process.env.NEXT_PUBLIC_TITLE}</strong>, nossa trajetória é um testemunho da convergência entre
          visão estratégica e habilidades técnicas. Estamos dedicados a moldar o cenário do
          gerenciamento de frotas, adaptando-nos constantemente às necessidades em mutação dos
          nossos clientes e às demandas por soluções que transcendam as convenções.
        </SectionParagraph>
        <SectionParagraph>
          Convidamos você a se unir a nós nessa jornada em direção a um futuro onde a tecnologia
          redefine o potencial e onde o gerenciamento de frotas é sinônimo de excelência,
          praticidade e sucesso. Seja bem-vindo à <strong>{process.env.NEXT_PUBLIC_TITLE}</strong>, onde a inovação
          impulsiona a eficiência!
        </SectionParagraph>
      </div>
    </Section>
  );
}
