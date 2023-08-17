import Inform from './Inform';
import { SectionParagraph } from '../../../components/layout/sections';

const imageUrls = ['/images/agenda.png', '/images/agenda2.png'];

const Schedule = () => {
  return (
    <Inform side='right' imageUrls={imageUrls}  time={8000} title='Agenda de Serviços Integrada'>
      <SectionParagraph>
        Configure serviços de maneira descomplicada e permita que seus clientes agendem o uso dos
        mesmos. Isso oferece um controle refinado do estoque, permitindo antecipar quais veículos
        precisarão de manutenções específicas, como troca de filtros.
      </SectionParagraph>
      <SectionParagraph>
        Ofereça comodidade aos seus clientes, que receberão lembretes sobre seus agendamentos, e
        obtenha informações valiosas, como a frequência de serviços solicitados.
      </SectionParagraph>
    </Inform>
  );
};

export default Schedule;
