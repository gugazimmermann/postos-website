const faq = [
  {
    id: 1,
    name: 'Geral',
    items: [
      {
        id: 1,
        question: 'O que representa o Touch Postos?',
        text: 'O Touch Postos é uma plataforma avançada para o gerenciamento de frotas em Postos de Combustível. Desenvolvemos uma solução robusta que centraliza o controle rigoroso dos abastecimentos de veículos de frotas, oferecendo funcionalidades como autenticação de abastecimentos, acompanhamento do faturamento, relatórios detalhados, notificações em tempo real e promoções personalizadas para atender às suas necessidades específicas.',
      },
      {
        id: 2,
        question: 'Existe uma taxa mensal?',
        text: 'Sim, a nossa tarifa é baseada no número de clientes ativos que abasteceram no mês corrente, independentemente do número de abastecimentos realizados por cada cliente. Assim, se você tiver 50 clientes, mas somente 12 clientes que abasteceram no mês, será cobrado apenas pela utilização desses 12 clientes.',
      },
      {
        id: 3,
        question: 'Como é determinado o custo por cliente?',
        text: 'Nossa estrutura de cobrança é progressiva: até 10 clientes, o valor é de R$ 50,00 fixos; de 11 a 100 clientes, o custo é de R$ 5,00 por cliente; e para mais de 100 clientes, o custo por cliente é de R$ 3,50. Por exemplo, se você tiver 12 clientes que abasteceram no mês, a tarifa será de R$ 60,00. Para 120 clientes, a cobrança será de R$ 570,00, calculada como R$ 500,00 pelos primeiros 100 clientes e R$ 70,00 pelos 20 clientes adicionais.',
      },
      {
        id: 4,
        question: 'Existem custos adicionais?',
        text: 'Não, a nossa cobrança é transparente e baseia-se exclusivamente no número de clientes ativos. No entanto, serviços extras como personalizações e desenvolvimento de novos relatórios podem incorrer em custos adicionais.',
      },
      {
        id: 5,
        question: 'Há um período mínimo de utilização?',
        text: 'Não, oferecemos a flexibilidade de encerrar a utilização do serviço a qualquer momento. Se não houver nenhum cliente ativo em um dado mês, não será gerada qualquer cobrança.',
      },
      {
        id: 6,
        question: 'Como faço para começar a usar o sistema?',
        text: 'Para começar, basta clicar em "Cadastro" no topo da página e fornecer os detalhes da sua organização. Após isso, você deverá registrar seu(s) posto(s) e começar a convidar seus clientes para o sistema.',
      },
      {
        id: 7,
        question: 'O sistema oferece suporte técnico?',
        text: 'Sim, oferecemos um suporte técnico altamente responsivo e competente. Estamos disponíveis por e-mail ou whatsapp online para ajudar você com qualquer pergunta ou dificuldade que possa ter. Nosso objetivo é garantir que você possa utilizar o sistema da maneira mais eficiente possível.',
      },
      {
        id: 8,
        question: 'É possível personalizar as funcionalidades do sistema?',
        text: 'Absolutamente! Estamos dedicados a fornecer uma solução que atenda perfeitamente às suas necessidades específicas. Podemos personalizar funcionalidades existentes ou desenvolver novas funcionalidades para garantir que o sistema seja perfeitamente adequado para o seu negócio. Veja mais em Personalizações e Novos Relatórios na parte inferior do site.',
      },
      {
        id: 9,
        question: 'Como o sistema garante a segurança dos dados?',
        text: 'Levamos a segurança dos seus dados muito a sério. Utilizamos tecnologias de ponsta, servidores na núvem seguros e práticas recomendadas de segurança da indústria para proteger todas as informações armazenadas em nossa plataforma. Além disso, realizamos backups regulares e temos políticas estritas de controle de acesso para garantir a integridade e a segurança dos seus dados.. Veja mais em Tecnologias Utilizadasa parte inferior do site.',
      },
    ],
  },
  {
    id: 2,
    name: 'Organizações',
    items: [
      {
        id: 1,
        question: 'O que caracteriza uma "Organização" no Touch Postos?',
        text: 'No contexto do Touch Postos, uma "Organização" é a entidade que administra um ou mais postos de combustível. Ela representa o nível mais elevado de controle dentro do sistema, permitindo uma gestão centralizada e abrangente de todas as operações e informações relativas aos postos que estão sob sua gestão.',
      },
      {
        id: 2,
        question: 'Existe um limite para o número de postos que posso cadastrar sob uma organização?',
        text: 'Não há um limite estabelecido para o número de postos que você pode cadastrar sob uma única organização. O nosso sistema foi projetado para acomodar uma ampla gama de demandas, utilizando tecnologia de ponta em nuvem para garantir uma operação suave e eficiente, independentemente da escala de sua rede de postos.',
      },
      {
        id: 3,
        question: 'Quais são os requisitos para cadastrar um novo posto no sistema?',
        text: 'Para cadastrar um novo posto no sistema, você precisará fornecer informações básicas, como o CNPJ e o endereço do posto. Além disso, será necessário registrar os tipos de combustíveis disponíveis, configurar as assinaturas e estabelecer os níveis de acesso para os usuários que irão operar o sistema nesse posto.',
      },
      {
        id: 4,
        question: 'É possível gerenciar individualmente os postos através da interface da organização?',
        text: 'Sim, através da interface de uma organização, você possui controle abrangente sobre todos os postos cadastrados. Isso inclui a capacidade de ativar ou desativar clientes, motoristas ou veículos individualmente. É importante notar que, uma vez que um cliente, motorista ou veículo é desativado pela organização, ele não pode ser reativado por nenhum posto individualmente até que a organização o torne ativo novamente.',
      },
      {
        id: 5,
        question: 'Como posso acessar relatórios consolidados para todos os postos?',
        text: 'Ao acessar o sistema como uma organização, você terá automaticamente acesso a um painel de controle e relatórios consolidados que abrangem todos os postos sob sua gestão. Além disso, você terá a flexibilidade de explorar gráficos e tabelas individuais para cada posto, cliente, entre outros, permitindo uma análise detalhada e insights valiosos sobre o desempenho e as operações de cada entidade dentro de sua rede.',
      },
      {
        id: 6,
        question: 'Existe um aplicativo para celular disponível para gerenciar as operações da organização?',
        text: 'Atualmente estamos trabalhando para desenvolver um aplicativo que permitirá aos gestores de organização monitorar e gerenciar as operações dos postos. Por enquanto isto pode ser realizado pelo próximo sistema, que foi desenvolvido para se adaptar perfeitamente na tela de um celular.',
      },
      {
        id: 7,
        question: 'Como as organizações podem treinar sua equipe para usar o sistema eficientemente?',
        text: 'Oferecemos tutoriais em vídeo para ajudar sua equipe a se familiarizar com o sistema. Além disso, nosso suporte técnico está sempre disponível para fornecer assistência e responder a qualquer pergunta que você possa ter.',
      }
    ],
  },
  {
    id: 3,
    name: 'Postos',
    items: [
      {
        id: 1,
        question: 'Existe um limite para a quantidade de PdV - Telas de Caixa - que posso configurar?',
        text: 'Não existe um limite pré-estabelecido para a quantidade de Pontos de Venda (PdV) ou Telas de Caixa que você pode configurar em nosso sistema. Você tem a liberdade de configurar quantas forem necessárias para atender às demandas do seu negócio, garantindo assim um funcionamento fluido e eficiente do seu posto de combustível.',
      },
      {
        id: 2,
        question: 'Posso utilizar o sistema se o computador do caixa não possui um navegador?',
        text: 'Sim, você pode! Para atender a esta necessidade, criamos um programa especial que facilita a utilização do Touch Postos em computadores que não possuem um navegador. Este programa abre exclusivamente a interface do Touch Postos, não permitindo a navegação em outros sites da internet, garantindo assim a segurança e a focagem nas operações do posto.',
      },
      {
        id: 3,
        question: 'Como posso gerenciar os produtos no sistema?',
        text: 'Gerenciar produtos no sistema é um processo simples e direto. Você pode adicionar produtos individualmente fornecendo detalhes como categoria, nome e valor, ou, se preferir, pode agilizar o processo importando múltiplos itens através de um arquivo .CSV com essas informações. Uma vez que os produtos estão cadastrados no sistema, você pode determinar quais produtos estarão disponíveis para cada cliente. Os clientes, por sua vez, têm a opção de autorizar determinados produtos para seus respectivos motoristas, proporcionando um controle mais granular e eficiente sobre as transações.',
      },
      {
        id: 4,
        question: 'Como posso personalizar para atender às necessidades específicas do meu posto?',
        text: 'Você pode configurar o sistema de acordo com os seus critérios e requisitos específicos, podendo adaptar desde a interface do caixa até as notificações e emails enviados aos clientes. Veja mais em Personalizações na parte inferior do site.',
      },
      {
        id: 5,
        question: 'É possível alterar o visual do software usado pelos funcionários no ponto de venda?',
        text: 'Sim, oferecemos a opção de personalizar o sistema de caixa, permitindo modificar paletas de cores, layouts, entre outros, para facilitar e agilizar o atendimento ao cliente. Veja mais em Personalizações  na parte inferior do site.',
      },
      {
        id: 6,
        question: 'É possível alterar o visual do software usado pelos funcionários no ponto de venda?',
        text: 'Você pode controlar todas as comunicações com seus clientes, definindo o tom das mensagens, destacando promoções especiais, a marca ou a bandeira do posto. Veja mais em Personalizações na parte inferior do site.',
      },
      {
        id: 7,
        question: 'O que são os Relatórios e Gráficos Personalizados?',
        text: 'São ferramentas que oferecem insights específicos, podem ser sobre o crescimento das vendas, desempenho de campanhas de marketing ou áreas que necessitam de melhorias, por exemplo, permitindo análises mais alinhadas ao seu negócio. O Touch Sistema Postos já oferece uma ampla variedade de relatórios e gráficos, mas se você precisar de algo mais específico, podemos realiza. Veja mais em Novos Relatórios na parte inferior do site.',
      },
    ],
  },
  {
    id: 4,
    name: 'Clientes',
    items: [
      {
        id: 1,
        question: 'Como posso convidar um cliente para o Touch Postos?',
        text: 'Convidar um cliente para o Touch Postos é um processo simples e rápido. Você precisa apenas inserir o endereço de email do cliente e nosso sistema enviará um convite automaticamente. Após receber o convite, o cliente poderá realizar um breve cadastro para começar a utilizar o sistema. Caso já seja um usuário registrado, basta aceitar o convite do posto. Vale ressaltar que, se o convite for realizado pela organização, ele será válido para todos os postos vinculados. Além disso, facilitamos a transição para migrar clientes de outro sistema, oferecendo uma opção para importar os emails através de um arquivo CSV.',
      },
      {
        id: 2,
        question: 'É necessário que eu cadastre os veículos e motoristas dos clientes?',
        text: 'Não, o cadastro de veículos e motoristas é responsabilidade do cliente. Eles têm a autonomia para adicionar e gerenciar seus veículos e motoristas, estabelecer restrições de combustível, monitorar a quilometragem, liberar postos específicos, além de configurar permissões de assinatura e autorizações para produtos diversos. Este processo permite uma gestão mais direta e personalizada por parte do cliente.',
      },
      {
        id: 3,
        question: 'Os clientes têm a liberdade de modificar suas configurações no sistema?',
        text: 'Sim, os clientes podem modificar grande parte das suas configurações no sistema, incluindo atualizações em dados cadastrais, informações de veículos e motoristas, além de ajustes em autorizações e restrições diversas. No entanto, configurações relacionadas ao faturamento permanecem sob controle do posto. Se um cliente deseja modificar aspectos como o período de faturamento, a data de fechamento ou prazos, ele deve solicitar estas mudanças através do sistema. Tais solicitações serão encaminhadas para análise e aprovação do posto responsável.',
      },
      {
        id: 4,
        question: 'Quais informações dos veículos e motorista são fornecidas pelo sistema?',
        text: 'O nosso sistema fornece detalhes abrangentes sobre os veículos, incluindo placa, marca, modelo, ano e a capacidade de verificar restrições de combustíveis em postos específicos, e sobre os motoristas temos registro sobre o nome e CPF, bem como os produtos e assinaturas autorizadas.',
      },
      {
        id: 5,
        question: 'Quais são as facilidades oferecidas aos motoristas através do aplicativo?',
        text: 'O aplicativo oferece funcionalidades como a verificação de rotas para chegar aos postos autorizados (integrados com Google Maps e Waze), a consulta de combustíveis permitidos para o veículo utilizado, visualização dos produtos autorizados no posto, notificação se o veículo tiver restrição no momento que parar no posto, notificação de promoçõs exclusivas, históricos dos abastecimentos, e muito mais.',
      },
    ],
  },  
  {
    id: 5,
    name: 'Abastecimentos',
    items: [
      {
        id: 1,
        question: 'Quais são as opções disponíveis para o caixa buscar informações sobre um veículo?',
        text: 'O caixa tem a flexibilidade de buscar informações sobre um veículo utilizando diversos critérios: podem ser pela placa do veículo, dados do motorista ou dados da empresa. Esta funcionalidade facilita a rápida identificação no sistema e indica se estão ativos ou inativos.',
      },
      {
        id: 2,
        question: 'O caixa será informado sobre as restrições de cada veículo?',
        text: 'Sim, o sistema foi projetado para adaptar-se às necessidades individuais de cada abastecimento. A interface mostrará claramente todas as restrições aplicáveis, como tipo de combustível permitido e a necessidade de inserção da quilometragem, facilitando a operação sem erros. Além disso, apenas os produtos e assinaturas previamente selecionados pelo cliente estarão disponíveis, garantindo uma transação suave e conforme as preferências do cliente.',
      },
      {
        id: 3,
        question: 'O sistema possui integrações?',
        text: 'Sim, no momento temos uma integração fluida com o software Desbravador. Ao instalar nosso programa de integração em um computador no seu posto e configurá-lo com os detalhes do banco de dados do Desbravador, podemos monitorar em tempo real as bombas de combustível, com todas as informações de abastecimento sendo transmitidas diretamente para a tela do caixa.',
      },
      {
        id: 4,
        question: 'Quais são as opções de segurança disponíveis durante o abastecimento?',
        text: 'Durante o abastecimento, priorizamos a segurança através de tecnologias como Assinatura Digital, Reconhecimento Facial, Biometria e Código pelo App, tornando o processo robusto e confiável.',
      },
      {
        id: 5,
        question: 'É possível somente faturar os abastecimentos?',
        text: 'Na verdade, nosso sistema oferece a você a liberdade de escolher a forma de pagamento que preferir, incluindo cartão combustível, dinheiro, pix, etc. No caso de optar pelo faturamento, nosso sistema facilitará o monitoramento do encerramento de faturas e dos prazos correspondentes, garantindo uma gestão financeira eficiente.',
      },
      {
        id: 6,
        question: 'Como o cliente é notificado após um abastecimento?',
        text: 'Ao concluir um abastecimento, o sistema automaticamente notifica o cliente através de uma mensagem no sistema e um e-mail detalhado. Este e-mail em tempo real conterá todas as informações pertinentes sobre o abastecimento, incluindo detalhes do veículo, do motorista e dos produtos, garantindo transparência e mantendo o cliente informado a cada passo.',
      },
    ],
  },  
  {
    id: 6,
    name: 'Assinaturas',
    items: [
      {
        id: 1,
        question: 'Como é implementada a Assinatura Digital no sistema?',
        text: 'O processo de Assinatura Digital é simples e seguro. Durante o abastecimento, o motorista realiza sua assinatura em um tablet disponibilizado no posto. Essa assinatura é então comparada em tempo real com a assinatura original cadastrada no sistema. Se a comparação for bem-sucedida, a assinatura é vinculada ao registro de abastecimento, garantindo uma confirmação autenticada da transação.',
      },
      {
        id: 2,
        question: 'Como o Reconhecimento Facial auxilia no processo de abastecimento?',
        text: 'O Reconhecimento Facial é uma ferramenta que proporciona mais segurança e praticidade durante o abastecimento. Uma webcam captura uma fotografia do motorista no momento da transação (não é necessário que o motorista esteja sozinho na foto). A imagem é então enviada para nossos servidores que a comparam com a fotografia original cadastrada. A imagem capturada fica anexada ao registro de abastecimento, servindo como uma comprovação adicional da transação.',
      },
      {
        id: 3,
        question: 'De que maneira a Biometria é utilizada no sistema?',
        text: 'A Biometria é uma funcionalidade que visa garantir uma maior segurança nas transações. Utilizando um dispositivo especializado disponível no posto, a digital do motorista é capturada e enviada para nossos servidores, onde é comparada com a impressão digital original cadastrada no sistema. Esse processo confere uma camada extra de segurança e autenticação ao processo de abastecimento.',
      },
      {
        id: 4,
        question: 'Como o uso de Códigos facilita o processo de abastecimento?',
        text: 'A funcionalidade de geração de códigos oferece uma maneira ágil e segura de autorizar abastecimentos. O cliente pode gerar um código único de abastecimento através do Touch Postos, que será atribuído ao motorista ou veículo específico. Durante o abastecimento, o motorista acessa o aplicativo e fornece este código ao atendente, facilitando e agilizando o processo de autorização de abastecimento.',
      },
      {
        id: 5,
        question: 'O que fazer se o motorista não tiver uma assinatura cadastrada previamente?',
        text: 'Se o motorista não tiver uma assinatura cadastrada no sistema, não há com o que se preocupar. Ele pode realizar o cadastro rapidamente no momento do abastecimento. Além disso, vale ressaltar que, uma vez cadastrado em qualquer posto que utilize o nosso sistema, a assinatura será válida e poderá ser utilizada em outros postos que também adotam o Touch Postos, facilitando transações futuras.',
      },
      {
        id: 6,
        question: 'O que fazer se não houver nenhum dispositivo de autenticação disponível no momento?',
        text: 'Se por algum motivo não houver dispositivos de autenticação disponíveis, ainda é possível prosseguir com o abastecimento utilizando o método de assinatura manual. Nesse caso, o motorista a assina a nota impressa manualmente. Posteriormente, essa assinatura manual é anexada ao registro de abastecimento no sistema, servindo como uma confirmação da transação.',
      },
    ],
  },  
  {
    id: 7,
    name: 'Faturamentos',
    items: [
      {
        id: 1,
        question: 'O processo de faturamento é automático?',
        text: 'Sim, o processo de faturamento é inteiramente automático, configurado para oferecer máxima eficiência e conveniência. De acordo com a periodicidade estabelecida - mensal, bi-semanal ou semanal - para cada cliente, o nosso sistema realiza verificações diárias das datas de fechamento e dos abastecimentos ainda não faturados, para determinar o momento ideal para a geração de uma nova fatura. Uma vez que a fatura é gerada, tanto o posto quanto o cliente são prontamente notificados, indicando que a fatura está em processo de geração do boleto correspondente. Vale ressaltar que estamos em fase de implementação de um sistema de geração de boletos totalmente automatizado, que promete agilizar ainda mais este processo, proporcionando uma gestão financeira mais fluida e integrada para todas as partes envolvidas. Aguardamos ansiosamente para compartilhar essa atualização com vocês em breve.'
    },
      {
        id: 2,
        question: 'É possível antecipar um faturamento?',
        text: 'Certamente! Ambos, o cliente e o posto, têm a liberdade de escolher abastecimentos específicos para antecipar o pagamento. Enquanto os clientes estão limitados à sua respectiva data de fechamento de fatura, os postos não possuem essa restrição, proporcionando maior flexibilidade na gestão do fluxo de caixa.',
      },
      {
        id: 3,
        question: 'Como posso monitorar os faturamentos?',
        text: 'Oferecemos ferramentas abrangentes para você acompanhar os faturamentos de maneira eficiente. Você pode monitorar as faturas individualmente por cliente ou visualizar a situação de todos os clientes, identificando facilmente faturas pagas, pendentes ou atrasadas. Além disso, através do dashboard, você terá uma visão detalhada dos diferentes estados dos faturamentos, tais como "Aguardando Boleto" ou "Aguardando Confirmação de Pagamento", facilitando a gestão e o acompanhamento do ciclo de faturamento.',
      },
    ],
  },  
  {
    id: 8,
    name: 'Frotista',
    items: [
      {
        id: 1,
        question: 'O que é o Touch Postos e qual sua principal vantagem?',
        text: 'O Touch Postos é uma plataforma centralizada criada para facilitar o gerenciamento de frotas em Postos de Combustível parceiros. A principal vantagem é a liberdade que oferece ao frotista, permitindo o gerenciamento eficiente e centralizado de suas operações em diversos postos, sem a necessidade de re-cadastro.'
    },
      {
        id: 2,
        question: 'Como faço para me cadastrar no sistema?',
        text: 'Se você for convidado por um posto parceiro para se juntar ao sistema e ainda não tiver um cadastro, você poderá criar um de maneira ágil. Se já for cadastrado, simplesmente aceite o convite do posto parceiro.',
      },
      {
        id: 3,
        question: 'Há algum custo envolvido para os Frotistas?',
        text: 'Não, o uso do Touch Postos é completamente gratuito para os Frotistas.',
      },
      {
        id: 4,
        question: 'Quais funcionalidades o sistema oferece para ajudar no gerenciamento de frotas?',
        text: 'O sistema oferece uma série de funcionalidades para um gerenciamento eficaz, como acompanhamento de relatórios de abastecimentos, visualização de gráficos, configuração de datas de faturamento e atualizações de status dos mesmos, recebimento de notificações e e-mails em tempo real sobre abastecimentos, entre outros.',
      },
      {
        id: 5,
        question: 'O que posso controlar através do sistema?',
        text: 'Através do sistema, é possível definir várias restrições e configurações, como o tipo de combustíveis permitido para cada veículo, associar motoristas a veículos específicos, determinar métodos de assinatura, configurar quais produtos cada motorista tem autorização, os postos que pode abastecer, etc, garantindo uma gestão eficaz e segura.',
      },
      {
        id: 6,
        question: 'Como o sistema garante a segurança das minhas operações?',
        text: 'O sistema permite definir uma série de parâmetros de segurança, como locais permitidos para abastecimento, tipos de combustíveis, horários, produtos e tipos de assinatura, garantindo que você tenha controle completo e transparente sobre todas as operações. E cada abastecimento realizado é informado em tempo real por notificação no sistema e email.',
      },
      {
        id: 7,
        question: 'O que o Dashboard do sistema oferece?',
        text: 'O Dashboard do sistema oferece uma visão completa de todas as operações, permitindo monitorar abastecimentos pendentes de todos os postos, acompanhar faturamentos, e acessar relatórios e gráficos detalhados que auxiliam no planejamento e controle da sua frota.',
      },
      {
        id: 8,
        question: 'Há alguma funcionalidade específica para os motoristas?',
        text: 'Sim, para os motoristas, o sistema oferece um aplicativo para celular intuitivo, onde entre outras opções podem identificar postos cadastrados, verificar combustíveis autorizados para seus veículos, produtos liberados, e localizar a rota mais próxima para um posto cadastrado.',
      },
      {
        id: 9,
        question: 'Como posso integrar minha frota ao Touch Postos?',
        text: 'Para integrar sua frota ao sistema, entre em contato com seu posto de combustível preferido e solicite a integração ao Touch Postos.',
      },
    ],
  },  
];

export default faq;
