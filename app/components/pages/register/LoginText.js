'use client';

import { useModal } from '../../../hooks';
import { Loading, ModalOpen } from '../../icons';
import { AppTitle } from '../../general';

const OrganizationDataText = ({ name }) => {
  const { openModal, Modal } = useModal({ closeoutside: true });

  const MoreInfoButton = () => {
    return (
      <button
        onClick={openModal}
        className='text-amber-500 hover:underline hover:cursor-pointer text-lg justify-center md:justify-start inline-flex items-center gap-2'
      >
        Entenda Níveis de Acesso
        <ModalOpen />
      </button>
    );
  };

  const nameText = (name) => {
    if (name) {
      return <span className='font-bold'>{name}</span>;
    }
    return <Loading className='text-amber-500' />;
  };

  return (
    <div className='flex flex-col justify-center text-center md:text-left gap-4 w-full md:w-1/3'>
      <h1 className='text-3xl font-bold text-slate-800'>Cadastro no Sistema</h1>
      <p className='text-lg text-slate-600 inline'>
        {nameText(name)}, estamos quase lá, para finalizar complete os dados de acesso.
      </p>
      <MoreInfoButton />
      <Modal title='Níveis de Acesso Personalizados' scroll={true}>
        <div className='flex flex-col justify-center leading-6'>
          <p className='text-slate-800 mb-2'>
            Em <AppTitle />, oferecemos uma maneira intuitiva de gerenciar permissões e acesso. Aqui
            estão os três níveis de acesso que você pode usar para organizar sua estrutura:
          </p>
          <p className='text-slate-800 mb-2'>
            <strong>Código da Organização</strong>: Um identificador único que representa a
            organização, rede ou empresa. Isso garante que cada entidade seja claramente
            diferenciada dentro do <AppTitle />.
          </p>
          <p className='text-slate-800 mb-2'>
            <strong>Código do Posto</strong>: Representa os diferentes Postos operados por cada
            Organização. Este código é único dentro de uma Organização, permitindo uma fácil
            identificação dos locais específicos.
          </p>
          <p className='text-slate-800 mb-2'>
            <strong>Usuários</strong>: Permitem acesso personalizado em cada Posto ou Organização.
            Os usuários são únicos dentro de cada esfera, garantindo identificação clara.
          </p>
          <p className='text-slate-800 mb-2'>
            Por exemplo, mesmo que o mesmo nome de usuário &quot;caixa&quot; seja usado em
            diferentes Postos, eles são tratados separadamente para manter a individualidade.
          </p>
          <p className='text-slate-800 mb-4'>
            Simplificando, nosso sistema oferece uma abordagem eficiente para controlar o acesso e
            as permissões, utilizando esses três níveis. Isso permite uma gestão clara e organizada,
            independentemente do tamanho da sua rede ou Organização.
          </p>
        </div>
      </Modal>
    </div>
  );
};

export default OrganizationDataText;
