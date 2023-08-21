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
          <Title text='Facilidade para os Motoristas' />
          <Paragraph dark={true}>
            E não para por aí! Para os motoristas, temos um aplicativo prático onde podem
            identificar postos nos quais estão cadastrados, verificar os combustíveis autorizados
            para seus veículos, os produtos que podem ser faturados e até mesmo encontrar a rota
            mais próxima para o posto.
          </Paragraph>
          <Paragraph dark={true}>
            Converse com seu posto de confiança, comece a usar o <AppDescription /> e traga sua
            frota para o <AppTitle />.
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
