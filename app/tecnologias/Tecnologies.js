'use client';

import { useModal } from '../hooks';
import { ModalOpen } from '../components/icons';
import { SectionParagraph } from '../components/layout/sections';
import Cicd from './Cicd';
import React from './React';
import Amazon from './Amazon';
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
  const { openModal: openElectronModal, Modal: ElectronModal } = useModal({
    closeoutside: true,
  });
  const { openModal: openGoModal, Modal: GoModal } = useModal({
    closeoutside: true,
  });

  const CICDLink = () => {
    return (
      <button
        onClick={openCicdModal}
        className='text-amber-500 hover:underline hover:cursor-pointer justify-center md:justify-start inline-flex items-center gap-2'
      >
        Integração Contínua e Entrega Contínua
        <ModalOpen />
      </button>
    );
  };

  const ReactLink = () => {
    return (
      <button
        onClick={openReactModal}
        className='text-amber-500 hover:underline hover:cursor-pointer justify-center md:justify-start inline-flex items-center gap-2'
      >
        React
        <ModalOpen />
      </button>
    );
  };

  const AmazonLink = () => {
    return (
      <button
        onClick={openAmazonModal}
        className='text-amber-500 hover:underline hover:cursor-pointer justify-center md:justify-start inline-flex items-center gap-2'
      >
        Amazon Web Services (AWS)
        <ModalOpen />
      </button>
    );
  };

  const ElectronLink = () => {
    return (
      <button
        onClick={openElectronModal}
        className='text-amber-500 hover:underline hover:cursor-pointer justify-center md:justify-start inline-flex items-center gap-2'
      >
        Electron
        <ModalOpen />
      </button>
    );
  };

  const GoLink = () => {
    return (
      <button
        onClick={openGoModal}
        className='text-amber-500 hover:underline hover:cursor-pointer justify-center md:justify-start inline-flex items-center gap-2'
      >
        Go
        <ModalOpen />
      </button>
    );
  };

  return (
    <>
      <SectionParagraph>
        No <strong>{process.env.NEXT_PUBLIC_TITLE}</strong>, estamos comprometidos em proporcionar
        soluções de gerenciamento de frotas que incorporam as últimas inovações tecnológicas. Nossa
        abordagem se baseia na modernidade, com o intuito de garantir que nossos sistemas permaneçam
        à frente do panorama tecnológico. Nossa prioridade é oferecer um acesso ágil e seguro ao
        nosso sistema por meio da utilização das ferramentas mais recentes em programação web.
      </SectionParagraph>
      <SectionParagraph>
        Nossos esforços contínuos de <CICDLink /> asseguram que nosso sistema seja sempre
        atualizado, resultando em um fluxo operacional constante e eficaz.
      </SectionParagraph>
      <SectionParagraph>
        Nosso sistema é desenvolvido com a tecnologia <ReactLink />, permitindo acesso leve e rápido
        de qualquer computador ou celular com conexão à internet. Não é necessário instalar nada. A
        plataforma se adapta perfeitamente, garantindo performance consistente em todos os
        dispositivos. A simplicidade de acesso coloca o foco no gerenciamento de frotas,
        proporcionando uma experiência sem igual.
      </SectionParagraph>
      <SectionParagraph>
        Nossa infraestrutura é totalmente suportada pela <AmazonLink />, uma seleção que evidencia
        nosso foco na segurança e solidez dos dados. A AWS oferece um ambiente altamente seguro e
        flexível, que abrange bancos de dados, armazenamento de arquivos e até o envio de e-mails e
        notificações. Além disso, a AWS viabiliza o gerenciamento seguro de senhas e até o
        reconhecimento facial. Com essa abordagem, garantimos a você, nosso cliente, a integridade e
        proteção completa de suas informações. Nossos desenvolvedores possuem certificações como AWS
        Developer, o que se traduz em vantagens significativas para você. Com esse selo, garantimos
        a implementação de soluções na nuvem da Amazon Web Services de maneira otimizada e segura.
      </SectionParagraph>
      <SectionParagraph>
        Nossos aplicativos para celulares são projetados com foco na experiência do cliente,
        permitindo que eles gerenciem suas frotas de maneira prática e eficiente, independentemente
        do sistema operacional de seu dispositivo. Compatíveis tanto com Android quanto iOS, esses
        aplicativos proporcionam flexibilidade e usabilidade.
      </SectionParagraph>
      <SectionParagraph>
        Destacamos também o nosso Ponto de Venda (PdV) no caixa, desenvolvido com o <ElectronLink />
        , uma tecnologia que proporciona praticidade e segurança. Ao contrário de depender de um
        navegador de internet, nosso PdV é instalado diretamente na máquina, garantindo acesso
        direto e rápido ao sistema. Uma característica importante é que ele é projetado
        exclusivamente para operar o nosso sistema, não permitindo navegação na internet, o que
        reforça a segurança e foco no gerenciamento eficiente das transações no caixa. Isso resulta
        em um ambiente controlado e eficaz para suas operações diárias.
      </SectionParagraph>
      <SectionParagraph>
        Além disso, nossa integração com o Desbravador tem um papel central em nosso conjunto de
        serviços. Essa integração é vital para repassar de forma eficiente e precisa os dados de
        abastecimento nas bombas dos postos para o sistema. Para isso, utilizamos a linguagem de
        programação <GoLink />, conhecida por sua eficiência e agilidade, o que contribui para uma
        conexão confiável entre os sistemas.
      </SectionParagraph>
      <SectionParagraph>
        No <strong>{process.env.NEXT_PUBLIC_TITLE}</strong>, acreditamos que a excelência
        tecnológica é a base de nosso sucesso. Continuamos investindo nas melhores práticas
        tecnológicas para garantir que nossos clientes tenham acesso a soluções inovadoras,
        eficientes e seguras que atendam às suas necessidades em constante evolução.
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
