import { Title, Paragraph, AppTitle } from '../../general';

const GasStationsSchedule = () => {
  return (
    <div id='Agendamentos' className='w-full sm:flex sm:items-center sm:justify-between mt-4'>
      <div className='mt-4 sm:mt-0 sm:px-8 w-full'>
        <Title text='Agendamento de Serviços' />
        <div className='w-full flex flex-col sm:flex-row'>
          <div className='sm:flex-1 mt-8 sm:mt-0'>
            <Paragraph>
              Agendar serviços no <AppTitle /> é sinônimo de simplicidade e conveniência. Os postos
              podem detalhar informações importantes sobre cada serviço, possibilitando que os
              clientes agendem suas visitas com apenas alguns cliques, selecionando os serviços e
              itens desejados facilmente.
            </Paragraph>
            <Paragraph>
              Por exemplo, um posto pode ofertar troca de óleo de segunda a sexta das 8h às 18h, com
              pausa para almoço, e aos sábados das 9h às 12h. A troca de óleo por sí só é um item
              obrigário, com a opção de adicionar a troca de filtros de ar ou combustível. Esses
              serviços podem necessitar de confirmação prévia do posto para garantir a
              disponibilidade de itens na data escolhida.
            </Paragraph>
          </div>
        </div>
        <div className='sm:flex-1'>
          <Paragraph>
            Essa funcionalidade não só facilita o agendamento para os clientes, permitindo escolher
            o dia e horário que preferirem, mas também promove a recorrencia do uso do serviço,
            graças à comodidade e aos lembretes automáticos sobre os próximos serviços necessários,
            acessíveis tanto pelo sistema quanto pelo aplicativo.
          </Paragraph>
        </div>
      </div>
    </div>
  );
};

export default GasStationsSchedule;
