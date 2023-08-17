import Inform from './Inform';
import { SectionParagraph } from '../../../components/layout/sections';

const imageUrls = ['/images/dashboard.png', '/images/dashboard3.png', '/images/dashboard2.png'];

const Dashboard = () => {
  return (
    <Inform side='right' imageUrls={imageUrls} title='Dashboard Intuitivo'>
      <SectionParagraph>
        Visualize todas as informações cruciais em uma única tela, de maneira simples e intuitiva.
        Organize o conteúdo em abas para expandir ou minimizar áreas de interesse, alternando entre
        tabelas e gráficos.
      </SectionParagraph>
    </Inform>
  );
};

export default Dashboard;
