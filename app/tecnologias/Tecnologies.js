'use client';

import { useModal } from '../hooks';
import { ModalOpen } from '../components/icons';
import { SectionParagraph } from '../components/layout/sections';
import { AppTitle } from '../components/general';
import Cicd from './Cicd';
import React from './React';
import Amazon from './Amazon';
import ReactNative from './ReactNative';
import Electron from './Electron';
import Go from './Go';

const Tecnologies = () => {
  const { openModal: openCicdModal, Modal: CicdModal } = useModal({
    closeoutside: true,
  });
  const { openModal: openReactModal, Modal: ReactModal } = useModal({
    closeoutside: true,
  });
  const { openModal: openAmazonModal, Modal: AmazonModal } = useModal({
    closeoutside: true,
  });
  const { openModal: openReactNativeModal, Modal: ReactNativeModal } = useModal({
    closeoutside: true,
  });
  const { openModal: openElectronModal, Modal: ElectronModal } = useModal({
    closeoutside: true,
  });
  const { openModal: openGoModal, Modal: GoModal } = useModal({
    closeoutside: true,
  });

  const Button = ({ text, onClick }) => {
    return (
      <button
        onClick={onClick}
        className='text-amber-500 hover:underline hover:cursor-pointer justify-center md:justify-start inline-flex items-center gap-2'
      >
        {text}
        <ModalOpen />
      </button>
    );
  };

  return (
    <>
      <SectionParagraph>
        Em <AppTitle />, estamos comprometidos em proporcionar soluções de gerenciamento de frotas
        que incorporam as últimas inovações tecnológicas. Nossa abordagem é baseada na modernidade,
        visando garantir que nossos sistemas permaneçam à frente do panorama tecnológico.
        Priorizamos oferecer acesso ágil e seguro ao nosso sistema, utilizando as ferramentas mais
        recentes em programação web.
      </SectionParagraph>
      <SectionParagraph>
        Nossos esforços em{' '}
        <Button text='Integração Contínua e Entrega Contínua' onClick={openCicdModal} /> asseguram
        que nosso sistema esteja sempre atualizado, proporcionando um fluxo operacional constante e
        eficaz.
      </SectionParagraph>
      <SectionParagraph>
        Desenvolvemos nosso sistema com a tecnologia{' '}
        <Button text='React' onClick={openReactModal} />, que permite um acesso leve e rápido de
        qualquer computador ou celular com conexão à internet. Não há necessidade de instalação. A
        plataforma se adapta perfeitamente, assegurando desempenho consistente em todos os
        dispositivos. A facilidade de acesso prioriza o gerenciamento de frotas, oferecendo uma
        experiência incomparável.
      </SectionParagraph>
      <SectionParagraph>
        Nossa infraestrutura é completamente suportada pela{' '}
        <Button text='Amazon Web Services (AWS)' onClick={openAmazonModal} />, evidenciando nosso
        comprometimento com a segurança e integridade dos dados. A AWS proporciona um ambiente
        altamente seguro e versátil, cobrindo desde bancos de dados e armazenamento de arquivos até
        envio de e-mails e notificações. Adicionalmente, a AWS possibilita o gerenciamento seguro de
        senhas e até mesmo reconhecimento facial. Essa abordagem nos permite garantir a integridade
        e proteção total de suas informações. Nossos desenvolvedores são certificados como AWS
        Developer, o que se traduz em benefícios significativos para você, assegurando a
        implementação otimizada e segura das soluções na nuvem da Amazon Web Services.
      </SectionParagraph>
      <SectionParagraph>
        Nossos aplicativos móveis são projetados priorizando a experiência do usuário, permitindo
        gerenciamento de frotas de forma prática e eficiente, independente do sistema operacional,
        para isto utilizamos <Button text='React Native' onClick={openReactNativeModal} />.
        Compatíveis com Android e iOS, os aplicativos garantem flexibilidade e facilidade de uso.
      </SectionParagraph>
      <SectionParagraph>
        Destacamos ainda nosso Ponto de Venda (PdV) no caixa, criado com o{' '}
        <Button text='Electron' onClick={openElectronModal} />, uma tecnologia que oferece
        conveniência e segurança. Diferentemente de um navegador web, nosso PdV é instalado
        diretamente no dispositivo, proporcionando acesso direto e rápido ao sistema. É projetado
        exclusivamente para operar nosso sistema, sem permitir navegação na web, o que fortalece a
        segurança e mantém o foco no gerenciamento eficaz das transações. Isso resulta em um
        ambiente controlado e produtivo para suas operações diárias.
      </SectionParagraph>
      <SectionParagraph>
        Além disso, nossa integração com o Desbravador é essencial em nossa gama de serviços. Esta
        integração é fundamental para transmitir de maneira eficiente e precisa os dados de
        abastecimento nas bombas dos postos ao sistema. Usamos a linguagem de programação{' '}
        <Button text='Go' onClick={openGoModal} />, reconhecida por sua eficiência e agilidade,
        garantindo uma conexão robusta entre os sistemas.
      </SectionParagraph>
      <SectionParagraph>
        Em <AppTitle />, acreditamos que a excelência tecnológica é o alicerce do nosso sucesso.
        Continuamos a investir nas melhores práticas tecnológicas, assegurando que nossos clientes
        tenham acesso a soluções inovadoras, eficientes e seguras, atendendo suas necessidades em
        constante transformação.
      </SectionParagraph>
      <CicdModal title='Integração Contínua e Entrega Contínua' scroll={true}>
        <Cicd />
      </CicdModal>
      <ReactModal title='React' scroll={true}>
        <React />
      </ReactModal>
      <AmazonModal title='Amazon Web Services (AWS)' scroll={true}>
        <Amazon />
      </AmazonModal>
      <ReactNativeModal title='React Native' scroll={true}>
        <ReactNative />
      </ReactNativeModal>
      <ElectronModal title='Electron' scroll={true}>
        <Electron />
      </ElectronModal>
      <GoModal title='Go' scroll={true}>
        <Go />
      </GoModal>
    </>
  );
};

export default Tecnologies;
