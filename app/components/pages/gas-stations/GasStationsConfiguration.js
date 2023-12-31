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

const GasStationsConfiguration = () => {
  return (
    <div
      id='ConfiguracoesSimples'
      className='mt-8 mx-4 sm:mx-0 bg-sky-100 rounded-3xl shadow-xl overflow-hidden'
    >
      <div className='relative z-10 rounded'>
        <div className='flex flex-col justify-center px-8 pt-4'>
          <Title text='Configuração Intuitiva e Personalizada' />
          <div className='sm:px-8'>
            <Paragraph dark={true} center={true}>
              Ao registrar um posto em nossa plataforma, você desfrutará de uma experiência de
              configuração simples e adaptada às suas necessidades.
            </Paragraph>
            <Paragraph dark={true} center={true}>
              Para cada posto, é possível definir de maneira individualizada os tipos de assinatura,
              variedades de combustíveis, padrões de faturamento, produtos, serviços e diversas
              outras funcionalidades.
            </Paragraph>
          </div>
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

export default GasStationsConfiguration;
