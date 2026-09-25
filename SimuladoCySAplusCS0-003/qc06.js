// Questões do arquivo Questionario_cap6.txt, na ordem original.
// Os números do TXT servem apenas como separadores de questões.
const Qs = [
  {
    "t": "Um hospital que também administra um plano de saúde próprio contrata um analista para estruturar a gestão de vulnerabilidades. A diretoria jurídica afirma que a legislação de proteção de informações de saúde já obriga a organização a executar varreduras de vulnerabilidade. Qual avaliação é correta?",
    "opts": [
      "A. A afirmação é válida, pois a legislação aplicável a provedores de saúde impõe diretamente a execução de varreduras periódicas nos ativos que processam informações de saúde protegidas.",
      "B. A afirmação é incorreta, porque essa legislação regula como provedores de saúde, seguradoras e seus parceiros de negócios lidam com informações de saúde protegidas, sem exigir especificamente a realização de varreduras de vulnerabilidade.",
      "C. A afirmação é incorreta, pois a exigência de varreduras recai exclusivamente sobre os parceiros de negócios, e não sobre os provedores de saúde que originam os dados.",
      "D. A afirmação depende do volume de registros tratados, já que a obrigatoriedade de varredura se aplica somente às organizações de saúde acima de determinado porte."
    ],
    "ans": 1,
    "exp": "A legislação que trata de informações de saúde protegidas regula como provedores, seguradoras e parceiros de negócios lidam com esses dados, mas não exige especificamente que as organizações abrangidas conduzam varreduras de vulnerabilidade — muitas dessas leis não são excessivamente prescritivas quanto à implementação de um programa de gestão de vulnerabilidades. A alternativa A afirma uma obrigação inexistente. A alternativa C inventa uma distinção entre provedores e parceiros que a lei não estabelece nesse ponto. A alternativa D cria um critério de porte sem respaldo."
  },
  {
    "t": "Uma empresa que processa transações com cartões de pagamento e presta serviços a uma agência do governo federal norte-americano está mapeando obrigações externas de segurança. Qual conclusão é correta sobre a exigência de um programa de gestão de vulnerabilidades?",
    "opts": [
      "A. Nenhum dos dois regimes exige formalmente o programa, cabendo à organização definir a necessidade com base em política interna e no apetite a risco.",
      "B. Apenas o regime aplicável ao processamento de cartões de pagamento determina a implementação do programa, pois as obrigações governamentais tratam apenas de classificação de dados.",
      "C. Apenas o regime aplicável aos sistemas federais determina a implementação do programa, já que as regras do setor de cartões se limitam à proteção do armazenamento dos dados de portadores.",
      "D. Ambos os regimes determinam especificamente a implementação de um programa de gestão de vulnerabilidades."
    ],
    "ans": 3,
    "exp": "Dois esquemas regulatórios determinam especificamente a implementação de um programa de gestão de vulnerabilidades: o padrão de segurança de dados da indústria de cartões de pagamento e a lei federal de gestão de segurança da informação. A alternativa A nega a existência de obrigação externa, quando ela existe nos dois casos. As alternativas B e C reconhecem apenas um dos regimes e atribuem ao outro um escopo restrito que não corresponde à sua exigência de gestão de vulnerabilidades."
  },
  {
    "t": "Uma organização iniciará a construção de seu programa de gestão de vulnerabilidades. Qual deve ser a primeira etapa e o que caracteriza um programa eficaz?",
    "opts": [
      "A. Identificar os requisitos internos e externos de varredura, que podem advir dos ambientes regulatórios aplicáveis ou de políticas internas, sustentando um programa que varre os ativos, remedia por fluxo de trabalho definido e realiza avaliação contínua.",
      "B. Executar imediatamente uma varredura abrangente de todos os ativos, pois o inventário de vulnerabilidades resultante é o insumo que define quais requisitos regulatórios se aplicam à organização.",
      "C. Definir o fluxo de trabalho de remediação e os prazos de correção, já que os requisitos regulatórios são incorporados ao programa apenas na fase de avaliação contínua.",
      "D. Priorizar as vulnerabilidades já conhecidas dos sistemas críticos, uma vez que a identificação de requisitos externos só é necessária em organizações sujeitas a regimes regulatórios prescritivos."
    ],
    "ans": 0,
    "exp": "Ao desenvolver o programa, a organização deve primeiro identificar quaisquer requisitos internos ou externos de varredura, que podem vir dos ambientes regulatórios aplicáveis ou de políticas internas; programas eficazes usam abordagem organizada para varrer os ativos, um fluxo de trabalho definido para remediar e avaliação contínua para dar visibilidade do estado da segurança. A alternativa B inverte a ordem, tratando a varredura como origem dos requisitos. A alternativa C posterga a análise regulatória para uma etapa posterior. A alternativa D condiciona a identificação de requisitos externos apenas a regimes prescritivos."
  },
  {
    "t": "Uma rede varejista precisa demonstrar conformidade quanto às varreduras de vulnerabilidade exigidas pelo padrão do setor de cartões de pagamento. A equipe interna possui analistas qualificados e pretende executar todas as varreduras internamente para reduzir custos. Qual orientação é correta?",
    "opts": [
      "A. A execução interna atende ao padrão em ambos os casos, desde que os analistas responsáveis sejam qualificados e as varreduras ocorram no mínimo trimestralmente.",
      "B. As varreduras internas podem ser conduzidas pelo pessoal qualificado da própria organização, mas as varreduras externas precisam ser realizadas por um Fornecedor de Varredura Aprovado autorizado pelo conselho do setor.",
      "C. Todas as varreduras precisam ser conduzidas por um Fornecedor de Varredura Aprovado, já que resultados produzidos internamente não são aceitos como evidência de conformidade.",
      "D. A organização pode executar as varreduras externas internamente e submeter os relatórios a um Fornecedor de Varredura Aprovado para validação posterior."
    ],
    "ans": 1,
    "exp": "O padrão determina que as varreduras internas sejam conduzidas por pessoal qualificado e que as varreduras externas sejam realizadas por um Fornecedor de Varredura Aprovado autorizado pelo conselho do setor. A alternativa A ignora essa distinção e permite execução interna também no escopo externo. A alternativa C exige o fornecedor aprovado para todas as varreduras, quando as internas podem ser feitas por pessoal qualificado da organização. A alternativa D inverte o papel do fornecedor aprovado, que conduz a varredura externa em vez de apenas validar relatórios produzidos internamente."
  },
  {
    "t": "Que lei federal exige o uso de varreduras de vulnerabilidades em sistemas de informação operados por órgãos do governo federal?",
    "opts": [
      "A) HIPAA",
      "B) GLBA",
      "C) FISMA",
      "D) FERPA"
    ],
    "ans": 2,
    "exp": "A Lei Federal de Gestão da Segurança da Informação (FISMA) exige que os órgãos federais implementem programas de gerenciamento de vulnerabilidades para sistemas de informação federais. A Lei de Portabilidade e Responsabilidade de Seguros de Saúde (HIPAA) regulamenta as formas pelas quais prestadores de serviços de saúde, seguradoras e seus parceiros de negócios tratam informações de saúde protegidas (PHI). Da mesma forma, a Lei Gramm–Leach–Bliley (GLBA) rege a maneira como as instituições financeiras tratam os registros financeiros dos clientes. A Lei de Direitos Educacionais e Privacidade da Família (FERPA), que não é abordada neste capítulo nem no exame CySA+, permite que os pais acessem os registros educacionais de seus filhos."
  },
  {
    "t": "Qual das seguintes normas do setor descreve uma abordagem padronizada para estabelecer um sistema de gestão da segurança da informação?",
    "opts": [
      "A) OWASP",
      "B) CIS",
      "C) ISO 27002",
      "D) ISO 27001"
    ],
    "ans": 3,
    "exp": "A ISO 27001 descreve uma abordagem padronizada para estabelecer um sistema de gestão da segurança da informação, enquanto a ISO 27002 entra em mais detalhes sobre os aspectos específicos dos controles de segurança da informação. O Projeto Aberto de Segurança de Aplicações Web (OWASP) fornece orientações e ferramentas voltadas à segurança de aplicações web. O Centro de Segurança da Internet (CIS) produz um conjunto de padrões de referência de configuração usados para configurar com segurança sistemas operacionais, aplicações e dispositivos."
  },
  {
    "t": "Durante uma reunião de conformidade, o diretor jurídico de uma empresa afirma que o descumprimento das exigências de varredura do padrão do setor de cartões de pagamento configura infração legal. Além disso, questiona por que a equipe executou varreduras próprias antes da avaliação oficial. Qual resposta é correta?",
    "opts": [
      "A. O padrão é mantido por um grupo do setor e vincula as organizações por requisitos contratuais, e não por lei; varreduras próprias prévias servem para verificar se o resultado será satisfatório antes da avaliação oficial.",
      "B. O padrão tem força legal nas jurisdições que o adotaram formalmente, e as varreduras prévias são obrigatórias como etapa preparatória exigida antes da avaliação oficial.",
      "C. O padrão não é uma lei, mas as varreduras prévias devem ser evitadas, pois a duplicidade de relatórios compromete a validade da avaliação conduzida pelo fornecedor aprovado.",
      "D. O padrão vincula apenas os prestadores de serviços que apoiam os comerciantes, e as varreduras prévias são realizadas para suprir a ausência de exigência direta sobre os comerciantes."
    ],
    "ans": 0,
    "exp": "O padrão não é uma lei: é mantido por um grupo do setor financiado para preservar os requisitos, e as organizações se sujeitam a ele por requisitos contratuais. Muitas organizações conduzem suas próprias varreduras primeiro para se certificarem de que alcançarão um resultado satisfatório antes de solicitar a varredura oficial. A alternativa B atribui força legal ao padrão e transforma a prática preparatória em obrigação. A alternativa C acerta quanto à natureza não legal, mas desaconselha uma prática comum e legítima. A alternativa D restringe o alcance do padrão, que cobre comerciantes e prestadores de serviços."
  },
  {
    "t": "Uma agência federal opera um sistema categorizado como de baixo impacto e a equipe de TI argumenta que, por essa razão, ele estaria dispensado dos requisitos básicos de varredura de vulnerabilidades. Qual avaliação é correta?",
    "opts": [
      "A. A dispensa é válida apenas se a categorização de baixo impacto se aplicar simultaneamente aos três objetivos de segurança avaliados.",
      "B. A dispensa procede, pois a categorização define quais controles são exigidos e sistemas de baixo impacto ficam fora do escopo da varredura periódica.",
      "C. Todos os sistemas de informação federais devem atender aos requisitos básicos de varredura de vulnerabilidades, independentemente de sua categorização de impacto.",
      "D. A dispensa depende de aprovação formal da agência, que pode substituir a varredura por monitoramento contínuo de configurações."
    ],
    "ans": 2,
    "exp": "Todos os sistemas de informação federais, independentemente da categorização de impacto, devem atender aos requisitos básicos de varredura de vulnerabilidades, que estabelecem uma linha de base para esses sistemas. A categorização determina quais controles específicos são exigidos, mas não isenta da varredura. A alternativa A cria uma condição inexistente baseada na coincidência de níveis entre os objetivos. A alternativa B confunde o papel da categorização com dispensa de escopo. A alternativa D inventa um mecanismo de substituição por aprovação interna."
  },
  {
    "t": "Ao categorizar um sistema, uma equipe conclui que a divulgação não autorizada das informações nele mantidas poderia causar efeito adverso severo ou catastrófico sobre as operações e os ativos da organização. Qual classificação corresponde a essa avaliação?",
    "opts": [
      "A. Confidencialidade em nível de impacto moderado, já que o efeito recai sobre operações e ativos organizacionais, e não diretamente sobre indivíduos.",
      "B. Integridade em nível de impacto alto, uma vez que a exposição das informações compromete sua autenticidade e o não repúdio.",
      "C. Disponibilidade em nível de impacto alto, pois a divulgação indevida inviabiliza o uso confiável das informações pelo titular.",
      "D. Confidencialidade em nível de impacto alto."
    ],
    "ans": 3,
    "exp": "A confidencialidade trata da preservação das restrições autorizadas sobre acesso e divulgação de informações; quando a divulgação não autorizada poderia ter efeito adverso severo ou catastrófico sobre operações, ativos ou indivíduos, o impacto é alto. A alternativa A rebaixa o nível para moderado, que corresponde a efeito sério, e cria uma distinção indevida entre organização e indivíduos. A alternativa B trata de modificação ou destruição indevida, não de divulgação. A alternativa C se refere à interrupção do acesso ou do uso da informação, o que não descreve o cenário apresentado."
  },
  {
    "t": "Uma organização que opera em nome de uma agência federal está estruturando seu processo de gestão de vulnerabilidades. Qual conjunto de práticas corresponde aos requisitos aplicáveis?",
    "opts": [
      "A. Monitorar e varrer o sistema e as aplicações hospedadas, reportar novas vulnerabilidades identificadas, remediar as vulnerabilidades legítimas conforme avaliação de risco organizacional e compartilhar as informações obtidas para eliminar fraquezas semelhantes em outros sistemas.",
      "B. Varrer o sistema e as aplicações hospedadas, remediar imediatamente todas as vulnerabilidades encontradas, independentemente de avaliação de risco, e restringir os resultados ao sistema avaliado para preservar sua confidencialidade.",
      "C. Empregar ferramentas proprietárias dedicadas a cada plataforma, evitando padrões de interoperabilidade, e consolidar os achados em relatórios analisados apenas após o encerramento do ciclo anual de avaliação.",
      "D. Monitorar continuamente as configurações do sistema, delegar a análise dos relatórios ao fornecedor da ferramenta de varredura e atualizar a base de vulnerabilidades verificadas somente nas revisões programadas de escopo."
    ],
    "ans": 0,
    "exp": "Os requisitos determinam monitorar e varrer o sistema e as aplicações hospedadas e reportar novas vulnerabilidades identificadas, analisar os relatórios e resultados do monitoramento, remediar as vulnerabilidades legítimas conforme avaliação de risco organizacional e compartilhar as informações obtidas para eliminar vulnerabilidades semelhantes em outros sistemas. A alternativa B descarta a avaliação de risco e o compartilhamento. A alternativa C rejeita a interoperabilidade entre ferramentas, que é exigida, e posterga a análise dos relatórios. A alternativa D transfere a análise ao fornecedor e contraria a exigência de ferramentas capazes de atualizar prontamente as vulnerabilidades verificadas."
  },
  {
    "t": "Uma empresa de logística não processa transações com cartões de pagamento nem opera sistemas governamentais. A diretoria questiona a necessidade de manter varreduras de vulnerabilidade, já que nenhuma exigência regulatória se aplica ao negócio. Qual argumento sustenta a manutenção do programa?",
    "opts": [
      "A. A ausência de exigência regulatória é irrelevante, pois os regimes prescritivos aplicáveis a varejo e governo se estendem por analogia a organizações de outros setores.",
      "B. A gestão de vulnerabilidades é amplamente reconhecida como componente crítico de qualquer programa de segurança da informação, razão pela qual muitas organizações determinam a varredura em política corporativa mesmo sem imposição regulatória.",
      "C. A manutenção do programa se justifica apenas se a empresa pretender obter certificação em um padrão do setor que exija a prática como controle formal.",
      "D. A obrigatoriedade decorre da adoção de benchmarks de configuração publicados por entidades do setor, que incorporam a varredura periódica como requisito contratual."
    ],
    "ans": 1,
    "exp": "Os requisitos prescritivos de varejo e governo cobrem apenas uma fração das empresas; ainda assim, há amplo consenso entre profissionais de que a gestão de vulnerabilidades é componente crítico de qualquer programa de segurança da informação, e por isso muitas organizações determinam a varredura em política corporativa mesmo sem exigência regulatória. A alternativa A estende indevidamente regimes prescritivos por analogia. A alternativa C condiciona a prática a uma certificação. A alternativa D transforma benchmarks de configuração em requisito contratual de varredura."
  },
  {
    "t": "Uma equipe precisa definir a configuração segura de uma nova frota de servidores, aplicações e dispositivos de rede, dentro de um prazo curto. Qual abordagem é mais apropriada?",
    "opts": [
      "A. Desenvolver os padrões internamente a partir do zero, pois somente configurações elaboradas sob medida refletem o ambiente específico da organização.",
      "B. Adotar exclusivamente as configurações padrão de fábrica recomendadas por cada fabricante, uma vez que representam o consenso técnico sobre as plataformas envolvidas.",
      "C. Partir de benchmarks de segurança publicados por entidades do setor, que reúnem opiniões consensuais de especialistas e trazem instruções detalhadas de configuração, usando-os como base para os padrões personalizados da organização.",
      "D. Aplicar integralmente os benchmarks publicados sem qualquer ajuste posterior, já que qualquer personalização enfraquece a base de segurança estabelecida pelos especialistas."
    ],
    "ans": 2,
    "exp": "Profissionais de segurança devem se apoiar no trabalho de outros ao criar padrões; os benchmarks publicados representam opiniões consensuais de especialistas e fornecem instruções detalhadas de configuração para sistemas operacionais, aplicações e dispositivos, servindo de excelente ponto de partida e economizando incontáveis horas de trabalho. A alternativa A descarta essa base pronta. A alternativa B confunde configurações de fábrica com benchmarks consensuais. A alternativa D trata os benchmarks como definitivos, quando são um ponto de partida para padrões personalizados."
  },
  {
    "t": "Ao justificar a adoção de padrões de segurança do setor, um analista precisa explicar que benefícios esses controles trazem para a postura de segurança da organização. Qual descrição é correta?",
    "opts": [
      "A. Esses padrões reduzem a probabilidade de que vulnerabilidades existam no ambiente, melhoram a capacidade de detectar as que venham a ocorrer e mitigam o risco representado por vulnerabilidades não detectadas.",
      "B. Esses padrões garantem a eliminação das vulnerabilidades do ambiente, dispensando a organização de manter processos próprios de detecção após a implantação.",
      "C. Esses padrões atuam sobre a detecção e a resposta, mas não influenciam a probabilidade de que vulnerabilidades surjam no ambiente, o que depende exclusivamente do ciclo de correções do fornecedor.",
      "D. Esses padrões concentram-se em reduzir o impacto financeiro de incidentes, transferindo o tratamento das vulnerabilidades remanescentes para os controles compensatórios definidos em política."
    ],
    "ans": 0,
    "exp": "Os padrões de segurança incluem controles que reduzem a probabilidade de existência de vulnerabilidades no ambiente, posicionam a organização para detectar melhor as que ocorrerem e mitigam o risco representado por vulnerabilidades não detectadas. A alternativa B promete eliminação total e dispensa de detecção. A alternativa C nega o efeito preventivo desses controles, atribuindo-o só ao fornecedor. A alternativa D desloca o foco para impacto financeiro e controles compensatórios, o que não corresponde ao papel descrito."
  },
  {
    "t": "Que ferramenta os administradores podem usar para ajudar a identificar os sistemas presentes em uma rede antes de realizar varreduras de vulnerabilidades?",
    "opts": [
      "A) Inventário de ativos",
      "B) Avaliação de aplicações web",
      "C) Roteador",
      "D) DLP"
    ],
    "ans": 0,
    "exp": "Um inventário de ativos complementa as ferramentas automatizadas com outras informações para detectar os sistemas presentes em uma rede. O inventário de ativos fornece informações essenciais para as varreduras de vulnerabilidades."
  },
  {
    "t": "Tonya está configurando varreduras de vulnerabilidades para um sistema sujeito ao padrão de conformidade PCI DSS. Qual é a frequência mínima com que ela deve realizar as varreduras?",
    "opts": [
      "A) Diariamente",
      "B) Semanalmente",
      "C) Mensalmente",
      "D) Trimestralmente"
    ],
    "ans": 3,
    "exp": "O PCI DSS exige que as organizações realizem varreduras de vulnerabilidades pelo menos trimestralmente, embora muitas organizações optem por realizar as varreduras com uma frequência muito maior."
  },
  {
    "t": "Uma organização deseja estabelecer formalmente um sistema de gestão de segurança da informação e busca uma certificação oficial que ateste sua conformidade. Qual referência atende a esse objetivo e como ela se distingue da norma complementar da mesma família?",
    "opts": [
      "A. A ISO 27002, que estabelece a abordagem padronizada para o sistema de gestão, enquanto a ISO 27001 detalha os controles de segurança da informação.",
      "B. A ISO 27001, que descreve a abordagem padronizada para estabelecer o sistema de gestão de segurança da informação e permite certificação oficial, enquanto a ISO 27002 detalha os controles de segurança da informação.",
      "C. A ISO 27001, que concentra a especificação detalhada dos controles técnicos de segurança, sendo a ISO 27002 voltada às práticas de codificação segura de aplicações.",
      "D. Ambas as normas permitem certificação oficial e se diferenciam apenas pelo escopo geográfico de aplicação definido pela entidade normalizadora."
    ],
    "ans": 1,
    "exp": "A ISO 27001 descreve uma abordagem padronizada para estabelecer um sistema de gestão de segurança da informação, e organizações podem se certificar oficialmente como conformes a ela; a ISO 27002 entra no detalhe dos controles de segurança da informação. A alternativa A inverte o papel das duas normas. A alternativa C também inverte a função da 27001 e atribui à 27002 o foco em codificação segura, que é característico de outro tipo de recurso. A alternativa D cria uma distinção por escopo geográfico que não existe e estende a certificação a ambas."
  },
  {
    "t": "Uma equipe de desenvolvimento precisa orientar práticas de codificação segura e configurar o scanner usado nas varreduras das aplicações web da empresa, adotando uma referência central de vulnerabilidades. Qual recurso é mais adequado?",
    "opts": [
      "A. Os benchmarks de configuração publicados por entidades do setor, que reúnem o consenso de especialistas sobre a configuração segura de sistemas e aplicações.",
      "B. A série de normas internacionais de segurança da informação, cuja especificação de controles serve como referência central para varreduras de aplicações web.",
      "C. O padrão de segurança de dados do setor de cartões de pagamento, cujos requisitos prescritivos orientam a codificação segura das aplicações que tratam desses dados.",
      "D. Os materiais mantidos pela comunidade dedicada à segurança de aplicações web, que incluem guias e melhores práticas e uma lista de vulnerabilidades significativas atualizada periodicamente."
    ],
    "ans": 3,
    "exp": "O OWASP é um dos melhores recursos para práticas de codificação segura, hospeda padrões, guias e documentos de melhores práticas da comunidade e mantém uma lista regularmente atualizada de vulnerabilidades significativas; scanners de vulnerabilidades costumam ser configurados para usar essa lista como referência central em varreduras de aplicações web. A alternativa A aponta benchmarks voltados à configuração de sistemas, aplicações e dispositivos. A alternativa B trata de normas de gestão e controles, não dessa referência de varredura. A alternativa C descreve um padrão setorial de proteção de dados de cartões."
  },
  {
    "t": "Uma organização já definiu que conduzirá varreduras de vulnerabilidade e concluiu a análise dos requisitos regulatórios aplicáveis. Qual é o próximo passo do planejamento e quais fatores orientam essa etapa?",
    "opts": [
      "A. Identificar os sistemas que serão cobertos pelas varreduras, considerando fatores como a classificação dos dados tratados, a exposição a redes públicas ou semipúblicas, os serviços oferecidos e se o sistema é de produção, teste ou desenvolvimento.",
      "B. Definir a frequência das varreduras e os prazos de remediação, pois esses parâmetros determinam quais sistemas entrarão no escopo do programa.",
      "C. Configurar o scanner para cobrir integralmente todos os sistemas conectados, já que qualquer recorte de escopo compromete a validade do programa de gestão de vulnerabilidades.",
      "D. Classificar os ativos por criticidade com base no tipo de sistema e nas informações manipuladas, etapa que antecede e viabiliza a construção do inventário de ativos."
    ],
    "ans": 0,
    "exp": "Após decidir conduzir as varreduras e determinar os requisitos regulatórios aplicáveis, o passo seguinte é identificar os sistemas que serão cobertos, considerando a classificação de dados, a exposição à internet ou a outras redes públicas ou semipúblicas, os serviços oferecidos e se o sistema é de produção, teste ou desenvolvimento. A alternativa B inverte a ordem, pois frequência e prioridades derivam de inventário e criticidade. A alternativa C impõe cobertura total, quando algumas organizações varrem sistemas de forma diferente ou não os varrem. A alternativa D inverte a sequência: o inventário vem antes e é complementado com dados que permitem julgar criticidade."
  },
  {
    "t": "Uma equipe utilizou a funcionalidade de inventário de ativos de um scanner para mapear a rede e agora precisa decidir quais tipos de varredura executar, com que frequência e como priorizar as correções. Qual abordagem é mais apropriada?",
    "opts": [
      "A. Aplicar o mesmo tipo e a mesma frequência de varredura a todos os hosts descobertos, priorizando a remediação pela ordem em que as vulnerabilidades forem detectadas.",
      "B. Priorizar exclusivamente os hosts identificados como desconhecidos ou não autorizados no mapa, já que os demais sistemas constam do inventário aprovado.",
      "C. Complementar o inventário com informações sobre o tipo de sistema e as informações que ele manipula, usando inventário e criticidade de ativos para orientar os tipos de varredura, a frequência e a prioridade de remediação.",
      "D. Basear as decisões apenas no total de hosts identificados no bloco de rede, pois o volume de ativos define o esforço de varredura e a cadência adequada."
    ],
    "ans": 2,
    "exp": "Os administradores complementam o inventário com informações sobre o tipo de sistema e os dados que ele manipula, o que permite determinar quais sistemas são críticos; inventário e criticidade de ativos orientam os tipos de varredura realizados, sua frequência e a prioridade de remediação das vulnerabilidades detectadas. A alternativa A uniformiza tratamento e ignora criticidade. A alternativa B restringe o escopo a hosts não catalogados, deixando de fora sistemas críticos conhecidos. A alternativa D reduz a decisão ao volume de hosts, sem considerar a importância de cada ativo."
  },
  {
    "t": "Uma varejista on-line precisa aumentar a frequência das varreduras de vulnerabilidade, mas a equipe de operações relata que as varreduras mais abrangentes coincidem com os períodos de maior volume de pedidos e ameaçam interromper processos críticos. Qual fator está em jogo nessa decisão?",
    "opts": [
      "A. Restrições operacionais, que podem impedir a condução de varreduras intensivas em recursos durante períodos de alta atividade de negócio.",
      "B. Restrições de desempenho, pois o sistema de varredura só consegue executar um número limitado de varreduras por dia.",
      "C. Limitações de licenciamento, que restringem a largura de banda consumida pelo scanner e o número de varreduras simultâneas.",
      "D. Apetite a risco, já que a organização está disposta a tolerar o impacto operacional em troca de detecção mais rápida."
    ],
    "ans": 0,
    "exp": "Restrições operacionais podem impedir a organização de conduzir varreduras que consomem muitos recursos durante períodos de alta atividade de negócio, justamente para evitar a interrupção de processos críticos. A alternativa B trata da capacidade do sistema de varredura, que limita quantas varreduras cabem por dia — um problema de desempenho, não de janela de negócio. A alternativa C se refere a limites impostos pela licença, como banda e varreduras simultâneas. A alternativa D descreve a disposição de tolerar risco, que influencia a frequência desejada, mas não é a restrição que cria o conflito relatado."
  },
  {
    "t": "Uma organização acaba de adquirir uma solução de varredura de vulnerabilidades e pretende colocá-la em produção cobrindo todo o parque tecnológico já no primeiro ciclo, com varreduras diárias e abrangentes. Qual recomendação é mais apropriada?",
    "opts": [
      "A. Manter o plano, desde que os requisitos regulatórios aplicáveis estabeleçam frequência mínima inferior à adotada, o que garante margem de conformidade.",
      "B. Iniciar com escopo reduzido e expandir gradualmente o escopo e a frequência ao longo do tempo, evitando sobrecarregar a infraestrutura de varredura e os sistemas da empresa.",
      "C. Manter a cobertura total desde o início, ajustando apenas a frequência conforme o apetite a risco definido pela direção.",
      "D. Restringir permanentemente o escopo aos sistemas críticos, pois ampliar a cobertura tende a exceder os limites impostos pela licença da ferramenta."
    ],
    "ans": 1,
    "exp": "Ao planejar um programa de varredura, é sábio começar pequeno e expandir lenta e gradualmente o escopo e a frequência ao longo do tempo, para evitar sobrecarregar a infraestrutura de varredura ou os sistemas da empresa. A alternativa A trata a conformidade como único critério, ignorando desempenho e operação. A alternativa C mantém a cobertura total imediata, exatamente o que se recomenda evitar no início. A alternativa D transforma uma cautela inicial em restrição permanente e atribui a decisão apenas ao licenciamento."
  },
  {
    "t": "Qual das seguintes opções não é um exemplo de ferramenta de varredura de vulnerabilidades?",
    "opts": [
      "A) Nikto",
      "B) Snort",
      "C) Nessus",
      "D) OpenVAS"
    ],
    "ans": 1,
    "exp": "Nessus e OpenVAS são ferramentas de varredura de vulnerabilidades de rede, enquanto Nikto é um scanner de vulnerabilidades de aplicações web. Snort é um sistema de detecção de intrusões."
  },
  {
    "t": "Bethany é a especialista em gerenciamento de vulnerabilidades de uma grande organização do varejo. Ela concluiu sua última varredura de conformidade com o PCI DSS em março. Em abril, a organização atualizou seu sistema de ponto de venda, e Bethany está se preparando para realizar novas varreduras. Quando ela deve concluir a nova varredura?",
    "opts": [
      "A) Imediatamente.",
      "B) Junho.",
      "C) Dezembro.",
      "D) Nenhuma varredura é necessária."
    ],
    "ans": 0,
    "exp": "O PCI DSS exige que as organizações realizem varreduras de vulnerabilidades trimestralmente, o que faria com que a próxima varredura regularmente programada de Bethany fosse em junho. No entanto, a norma também exige varreduras após qualquer mudança significativa no ambiente de cartões de pagamento. Isso incluiria uma atualização no sistema de ponto de venda; portanto, Bethany deve concluir uma nova varredura de conformidade imediatamente."
  },
  {
    "t": "Uma equipe de segurança agendou varreduras recorrentes em sua ferramenta e deseja reduzir o tempo entre a detecção de uma nova vulnerabilidade e a ciência dos responsáveis. Qual configuração atende diretamente a esse objetivo?",
    "opts": [
      "A. Ajustar o agendamento para janelas de menor atividade, pois a execução fora do horário comercial acelera a conclusão e a disponibilização dos resultados.",
      "B. Elevar a frequência das varreduras ao limite suportado pela infraestrutura, já que a repetição contínua substitui a necessidade de notificação sobre os achados.",
      "C. Configurar alertas automatizados para quando novas vulnerabilidades forem detectadas, inclusive com relatórios automáticos dos resultados enviados por e-mail.",
      "D. Ampliar o escopo das varreduras para incluir todos os ativos do inventário, uma vez que a cobertura total antecipa a identificação dos achados relevantes."
    ],
    "ans": 2,
    "exp": "Os administradores devem configurar as varreduras para fornecer alertas automatizados quando detectarem novas vulnerabilidades, e muitas equipes configuram relatórios automatizados dos resultados enviados por e-mail. A alternativa A trata do momento da execução, o que não garante comunicação rápida aos responsáveis. A alternativa B confunde frequência com notificação, além de pressionar a infraestrutura. A alternativa D amplia cobertura, algo que se recomenda fazer gradualmente e que não resolve a comunicação dos achados."
  },
  {
    "t": "Uma equipe de segurança implantou um scanner passivo de vulnerabilidades e propõe substituir por completo as varreduras ativas periódicas, argumentando que o monitoramento contínuo do tráfego elimina o risco de indisponibilidade em sistemas de produção. Qual avaliação é correta?",
    "opts": [
      "A. A substituição é adequada, pois a análise contínua do tráfego identifica as mesmas vulnerabilidades detectadas pela varredura ativa, sem a interação direta com os hosts.",
      "B. A substituição não é adequada, porque a varredura passiva detecta apenas vulnerabilidades refletidas no tráfego de rede e funciona como complemento, não como substituto das varreduras ativas.",
      "C. A substituição é adequada desde que o scanner passivo seja posicionado em todos os segmentos, o que garante cobertura equivalente à obtida por sondagens diretas.",
      "D. A substituição não é adequada, pois a varredura passiva interfere no funcionamento dos sistemas monitorados e tende a gerar mais impacto operacional que a varredura ativa."
    ],
    "ans": 1,
    "exp": "As varreduras passivas só conseguem detectar vulnerabilidades que se refletem no tráfego de rede; elas não substituem a varredura ativa, mas são um complemento forte às varreduras ativas periódicas. A alternativa A equipara os dois métodos, ignorando essa limitação. A alternativa C supõe que a cobertura de segmentos resolveria a restrição, quando o limite está no que aparece no tráfego. A alternativa D inverte o cenário: o potencial de interferir no funcionamento de sistemas de produção é característico da varredura ativa."
  },
  {
    "t": "Durante um exercício em que a atividade da equipe deve permanecer discreta, um analista avalia executar varredura ativa contra a rede-alvo. Qual consideração descreve corretamente as implicações dessa escolha?",
    "opts": [
      "A. A varredura ativa passa despercebida quando limitada a portas comuns, já que o volume reduzido de conexões não caracteriza tráfego anômalo para os administradores.",
      "B. A varredura ativa é silenciosa por padrão, e sua detecção depende exclusivamente da existência de sistemas de prevenção de intrusões no caminho até os alvos.",
      "C. A varredura ativa tenta se conectar a todos os dispositivos em busca de portas abertas e aplicações vulneráveis, sendo barulhenta e provavelmente detectada pelos administradores, o que a torna problemática quando se exige discrição.",
      "D. A varredura ativa é preferível nesse contexto porque interage diretamente com os hosts e, por isso, contorna firewalls e segmentação de rede que ocultariam sistemas."
    ],
    "ans": 2,
    "exp": "A varredura ativa tenta se conectar a todos os dispositivos da rede procurando portas abertas e aplicações vulneráveis; é barulhenta e provavelmente será detectada pelos administradores dos sistemas escaneados, o que a torna problemática quando a varredura precisa ser furtiva. A alternativa A supõe discrição por limitação de portas. A alternativa B trata a técnica como silenciosa e condiciona a detecção a um único tipo de controle. A alternativa D afirma que a interação direta contorna firewalls e segmentação, quando esses controles podem justamente fazer com que sistemas não sejam detectados."
  },
  {
    "t": "Uma empresa com milhares de sistemas em rede precisa atender aos requisitos de varredura do padrão do setor de cartões de pagamento e busca tornar o esforço viável. Qual abordagem é mais eficaz?",
    "opts": [
      "A. Manter toda a rede no escopo da avaliação e negociar com o fornecedor de varredura aprovado uma cadência reduzida, a fim de diluir o custo do trabalho ao longo do ano.",
      "B. Reduzir o escopo por meio de segmentação de rede, isolando os sistemas que efetivamente participam do processamento de cartões, o que também reduz o escopo de muitos controles exigidos, inclusive a varredura de vulnerabilidades.",
      "C. Restringir as varreduras aos sistemas classificados como críticos pela organização, independentemente de participarem do processamento de cartões, já que a criticidade define o escopo de conformidade.",
      "D. Executar varreduras internas em toda a rede com pessoal próprio e limitar a contratação externa aos sistemas de processamento de cartões, equilibrando custo e cobertura."
    ],
    "ans": 1,
    "exp": "Com uso criterioso de segmentação de rede e outras técnicas, é possível isolar o conjunto de sistemas envolvidos no processamento de cartões, o que reduz o escopo de conformidade à rede menor e dedicada a essa função, diminuindo também o escopo de muitos controles exigidos, incluindo a varredura de vulnerabilidades, além do custo e da carga de remediação. A alternativa A mantém toda a rede no escopo e ataca só a cadência. A alternativa C substitui o critério de participação no processamento de cartões por criticidade interna. A alternativa D não reduz o escopo de conformidade, apenas redistribui a execução."
  },
  {
    "t": "Ao planejar uma nova rodada de varreduras de vulnerabilidade, um analista prepara a configuração da ferramenta. Qual sequência de ações é mais apropriada?",
    "opts": [
      "A. Definir sistemas e redes incluídos, as medidas técnicas de detecção de presença na rede e os testes a serem realizados, obtendo antes o consenso da equipe técnica e da gestão de que as varreduras são apropriadas e improváveis de causar interrupção.",
      "B. Configurar imediatamente a ferramenta com o conjunto padrão de testes e validar o impacto junto à equipe técnica e à gestão a partir dos resultados da primeira execução.",
      "C. Delimitar apenas quais sistemas e redes entram na varredura, já que as medidas de detecção e os testes aplicados são determinados automaticamente pela ferramenta conforme os ativos encontrados.",
      "D. Submeter o escopo exclusivamente à aprovação da gestão, dispensando o alinhamento com a equipe técnica, que atuará somente na etapa de remediação dos achados."
    ],
    "ans": 0,
    "exp": "O escopo descreve a extensão da varredura e responde quais sistemas e redes serão incluídos, quais medidas técnicas testarão a presença dos sistemas na rede e quais testes serão executados contra os sistemas descobertos; os administradores devem responder a essas perguntas de forma geral e obter consenso da equipe técnica e da gestão de que as varreduras são apropriadas e improváveis de causar interrupção antes de configurar a ferramenta. A alternativa B inverte a ordem, validando o impacto após a execução. A alternativa C reduz o escopo a uma única dimensão. A alternativa D descarta o alinhamento técnico prévio."
  },
  {
    "t": "Um ambiente corporativo não utiliza determinadas distribuições Linux nem alguns dispositivos de rede cujas verificações estão habilitadas por padrão no scanner. As varreduras vêm demorando muito e produzindo achados irrelevantes. Qual ajuste é mais apropriado?",
    "opts": [
      "A. Reduzir o nível de sensibilidade da varredura, o que limita automaticamente as verificações às plataformas efetivamente presentes no inventário de ativos.",
      "B. Desabilitar os plug-ins desnecessários, o que acelera a varredura ao ignorar verificações irrelevantes e pode reduzir o número de falsos positivos detectados.",
      "C. Restringir o escopo aos endereços dos sistemas críticos, já que a redução do número de alvos elimina as verificações associadas a plataformas ausentes.",
      "D. Adotar um template fornecido pelo fabricante voltado a auditoria de conformidade, pois esses modelos filtram automaticamente famílias de plug-ins não aplicáveis ao ambiente."
    ],
    "ans": 1,
    "exp": "Cada plug-in realiza a verificação de uma vulnerabilidade específica e eles são agrupados em famílias conforme o sistema operacional, aplicação ou dispositivo envolvido; desabilitar os desnecessários melhora a velocidade da varredura ao ignorar verificações irrelevantes e pode reduzir falsos positivos. A alternativa A trata sensibilidade como filtro automático por inventário. A alternativa C reduz alvos, mas as verificações inaplicáveis continuariam sendo executadas contra os hosts restantes. A alternativa D atribui aos templates uma filtragem automática que depende da configuração feita pelo administrador."
  },
  {
    "t": "Renee está configurando sua solução de gerenciamento de vulnerabilidades para realizar varreduras com credenciais nos servidores de sua rede. Que tipo de conta ela deve fornecer ao scanner?",
    "opts": [
      "A) Administrador de domínio",
      "B) Administrador local",
      "C) Root",
      "D) Somente leitura"
    ],
    "ans": 3,
    "exp": "As varreduras com credenciais exigem apenas acesso de leitura aos servidores-alvo. Renee deve seguir o princípio do menor privilégio e limitar o acesso disponível ao scanner."
  },
  {
    "t": "Jason está escrevendo um relatório sobre uma possível vulnerabilidade de segurança em um produto de software e deseja usar nomes padronizados de produtos para garantir que outros analistas de segurança compreendam o relatório. A qual componente do SCAP Jason pode recorrer para obter ajuda?",
    "opts": [
      "A) CVSS",
      "B) CVE",
      "C) CPE",
      "D) OVAL"
    ],
    "ans": 2,
    "exp": "A Enumeração Comum de Plataformas (CPE) é um componente do SCAP que fornece uma nomenclatura padronizada para nomes e versões de produtos."
  },
  {
    "t": "Durante o planejamento das varreduras, a equipe identifica plug-ins que testam falhas exploráveis por atacantes, mas que podem interromper a atividade de sistemas de produção ou danificar seu conteúdo. Qual abordagem permite executar essas verificações com menor risco?",
    "opts": [
      "A. Executar as verificações apenas fora do horário comercial, pois a menor carga de uso reduz a chance de que os testes afetem o conteúdo dos sistemas.",
      "B. Excluir permanentemente esses plug-ins do template, já que qualquer verificação capaz de causar impacto em produção deve ser tratada por revisão manual de configuração.",
      "C. Executar as varreduras primeiro contra um ambiente de teste com cópias dos mesmos sistemas de produção e, se problemas forem detectados, corrigir as causas subjacentes em ambos os ambientes antes de varrer a produção.",
      "D. Reduzir o nível de sensibilidade apenas para os hosts de produção, mantendo as verificações completas nos demais sistemas da rede."
    ],
    "ans": 2,
    "exp": "Uma forma de contornar o risco desses plug-ins é manter um ambiente de teste com cópias dos mesmos sistemas em produção e executar as varreduras contra ele primeiro; detectados problemas, os administradores corrigem as causas subjacentes nas redes de teste e de produção antes de varrer a produção. A alternativa A apenas desloca o horário, sem eliminar o risco de dano. A alternativa B abre mão de verificações que testam falhas exploráveis por atacantes. A alternativa D reduz a sensibilidade justamente onde as falhas importam, deixando a produção sem a verificação."
  },
  {
    "t": "Uma equipe percebe que cada nova varredura é configurada do zero, gerando inconsistências e erros de parametrização. Qual prática resolve esse problema e como as configurações de sensibilidade devem ser tratadas?",
    "opts": [
      "A. Criar as varreduras a partir de templates, incorporados ao produto ou desenvolvidos para uso interno, salvando configurações comuns para reutilização, e ajustar a sensibilidade de modo que a varredura atenda a seus objetivos minimizando a possibilidade de interromper o ambiente-alvo.",
      "B. Padronizar todas as varreduras em um único template com sensibilidade máxima, garantindo cobertura uniforme e eliminando divergências entre execuções.",
      "C. Manter a configuração individual por varredura, ajustando a sensibilidade sempre para o menor nível disponível, pois a prioridade é preservar a estabilidade dos alvos.",
      "D. Utilizar exclusivamente templates fornecidos pelo fabricante sem alterações, já que modelos internos tendem a introduzir os erros de parametrização observados."
    ],
    "ans": 0,
    "exp": "Administradores normalmente criam novas varreduras a partir de um template, que pode vir do fabricante ou ser desenvolvido para uso interno, e devem salvar configurações comuns em templates para reutilizar o trabalho, economizando tempo e reduzindo erros. As configurações de sensibilidade determinam os tipos de verificação e devem ser personalizadas para atender aos objetivos da varredura minimizando a chance de interromper o ambiente-alvo. A alternativa B impõe sensibilidade máxima sem considerar o risco de interrupção. A alternativa C mantém o problema e sempre reduz a sensibilidade. A alternativa D descarta os templates internos."
  },
  {
    "t": "Uma equipe de segurança recebe relatórios de varredura remota com grande volume de achados que, após investigação manual, se revelam inexistentes porque as correções já haviam sido aplicadas. Qual ajuste reduz diretamente esse retrabalho?",
    "opts": [
      "A. Elevar o nível de sensibilidade da varredura, ampliando o conjunto de verificações executadas para que cada achado seja confirmado por múltiplos testes.",
      "B. Adotar varreduras com credenciais, permitindo que o scanner se conecte ao alvo, recupere informações de configuração e verifique, por exemplo, se a atualização já está instalada antes de reportar a vulnerabilidade.",
      "C. Reposicionar o scanner de modo a eliminar firewalls e sistemas de prevenção de intrusões do caminho até os alvos, o que assegura a confirmação remota de cada achado.",
      "D. Instalar agentes de software em todos os servidores da rede simultaneamente, substituindo as varreduras remotas e eliminando a necessidade de credenciais."
    ],
    "ans": 1,
    "exp": "Varreduras remotas podem detectar a possibilidade de uma vulnerabilidade sem confirmá-la, gerando falsos positivos que exigem investigação demorada. A varredura com credenciais usa informações de configuração obtidas no alvo para determinar se a vulnerabilidade existe — por exemplo, checando se a atualização já está instalada — melhorando a precisão em relação às alternativas sem credenciais. A alternativa A aumenta verificações sem resolver a falta de confirmação. A alternativa C melhora a visão da rede, mas não confirma o estado de correção do host. A alternativa D propõe implantação ampla imediata de agentes, contrariando a recomendação de abordagem conservadora."
  },
  {
    "t": "Ao configurar a autenticação do scanner nos servidores corporativos, um administrador precisa definir o nível de privilégio da conta que será utilizada. Qual orientação é correta?",
    "opts": [
      "A. Utilizar uma conta com privilégios administrativos completos, pois a varredura precisa aplicar correções de configuração durante a coleta das informações.",
      "B. Utilizar uma conta com privilégios de escrita limitados aos diretórios de sistema, permitindo que o scanner registre os resultados localmente antes de enviá-los à plataforma.",
      "C. Utilizar contas distintas por tipo de alvo, todas com privilégio de administrador, já que sistemas operacionais, bancos de dados e aplicações exigem acesso equivalente.",
      "D. Utilizar uma conta somente leitura, aplicando o princípio do menor privilégio, o que reduz a probabilidade de incidente de segurança relacionado ao acesso com credenciais do scanner."
    ],
    "ans": 3,
    "exp": "As varreduras com credenciais normalmente apenas recuperam informações dos servidores-alvo e não fazem alterações neles; por isso, deve-se impor o princípio do menor privilégio, fornecendo ao scanner uma conta somente leitura, o que reduz a chance de incidente ligado ao acesso credenciado. A alternativa A parte da premissa falsa de que a varredura aplica correções. A alternativa B concede escrita sem necessidade, já que os resultados são reportados à plataforma. A alternativa C generaliza privilégio administrativo para todos os tipos de alvo."
  },
  {
    "t": "Bill gostaria de realizar uma varredura interna de vulnerabilidades em um sistema para fins de conformidade com o PCI DSS. Quem está autorizado a realizar uma dessas varreduras?",
    "opts": [
      "A) Qualquer funcionário da organização",
      "B) Um fornecedor de varredura aprovado",
      "C) Um prestador de serviços PCI DSS",
      "D) Qualquer pessoa qualificada"
    ],
    "ans": 3,
    "exp": "Varreduras internas realizadas para fins de conformidade com o PCI DSS podem ser conduzidas por qualquer pessoa qualificada."
  },
  {
    "t": "Qual tipo de organização tem maior probabilidade de estar sujeito a uma exigência regulatória de realizar varreduras de vulnerabilidades?",
    "opts": [
      "A) Banco",
      "B) Hospital",
      "C) Órgão governamental",
      "D) Consultório médico"
    ],
    "ans": 2,
    "exp": "A Lei Federal de Gestão da Segurança da Informação (FISMA) exige que órgãos governamentais realizem varreduras de vulnerabilidades. A HIPAA, que rege hospitais e consultórios médicos, não inclui uma exigência de varredura de vulnerabilidades, assim como a GLBA, que rege instituições financeiras. Os bancos podem ser obrigados a realizar varreduras conforme o PCI DSS, mas isso é uma obrigação contratual, e não uma exigência prevista em lei."
  },
  {
    "t": "Uma organização avalia adotar varredura baseada em agente para complementar suas varreduras remotas. Os administradores de sistemas resistem, temendo impacto de desempenho e estabilidade nos servidores. Qual abordagem é mais apropriada?",
    "opts": [
      "A. Iniciar com uma implantação-piloto pequena, que construa confiança no agente antes de avançar para uma implantação mais ampla.",
      "B. Implantar os agentes em todos os servidores de uma vez, pois a varredura de dentro para fora dispensa qualquer validação prévia de impacto.",
      "C. Descartar a abordagem baseada em agente e manter apenas varreduras sem agente, já que agentes instalados localmente não acrescentam informação além da obtida remotamente.",
      "D. Implantar os agentes apenas nos servidores que não podem receber credenciais de varredura, mantendo os demais exclusivamente sob varredura remota sem autenticação."
    ],
    "ans": 0,
    "exp": "Administradores podem recear que agentes causem problemas de desempenho ou estabilidade; por isso, a adoção deve ser conservadora, começando com uma pequena implantação-piloto que aumente a confiança no agente antes de uma implantação mais ampla. A alternativa B ignora essa cautela. A alternativa C nega o valor da abordagem, que fornece uma varredura de dentro para fora da configuração do servidor e reporta os dados à plataforma de gestão. A alternativa D cria um critério de uso restrito e ainda mantém os demais servidores sem autenticação, o que reduz a precisão dos resultados."
  },
  {
    "t": "Um analista precisa obter a visão mais fiel do estado real de segurança de um conjunto de servidores críticos, sem que controles de rede mascarem os achados. Qual abordagem atende a esse objetivo?",
    "opts": [
      "A. Executar a varredura a partir da internet, pois essa perspectiva revela exatamente o que um atacante externo encontraria nos servidores.",
      "B. Executar a varredura a partir de um scanner posicionado na rede corporativa geral, o que já elimina a interferência de firewalls e segmentação sobre os resultados.",
      "C. Utilizar scanners posicionados dentro do datacenter ou agentes instalados nos próprios servidores, que revelam vulnerabilidades que poderiam estar bloqueadas por outros controles de segurança da rede.",
      "D. Consolidar na plataforma os resultados de varreduras externas de diferentes origens, já que a compilação de múltiplas fontes compensa o efeito dos controles intermediários."
    ],
    "ans": 2,
    "exp": "Scanners localizados dentro do datacenter e agentes instalados nos servidores oferecem a visão mais precisa do estado real do servidor, pois mostram vulnerabilidades que poderiam estar bloqueadas por outros controles de segurança na rede, como firewalls, segmentação, IDSs e IPSs. A alternativa A descreve a perspectiva externa, útil para simular o ponto de vista do atacante, mas sujeita a esses controles. A alternativa B dá a visão de um agente interno malicioso, ainda afetada por segmentação e demais controles. A alternativa D consolida dados, o que não remove o efeito dos controles no caminho."
  },
  {
    "t": "Uma organização sujeita ao padrão do setor de cartões de pagamento mantém varreduras internas conduzidas por sua própria equipe e pergunta se isso satisfaz a exigência de varreduras sob diferentes perspectivas. Qual avaliação é correta?",
    "opts": [
      "A. As varreduras internas precisam ser complementadas por varreduras externas conduzidas por um fornecedor de varredura aprovado.",
      "B. As varreduras internas atendem ao requisito, desde que executadas a partir de scanners posicionados no datacenter, o que já representa a perspectiva mais precisa.",
      "C. As varreduras internas atendem ao requisito quando consolidadas na plataforma com dados de agentes instalados nos servidores, o que dispensa a perspectiva externa.",
      "D. As varreduras externas podem ser conduzidas pela própria equipe, desde que o scanner seja posicionado fora do perímetro corporativo e os resultados sejam auditados posteriormente."
    ],
    "ans": 0,
    "exp": "As varreduras internas e externas exigidas por esse padrão são um exemplo de varreduras feitas a partir de perspectivas diferentes: a organização pode conduzir suas próprias varreduras internas, mas deve complementá-las com varreduras externas conduzidas por um fornecedor de varredura aprovado. As alternativas B e C tratam perspectivas internas — datacenter e agentes — como substitutas da perspectiva externa exigida. A alternativa D permite que a própria equipe execute a varredura externa, contrariando a exigência de fornecedor aprovado."
  },
  {
    "t": "Durante uma revisão do programa de gestão de vulnerabilidades, um gestor afirma que a plataforma de varredura não precisa entrar no ciclo de aplicação de correções, por ser uma ferramenta de segurança. Qual argumento contesta corretamente essa posição?",
    "opts": [
      "A. Os próprios sistemas de varredura não estão imunes a vulnerabilidades, e o patching regular do software do scanner protege contra falhas específicas da ferramenta, além de trazer correções de bugs e melhorias que aprimoram a qualidade da varredura.",
      "B. O patching do scanner é dispensável quando a atualização automática dos feeds de vulnerabilidades está habilitada, pois essa rotina já substitui as correções do software.",
      "C. O scanner deve ser corrigido apenas quando estiver exposto a redes externas, já que instalações internas ficam protegidas pelos controles de perímetro da organização.",
      "D. O patching do scanner é necessário apenas para incorporar novas verificações ao produto, uma vez que falhas de segurança na ferramenta não afetam os sistemas escaneados."
    ],
    "ans": 0,
    "exp": "Sistemas de varredura também possuem vulnerabilidades, e a aplicação regular de correções no software do scanner protege a organização contra falhas específicas da ferramenta, além de oferecer correções de bugs e melhorias de recursos que aprimoram a qualidade das varreduras. A alternativa B confunde a atualização dos feeds com a correção do software. A alternativa C condiciona o patching à exposição externa, critério que não elimina a existência da falha. A alternativa D reduz o patching a ganho de funcionalidades e nega o risco de segurança da própria ferramenta."
  },
  {
    "t": "Uma equipe habilitou a atualização automática do scanner e de seus feeds de vulnerabilidades. Qual prática complementar é recomendada?",
    "opts": [
      "A. Desativar a atualização automática dos feeds e realizar cargas manuais programadas, garantindo controle sobre o conteúdo aplicado ao ambiente de varredura.",
      "B. Verificar manualmente, de tempos em tempos, se o scanner está atualizando corretamente, mesmo aproveitando os recursos de atualização automática.",
      "C. Confiar integralmente na automação, já que a verificação manual introduz risco de divergência entre a versão instalada e os feeds distribuídos pelo fabricante.",
      "D. Substituir a verificação da atualização pela comparação periódica dos relatórios de varredura, pois variações nos achados indicam se os feeds estão defasados."
    ],
    "ans": 1,
    "exp": "Os sistemas de varredura oferecem capacidades de atualização automática que mantêm o scanner e seus feeds atualizados, e as organizações devem aproveitar esses recursos — mas é sempre boa prática verificar manualmente, de tempos em tempos, se a atualização está ocorrendo corretamente. A alternativa A abre mão de um recurso recomendado. A alternativa C descarta a verificação manual e inventa um risco de divergência. A alternativa D substitui a checagem direta por inferência a partir dos achados, o que não confirma se o scanner está atualizado."
  },
  {
    "t": "Um analista precisa padronizar a forma como a organização mede e comunica a severidade das falhas de software identificadas nas varreduras, permitindo comparação consistente entre achados de diferentes ferramentas. Qual componente atende a essa necessidade?",
    "opts": [
      "A. O CVE, que fornece nomenclatura padrão para descrever falhas de software relacionadas à segurança.",
      "B. O CVSS, que fornece abordagem padronizada para medir e descrever a severidade de falhas de software relacionadas à segurança.",
      "C. O CCE, que fornece nomenclatura padrão para tratar de problemas de configuração de sistemas e classificar seu impacto.",
      "D. O XCCDF, linguagem usada para especificar listas de verificação e reportar seus resultados de forma comparável."
    ],
    "ans": 1,
    "exp": "O CVSS fornece uma abordagem padronizada para medir e descrever a severidade das falhas de software relacionadas à segurança. A alternativa A trata do CVE, que padroniza a nomenclatura para descrever essas falhas, mas não mede severidade. A alternativa C descreve o CCE, voltado a problemas de configuração de sistemas, sem função de pontuação. A alternativa D aponta o XCCDF, uma linguagem para especificar checklists e reportar seus resultados, o que não corresponde à medição de severidade."
  },
  {
    "t": "Qual das seguintes organizações se concentra em fornecer ferramentas e orientações para o desenvolvimento seguro de aplicações web?",
    "opts": [
      "A) OWASP",
      "B) CIS",
      "C) NIST",
      "D) Microsoft"
    ],
    "ans": 0,
    "exp": "Todas essas organizações fornecem ferramentas e orientações de segurança. No entanto, apenas o Projeto Aberto de Segurança de Aplicações Web (OWASP) tem um foco específico no desenvolvimento de aplicações web seguras."
  },
  {
    "t": "Que termo descreve a disposição de uma organização para tolerar riscos em seu ambiente computacional?",
    "opts": [
      "A) Panorama de riscos",
      "B) Apetite ao risco",
      "C) Nível de risco",
      "D) Adaptação ao risco"
    ],
    "ans": 1,
    "exp": "O apetite ao risco de uma organização é sua disposição para tolerar riscos dentro do ambiente. Se uma organização for extremamente avessa ao risco, ela poderá optar por realizar varreduras com maior frequência para minimizar o tempo entre o surgimento de uma vulnerabilidade e sua detecção por uma varredura."
  },
  {
    "t": "Durante a implantação de um scanner de vulnerabilidades, a equipe discute a frequência de atualização dos plug-ins. O gestor sugere atualizações trimestrais, alinhadas ao ciclo de varreduras de conformidade. Qual orientação é correta?",
    "opts": [
      "A. A sugestão é adequada, pois alinhar a atualização ao ciclo de varredura garante que todos os achados de um mesmo período sejam avaliados com o mesmo conjunto de verificações.",
      "B. A sugestão é inadequada; os scanners devem recuperar novos plug-ins regularmente, de preferência diariamente, já que novas vulnerabilidades são descobertas semanalmente.",
      "C. A sugestão é adequada desde que a atualização do software do scanner permaneça automática, pois é ela que incorpora as verificações recém-publicadas.",
      "D. A sugestão é inadequada, pois os plug-ins só permanecem válidos se atualizados imediatamente antes de cada varredura, tornando desnecessária qualquer rotina periódica."
    ],
    "ans": 1,
    "exp": "Pesquisadores descobrem novas vulnerabilidades toda semana, e os scanners só são eficazes contra elas se receberem atualizações frequentes de seus plug-ins; por isso os administradores devem configurar a recuperação regular de novos plug-ins, de preferência diariamente. A alternativa A prioriza consistência de período em detrimento da cobertura. A alternativa C transfere para a atualização do software um papel que cabe ao feed de plug-ins. A alternativa D descarta a rotina periódica recomendada."
  },
  {
    "t": "Uma organização deseja automatizar a troca de informações de segurança entre suas ferramentas, garantindo que configurações, produtos e procedimentos de teste sejam descritos de forma uniforme. Qual descrição corresponde corretamente aos componentes envolvidos?",
    "opts": [
      "A. O CPE fornece nomenclatura padrão para nomes e versões de produtos, o CCE para problemas de configuração de sistemas e o OVAL é uma linguagem para especificar procedimentos de teste de baixo nível usados pelas listas de verificação.",
      "B. O CPE descreve problemas de configuração de sistemas, o CCE padroniza nomes e versões de produtos e o OVAL define o formato de relatório dos resultados das listas de verificação.",
      "C. O CPE fornece nomenclatura padrão para nomes e versões de produtos, o CVE padroniza problemas de configuração e o XCCDF especifica os procedimentos de teste de baixo nível executados pelos checklists.",
      "D. O CCE padroniza falhas de software relacionadas à segurança, o CPE descreve procedimentos de teste de baixo nível e o OVAL fornece a nomenclatura para nomes e versões de produtos."
    ],
    "ans": 0,
    "exp": "O CPE fornece nomenclatura padrão para descrever nomes e versões de produtos; o CCE, para discutir problemas de configuração de sistemas; e o OVAL é uma linguagem para especificar procedimentos de teste de baixo nível usados pelas listas de verificação. A alternativa B troca as funções de CPE e CCE e atribui ao OVAL o papel de relatório, que cabe ao XCCDF. A alternativa C desloca para o CVE a padronização de configurações, quando ele descreve falhas de software, e confunde XCCDF com OVAL. A alternativa D embaralha os três componentes."
  },
  {
    "t": "Uma organização decide acompanhar as vulnerabilidades detectadas dentro da mesma ferramenta de gestão de serviços de TI já utilizada para os demais chamados de tecnologia. Qual avaliação descreve corretamente essa escolha?",
    "opts": [
      "A. A escolha evita que os tecnólogos utilizem dois sistemas distintos de acompanhamento e melhora a conformidade com o processo de remediação, mas exige integração nativa entre as ferramentas ou a construção dessa integração.",
      "B. A escolha é inadequada, pois o encerramento das vulnerabilidades após a confirmação por testes só pode ocorrer no mecanismo de fluxo de trabalho do próprio produto de gestão de vulnerabilidades.",
      "C. A escolha dispensa qualquer integração entre as plataformas, já que os achados podem ser importados manualmente ao final de cada ciclo de varredura sem prejuízo ao acompanhamento.",
      "D. A escolha reduz a conformidade com o processo de remediação, pois os chamados de segurança passam a competir por prioridade com demandas operacionais no mesmo sistema."
    ],
    "ans": 0,
    "exp": "Muitas organizações preferem acompanhar vulnerabilidades na ferramenta de ITSM usada para outros problemas de tecnologia, o que evita exigir dois sistemas de acompanhamento e melhora a conformidade com o processo de remediação; em contrapartida, exige ferramentas que se integrem nativamente ou a construção de uma integração. A alternativa B trata o fluxo integrado do produto como única via possível. A alternativa C descarta a necessidade de integração. A alternativa D inverte o efeito descrito sobre a conformidade."
  },
  {
    "t": "Uma equipe pretende migrar de varreduras mensais agendadas para varredura contínua. O gestor pede uma avaliação dos ganhos e das implicações dessa mudança. Qual descrição é correta?",
    "opts": [
      "A. A varredura contínua elimina a necessidade de priorização dos achados, pois a detecção precoce reduz o volume de vulnerabilidades acumuladas a cada ciclo.",
      "B. A varredura contínua substitui o ciclo de detecção, remediação e teste por um processo único de monitoramento, dispensando a confirmação posterior das correções aplicadas.",
      "C. A varredura contínua configura os scanners para varrer os sistemas de forma rotativa, com a frequência que os recursos permitirem, proporcionando detecção mais precoce, ainda que possa ser intensiva em largura de banda e em recursos.",
      "D. A varredura contínua reduz o consumo de largura de banda em relação ao modelo agendado, já que distribui as verificações ao longo do tempo em vez de concentrá-las em janelas específicas."
    ],
    "ans": 2,
    "exp": "A varredura contínua abandona o agendamento semanal ou mensal e passa a varrer os sistemas de forma rotativa, verificando vulnerabilidades com a frequência que os recursos permitirem; a abordagem pode ser intensiva em largura de banda e recursos, mas oferece detecção mais precoce. A alternativa A elimina a priorização, que permanece necessária diante do fluxo constante de achados. A alternativa B descarta o ciclo de detecção, remediação e teste. A alternativa D afirma redução de consumo, contrariando o caráter intensivo da abordagem."
  },
  {
    "t": "Antes de iniciar um programa de varredura contínua, um analista precisa garantir que os resultados produzidos sejam interpretáveis ao longo do tempo. Qual ação é essencial nessa preparação?",
    "opts": [
      "A. Conduzir uma varredura de segurança de linha de base que forneça um retrato inicial do ambiente, permitindo que as varreduras seguintes detectem desvios decorrentes de remediações ou da introdução de novas vulnerabilidades.",
      "B. Implantar agentes em todos os servidores antes da primeira execução, pois o monitoramento contínuo depende exclusivamente desses componentes para gerar resultados comparáveis.",
      "C. Configurar o encerramento automático dos achados no fluxo de trabalho da ferramenta, de modo que apenas vulnerabilidades novas apareçam nos relatórios subsequentes.",
      "D. Definir a periodicidade fixa das varreduras, uma vez que a comparação entre ciclos exige intervalos idênticos entre as execuções."
    ],
    "ans": 0,
    "exp": "A varredura contínua só é eficaz quando existe uma linha de base com a qual comparar os resultados atuais; por isso as organizações devem iniciar o programa com uma varredura de segurança de linha de base que dê um retrato inicial do ambiente, usando as varreduras seguintes para detectar desvios resultantes de remediações ou de novas vulnerabilidades. A alternativa B trata os agentes como pré-requisito único. A alternativa C confunde encerramento automático de achados com estabelecimento de referência. A alternativa D exige periodicidade fixa, o que contraria a lógica rotativa da varredura contínua."
  },
  {
    "t": "Qual dos seguintes fatores tem menor probabilidade de afetar os cronogramas de varredura de vulnerabilidades?",
    "opts": [
      "A) Exigências regulatórias",
      "B) Restrições técnicas",
      "C) Restrições de negócio",
      "D) Disponibilidade de pessoal"
    ],
    "ans": 3,
    "exp": "Os cronogramas de varredura são mais frequentemente determinados pelo apetite ao risco da organização, pelas exigências regulatórias, pelas restrições técnicas, pelas restrições de negócio e pelas limitações de licenciamento. A maioria das varreduras é automatizada e não exige disponibilidade de pessoal."
  },
  {
    "t": "Barry colocou todos os sistemas de processamento de cartões de crédito de sua organização em uma rede isolada dedicada ao processamento de cartões. Ele implementou controles de segmentação apropriados para limitar o escopo do PCI DSS a esses sistemas por meio do uso de VLANs e firewalls. Quando Barry realizar varreduras de vulnerabilidades para fins de conformidade com o PCI DSS, em quais sistemas ele deverá realizar as varreduras?",
    "opts": [
      "A) Sistemas dos clientes",
      "B) Sistemas na rede isolada",
      "C) Sistemas na rede corporativa geral",
      "D) Tanto B quanto C"
    ],
    "ans": 1,
    "exp": "Se Barry conseguir limitar o escopo de suas atividades de conformidade com o PCI DSS à rede isolada, essa será a única rede que precisará ser submetida à varredura para fins de conformidade com o PCI DSS."
  },
  {
    "t": "A diretoria executiva de uma empresa solicita uma visão rápida da saúde de cibersegurança do ambiente, sem entrar no detalhe técnico dos achados. Qual formato de saída da plataforma de gestão de vulnerabilidades atende a essa necessidade?",
    "opts": [
      "A. Um relatório técnico de resumo com as vulnerabilidades detectadas na rede, ordenadas por severidade e grupo de hosts.",
      "B. Um dashboard de nível gerencial, que fornece um resumo de altíssimo nível e serve como retrato rápido do ambiente para os líderes.",
      "C. Um relatório detalhado por sistema, listando todas as vulnerabilidades encontradas em cada host administrado, ordenadas por severidade.",
      "D. Um alerta automatizado disparado a cada nova vulnerabilidade crítica detectada, encaminhado diretamente à liderança."
    ],
    "ans": 1,
    "exp": "Dashboards de nível gerencial fornecem um resumo de altíssimo nível da saúde de cibersegurança do ambiente e são frequentemente usados para dar aos líderes um retrato rápido da situação. A alternativa A descreve o relatório técnico de resumo, voltado a analistas que precisam identificar problemas generalizados. A alternativa C corresponde ao relatório detalhado por sistema, de interesse dos engenheiros que administram aqueles hosts. A alternativa D trata de mecanismo de alerta para notificar pessoal-chave sobre novas vulnerabilidades críticas, e não de uma visão consolidada do ambiente."
  },
  {
    "t": "Um engenheiro de sistemas responsável por um servidor precisa organizar seus esforços de correção, começando pelos itens mais graves. Qual saída da ferramenta atende melhor a esse propósito?",
    "opts": [
      "A. O relatório detalhado do host, com a listagem completa das vulnerabilidades ordenada por severidade, que pode ser usado como checklist para priorizar a remediação naquele sistema.",
      "B. O dashboard gerencial, que já apresenta os hosts mais vulneráveis e a contagem de achados por nível de severidade.",
      "C. O relatório técnico de resumo da rede, ordenado por tipo de vulnerabilidade e grupo de hosts, que revela os problemas generalizados do ambiente.",
      "D. O relatório individual de uma vulnerabilidade específica, que explica sua significância, sua causa e traz as instruções de remediação aplicáveis."
    ],
    "ans": 0,
    "exp": "Engenheiros de sistemas costumam se interessar por relatórios detalhados que listam todas as vulnerabilidades existentes nos sistemas que administram; esse relatório traz a listagem completa ordenada por severidade e serve como checklist para priorizar a remediação naquele sistema. A alternativa B oferece visão de alto nível para liderança. A alternativa C ajuda a identificar problemas generalizados da rede, não a priorizar um host. A alternativa D corresponde ao nível final de detalhamento, útil na hora de corrigir um item específico, mas não para ordenar o conjunto."
  },
  {
    "t": "Uma equipe deseja garantir que os responsáveis pela correção tomem conhecimento dos achados sem depender de consultas manuais à plataforma, e que vulnerabilidades críticas recém-detectadas cheguem rapidamente ao pessoal-chave. Qual configuração atende a esses objetivos?",
    "opts": [
      "A. Restringir a geração de relatórios ao modo sob demanda, de modo que cada área solicite a informação quando necessária, evitando excesso de comunicações.",
      "B. Publicar o dashboard gerencial para toda a organização, já que o resumo de alto nível permite que cada equipe identifique os achados sob sua responsabilidade.",
      "C. Encaminhar apenas os relatórios detalhados por vulnerabilidade individual, pois eles contêm as instruções de remediação necessárias aos responsáveis.",
      "D. Configurar relatórios automatizados gerados de forma agendada e enviados a quem precisa vê-los, somados a mecanismos de alerta que notifiquem imediatamente o pessoal-chave sobre novas vulnerabilidades críticas."
    ],
    "ans": 3,
    "exp": "As ferramentas permitem relatórios gerados manualmente sob demanda ou relatórios automatizados produzidos de forma agendada e enviados a quem precisa vê-los; além disso, mecanismos de alerta podem notificar imediatamente o pessoal-chave sobre novas vulnerabilidades críticas assim que detectadas. A alternativa A depende de iniciativa manual, contrariando o objetivo. A alternativa B usa um resumo de alto nível que não direciona achados aos responsáveis. A alternativa C limita a comunicação ao nível mais granular, sem rotina de envio nem alerta para achados críticos."
  },
  {
    "t": "Uma equipe identifica uma falha grave de injeção de SQL em um servidor acessível somente a partir da rede interna e, no mesmo relatório, uma falha de severidade menor em um servidor publicado na internet. Qual fator justifica considerar a correção do segundo caso à frente do primeiro?",
    "opts": [
      "A. A dificuldade de remediação, já que problemas em servidores publicados exigem menor comprometimento de recursos humanos e financeiros.",
      "B. A exposição da vulnerabilidade, pois um problema alcançável pela internet está mais vulnerável a ataques externos do que um restrito a redes internas.",
      "C. A criticidade dos sistemas afetados, uma vez que servidores expostos à internet sustentam requisitos de disponibilidade mais rigorosos que os sistemas internos.",
      "D. A severidade atribuída pelo sistema de pontuação, que já incorpora o alcance da rede e classifica achados externos acima dos internos."
    ],
    "ans": 1,
    "exp": "A exposição da vulnerabilidade é um dos fatores de priorização: um servidor interno com falha séria de injeção de SQL acessível apenas de redes internas pode ter prioridade menor que um problema menos severo exposto à internet, mais vulnerável a ataques externos. A alternativa A troca o fator por dificuldade e assume um custo menor sem base. A alternativa C desloca a justificativa para criticidade, presumindo requisitos que o cenário não estabelece. A alternativa D atribui à pontuação de severidade a incorporação automática do alcance de rede, o que não corresponde ao papel desse fator."
  },
  {
    "t": "Um analista percebe que a correção do item de maior prioridade do relatório consumiria o mesmo investimento necessário para resolver cinco outros achados classificados logo abaixo. Qual conduta é apropriada?",
    "opts": [
      "A. Corrigir os cinco achados de menor posição, pois o critério de melhor relação entre custo e quantidade de problemas resolvidos deve prevalecer sobre a ordem de prioridade.",
      "B. Manter a ordem original e tratar apenas o item de maior prioridade, uma vez que considerações de custo não integram o processo de priorização de remediação.",
      "C. Incorporar a dificuldade de remediação ao processo de decisão, sem que custo e dificuldade sejam, isoladamente, os determinantes da escolha.",
      "D. Transferir a decisão para o critério de severidade, priorizando os achados com maior pontuação até que o orçamento do ciclo se esgote."
    ],
    "ans": 2,
    "exp": "Se corrigir uma vulnerabilidade exigir comprometimento excessivo de recursos humanos ou financeiros, isso deve ser levado em conta na decisão — inclusive na situação em que vários achados de posições seguintes poderiam ser resolvidos pelo mesmo investimento. Ainda assim, isso não significa que a escolha deva se basear apenas em custo e dificuldade: trata-se de uma consideração dentro do processo. A alternativa A torna o custo determinante. A alternativa B exclui o fator do processo. A alternativa D substitui a análise multifatorial por um único critério."
  },
  {
    "t": "Ao explicar aos gestores como a ordem de remediação é definida, um analista precisa descrever corretamente o processo e os fatores envolvidos. Qual descrição é adequada?",
    "opts": [
      "A. Existe uma fórmula definitiva de priorização baseada na combinação da pontuação de severidade com a criticidade do ativo, aplicada uniformemente a todos os achados.",
      "B. A ordem decorre diretamente da classificação de severidade fornecida pelo sistema de pontuação, cabendo aos analistas apenas validar os achados antes da correção.",
      "C. A priorização deve considerar apenas criticidade e exposição, já que severidade e dificuldade dizem respeito à execução técnica e não à ordem de tratamento.",
      "D. Não há fórmula pronta: os analistas avaliam fatores como criticidade dos sistemas e informações afetados, dificuldade de remediação, severidade e exposição, decidindo a sequência que entrega maior valor de segurança à organização."
    ],
    "ans": 3,
    "exp": "Não existe fórmula pronta para priorizar vulnerabilidades; os analistas devem considerar fatores como a criticidade dos sistemas e informações afetados, a dificuldade de remediação, a severidade e a exposição, avaliando todas as informações disponíveis para definir a sequência que entregue maior valor de segurança. A alternativa A afirma existir fórmula definitiva. A alternativa B reduz o processo à pontuação de severidade. A alternativa C exclui dois fatores que integram a decisão de priorização."
  },
  {
    "t": "Uma aplicação web corporativa apresenta vulnerabilidade a injeção de SQL, mas o fornecedor não disponibilizará a correção do código no curto prazo e a equipe não pode alterar a aplicação. Qual abordagem trata a exposição sem corrigir o problema subjacente?",
    "opts": [
      "A. Implantar um firewall de aplicações web para bloquear as tentativas de ataque de injeção de SQL, atuando como controle compensatório.",
      "B. Aplicar hardening no servidor que hospeda a aplicação e repetir a varredura para confirmar que o achado deixou de aparecer nos resultados.",
      "C. Atualizar a linha de base de configuração para que sistemas futuros já contemplem a proteção contra esse tipo de injeção desde a implantação.",
      "D. Reconhecer formalmente que o risco é aceitável e seguir com as operações normalmente, documentando a decisão."
    ],
    "ans": 0,
    "exp": "Controles compensatórios são medidas adicionais adotadas para tratar uma vulnerabilidade sem remediar o problema subjacente; quando a aplicação web vulnerável a injeção de SQL não pode ser corrigida, um firewall de aplicações web bloqueando as tentativas de ataque cumpre esse papel. A alternativa B descreve remediação e verificação, inviáveis se o código não pode ser alterado. A alternativa C trata da linha de base de configuração, que orienta sistemas futuros e não protege a aplicação atual. A alternativa D é a segunda opção possível, mas não trata a exposição — apenas aceita o risco."
  },
  {
    "t": "Ryan está planejando realizar uma varredura de vulnerabilidades em um sistema crítico para o negócio usando plug-ins perigosos. Qual seria a melhor abordagem para a varredura inicial?",
    "opts": [
      "A) Executar a varredura nos sistemas de produção para obter os resultados mais realistas possíveis.",
      "B) Executar a varredura durante o horário comercial.",
      "C) Executar a varredura em um ambiente de testes.",
      "D) Não executar a varredura para evitar interromper as atividades do negócio."
    ],
    "ans": 2,
    "exp": "Ryan deve primeiro executar sua varredura em um ambiente de testes para identificar prováveis vulnerabilidades e avaliar se a própria varredura pode interromper as atividades do negócio."
  },
  {
    "t": "Qual das seguintes atividades não faz parte do ciclo de vida do gerenciamento de vulnerabilidades?",
    "opts": [
      "A) Detecção",
      "B) Remediação",
      "C) Elaboração de relatórios",
      "D) Testes"
    ],
    "ans": 2,
    "exp": "Embora a elaboração de relatórios e a comunicação sejam partes importantes do gerenciamento de vulnerabilidades, elas não estão incluídas no ciclo de vida. As três fases do ciclo de vida são detecção, remediação e testes."
  },
  {
    "t": "Uma equipe aplicou um patch de segurança em um conjunto de servidores após validar a correção previamente. Quais passos completam adequadamente o processo?",
    "opts": [
      "A. Encerrar o chamado de remediação assim que o patch for confirmado como instalado nos servidores, já que a instalação bem-sucedida comprova a eficácia da mitigação.",
      "B. Repetir a varredura que identificou a vulnerabilidade para confirmar que o problema não aparece nos novos resultados e atualizar a linha de base de configuração, de modo que sistemas futuros já venham corrigidos.",
      "C. Atualizar a linha de base de configuração e programar a próxima varredura agendada do ciclo, dispensando verificação específica sobre o achado tratado.",
      "D. Repetir a varredura em um ambiente isolado equivalente, uma vez que a confirmação da mitigação deve ocorrer fora da produção para evitar impacto nas operações."
    ],
    "ans": 1,
    "exp": "Após implantar a correção por patch ou hardening, deve-se verificar se a mitigação foi eficaz, o que normalmente envolve repetir a varredura que identificou a vulnerabilidade e confirmar que o problema não aparece nos novos resultados; também é importante atualizar a linha de base de configuração para que sistemas futuros já estejam corrigidos. A alternativa A trata instalação como prova de eficácia. A alternativa C dispensa a verificação específica. A alternativa D desloca a confirmação para o ambiente isolado, cujo papel é o teste prévio da correção."
  },
  {
    "t": "A equipe de infraestrutura resiste à inclusão de um conjunto de sistemas legados e proprietários no programa de varredura, alegando risco de comportamento imprevisível e queda de desempenho durante o expediente. Qual conduta trata adequadamente essa preocupação?",
    "opts": [
      "A. Ajustar as varreduras para consumir menos largura de banda e coordenar os horários de execução com os cronogramas operacionais.",
      "B. Manter esses sistemas fora do escopo de varredura e substituí-los por revisão manual de configuração, evitando qualquer risco de interrupção de processos.",
      "C. Elevar a intensidade da varredura nesses hosts, pois concluir a execução mais rapidamente reduz o tempo total de degradação percebida.",
      "D. Formalizar a exceção no processo de gestão de mudanças, transferindo a decisão sobre o escopo para a área de governança de TI."
    ],
    "ans": 0,
    "exp": "A degradação de serviço é a barreira mais comum levantada por profissionais de tecnologia, e o risco cresce com sistemas legados ou proprietários, que podem se comportar de forma imprevisível diante de varreduras automatizadas; a resposta indicada é ajustar as varreduras para consumir menos largura de banda e coordenar seus horários com os cronogramas operacionais. A alternativa B retira os sistemas do programa. A alternativa C aumenta a intensidade, agravando a degradação. A alternativa D transfere a decisão à governança, processo que deve ser usado para obter recursos e apoio, não para dispensar o ajuste técnico."
  },
  {
    "t": "Uma empresa presta serviços gerenciados e mantém acordos de nível de serviço com seus clientes. A equipe jurídica está revisando novos contratos e pergunta como evitar conflitos futuros entre esses compromissos e o programa de varredura. Qual orientação é apropriada?",
    "opts": [
      "A. Excluir dos acordos qualquer referência à varredura de vulnerabilidades, de modo que a atividade permaneça a critério exclusivo da área de segurança.",
      "B. Restringir as varreduras aos sistemas que não sustentam serviços contratados, preservando integralmente os compromissos de tempo de atividade e desempenho.",
      "C. Participar da elaboração dos acordos desde o início, incluindo redação que antecipe as varreduras e reconheça possível impacto no desempenho, além de dar aviso antecipado sobre o momento e o impacto potencial.",
      "D. Condicionar cada varredura à autorização prévia do cliente afetado, já que os acordos tornam obrigatória a aprovação caso a caso antes de qualquer execução."
    ],
    "ans": 2,
    "exp": "Problemas com MOUs e SLAs podem ser evitados se os profissionais de cibersegurança participarem da criação desses acordos, incluindo redação que antecipe as varreduras e reconheça possível impacto no desempenho; a maioria dos clientes compreende a importância da atividade quando recebe aviso antecipado sobre o momento e o impacto potencial. A alternativa A omite o tema justamente onde ele deve constar. A alternativa B reduz o escopo do programa. A alternativa D transforma a eventual participação do cliente na decisão em autorização obrigatória para toda varredura."
  },
  {
    "t": "Uma equipe precisa identificar chaves de segurança que não são rotacionadas há anos e determinar a exposição de rede de instâncias a partir dos grupos de segurança aplicados, sem executar uma varredura de portas exaustiva no ambiente. Qual tipo de ferramenta atende a essa necessidade?",
    "opts": [
      "A. Um scanner de vulnerabilidades de rede com varredura credenciada, que autentica nas instâncias e recupera diretamente as configurações relevantes.",
      "B. Uma ferramenta de avaliação de infraestrutura em nuvem, que alcança o ambiente e a API do provedor, recupera informações de segurança e reporta a segurança relativa do ambiente.",
      "C. Um scanner de aplicações web, adequado por consultar as interfaces expostas pelos serviços em nuvem e identificar configurações inseguras.",
      "D. Um scanner de vulnerabilidades de rede implantado com appliances na nuvem, cuja proximidade com as instâncias permite detectar esse tipo de problema de configuração."
    ],
    "ans": 1,
    "exp": "Ferramentas de avaliação de infraestrutura em nuvem alcançam o ambiente, recuperam informações de segurança e entregam relatório sobre sua segurança relativa, detectando problemas que não apareceriam em outras varreduras — como alcançar a API do provedor para identificar uma chave sem rotação por anos, ou listar os grupos de segurança de uma instância e determinar sua exposição sem varredura de portas exaustiva. As alternativas A e D descrevem scanners de rede, que não cobrem esse tipo de achado. A alternativa C aponta scanner de aplicações web, voltado a outro escopo."
  },
  {
    "t": "Ao montar o conjunto de ferramentas de avaliação de vulnerabilidades, um analista precisa justificar a escolha entre opções comerciais e gratuitas de varredura de infraestrutura. Qual descrição corresponde corretamente às ferramentas disponíveis?",
    "opts": [
      "A. O Nessus é um produto comercial bem conhecido e um dos primeiros do campo, enquanto o OpenVAS oferece uma alternativa gratuita de código aberto aos scanners comerciais.",
      "B. O Nessus é a alternativa de código aberto do mercado, enquanto o OpenVAS é o produto comercial mais antigo e amplamente respeitado nesse campo.",
      "C. O Nexpose é a opção de código aberto mantida pela comunidade, e o Qualys se destaca por ser distribuído gratuitamente aos clientes de provedores de nuvem.",
      "D. Nessus, Qualys, Nexpose e OpenVAS são todos produtos comerciais equivalentes, diferindo apenas pelo modelo de implantação adotado por cada fabricante."
    ],
    "ans": 0,
    "exp": "O Nessus é um produto de varredura de vulnerabilidades de rede bem conhecido e amplamente respeitado, um dos primeiros nesse campo, e o OpenVAS, de código aberto, oferece uma alternativa gratuita aos scanners comerciais. A alternativa B inverte as duas ferramentas. A alternativa C atribui ao Nexpose a condição de código aberto, quando ele é um sistema comercial, e distorce o Qualys, cujo diferencial é o console SaaS com appliances locais e em nuvem. A alternativa D classifica o OpenVAS como comercial."
  },
  {
    "t": "Durante o planejamento de avaliações em ambientes de nuvem, um analista precisa selecionar ferramentas de código aberto para essa finalidade. Quais opções correspondem a esse propósito?",
    "opts": [
      "A. Nessus, OpenVAS e Nexpose, aplicáveis a ambientes de nuvem quando seus appliances são posicionados junto às instâncias avaliadas.",
      "B. Qualys, AWS Inspector e Nexpose, que combinam console de gerenciamento em SaaS com coleta direta no ambiente do provedor.",
      "C. Scout Suite, Pacu e Prowler.",
      "D. Scout Suite, OpenVAS e AWS Inspector, que reúnem alternativas gratuitas voltadas à avaliação de recursos hospedados em provedores de nuvem."
    ],
    "ans": 2,
    "exp": "As ferramentas de avaliação de nuvem de código aberto indicadas são Scout Suite, Pacu e Prowler. A alternativa A lista scanners de vulnerabilidades de rede, entre eles produtos comerciais, e não ferramentas de avaliação de nuvem. A alternativa B mistura scanners comerciais com uma ferramenta oferecida pelo próprio provedor. A alternativa D combina uma ferramenta de nuvem de código aberto com um scanner de rede e com uma ferramenta do provedor, que não integra esse conjunto."
  },
  {
    "t": "Que abordagem de varredura de vulnerabilidades incorpora informações de agentes em execução nos servidores-alvo?",
    "opts": [
      "A) Monitoramento contínuo",
      "B) Varredura contínua",
      "C) Varredura sob demanda",
      "D) Emissão de alertas"
    ],
    "ans": 0,
    "exp": "O monitoramento contínuo incorpora dados de abordagens baseadas em agentes para detecção de vulnerabilidades e comunica à plataforma de gerenciamento de vulnerabilidades as mudanças de configuração relacionadas à segurança assim que ocorrem, permitindo analisar essas mudanças em busca de possíveis vulnerabilidades."
  },
  {
    "t": "Kolin gostaria de usar um scanner automatizado de vulnerabilidades de aplicações web para identificar quaisquer problemas potenciais de segurança em uma aplicação que está prestes a ser implantada em seu ambiente. Qual das seguintes ferramentas tem menor probabilidade de atender às suas necessidades?",
    "opts": [
      "A) ZAP",
      "B) Nikto",
      "C) Arachni",
      "D) Burp Suite"
    ],
    "ans": 0,
    "exp": "O Zed Attack Proxy (ZAP) é um servidor proxy que pode ser usado em testes de penetração de aplicações web, mas não é, por si só, uma ferramenta automatizada de varredura de vulnerabilidades. Nikto e Arachni são exemplos de scanners dedicados de vulnerabilidades de aplicações web. O Burp Suite é um proxy web usado em testes de penetração."
  },
  {
    "t": "Uma organização mantém cargas de trabalho distribuídas entre AWS, Microsoft Azure, Google Compute Platform, Alibaba Cloud e Oracle Cloud Infrastructure. A equipe precisa auditar a configuração de todas essas contas a partir das APIs dos provedores, usando uma única ferramenta de código aberto. Qual opção atende ao requisito?",
    "opts": [
      "A. Prowler, ferramenta de teste de configuração de segurança que realiza verificações mais aprofundadas de determinados parâmetros.",
      "B. Scout Suite, ferramenta de auditoria multinuvem que alcança as contas junto aos provedores e recupera informações de configuração por meio das APIs desses serviços.",
      "C. Pacu, framework modular de plug-ins capaz de sondar diversas fontes de informação nas contas dos provedores avaliados.",
      "D. AWS Inspector, que avalia a exposição de rede das instâncias e reporta achados classificados por severidade."
    ],
    "ans": 1,
    "exp": "O Scout Suite é uma ferramenta de auditoria multinuvem que alcança as contas do usuário nos provedores e recupera informações de configuração usando as APIs desses serviços, sendo capaz de auditar contas de AWS, Azure, Google Compute Platform, Alibaba Cloud e Oracle Cloud Infrastructure. A alternativa A aponta o Prowler, limitado a AWS, Azure e Google Compute Platform. A alternativa C descreve o Pacu, que é um framework de exploração voltado especificamente a contas AWS. A alternativa D cita uma ferramenta do próprio provedor, restrita a esse ambiente."
  },
  {
    "t": "Durante um teste de penetração autorizado em um ambiente AWS, a equipe já obteve acesso a uma conta existente e precisa determinar o que consegue fazer com esse acesso. Qual ferramenta é adequada a esse objetivo?",
    "opts": [
      "A. Scout Suite, que sonda profundamente a configuração dos serviços e sinaliza problemas de segurança na conta comprometida.",
      "B. Prowler, que realiza testes aprofundados de parâmetros de configuração e identifica caminhos de exploração disponíveis na conta.",
      "C. Pacu, framework de exploração voltado para nuvem, específico para contas AWS, projetado para determinar o que é possível fazer com o acesso disponível.",
      "D. AWS Inspector, que agrega a exposição de rede das instâncias e revela quais recursos podem ser alcançados a partir do acesso obtido."
    ],
    "ans": 2,
    "exp": "O Pacu não é ferramenta de varredura, mas um framework de exploração voltado para nuvem; trabalha especificamente com contas AWS e foi projetado para ajudar a determinar o que se pode fazer com o acesso já existente, sendo favorito entre testadores de penetração de AWS. As alternativas A e B descrevem ferramentas de auditoria e teste de configuração de segurança, que apontam problemas, mas não exploram o acesso. A alternativa D cita uma ferramenta do provedor voltada a avaliação e exposição de rede, não à exploração."
  },
  {
    "t": "Ao revisar o painel detalhado de uma auditoria de nuvem, um analista identifica o achado de volumes de armazenamento em bloco sem criptografia, com 18 volumes verificados e 18 sinalizados. Qual interpretação é correta?",
    "opts": [
      "A. O achado indica que a totalidade dos volumes verificados está sem criptografia, deixando os dados desprotegidos tanto em repouso quanto em trânsito entre a instância e o armazenamento anexado.",
      "B. O achado indica que os volumes possuem criptografia em repouso, restando desprotegido apenas o tráfego entre a instância e o armazenamento anexado.",
      "C. O achado indica que 18 volumes foram avaliados e nenhum deles apresentou problema, já que a contagem de sinalizados corresponde ao total de verificações bem-sucedidas.",
      "D. O achado indica exposição de rede dos volumes, uma vez que a ausência de criptografia decorre de grupos de segurança com portas abertas para todos."
    ],
    "ans": 0,
    "exp": "O relatório mostra volumes de armazenamento em bloco sem criptografia, com 18 volumes verificados e 18 sinalizados, ou seja, todos os avaliados; habilitar a criptografia desses volumes garante que os dados fiquem protegidos tanto em repouso quanto em trânsito entre a instância e o armazenamento anexado. A alternativa B supõe criptografia parcial. A alternativa C inverte o significado de \"sinalizados\", tratando-os como conformes. A alternativa D confunde esse achado com os itens relativos a portas abertas e grupos de segurança."
  },
  {
    "t": "Uma equipe precisa avaliar aplicações web quanto a injeção de SQL, cross-site scripting e cross-site request forgery, utilizando uma ferramenta de código aberto com interface gráfica empacotada e disponível para Windows, macOS e Linux. Qual opção atende ao requisito?",
    "opts": [
      "A. Arachni, scanner de aplicações web empacotado disponível para Windows, macOS e Linux.",
      "B. Nikto, ferramenta de código aberto para varredura de aplicações web, operada por linha de comando e considerada um tanto difícil de usar.",
      "C. Nessus, cujas capacidades de varredura de aplicações web são frequentemente usadas por empresas em substituição a scanners dedicados.",
      "D. Qualys, que combina console de gerenciamento próprio com testes específicos de vulnerabilidades web em múltiplos sistemas operacionais."
    ],
    "ans": 0,
    "exp": "O Arachni é a outra ferramenta de código aberto para varredura de aplicações web e se apresenta como um scanner empacotado disponível para Windows, macOS e Linux. A alternativa B aponta o Nikto, que é de código aberto, mas usa interface de linha de comando e é descrito como um tanto difícil de usar. As alternativas C e D indicam scanners de vulnerabilidades de rede comerciais, cujas capacidades de varredura web são aproveitadas por muitas empresas, o que não corresponde ao critério de ferramenta de código aberto empacotada com interface gráfica."
  },
  {
    "t": "Ao explicar como os scanners de aplicações web operam, um analista precisa descrever corretamente a técnica empregada por essas ferramentas. Qual descrição é adequada?",
    "opts": [
      "A. Executam exclusivamente varreduras de rede contra os servidores web, inferindo as vulnerabilidades da aplicação a partir dos serviços e versões identificados.",
      "B. Combinam varreduras tradicionais de rede nos servidores web com sondagem detalhada das aplicações, incluindo o envio de sequências de entrada maliciosas conhecidas e fuzzing na tentativa de quebrar a aplicação.",
      "C. Analisam o código-fonte das aplicações em busca de padrões associados a injeção de SQL, cross-site scripting e cross-site request forgery.",
      "D. Monitoram o tráfego trocado com a aplicação em busca de assinaturas reveladoras de componentes desatualizados, sem enviar requisições próprias ao alvo."
    ],
    "ans": 1,
    "exp": "Scanners de aplicações web testam vulnerabilidades específicas da web, como injeção de SQL, XSS e CSRF, combinando varreduras tradicionais de rede em servidores web com sondagem detalhada das aplicações, por meio de técnicas como o envio de sequências de entrada maliciosas conhecidas e fuzzing. A alternativa A limita a técnica à varredura de rede. A alternativa C descreve análise de código-fonte, que não é o modo de operação dessas ferramentas. A alternativa D descreve monitoramento passivo de tráfego, incompatível com o envio de entradas maliciosas ao alvo."
  },
  {
    "t": "Durante a avaliação de segurança de uma aplicação web, um analista precisa pausar uma requisição HTTP gerada pelo navegador, alterar manualmente o valor de um parâmetro e só então permitir que ela siga até o servidor. Qual tipo de ferramenta atende diretamente a essa necessidade?",
    "opts": [
      "A) Scanner de vulnerabilidades de rede",
      "B) Scanner de aplicações web",
      "C) Analisador de protocolos (sniffer)",
      "D) Proxy de interceptação"
    ],
    "ans": 3,
    "exp": "O proxy de interceptação roda no sistema do próprio testador e retém as requisições enviadas do navegador ao servidor antes que elas sejam liberadas na rede, permitindo a manipulação manual e a tentativa de injeção de ataques. O scanner de aplicações web (B) automatiza testes contra vulnerabilidades conhecidas, mas não oferece edição manual da requisição em trânsito. O scanner de vulnerabilidades de rede (A) avalia hosts e serviços, não o conteúdo da requisição HTTP. O analisador de protocolos (C) captura e exibe o tráfego de forma passiva, sem interromper nem modificar a requisição antes do envio."
  },
  {
    "t": "Um analista avalia a adoção do Zed Attack Proxy (ZAP) em sua organização. Qual afirmação descreve corretamente essa ferramenta?",
    "opts": [
      "A) É um projeto de desenvolvimento comunitário, de código aberto, coordenado pelo OWASP",
      "B) É mantida pela PortSwigger como componente de um conjunto comercial de ferramentas",
      "C) Sua interceptação de requisições exige licença paga, sendo gratuita apenas a análise passiva",
      "D) Só intercepta requisições de um navegador proprietário distribuído junto com a ferramenta"
    ],
    "ans": 0,
    "exp": "O ZAP é um projeto open source de desenvolvimento comunitário coordenado pelo Open Web Application Security Project (OWASP). A alternativa B confunde o ZAP com o Burp, cujo desenvolvimento pertence à PortSwigger. A alternativa C é incorreta porque a interceptação é justamente a função central do ZAP e não depende de licenciamento pago. A alternativa D também é falsa: usuários do ZAP podem interceptar requisições enviadas de qualquer navegador web e alterá-las antes de repassá-las ao servidor."
  },
  {
    "t": "Jessica está lendo relatórios de varreduras de vulnerabilidades realizadas por diferentes áreas de sua organização usando produtos diferentes. Ela é responsável pela alocação de recursos de remediação e está tendo dificuldade para priorizar problemas de fontes diferentes. Que componente do SCAP pode ajudar Jessica nessa tarefa?",
    "opts": [
      "A) CVSS",
      "B) CVE",
      "C) CPE",
      "D) XCCDF"
    ],
    "ans": 0,
    "exp": "O Sistema Comum de Pontuação de Vulnerabilidades (CVSS) fornece uma abordagem padronizada para medir e descrever a gravidade das vulnerabilidades de segurança. Jessica poderia usar esse sistema de pontuação para priorizar os problemas identificados por diferentes sistemas."
  },
  {
    "t": "Sarah gostaria de realizar uma varredura externa de vulnerabilidades em um sistema para fins de conformidade com o PCI DSS. Quem está autorizado a realizar uma dessas varreduras?",
    "opts": [
      "A) Qualquer funcionário da organização",
      "B) Um fornecedor de varredura aprovado",
      "C) Um prestador de serviços PCI DSS",
      "D) Qualquer pessoa qualificada"
    ],
    "ans": 1,
    "exp": "Embora qualquer pessoa qualificada possa realizar varreduras internas de conformidade, o PCI DSS exige o uso de um fornecedor de varredura aprovado pelo PCI SSC para as varreduras externas de conformidade."
  },
  {
    "t": "Uma equipe de segurança com orçamento restrito deseja utilizar o Burp Proxy como parte de suas avaliações de aplicações web. Qual afirmação sobre a disponibilidade dessa ferramenta é correta?",
    "opts": [
      "A) Todo o Burp Suite é distribuído gratuitamente, sem restrição de componentes",
      "B) O Burp Proxy é um projeto comunitário mantido pelo OWASP",
      "C) O Burp Proxy está disponível em uma edição gratuita, enquanto o Burp Suite completo exige licença paga",
      "D) O Burp Proxy só pode ser utilizado após a aquisição da licença comercial do Burp Suite"
    ],
    "ans": 2,
    "exp": "O Burp Proxy integra o Burp Suite, um conjunto comercial de ferramentas de segurança de aplicações web da PortSwigger; a suíte completa requer licença paga, mas o Burp Proxy está disponível em uma edição gratuita do produto. A alternativa A é incorreta porque apenas parte do conjunto é gratuita. A alternativa B atribui ao Burp a característica do ZAP, que é o projeto comunitário coordenado pelo OWASP. A alternativa D contraria a existência da edição gratuita, que permite uso do proxy sem compra de licença."
  }
];
