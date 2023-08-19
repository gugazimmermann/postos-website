import Image from 'next/image';
import { SectionParagraph } from '../components/layout/sections';

const Amazon = () => {
  return (
    <div className='px-4 w-full'>
      <div className='flex justify-center sm:float-right'>
        <Image
          src='/images/technologies/aws.png'
          width={0}
          height={0}
          className='w-auto h-24 sm:m-4'
          alt='Amazon Web Services'
        />
      </div>
      <SectionParagraph>
        Nossa infraestrutura é ancorada na Amazon Web Services (AWS), trazendo inúmeras vantagens
        para você como cliente. A AWS é líder mundial em serviços em nuvem, oferecendo uma base
        segura, escalável e confiável para nossos sistemas. Sua história de sucesso e reconhecimento
        global evidenciam sua excelência, com gigantes como Netflix, Airbnb e NASA, incluindo
        pesos-pesados nacionais como Nubank, Itaú e Magazine Luiza, usando seus serviços.
      </SectionParagraph>
      <SectionParagraph>
        A AWS se destaca por sua capacidade de proteger seus dados de maneira rigorosa, com recursos
        de segurança de última geração, como criptografia avançada e autenticação multifator. Além
        disso, sua escalabilidade permite que nossos sistemas cresçam conforme suas necessidades,
        garantindo desempenho constante mesmo em momentos de pico.
      </SectionParagraph>
      <SectionParagraph>
        Ao optar pela AWS, você garante não apenas a confiabilidade dos seus dados, mas também a
        expertise de uma plataforma que está moldando o futuro da tecnologia em nuvem. Com essa
        escolha, reforçamos nosso compromisso com a segurança e o desempenho, proporcionando a você
        uma experiência sólida e confiável em todos os aspectos.
      </SectionParagraph>
    </div>
  );
};

export default Amazon;
