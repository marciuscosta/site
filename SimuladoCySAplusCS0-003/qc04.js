// Questões do arquivo Questionario_Cap4.txt, na ordem original.
// Os números do TXT servem apenas como separadores de questões.
const Qs = [
  {
    "t": "Uma equipe de resposta a incidentes recebe um relatório com informações altamente detalhadas sobre uma família de malware específica identificada no ambiente, incluindo sua origem, quem a desenvolveu, como ela se propaga, o que tenta executar, como removê-la e como impedir novas infecções. Qual nível de inteligência de ameaças esse relatório representa?",
    "opts": [
      "A) Inteligência estratégica",
      "B) Inteligência tática",
      "C) Inteligência operacional",
      "D) Inteligência de fontes abertas"
    ],
    "ans": 2,
    "exp": "A inteligência operacional reúne informações altamente detalhadas que viabilizam a resposta a uma ameaça específica, cobrindo origem, autoria, evolução, forma de entrega ou propagação, objetivo, remoção e prevenção — exatamente o conteúdo descrito. A alternativa A trata de informações amplas sobre ameaças e agentes, voltadas à compreensão de tendências. A alternativa B envolve informações técnicas e comportamentais mais detalhadas úteis a defesa e resposta, mas não o nível de profundidade voltado a uma ameaça específica. A alternativa D não é um nível de inteligência, e sim uma categoria de fonte, reunida a partir de material publicamente disponível."
  },
  {
    "t": "Ao avaliar a adoção de um novo feed para alimentar as ferramentas de segurança da organização, um analista precisa explicar à diretoria que tipo de conteúdo esses feeds normalmente entregam. Qual descrição é a mais adequada?",
    "opts": [
      "A) Análises de tendências de longo prazo sobre adversários, destinadas a orientar decisões de investimento em segurança",
      "B) Detalhes atualizados sobre ameaças, como endereços IP, domínios, URLs, hashes de arquivos e números de CVE, acompanhados de contexto sobre agentes de ameaça",
      "C) Relatórios proprietários de serviços comerciais, que se distinguem por não incluírem indicadores técnicos consumíveis por ferramentas",
      "D) Evidências coletadas internamente durante investigações, consolidadas para uso em atividades de caça a ameaças"
    ],
    "ans": 1,
    "exp": "Feeds de ameaças, independentemente da fonte, fornecem detalhes atualizados que a organização pode aproveitar, incluindo endereços IP, hostnames e domínios, endereços de e-mail, URLs, hashes de arquivos, caminhos de arquivos e números de CVE, além de contexto que torna a informação relevante, como descrições de agentes de ameaça, motivações e metodologias. A alternativa A corresponde à inteligência estratégica. A alternativa C erra ao afirmar que serviços comerciais de fonte fechada não entregam indicadores consumíveis. A alternativa D descreve material gerado internamente, não o conteúdo característico de um feed."
  },
  {
    "t": "Uma analista precisa avaliar rapidamente se um determinado feed público de inteligência de ameaças é confiável e permanece atualizado antes de integrá-lo às ferramentas da organização. Qual recurso é o mais adequado para essa avaliação preliminar?",
    "opts": [
      "A) Um site que hospeda uma lista de feeds de fonte aberta com informação sobre quando foram adicionados e modificados e quem os mantém",
      "B) Um programa governamental de compartilhamento automatizado de indicadores, que distribui dados diretamente às organizações participantes",
      "C) Um blog de inteligência de ameaças mantido por um grande fornecedor de tecnologia, com pesquisas periódicas sobre campanhas ativas",
      "D) Uma ferramenta de consulta de reputação que classifica domínios e endereços conforme observações recentes"
    ],
    "ans": 0,
    "exp": "Existe um site que relaciona feeds de inteligência de ameaças de fonte aberta acompanhados de detalhes sobre data de inclusão e modificação, responsáveis pela manutenção e outras informações úteis, o que atende diretamente à necessidade de julgar confiabilidade e atualidade. A alternativa B entrega indicadores, mas não avalia outros feeds. A alternativa C fornece pesquisa de ameaças, sem catalogar e comparar fontes. A alternativa D verifica a reputação de domínios e endereços, não a qualidade das fontes de inteligência."
  },
  {
    "t": "Qual das seguintes medidas não é comumente utilizada para avaliar a inteligência de ameaças?",
    "opts": [
      "A) Tempestividade",
      "B) Detalhamento",
      "C) Precisão",
      "D) Relevância"
    ],
    "ans": 1,
    "exp": "Embora níveis mais altos de detalhamento possam ser úteis, essa não é uma medida comumente utilizada para avaliar a inteligência de ameaças. Em vez disso, a tempestividade, a precisão e a relevância das informações são consideradas fundamentais para determinar se você deve utilizar as informações sobre ameaças."
  },
  {
    "t": "Nandita encontrou um atacante que parece estar usando um pacote de exploração amplamente disponível para atacar sua organização. O pacote parece ter sido executado com as configurações padrão contra toda a presença pública de sua organização na Internet, a partir de um único sistema. Que tipo de agente de ameaça ela provavelmente está enfrentando?",
    "opts": [
      "A) Uma APT",
      "B) Um hacktivista",
      "C) Um script kiddie",
      "D) Um agente de Estado-nação"
    ],
    "ans": 2,
    "exp": "A falta de complexidade e de sutileza provavelmente indica que ela descobriu um ataque realizado por um atacante pouco habilidoso, às vezes chamado de \"script kiddie\"."
  },
  {
    "t": "Uma equipe de segurança discute a incorporação de dados de mídias sociais ao seu processo de inteligência de ameaças. Qual consideração descreve corretamente o uso dessa fonte?",
    "opts": [
      "A) É a fonte preferencial para análises aprofundadas e detalhadas, superando blogs e fóruns nesse aspecto",
      "B) Fornece informações muito oportunas, porém exige esforço considerável para determinar a veracidade e validar o que vem de fontes menos confiáveis",
      "C) Deve ser evitada, pois organizações CERT e CSIRT não utilizam esse canal para divulgação pública",
      "D) Oferece visibilidade direta sobre conversas de agentes de ameaça, sendo equivalente ao conteúdo obtido em fóruns fechados"
    ],
    "ans": 1,
    "exp": "Mídias sociais podem trazer informações bastante oportunas, mas dificultam determinar veracidade e origem, exigindo tempo e recursos significativos para identificar fontes confiáveis e validar o conteúdo. A alternativa A inverte o cenário, já que blogs e fóruns permanecem úteis justamente para análise e detalhamento mais aprofundados. A alternativa C está incorreta porque organizações CERT e CSIRT costumam divulgar informações públicas também por feeds de mídia social. A alternativa D descreve o valor associado à dark web, não às mídias sociais."
  },
  {
    "t": "Um analista precisa impedir o tráfego proveniente de faixas de rede reconhecidamente indesejadas e também obter informações sobre computadores sequestrados e comprometidos. Qual fonte pública atende diretamente a essa necessidade?",
    "opts": [
      "A) Um centro de resposta que publica alertas técnicos sobre vulnerabilidades e exploits em andamento",
      "B) Um repositório que reúne detalhes sobre amostras de malware enviadas para análise",
      "C) Uma organização especializada em listas de bloqueio, incluindo relações de netblocks e de máquinas comprometidas",
      "D) Uma plataforma comunitária de compartilhamento que disponibiliza feeds padronizados a partir de muitas fontes"
    ],
    "ans": 2,
    "exp": "Há uma organização pública focada em block lists que abrange listas de spam, computadores sequestrados e comprometidos, listas de política e relações de netblocks dos quais a organização pode não querer permitir tráfego. A alternativa A publica alertas sobre questões de segurança, vulnerabilidades e exploits, sem fornecer listas de bloqueio. A alternativa B concentra detalhes de amostras de malware enviadas para análise. A alternativa D distribui feeds padronizados com coleções mantidas pela comunidade, mas não é voltada a listas de bloqueio de redes e hosts comprometidos."
  },
  {
    "t": "Uma organização depende de um único fornecedor para receber regras de detecção em seu IDS/IPS. Após a divulgação de uma vulnerabilidade crítica com código de exploit em uso ativo em menos de 48 horas, o fornecedor levou mais de duas semanas para disponibilizar as regras correspondentes, deixando sistemas expostos. Qual medida melhor reduz a chance de que isso volte a ocorrer?",
    "opts": [
      "A) Migrar integralmente para feeds de fonte aberta, que costumam divulgar indicadores sem custo adicional",
      "B) Manter múltiplos feeds confiáveis e atualizados, comparando-os entre si já que um deles pode divulgar as informações antes",
      "C) Estabelecer um processo formal de criação manual de regras na plataforma enquanto o fornecedor não publica as detecções",
      "D) Priorizar inteligência proprietária de fonte fechada, cujos métodos e fontes são mantidos como segredos comerciais"
    ],
    "ans": 1,
    "exp": "É fundamental dispor de feeds confiáveis e atualizados, e manter múltiplos feeds de boa qualidade permite compará-los entre si, já que um deles pode ser mais rápido ou divulgar informações mais cedo. A alternativa A troca um problema por outro, pois o grande volume de dados de fontes abertas pode ser avassalador e exige validação e curadoria custosas. A alternativa C esbarra no fato de que a criação manual de regras naquela plataforma não funcionava bem. A alternativa D descreve características da inteligência de fonte fechada, mas contratar mais do mesmo modelo não garante agilidade nem oferece contraponto."
  },
  {
    "t": "Um fornecedor de segurança realiza coleta e pesquisa próprias, usa ferramentas personalizadas e modelos de análise exclusivos para curar seus feeds e opta por não divulgar publicamente seus métodos. Qual justificativa melhor explica essa decisão?",
    "opts": [
      "A) Feeds mantidos dessa forma dispensam a validação dos dados de ameaças por parte das organizações assinantes",
      "B) A distribuição restrita é exigida de organizações que participam de acordos de compartilhamento de informações",
      "C) Os métodos e fontes constituem segredos comerciais e a exposição permitiria que agentes de ameaça soubessem quais dados estão sendo coletados",
      "D) A coleta própria elimina a necessidade de esforço para aplicar as ameaças identificadas ao contexto da organização"
    ],
    "ans": 2,
    "exp": "Entre as razões para adotar inteligência proprietária estão manter os dados em sigilo, vendê-los ou licenciá-los — sendo métodos e fontes segredos comerciais — e evitar o risco de que agentes de ameaça saibam quais dados estão sendo coletados. A alternativa A é incorreta porque validar dados de ameaças continua sendo difícil em muitos casos. A alternativa B inverte a lógica: participar de acordos de compartilhamento é uma das formas de divulgar a inteligência, não uma imposição de sigilo. A alternativa D ignora que, mesmo com dados de alta qualidade, ainda é preciso aplicá-los adequadamente à organização."
  },
  {
    "t": "Qual das seguintes atividades ocorre após a análise dos dados de ameaças no ciclo de inteligência de ameaças?",
    "opts": [
      "A) Coleta de feedback",
      "B) Coleta de dados de ameaças",
      "C) Revisão de dados de ameaças",
      "D) Disseminação de inteligência de ameaças"
    ],
    "ans": 3,
    "exp": "A disseminação ou o compartilhamento de inteligência de ameaças normalmente ocorre após a análise dos dados de ameaças. O objetivo é fazer com que os dados de ameaças cheguem às organizações e às pessoas que precisam deles."
  },
  {
    "t": "Susan quer começar a coletar inteligência. Qual das seguintes atividades é frequentemente realizada na etapa de levantamento de requisitos?",
    "opts": [
      "A) Revisão das violações de segurança ou dos comprometimentos que sua organização enfrentou",
      "B) Revisão das varreduras de vulnerabilidades atuais",
      "C) Revisão dos padrões atuais de tratamento de dados",
      "D) Revisão dos feeds de inteligência de ameaças em busca de novas ameaças"
    ],
    "ans": 0,
    "exp": "Compreender as necessidades de sua organização é importante para a etapa de levantamento de requisitos do ciclo de inteligência. Revisar violações de segurança e comprometimentos recentes pode ajudar a definir quais ameaças você está enfrentando atualmente. As varreduras de vulnerabilidades atuais podem identificar onde você pode estar vulnerável, mas são menos úteis para identificar ameaças. Os padrões de tratamento de dados não fornecem informações sobre ameaças, e as revisões dos feeds de inteligência listam novas ameaças, mas só são úteis se você souber que tipos de ameaças provavelmente enfrentará, para poder determinar em quais deve concentrar sua atenção."
  },
  {
    "t": "Um analista recebe uma notificação de inteligência de ameaças divulgada poucas horas após a descoberta do incidente e confirmada por múltiplas fontes independentes. No entanto, o conteúdo descreve uma exploração específica de uma plataforma de virtualização que a organização não utiliza. Como o analista deve caracterizar essa informação?",
    "opts": [
      "A) Precisa e oportuna, porém irrelevante para a organização",
      "B) Relevante, mas com baixa pontuação de confiança em razão do escopo restrito",
      "C) Oportuna, mas imprecisa por não se aplicar ao ambiente avaliado",
      "D) Desacreditada, já que a avaliação não corresponde à realidade da organização"
    ],
    "ans": 0,
    "exp": "Quando a informação descreve a plataforma, o software ou o motivo errado para a organização ser alvo, os dados podem ser muito oportunos e muito precisos, mas completamente irrelevantes para aquela organização. A alternativa B confunde relevância com confiança: a confirmação por múltiplas fontes independentes sustenta uma confiança elevada. A alternativa C trata a inaplicabilidade ao ambiente como erro de precisão, o que não procede, já que a precisão diz respeito à validade da avaliação. A alternativa D reserva-se aos casos em que a avaliação foi confirmada como imprecisa ou incorreta, o que não ocorre aqui."
  },
  {
    "t": "Uma equipe recebe um indicador acompanhado de uma classificação de confiança na faixa de 30 a 49 em um feed que usa escala de seis níveis. Qual interpretação e conduta são adequadas?",
    "opts": [
      "A) A avaliação foi confirmada como incorreta, portanto o indicador deve ser descartado do processo de análise",
      "B) A avaliação apoia-se em inferência lógica sem confirmação direta, o que permite sustentar decisões importantes de imediato",
      "C) A avaliação é possível, mas não é a opção mais provável ou não pode ser provada nem refutada; o indicador não deve ser ignorado, mas tampouco embasar decisões importantes sem considerar a baixa confiança",
      "D) A avaliação foi comprovada por fontes independentes, o que dispensa validações adicionais antes de aplicar o indicador"
    ],
    "ans": 2,
    "exp": "A faixa de 30 a 49 corresponde ao nível atribuído quando a avaliação é possível, porém não é a opção mais provável, ou quando não pode ser provada nem refutada pela informação disponível; informação de baixa confiança não deve ser completamente ignorada, mas também não deve embasar decisões importantes sem que a pontuação seja levada em conta. A alternativa A descreve o nível reservado a avaliações confirmadas como imprecisas. A alternativa B corresponde à faixa de 70 a 89 e ainda assim não autoriza decisões sem ressalvas. A alternativa D descreve a faixa superior, de 90 a 100."
  },
  {
    "t": "Durante a revisão trimestral das fontes de inteligência, um gestor questiona por que a equipe descartou um feed cujas informações se mostraram corretas na maioria das vezes. O analista explica que o feed entregava os dados com considerável atraso em relação aos demais. Qual fator de avaliação justifica essa decisão?",
    "opts": [
      "A) Relevância, pois o conteúdo não correspondia às plataformas utilizadas pela organização",
      "B) Precisão, pois um feed que atrasa tende a se apoiar em fonte única e reduzir a validade da avaliação",
      "C) Pontuação de confiança, que deve ser reduzida automaticamente sempre que houver demora na publicação",
      "D) Oportunidade, pois um feed operando com atraso pode fazer a organização perder uma ameaça ou reagir quando ela já não é relevante"
    ],
    "ans": 3,
    "exp": "A oportunidade é um dos fatores centrais da avaliação: um feed que opera com atraso pode fazer com que a organização perca uma ameaça ou reaja depois que ela deixou de ser relevante, o que justifica a decisão mesmo diante de informações corretas. A alternativa A trata de adequação ao ambiente, que não é o problema apontado. A alternativa B liga atraso a fonte única, associação que não se sustenta, já que precisão diz respeito à confiabilidade e à validade da avaliação. A alternativa C descreve uma regra automática inexistente, pois a pontuação de confiança resume a avaliação dos fatores e evolui conforme a informação se solidifica."
  },
  {
    "t": "A equipe de segurança recebe informação confiável de que existe uma exploração de dia zero em uso ativo contra a versão atual do software do fornecedor de firewalls adotado pela organização. Em qual prática operacional essa informação é aplicada de forma mais direta?",
    "opts": [
      "A) Resposta a incidentes, permitindo identificar com antecedência as ferramentas e técnicas do agente de ameaça",
      "B) Gerenciamento de vulnerabilidades, influenciando a priorização e a decisão entre o ciclo normal de patches e uma atualização urgente",
      "C) Engenharia de segurança, orientando decisões de projeto sobre a arquitetura de perímetro adotada",
      "D) Detecção e monitoramento, viabilizando a criação de novas regras de detecção para o tráfego do dispositivo"
    ],
    "ans": 1,
    "exp": "Saber que há um zero-day sendo explorado na versão em uso de um fornecedor de firewall amplamente implantado é o exemplo típico de inteligência que apoia a avaliação de risco e influencia os ciclos de patch e a priorização, podendo justificar uma atualização urgente e arriscada em vez do ciclo típico. A alternativa A é aplicável quando já há um incidente a conduzir. A alternativa C atua sobre necessidades atuais e futuras de projeto, não sobre a correção imediata. A alternativa D é um desdobramento possível, mas a informação descrita trata da vulnerabilidade e da urgência de correção."
  },
  {
    "t": "Durante o planejamento de uma nova arquitetura que permanecerá em operação por vários anos, a equipe deseja antecipar quais ameaças tendem a crescer e incorporar respostas a elas ainda na fase de concepção. Em qual área o compartilhamento de inteligência de ameaças está sendo empregado?",
    "opts": [
      "A) Detecção e monitoramento, sustentando atualizações oportunas das capacidades de detecção comportamental",
      "B) Gerenciamento de vulnerabilidades, apoiando a priorização de correções ao longo do tempo",
      "C) Resposta a incidentes, facilitando o planejamento de resposta e as atividades de limpeza",
      "D) Engenharia de segurança, oferecendo visão da direção das ameaças ao longo do ciclo de vida do projeto"
    ],
    "ans": 3,
    "exp": "A engenharia de segurança considera necessidades atuais e futuras, e a inteligência de ameaças oferece visão da direção das ameaças e de quais delas podem crescer durante o ciclo de vida de um projeto, influenciando respostas que são integradas às decisões de projeto. A alternativa A trata da manutenção de regras e da detecção comportamental em operação. A alternativa B foca em risco e priorização de correções em sistemas existentes. A alternativa C se aplica quando já existe um incidente em curso, apoiando identificação de alvos, planejamento e limpeza."
  },
  {
    "t": "Quais organizações o governo dos Estados Unidos ajudou a criar para compartilhar conhecimento entre organizações de setores específicos?",
    "opts": [
      "A) DHS",
      "B) SANS",
      "C) CERTs",
      "D) ISACs"
    ],
    "ans": 3,
    "exp": "O governo dos Estados Unidos criou os centros de compartilhamento e análise de informações (ISACs). Os ISACs ajudam proprietários e operadores de infraestrutura a compartilhar informações sobre ameaças, além de fornecer ferramentas e assistência a seus membros."
  },
  {
    "t": "Qual dos seguintes tipos de agentes de ameaça normalmente tem o maior acesso a recursos?",
    "opts": [
      "A) Agentes de Estados-nação",
      "B) Crime organizado",
      "C) Hacktivistas",
      "D) Ameaças internas"
    ],
    "ans": 0,
    "exp": "Os agentes de Estados-nação são patrocinados por governos e normalmente têm o maior acesso a recursos, incluindo ferramentas, dinheiro e talentos."
  },
  {
    "t": "Um gestor pergunta como as diversas aplicações de inteligência de ameaças na organização se conectam a um objetivo mais amplo. Qual resposta descreve corretamente esse enquadramento?",
    "opts": [
      "A) Todos esses usos integram os esforços de gerenciamento de risco organizacional, e cabe à organização definir como adquirirá, consumirá e responderá à inteligência relevante",
      "B) Todos esses usos convergem para a resposta a incidentes, que centraliza a identificação de agentes de ameaça e a condução das ações de contenção",
      "C) Todos esses usos servem principalmente ao gerenciamento de vulnerabilidades, que orienta a priorização das correções em toda a infraestrutura",
      "D) Todos esses usos se subordinam à detecção e ao monitoramento, responsáveis por transformar a inteligência recebida em regras aplicáveis"
    ],
    "ans": 0,
    "exp": "O conjunto das aplicações de compartilhamento de inteligência de ameaças faz parte dos esforços de gerenciamento de risco organizacional, e organizações modernas precisam identificar como adquirirão, consumirão e responderão à inteligência que lhes seja relevante — tarefa que se tornou um dever operacional central de muitas equipes de operações de segurança. As alternativas B, C e D elevam indevidamente uma das áreas específicas de uso à condição de finalidade que abrange as demais, quando cada uma delas é apenas uma das aplicações listadas."
  },
  {
    "t": "Uma organização consome três feeds distintos de inteligência de ameaças e enfrenta dificuldade para consolidá-los, pois cada um adota formato e modelo de classificação próprios. Qual abordagem resolve diretamente esse problema?",
    "opts": [
      "A) Reduzir a operação a um único feed, eliminando as divergências de formato entre as fontes",
      "B) Selecionar feeds que utilizem o mesmo framework de descrição, ou recorrer a fontes que já combinem múltiplos feeds",
      "C) Converter manualmente os indicadores recebidos para um vocabulário interno antes de aplicá-los às ferramentas",
      "D) Utilizar um protocolo de transporte na camada de aplicação para uniformizar a entrega dos dados recebidos"
    ],
    "ans": 1,
    "exp": "A combinação de feeds é desafiadora quando eles não compartilham formato, modelo de classificação ou outros elementos, e a saída é buscar fontes que já combinem múltiplos feeds ou feeds que adotem os mesmos frameworks de descrição. A alternativa A contraria a recomendação de usar múltiplos feeds para obter a informação mais atualizada. A alternativa C é trabalhosa e não aproveita a padronização existente, que é justamente o que permite processamento automatizado. A alternativa D confunde transporte com estrutura: transmitir os dados não uniformiza os formatos e as classificações."
  },
  {
    "t": "Ao integrar dados de inteligência recebidos de um parceiro, um analista observa que campos como o nível de sofisticação e o nível de recursos do agente de ameaça utilizam opções de vocabulário previamente definidas. Qual é o principal benefício dessa característica?",
    "opts": [
      "A) Permite que os objetos descritos sejam relacionados entre si como relacionamento ou avistamento",
      "B) Garante a comunicação segura dos dados na camada de aplicação entre as organizações envolvidas",
      "C) Possibilita o uso consistente dos dados tanto em sistemas automatizados quanto em análises manuais",
      "D) Assegura que os indicadores incluam metadados como autor, nome e maturidade do indicador"
    ],
    "ans": 2,
    "exp": "Campos com vocabulário definido existem para que os usuários utilizem os dados de forma consistente como parte de sistemas automatizados e manuais, o que é a base do gerenciamento de indicadores em escala. A alternativa A descreve os modelos de objeto de relacionamento, função distinta do vocabulário controlado. A alternativa B trata do protocolo complementar que transporta as informações via HTTPS na camada de aplicação. A alternativa D corresponde aos metadados típicos de um indicador em outro framework baseado em XML, e não ao papel do vocabulário definido."
  },
  {
    "t": "Uma equipe avalia um framework baseado em XML cujo esquema foi desenvolvido por um fornecedor de segurança e que estrutura indicadores contendo metadados como autor, nome e descrição, referências à investigação, informações sobre maturidade e a definição do próprio indicador. Qual formato corresponde a essa descrição?",
    "opts": [
      "A) OpenIOC",
      "B) STIX",
      "C) TAXII",
      "D) JSON"
    ],
    "ans": 0,
    "exp": "O formato OpenIOC é um framework baseado em XML cujo esquema foi desenvolvido pela Mandiant e usa seus indicadores como base; um indicador típico traz metadados como autor, nome e descrição, referências à investigação ou ao caso, informações de maturidade e a definição do indicador de comprometimento. A alternativa B também é uma linguagem XML, mas foi originalmente patrocinada por um órgão governamental e organiza objetos de domínio relacionados entre si. A alternativa C é um protocolo de comunicação projetado para dar suporte à troca de dados, não um esquema de indicadores. A alternativa D é um formato de dados, sem esquema próprio de IOC."
  },
  {
    "t": "Organizações como o Anonymous, que têm governos e empresas como alvos por razões políticas, são exemplos de que tipo de agente de ameaça?",
    "opts": [
      "A) Hacktivistas",
      "B) Ativos militares",
      "C) Agentes de Estados-nação",
      "D) Crime organizado"
    ],
    "ans": 0,
    "exp": "Hacktivistas executam ataques por razões políticas, incluindo ataques contra governos e empresas. O elemento principal desta questão são as razões políticas por trás do ataque."
  },
  {
    "t": "Jason coleta inteligência de ameaças que lhe informa que um adversário considerado uma ameaça por sua organização gosta de usar pendrives deixados em locais onde possam ser encontrados para comprometer seus alvos. Isso é um exemplo de quê?",
    "opts": [
      "A) A superfície de ataque de sua organização",
      "B) Um possível vetor de ataque",
      "C) Um exemplo da capacidade do adversário",
      "D) Uma avaliação de probabilidade"
    ],
    "ans": 1,
    "exp": "Os vetores de ataque, ou os meios pelos quais um atacante pode obter acesso ao seu alvo, podem incluir práticas como deixar pendrives para serem encontrados. Você pode ser tentado a responder a esta questão com a capacidade do adversário, mas lembre-se da definição: os recursos, a intenção ou a habilidade do provável agente de ameaça. Capacidade, aqui, não significa o que eles podem fazer, mas sua habilidade para fazê-lo. A superfície de ataque poderia incluir o estacionamento da organização neste exemplo, mas o caso descrito não é um exemplo de superfície de ataque, e o problema não inclui nenhuma avaliação de probabilidade."
  },
  {
    "t": "Após sofrer um comprometimento significativo, uma organização inicia a estruturação de seu programa de inteligência de ameaças. A equipe avalia quais violações enfrentou, qual informação teria evitado ou limitado o impacto e quais controles ausentes teriam mitigado o incidente. Qual fase do ciclo está sendo executada?",
    "opts": [
      "A) Coleta de dados",
      "B) Levantamento de requisitos",
      "C) Processamento e análise de dados",
      "D) Feedback"
    ],
    "ans": 1,
    "exp": "A primeira fase do ciclo consiste em planejar os requisitos de inteligência, o que inclui avaliar as violações enfrentadas, a informação que poderia tê-las prevenido ou limitado e os controles ausentes que as teriam mitigado. A alternativa A ocorre depois, quando os requisitos de informação já existem e orientam de quais fontes coletar. A alternativa C trata do preparo e da interpretação dos dados já reunidos. A alternativa D encerra o ciclo, reunindo retorno sobre relatórios e dados produzidos para melhorar o programa."
  },
  {
    "t": "Uma equipe reuniu material de diversas fontes: parte em formatos que as ferramentas existentes consomem diretamente, parte em texto simples e parte praticamente sem formatação. Qual é a sequência correta de trabalho nessa etapa?",
    "opts": [
      "A) Distribuir o material bruto à liderança e ao pessoal operacional, que definirá como consumi-lo",
      "B) Refinar os requisitos de informação antes de qualquer tratamento do material reunido",
      "C) Processar os dados para que possam ser consumidos pelas ferramentas ou processos pretendidos e, em seguida, analisá-los",
      "D) Reunir retorno sobre a qualidade das fontes antes de submeter os dados às ferramentas"
    ],
    "ans": 2,
    "exp": "Na etapa de processamento e análise, os dados chegam em formatos variados e devem primeiro ser processados para permitir seu consumo pelas ferramentas ou processos pretendidos, e só então analisados; a saída pode ser dados alimentados em sistemas automatizados ou relatórios escritos. A alternativa A antecipa a disseminação e ignora o tratamento necessário. A alternativa B descreve um ajuste que ocorre na coleta, à medida que requisitos são acrescentados ou refinados. A alternativa D corresponde à etapa final do ciclo."
  },
  {
    "t": "Concluída a análise, os produtos gerados são encaminhados à liderança e ao pessoal operacional que os utilizará no exercício de suas funções em operações de segurança. Qual fase do ciclo está sendo descrita?",
    "opts": [
      "A) Disseminação da inteligência",
      "B) Levantamento de requisitos",
      "C) Coleta de dados",
      "D) Processamento e análise de dados"
    ],
    "ans": 0,
    "exp": "Na fase de disseminação, os dados são distribuídos à liderança e ao pessoal operacional que os usará como parte de sua função nas operações de segurança. A alternativa B define o que precisa ser buscado e por quê, no início do ciclo. A alternativa C obtém o material das fontes de inteligência conforme os requisitos estabelecidos. A alternativa D prepara e interpreta o material coletado, podendo gerar relatórios, mas a entrega desses produtos aos destinatários pertence à fase seguinte."
  },
  {
    "t": "Ao final de um ciclo, o gestor de segurança solicita que as áreas consumidoras avaliem os relatórios e os dados recebidos. Qual é o propósito dessa etapa?",
    "opts": [
      "A) Verificar se as fontes utilizadas permanecem disponíveis para novas coletas no próximo ciclo",
      "B) Confirmar se os dados foram convertidos em formatos consumíveis pelas ferramentas da organização",
      "C) Registrar quais controles ausentes contribuíram para os incidentes ocorridos no período",
      "D) Apoiar a melhoria contínua, criando requisitos melhores e aprimorando a saída do programa de inteligência"
    ],
    "ans": 3,
    "exp": "A etapa final reúne feedback sobre os relatórios e dados produzidos, e a melhoria contínua é elemento crítico do processo, devendo ser usada para criar requisitos melhores e aprimorar a saída geral do programa. A alternativa A trata de disponibilidade de fontes, assunto da coleta. A alternativa B descreve o processamento dos dados. A alternativa C corresponde a uma das avaliações típicas do levantamento de requisitos, no início do ciclo."
  },
  {
    "t": "Que tipo de avaliação é particularmente útil para identificar ameaças internas?",
    "opts": [
      "A) Comportamental",
      "B) Instintiva",
      "C) Habitual",
      "D) IOCs"
    ],
    "ans": 0,
    "exp": "As avaliações comportamentais são muito úteis quando você tenta identificar ameaças internas. Como muitas vezes é difícil distinguir as ameaças internas do comportamento normal, costumam ser usados o contexto das ações realizadas — como logins fora do horário de expediente, uso indevido de credenciais e logins a partir de locais incomuns ou em padrões anormais — e outros indicadores comportamentais."
  },
  {
    "t": "Felix quer coletar inteligência de ameaças sobre um agente de ameaça do crime organizado. Onde ele provavelmente encontrará informações publicadas pelo próprio agente de ameaça?",
    "opts": [
      "A) Redes sociais",
      "B) Blogs",
      "C) Boletins governamentais",
      "D) A dark web"
    ],
    "ans": 3,
    "exp": "Agentes de ameaça, como organizações criminosas, frequentemente operam por meio da dark web. Fóruns funcionam como centrais de troca de informações, recursos e acesso por meio de sites hospedados na rede TOR. Embora redes sociais, blogs ou boletins governamentais possam fornecer informações sobre uma organização criminosa, é mais provável que ela própria publique informações na dark web."
  },
  {
    "t": "Durante a execução do programa, a equipe percebe que as fontes disponíveis não cobrem integralmente o que foi definido inicialmente e que novas necessidades surgiram. Qual afirmação descreve corretamente como o ciclo acomoda essa situação?",
    "opts": [
      "A) O ciclo deve ser reiniciado do zero, já que requisitos incompletos invalidam os dados já reunidos",
      "B) A fase de coleta pode se repetir conforme requisitos adicionais são acrescentados ou refinados com base nos dados e nas fontes disponíveis",
      "C) Os ajustes devem aguardar a etapa de feedback, única fase em que requisitos podem ser revistos",
      "D) A adequação deve ocorrer no processamento, convertendo os dados existentes para suprir as lacunas identificadas"
    ],
    "ans": 1,
    "exp": "A fase de coleta pode se repetir à medida que requisitos adicionais são acrescentados ou que os requisitos são refinados com base nos dados e nas fontes de dados disponíveis, o que acomoda naturalmente a situação descrita. A alternativa A propõe um reinício desnecessário e descarta trabalho útil. A alternativa C restringe indevidamente a revisão de requisitos à etapa final, embora o feedback contribua para requisitos melhores. A alternativa D atribui ao processamento a função de suprir lacunas de cobertura, quando essa etapa apenas prepara e analisa os dados já obtidos."
  },
  {
    "t": "Uma concessionária de energia deseja participar de uma comunidade que reúna organizações do seu próprio setor, permita troca aprofundada de informação sobre ameaças físicas e cibernéticas e ofereça apoio de resposta a incidentes e análise de ameaças em regime contínuo. Qual opção atende a essa necessidade?",
    "opts": [
      "A) Um ISAC setorial, que opera sob modelo de confiança entre proprietários e operadores de infraestrutura",
      "B) Um feed comercial de inteligência de ameaças voltado ao setor de energia, com curadoria proprietária",
      "C) Uma organização CERT nacional, responsável por divulgar boletins públicos sobre ameaças e vulnerabilidades",
      "D) Uma agência parceira governamental designada para a área de infraestrutura crítica correspondente"
    ],
    "ans": 0,
    "exp": "Os ISACs ajudam proprietários e operadores de infraestrutura a compartilhar informação de ameaças e fornecem ferramentas e assistência aos membros, operando sob modelo de confiança que viabiliza compartilhamento aprofundado de ameaças físicas e cibernéticas; a maioria opera 24 horas por dia, oferecendo resposta a incidentes e análise de ameaças aos membros do setor. A alternativa B entrega dados curados, sem a troca entre pares descrita. A alternativa C divulga informação pública, não o compartilhamento restrito baseado em confiança. A alternativa D atua como parceira setorial, mas não é a comunidade de compartilhamento entre operadores."
  },
  {
    "t": "Uma multinacional com operações no Reino Unido busca orientação e recursos sobre ameaças fornecidos por um órgão governamental daquele país, voltado à indústria, à academia, a outras esferas de governo e às forças de segurança. Qual afirmação descreve corretamente esse cenário?",
    "opts": [
      "A) Fora dos Estados Unidos não existem estruturas equivalentes, de modo que a empresa deve recorrer às fontes norte-americanas",
      "B) O órgão britânico responsável cumpre esse papel, e estruturas governamentais semelhantes existem em muitos países",
      "C) A única alternativa disponível seria aderir a um ISAC setorial, já que esse modelo não possui equivalentes internacionais",
      "D) A orientação deve ser obtida junto às agências parceiras designadas por setor de infraestrutura crítica nos Estados Unidos"
    ],
    "ans": 1,
    "exp": "Órgãos e agências governamentais com responsabilidades semelhantes existem em muitos países, e no Reino Unido há um centro incumbido de fornecer informação de ameaças, recursos e orientação para a indústria e a academia, além de outras partes do governo e das forças de segurança. A alternativa A nega a existência dessas estruturas fora dos Estados Unidos. A alternativa C trata o modelo de ISAC como única via possível. A alternativa D remete a agências parceiras norte-americanas organizadas por setor, que não correspondem ao órgão britânico buscado."
  },
  {
    "t": "Qual das seguintes opções não é um indicador de comprometimento comum?",
    "opts": [
      "A) Logins em contas administrativas",
      "B) Modificações inesperadas em arquivos de configuração",
      "C) Atividade de login a partir de países ou locais atípicos",
      "D) Grandes transferências de dados de saída de sistemas administrativos"
    ],
    "ans": 0,
    "exp": "Logins administrativos, por si só, não são IOCs, mas o comportamento inesperado associado a eles ou outro comportamento atípico é um indicador de comprometimento. Modificações inesperadas em arquivos de configuração, atividade de login a partir de países ou locais atípicos e grandes transferências de arquivos a partir de sistemas administrativos são indicadores de comprometimento comuns."
  },
  {
    "t": "Nick quer analisar as táticas e técnicas dos atacantes. Que tipo de ferramenta ele pode implantar para capturar, da maneira mais eficaz, dados de ataques reais para análise?",
    "opts": [
      "A) Um firewall",
      "B) Um honeypot",
      "C) Um firewall de aplicações web",
      "D) Um SIEM"
    ],
    "ans": 1,
    "exp": "Nick deve implantar um honeypot para capturar ferramentas e técnicas de ataque para análise posterior. Firewalls bloqueiam o tráfego. Um firewall de aplicações web é um firewall projetado para proteger aplicações web e, embora possa capturar informações úteis, não é tão adequado a esse propósito. Uma ferramenta SIEM, de gerenciamento de informações e eventos de segurança, também pode permitir a captura de dados relevantes sobre ataques, mas não foi projetada especificamente para esse propósito, como um honeypot."
  },
  {
    "t": "Uma investigação revela que dispositivos de rede adquiridos de um fornecedor chegaram à organização com um backdoor já implantado no firmware. Qual categoria de agente de ameaça melhor descreve essa situação?",
    "opts": [
      "A) Agentes de Estado-nação, dada a sofisticação necessária para modificar firmware de dispositivos",
      "B) Agentes de ameaça da cadeia de suprimentos, atuando como parte dela para comprometer dispositivos",
      "C) Ameaça interna intencional, considerando o acesso privilegiado necessário para viabilizar a inserção",
      "D) Crime organizado, pela possibilidade de monetizar posteriormente o acesso obtido nos dispositivos"
    ],
    "ans": 1,
    "exp": "Agentes de ameaça da cadeia de suprimentos podem agir como parte dela, inserindo software ou hardware malicioso, comprometendo dispositivos ou inserindo backdoors — exatamente o cenário descrito, que motivou maior foco na validação da integridade de dispositivos e software. A alternativa A associa o caso a capacidades avançadas típicas de atores estatais, mas a via de comprometimento aqui é o fornecimento. A alternativa C exigiria origem em funcionário ou indivíduo confiável dentro da organização. A alternativa D aponta motivação financeira, característica de grupos criminosos, sem explicar o vetor utilizado."
  },
  {
    "t": "Ao conduzir sua avaliação de ameaças, uma equipe classifica um incidente causado por um funcionário que, sem intenção maliciosa, expôs dados confidenciais ao configurar incorretamente um compartilhamento. Qual classificação é a mais adequada?",
    "opts": [
      "A) Script kiddie, pelo uso inadequado de ferramentas preexistentes disponíveis no ambiente",
      "B) Hacktivista, caso a exposição tenha favorecido alguma causa política ou filosófica",
      "C) Ameaça interna não intencional, originada de indivíduo confiável dentro da organização",
      "D) Ameaça interna intencional, já que a ação partiu de alguém com acesso autorizado aos dados"
    ],
    "ans": 2,
    "exp": "Ameaças internas partem de funcionários ou outros indivíduos confiáveis e podem ser intencionais ou não intencionais; a configuração equivocada sem intenção maliciosa caracteriza a modalidade não intencional, que ainda assim é significativa em razão da posição de confiança e costuma ser difícil de detectar. A alternativa A descreve agentes maliciosos que empregam ferramentas prontas de modo pouco sofisticado. A alternativa B pressupõe motivação política ou filosófica, ausente no cenário. A alternativa D atribui intenção à conduta, contrariando o enunciado."
  },
  {
    "t": "Um analista precisa caracterizar um grupo que dispõe de tempo, talento, equipamento e ferramentas avançadas raramente observadas em outros atacantes, atuando conforme os interesses do país que o patrocina. Qual descrição corresponde a esse perfil?",
    "opts": [
      "A) Crime organizado, geralmente associado a campanhas persistentes de grande escala",
      "B) Hacktivistas organizados em grandes grupos, com recursos técnicos bastante variáveis",
      "C) Agentes de ameaça da cadeia de suprimentos, capazes de comprometer produtos antes da entrega",
      "D) Agentes de Estado-nação, frequentemente associados a organizações de ameaça persistente avançada"
    ],
    "ans": 3,
    "exp": "Agentes de Estado-nação costumam ter o maior acesso a recursos — ferramentas, talento, equipamento e tempo —, contam com o respaldo de um país, perseguem os objetivos desse patrocinador e são frequentemente associados a organizações de APT, com capacidades não comumente vistas em outros atacantes. A alternativa A descreve grupos cujos ataques visam tipicamente ganho financeiro, como ransomware. A alternativa B trata de ativistas com finalidade política ou filosófica e capacidades que variam bastante. A alternativa C se refere a atores que agem sobre o fornecimento de bens e serviços."
  },
  {
    "t": "Qual das seguintes opções não é uma área de foco comum das atividades de caça a ameaças?",
    "opts": [
      "A) Políticas",
      "B) Configurações incorretas",
      "C) Redes isoladas",
      "D) Ativos críticos para o negócio"
    ],
    "ans": 0,
    "exp": "É menos provável que os profissionais de caça a ameaças examinem políticas. Em vez disso, configurações e configurações incorretas, redes isoladas e ativos críticos para o negócio são focos comuns desses profissionais."
  },
  {
    "t": "Que termo descreve uma análise de informações sobre ameaças que pode incluir detalhes como se essas informações foram confirmadas por várias fontes independentes ou se foram confirmadas diretamente?",
    "opts": [
      "A) Nível de qualidade da ameaça",
      "B) Nível STIX",
      "C) Nível de confiança",
      "D) Nível de garantia"
    ],
    "ans": 2,
    "exp": "O nível de confiança de suas informações sobre ameaças corresponde ao grau de certeza que você tem sobre essas informações. Uma avaliação de ameaças com alto nível de confiança normalmente será confirmada por várias fontes independentes e confiáveis ou por verificação direta."
  },
  {
    "t": "Uma equipe de inteligência acompanha um grupo de ameaça persistente avançada e reúne informações sobre como ele inicia suas campanhas, incluindo coleta de informações, sondagens iniciais e tentativas de engenharia social, além da infraestrutura que costuma empregar e de seus processos de comprometimento e limpeza. Qual é o principal valor desse levantamento?",
    "opts": [
      "A) Permitir que a organização atribua responsabilidade pelo ataque ao país que patrocina o grupo",
      "B) Fornecer o conhecimento das táticas, técnicas e procedimentos do grupo, base para combater sua atividade com sucesso",
      "C) Reduzir a probabilidade de que o grupo modifique sua infraestrutura e suas ferramentas ao longo do tempo",
      "D) Substituir a necessidade de classificar o grupo, uma vez que campanhas em andamento já indicam o comportamento esperado"
    ],
    "ans": 1,
    "exp": "Combater a atividade de APTs com sucesso depende frequentemente do conhecimento de suas táticas, técnicas e procedimentos, o que torna essas informações excepcionalmente valiosas; a análise do início das campanhas, da infraestrutura habitual, das técnicas de ataque e dos processos de comprometimento e limpeza funciona como traço identificador. A alternativa A trata de atribuição, que não é o propósito descrito. A alternativa C sugere que o levantamento influencia o comportamento do adversário, o que não ocorre. A alternativa D descarta a classificação, quando é justamente por meio das TTPs que esses grupos são identificados e classificados."
  },
  {
    "t": "Uma equipe recebe novos dados de inteligência que sugerem a atuação de um agente de ameaça ainda não observado no ambiente e decide iniciar um esforço de caça proativa a ameaças. Qual é o primeiro passo desse processo?",
    "opts": [
      "A) Traçar o perfil do agente de ameaça e de suas atividades típicas",
      "B) Estabelecer uma hipótese sobre a ameaça, com resultados acionáveis a serem testados",
      "C) Reduzir a área de superfície de ataque com base nos dados recém-recebidos",
      "D) Integrar múltiplas fontes de inteligência para obter uma visão mais completa"
    ],
    "ans": 1,
    "exp": "A caça proativa é desencadeada por novos dados ou ferramentas que levam analistas a formular uma hipótese sobre uma nova ameaça, agente ou tipo de ameaça; a hipótese é necessária para ser testada e deve produzir resultados acionáveis. A alternativa A é a etapa seguinte, apoiada em classificação de ameaças e TTPs, e ocorre durante a investigação. A alternativa C é uma ação de resposta adotada quando uma nova ameaça é efetivamente descoberta. A alternativa D é uma das chaves da atividade proativa, mas fornece insumo, não inicia a caça."
  },
  {
    "t": "Ao documentar o resultado de um exercício de caça a ameaças, um analista precisa distinguir corretamente dois conceitos. Qual afirmação faz essa distinção de forma adequada?",
    "opts": [
      "A) A superfície de ataque descreve como o ataque pode ser realizado, e os vetores de ataque representam os sistemas e serviços expostos",
      "B) Superfície de ataque e vetores de ataque são equivalentes, variando apenas conforme o tipo de ativo analisado",
      "C) A superfície de ataque corresponde aos sistemas, serviços e demais elementos que podem ser atacados, e os vetores de ataque indicam como o ataque pode ser conduzido",
      "D) A superfície de ataque é definida pelos agentes de ameaça identificados, enquanto os vetores derivam das capacidades de detecção existentes"
    ],
    "ans": 2,
    "exp": "A superfície de ataque abrange os sistemas, serviços e outros elementos da organização que podem ser atacados, enquanto os vetores de ataque são os meios pelos quais o ataque pode ser realizado. A alternativa A inverte exatamente as duas definições. A alternativa B trata os conceitos como sinônimos, eliminando a distinção que orienta tanto a redução da exposição quanto a avaliação dos meios de ataque. A alternativa D vincula os conceitos a agentes de ameaça e a capacidades de detecção, elementos que apoiam a análise mas não definem nenhum dos dois termos."
  },
  {
    "t": "O que motivou a criação dos ISACs nos Estados Unidos?",
    "opts": [
      "A) Compartilhamento de informações sobre ameaças para proprietários de infraestrutura",
      "B) A Lei de Cibersegurança de 1994",
      "C) Provedores de redes de coleta de informações sobre ameaças",
      "D) A Lei dos ISACs de 1998"
    ],
    "ans": 0,
    "exp": "Os ISACs foram introduzidos em 1998 como parte de uma diretiva presidencial e se concentram no compartilhamento e na análise de informações sobre ameaças para proprietários de infraestrutura crítica."
  },
  {
    "t": "Como o compartilhamento de inteligência de ameaças é mais frequentemente utilizado no gerenciamento de vulnerabilidades?",
    "opts": [
      "A) Para identificar ameaças de dia zero antes que sejam divulgadas",
      "B) Como parte de feeds de vulnerabilidades para sistemas de varredura",
      "C) Como parte dos processos de gerenciamento de patches, para determinar quais patches não estão instalados",
      "D) Para realizar uma avaliação quantitativa de riscos"
    ],
    "ans": 1,
    "exp": "Os feeds de inteligência de ameaças frequentemente fornecem informações sobre quais vulnerabilidades estão sendo ativamente exploradas, bem como sobre novos exploits. Isso pode influenciar as prioridades de aplicação de patches e as ações de gerenciamento de vulnerabilidades. As ameaças de dia zero não são conhecidas até serem divulgadas. As ações de gerenciamento de vulnerabilidades ajudam a determinar quais patches não estão instalados, mas a inteligência de ameaças não determina isso. Nas organizações típicas, a inteligência de ameaças não é utilizada diretamente para a avaliação quantitativa de riscos como parte das ações de gerenciamento de vulnerabilidades."
  },
  {
    "t": "Uma organização com centenas de ativos críticos busca tornar mais gerenciáveis as atividades de proteção, caça a ameaças e resposta, evitando tratar cada sistema individualmente. Qual medida atende a esse objetivo?",
    "opts": [
      "A) Concentrar os recursos disponíveis na superfície de ataque remanescente após o descomissionamento de serviços expostos",
      "B) Aprimorar continuamente as capacidades de detecção, acompanhando a evolução técnica das ameaças",
      "C) Agrupar ativos críticos em grupos e zonas de proteção",
      "D) Avaliar os vetores de ataque com base na análise dos agentes de ameaça e de suas técnicas"
    ],
    "ans": 2,
    "exp": "Agrupar ativos críticos em grupos e zonas de proteção auxilia no gerenciamento da área de superfície de ataque, na caça a ameaças e nas atividades de resposta, pois dispensa avaliar ou gerenciar cada ativo como item isolado. A alternativa A descreve o benefício da redução da superfície de ataque, etapa distinta. A alternativa B é um processo contínuo necessário para que novas ameaças não contornem as capacidades existentes, sem relação com a gestão individualizada dos ativos. A alternativa D trata da compreensão dos meios pelos quais o ataque pode ser conduzido."
  },
  {
    "t": "Durante uma atividade de caça a ameaças em um segmento isolado que abriga sistemas especializados, a equipe percebe que consegue identificar rapidamente qualquer comunicação incomum, porém enfrenta dificuldade para implantar seus agentes de coleta. Qual afirmação descreve corretamente esse cenário?",
    "opts": [
      "A) A caça tende a ser mais fácil porque todo o tráfego e os comportamentos devem ser compreendidos, mas ferramentas gerenciadas centralmente podem ser mais difíceis de implantar e usar",
      "B) A caça tende a ser mais difícil porque o tráfego do segmento não pode ser caracterizado com precisão, exigindo ferramentas centralizadas adicionais",
      "C) O isolamento elimina a necessidade de caça a ameaças no segmento, já que os sistemas não estão expostos a vetores externos",
      "D) A dificuldade decorre da priorização inadequada de ativos críticos, que deveriam ser agrupados antes da implantação das ferramentas"
    ],
    "ans": 0,
    "exp": "Em redes isoladas, usadas para proteger dados e sistemas sensíveis ou especializados, a caça pode ser mais fácil porque todo o tráfego e os comportamentos devem ser compreendidos, mas isso também significa que implantar e usar ferramentas e capacidades gerenciadas de forma centralizada pode ser mais desafiador. A alternativa B inverte a característica que facilita a detecção nesses ambientes. A alternativa C descarta a caça em um segmento que existe justamente por abrigar ativos sensíveis. A alternativa D atribui a dificuldade a uma falha de priorização, quando ela decorre do próprio isolamento."
  },
  {
    "t": "Um caçador de ameaças identifica que parâmetros de segurança de um servidor foram alterados sem registro de mudança correspondente. Qual área de foco da caça a ameaças esse achado representa?",
    "opts": [
      "A) Ativos e processos críticos para o negócio, pela relevância do servidor no perfil de risco organizacional",
      "B) Redes isoladas, pela necessidade de compreender integralmente comportamentos esperados no segmento",
      "C) Configurações e configurações incorretas, que podem levar a comprometimento ou indicar alteração feita por um atacante",
      "D) Vetores de ataque, pela identificação do meio utilizado para conduzir a modificação observada"
    ],
    "ans": 2,
    "exp": "Configurações e configurações incorretas formam uma das áreas de foco, pois podem levar a um comprometimento ou indicar que um atacante modificou ajustes — exatamente o que sugere uma alteração sem registro de mudança. A alternativa A trata da importância do ativo, que não é o elemento central do achado. A alternativa B se aplica a segmentos usados para proteger dados e sistemas sensíveis ou especializados. A alternativa D nomeia um conceito de análise de ataque, mas não corresponde a uma das áreas de foco destacadas para a caça."
  },
  {
    "t": "Ao definir onde concentrar os esforços iniciais de caça a ameaças, uma equipe decide priorizar os sistemas e fluxos que sustentam as operações essenciais da empresa. Qual justificativa apoia essa escolha?",
    "opts": [
      "A) Esses sistemas costumam apresentar maior incidência de configurações incorretas do que os demais",
      "B) Esses sistemas são os únicos que integram a superfície de ataque efetivamente monitorada",
      "C) Esses sistemas exigem menor esforço de análise por já operarem sob segmentação restrita",
      "D) Esses sistemas concentram foco por sua importância no perfil de risco organizacional e pela necessidade de mantê-los seguros"
    ],
    "ans": 3,
    "exp": "Ativos e processos críticos para o negócio são uma área de foco devido à sua importância, e os caçadores de ameaças tendem a se concentrar neles em razão do perfil de risco organizacional e da necessidade de garantir que permaneçam seguros. A alternativa A presume uma incidência maior de configurações incorretas nesses sistemas, o que não é o fundamento da priorização. A alternativa B restringe indevidamente a superfície de ataque monitorada a esses ativos. A alternativa C associa criticidade a segmentação restrita e a menor esforço de análise, o que não corresponde ao motivo da priorização."
  },
  {
    "t": "O OpenIOC utiliza um conjunto básico de indicadores de comprometimento originalmente criado e fornecido por qual empresa de segurança?",
    "opts": [
      "A) Mandiant",
      "B) McAfee",
      "C) CrowdStrike",
      "D) Cisco"
    ],
    "ans": 0,
    "exp": "Os indicadores de ameaças integrados ao OpenIOC se baseiam na lista de indicadores da Mandiant. Você pode ampliar esse conjunto e incluir indicadores de comprometimento adicionais, além das 500 definições integradas."
  },
  {
    "t": "As ameaças persistentes avançadas estão mais comumente associadas a que tipo de agente de ameaça?",
    "opts": [
      "A) Ameaças internas",
      "B) Agentes de Estados-nação",
      "C) Crime organizado",
      "D) Hacktivistas"
    ],
    "ans": 1,
    "exp": "As ameaças persistentes avançadas (APTs) estão mais comumente associadas a agentes de Estados-nação. A complexidade de suas operações e as ferramentas avançadas que utilizam normalmente exigem recursos significativos para seu pleno aproveitamento."
  },
  {
    "t": "Um analista observa um volume de tráfego de rede bastante acima do padrão partindo de um servidor de aplicação. Antes de acionar a equipe de resposta a incidentes, ele verifica registros de mudanças e confirma que uma nova rotina de sincronização foi habilitada no dia anterior. Qual etapa do trabalho com indicadores de comprometimento esse procedimento representa?",
    "opts": [
      "A) Coleta, pela obtenção de dados a partir de logs e outras fontes que podem apontar comprometimento",
      "B) Análise, pela compreensão do significado dos dados e do contexto que indica se houve ou foi tentado um comprometimento",
      "C) Aplicação, pelo acionamento dos processos de resposta a incidentes diante do indicador identificado",
      "D) Documentação, pela disponibilização do indicador a serviços de inteligência e grupos de compartilhamento"
    ],
    "ans": 1,
    "exp": "A análise determina se a informação reunida realmente indica comprometimento; tráfego incomum é um indicador comumente citado, mas pode decorrer de um novo processo ou de uma tarefa raramente executada, e avaliar isso exige entendimento contextual. A alternativa A corresponde à aquisição dos dados por meio de ferramentas, logs e outras fontes, etapa já concluída. A alternativa C ocorre quando a análise conclui que houve comprometimento. A alternativa D descreve o papel de serviços de inteligência e grupos de compartilhamento, que documentam indicadores e os disponibilizam."
  },
  {
    "t": "Ao revisar registros de autenticação, um analista precisa selecionar os padrões que caracterizam atividade de login questionável. Qual conjunto corresponde a esse tipo de indicador?",
    "opts": [
      "A) Acessos em horários atípicos, uso de contas dormentes e origem em países incompatíveis com o comportamento habitual da conta",
      "B) Alterações em arquivos de configuração, criação de serviços novos e portas abertas sem justificativa",
      "C) Grandes transferências de dados de saída e picos inesperados de tráfego entre segmentos internos",
      "D) Uso incomum de contas privilegiadas e execução de software não previsto nos sistemas monitorados"
    ],
    "ans": 0,
    "exp": "Atividade de login questionável inclui acessos em horários estranhos, a partir de contas dormentes ou de países e localizações geográficas que não correspondem ao comportamento típico da conta. As alternativas B, C e D reúnem indicadores de comprometimento igualmente válidos — modificações em arquivos, serviços, portas ou software inesperados, grandes transferências de saída, tráfego incomum e uso inesperado de contas privilegiadas —, mas nenhum deles se enquadra na categoria de atividade de login questionável descrita no enunciado."
  },
  {
    "t": "Uma equipe de segurança assina serviços de inteligência de ameaças e participa de grupos de compartilhamento que publicam indicadores de comprometimento. Qual descrição reflete corretamente o uso desses indicadores?",
    "opts": [
      "A) Servem exclusivamente para acionar processos de resposta a incidentes após a confirmação de um comprometimento",
      "B) Substituem a etapa de coleta, pois já entregam prontos os dados extraídos dos sistemas da organização",
      "C) Podem ser aplicados tanto para concluir que houve comprometimento, ativando a resposta, quanto como insumo do próprio processo de análise",
      "D) Devem ser usados apenas quando a organização não dispõe de ferramentas próprias de monitoramento e análise"
    ],
    "ans": 2,
    "exp": "A aplicação de indicadores ocorre de duas maneiras: usando a análise para compreender se comprometimentos ocorreram, ativando resposta a incidentes e outros procedimentos, e também como parte do próprio processo de análise, já que serviços de inteligência e grupos de compartilhamento documentam indicadores e os disponibilizam para monitoramento e análise. A alternativa A reconhece apenas uma dessas formas. A alternativa B confunde indicadores publicados com a coleta de dados dos próprios sistemas. A alternativa D impõe uma limitação inexistente ao uso desses indicadores."
  },
  {
    "t": "Uma equipe deseja implantar um recurso que apresente aos atacantes um grande número de alvos falsos, fornecendo dados falsos e, ao mesmo tempo, retardando varreduras e ataques contra o ambiente. Qual componente atende a esse propósito?",
    "opts": [
      "A) Um honeypot instrumentado com registro de logs habilitado",
      "B) Um tarpit configurado como parte da defesa ativa",
      "C) Uma darknet composta por endereços IP não utilizados e monitorados",
      "D) Uma honeynet que replica um ambiente mais complexo"
    ],
    "ans": 1,
    "exp": "Tarpits fornecem aos atacantes um grande número de alvos falsos, entregando dados falsos e retardando varreduras e ataques, sendo componentes comuns das defesas ativas. A alternativa A descreve um sistema intencionalmente vulnerável usado para atrair atacantes e permitir a análise de seus comportamentos e ferramentas, não para retardar varreduras com alvos falsos. A alternativa C corresponde a conjuntos de endereços não utilizados, porém monitorados, empregados para identificar tráfego de ataque e potenciais agressores. A alternativa D é uma rede de honeypots voltada a replicar um ambiente mais complexo."
  },
  {
    "t": "Quais são os dois tipos de ameaças internas?",
    "opts": [
      "A) Ataque e defesa",
      "B) Aprovadas e proibidas",
      "C) Reais e imaginárias",
      "D) Intencionais e não intencionais"
    ],
    "ans": 3,
    "exp": "As ameaças internas podem ser intencionais ou não intencionais."
  },
  {
    "t": "Para qual tipo de dados de avaliação de ameaças os dados forenses são mais frequentemente utilizados?",
    "opts": [
      "A) STIX",
      "B) Comportamentais",
      "C) IOCs",
      "D) TAXII"
    ],
    "ans": 2,
    "exp": "Os dados forenses são muito úteis na definição de indicadores de comprometimento (IOCs). As avaliações comportamentais de ameaças também podem ser parcialmente definidas por dados forenses, mas o ponto principal aqui é onde os dados são utilizados com mais frequência."
  },
  {
    "t": "Durante o planejamento de um programa de defesa ativa, um gestor pergunta se seria viável explorar as ferramentas dos atacantes e conduzir contra-ataques. Qual resposta é a mais adequada?",
    "opts": [
      "A) Essa abordagem constitui a definição predominante de defesa ativa e deve ser priorizada por sua eficácia",
      "B) Essa prática equivale ao uso de honeypots, já que ambos envolvem interação direta com o atacante",
      "C) Existe uma definição de defesa ativa que abrange ação direta contra atacantes, mas ela é frequentemente evitada por questões legais e de responsabilidade",
      "D) Essa abordagem é recomendada apenas quando complementada por tarpits e darknets no perímetro"
    ],
    "ans": 2,
    "exp": "Há uma segunda definição de defesa ativa que envolve ação direta contra atacantes, incluindo exploração de ferramentas de ataque e técnicas de hack-back, mas ela é frequentemente evitada em razão das questões legais e de responsabilidade que cria. A alternativa A trata essa definição como predominante e recomendada, contrariando a cautela indicada. A alternativa B equipara contra-ataque a honeypots, que apenas atraem e observam atacantes. A alternativa D condiciona a prática a outros recursos, sem abordar o impedimento real, que é de natureza legal e de responsabilidade."
  },
  {
    "t": "Uma organização quer identificar tráfego de ataque e possíveis agressores monitorando faixas de endereçamento que não estão atribuídas a nenhum serviço legítimo. Qual recurso corresponde a essa descrição?",
    "opts": [
      "A) Darknets",
      "B) Honeypots pré-construídos voltados a infraestruturas específicas",
      "C) Tarpits",
      "D) Honeynets"
    ],
    "ans": 0,
    "exp": "Darknets são conjuntos de endereços IP não utilizados, mas monitorados, empregados justamente para ajudar a identificar tráfego de ataque e potenciais agressores. A alternativa B trata de sistemas intencionalmente vulneráveis projetados em torno de infraestruturas e sistemas atraentes para atacantes, que dependem da interação com o isca. A alternativa C descreve um mecanismo que retarda e confunde atacantes com alvos falsos. A alternativa D corresponde a redes de honeypots usadas para replicar um ambiente mais complexo, e não a faixas de endereços sem uso."
  }
];
