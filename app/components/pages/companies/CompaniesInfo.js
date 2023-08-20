import Image from 'next/image';
import { SubTitle, Title } from './utils';

const CompaniesInfoCard = ({ icon, title, details }) => {
  return (
    <div className='w-full p-4 rounded-3xl bg-slate-100 shadow-lg'>
      <div className='h-full flex flex-col justify-between items-center'>
        <div className='p-12 sm:p-4 lg:p-8 flex'>{icon}</div>
        <div>
          <SubTitle text={title} />
          <p className='text-slate-800 mt-4 text-center'>{details}</p>
        </div>
      </div>
    </div>
  );
};

const CompaniesInfo = () => {
  return (
    <div className='w-full mt-4'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        <CompaniesInfoCard
          title='Segurança'
          details='Defina onde, os horários, o tipo de combustível, os produtos, os tipos de assinatura, e muito mais!'
          icon={
            <Image
              src='/images/companies/security.svg'
              width={0}
              height={0}
              className='w-full'
              alt='Segurança'
            />
          }
        />
        <CompaniesInfoCard
          title='Transparência'
          details='Notifições em tempo real sempre que ocorrer um abastecimento com todas as informações.'
          icon={
            <Image
              src='/images/companies/notifications.svg'
              width={0}
              height={0}
              className='w-full'
              alt='Transparência'
            />
          }
        />
        <CompaniesInfoCard
          title='Controle'
          details='Acompanhe os abastecimentos em aberto, os faturamentos e os pagamentos realizados.'
          icon={
            <Image
              src='/images/companies/control.svg'
              width={0}
              height={0}
              className='w-full'
              alt='Controle'
            />
          }
        />
      </div>
    </div>
  );
};
export default CompaniesInfo;
