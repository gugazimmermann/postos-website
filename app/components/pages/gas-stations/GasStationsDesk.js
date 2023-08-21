import Image from 'next/image';
import { Title, SubTitle, Paragraph, AppTitle } from '../../general';

const GasStationsDesk = () => {
  return (
    <div id='Caixa' className='w-full sm:flex sm:items-center sm:justify-between mt-8'>
      <div className='mt-4 sm:mt-0 sm:px-8 w-full'>
        <SubTitle text='Eficiência, Segurança e Transparência' />
        <Title text='Tela do Caixa' />
        <Paragraph>
          Ao utilizar o Caixa no <AppTitle />, a experiência é fluida e direta. Busque facilmente
          por placa, motorista ou cliente. Todas as configurações individuais dos clientes, como
          controle de quilometragem, restrições de combustível e horários, estão ao alcance de um
          clique. E se houver promoções personalizadas? O caixa é automaticamente alertado!
        </Paragraph>
        <div className='w-full'>
          <Image
            src='/images/gas-stations/desbravador.webp'
            width={0}
            height={0}
            className='w-1/3 mr-4 float-left'
            alt='desbravador'
          />
          <Paragraph>
            Contamos atualmente com integração ao sistema <strong>Desbravador</strong>. Dados das
            bombas podem ser sincronizados ao <AppTitle /> através de nosso aplicativo para Windows,
            de maneira simples, tornando tudo mais prático.
          </Paragraph>
          <Paragraph>
            Modernizamos o processo de autorização do abastecimento: opte por Assinatura Digital,
            Reconhecimento Facial, Biometria ou até mesmo pela tradicional assinatura manual. E a
            transparência? Garantida! Após autorizar a transação, o cliente é imediatamente
            notificado em nosso sistema, no aplicativo e por email. Sua operação nunca foi tão clara
            e eficaz!
          </Paragraph>
        </div>
      </div>
    </div>
  );
};

export default GasStationsDesk;
