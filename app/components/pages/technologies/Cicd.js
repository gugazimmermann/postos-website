import Image from 'next/image';
import { SectionParagraph } from '../../layout/sections';

const Cicd = () => {
  return (
    <div className='px-4 w-full'>
      <div className='flex justify-center sm:float-right'>
        <Image
          src='/images/technologies/cicd.webp'
          width={0}
          height={0}
          className='w-auto h-32'
          alt='CI/CD'
        />
      </div>
      <SectionParagraph>
        Empregamos um processo contínuo de Integração Contínua e Entrega Contínua (CI/CD) para
        manter nosso sistema permanentemente atualizado. Esse método se traduz em operações
        contínuas e eficientes, garantindo que, como cliente, você tenha acesso a um sistema que
        evolui de forma consistente.
      </SectionParagraph>
      <SectionParagraph>
        Através da Integração Contínua, as atualizações e melhorias são incorporadas ao sistema de
        maneira regular e automatizada. Isso significa que, em vez de esperar por grandes
        atualizações periódicas, pequenas melhorias são implementadas de forma contínua, mantendo o
        sistema sempre aprimorado e alinhado às necessidades em constante mudança.
      </SectionParagraph>
      <SectionParagraph>
        A Entrega Contínua é o próximo passo desse processo, em que as mudanças e melhorias testadas
        e validadas são automaticamente disponibilizadas para você, nosso cliente final. Isso
        resulta em um fluxo operacional contínuo e suave, sem interrupções significativas ou
        sobressaltos.
      </SectionParagraph>
      <SectionParagraph>
        Em última análise, a Integração Contínua e a Entrega Contínua são a base para um sistema que
        se adapta rapidamente às suas necessidades e oferece um serviço confiável. Isso significa
        que, como cliente, você pode se beneficiar de um sistema sempre atualizado e operacional,
        permitindo-lhe focar no que é realmente importante para o seu negócio.
      </SectionParagraph>
    </div>
  );
};

export default Cicd;
