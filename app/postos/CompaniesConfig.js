import Image from 'next/image';

const CompaniesConfig = () => {
  return (
    <section className='mt-8'>
      <div className='flex flex-col md:flex-row items-center'>
        <div className='w-full md:w-4/12 mr-0 md:mr-8'>
          <Image
            src='/images/gasstation7.svg'
            width={0}
            height={0}
            className='w-full mb-4 md:mb-0'
            alt='companies'
          />
        </div>
        <div className='w-full md:w-8/12'>
          <h2 className='text-2xl font-bold text-slate-800 text-center'>
            Gestão Avançada de Veículos e Motoristas
          </h2>
          <p className='mt-4 text-slate-500'>
            Ao aceitar o convite, o cliente é introduzido a um ambiente de gestão avançado,
            desenhado para otimizar o controle sobre veículos e motoristas. Nesta plataforma, é
            possível definir restrições para veículos, como o tipo de combustível e o controle da
            quilometragem.
          </p>
          <p className='mt-4 text-slate-500'>
            O sistema ainda permite vincular motoristas a veículos específicos, determinar os
            métodos de assinatura dos motoristas, incluindo o cadastro antecipado de assinaturas
            digitais, e especificar quais produtos e serviços são acessíveis a cada um, reforçando a
            segurança e eficiência na gestão.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CompaniesConfig;
