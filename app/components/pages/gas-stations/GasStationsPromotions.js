import Image from 'next/image';
import { AppTitle } from '../../general';
import { Title, Paragraph } from '../../general';

const GasStationsPromotions = () => {
  return (
    <div id='Promocoes' className='flex flex-col md:flex-row items-center mt-4'>
      <div className='w-full mb-4 md:hidden md:w-4/12'>
        <Image
          src='/images/gas-stations/promocoes.webp'
          width={0}
          height={0}
          className='w-full'
          alt='companies'
        />
      </div>
      <div className='w-full md:w-3/5 '>
        <Title text='Promoções Personalizadas' />
        <Paragraph>
          Com o <AppTitle />, a criação de promoções personalizadas torna-se uma tarefa fácil e
          eficaz. Você pode direcionar promoções clientes específicos ou para todos,
          aumentando a satisfação e fidelidade.
        </Paragraph>
        <Paragraph>
          É simples: o posto estabelece as regras e as recompensas da promoção, seja um desconto
          atrativo ou um brinde especial. Por exemplo, abasteça R$50,00 em gasolina aditivada e
          ganhe um delicioso café com pão de queijo.
        </Paragraph>
        <Paragraph>
          Ao ativar uma promoção, os clientes selecionados são notificados imediatamente pelo
          sistema e por e-mail, enquanto os motoristas recebem alertas pelo aplicativo. Essa
          estratégia é perfeita para reengajar clientes que têm visitado menos o seu posto ou para
          surpreender um cliente valioso.
        </Paragraph>
        <Paragraph>
          Utilize esta ferramenta poderosa para potencializar suas estratégias de retenção e
          satisfação de clientes!
        </Paragraph>
      </div>
      <div className='hidden md:flex md:w-2/5'>
        <Image
          src='/images/gas-stations/promocoes.webp'
          width={0}
          height={0}
          className='w-full mt-16'
          alt='companies'
        />
      </div>
    </div>
  );
};

export default GasStationsPromotions;
