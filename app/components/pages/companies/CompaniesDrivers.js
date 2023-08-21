import { AppTitle, AppDescription } from '../../general';
import { Paragraph, Title } from '../../general';

const TopLeftSVG = () => (
  <svg
    width={189}
    height={162}
    viewBox='0 0 189 162'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <ellipse
      cx={16}
      cy='-16.5'
      rx={173}
      ry='178.5'
      transform='rotate(180 16 -16.5)'
      fill='rgba(56, 189, 248, 0.5)'
    />
  </svg>
);

const BottomRightSVG = () => (
  <svg
    width={191}
    height={208}
    viewBox='0 0 191 208'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <ellipse cx={173} cy='178.5' rx={173} ry='178.5' fill='rgba(56, 189, 248, 0.5)' />
  </svg>
);

const CompaniesDrivers = () => {
  return (
    <div
      id='ConfiguracoesSimples'
      className='my-8 mx-4 sm:mx-0 bg-sky-100 rounded-3xl shadow-xl overflow-hidden'
    >
      <div className='relative z-10 rounded p-4'>
        <div className='flex flex-col justify-center p-8'>
          <Title text='Praticidade aos Motoristas' />
          <Paragraph dark={true}>
            Para os motoristas, oferecemos um aplicativo intuitivo. Nele, é possível identificar
            postos cadastrados, verificar combustíveis autorizados para seus veículos, produtos
            liberados, e localizar a rota mais próxima de um posto.
          </Paragraph>
          <Paragraph dark={true}>
            Fale com seu posto de preferência e integre sua frota ao <AppTitle />, o sistema
            definitivo para gerenciamento de frotas em postos de combustíveis.
          </Paragraph>
        </div>
        <div>
          <span className='absolute top-0 left-0 z-[-1]'>
            <TopLeftSVG />
          </span>
          <span className='absolute bottom-0 right-0 z-[-1]'>
            <BottomRightSVG />
          </span>
        </div>
      </div>
    </div>
  );
};

export default CompaniesDrivers;
