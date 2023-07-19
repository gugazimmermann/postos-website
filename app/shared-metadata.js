const TITLE = process.env.NEXT_PUBLIC_TITLE || '';
const DESCRIPTION = process.env.NEXT_PUBLIC_DESCRIPTION || '';
const URL = process.env.NEXT_PUBLIC_URL || '';

const sharedMetadata = {
  title: TITLE,
  description: DESCRIPTION,
  canonical: URL,
  keywords: [
    'Posto',
    'Posto de Combustível',
    'Posto de Gasolina',
    'Frota',
    'Veículo',
    'Motorista',
    'Abastecimento',
    'Postos',
    'Postos de Combustíveis',
    'Postos de Gasolina',
    'Frotas',
    'Veículos',
    'Motoristas',
    'Abastecimentos',
  ],
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
