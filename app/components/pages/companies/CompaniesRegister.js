import Image from 'next/image';
import { AppTitle } from '../../general';
import { Title, Paragraph } from '../../general';

const CompaniesRegister = () => {
  return (
    <div className='flex flex-col md:flex-row items-center mt-4'>
      <div className='w-full mb-4 md:hidden md:w-4/12'>
        <Image
          src='/images/companies/gasstation1.svg'
          width={0}
          height={0}
          className='w-full'
          alt='companies'
        />
      </div>
      <div className='w-full md:w-8/12 '>
        <Title text='Liberdade ao Cliente' />
        <Paragraph>
          O <AppTitle /> foi criado pensando em sua liberdade. Se um posto parceiro convidá-lo para
          se juntar ao sistema e você ainda não tiver cadastro, poderá fazê-lo de maneira ágil. Se
          já for cadastrado, apenas aceite o convite. Dessa forma, você poderá desfrutar do nosso
          sistema em diferentes postos parceiros, acompanhando relatórios de abastecimentos,
          visualizando gráficos e compreendendo métricas como quilômetros por litro - tudo
          centralizado.
        </Paragraph>
        <Paragraph>
          Com <AppTitle />, o re-cadastro de veículos e motoristas se torna desnecessário. Uma vez
          registrados, estão prontos para serem utilizados em quaisquer postos, independentemente da
          organização à qual pertencem. O sistema é um hub centralizado para gerenciar suas
          operações. Além disso, é possível configurar datas de faturamento, ver notificações e
          receber e-mails sobre abastecimentos em tempo real.
        </Paragraph>
      </div>
      <div className='hidden md:flex md:w-4/12'>
        <Image
          src='/images/companies/gasstation1.svg'
          width={0}
          height={0}
          className='w-full mt-16'
          alt='companies'
        />
      </div>
    </div>
  );
};

export default CompaniesRegister;
