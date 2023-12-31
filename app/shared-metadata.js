const TITLE = process.env.NEXT_PUBLIC_TITLE || 'Touch Postos';
const DESCRIPTION =
  process.env.NEXT_PUBLIC_DESCRIPTION ||
  'Sistema para Gerenciamento de Frotas para Postos de Combustível';
const URL = process.env.NEXT_PUBLIC_URL || 'https://www.touchsistemas.com.br';

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
  creator: 'Touch Sistemas',
  publisher: 'Touch Sistemas',
  metadataBase: URL,
  openGraph: {
    title: TITLE,
    description:
      'Sistema de Gerenciamento Integrado para Frotas em Postos de Combustível e Frotistas.',
    locale: 'pt_BR',
    type: 'website',
    url: URL,
    siteName: TITLE,
    images: [
      {
        url: `${URL}/images/social/800x600.png`,
        width: 800,
        height: 600,
      },
      {
        url: `${URL}/images/social/1800x1600.png`,
        width: 1800,
        height: 1600,
      },
      {
        url: `${URL}/images/social/1200x630.png`,
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    siteId: '-',
    creator: '@touchsistemas',
    creatorId: '-',
    images: [`${URL}/images/social/1200x628.png`],
  },
};

export default sharedMetadata;
