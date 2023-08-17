import Inform from './Inform';
import { SectionParagraph } from '../../../components/layout/sections';

const imageUrls = ['/images/pagamentos.png', '/images/pagamentos2.png', '/images/pagamentos3.png'];

const Transactions = () => {
  return (
    <Inform side='left' imageUrls={imageUrls} time={10000} title='Gerenciamento de Pagamentos Simplificado'>
      <SectionParagraph>
        Tenha uma visão completa dos pagamentos realizados, pendentes ou em aberto, abrangendo todos
        os postos, um único posto ou um cliente específico, tudo de forma ágil e eficiente. Use
        filtros e ordenações, e exporte dados para o Excel.
      </SectionParagraph>
      <SectionParagraph>
        Identifique rapidamente clientes que aguardam boletos, notas fiscais ou confirmações de
        pagamento. Se necessário, selecione abastecimentos individuais de diferentes postos para
        antecipar o fechamento da fatura antes da data programada, apenas confirmando o dia de
        cobrança.
      </SectionParagraph>
    </Inform>
  );
};

export default Transactions;
