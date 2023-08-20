import Image from 'next/image';
import { AppTitle } from '../../general';
import { Title, Paragraph } from './utils';

const CompaniesRegister = () => {
  return (
    <div className='flex flex-col md:flex-row items-center mt-4'>
      <div className='w-full mb-4 md:hidden md:w-4/12'>
        <Image
          src='/images/gas-stations/gasstation1.svg'
          width={0}
          height={0}
          className='w-full'
          alt='companies'
        />
      </div>
      <div className='w-full md:w-8/12 '>
        <Title text='Liberdade para o Clientes' />
        <Paragraph>
          O <AppTitle /> foi desenvolvido tendo em mente a liberdade. Um posto parceiro pode
          convidá-lo para aderir ao sistema. Ao aceitar o convite, se você ainda não tiver um
          cadastro, pode realizá-lo de forma rápida e simples. Caso já possua cadastro, basta
          aceitar o convite. Assim, você terá a liberdade de aproveitar nosso sistema em diferentes
          postos parceiros, o que lhe permite acompanhar seus relatórios de abastecimentos,
          visualizar gráficos, entender métricas como quilômetros por litro e muito mais – tudo isso
          centralizado de forma prática.
        </Paragraph>
        <Paragraph>
          Ao utilizar o <AppTitle />, você não precisará cadastrar veículos e motoristas
          repetidamente; uma vez cadastrados, eles estarão disponíveis para serem usados em
          diferentes postos, mesmo que pertençam a organizações distintas. O sistema é um hub
          centralizado para gerenciar suas operações. Além do fácil cadastro de veículos e
          motoristas, permite configurar datas de faturamento, visualizar notificações e receber
          e-mails sobre abastecimentos em tempo real.
        </Paragraph>
      </div>
      <div className='hidden md:flex md:w-4/12'>
        <Image
          src='/images/gas-stations/gasstation1.svg'
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
