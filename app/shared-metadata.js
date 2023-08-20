const TITLE = process.env.NEXT_PUBLIC_TITLE || '';
const DESCRIPTION = process.env.NEXT_PUBLIC_DESCRIPTION || '';
const URL = process.env.NEXT_PUBLIC_URL || '';

const sharedMetadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'Gestão de Frota',
    'Gestão Avançada de Frota',
    'Sistema de Gerenciamento de Frotas',
    'Controle de Abastecimentos para Frotas',
    'Reconhecimento Facial em Postos',
    'Assinatura Digital em Postos',
    'Biometria em Postos',
    'Reconhecimento Facial em Postos de Combustível',
    'Assinatura Digital em Postos de Combustível',
    'Biometria em Postos de Combustível',
    'Reconhecimento Facial em Abastecimentos',
    'Assinatura Digital em Abastecimentos',
    'Biometria em Abastecimentos',
    'Notificações de Abastecimento',
    'Gerenciamento de Frotas',
    'Gerenciamento de Frotas em Tempo Real',
    'Cadastro de Frotistas',
    'Cadastro para Frotistas',
    'Cadastro Centralizado para Frotistas',
    'Acesso a Múltiplos Postos',
    'Controle  de Abastecimento',
    'Restrições de Abastecimento',
    'Controle e Restrições de Abastecimento',
    'Gerenciamento de Frotas para Postos',
    'Gerenciamento de Frotas para Postos de Combustível',
    'Abastecimento de Frotas',
    'Abastecimento de Frotas para Postos',
    'Abastecimento de Frotas para Postos de Combustível',
     'Segurança em Postos',
    'Segurança em Postos de Combustível',
    'Sistema de Notificações para Abastecimentos',
    'Personalização em Sistemas de Postos',
    'Personalização em Sistemas de Postos de Combustível',
  ],
  alternates: {
    canonical: URL,
  },
  authors: [
    {
      name: 'Guga Zimmermann - gugazimmermann@gmail.com',
      url: 'https://www.linkedin.com/in/guga-zimmermann/',
    },
  ],
  creator: 'Guga Zimmermann',
  publisher: 'Guga Zimmermann',
};

export default sharedMetadata;
