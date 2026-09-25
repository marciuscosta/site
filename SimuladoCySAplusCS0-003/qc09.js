// Questões do arquivo Questionario_cap9.txt, na ordem original.
// Os números do TXT servem apenas como separadores de questões.
const Qs = [
  {
    "t": "Um analista júnior de uma CSIRT registra no sistema de tickets que \"um evento de segurança foi identificado: um atacante realizou uma intrusão no sistema e instalou um keylogger no computador do CFO para capturar credenciais\". O analista sênior revisa o ticket e solicita a correção da classificação. Por que a classificação está incorreta?",
    "opts": [
      "A) A ocorrência não deveria ser registrada como evento de segurança nem como incidente, pois keyloggers são ferramentas legítimas de monitoramento em alguns contextos corporativos.",
      "B) A ocorrência deveria ser classificada como evento adverso, pois envolve consequências negativas diretas ao sistema do CFO.",
      "C) A ocorrência deveria ser classificada como incidente de segurança, pois representa uma violação ativa de políticas de segurança, não apenas um evento observável.",
      "D) A ocorrência é corretamente chamada de evento de segurança, pois todo incidente é, por definição, também um evento de segurança."
    ],
    "ans": 2,
    "exp": "Uma intrusão com instalação de keylogger para roubo de credenciais é, por definição do NIST, um incidente de segurança — uma violação concreta de políticas de segurança. Classificá-lo apenas como \"evento de segurança\" subestima a gravidade, pois eventos de segurança são ocorrências observáveis sem necessariamente implicar violação. A alternativa A está errada pois keyloggers instalados por atacantes externos nunca são ferramentas legítimas nesse contexto. A alternativa B está errada pois evento adverso implica consequências negativas, mas não necessariamente violação de política — o incidente de segurança é a classificação mais precisa aqui. A alternativa D, embora tecnicamente verdadeira (todo incidente inclui eventos), não justifica manter a classificação incorreta de \"evento de segurança\", que é insuficiente para descrever a gravidade da ocorrência."
  },
  {
    "t": "Uma organização está revisando seu programa de resposta a incidentes e discute quem deve participar do planejamento antecipado. Um membro da equipe sugere que apenas os especialistas em cibersegurança e tecnólogos devem ser envolvidos, pois os demais não possuem conhecimento técnico suficiente. Qual afirmativa melhor contraria essa sugestão?",
    "opts": [
      "A) Somente os líderes de tecnologia e os tecnólogos precisam participar, pois são eles que operam os sistemas afetados durante um incidente.",
      "B) O planejamento deve envolver líderes empresariais, líderes de tecnologia, especialistas em cibersegurança e tecnólogos, pois decisões sobre como responder a incidentes têm impacto organizacional amplo.",
      "C) O planejamento antecipado é dispensável desde que a organização possua uma CSIRT formada, pois ela já incorpora expertise técnica e julgamento profissional suficientes.",
      "D) Apenas os líderes empresariais precisam participar do planejamento, pois as decisões de resposta são estratégicas e não técnicas."
    ],
    "ans": 1,
    "exp": "Líderes empresariais, líderes de tecnologia, especialistas em cibersegurança e tecnólogos devem participar conjuntamente do planejamento, pois a resposta a incidentes exige visão técnica e organizacional integrada. A alternativa A está errada pois exclui os líderes empresariais, que são parte essencial do planejamento. A alternativa C está errada pois o planejamento antecipado é necessário independentemente da existência de uma CSIRT — a equipe responde aos incidentes, mas o plano precisa existir antes deles. A alternativa D está errada pois isola os líderes empresariais e ignora a necessidade do conhecimento técnico no processo de planejamento."
  },
  {
    "t": "Tommy é o líder da equipe CSIRT de sua organização e está respondendo a um incidente de segurança recém-descoberto. Qual documento tem maior probabilidade de conter instruções passo a passo que ele poderia seguir nas primeiras horas do esforço de resposta?",
    "opts": [
      "A) Política",
      "B) Linha de base",
      "C) Playbook",
      "D) Livro didático"
    ],
    "ans": 2,
    "exp": "Os playbooks de resposta a incidentes contêm instruções detalhadas, passo a passo, que orientam a resposta inicial a um incidente de cibersegurança. As organizações normalmente têm playbooks preparados para tipos de incidentes de alta gravidade e de ocorrência frequente."
  },
  {
    "t": "Hank está respondendo a um evento de segurança em que a CEO de sua empresa teve seu laptop roubado. O laptop estava criptografado, mas continha informações sensíveis sobre os funcionários da empresa. Como Hank deve classificar o impacto desse evento de segurança sobre as informações?",
    "opts": [
      "A) Nenhum",
      "B) Violação de privacidade",
      "C) Violação de informações proprietárias",
      "D) Perda de integridade"
    ],
    "ans": 0,
    "exp": "O evento descrito nesse cenário não se qualificaria como um incidente de segurança com impacto mensurável sobre as informações. Embora o laptop contivesse informações que poderiam causar uma violação de privacidade, essa violação foi evitada pelo uso de criptografia para proteger o conteúdo do laptop."
  },
  {
    "t": "Durante a resposta a um incidente de ransomware, a CSIRT de uma empresa concluiu a fase de contenção e iniciou a recuperação dos sistemas. Pouco depois, novos indicadores de comprometimento foram identificados, sugerindo que a ameaça ainda estava ativa. Qual atitude está mais alinhada ao processo de resposta a incidentes preconizado pelo NIST?",
    "opts": [
      "A) Encerrar o incidente atual e abrir um novo registro, pois os novos indicadores caracterizam um incidente diferente e independente.",
      "B) Escalar imediatamente para a liderança empresarial, pois a recorrência indica que a CSIRT não possui capacidade técnica suficiente para tratar o caso.",
      "C) Retornar à fase de Detecção & Análise para investigar os novos indicadores antes de prosseguir com a recuperação, pois loops entre fases são parte normal do processo.",
      "D) Concluir a recuperação conforme planejado e verificar os novos indicadores somente na fase de Atividade Pós-Incidente, para não interromper o fluxo de resposta."
    ],
    "ans": 2,
    "exp": "O processo de contenção frequentemente inclui vários loops de retorno à fase de Detecção & Análise para verificar se o incidente foi resolvido com sucesso, e esses loops são uma parte normal e esperada do processo. A alternativa A está errada pois criar um novo registro seria inadequado — trata-se da continuidade do mesmo incidente. A alternativa B está errada pois a necessidade de loops não indica deficiência da equipe; pelo contrário, retornar às fases anteriores é o comportamento correto e previsto. A alternativa D está errada pois ignorar novos indicadores ativos para não \"interromper o fluxo\" contraria diretamente a lógica cíclica do modelo NIST, que prioriza a confirmação da resolução antes de avançar."
  },
  {
    "t": "Um gerente de TI argumenta que o processo de resposta a incidentes da organização deve seguir uma sequência rígida e linear — Preparação, Detecção & Análise, Contenção/Erradicação/Recuperação e Atividade Pós-Incidente — sem possibilidade de retorno a etapas anteriores, pois isso geraria retrabalho e confusão na equipe. Com base no modelo do NIST, qual afirmativa melhor avalia essa postura?",
    "opts": [
      "A) O gerente está correto; em incidentes bem gerenciados, o fluxo sempre deve ser linear para garantir eficiência e clareza nas responsabilidades da CSIRT.",
      "B) O gerente está parcialmente correto; loops são permitidos apenas entre as fases de Contenção e Erradicação, nunca envolvendo a fase de Detecção & Análise.",
      "C) O gerente está correto apenas para incidentes de baixa complexidade; em incidentes críticos, uma abordagem linear ainda é recomendada para evitar que a crise se prolongue.",
      "D) O gerente está incorreto; o modelo do NIST prevê loops de retorno a fases anteriores como parte normal do processo, pois apenas os incidentes mais simples seguem uma sequência direta do início ao fim."
    ],
    "ans": 3,
    "exp": "O processo de resposta a incidentes não é uma simples progressão linear, incluindo loops que permitem retornar a fases anteriores conforme necessário. Somente nos incidentes mais simples o fluxo seria direto. A alternativa A está errada pois contradiz diretamente o modelo do NIST, que reconhece a natureza cíclica como algo esperado, não como falha de gestão. A alternativa B está errada pois o processo de contenção frequentemente inclui loops de retorno à fase de Detecção & Análise, contradizendo a restrição proposta. A alternativa C está errada pois a criticidade do incidente não justifica uma abordagem linear — pelo contrário, quanto mais complexo o incidente, mais loops são esperados."
  },
  {
    "t": "Após encerrar a investigação de um incidente de segurança, o líder da CSIRT decide que a equipe pode descansar dos esforços de planejamento até que um novo incidente ocorra. Um analista sênior discorda dessa decisão. Com base nas boas práticas descritas pelo NIST, qual argumento o analista deve usar?",
    "opts": [
      "A) A fase de preparação é contínua; sempre que a organização não estiver respondendo ativamente a um incidente, ela deve estar planejando o próximo, pois o processo não é do tipo \"uma vez e pronto\".",
      "B) O descanso é justificado, pois a fase de preparação só é necessária quando há indícios concretos de um novo incidente se aproximando.",
      "C) O planejamento pós-incidente é responsabilidade exclusiva dos gestores, não da CSIRT, portanto a equipe técnica pode de fato pausar suas atividades de preparação.",
      "D) A preparação só precisa ser retomada se o incidente anterior tiver revelado falhas graves nos procedimentos existentes da equipe."
    ],
    "ans": 0,
    "exp": "A fase de preparação não é um processo \"uma vez e pronto\" e existe um loop contínuo da atividade pós-incidente de volta à preparação — a organização deve planejar o próximo incidente sempre que não estiver respondendo a um. A alternativa B está errada pois aguardar indícios de um novo incidente para retomar o planejamento contradiz diretamente essa lógica cíclica. A alternativa C está errada pois a preparação não é responsabilidade exclusiva dos gestores; a CSIRT também participa dela de forma contínua. A alternativa D está errada pois condiciona a retomada do planejamento à existência de falhas identificadas, o que não é o critério correto — o planejamento deve ser contínuo independentemente disso."
  },
  {
    "t": "Durante uma auditoria interna, o auditor questiona se a CSIRT de uma organização está devidamente preparada para responder a incidentes. Ao revisar o kit de ferramentas da equipe, ele constata a ausência de pen drives bootáveis com ferramentas forenses confiáveis e de software de captura de pacotes. Como essa situação deve ser avaliada?",
    "opts": [
      "A) A ausência desses itens é aceitável, pois o NIST recomenda apenas estações de trabalho forenses e dispositivos de backup como itens obrigatórios no kit de resposta.",
      "B) A situação é preocupante apenas se a organização já tiver sofrido incidentes que exigiram análise forense, pois esses recursos são necessários somente em casos de alta complexidade.",
      "C) A situação representa uma lacuna na preparação da CSIRT, pois o NIST recomenda que o kit de ferramentas inclua, no mínimo, esses e outros itens listados para que a equipe possa conduzir investigações adequadamente.",
      "D) A ausência é irrelevante, pois ferramentas forenses e de captura de pacotes podem ser obtidas e instaladas no momento em que o incidente ocorrer, sem impacto na qualidade da resposta."
    ],
    "ans": 2,
    "exp": "Segundo o NIST, pen drives bootáveis com ferramentas forenses e software forense e de captura de pacotes estão entre os componentes que devem estar presentes, no mínimo, no kit de ferramentas de toda organização. A alternativa A está errada pois reduz equivocadamente os itens obrigatórios a apenas dois, ignorando a lista completa recomendada. A alternativa B está errada pois a necessidade dessas ferramentas não depende da complexidade ou do histórico de incidentes da organização. A alternativa D está errada pois improvisar a obtenção de ferramentas durante um incidente contraria o próprio propósito da fase de preparação, que existe justamente para garantir prontidão antes que o incidente ocorra."
  },
  {
    "t": "Um analista de segurança percebe que os logs de diferentes dispositivos da rede apresentam horários inconsistentes entre si, dificultando a reconstrução da linha do tempo de um possível incidente. Qual medida, recomendada pelo NIST, resolveria diretamente esse problema?",
    "opts": [
      "A) Implementar um SIEM para realizar a correlação automática de eventos de múltiplas fontes e normalizar os dados recebidos.",
      "B) Criar filtros predefinidos de inclusão e exclusão para reduzir o volume de logs analisados durante investigações.",
      "C) Sincronizar os relógios de servidores, estações de trabalho e dispositivos de rede por meio de um servidor NTP.",
      "D) Manter uma base de conhecimento organizacional com perfis de sistemas para auxiliar respondentes não familiarizados com o ambiente."
    ],
    "ans": 2,
    "exp": "A sincronização de relógios via NTP é feita especificamente para facilitar a correlação de entradas de log de diferentes sistemas, resolvendo diretamente o problema descrito. A alternativa A está errada pois o SIEM realiza correlação de eventos, mas não resolve a raiz do problema — horários dessincronizados continuariam inconsistentes mesmo após a correlação. A alternativa B está errada pois filtros reduzem volume de informação, não corrigem inconsistências de horário. A alternativa D está errada pois a base de conhecimento auxilia respondentes com contexto sobre sistemas, não com sincronização temporal."
  },
  {
    "t": "Durante a triagem de um possível incidente, um respondente depara-se com uma mensagem de erro desconhecida em um servidor crítico e não encontra referência a ela na base de conhecimento interna. Qual ação está alinhada às recomendações do NIST para essa situação?",
    "opts": [
      "A) Aguardar o término da análise interna antes de consultar qualquer fonte externa, para evitar exposição de informações sensíveis da organização.",
      "B) Buscar assistência de recursos externos, o que pode incluir desde uma pesquisa simples sobre a mensagem de erro até coordenação com outras equipes de resposta.",
      "C) Escalar imediatamente para a liderança da organização, pois mensagens de erro desconhecidas sempre indicam um incidente de segurança confirmado.",
      "D) Capturar o tráfego de rede imediatamente, pois mensagens de erro desconhecidas são o principal indicador de atividade maliciosa em andamento."
    ],
    "ans": 1,
    "exp": "É recomendado buscar assistência de recursos externos, o que pode ir de uma pesquisa simples por uma mensagem de erro desconhecida até a coordenação completa com outras equipes. A alternativa A está errada pois não há restrição ao uso de fontes externas — pelo contrário, seu uso é encorajado. A alternativa C está errada pois uma mensagem de erro desconhecida é um indicador a ser investigado, não uma confirmação automática de incidente. A alternativa D está errada pois a captura de tráfego é recomendada quando um incidente é suspeito, não especificamente diante de mensagens de erro desconhecidas."
  },
  {
    "t": "Qual dos seguintes elementos normalmente não é encontrado em uma política de resposta a incidentes?",
    "opts": [
      "A) Métricas de desempenho do CSIRT",
      "B) Definição de incidentes de cibersegurança",
      "C) Definição de funções, responsabilidades e níveis de autoridade",
      "D) Procedimentos para reconstruir sistemas"
    ],
    "ans": 3,
    "exp": "Os procedimentos para reconstruir sistemas são altamente técnicos e normalmente seriam incluídos em um playbook ou documento de procedimentos, em vez de uma política de resposta a incidentes."
  },
  {
    "t": "Um ataque no caminho (on-path) é um exemplo de qual tipo de vetor de ameaça?",
    "opts": [
      "A) Desgaste",
      "B) Personificação",
      "C) Web",
      "D) E-mail"
    ],
    "ans": 1,
    "exp": "Um ataque de personificação envolve a substituição de algo benigno por algo malicioso — por exemplo, falsificação de identidade, ataques no caminho (man-in-the-middle), pontos de acesso sem fio não autorizados e ataques de injeção de SQL envolvem personificação."
  },
  {
    "t": "A equipe de segurança de uma organização recebe simultaneamente quatro notificações: (1) um alerta do sistema de detecção de intrusões; (2) um funcionário relata comportamento estranho em seu computador; (3) um boletim público sobre uma nova vulnerabilidade explorada em ambiente real; (4) entradas suspeitas nos logs do servidor web. Segundo o NIST 800-61, a qual categoria pertence o relato do funcionário?",
    "opts": [
      "A) Alertas, pois o relato humano funciona como um mecanismo de detecção equivalente a sistemas automatizados.",
      "B) Logs, pois o comportamento relatado pode ser rastreado e registrado nos sistemas de monitoramento da organização.",
      "C) Informações publicamente disponíveis, pois o relato de um usuário interno é considerado uma fonte aberta de informação.",
      "D) Pessoas, pois o NIST categoriza relatos de indivíduos de dentro ou fora da organização como uma categoria própria de indicadores."
    ],
    "ans": 3,
    "exp": "O NIST 800-61 define Pessoas como uma categoria específica de indicadores — indivíduos de dentro ou fora da organização que relatam atividades suspeitas. A alternativa A está errada pois Alertas são originados de sistemas automatizados como IDS, SIEM e antivírus, não de relatos humanos. A alternativa B está errada pois Logs são gerados automaticamente por sistemas, serviços e dispositivos, não por comunicação humana. A alternativa C está errada pois informações publicamente disponíveis referem-se a vulnerabilidades e exploits divulgados externamente, não a relatos internos."
  },
  {
    "t": "Após um incidente de segurança, a equipe de resposta relata dificuldade em analisar os dados coletados devido ao volume excessivo de informações irrelevantes misturadas aos dados relevantes. Qual prática recomendada pelo NIST, que deveria ter sido adotada antes do incidente, teria minimizado esse problema?",
    "opts": [
      "A) Criar filtros predefinidos de inclusão e exclusão durante a fase de preparação, para auxiliar no tratamento de investigações futuras.",
      "B) Sincronizar os relógios dos dispositivos de rede durante a fase de preparação para garantir consistência temporal nos logs coletados.",
      "C) Realizar perfil de redes e sistemas para medir características da atividade esperada e identificar anomalias com maior precisão.",
      "D) Manter uma base de conhecimento organizacional atualizada com perfis de sistemas e padrões de uso para consulta durante investigações."
    ],
    "ans": 0,
    "exp": "Filtros predefinidos devem ser criados durante a fase de preparação justamente para auxiliar esforços futuros, pois investigações geram volumes massivos de informação impossíveis de interpretar sem filtros de inclusão e exclusão. A alternativa B está errada pois a sincronização de relógios resolve problemas de consistência temporal, não de volume ou relevância das informações. A alternativa C está errada pois o perfil de redes melhora a identificação de anomalias, mas não resolve o problema de excesso de dados durante a investigação. A alternativa D está errada pois a base de conhecimento auxilia respondentes com contexto sobre sistemas, não com filtragem do volume de dados coletados."
  },
  {
    "t": "Ao responder a um incidente de comprometimento de servidor, a CSIRT confirmou o vetor de ataque e identificou os sistemas afetados. O líder da equipe decide que é hora de agir ativamente. Qual deve ser a primeira ação tomada nessa transição para a fase de contenção?",
    "opts": [
      "A) Erradicar imediatamente os artefatos maliciosos dos sistemas afetados para interromper o ataque o mais rápido possível.",
      "B) Identificar os atacantes e os sistemas utilizados no ataque antes de qualquer outra medida, para embasar as ações seguintes.",
      "C) Selecionar uma estratégia de contenção adequada às circunstâncias específicas do incidente.",
      "D) Reunir evidências adicionais para apoiar possíveis ações legais antes de qualquer intervenção nos sistemas comprometidos."
    ],
    "ans": 2,
    "exp": "Os objetivos da fase seguem uma ordem, e o primeiro é selecionar a estratégia de contenção adequada ao incidente. Erradicar (A) e identificar atacantes (B) vêm depois. Reunir evidências (D) também é posterior e não precede a contenção."
  },
  {
    "t": "Durante um incidente de segurança, um membro da CSIRT sugere que a equipe deve manter postura exclusivamente passiva — apenas coletando e analisando informações — até que o incidente seja completamente compreendido, sem tomar nenhuma medida ativa. Como essa abordagem se alinha ao processo de resposta a incidentes?",
    "opts": [
      "A) A sugestão está correta; a CSIRT deve permanecer em modo passivo durante todo o incidente para não alertar o atacante sobre a detecção.",
      "B) A sugestão está parcialmente correta; medidas ativas só são permitidas após a identificação completa dos atacantes e dos sistemas utilizados no ataque.",
      "C) A sugestão está incorreta; após a conclusão da avaliação inicial, a equipe deve transitar para medidas ativas de contenção, erradicação e recuperação.",
      "D) A sugestão está correta apenas para incidentes em andamento; para incidentes já encerrados, medidas ativas são dispensáveis."
    ],
    "ans": 2,
    "exp": "Após concluir a avaliação passiva, a equipe passa a tomar medidas ativas. Permanecer em modo passivo (A, D) contradiz isso. Aguardar identificação completa dos atacantes (B) não é pré-requisito — identificá-los é um objetivo da própria fase ativa."
  },
  {
    "t": "Após conter, erradicar e restaurar sistemas de um ataque de ransomware, o líder da CSIRT declara o incidente encerrado e libera a equipe. Um analista sênior questiona a decisão, argumentando que ainda há etapas obrigatórias a cumprir. Qual argumento melhor justifica a posição do analista?",
    "opts": [
      "A) A equipe ainda precisa retornar à fase de detecção e análise para confirmar que nenhum sistema adicional foi comprometido durante a contenção.",
      "B) A fase de atividade pós-incidente ainda precisa ser executada, incluindo procedimentos forenses, análise de causa raiz, revisão de lições aprendidas e atendimento aos requisitos de retenção de evidências.",
      "C) O incidente só pode ser encerrado após a identificação completa e responsabilização legal dos atacantes envolvidos.",
      "D) A equipe deve aguardar a aprovação da liderança executiva antes de declarar qualquer incidente formalmente encerrado."
    ],
    "ans": 1,
    "exp": "Incidentes não terminam após a remoção dos atacantes ou a recuperação das operações. A CSIRT ainda deve conduzir procedimentos forenses, análise de causa raiz, revisão de lições aprendidas e atender requisitos de retenção de evidências. As alternativas A, C e D descrevem ações que não são requisitos para o encerramento do incidente."
  },
  {
    "t": "A CSIRT de uma organização concluiu a resposta a um incidente de invasão. Durante a revisão pós-incidente, identificou-se que o atacante explorou uma vulnerabilidade de autenticação já conhecida, mas não corrigida. Qual atividade pós-incidente é mais crítica para evitar que esse mesmo tipo de ataque se repita?",
    "opts": [
      "A) Realizar uma análise forense detalhada para reconstruir com precisão a linha do tempo completa das ações do atacante no ambiente.",
      "B) Conduzir a revisão de lições aprendidas com todos os envolvidos para documentar o que poderia ter sido feito de forma diferente durante a resposta.",
      "C) Realizar a análise de causa raiz para compreender como o atacante violou os controles de segurança e corrigir as deficiências identificadas.",
      "D) Garantir o cumprimento dos requisitos de retenção de evidências para preservar os dados do incidente para possíveis ações legais futuras."
    ],
    "ans": 2,
    "exp": "A análise de causa raiz é fundamental para implementar uma recuperação segura que corrija as deficiências que levaram ao ataque, evitando reincidência. A alternativa A reconstrói o que ocorreu, mas não endereça a correção. A B melhora processos futuros de resposta, mas não corrige a vulnerabilidade explorada. A D preserva evidências, sem relação com prevenção do ataque."
  },
  {
    "t": "Qual das alternativas a seguir é um exemplo de ataque de desgaste?",
    "opts": [
      "A) Injeção de SQL",
      "B) Roubo de um laptop",
      "C) Um usuário instala um software de compartilhamento de arquivos",
      "D) Ataque de força bruta contra senhas"
    ],
    "ans": 3,
    "exp": "Um ataque de desgaste emprega métodos de força bruta para comprometer, degradar ou destruir sistemas, redes ou serviços — por exemplo, um ataque DDoS destinado a prejudicar ou negar o acesso a um serviço ou aplicação, ou um ataque de força bruta contra um mecanismo de autenticação."
  },
  {
    "t": "Quem é o melhor facilitador para uma sessão de lições aprendidas após um incidente?",
    "opts": [
      "A) CEO",
      "B) Líder do CSIRT",
      "C) Facilitador independente",
      "D) Responsável pela resposta inicial"
    ],
    "ans": 2,
    "exp": "As sessões de lições aprendidas são mais eficazes quando conduzidas por uma parte independente que não esteve envolvida no esforço de resposta ao incidente."
  },
  {
    "t": "Uma organização decide conduzir sua revisão de lições aprendidas de forma assíncrona, enviando um questionário por e-mail para que cada membro da equipe responda individualmente no seu próprio tempo. O gerente de segurança aprova a abordagem por considerá-la mais prática. Como essa decisão deve ser avaliada?",
    "opts": [
      "A) A abordagem é adequada, pois permite que cada respondente reflita com calma sobre o incidente sem a pressão de uma reunião formal.",
      "B) A abordagem é adequada apenas se o questionário incluir todas as perguntas recomendadas pelo NIST para revisões de lições aprendidas.",
      "C) A abordagem é inadequada, pois a revisão deve ser conduzida exclusivamente por membros que participaram ativamente da resposta ao incidente, sem facilitadores externos.",
      "D) A abordagem é inadequada, pois a revisão assíncrona não favorece o debate dinâmico entre os participantes, que frequentemente gera os insights mais valiosos."
    ],
    "ans": 3,
    "exp": "A abordagem assíncrona não favorece o debate dinâmico que frequentemente gera os insights mais valiosos; por isso, o recomendado é uma reunião com todos os participantes presentes. A A inverte essa lógica. A B condiciona a aceitação a um critério que não resolve o problema, pois nenhum questionário substitui o debate entre os participantes. A C está errada, pois o recomendado é um facilitador independente, não envolvido na resposta."
  },
  {
    "t": "Ao planejar a revisão de lições aprendidas de um incidente grave, o diretor de TI sugere que o próprio líder da CSIRT, que coordenou toda a resposta, facilite a reunião por ser o membro com maior conhecimento técnico do caso. Por que essa escolha é problemática?",
    "opts": [
      "A) O líder da CSIRT não possui autoridade suficiente para conduzir uma reunião que envolve membros da gestão e de diferentes áreas da organização.",
      "B) Um facilitador que esteve envolvido na resposta não é percebido como observador objetivo, o que pode fazer os participantes sentirem que ele está promovendo uma agenda oculta, prejudicando a discussão.",
      "C) O líder da CSIRT deve estar focado exclusivamente em documentar as evidências forenses do incidente durante a fase pós-incidente, não em facilitar reuniões.",
      "D) A facilitação por um membro interno é inadequada em qualquer circunstância; o facilitador deve ser sempre externo à organização."
    ],
    "ans": 1,
    "exp": "O recomendado é um facilitador não envolvido na resposta e percebido como observador objetivo, justamente para que os participantes não sintam que ele promove uma agenda oculta. A A trata de autoridade hierárquica, que não é o problema. A C é uma atribuição inventada, que não faz parte do papel do líder. A D exagera: o que importa é a independência em relação à resposta, não necessariamente ser externo à organização."
  },
  {
    "t": "Após concluir a resposta a um incidente de vazamento de dados, o líder da CSIRT decide descartar parte das evidências coletadas para liberar espaço nos sistemas de armazenamento, argumentando que o incidente já foi resolvido. Um analista questiona a decisão. Qual condição deve ser verificada antes de qualquer descarte de evidências?",
    "opts": [
      "A) Verificar se a equipe já conduziu a revisão de lições aprendidas, pois as evidências podem ser necessárias para embasar as melhorias identificadas.",
      "B) Confirmar se o incidente pode resultar em litígio civil ou processo criminal; em caso afirmativo, advogados devem ser consultados antes de qualquer descarte.",
      "C) Aguardar o período mínimo de dois anos de retenção antes de descartar qualquer evidência, independentemente das circunstâncias do incidente.",
      "D) Verificar se a CSIRT já foi formalmente desativada, pois o descarte só é permitido após o encerramento oficial da fase pós-incidente."
    ],
    "ans": 1,
    "exp": "Se houver possibilidade de litígio civil ou processo criminal, a equipe deve consultar advogados antes de descartar evidências. A A não é uma condição para o descarte. A C distorce essa orientação: os dois anos são uma prática comum para evidências sem outros requisitos, não uma regra universal. A D cria uma condição inexistente, pois a desativação da CSIRT não é o que determina se as evidências podem ser descartadas."
  },
  {
    "t": "Ao encerrar a fase de atividade pós-incidente, o gerente da CSIRT questiona qual deve ser o próximo passo formal no ciclo de tratamento de incidentes. Qual resposta está correta?",
    "opts": [
      "A) A CSIRT é desativada e o ciclo retorna às fases de preparação, detecção e análise.",
      "B) O ciclo encerra-se completamente até que a liderança da organização autorize formalmente o início de um novo ciclo de resposta.",
      "C) A CSIRT permanece ativa em estado de prontidão reduzida, monitorando passivamente o ambiente até que um novo incidente seja detectado.",
      "D) A CSIRT inicia imediatamente uma nova fase de contenção para verificar se os sistemas recuperados permanecem livres de comprometimento."
    ],
    "ans": 0,
    "exp": "Ao final da atividade pós-incidente, a CSIRT é desativada e o ciclo retorna às fases de preparação, detecção e análise. A C sugere um estado de prontidão reduzida que não faz parte do ciclo. A B introduz uma autorização da liderança que o ciclo não exige. A D descreve uma ação da fase de contenção, não do encerramento pós-incidente."
  },
  {
    "t": "Um analista está revisando a política de resposta a incidentes da organização e percebe que ela contém seções detalhando as ferramentas de SIEM utilizadas, os procedimentos passo a passo para coleta de evidências e as tecnologias de endpoint empregadas pela equipe. O gerente de segurança sinaliza que isso é um problema. Por quê?",
    "opts": [
      "A) Essas informações são confidenciais e não deveriam constar em nenhum documento formal da organização, nem mesmo em procedimentos separados.",
      "B) A política deveria ser aprovada pelo diretor executivo antes de incluir qualquer nível de detalhe técnico, o que ainda não ocorreu.",
      "C) Tecnologias específicas, procedimentos de resposta e técnicas de coleta de evidências podem mudar com frequência e não devem constar na política, mas sim em documentos de procedimento separados.",
      "D) Esses detalhes deveriam constar apenas no plano de continuidade de negócios, e não na política de resposta a incidentes."
    ],
    "ans": 2,
    "exp": "A política não é o lugar para especificar tecnologias, procedimentos ou técnicas de coleta de evidências, pois esses detalhes mudam com frequência e devem estar em documentos separados. A A está errada pois o problema não é confidencialidade, mas sim a volatilidade dessas informações. A B trata da aprovação, que é um requisito da política como um todo, não especificamente desses detalhes. A D está errada, pois o plano de continuidade de negócios não é o lugar desses detalhes; eles ficam em documentos de procedimento próprios."
  },
  {
    "t": "Durante a elaboração da política de resposta a incidentes, o time de segurança debate quem deve aprová-la formalmente. Um membro sugere que a aprovação pelo gerente de TI é suficiente, por ser ele o responsável direto pela área. Qual argumento refuta melhor essa posição?",
    "opts": [
      "A) A política deve ser aprovada pelo conselho jurídico da organização, pois envolve requisitos de retenção de evidências com implicações legais.",
      "B) A política deve ser aprovada no mais alto nível possível da organização, de preferência pelo diretor executivo, para que tenha a autoridade necessária.",
      "C) A aprovação deve ser conjunta entre o gerente de TI e o líder da CSIRT, pois ambos são os principais responsáveis pela execução da política.",
      "D) A política não requer aprovação formal de liderança, desde que contenha todos os elementos essenciais recomendados pelo NIST."
    ],
    "ans": 1,
    "exp": "A política deve ser aprovada no mais alto nível possível, de preferência pelo diretor executivo, para fornecer a autoridade necessária ao programa. A A atribui a aprovação ao jurídico, o que não dá à política a autoridade do nível mais alto da organização. A C limita a aprovação a dois cargos operacionais, contrariando a recomendação de aprovação no nível mais alto. A D contradiz diretamente essa recomendação ao dispensar a aprovação formal da liderança."
  },
  {
    "t": "Um incidente de segurança causa a indisponibilidade prolongada de sistemas críticos de pagamento de uma organização. A equipe de TI aciona tanto o plano de resposta a incidentes quanto o plano de recuperação de desastres simultaneamente, e os times começam a tomar decisões conflitantes. Qual prática teria evitado esse problema?",
    "opts": [
      "A) Unificar os programas de resposta a incidentes e recuperação de desastres em um único plano integrado, eliminando sobreposições e conflitos entre as equipes.",
      "B) Definir claramente na política de resposta a incidentes quais tecnologias e procedimentos devem ser utilizados em cada tipo de incidente.",
      "C) Coordenar cuidadosamente o trabalho das equipes de resposta a incidentes com as equipes de BC/DR, dada a natureza estreitamente relacionada desses programas.",
      "D) Garantir que o plano de continuidade de negócios seja acionado antes do plano de recuperação de desastres, para preservar as funções essenciais antes de iniciar a recuperação."
    ],
    "ans": 2,
    "exp": "É recomendado que as equipes de resposta a incidentes coordenem cuidadosamente seu trabalho com as equipes de BC/DR, justamente pela natureza estreitamente relacionada desses programas. A A propõe unificar os planos, o que não é o recomendado: os programas são distintos e devem ser coordenados, não fundidos. A B trata do conteúdo da política, não da coordenação entre equipes. A D estabelece uma ordem fixa de acionamento, que não resolve a falta de coordenação entre as equipes."
  },
  {
    "t": "Ao auditar a política de resposta a incidentes de uma organização, o auditor constata que o documento não contém nenhuma definição de incidentes de cibersegurança nem termos relacionados, e também não possui um esquema de priorização de incidentes. Com base nas recomendações do NIST, como essa situação deve ser avaliada?",
    "opts": [
      "A) A política apresenta lacunas em elementos essenciais recomendados pelo NIST, o que compromete a base do programa de resposta a incidentes.",
      "B) A ausência é aceitável, pois definições e critérios de priorização são detalhes operacionais que devem constar apenas nos procedimentos da CSIRT, não na política.",
      "C) A ausência de definições é problemática, mas a falta de um esquema de priorização é aceitável, pois a gravidade dos incidentes é avaliada caso a caso pela CSIRT.",
      "D) A situação é crítica apenas se a organização já tiver sofrido incidentes; para organizações sem histórico de ataques, esses elementos são opcionais."
    ],
    "ans": 0,
    "exp": "O NIST recomenda que a política inclua tanto a definição de incidentes e termos relacionados quanto o esquema de priorização ou classificação de gravidade como elementos essenciais. A B está errada pois esses itens constam na lista de elementos da política, não dos procedimentos. A C aceita parcialmente a lacuna, embora o esquema de priorização também seja um elemento essencial. A D condiciona a obrigatoriedade ao histórico de incidentes, critério que não se aplica, pois esses elementos são essenciais para qualquer organização."
  },
  {
    "t": "Qual das alternativas a seguir não é um objetivo da fase de contenção, erradicação e recuperação da resposta a incidentes?",
    "opts": [
      "A) Detectar um incidente em andamento.",
      "B) Implementar uma estratégia de contenção.",
      "C) Identificar os atacantes.",
      "D) Erradicar os efeitos do incidente."
    ],
    "ans": 0,
    "exp": "A detecção de um possível incidente ocorre durante a fase de detecção e análise da resposta a incidentes. Todas as outras atividades listadas são objetivos da fase de contenção, erradicação e recuperação."
  },
  {
    "t": "Renee está respondendo a um incidente de segurança que resultou na indisponibilidade de um site crítico para as operações de sua empresa. Ela não tem certeza de quanto tempo e esforço serão necessários para recuperar o site. Como Renee deve classificar o esforço de recuperação?",
    "opts": [
      "A) Regular",
      "B) Suplementado",
      "C) Estendido",
      "D) Não recuperável"
    ],
    "ans": 2,
    "exp": "O esforço de recuperação estendido ocorre quando o tempo necessário para a recuperação é imprevisível. Nesses casos, normalmente são necessários recursos adicionais e ajuda externa."
  },
  {
    "t": "Uma CSIRT de uma instituição financeira está estruturando sua biblioteca de playbooks. O gerente de segurança sugere criar um único playbook genérico para cobrir todos os tipos de incidentes, argumentando que isso simplifica o treinamento da equipe. Qual afirmativa melhor avalia essa abordagem?",
    "opts": [
      "A) A abordagem é adequada, desde que o playbook genérico inclua uma seção específica para incidentes de alta gravidade, cobrindo assim as situações mais críticas.",
      "B) A abordagem é adequada para incidentes simples, mas playbooks específicos são necessários apenas quando há obrigação regulatória para determinadas categorias de incidentes.",
      "C) A abordagem é inadequada, pois as organizações devem desenvolver playbooks específicos para diferentes tipos de incidentes, tanto os de alta gravidade quanto os mais frequentes.",
      "D) A abordagem é adequada, pois playbooks genéricos representam melhor a sabedoria coletiva da equipe ao não restringir as ações a um tipo específico de incidente."
    ],
    "ans": 2,
    "exp": "As organizações desenvolvem playbooks que descrevem procedimentos específicos para tipos específicos de incidentes, cobrindo tanto os de alta gravidade quanto os mais frequentes. Um único playbook genérico contradiz essa abordagem. A A e a D tentam validar a ideia do playbook único, que não atende às particularidades de cada tipo de incidente. A B condiciona a necessidade de playbooks específicos a obrigações regulatórias, quando o critério é o tipo de incidente."
  },
  {
    "t": "Durante um incidente de desfiguração de servidor web, um analista da CSIRT segue rigorosamente cada etapa do playbook correspondente, mesmo percebendo que algumas ações não fazem sentido para as características específicas daquele ataque. Ao final, a resposta se mostrou ineficaz. Qual princípio o analista deixou de aplicar?",
    "opts": [
      "A) O analista deveria ter consultado a sabedoria coletiva registrada nos procedimentos antes de iniciar qualquer ação, em vez de depender exclusivamente do playbook.",
      "B) O analista deveria ter escalado o incidente imediatamente ao perceber que o playbook não era adequado, aguardando orientação da liderança antes de prosseguir.",
      "C) O analista deveria ter substituído o playbook por um plano operacional improvisado desde o início, pois playbooks só são úteis nas primeiras horas do incidente.",
      "D) Os respondentes devem ter expertise profissional e autoridade para se desviar do playbook quando as circunstâncias exigirem uma abordagem diferente, em vez de segui-lo cegamente."
    ],
    "ans": 3,
    "exp": "Playbooks orientam a resposta, mas não substituem o julgamento profissional, e os respondentes devem ter autoridade para desviar deles quando necessário. A A confunde playbooks com procedimentos gerais de forma irrelevante ao cenário. A B inventa uma espera por orientação da liderança que não é necessária, já que os respondentes devem ter autoridade para se desviar do playbook. A C distorce o princípio ao sugerir abandono total do playbook desde o início."
  },
  {
    "t": "Durante a resposta a um incidente, o analista responsável identifica indícios de que um incidente pode estar ocorrendo, mas ainda não tem certeza. De acordo com o checklist do NIST, qual deve ser a ação imediata assim que o responsável acreditar que um incidente ocorreu, antes mesmo de sua confirmação total?",
    "opts": [
      "A) Iniciar a documentação da investigação e a coleta de evidências, sem aguardar confirmação absoluta.",
      "B) Reportar imediatamente o incidente ao pessoal interno e às organizações externas apropriadas para agilizar a resposta.",
      "C) Priorizar o tratamento do incidente com base no impacto funcional e informacional estimado.",
      "D) Conter o incidente para limitar danos antes de qualquer esforço de documentação ou coleta de evidências."
    ],
    "ans": 0,
    "exp": "O checklist indica, na etapa 1.4, que assim que o responsável acreditar que um incidente ocorreu, deve-se iniciar a documentação e a coleta de evidências — não é necessária confirmação total. A B (reportar) e a C (priorizar) são etapas posteriores (2 e 3). A D (contenção) pertence à fase seguinte, de Contenção, Erradicação e Recuperação."
  },
  {
    "t": "Ao erradicar um incidente de malware, a equipe da CSIRT descobre que hosts adicionais foram comprometidos por uma infraestrutura secundária do mesmo malware, não identificada anteriormente. Qual é a conduta correta segundo o checklist do NIST?",
    "opts": [
      "A) Conter imediatamente todos os hosts recém-descobertos e prosseguir diretamente para a erradicação, sem retornar a etapas anteriores.",
      "B) Encerrar o incidente atual, abrir um novo registro para os hosts recém-descobertos e reiniciar o processo completo do zero.",
      "C) Suspender temporariamente a erradicação e aguardar que todos os hosts afetados sejam identificados antes de tomar qualquer ação adicional.",
      "D) Repetir as etapas de Detecção e Análise (1.1 e 1.2) para identificar todos os hosts afetados, contê-los e então erradicá-los."
    ],
    "ans": 3,
    "exp": "A etapa 6.3 do checklist determina exatamente isso: ao descobrir hosts adicionais, deve-se repetir as etapas 1.1 e 1.2 para identificá-los, depois contê-los (5) e erradicá-los (6). A A pula a reanálise exigida. A B trata incorretamente como um novo incidente separado. A C paralisa a resposta sem respaldo no checklist."
  },
  {
    "t": "Após concluir a recuperação dos sistemas afetados por um incidente de intrusão, o líder da CSIRT declara a fase de recuperação encerrada e parte diretamente para a reunião de lições aprendidas. Um analista aponta que uma etapa obrigatória foi pulada. Qual etapa foi ignorada?",
    "opts": [
      "A) Implementar monitoramento adicional se necessário, confirmar que os sistemas estão funcionando normalmente e retorná-los ao estado operacional — etapas 7.1, 7.2 e 7.3 — antes de avançar.",
      "B) Adquirir, preservar e documentar as evidências coletadas durante a fase de contenção, etapa obrigatória antes de qualquer atividade pós-incidente.",
      "C) Criar um relatório de acompanhamento (etapa 8), que deve ser produzido antes da reunião de lições aprendidas.",
      "D) Reportar formalmente o encerramento do incidente ao pessoal interno e organizações externas, conforme previsto na etapa 3 do checklist."
    ],
    "ans": 2,
    "exp": "O checklist posiciona a criação do relatório de acompanhamento (etapa 8) antes da reunião de lições aprendidas (etapa 9), ambos na fase de Atividade Pós-Incidente. A A descreve etapas da recuperação (7.1–7.3) que, no cenário, já teriam sido concluídas. A B trata da etapa 4, ainda na fase de Contenção. A D refere-se à etapa 3, da fase de Detecção e Análise."
  },
  {
    "t": "Uma organização sofreu dois incidentes no mesmo mês: um menor, envolvendo a perda de um laptop sem dados sensíveis, e outro maior, envolvendo a exfiltração de dados de clientes. De acordo com o checklist do NIST, qual é a diferença no tratamento pós-incidente entre esses dois casos?",
    "opts": [
      "A) Apenas o incidente maior requer a criação de um relatório de acompanhamento; para incidentes menores, esse documento é opcional.",
      "B) Ambos os incidentes exigem tratamento idêntico na fase pós-incidente, sem distinção entre incidentes maiores e menores nas etapas do checklist.",
      "C) Apenas o incidente maior requer a fase completa de Contenção, Erradicação e Recuperação; incidentes menores podem avançar diretamente para a fase pós-incidente.",
      "D) A reunião de lições aprendidas é obrigatória para o incidente maior e opcional para o menor, enquanto o relatório de acompanhamento é exigido para ambos."
    ],
    "ans": 3,
    "exp": "O checklist indica que o relatório de acompanhamento (etapa 8) não tem restrição de obrigatoriedade, enquanto a reunião de lições aprendidas (etapa 9) é explicitamente descrita como obrigatória para incidentes maiores e opcional para os demais. A A inverte a lógica, atribuindo opcionalidade ao relatório em vez da reunião. A B ignora a distinção explícita do checklist. A C está errada, pois o checklist não dispensa as etapas de contenção, erradicação e recuperação para incidentes menores."
  },
  {
    "t": "Uma organização de grande porte está estruturando sua CSIRT e debate se todos os especialistas técnicos — engenheiros de sistemas, administradores de rede, administradores de banco de dados e especialistas em aplicações — devem ser membros fixos e sempre ativos da equipe. Qual modelo está mais alinhado às boas práticas de estruturação de uma CSIRT?",
    "opts": [
      "A) Todos os especialistas técnicos devem ser membros fixos e sempre ativos, pois a imprevisibilidade dos incidentes exige que toda a expertise esteja disponível a qualquer momento.",
      "B) Apenas os administradores de banco de dados e de rede devem ser membros fixos, pois são os perfis mais demandados na maioria dos tipos de incidentes.",
      "C) Algumas funções podem ser ocupadas por membros fixos sempre ativos, enquanto outras são acionadas conforme necessário, de acordo com o tipo de incidente.",
      "D) Em grandes organizações, todos os membros da CSIRT devem ser funcionários em tempo integral, sem possibilidade de acionar especialistas externos à equipe central durante um incidente."
    ],
    "ans": 2,
    "exp": "Em uma CSIRT, algumas funções são de membros fixos sempre ativos, enquanto outras são acionadas conforme a necessidade de cada incidente. A A generaliza indevidamente, ignorando essa distinção. A B inventa uma hierarquia de perfis sem fundamento. A D confunde dedicação em tempo integral com impossibilidade de acionar especialistas adicionais."
  },
  {
    "t": "Durante um incidente crítico, o líder da CSIRT percebe que precisa comunicar o impacto do ataque a stakeholders externos e coordenar com a mídia. Qual membro adicional da CSIRT deve ser acionado para essa finalidade?",
    "opts": [
      "A) Relações públicas e marketing, área responsável por coordenar as comunicações com a mídia e o público em geral.",
      "B) Assessoria jurídica, pois toda comunicação externa durante um incidente deve passar por validação legal antes de ser divulgada.",
      "C) O próprio líder da CSIRT, pois sua função de liaison com a gestão o torna o responsável natural por todas as comunicações externas.",
      "D) Recursos humanos, que possui experiência em comunicação institucional e pode coordenar mensagens para stakeholders internos e externos."
    ],
    "ans": 0,
    "exp": "A responsabilidade de coordenar comunicações com a mídia e o público em geral cabe especificamente a relações públicas e marketing. A B atribui essa função ao jurídico, cuja responsabilidade é conformidade legal, não comunicação externa. A C distorce o papel do líder, que serve de liaison com a gestão, não com a mídia. A D atribui ao RH uma função de comunicação externa que não é dele."
  },
  {
    "t": "Uma organização contratou um provedor externo de resposta a incidentes para lidar com ataques sofisticados. Durante a negociação do contrato, o gerente de segurança considera desnecessário manter qualquer plano de resposta interno, argumentando que o provedor cuidará de tudo. Qual risco essa postura representa?",
    "opts": [
      "A) A organização ficará impedida de se comunicar com autoridades policiais durante um incidente, pois essa responsabilidade passará integralmente ao provedor externo.",
      "B) A organização pode não estar preparada para responder às fases iniciais de um incidente antes que o provedor assuma o controle, dado que há um tempo de resposta até a chegada do suporte externo.",
      "C) A terceirização total é aceitável desde que o contrato especifique claramente quais tipos de incidentes serão cobertos pelo provedor e quais permanecerão sob responsabilidade interna.",
      "D) A organização perderá acesso à expertise interna de forma permanente, tornando-se dependente do provedor mesmo para incidentes simples que poderiam ser tratados internamente."
    ],
    "ans": 1,
    "exp": "A organização deve ter um plano para responder às fases iniciais de um incidente antes que o provedor assuma o controle, já que há um intervalo de tempo até esse momento. A A inventa uma restrição de comunicação que não existe. A C descreve uma prática razoável, mas não aborda o risco específico do gap de resposta inicial. A D exagera ao falar em perda permanente de expertise."
  },
  {
    "t": "Qual fase da Cyber Kill Chain inclui a criação de acesso persistente por backdoor para os atacantes?",
    "opts": [
      "A) Entrega",
      "B) Exploração",
      "C) Instalação",
      "D) C2"
    ],
    "ans": 2,
    "exp": "A fase de instalação da Cyber Kill Chain concentra-se em fornecer acesso persistente por backdoor aos atacantes. A entrega ocorre quando a ferramenta é colocada em ação, direta ou indiretamente, enquanto a exploração ocorre quando uma vulnerabilidade é explorada. O comando e controle (C2) usa comunicações bidirecionais para fornecer controle remoto contínuo."
  },
  {
    "t": "Robert está finalizando a minuta de uma proposta de política de resposta a incidentes para sua organização. Quem seria a pessoa mais adequada para assinar a política?",
    "opts": [
      "A) CEO",
      "B) Diretor de segurança",
      "C) CIO",
      "D) Líder do CSIRT"
    ],
    "ans": 0,
    "exp": "A política de resposta a incidentes fornece ao CSIRT a autoridade necessária para realizar seu trabalho. Portanto, ela deve ser aprovada pelo nível de autoridade mais alto possível dentro da organização, preferencialmente pelo CEO."
  },
  {
    "t": "Ao revisar a política de resposta a incidentes, um auditor constata que o documento não define quem está autorizado a ativar a CSIRT, nem especifica se ela cobre toda a organização ou apenas determinadas unidades de negócio. Como essa situação deve ser avaliada?",
    "opts": [
      "A) A ausência dessas definições é aceitável, pois decisões sobre ativação e escopo podem ser tomadas pelo líder da CSIRT no momento do incidente, com base no julgamento profissional.",
      "B) A situação é problemática apenas para organizações com múltiplas unidades de negócio; empresas menores não precisam definir escopo de atuação na política.",
      "C) A ausência é aceitável desde que os playbooks da organização cubram os diferentes tipos de incidentes, compensando a falta de definição de escopo na política.",
      "D) A política apresenta lacunas críticas, pois deve definir claramente o escopo de atuação da CSIRT, incluindo o que aciona sua ativação e quem está autorizado a ativá-la."
    ],
    "ans": 3,
    "exp": "A política deve definir claramente o escopo da CSIRT, incluindo o que aciona sua ativação e quem está autorizado a fazê-la. A A transfere decisões estruturais para o momento do incidente, contrariando a necessidade de definição prévia. A B restringe a necessidade de escopo a organizações grandes, sem fundamento. A C substitui indevidamente a política pelos playbooks para cobrir essa lacuna."
  },
  {
    "t": "O responsável pelo plano de resposta a incidentes de uma organização propõe realizar apenas exercícios de tabletop anuais como forma de testar o plano, argumentando que são suficientes por serem menos custosos e mais fáceis de organizar. Qual avaliação está mais correta?",
    "opts": [
      "A) Exercícios de tabletop são suficientes e representam a forma recomendada de teste, pois permitem que a equipe discuta cenários sem impactar as operações da organização.",
      "B) Os testes devem ser realizados regularmente e podem variar de exercícios simples de tabletop a simulações mais sofisticadas que envolvem o uso real das capacidades de resposta da organização.",
      "C) Exercícios de tabletop são inadequados para testar planos de resposta, pois não envolvem o uso real das capacidades de resposta e portanto não fornecem treinamento efetivo.",
      "D) A frequência anual é insuficiente apenas para organizações que já sofreram incidentes graves; para as demais, um teste por ano é adequado."
    ],
    "ans": 1,
    "exp": "O recomendado são simulações regulares, que podem variar de tabletops simples a exercícios mais sofisticados com uso real das capacidades de resposta — nenhum tipo é suficiente por si só. A A limita os testes apenas ao tabletop, ignorando as formas mais sofisticadas de teste. A C descarta indevidamente o tabletop, que é uma opção válida. A D condiciona a frequência ao histórico de incidentes, critério que não define a regularidade dos testes."
  },
  {
    "t": "Um analista investiga um incidente em que um funcionário autorizado instalou um aplicativo de armazenamento em nuvem pessoal no computador corporativo, resultando na sincronização automática de documentos confidenciais da empresa para sua conta pessoal. Segundo a classificação do NIST, qual vetor de ataque melhor descreve esse incidente?",
    "opts": [
      "A) Personificação, pois o funcionário utilizou credenciais legítimas para acessar sistemas corporativos de forma não autorizada.",
      "B) Mídia Externa/Removível, pois o aplicativo instalado funcionou como um vetor de exfiltração de dados similar a um dispositivo periférico.",
      "C) Uso Indevido, pois o incidente resultou da violação das políticas de uso aceitável da organização por um usuário autorizado.",
      "D) Desconhecido, pois não é possível classificar o vetor de ataque quando o incidente é causado por um usuário interno sem intenção maliciosa clara."
    ],
    "ans": 2,
    "exp": "O NIST define Uso Indevido como qualquer incidente resultante da violação das políticas de uso aceitável por um usuário autorizado e cita como exemplo justamente a instalação de software de compartilhamento de arquivos que leva à perda de dados sensíveis. A A está errada pois personificação envolve substituição de algo legítimo por malicioso. A B está errada pois mídia removível refere-se a dispositivos físicos. A D está errada pois a origem é conhecida — um usuário interno identificado."
  },
  {
    "t": "Durante a análise de um incidente, a equipe constata que o ataque explorou uma vulnerabilidade inexistente nas bases de dados dos scanners de segurança da organização, sem patches disponíveis e desconhecida publicamente. O grupo responsável pelo ataque é altamente especializado e possui financiamento de um estado-nação. Como esse cenário deve ser classificado?",
    "opts": [
      "A) Trata-se de um ataque do tipo APT explorando uma vulnerabilidade de dia zero, pois combina atacantes com recursos abundantes e financiamento estatal com o uso de vulnerabilidades desconhecidas pela comunidade de segurança.",
      "B) Trata-se de um ataque do tipo \"Outro\", pois embora a origem seja conhecida (estado-nação), as características técnicas não se enquadram nos vetores de ataque padrão do NIST.",
      "C) Trata-se de um ataque de \"Atrito\", pois grupos financiados por estados-nação tipicamente utilizam força bruta e recursos massivos para comprometer sistemas críticos.",
      "D) Trata-se de um ataque \"Desconhecido\", pois a ausência de patches e de registros nos scanners indica que a ameaça não pode ser formalmente categorizada até que seja identificada pela comunidade de segurança."
    ],
    "ans": 0,
    "exp": "APTs são atacantes altamente habilidosos, financiados por estados-nação ou crime organizado, conhecidos por explorar vulnerabilidades de dia zero — desconhecidas pela comunidade de segurança, ausentes dos scanners e sem patches disponíveis. O cenário corresponde exatamente a essa descrição. A B, C e D aplicam categorias incorretas, ignorando os elementos que definem precisamente uma APT com dia zero."
  },
  {
    "t": "A CSIRT de uma organização registra um incidente em que um atacante interceptou o tráfego entre um usuário e o servidor de autenticação corporativo, substituindo respostas legítimas do servidor por respostas falsas para capturar credenciais. Segundo a classificação do NIST, qual vetor de ataque descreve corretamente esse incidente?",
    "opts": [
      "A) E-mail, pois ataques de captura de credenciais frequentemente têm origem em campanhas de phishing enviadas por mensagens eletrônicas.",
      "B) Web, pois a interceptação de tráfego entre usuário e servidor ocorre na camada de aplicação e envolve comunicação via protocolos web.",
      "C) Atrito, pois o atacante utilizou tentativas repetidas de interceptação para comprometer o mecanismo de autenticação da organização.",
      "D) Personificação, pois o ataque envolveu a substituição de respostas legítimas do servidor por respostas falsas, caracterizando um ataque on-path (man-in-the-middle)."
    ],
    "ans": 3,
    "exp": "O NIST define Personificação como ataques que envolvem a substituição de algo legítimo por algo malicioso, e os ataques on-path (man-in-the-middle) são um exemplo explícito dessa categoria. A A está errada pois não há menção a e-mail no cenário. A B está errada pois ataques Web referem-se a ataques executados a partir de sites ou aplicações web, não a interceptação de tráfego. A C está errada pois Atrito refere-se a métodos de força bruta, não a interceptação."
  },
  {
    "t": "Ao revisar os critérios de classificação de incidentes, um analista questiona por que a CSIRT deve classificar incidentes tanto pelo tipo de ameaça quanto pela gravidade, utilizando um sistema padronizado. Qual justificativa está corretamente embasada?",
    "opts": [
      "A) A classificação padronizada é exigida exclusivamente para fins de conformidade regulatória, permitindo que a organização demonstre aderência a normas de segurança durante auditorias externas.",
      "B) A classificação auxilia outros profissionais a compreenderem a natureza e a gravidade do incidente e permite a comparação do incidente atual com incidentes passados e futuros.",
      "C) A classificação por tipo de ameaça é suficiente por si só; a classificação por gravidade é um complemento opcional que algumas organizações adotam conforme sua maturidade em segurança.",
      "D) O sistema de classificação é útil principalmente para incidentes de origem conhecida; para ataques classificados como \"Desconhecido\", a padronização não se aplica até que a origem seja identificada."
    ],
    "ans": 1,
    "exp": "A classificação auxilia outros profissionais a compreenderem a natureza e gravidade do incidente e permite comparação com incidentes passados e futuros. A A inventa uma exigência regulatória que não existe. A C está errada, pois a classificação deve considerar tanto o tipo de ameaça quanto a gravidade, sem que um dos critérios seja opcional. A D restringe indevidamente a utilidade da classificação."
  },
  {
    "t": "Um incidente de segurança comprometeu o sistema de e-mail corporativo, deixando-o totalmente indisponível para todos os usuários da organização. Os demais serviços críticos continuam operando normalmente. Utilizando as categorias de impacto funcional do NIST, como esse incidente deve ser classificado?",
    "opts": [
      "A) Nenhum, pois os demais serviços críticos permanecem operacionais e a indisponibilidade de um único serviço não afeta a capacidade geral da organização.",
      "B) Baixo, pois a organização ainda fornece todos os serviços críticos restantes a todos os usuários, tendo apenas perdido eficiência com a ausência do e-mail.",
      "C) Alto, pois a organização não é mais capaz de fornecer um serviço crítico — o e-mail — a nenhum usuário.",
      "D) Médio, pois a perda do serviço de e-mail afeta apenas um subconjunto dos usuários do sistema, mantendo os demais plenamente atendidos."
    ],
    "ans": 2,
    "exp": "A categoria Alto do NIST define que a organização não é mais capaz de fornecer um serviço crítico a nenhum usuário — exatamente o cenário, já que o e-mail está totalmente indisponível para todos. A D (Médio) está errada pois exige que apenas um subconjunto de usuários perca o serviço, o que contradiz a indisponibilidade total descrita. A B (Baixo) minimiza o impacto, ignorando a perda completa de um serviço crítico. A A (Nenhum) descarta indevidamente o e-mail, que o enunciado trata como serviço crítico totalmente fora do ar."
  },
  {
    "t": "Durante a resposta a um incidente de ransomware, a equipe de TI determina que os sistemas afetados podem ser restaurados a partir de backups dentro de um prazo previsível, utilizando exclusivamente a equipe e as ferramentas já disponíveis na organização, sem necessidade de qualquer recurso externo ou adicional. Segundo as categorias do NIST, como esse esforço de recuperação deve ser classificado?",
    "opts": [
      "A) Regular, pois o tempo de recuperação é previsível com os recursos já existentes na organização.",
      "B) Suplementado, pois a restauração a partir de backups sempre exige recursos adicionais para garantir a integridade dos dados recuperados.",
      "C) Estendido, pois qualquer incidente de ransomware envolve, por natureza, um tempo de recuperação imprevisível devido à complexidade do ataque.",
      "D) Não Recuperável, pois ransomware frequentemente envolve criptografia de dados, tornando a recuperação completa improvável sem pagamento do resgate."
    ],
    "ans": 0,
    "exp": "A categoria Regular é definida como tempo de recuperação previsível com os recursos existentes, exatamente o cenário descrito. A B está errada pois o cenário não menciona necessidade de recursos adicionais. A C generaliza incorretamente, atribuindo imprevisibilidade a todo incidente de ransomware, contrariando o cenário descrito como previsível. A D está errada pois a recuperação via backup é viável, e não foi mencionada nenhuma exfiltração ou perda definitiva de dados."
  },
  {
    "t": "Qual dos seguintes tipos de documento definiria a autoridade de um CSIRT que está respondendo a um incidente de segurança?",
    "opts": [
      "A) Política",
      "B) Procedimento",
      "C) Playbook",
      "D) Linha de base"
    ],
    "ans": 0,
    "exp": "A política de resposta a incidentes de uma organização deve conter uma descrição clara da autoridade atribuída ao CSIRT durante a resposta a um incidente de segurança ativo."
  },
  {
    "t": "Um ataque de scripting entre sites é um exemplo de qual tipo de vetor de ameaça?",
    "opts": [
      "A) Personificação",
      "B) E-mail",
      "C) Desgaste",
      "D) Web"
    ],
    "ans": 3,
    "exp": "Um ataque web é um ataque executado a partir de um site ou de uma aplicação baseada na web — por exemplo, um ataque de scripting entre sites usado para roubar credenciais ou redirecionar para um site que explora uma vulnerabilidade do navegador e instala malware."
  },
  {
    "t": "Uma organização sofre um ataque que resulta na exfiltração de um banco de dados contendo informações sensíveis de clientes, posteriormente divulgado publicamente em um fórum da dark web. A equipe de resposta conclui que não há como reverter a exposição dessas informações. Qual categoria de esforço de recuperação se aplica a esse cenário, segundo o NIST?",
    "opts": [
      "A) Estendido, pois a divulgação pública exige ajuda externa e recursos adicionais para conter os danos reputacionais e legais decorrentes do incidente.",
      "B) Suplementado, pois recursos adicionais, como assessoria jurídica e equipes de comunicação, serão necessários para lidar com as consequências da exposição.",
      "C) Não Recuperável, pois a recuperação do incidente não é possível quando dados sensíveis são exfiltrados e divulgados publicamente, devendo-se iniciar investigação.",
      "D) Regular, pois, uma vez identificado o vazamento, o tempo necessário para mitigar os efeitos é previsível com os recursos já disponíveis na equipe de segurança."
    ],
    "ans": 2,
    "exp": "O NIST usa exatamente esse exemplo para a categoria Não Recuperável: dados sensíveis exfiltrados e divulgados publicamente, situação que exige o início de uma investigação, não recuperação. A A e a B classificam erroneamente o cenário como recuperável com recursos adicionais, ignorando que a exposição já ocorreu de forma irreversível. A D está errada pois o cenário não é previsível nem reversível com recursos internos."
  },
  {
    "t": "Uma empresa privada de saúde sofre um incidente em que registros médicos protegidos por HIPAA são acessados sem autorização por um atacante externo. Utilizando as categorias de impacto na informação adaptadas para organizações privadas, como esse incidente deve ser classificado?",
    "opts": [
      "A) Violação de propriedade intelectual, pois registros médicos representam ativos de alto valor para a organização e devem ser protegidos como segredos comerciais.",
      "B) Violação de informação regulamentada, pois envolve informações de saúde protegidas (PHI) sob a HIPAA, uma obrigação de conformidade externa.",
      "C) Violação de informação confidencial, pois registros médicos são informações corporativas sensíveis que não se encaixam em categorias mais específicas.",
      "D) Perda de integridade, pois o acesso não autorizado a registros médicos compromete a confiabilidade desses dados perante auditorias regulatórias."
    ],
    "ans": 1,
    "exp": "A categoria violação de informação regulamentada inclui, como exemplo direto, as PHI protegidas pela HIPAA. A A está errada pois propriedade intelectual refere-se a planos de produtos e segredos comerciais, não a dados de saúde. A C está errada pois informação confidencial é a categoria residual para dados que não se encaixam em regulamentação ou propriedade intelectual — PHI já tem categoria específica. A D está errada pois perda de integridade exige alteração ou exclusão, não apenas acesso não autorizado."
  },
  {
    "t": "Um analista de segurança de uma agência governamental está classificando um incidente segundo as categorias de impacto na informação do NIST e percebe dificuldade em categorizar um caso em que um atacante alterou registros financeiros sensíveis sem exfiltrá-los. Qual dessas categorias se aplica corretamente a esse cenário?",
    "opts": [
      "A) Violação de privacidade, pois registros financeiros frequentemente contêm informações pessoais identificáveis de contribuintes ou beneficiários.",
      "B) Violação proprietária, pois informações financeiras sensíveis podem ser consideradas informações proprietárias não classificadas.",
      "C) Nenhum, pois a definição dessa categoria abrange casos em que não houve exfiltração das informações, independentemente de outras ações realizadas.",
      "D) Perda de integridade, pois informações sensíveis ou proprietárias foram alteradas, mesmo sem terem sido exfiltradas."
    ],
    "ans": 3,
    "exp": "A categoria Perda de integridade cobre exatamente informações sensíveis ou proprietárias que foram alteradas ou excluídas, sem exigir exfiltração. A A e a B exigem acesso ou exfiltração para se aplicarem, o que não ocorreu. A C está errada pois a categoria \"Nenhum\" exige que nenhuma informação tenha sido comprometida de qualquer forma, mas houve alteração — uma forma de comprometimento."
  },
  {
    "t": "Uma organização privada sujeita ao GDPR sofre um incidente em que dados genéticos de funcionários europeus são acessados por um atacante. Com base nas categorias de impacto na informação adaptadas para organizações privadas, como essa informação deve ser classificada?",
    "opts": [
      "A) Violação de propriedade intelectual, pois dados genéticos podem ser considerados um ativo estratégico exclusivo da organização.",
      "B) Violação de informação confidencial, pois dados genéticos não se encaixam diretamente em nenhuma legislação de proteção de dados específica.",
      "C) Violação de informação regulamentada, pois dados genéticos são classificados como informações pessoais sensíveis (SPI) sob o GDPR, incluídas nessa categoria para organizações sujeitas ao regulamento europeu.",
      "D) Perda de integridade, pois o acesso a dados genéticos sempre representa um comprometimento irreversível da integridade biológica das informações armazenadas."
    ],
    "ans": 2,
    "exp": "Para organizações sujeitas ao GDPR, a categoria de informação regulamentada deve incluir as SPI (informações pessoais sensíveis), das quais os dados genéticos são um exemplo explícito. A A está errada pois propriedade intelectual refere-se a segredos comerciais e planos de produto. A B está errada pois dados genéticos têm enquadramento regulatório específico via GDPR. A D está errada pois perda de integridade exige alteração ou exclusão, não apenas acesso."
  },
  {
    "t": "Uma organização decide adotar um framework de modelagem de ameaças, mas seu time de segurança questiona se é obrigatório seguir exatamente os modelos cobrados no exame CySA+. Qual afirmativa está correta?",
    "opts": [
      "A) As organizações devem obrigatoriamente adotar pelo menos um dos três frameworks específicos abordados pelo exame CySA+, sem possibilidade de personalização.",
      "B) Frameworks de ataque são exclusivos para fins de certificação e não possuem aplicação prática real na construção de defesas organizacionais.",
      "C) Organizações só podem combinar frameworks existentes entre si, sendo proibida a criação de modelos próprios do zero.",
      "D) Organizações podem usar um modelo diferente dos três abordados no exame ou criar o próprio framework, combinando modelos existentes com seus requisitos e experiência."
    ],
    "ans": 3,
    "exp": "A organização pode usar um modelo diferente ou criar o seu próprio, combinando um ou mais frameworks com requisitos próprios. A A está errada pois não há obrigatoriedade de adotar exatamente os frameworks do exame. A B contradiz o propósito desses frameworks, que é ajudar a construir defesas reais. A C restringe indevidamente a possibilidade de criação totalmente independente."
  },
  {
    "t": "Karen está respondendo a um incidente de segurança causado pelo roubo de arquivos de uma agência governamental por um intruso. Esses arquivos continham informações não criptografadas sobre infraestrutura crítica protegida. Como Karen deve classificar o impacto dessa perda sobre as informações?",
    "opts": [
      "A) Nenhum",
      "B) Violação de privacidade",
      "C) Violação de informações proprietárias",
      "D) Perda de integridade"
    ],
    "ans": 2,
    "exp": "Em uma violação de informações proprietárias, informações proprietárias não classificadas são acessadas ou exfiltradas. As informações protegidas sobre infraestrutura crítica (PCII) são um exemplo de informações proprietárias não classificadas."
  },
  {
    "t": "Matt está preocupado com o fato de que os registros de log de sua organização contêm marcações de data e hora conflitantes devido a relógios não sincronizados. Que protocolo ele pode usar para sincronizar os relógios em toda a empresa?",
    "opts": [
      "A) NTP",
      "B) FTP",
      "C) ARP",
      "D) SSH"
    ],
    "ans": 0,
    "exp": "O Protocolo de Tempo de Rede (NTP) fornece uma fonte comum de informações de horário que permite a sincronização dos relógios em toda a empresa."
  },
  {
    "t": "Um analista de segurança está estruturando a defesa de uma infraestrutura crítica que inclui sistemas de controle industrial (ICS) e também precisa avaliar técnicas relacionadas ao acesso inicial até a exfiltração de dados em ambientes corporativos Windows. Considerando a estrutura do ATT&CK, qual afirmativa é correta?",
    "opts": [
      "A) O ATT&CK possui matrizes de produção específicas para ICS, além de matrizes empresariais que cobrem o ciclo completo da ameaça, incluindo ambientes Windows, desde o acesso inicial até a exfiltração.",
      "B) O ATT&CK não oferece suporte específico a sistemas de controle industrial, sendo necessário um framework adicional e independente para esse tipo de ambiente.",
      "C) As matrizes empresariais do ATT&CK abrangem exclusivamente sistemas operacionais de desktop, não incluindo nenhuma cobertura para dispositivos móveis ou ambientes industriais.",
      "D) O ciclo de vida completo da ameaça, da execução à exfiltração, é coberto apenas pelas matrizes de pré-ataque, enquanto as matrizes empresariais tratam somente do acesso inicial."
    ],
    "ans": 0,
    "exp": "As matrizes do ATT&CK cobrem o ciclo completo da ameaça (acesso inicial, execução, persistência, escalonamento de privilégios e exfiltração) em ambientes como Windows, além de possuir matrizes de produção específicas para ICS. A B está errada pois ICS é explicitamente coberto. A C ignora a existência de matrizes para dispositivos móveis e ICS. A D distorce a divisão das matrizes, atribuindo cobertura incorreta a cada tipo."
  },
  {
    "t": "Durante uma reunião, um membro da equipe de segurança afirma que o ATT&CK só é útil para grandes corporações que possuem licenças comerciais avançadas, sendo inviável para organizações com orçamento limitado. Qual afirmativa melhor refuta esse argumento?",
    "opts": [
      "A) O ATT&CK é disponibilizado exclusivamente por meio de parcerias comerciais pagas, sendo inacessível para organizações que não possuem contratos formais com a MITRE.",
      "B) Apenas as matrizes de pré-ataque são gratuitas; as matrizes empresariais e de produção exigem assinatura paga para acesso completo aos detalhes de mitigação.",
      "C) O ATT&CK é um dos bancos de dados gratuitos mais completos de táticas, técnicas e informações relacionadas a adversários disponíveis atualmente.",
      "D) Projetos de terceiros que utilizam o ATT&CK para construir playbooks e ferramentas são sempre pagos, tornando o acesso prático ao framework dependente de investimento financeiro."
    ],
    "ans": 2,
    "exp": "O ATT&CK é um banco de dados gratuito e um dos mais completos sobre táticas, técnicas e informações relacionadas a adversários, o que contradiz a ideia de inacessibilidade financeira. A A e a B inventam restrições de pagamento que não existem. A D generaliza incorretamente que todos os projetos de terceiros são pagos, quando há projetos gratuitos e de código aberto baseados no ATT&CK, como o Atomic Red Team."
  },
  {
    "t": "Durante uma análise de intrusão usando o Modelo de Diamante, um analista precisa identificar os quatro elementos que compõem os vértices do diamante para um determinado evento. Quais elementos correspondem corretamente às Características Centrais (Core Features) descritas no modelo?",
    "opts": [
      "A) Fase, resultado, direção e metodologia, pois esses elementos definem a estrutura central de qualquer evento analisado no modelo.",
      "B) Adversário, capacidade, infraestrutura e vítima, que representam os quatro vértices do diamante em torno de cada evento.",
      "C) Timestamps de início e fim, recursos, metodologia e thread de atividade, pois ordenam os eventos cronologicamente dentro do modelo.",
      "D) Valor de confiança, capacidade, vítima e thread de atividade, combinando elementos de confiabilidade com os vértices centrais do evento."
    ],
    "ans": 1,
    "exp": "O modelo define explicitamente as Características Centrais como adversário, capacidade, infraestrutura e vítima, sendo esses os vértices do diamante. A A descreve elementos das Meta-Características (fase, resultado, direção, metodologia), não das Características Centrais. A C mistura Meta-Características com o conceito de thread de atividade, que é o resultado do uso dessas características, não um elemento central. A D combina indevidamente o Valor de Confiança com vértices do diamante."
  },
  {
    "t": "Um analista de segurança está documentando uma análise de intrusão e atribui um grau de certeza às conclusões obtidas sobre o comprometimento de um sistema. Esse analista busca orientação no Modelo de Diamante sobre como calcular esse grau de certeza de forma padronizada. Qual afirmativa está correta sobre essa situação?",
    "opts": [
      "A) O Modelo de Diamante define uma fórmula matemática específica para o cálculo do Valor de Confiança, baseada nas Meta-Características de cada evento analisado.",
      "B) O Valor de Confiança deve ser obrigatoriamente determinado em conjunto com outros analistas, conforme metodologia padronizada estabelecida pelo modelo.",
      "C) O Valor de Confiança é determinado exclusivamente pela quantidade de Características Centrais identificadas com sucesso durante a análise do evento.",
      "D) O modelo não define o Valor de Confiança; espera-se que os próprios analistas o determinem com base em seu trabalho individual de investigação."
    ],
    "ans": 3,
    "exp": "O Valor de Confiança não é definido pelo modelo, mas se espera que os analistas o determinem com base em seu próprio trabalho. A A inventa uma fórmula matemática que o modelo não define. A B impõe uma obrigatoriedade de trabalho colaborativo que o modelo não prevê. A C vincula incorretamente o Valor de Confiança à quantidade de Características Centrais, relação que o modelo não estabelece."
  },
  {
    "t": "Uma equipe de segurança detecta varreduras de portas vindas de um IP externo, acompanhadas de coleta de informações públicas sobre os executivos da empresa em redes sociais. Segundo a Cyber Kill Chain, em qual estágio o adversário se encontra?",
    "opts": [
      "A) Entrega, pois o adversário já está distribuindo ferramentas contra alvos identificados na organização.",
      "B) Armamento, pois a coleta de dados é usada para construir um payload personalizado para o alvo.",
      "C) Reconhecimento, pois o adversário está identificando alvos e coletando inteligência por fontes abertas e varreduras.",
      "D) Exploração, pois a varredura de portas representa a tentativa de explorar vulnerabilidades já identificadas."
    ],
    "ans": 2,
    "exp": "Reconhecimento é a fase de identificação de alvos e coleta de inteligência, incluindo fontes abertas e varreduras — exatamente o cenário. A A (Entrega) envolve distribuição de ferramentas, ainda não iniciada. A B (Armamento) é a construção do payload, posterior. A D (Exploração) envolve o uso efetivo de uma vulnerabilidade, não a varredura inicial."
  },
  {
    "t": "Durante a análise de um incidente, um defensor coleta arquivos e metadados de um malware para determinar se a ferramenta é amplamente compartilhada entre atacantes ou mantida de forma restrita, e analisa a linha do tempo entre a criação do malware e seu uso. Qual estágio da Cyber Kill Chain está sendo investigado?",
    "opts": [
      "A) Armamento, pois é nesse estágio que os defensores analisam como o exploit foi construído e coletam arquivos e metadados sobre a ferramenta.",
      "B) Reconhecimento, pois a análise de metadados serve para identificar quais alvos o adversário pretende atacar.",
      "C) Instalação, pois a coleta de artefatos do malware ocorre quando o backdoor já está estabelecido no sistema.",
      "D) Comando e Controle, pois a análise da ferramenta permite detectar a infraestrutura de comunicação remota do atacante."
    ],
    "ans": 0,
    "exp": "Ao Armamento estão associadas a análise de como o exploit foi construído, a observação da linha do tempo de criação versus uso, e a coleta de arquivos e metadados para avaliar se a ferramenta é compartilhada ou restrita. A B trata da identificação de alvos. A C foca em acesso persistente. A D refere-se à detecção da infraestrutura de C2, não à análise da ferramenta em si."
  },
  {
    "t": "Um adversário cumpriu seu objetivo final: após obter acesso, ele coletou credenciais, escalou privilégios, moveu-se lateralmente pelo ambiente e exfiltrou dados sensíveis. Segundo a Cyber Kill Chain, qual estágio descreve essas ações?",
    "opts": [
      "A) Comando e Controle, pois o movimento lateral depende da comunicação bidirecional com o sistema remoto.",
      "B) Exploração, pois a escalação de privilégios decorre diretamente da exploração de vulnerabilidades.",
      "C) Instalação, pois a exfiltração de dados requer a instalação prévia de ferramentas de acesso remoto.",
      "D) Ações sobre os Objetivos, estágio final em que o adversário coleta credenciais, escala privilégios, move-se lateralmente e exfiltra informações."
    ],
    "ans": 3,
    "exp": "Ações sobre os Objetivos é o estágio final, no qual o adversário coleta credenciais, escala privilégios, move-se lateralmente e exfiltra dados — exatamente o cenário. A A (C2) é a comunicação que viabiliza o controle, não a ação final. A B (Exploração) é a obtenção inicial de acesso. A C (Instalação) refere-se ao estabelecimento de persistência, anterior à exfiltração."
  },
  {
    "t": "Qual fase do processo de resposta a incidentes incluiria medidas destinadas a limitar os danos causados por uma violação em andamento?",
    "opts": [
      "A) Preparação",
      "B) Detecção e análise",
      "C) Contenção, erradicação e recuperação",
      "D) Atividade pós-incidente"
    ],
    "ans": 2,
    "exp": "Os protocolos de contenção presentes nas fases de contenção, erradicação e recuperação são projetados para limitar os danos causados por um incidente de segurança em andamento."
  },
  {
    "t": "Qual crítica comum é feita à Cyber Kill Chain?",
    "opts": [
      "A) Nem todas as ameaças têm como objetivo eliminar um alvo.",
      "B) Ela é detalhada demais.",
      "C) Ela inclui ações fora da rede defendida.",
      "D) Ela se concentra demais em ameaças internas."
    ],
    "ans": 2,
    "exp": "A Kill Chain inclui ações fora da rede defendida sobre as quais muitos defensores não conseguem agir, o que resulta em uma das críticas comuns ao modelo. Outras críticas incluem o foco em um perímetro tradicional e em técnicas baseadas em antimalware, assim como a falta de foco em ameaças internas."
  },
  {
    "t": "Um defensor deseja fortalecer as defesas contra um estágio específico da Cyber Kill Chain, focando em conscientização de usuários, codificação segura, varredura de vulnerabilidades, testes de penetração e fortalecimento de endpoints. Qual estágio essas medidas defensivas visam mitigar?",
    "opts": [
      "A) Entrega, pois a conscientização de usuários evita que eles interajam com payloads maliciosos recebidos.",
      "B) Exploração, pois esse estágio utiliza vulnerabilidades de software, hardware ou humanas, e as defesas listadas reduzem a superfície de ataque.",
      "C) Reconhecimento, pois os testes de penetração identificam quais informações o adversário pode coletar sobre a organização.",
      "D) Armamento, pois a codificação segura impede que o adversário construa exploits funcionais contra a aplicação."
    ],
    "ans": 1,
    "exp": "À Exploração estão associadas as defesas de conscientização do usuário, codificação segura, varredura de vulnerabilidades, testes de penetração e fortalecimento de endpoints, visando uma postura forte e superfície de ataque limitada. A A, C e D descrevem estágios diferentes, e embora algumas medidas tenham efeitos amplos, esse conjunto de defesas é vinculado especificamente à fase de Exploração."
  },
  {
    "t": "Um atacante envia um e-mail contendo um anexo malicioso para funcionários de uma empresa, esperando que alguém o abra. Um defensor, ao analisar o incidente, foca em observar como o ataque foi entregue, o que foi alvejado e na retenção de logs para rastrear o ocorrido. Qual estágio da Cyber Kill Chain está em questão?",
    "opts": [
      "A) Entrega, pois o adversário distribui sua ferramenta via payload de e-mail e os defensores observam o método e o alvo, mantendo logs para rastreamento.",
      "B) Armamento, pois o anexo malicioso representa a combinação de malware e exploit em um único payload.",
      "C) Exploração, pois a abertura do anexo pelo funcionário aciona a vulnerabilidade no sistema.",
      "D) Ações sobre os Objetivos, pois o envio do e-mail representa o cumprimento da meta do adversário."
    ],
    "ans": 0,
    "exp": "Entrega é o momento em que o adversário distribui sua ferramenta, como um payload enviado por e-mail, e os defensores devem observar o método e o alvo, mantendo logs. A B (Armamento) é a construção prévia do payload. A C (Exploração) ocorre quando o anexo é aberto e aciona a vulnerabilidade — etapa seguinte. A D descreve o objetivo final, não a entrega."
  },
  {
    "t": "Após comprometer um sistema, o atacante estabelece um canal de comunicação bidirecional que lhe permite controlar continuamente a máquina remota. A equipe de defesa busca detectar essa infraestrutura fortalecendo a rede e implantando capacidades de detecção. Qual estágio da Cyber Kill Chain está sendo descrito?",
    "opts": [
      "A) Instalação, pois o canal de comunicação depende de backdoors persistentes previamente instalados na máquina.",
      "B) Ações sobre os Objetivos, pois o controle remoto contínuo indica que o adversário já alcançou sua meta final.",
      "C) Exploração, pois o canal de comunicação só é estabelecido após a exploração bem-sucedida de uma vulnerabilidade.",
      "D) Comando e Controle (C2), pois esse estágio permite comunicação bidirecional e controle contínuo do sistema remoto, com os defensores buscando detectar a infraestrutura de C2."
    ],
    "ans": 3,
    "exp": "Comando e Controle (C2) é o estágio que permite comunicação bidirecional e controle contínuo do sistema remoto, com defensores fortalecendo a rede e implantando detecção. A A (Instalação) é a etapa anterior, de estabelecimento de persistência. A B descreve a ação final, distinta do controle remoto. A C (Exploração) é o acesso inicial, anterior ao estabelecimento do canal C2."
  },
  {
    "t": "Um analista de segurança identifica que um atacante instalou um shell remoto persistente em um servidor comprometido, garantindo acesso futuro via backdoor. Os defensores são orientados a monitorar artefatos típicos dessa atividade. Qual estágio da Cyber Kill Chain corresponde a essa situação?",
    "opts": [
      "A) Comando e Controle, pois o shell remoto é usado para a comunicação bidirecional contínua com o atacante.",
      "B) Instalação, pois esse estágio foca no acesso persistente via backdoor, e os defensores devem monitorar artefatos de shells remotos persistentes.",
      "C) Exploração, pois a instalação do shell remoto é consequência direta da exploração da vulnerabilidade inicial.",
      "D) Entrega, pois o shell remoto representa a ferramenta entregue pelo adversário ao sistema alvo."
    ],
    "ans": 1,
    "exp": "Instalação é o estágio que foca no acesso persistente via backdoor, e os defensores devem monitorar artefatos de shell remoto persistente — exatamente o cenário. A A (C2) é o uso do canal de comunicação, etapa seguinte. A C (Exploração) é o acesso inicial. A D (Entrega) refere-se à distribuição da ferramenta, não ao estabelecimento de persistência."
  },
  {
    "t": "Um gerente de segurança questiona quantos e quais frameworks, entre os de metodologia de ataque cobrados no exame CySA+, servem para modelar o comportamento de adversários, e não para orientar testes de segurança. Quais são eles?",
    "opts": [
      "A) Dois frameworks: a Cyber Kill Chain e o modelo MITRE ATT&CK, sendo o Modelo de Diamante apenas uma referência complementar.",
      "B) Quatro frameworks: a Cyber Kill Chain, o Modelo de Diamante, o MITRE ATT&CK e o NIST SP 800-61.",
      "C) Três frameworks: a Cyber Kill Chain, o Modelo de Diamante de Análise de Intrusões e o modelo MITRE ATT&CK.",
      "D) Apenas um framework: a Cyber Kill Chain, considerada a metodologia central de todo o conteúdo do exame."
    ],
    "ans": 2,
    "exp": "Entre os frameworks de metodologia de ataque cobrados no CySA+, três servem para modelar o comportamento de adversários: a Cyber Kill Chain, o Modelo de Diamante de Análise de Intrusões e o MITRE ATT&CK. Os outros dois, o OSSTMM e o guia de testes do OWASP, orientam testes de segurança. A A omite o Modelo de Diamante. A B inclui indevidamente o NIST SP 800-61, que é um guia de tratamento de incidentes, não um framework de metodologia de ataque. A D reduz incorretamente a apenas um framework."
  },
  {
    "t": "Durante a fase de Reconhecimento de um ataque, os defensores de uma organização desejam reagir adequadamente às atividades detectadas. Qual conduta é recomendada para os defensores nesse estágio?",
    "opts": [
      "A) Coletar dados sobre as atividades de reconhecimento e priorizar as defesas com base nessas informações.",
      "B) Estabelecer imediatamente o playbook de resposta a incidentes e avaliar os danos causados pelo atacante.",
      "C) Monitorar artefatos de shells remotos persistentes para detectar acessos via backdoor estabelecidos pelo adversário.",
      "D) Conduzir uma análise completa de malware para entender como o exploit armamentizado foi construído."
    ],
    "ans": 0,
    "exp": "No Reconhecimento, os defensores devem coletar dados sobre as atividades de reconhecimento e priorizar defesas com base nessas informações. A B descreve condutas das Ações sobre os Objetivos. A C refere-se à fase de Instalação. A D corresponde às defesas do Armamento, não do Reconhecimento."
  },
  {
    "t": "Alan é responsável por desenvolver as capacidades de detecção e análise de sua organização. Ele gostaria de adquirir um sistema que pudesse combinar registros de log de várias fontes para detectar possíveis incidentes de segurança. Que tipo de sistema é mais adequado para atender ao objetivo de segurança de Alan?",
    "opts": [
      "A) IPS",
      "B) IDS",
      "C) SIEM",
      "D) Firewall"
    ],
    "ans": 2,
    "exp": "Um sistema de gerenciamento de informações e eventos de segurança (SIEM) correlaciona entradas de log de várias fontes e tenta identificar possíveis incidentes de segurança."
  },
  {
    "t": "Ben está trabalhando para classificar o impacto funcional de um incidente. O incidente desativou o serviço de e-mail para aproximadamente 30% dos funcionários de sua organização. Como Ben deve classificar o impacto funcional desse incidente de acordo com a escala do NIST?",
    "opts": [
      "A) Nenhum",
      "B) Baixo",
      "C) Médio",
      "D) Alto"
    ],
    "ans": 2,
    "exp": "A definição de impacto funcional médio é que a organização perdeu a capacidade de fornecer um serviço crítico a um subconjunto dos usuários do sistema. Isso descreve com precisão a situação em que Ben se encontra. A classificação de impacto funcional baixo só é atribuída quando a organização consegue fornecer todos os serviços críticos a todos os usuários, com eficiência reduzida. A classificação de impacto funcional alto só é atribuída se um serviço crítico não estiver disponível para todos os usuários."
  },
  {
    "t": "O CISO de uma organização que enfrenta crescentes preocupações com ameaças internas (insider threats) e ameaças persistentes avançadas decide adotar a Cyber Kill Chain da Lockheed Martin como único modelo de defesa, sem qualquer adaptação. Um analista experiente discorda dessa decisão. Qual argumento melhor sustenta a posição do analista?",
    "opts": [
      "A) A Cyber Kill Chain é um modelo obsoleto que foi completamente substituído pela Unified Kill Chain, não devendo mais ser utilizada em nenhum contexto organizacional.",
      "B) A organização deve obrigatoriamente adotar a Unified Kill Chain, pois suas 18 fases são as únicas capazes de descrever qualquer tipo de ataque moderno.",
      "C) A Cyber Kill Chain não pode ser modificada de forma alguma, sendo necessário descartá-la inteiramente caso não atenda às necessidades específicas da organização.",
      "D) A Cyber Kill Chain tem sido criticada pela falta de foco em ameaças internas; diante de APTs e insider threats, a organização deve avaliar qual modelo se ajusta melhor ou modificar um modelo existente para suas necessidades."
    ],
    "ans": 3,
    "exp": "A Cyber Kill Chain é criticada pela falta de foco em ameaças internas e, diante de APTs e insider threats, simplesmente adotá-la pode não atender às necessidades da organização — o recomendado é selecionar um modelo adequado ou modificar um existente. A A exagera ao declarar o modelo obsoleto e substituído. A B impõe a Unified Kill Chain como obrigatória, o que não procede. A C está errada, pois modificar modelos existentes é uma opção válida."
  },
  {
    "t": "Um analista de cibersegurança precisa avaliar a segurança das aplicações web de sua organização, incluindo testes de vulnerabilidades específicas desse tipo de sistema. Qual recurso de teste, dentre os exigidos pelo CySA+, é o mais adequado para essa finalidade?",
    "opts": [
      "A) O OSSTMM, pois ele fornece orientação abrangente sobre testes de segurança que incluem aplicações web, comunicações e localizações físicas.",
      "B) Ambos os recursos são equivalentes para testes de aplicações web, podendo o analista escolher qualquer um conforme sua preferência.",
      "C) O OWASP Web Security Testing Guide, pois é um recurso focado especificamente em testar a segurança de aplicações web.",
      "D) O OSSTMM, pois o OWASP é voltado exclusivamente para testes de interações humanas e engenharia social, não de aplicações web."
    ],
    "ans": 2,
    "exp": "O OWASP Web Security Testing Guide é focado especificamente em testar a segurança de aplicações web, sendo o recurso ideal para o cenário. A A está errada pois o OSSTMM trata de localizações físicas, interações humanas e comunicações, não especificamente de aplicações web. A B equipara incorretamente os dois recursos. A D inverte completamente o propósito do OWASP, que é justamente voltado a aplicações web."
  },
  {
    "t": "Uma organização deseja testar não apenas seus sistemas digitais, mas também a segurança de suas instalações físicas, a resistência de seus funcionários a tentativas de manipulação (interações humanas) e seus canais de comunicação. Qual recurso de teste, dentre os dois exigidos pelo CySA+, melhor atende a esse escopo?",
    "opts": [
      "A) O OSSTMM, pois fornece orientação sobre testes de segurança de localizações físicas, interações humanas e comunicações.",
      "B) O OWASP Web Security Testing Guide, pois cobre tanto aplicações web quanto a segurança de instalações físicas e interações humanas.",
      "C) Nenhum dos dois recursos cobre testes de segurança física ou de interações humanas, sendo necessário um padrão adicional.",
      "D) Ambos os recursos cobrem igualmente segurança física e interações humanas, diferindo apenas na profundidade técnica de cada abordagem."
    ],
    "ans": 0,
    "exp": "O OSSTMM fornece orientação sobre testes de segurança de localizações físicas, interações humanas e comunicações — exatamente o escopo descrito. A B atribui incorretamente ao OWASP uma cobertura de segurança física e humana que ele não possui. A C está errada, pois o OSSTMM cobre justamente esse escopo. A D equipara erroneamente os dois recursos quanto a esse escopo."
  },
  {
    "t": "Um analista de cibersegurança detecta uma varredura de portas em um servidor da organização. Ele a registra, mas não consegue determinar se houve violação de qualquer política de segurança. Como esse acontecimento deve ser corretamente classificado?",
    "opts": [
      "A) Como um incidente de segurança, pois qualquer atividade de varredura realizada por um atacante constitui violação das práticas padrão de segurança.",
      "B) Como um evento de segurança, pois é uma ocorrência observável relacionada a uma função de segurança, sem violação confirmada de políticas.",
      "C) Como um incidente de segurança, pois todo evento observável em um servidor é automaticamente elevado à condição de incidente.",
      "D) Como uma ameaça iminente, pois a varredura indica que um incidente certamente ocorrerá em breve."
    ],
    "ans": 1,
    "exp": "Evento de segurança é qualquer ocorrência observável relacionada a uma função de segurança, enquanto incidente exige violação ou ameaça iminente de violação de políticas. Sem violação confirmada, trata-se de um evento. A A e a C elevam indevidamente um evento a incidente. A D presume um incidente certo, mas um incidente exige violação ou ameaça iminente de violação, não mera possibilidade."
  },
  {
    "t": "Durante a resposta a um incidente, a equipe da CSIRT precisa de instruções táticas e detalhadas sobre os passos específicos a seguir para um tipo particular de incidente de cibersegurança. Qual documento fornece essas instruções específicas?",
    "opts": [
      "A) A política de resposta a incidentes, pois ela orienta os esforços em alto nível e detalha cada ação técnica a ser executada pela equipe.",
      "B) A declaração de comprometimento da gestão, pois fornece a autoridade e os passos detalhados para a execução da resposta.",
      "C) O esquema de classificação de gravidade, pois define quais procedimentos técnicos aplicar conforme o impacto do incidente.",
      "D) Um playbook, pois descreve os procedimentos específicos que a equipe seguirá no caso de um tipo específico de incidente de cibersegurança."
    ],
    "ans": 3,
    "exp": "Os playbooks descrevem os procedimentos específicos a seguir para um tipo específico de incidente. A A está errada pois a política orienta em alto nível, não fornece passos táticos detalhados. A B trata da autoridade da gestão, não de procedimentos técnicos. A C refere-se à classificação de gravidade, que não define procedimentos passo a passo."
  },
  {
    "t": "Qual das alternativas a seguir é um exemplo de incidente de segurança computacional?",
    "opts": [
      "A) Um usuário acessa um arquivo protegido",
      "B) Um administrador altera as configurações de permissão de um arquivo",
      "C) Um intruso invade um prédio",
      "D) Um ex-funcionário derruba um servidor"
    ],
    "ans": 3,
    "exp": "Um ex-funcionário derrubar um servidor é um exemplo de incidente de segurança computacional porque isso constitui uma violação efetiva da disponibilidade desse sistema. Um usuário acessar um arquivo protegido e um administrador alterar as configurações de permissão de arquivos são exemplos de eventos de segurança, mas não são incidentes de segurança. Um intruso invadir um prédio pode ser um evento de segurança, mas não é necessariamente um evento de segurança computacional, a menos que ele realize alguma ação que afete um sistema computacional."
  },
  {
    "t": "Durante qual fase do processo de resposta a incidentes uma organização implementaria defesas destinadas a reduzir a probabilidade de um incidente de segurança?",
    "opts": [
      "A) Preparação",
      "B) Detecção e análise",
      "C) Contenção, erradicação e recuperação",
      "D) Atividade pós-incidente"
    ],
    "ans": 0,
    "exp": "As organizações devem desenvolver abordagens sólidas de defesa em profundidade para a cibersegurança durante a fase de preparação do processo de resposta a incidentes. Os controles desenvolvidos durante essa fase servem para reduzir a probabilidade e o impacto de incidentes futuros."
  },
  {
    "t": "Um gerente de segurança afirma que, uma vez que os sistemas afetados por um incidente sejam restaurados ao funcionamento normal, os esforços de resposta a incidentes estão completamente encerrados. Qual afirmativa melhor avalia essa posição?",
    "opts": [
      "A) A posição está incorreta; a restauração das atividades normais não sinaliza o fim dos esforços, pois a fase de atividades pós-incidente ainda inclui a revisão de lições aprendidas e a retenção de evidências.",
      "B) A posição está correta; a restauração das operações normais marca formalmente o encerramento de todas as fases da resposta a incidentes.",
      "C) A posição está parcialmente correta; os esforços só continuam se o incidente tiver envolvido perda financeira significativa para a organização.",
      "D) A posição está incorreta apenas porque a equipe ainda precisa retornar à fase de contenção para confirmar a ausência de ameaças residuais."
    ],
    "ans": 0,
    "exp": "A restauração das atividades normais não sinaliza o fim dos esforços, pois a fase pós-incidente oferece a oportunidade de refletir via lições aprendidas e exige retenção de evidências. A B contradiz diretamente esse princípio. A C condiciona a continuidade ao impacto financeiro, sem fundamento. A D atribui a continuidade a um retorno à contenção, quando o que continua é a fase pós-incidente."
  },
  {
    "t": "Uma organização está estruturando sua CSIRT e debate quais áreas devem poder ser representadas além dos profissionais de cibersegurança da equipe central. Qual conjunto de representantes pode compor a CSIRT estendida?",
    "opts": [
      "A) Apenas especialistas técnicos e suporte de TI, pois somente perfis técnicos contribuem efetivamente para a resposta a incidentes.",
      "B) Apenas a liderança sênior e as autoridades policiais, pois a CSIRT estendida é composta exclusivamente por stakeholders externos.",
      "C) Especialistas técnicos, suporte de TI, assessoria jurídica, recursos humanos e equipes de relações públicas e marketing.",
      "D) Apenas assessoria jurídica e recursos humanos, pois a resposta a incidentes é primariamente uma questão de conformidade e gestão de pessoal."
    ],
    "ans": 2,
    "exp": "Além da equipe central, a CSIRT pode incluir especialistas técnicos, suporte de TI, assessoria jurídica, recursos humanos e relações públicas/marketing. A A e a D restringem indevidamente a composição. A B confunde os stakeholders externos com os quais a equipe coordena (liderança sênior, autoridades) com os representantes que compõem a própria CSIRT estendida."
  },
  {
    "t": "Um analista de segurança deseja avaliar e descrever uma ameaça de forma estruturada, identificando lacunas na compreensão do ataque e utilizando uma taxonomia padronizada que permita o uso dos dados em ferramentas compatíveis. Qual recurso é especialmente apropriado para essa finalidade?",
    "opts": [
      "A) O OWASP Testing Guide, pois fornece uma taxonomia padronizada de ameaças aplicável a qualquer tipo de sistema.",
      "B) O OSS TMM, pois oferece um modelo de ameaças com ampla taxonomia compatível com ferramentas de análise.",
      "C) A política de resposta a incidentes, pois define a taxonomia oficial de ameaças a ser utilizada pela organização.",
      "D) O MITRE ATT&CK, pois fornece uma ampla taxonomia padrão para ameaças que permite o uso dos dados em ferramentas compatíveis com o framework."
    ],
    "ans": 3,
    "exp": "O ATT&CK fornece uma ampla taxonomia padrão para ameaças, permitindo o uso de dados em ferramentas compatíveis com o framework, e modelos como ele ajudam a identificar lacunas. A A e a B referem-se a ferramentas de teste de sistemas, não a taxonomias de modelagem de ameaças. A C atribui à política uma função de taxonomia de ameaças que ela não tem."
  }
];
