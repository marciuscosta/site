// Questões do arquivo Questionario_Cap12.txt, na ordem original.
// Os números do TXT servem apenas como separadores de questões.
const Qs = [
  {
    "t": "Uma analista de segurança percebe que o scanner de vulnerabilidades da empresa está colocando no topo da lista de remediação diversas vulnerabilidades encontradas em sistemas isolados e de baixa importância para o negócio. Qual é a melhor explicação para essa situação?",
    "opts": [
      "A) As pontuações CVSS incorporam o contexto organizacional, portanto o scanner está mal configurado.",
      "B) O CVSS fornece uma pontuação de vulnerabilidade, e não de risco, sem considerar a exposição ou a importância do sistema para a organização.",
      "C) As pontuações CVSS são medidas qualitativas e, por isso, não deveriam ser usadas em processos de priorização.",
      "D) O scanner está gerando falsos positivos que devem ser removidos do relatório antes da distribuição."
    ],
    "ans": 1,
    "exp": "O CVSS é calculado com base em um sistema de classificação estruturado, mas não incorpora contexto organizacional, como a exposição ou a importância de um sistema ou serviço. Por isso, vulnerabilidades que não representam alto risco real podem ser elevadas ao topo da lista de remediação, levando organizações a preferirem uma pontuação de risco com mais contexto. A alternativa A está errada porque o CVSS justamente não incorpora contexto organizacional. A C está errada porque o CVSS é estruturado — a medida qualitativa é característica da pontuação de risco. A D está errada porque nada indica falso positivo: as vulnerabilidades existem, o problema é a ausência de contexto de risco."
  },
  {
    "t": "Durante a análise de um relatório mensal de vulnerabilidades, um analista identifica que uma vulnerabilidade remediada há três meses voltou a aparecer no mesmo servidor. Qual é a ação mais apropriada?",
    "opts": [
      "A) Marcar o item como falso positivo, já que a vulnerabilidade foi corrigida anteriormente.",
      "B) Reduzir a pontuação de risco do item, pois se trata de uma vulnerabilidade já conhecida pela equipe.",
      "C) Aguardar o próximo ciclo de varredura para confirmar se o resultado se repete.",
      "D) Sinalizar a recorrência e iniciar uma investigação, pois isso costuma indicar que algo deu errado."
    ],
    "ans": 3,
    "exp": "O reaparecimento de uma vulnerabilidade (recorrência) costuma ser um sinal de que algo deu errado e precisa ser sinalizado e investigado. A alternativa A está errada porque recorrência não é falso positivo — a detecção pode ser legítima. A B está errada porque não há justificativa para reduzir o risco; o problema pode até ser mais grave. A C está errada porque adiar a verificação apenas atrasa a investigação de um problema já evidente no relatório."
  },
  {
    "t": "Uma organização de grande porte, com um ambiente complexo, precisa produzir relatórios de vulnerabilidades recorrentes que frequentemente atingem tamanhos consideráveis. Qual abordagem melhor atende a essa necessidade?",
    "opts": [
      "A) Gerar os relatórios de forma automatizada e apoiar a remediação com ferramentas de patching automatizado e gestão centralizada de sistemas.",
      "B) Alocar analistas adicionais para compilar manualmente os relatórios de cada equipe responsável.",
      "C) Reduzir a frequência das varreduras para diminuir o volume de dados gerados em cada ciclo.",
      "D) Restringir os relatórios apenas às vulnerabilidades com pontuação CVSS crítica para reduzir seu tamanho."
    ],
    "ans": 0,
    "exp": "Relatórios de gestão de vulnerabilidades são tipicamente criados de forma automatizada, justamente por serem recorrentes e poderem atingir grandes tamanhos em organizações grandes ou ambientes complexos. Ferramentas automatizadas de patching e softwares centralizados de gestão de sistemas ajudam a aliviar a carga da remediação em larga escala. A alternativa B está errada porque a compilação manual é inviável nessa escala. A C está errada porque reduz a visibilidade sobre o ambiente. A D está errada porque omite elementos essenciais do relatório e ignora que o CVSS não reflete o risco no contexto da organização."
  },
  {
    "t": "Uma equipe de administradores de sistemas é responsável por aplicar correções nos servidores de uma organização. Ao configurar a distribuição dos relatórios de vulnerabilidades, qual conjunto de informações é MAIS adequado para esse grupo?",
    "opts": [
      "A) Visões em nível de painel que resumam o progresso geral dos esforços de remediação.",
      "B) Dados de tendências e de recorrência que apontem para problemas novos ou contínuos na postura de segurança.",
      "C) Feeds em formato padronizado entregues automaticamente por meio de APIs.",
      "D) Detalhes das vulnerabilidades, opções de remediação e mitigação, e informações de priorização."
    ],
    "ans": 3,
    "exp": "Administradores de sistemas são partes interessadas técnicas e precisam de informações sobre as vulnerabilidades, opções de remediação e mitigação, e priorização, para realizar o trabalho na ordem correta. A alternativa A descreve a necessidade de executivos e liderança. A B corresponde às partes interessadas de segurança, auditoria e conformidade, que acompanham postura geral e tendências. A C atende a sistemas de gestão e supervisão de segurança, que ingerem dados de forma automatizada — não a equipes técnicas que executam a remediação."
  },
  {
    "t": "Por que as organizações devem predefinir diretrizes de comunicação de acordo com o NIST?",
    "opts": [
      "A) Para limitar quantas pessoas conhecem informações sensíveis sobre incidentes",
      "B) Para garantir a conformidade com a legislação federal",
      "C) Para garantir que comunicações adequadas sejam compartilhadas com as partes certas",
      "D) Para garantir a consistência das comunicações"
    ],
    "ans": 2,
    "exp": "As diretrizes do NIST destacam que comunicações predefinidas garantem que as comunicações adequadas sejam compartilhadas com as partes certas."
  },
  {
    "t": "Jake quer identificar as partes interessadas nas comunicações de gestão de vulnerabilidades. Qual grupo de partes interessadas tem maior probabilidade de querer que as informações sejam disponibilizadas por meio de uma API em vez de uma comunicação escrita?",
    "opts": [
      "A) Partes interessadas em operações e supervisão de segurança",
      "B) Partes interessadas em auditoria e conformidade",
      "C) Partes interessadas na administração de sistemas",
      "D) Partes interessadas na gestão"
    ],
    "ans": 0,
    "exp": "As partes interessadas em operações e supervisão de segurança provavelmente desejarão ingerir dados de gestão de vulnerabilidades para realizar atividades de enriquecimento de dados para outros sistemas de segurança. As partes interessadas em auditoria e conformidade, administração de sistemas e gestão têm maior probabilidade de desejar relatórios escritos para revisar e utilizar em suas funções."
  },
  {
    "t": "Em qual fase do ciclo de resposta a incidentes do NIST ocorre a comunicação com as partes interessadas?",
    "opts": [
      "A) Detecção e análise",
      "B) Contenção, erradicação e recuperação",
      "C) Atividade pós-incidente",
      "D) Todos os ciclos incluem comunicação com as partes interessadas."
    ],
    "ans": 3,
    "exp": "A comunicação com as partes interessadas deve ocorrer durante todas as fases do ciclo de resposta a incidentes do NIST para garantir que elas estejam cientes e participem conforme necessário."
  },
  {
    "t": "Valentine está preparando um relatório de gestão de vulnerabilidades. Qual informação será mais útil para determinar se os programas de aplicação de patches não estão obtendo sucesso?",
    "opts": [
      "A) Uma lista dos hosts afetados",
      "B) Informações sobre recorrência",
      "C) Informações de priorização",
      "D) Pontuações de risco"
    ],
    "ans": 1,
    "exp": "Informações sobre recorrência ajudarão Valentine a determinar se há um problema contínuo no programa de aplicação de patches. Por exemplo, a recorrência pode demonstrar que as imagens-base dos sistemas não estavam recebendo patches, resultando em vulnerabilidades quando novas instâncias de uma imagem são implantadas."
  },
  {
    "t": "Uma organização deseja que sua plataforma de operações de segurança receba informações de vulnerabilidades para agregar contexto adicional às atividades do SOC. Qual abordagem de entrega dessas informações é a mais apropriada?",
    "opts": [
      "A) Fornecer os dados em formatos padronizados, de forma automatizada, por meio de APIs ou outras interfaces.",
      "B) Encaminhar periodicamente à plataforma os relatórios executivos em nível de painel.",
      "C) Distribuir manualmente relatórios detalhados sempre que uma nova varredura for concluída.",
      "D) Enviar resumos mensais de tendências e vulnerabilidades recorrentes para importação na ferramenta."
    ],
    "ans": 0,
    "exp": "Sistemas de gestão e supervisão de segurança ingerem informações de vulnerabilidades para dar contexto às operações e, por isso, precisam recebê-las em formatos padronizados, de forma automatizada, via APIs ou outras interfaces. A alternativa B é voltada a executivos, não a sistemas. A C falha por depender de processo manual, incompatível com a ingestão automatizada necessária. A D descreve conteúdo típico para stakeholders de segurança, auditoria e conformidade, e mantém periodicidade e formato inadequados para consumo por sistemas."
  },
  {
    "t": "O CISO de uma empresa precisa manter a diretoria informada sobre a segurança e o desempenho geral da organização no tratamento de vulnerabilidades. Qual formato de comunicação é o MAIS adequado para esse público?",
    "opts": [
      "A) Uma lista completa de hosts afetados, com endereços IP e nomes de host.",
      "B) Relatórios técnicos com números CVE e instruções detalhadas de aplicação de patches.",
      "C) Visões em nível de painel (dashboard) sobre os esforços contínuos de remediação de vulnerabilidades.",
      "D) Exportações automatizadas em formato padronizado por meio de APIs."
    ],
    "ans": 2,
    "exp": "Executivos e equipe de liderança exercem supervisão e são responsáveis pelo desempenho e segurança gerais da organização, necessitando de informações em nível de painel sobre os esforços contínuos de remediação. As alternativas A e B trazem detalhes técnicos destinados a partes interessadas técnicas, inadequados para o nível executivo. A D é a forma de entrega apropriada para sistemas de gestão e supervisão de segurança, não para pessoas em funções de liderança."
  },
  {
    "t": "Um gerente de segurança expressa preocupação de que atender às diferentes partes interessadas exigirá produzir uma infinidade de relatórios distintos, sobrecarregando a equipe. Qual é a MELHOR resposta a essa preocupação?",
    "opts": [
      "A) Cada categoria de parte interessada exige coleta de dados independente, então será necessário ampliar a equipe.",
      "B) Na maioria dos casos, as informações subjacentes permanecem as mesmas; diferentes visualizações e resumos são usados para atender cada parte interessada.",
      "C) A organização deve limitar a distribuição dos relatórios apenas às equipes técnicas para reduzir o esforço.",
      "D) A automação elimina a necessidade de qualquer revisão ou gestão contínua dos relatórios gerados."
    ],
    "ans": 1,
    "exp": "Embora pareça necessário produzir uma infinidade de relatórios, na maioria dos casos as informações subjacentes permanecem as mesmas — o que muda são as visualizações e resumos entregues a cada parte interessada. A alternativa A está errada porque não é preciso coletar dados separadamente para cada público. A C está errada porque excluir stakeholders compromete a comunicação adequada e em tempo hábil. A D está errada porque, mesmo com automação, os responsáveis precisam assegurar que os relatórios sejam revisados, tratados e gerenciados continuamente."
  },
  {
    "t": "Uma organização está sujeita a um requisito regulatório setorial cujas exigências de relatório não se alinham a padrões comuns, como o PCI. Qual é a ação MAIS apropriada?",
    "opts": [
      "A) Utilizar os relatórios padrão de PCI do sistema de gestão de vulnerabilidades, por serem amplamente aceitos.",
      "B) Solicitar ao órgão certificador uma isenção das obrigações de relatório até que uma ferramenta compatível exista.",
      "C) Suspender os relatórios de conformidade e manter apenas os relatórios técnicos regulares.",
      "D) Criar relatórios próprios que atendam aos requisitos previstos no padrão em questão."
    ],
    "ans": 3,
    "exp": "Quando os requisitos de conformidade de uma organização não se alinham a padrões comuns, ela pode precisar construir seus próprios relatórios para atender às exigências encontradas nesses padrões. A alternativa A está errada porque relatórios alinhados ao PCI não necessariamente cobrem requisitos de outro padrão. A B está errada porque não há previsão de isenção — a obrigação de reportar permanece. A C está errada porque os relatórios de conformidade devem ser realizados regularmente, podendo ser exigidos por um órgão certificador ou retidos como prova de conformidade contínua."
  },
  {
    "t": "Durante uma avaliação, um analista identifica servidores que expõem portas potencialmente vulneráveis e executam serviços com as configurações padrão de fábrica. Qual elemento de um plano de ação melhor trata esses achados?",
    "opts": [
      "A) Aplicação imediata de patches nos servidores afetados.",
      "B) Agendamento de janelas de interrupção e comunicação com as áreas de negócio.",
      "C) Gestão de configuração, com hardening dos sistemas e definição de configurações de referência (baseline).",
      "D) Aguardar que a comunidade mais ampla tenha experiência com as atualizações do fornecedor."
    ],
    "ans": 2,
    "exp": "Configurar serviços para não expor portas potencialmente vulneráveis, remover ou alterar configurações padrão e fortalecer sistemas são atividades de gestão de configuração — elemento comum de planos de ação, junto com ferramentas de gestão de configuração e baselines. A alternativa A está errada porque o problema descrito é de configuração insegura, não de software desatualizado. A B refere-se ao planejamento de patching, que envolve interrupções de serviço. A D trata da decisão de quando instalar patches, sem relação com configurações padrão expostas."
  },
  {
    "t": "Uma equipe precisa aplicar patches em sistemas de produção que sustentam processos críticos e cuja atualização pode exigir interrupção de serviço. Qual é a consideração MAIS importante ao elaborar o plano de ação de patching?",
    "opts": [
      "A) Planejar e comunicar a aplicação, levando em conta processos e requisitos de negócio, com testes antes da produção.",
      "B) Executar a aplicação imediatamente, pois os patches de fornecedores já passam por testes suficientes.",
      "C) Aplicar os patches diretamente em produção para validar seu comportamento em cenários reais.",
      "D) Tratar o patching como tarefa puramente técnica, dispensando comunicação com outras áreas."
    ],
    "ans": 0,
    "exp": "Como o patching pode exigir interrupções de serviço, ele precisa ser planejado e comunicado, levando em conta processos e requisitos de negócio, e pode exigir testes antes de chegar aos ambientes de produção. A alternativa B está errada porque os ambientes de teste dos fornecedores não cobrem todos os cenários reais e patches com falhas são comuns. A C inverte a lógica: os testes devem ocorrer antes da produção. A D está errada porque, por impactar o negócio, o patching exige planejamento e comunicação, não sendo tarefa puramente técnica."
  },
  {
    "t": "Após instalar uma atualização lançada pelo fornecedor do sistema operacional, diversos usuários relatam exclusão de arquivos pessoais, travamentos e drivers com defeito. Qual é a MELHOR explicação para o ocorrido?",
    "opts": [
      "A) A atualização foi obtida de uma fonte não oficial e provavelmente estava adulterada.",
      "B) O processo de gestão de configuração removeu indevidamente as configurações padrão dos equipamentos.",
      "C) Os sistemas afetados estavam fora da configuração de referência (baseline) definida pela organização.",
      "D) Os ambientes de teste dos fornecedores não conseguem prever todos os cenários reais, e patches com falhas são relativamente comuns."
    ],
    "ans": 3,
    "exp": "É bastante comum que patches lançados por fornecedores apresentem falhas — podendo até ser piores que o problema original — porque os ambientes de teste não conseguem prever todos os cenários do mundo real. Foi o caso da atualização 1809 do Windows 10, que excluiu arquivos pessoais, gerou problemas com arquivos zip e danificou drivers. A alternativa A está errada porque não há indício de adulteração; a falha é do próprio patch. As alternativas B e C atribuem os sintomas a desvios de configuração ou baseline, quando a causa é o patch defeituoso."
  },
  {
    "t": "Qual das possíveis métricas de resposta a incidentes a seguir é menos útil para compreender a capacidade da organização de responder a incidentes?",
    "opts": [
      "A) Tempo médio de detecção",
      "B) Volume de alertas",
      "C) Tempo médio de resposta",
      "D) Tempo médio de remediação"
    ],
    "ans": 1,
    "exp": "Simplesmente conhecer o volume de alertas de uma organização não é uma métrica útil sem contexto. Isso pode indicar que a organização tem um sistema de alertas mal ajustado, que o sistema não detecta a maioria dos eventos ou que existem outros problemas. O tempo médio de detecção, o tempo médio de resposta e o tempo médio de remediação fornecem informações mais úteis, embora cada um também exija contexto."
  },
  {
    "t": "Por que um acordo de nível de serviço poderia levar uma organização a adiar a aplicação de patches?",
    "opts": [
      "A) Para forçar a conformidade do fornecedor",
      "B) Para manter a conformidade com o licenciamento",
      "C) Para atingir metas de governança organizacional",
      "D) Para cumprir as metas de desempenho definidas pelo SLA"
    ],
    "ans": 3,
    "exp": "Os acordos de nível de serviço (SLAs) frequentemente incluem metas de desempenho, como tempo de disponibilidade. Organizações que precisam cumprir um SLA podem adiar a aplicação de patches para garantir que atendam às suas garantias gerais de disponibilidade. SLAs e a aplicação de patches normalmente não são usados para forçar a conformidade dos fornecedores nem para garantir a conformidade com o licenciamento, e é improvável que afetem as metas de governança organizacional."
  },
  {
    "t": "Uma vulnerabilidade crítica está sendo ativamente explorada, com risco de comprometimento em larga escala. O fornecedor acabou de lançar o patch e a comunidade ainda não tem experiência com ele. Qual é a decisão MAIS adequada?",
    "opts": [
      "A) Adiar a instalação até que a comunidade acumule experiência, como regra invariável.",
      "B) Assumir o risco e aplicar o patch, já que o risco de segurança supera o risco de um patch defeituoso.",
      "C) Descartar o patch e tratar o caso exclusivamente por meio de gestão de configuração.",
      "D) Instalar somente após o fornecedor garantir formalmente que o patch é perfeito."
    ],
    "ans": 1,
    "exp": "As organizações precisam equilibrar a rapidez do patching com o risco de patches defeituosos. Quando os riscos de segurança são muito altos — como em uma exploração ativa —, elas optam por assumir o risco na esperança de evitar um comprometimento em larga escala. A alternativa A está errada porque aguardar a experiência da comunidade é prática comum \"se possível\", não regra invariável diante de ameaça ativa. A C está errada porque a gestão de configuração complementa, mas não substitui, a correção. A D está errada porque patches nunca podem ser considerados perfeitos."
  },
  {
    "t": "Um servidor web de produção executa uma aplicação com uma vulnerabilidade sendo ativamente explorada, mas o fornecedor ainda não lançou um patch. Qual das seguintes ações representa a MELHOR resposta imediata?",
    "opts": [
      "A) Implantar um WAF com regras de proteção que interrompam o exploit conhecido do serviço web.",
      "B) Registrar a vulnerabilidade como falso positivo no sistema de gestão de vulnerabilidades.",
      "C) Manter o serviço em operação normal enquanto aguarda o lançamento do patch.",
      "D) Redefinir a configuração de referência (baseline) do servidor para suprimir os alertas da varredura."
    ],
    "ans": 0,
    "exp": "Quando um patch não existe ou não pode ser instalado, controles compensatórios — métodos alternativos de proteção que alcançam o mesmo resultado do controle típico — devem ser usados. Implantar um WAF com regras que interrompam um exploit conhecido é um exemplo direto (outra opção seria desativar o serviço até que possa receber o patch). A alternativa B está errada porque a vulnerabilidade é real, não um falso positivo. A C deixa o sistema exposto a uma exploração ativa. A D apenas oculta o problema nos relatórios, sem proteger o serviço."
  },
  {
    "t": "Uma equipe implantou um controle compensatório para uma vulnerabilidade que não pode ser corrigida por motivos de negócio. Nas varreduras seguintes, o sistema de gestão de vulnerabilidades continua listando o item como não tratado. Qual é a causa MAIS provável?",
    "opts": [
      "A) O controle compensatório foi implementado incorretamente e não está funcionando.",
      "B) O scanner precisa ser atualizado com as assinaturas mais recentes do fornecedor.",
      "C) A vulnerabilidade reapareceu, indicando uma falha no processo de remediação.",
      "D) Controles compensatórios normalmente não são reconhecidos automaticamente por essas ferramentas e exigem documentação e sinalizações."
    ],
    "ans": 3,
    "exp": "Controles compensatórios normalmente não são compreendidos ou reconhecidos automaticamente pelas ferramentas de gestão de configuração e pelos sistemas de gestão de vulnerabilidades. Por isso, precisam ser documentados, com anotações ou sinalizações registradas para que a vulnerabilidade não continue sendo reportada da mesma forma. A alternativa A é possível, mas o comportamento descrito é o esperado mesmo com o controle funcionando. A B não resolve, pois o problema é de reconhecimento do controle, não de assinaturas. A C confunde o cenário com recorrência — aqui a detecção contínua é esperada."
  },
  {
    "t": "Uma organização implantou um controle compensatório temporário porque o patch disponível apresenta falhas conhecidas. Qual prática é a MAIS recomendada para a gestão contínua desse controle?",
    "opts": [
      "A) Tratar o controle como permanente para evitar mudanças futuras no ambiente.",
      "B) Definir períodos de revisão e, quando a necessidade for resolvida, instalar o patch e remover o controle.",
      "C) Transferir ao fornecedor a responsabilidade pela manutenção do controle compensatório.",
      "D) Remover o controle assim que qualquer patch for lançado, sem nova avaliação."
    ],
    "ans": 1,
    "exp": "Como os controles compensatórios não serão tratados pelos fornecedores, muitas organizações definem períodos de revisão — especialmente quando são temporários porque o patch não está disponível, está com falhas ou não pode ser instalado por motivos de negócio. Resolvida a necessidade, instala-se o patch ou a remediação normal e remove-se o controle, simplificando a gestão contínua. A alternativa A contraria a natureza temporária do controle. A C está errada porque fornecedores não tratam controles compensatórios. A D ignora que o patch atual tem falhas conhecidas e que a remoção exige reavaliação."
  },
  {
    "t": "Durante uma auditoria, constata-se que a equipe de conformidade desconhece quais sistemas operam sob controles compensatórios. No contexto de conscientização, educação e treinamento, o que auditores e equipes de conformidade precisam compreender?",
    "opts": [
      "A) Apenas os resultados consolidados das varreduras mais recentes.",
      "B) Somente as políticas de segurança formalmente aprovadas pela liderança.",
      "C) O perfil e as práticas de vulnerabilidades da organização, além de onde controles compensatórios estão em vigor e por que são ou não apropriados.",
      "D) Exclusivamente os detalhes técnicos das regras configuradas em cada controle."
    ],
    "ans": 2,
    "exp": "Auditores e equipes de conformidade precisam compreender tanto o perfil e as práticas de vulnerabilidades da organização quanto onde controles compensatórios ou outras soluções estão em vigor e por que são ou não apropriados. As alternativas A, B e D são restritivas demais: limitam a visão a varreduras, políticas formais ou detalhes técnicos, sem abranger o entendimento amplo do perfil de vulnerabilidades e da adequação dos controles compensatórios que é exigido desse grupo."
  },
  {
    "t": "Uma organização percebe que suas práticas de gestão de vulnerabilidades não atendem mais às necessidades do negócio, que evoluíram nos últimos anos. Como esse cenário deve ser tratado nos planos de ação?",
    "opts": [
      "A) Como mudança nos requisitos de negócio — um elemento menos frequente, porém importante, dos planos de ação.",
      "B) Como um caso de recorrência, exigindo investigação imediata das causas.",
      "C) Como uma falha de conscientização, a ser resolvida apenas com treinamento adicional.",
      "D) Como um controle compensatório permanente para as práticas defasadas."
    ],
    "ans": 0,
    "exp": "Requisitos e necessidades organizacionais mudam ao longo do tempo, e a própria gestão de vulnerabilidades pode exigir que a organização modifique suas práticas. Por isso, a mudança nos requisitos de negócio é uma parte menos frequente, mas ainda importante, dos planos de ação de gestão de vulnerabilidades. A alternativa B confunde o cenário com o reaparecimento de vulnerabilidades. A C reduz o problema a treinamento, quando se trata de adequar práticas a novos requisitos. A D aplica incorretamente o conceito de controle compensatório, que é um método alternativo de proteção, não um ajuste de práticas."
  },
  {
    "t": "Ian quer garantir que os patches sejam instalados como parte de uma linha de base para sua organização. Em que tipo de ferramenta ele deve investir como parte de seu plano geral de ação para remediação?",
    "opts": [
      "A) Um scanner de vulnerabilidades",
      "B) Uma ferramenta ou um sistema de gestão de configuração",
      "C) Um scanner de configuração de linha de base",
      "D) Uma ferramenta de detecção e resposta em endpoints (EDR)"
    ],
    "ans": 1,
    "exp": "O desejo de Ian de garantir a aplicação de patches em toda a sua infraestrutura indica a necessidade de uma ferramenta de gestão de configuração que possa ser usada para implantar patches em escala. Um scanner de vulnerabilidades não instala patches; scanners de configuração de linha de base ajudam a determinar se a linha de base está sendo atendida, mas não ajudam a mantê-la; e o EDR é usado para detectar software e atividades maliciosas, não para aplicar patches ou manter um nível de aplicação de patches."
  },
  {
    "t": "Sally está preparando um relatório de resposta a incidentes. Qual parte do relatório tem como objetivo ajudar as organizações a compreender o resultado do incidente e os danos financeiros, à reputação ou de outra natureza?",
    "opts": [
      "A) A avaliação de impacto",
      "B) A linha do tempo",
      "C) O escopo",
      "D) As recomendações"
    ],
    "ans": 0,
    "exp": "As avaliações de impacto se concentram em descrever o que o incidente significa para a organização, incluindo impactos financeiros, à reputação ou de outra natureza. A linha do tempo, o escopo e as recomendações ajudam a descrever o incidente, mas não se concentram no impacto."
  },
  {
    "t": "Um analista de segurança está avaliando o processo de priorização de remediação de sua organização, que atualmente se baseia apenas nos itens listados em um relatório \"Top 10 vulnerabilidades\" gerado pela ferramenta de scanning. Qual é a principal limitação dessa abordagem?",
    "opts": [
      "A) Listas Top 10 medem exclusivamente o tempo de remediação, sem indicar quais ameaças são mais comuns.",
      "B) O número de itens em uma lista Top 10 é arbitrário, podendo haver mais de 10 itens críticos na organização.",
      "C) Listas Top 10 identificam apenas vulnerabilidades recorrentes, ignorando ameaças novas de alto impacto.",
      "D) Listas Top 10 substituem a necessidade de acompanhar tendências de gravidade e pontuação de risco."
    ],
    "ans": 1,
    "exp": "Listas Top 10 ajudam a identificar as maiores ameaças e vulnerabilidades mais comuns, mas confiar apenas nelas não é recomendado, pois o número é arbitrário e a organização pode ter mais de 10 itens críticos. A alternativa A inverte a função das listas, que servem justamente para apontar ameaças comuns. A C restringe incorretamente o escopo a vulnerabilidades recorrentes. A D confunde Top 10 com o acompanhamento de tendências, que são métricas complementares, não substitutas."
  },
  {
    "t": "Uma organização utiliza o padrão CVSS para classificar a gravidade de suas vulnerabilidades. Uma vulnerabilidade recém-descoberta recebeu uma pontuação base de 9,6. Como essa vulnerabilidade deve ser classificada nas métricas de vulnerabilidades críticas da organização?",
    "opts": [
      "A) A vulnerabilidade não pode ser classificada como crítica até que o fornecedor libere um patch correspondente.",
      "B) A vulnerabilidade é classificada como zero-day, já que qualquer pontuação acima de 9,0 indica que foi anunciada antes de existir um patch.",
      "C) A vulnerabilidade só é considerada crítica se também constar na lista Top 10 da organização.",
      "D) A vulnerabilidade é classificada como crítica, pois pontuações CVSS entre 9,0 e 10,0 refletem medidas como impacto, explorabilidade e modificadores temporais e ambientais."
    ],
    "ans": 3,
    "exp": "Organizações que se baseiam no CVSS consideram crítica uma pontuação entre 9,0 e 10,0, calculada a partir de impacto, explorabilidade e modificadores temporais e ambientais. A alternativa A está errada porque a classificação de criticidade não depende da existência de um patch. A B confunde criticidade com zero-day, que é definido pelo momento do anúncio em relação ao patch, não pela pontuação CVSS. A C está errada porque a presença em uma lista Top 10 não é condição para a classificação como crítica."
  },
  {
    "t": "Uma vulnerabilidade recém-divulgada está sendo ativamente explorada por atacantes, mas ainda não existe patch disponível, e o scanner de vulnerabilidades da organização não a detecta. Qual classificação melhor descreve essa vulnerabilidade, e por que o scanner atualmente não consegue identificá-la?",
    "opts": [
      "A) É uma vulnerabilidade zero-day; scanners de vulnerabilidades não conseguem identificá-la até receberem definições atualizadas ou novas capacidades de detecção.",
      "B) É uma vulnerabilidade crítica avaliada entre 9,0 e 10,0 no CVSS; o scanner ainda não recebeu os modificadores temporais necessários para pontuá-la.",
      "C) É uma vulnerabilidade recorrente; o scanner já havia sinalizado essa falha anteriormente, mas ela reapareceu sem nova avaliação.",
      "D) É uma falha coberta por um controle compensatório; por isso o scanner a ignora até que o controle seja removido."
    ],
    "ans": 0,
    "exp": "Zero-days são vulnerabilidades anunciadas antes de serem corrigidas; por serem desconhecidas, não podem ser identificadas por scanners até que recebam definições atualizadas ou capacidades de detecção. A alternativa B está errada porque a vulnerabilidade ainda não foi avaliada ou catalogada, o que impede uma pontuação CVSS. A C está errada porque recorrência pressupõe uma detecção anterior já registrada, o que não é o caso. A D está errada porque scanners não ignoram vulnerabilidades por causa de controles compensatórios — o problema aqui é a ausência de detecção."
  },
  {
    "t": "Uma empresa define, em contrato com um provedor de serviços de segurança gerenciada, que todas as vulnerabilidades de alta severidade devem ser remediadas em até 15 dias. Qual termo melhor descreve essa meta, e como sua conformidade costuma ser acompanhada?",
    "opts": [
      "A) É uma métrica de vulnerabilidade crítica; a conformidade é acompanhada comparando-a com a lista Top 10 da organização.",
      "B) É uma métrica de tendência; a conformidade é acompanhada medindo o número de vulnerabilidades que recorrem após o prazo definido.",
      "C) É um objetivo de nível de serviço (SLO); a conformidade é comumente acompanhada medindo se as metas estão sendo cumpridas e onde existem lacunas.",
      "D) É uma métrica de resposta a zero-day; a conformidade é acompanhada medindo a velocidade de atualização das definições do scanner."
    ],
    "ans": 2,
    "exp": "SLOs descrevem métricas específicas, como tempo para remediar ou aplicar patches, definidas pela organização ou como parte de um acordo de nível de serviço com um fornecedor. Medir se essas metas estão sendo cumpridas e onde há lacunas é elemento comum da gestão desses acordos. A alternativa A está errada porque comparação com Top 10 não é o método de acompanhamento de SLOs. A B confunde o conceito com métricas de tendência, que tratam de volume e recorrência, não de metas contratuais. A D aplica incorretamente um conceito de resposta a zero-day a um cenário de meta contratual de remediação."
  },
  {
    "t": "Um CISO argumenta que o sistema de gestão de vulnerabilidades da organização, por si só, já é suficiente para proteger contra ataques zero-day, já que rastreia e reporta vulnerabilidades críticas de forma eficaz. Qual é a principal falha nesse raciocínio?",
    "opts": [
      "A) Vulnerabilidades zero-day são automaticamente classificadas como críticas pelo CVSS assim que são anunciadas, tornando desnecessários controles adicionais.",
      "B) Zero-days aparecem sem aviso e já estão em uso ativo; um sistema de gestão de vulnerabilidades não fornece, na maioria dos casos, o tempo de resposta necessário para esse tipo de ameaça.",
      "C) O reporte de vulnerabilidades críticas substitui a necessidade de controles compensatórios durante um evento de zero-day.",
      "D) Sistemas de gestão de vulnerabilidades identificam zero-days imediatamente, mas não conseguem aplicar patches de forma automática."
    ],
    "ans": 1,
    "exp": "Zero-days são difíceis de rastrear porque aparecem sem aviso e já estão em uso quando descobertos; depender de um sistema de gestão de vulnerabilidades para proteção contra esse tipo de ataque normalmente não garante o tempo de resposta necessário. A alternativa A está errada porque uma vulnerabilidade não pode ser pontuada ou classificada antes de ser conhecida e catalogada. A C está errada porque o reporte de vulnerabilidades críticas não substitui os controles compensatórios usados durante a resposta a zero-days. A D está errada porque o problema central é justamente a incapacidade de identificação imediata, não apenas a aplicação de patches."
  },
  {
    "t": "Uma organização opera um sistema embarcado especializado em parceria com outra entidade. O acordo firmado entre as partes define metas de uptime e especifica qual organização de suporte está autorizada a trabalhar no sistema, restringindo a instalação de patches. Qual inibidor da remediação esse cenário descreve?",
    "opts": [
      "A) Acordo de nível de serviço (SLA), pois define métricas de desempenho contratuais.",
      "B) Sistema proprietário, pois o fornecedor impõe requisitos específicos de atualização.",
      "C) Memorando de entendimento (MOU), que pode impor metas de uptime e limitar quem pode trabalhar no sistema ou instalar patches.",
      "D) Governança organizacional, pois há um processo formal restringindo as atividades da equipe."
    ],
    "ans": 2,
    "exp": "MOUs podem conter metas de desempenho ou uptime que afetam a retirada de sistemas do ar para patching e podem especificar uma organização de suporte ou outras limitações sobre quem pode trabalhar no sistema — algo particularmente comum em sistemas embarcados e especializados, sensíveis a mudanças de software. A alternativa A é próxima, mas SLAs tratam de termos que influenciam metas de desempenho, não da designação de quem pode atuar no sistema. A B está errada porque a restrição vem do acordo entre as partes, não de requisitos do fabricante. A D refere-se a processos internos de negócio e validação, não a acordos com outra entidade."
  },
  {
    "t": "Após a aplicação de um patch de segurança em um servidor, protocolos mais antigos foram desativados e a integração com dispositivos de parceiros parou de funcionar. Qual inibidor da remediação esse incidente exemplifica?",
    "opts": [
      "A) Interrupção de processos de negócio, pois o serviço precisou ficar indisponível durante a aplicação.",
      "B) Sistema legado, pois os dispositivos parceiros dependem de tecnologia antiga.",
      "C) Governança organizacional, pois faltou um processo de validação antes da aplicação.",
      "D) Degradação de funcionalidade, pois o patch desativou protocolos antigos e quebrou a conectividade e a integração com outros sistemas."
    ],
    "ans": 3,
    "exp": "Alguns patches podem degradar a funcionalidade — desabilitando ou modificando serviços, ou desativando protocolos mais antigos, o que quebra a conectividade ou a integração com outros sistemas e dispositivos. Compreender o impacto da remediação inclui procurar mudanças que afetem configurações de infraestrutura existentes. A alternativa A trata de indisponibilidade durante o patching, não de perda de função após a aplicação. A B desloca o problema para os parceiros, quando o inibidor descrito é o efeito do patch em si. A C aponta uma possível melhoria de processo, mas não classifica o inibidor demonstrado no cenário."
  },
  {
    "t": "Um sistema legado crítico para o negócio possui uma vulnerabilidade sem patch disponível. A equipe implantou um controle compensatório, mas ele não consegue remediar totalmente a vulnerabilidade. Qual é a ação MAIS apropriada?",
    "opts": [
      "A) Desativar o sistema imediatamente até que um patch seja disponibilizado.",
      "B) Fazer uma escolha baseada em risco, ponderando a vulnerabilidade contra a necessidade do sistema para a organização.",
      "C) Remover o controle compensatório, já que ele não elimina completamente o risco.",
      "D) Reclassificar a vulnerabilidade como falso positivo, pois um controle já está em vigor."
    ],
    "ans": 1,
    "exp": "Em sistemas legados sem patch disponível, controles compensatórios podem ser a única opção; quando o controle não remedia totalmente a vulnerabilidade, a organização precisa fazer escolhas baseadas em risco entre a vulnerabilidade e a necessidade do sistema ou serviço. A alternativa A ignora a criticidade do sistema para o negócio e não pondera o risco. A C piora a situação, removendo a única proteção parcial existente. A D é incorreta porque a vulnerabilidade é real e permanece parcialmente presente — um controle compensatório não a transforma em falso positivo."
  },
  {
    "t": "O fabricante de uma aplicação comercial informa que a instalação de determinadas versões de patch fará a organização perder o suporte contratado. A política interna, porém, exige a remediação de todas as vulnerabilidades conhecidas. Qual inibidor da remediação melhor descreve esse conflito?",
    "opts": [
      "A) Sistema proprietário, pois os requisitos impostos pelo fornecedor criam um conflito entre a política de gestão de vulnerabilidades e os requisitos funcionais ou de negócio.",
      "B) Memorando de entendimento (MOU), pois há um acordo restringindo a atuação da equipe interna.",
      "C) Interrupção de processos de negócio, pois o suporte do fornecedor seria interrompido.",
      "D) Acordo de nível de serviço (SLA), pois o contrato de suporte define métricas obrigatórias."
    ],
    "ans": 0,
    "exp": "Sistemas proprietários podem não ter patches disponíveis ou ter requisitos específicos impostos pelos fornecedores — a organização pode ficar impossibilitada de instalar patches ou versões específicas e ainda manter o suporte, gerando conflito entre a política de gestão de vulnerabilidades e os requisitos funcionais ou de negócio. A alternativa B está errada porque não se trata de acordo entre organizações parceiras, e sim de imposição do fabricante. A C distorce o conceito, que se refere à indisponibilidade de sistemas, não à perda de suporte. A D está errada porque o cenário não envolve metas de desempenho ou uptime."
  },
  {
    "t": "Jaime está preocupada com a possibilidade de sua organização enfrentar vários obstáculos à remediação. Qual dos seguintes obstáculos à remediação está mais frequentemente associado a metas de desempenho ou de disponibilidade?",
    "opts": [
      "A) Governança organizacional",
      "B) Sistemas legados",
      "C) Memorandos de entendimento",
      "D) Sistemas proprietários"
    ],
    "ans": 2,
    "exp": "Memorandos de entendimento (MOUs) frequentemente estão associados a metas de desempenho ou de disponibilidade que podem não ser cumpridas se os sistemas forem colocados offline para a aplicação de patches. Jaime deve revisar os projetos de sua infraestrutura, os MOUs e os processos de aplicação de patches para determinar se todos são adequados ao que sua organização consegue realizar e precisa fazer para permanecer segura."
  },
  {
    "t": "Selah quer incluir trechos de logs relevantes em seu relatório de incidente. Em qual seção do relatório os logs são incluídos com mais frequência?",
    "opts": [
      "A) Na linha do tempo",
      "B) Como parte do resumo executivo",
      "C) Como evidências no apêndice",
      "D) Como parte das recomendações"
    ],
    "ans": 2,
    "exp": "Evidências detalhadas, como logs, normalmente são anexadas como evidências em um apêndice."
  },
  {
    "t": "Uma analista documentou diversos inibidores da remediação em sua organização e precisa propor tratamentos. Quais inibidores frequentemente podem ser resolvidos por meio de mudanças no processo organizacional?",
    "opts": [
      "A) Interrupção de processos de negócio, sistemas legados e sistemas proprietários.",
      "B) Apenas a degradação de funcionalidade causada por patches.",
      "C) Questões de governança, SLA e MOU.",
      "D) Nenhum deles — todos os inibidores exigem mudanças na infraestrutura ou no design de software."
    ],
    "ans": 2,
    "exp": "Alguns inibidores podem ser resolvidos por mudanças no processo organizacional — governança, SLA e questões de MOU frequentemente podem ser tratadas dessa forma. Já preocupações com interrupção de processos de negócio, sistemas legados e sistemas proprietários costumam ser melhoradas por mudanças na infraestrutura ou no design de software e serviços. A alternativa A lista justamente o grupo tratado por mudanças de infraestrutura/design, não de processo. A B é restritiva e incorreta. A D está errada porque desconsidera que parte dos inibidores se resolve no nível de processo, sendo importante, em todos os casos, documentar a questão e decidir com base em risco e políticas."
  },
  {
    "t": "Um novo analista de um SOC pergunta ao coordenador de resposta a incidentes em que momento do processo de IR a comunicação deve ocorrer e quando os relatórios normalmente são produzidos. Qual é a resposta correta?",
    "opts": [
      "A) A comunicação e os relatórios ocorrem exclusivamente durante a fase de Contenção, Erradicação e Recuperação.",
      "B) Os relatórios são gerados continuamente durante o incidente, enquanto a comunicação se restringe à fase de Detecção e Análise.",
      "C) A comunicação deve começar somente após a contenção do incidente, quando os fatos já estiverem confirmados.",
      "D) A comunicação ocorre ao longo de todo o processo de IR, enquanto os relatórios estão mais associados à atividade pós-incidente, baseados na análise de causa raiz e nas lições aprendidas."
    ],
    "ans": 3,
    "exp": "A comunicação acontece durante todo o processo de resposta a incidentes, enquanto os relatórios são mais comumente associados à atividade pós-incidente, apoiando-se na análise de causa raiz e na revisão de lições aprendidas conduzidas ao final do processo. As alternativas A e B restringem indevidamente comunicação e relatórios a fases específicas, contrariando a natureza contínua da comunicação. A alternativa C atrasa a comunicação, que deve ocorrer desde o início — inclusive durante a detecção e a contenção — e não apenas após a confirmação completa dos fatos."
  },
  {
    "t": "Durante um incidente de segurança, as equipes de resposta trabalharam isoladamente, sem trocar informações sobre o andamento das ações. Quais são as consequências MAIS prováveis dessa falha?",
    "opts": [
      "A) Redução do escopo do incidente e maior agilidade na recuperação dos sistemas.",
      "B) Falha em tratar totalmente o incidente e perda de apoio das partes interessadas à organização.",
      "C) Aumento da recorrência de vulnerabilidades nos relatórios das varreduras seguintes.",
      "D) Impossibilidade de identificar partes interessadas externas nas comunicações futuras."
    ],
    "ans": 1,
    "exp": "Sem comunicação adequada entre os respondentes, os processos de resposta a incidentes podem facilmente falhar em tratar totalmente o incidente ou causar a perda de apoio das partes interessadas à organização. A alternativa A inverte o efeito: a falta de comunicação prejudica a resposta, não a agiliza. A C mistura conceitos de gestão de vulnerabilidades (recorrência em varreduras) com falhas de comunicação em IR. A D não é consequência direta do isolamento das equipes durante um incidente — a identificação de stakeholders é uma atividade de planejamento definida em processos e políticas."
  },
  {
    "t": "Após um vazamento de dados, a equipe de resposta está listando os públicos que precisarão ser comunicados. Quais dos seguintes são considerados partes interessadas EXTERNAS na comunicação de resposta a incidentes?",
    "opts": [
      "A) Clientes, forças da lei, agências governamentais e a mídia.",
      "B) Assessoria jurídica interna, gerência e equipe de marketing.",
      "C) Respondentes de incidentes e administradores dos sistemas impactados.",
      "D) Desenvolvedores e outros especialistas nos serviços afetados."
    ],
    "ans": 0,
    "exp": "As partes interessadas externas incluem clientes, fornecedores de serviços, forças da lei, assessoria jurídica externa, agências governamentais ou outras organizações com papel de conformidade ou supervisão, e a mídia. As alternativas B, C e D listam apenas partes interessadas internas: assessoria jurídica da própria organização, gerência, equipes de comunicação e marketing, respondentes de incidentes, administradores de sistemas, desenvolvedores e demais especialistas nos sistemas impactados pertencem ao público interno da organização."
  },
  {
    "t": "Uma organização deseja garantir que, durante incidentes, as comunicações ocorram em tempo hábil, sejam adequadas ao público-alvo e apropriadas às suas necessidades e requisitos. Qual é a MELHOR abordagem para alcançar esse objetivo?",
    "opts": [
      "A) Delegar toda a comunicação à equipe técnica que responde ao incidente, por dominar os detalhes do ocorrido.",
      "B) Concentrar as comunicações na mídia, garantindo transparência a todos os públicos ao mesmo tempo.",
      "C) Definir processos de comunicação e papéis em processos e políticas, identificando as partes interessadas críticas.",
      "D) Iniciar as comunicações somente após a conclusão da análise de causa raiz, para evitar informações incorretas."
    ],
    "ans": 2,
    "exp": "As organizações frequentemente definem processos de comunicação e papéis estabelecidos em processos e políticas, além de identificar as partes interessadas críticas — é isso que garante comunicações em tempo hábil, adequadas ao público-alvo e apropriadas às necessidades e requisitos da organização. A alternativa A ignora que a comunicação envolve diversos papéis além da equipe técnica, como jurídico, gerência e marketing. A B trata a mídia como canal universal, quando ela é apenas uma das partes interessadas externas. A D atrasa a comunicação, que deve ocorrer ao longo de todo o processo, não apenas após a análise final."
  },
  {
    "t": "Uma ferramenta de monitoramento gera alertas com indicadores de comprometimento (IoCs) sugerindo atividade maliciosa em um servidor. Considerando o início dos processos de comunicação na resposta a incidentes, qual deve ser a primeira ação?",
    "opts": [
      "A) Ativar imediatamente o plano de comunicações de IR e notificar as partes interessadas.",
      "B) Iniciar a contenção do servidor afetado antes de qualquer comunicação interna.",
      "C) Comunicar os IoCs aos respondentes de incidentes para que determinem se apontam para um incidente ou um falso positivo.",
      "D) Declarar o incidente e avançar diretamente para a fase de erradicação e recuperação."
    ],
    "ans": 2,
    "exp": "Quando um incidente é detectado e a análise começa, os IoCs que motivaram a investigação precisam ser comunicados aos respondentes de incidentes, que então determinam se apontam para um incidente real ou um falso positivo. A alternativa A antecipa a ativação do plano de comunicações de IR, que ocorre apenas após a declaração do incidente. A B inverte a ordem do ciclo: a contenção vem depois da declaração. A D pula a determinação de incidente versus falso positivo, etapa necessária antes de qualquer declaração."
  },
  {
    "t": "Danielle concluiu seu relatório de incidente e quer garantir que sua organização se beneficie do processo. Que exercício é realizado com mais frequência após o relatório para melhorar os processos futuros de resposta a incidentes?",
    "opts": [
      "A) Treinamento para lidar com a mídia",
      "B) Elaboração de relatórios de conformidade para o governo",
      "C) Um exercício de lições aprendidas",
      "D) Um relatório obrigatório aos auditores"
    ],
    "ans": 2,
    "exp": "Um exercício de lições aprendidas é usado para garantir que as organizações aproveitem suas constatações e experiências com incidentes. O treinamento para lidar com a mídia é útil, e a necessidade dele pode ser uma lição aprendida, mas não é uma atividade de acompanhamento típica. Elaborar relatórios para o governo ou para auditores também não é uma etapa típica de melhoria de processos após um incidente."
  },
  {
    "t": "Em qual fase do ciclo de resposta a incidentes o treinamento para lidar com a mídia normalmente ocorre?",
    "opts": [
      "A) Preparação",
      "B) Detecção e análise",
      "C) Contenção, erradicação e recuperação",
      "D) Atividade pós-incidente"
    ],
    "ans": 0,
    "exp": "O treinamento costuma estar associado à fase de preparação do ciclo de vida da resposta a incidentes. Realizar treinamento para lidar com a mídia durante um incidente não é uma prática comum."
  },
  {
    "t": "Após analisar os IoCs recebidos, a equipe de resposta conclui que se trata de um incidente real, e não de um falso positivo. De acordo com o processo de IR, o que deve ocorrer na etapa de declaração de incidente?",
    "opts": [
      "A) A ativação do processo de resposta a incidentes da organização e do plano de comunicações de IR.",
      "B) O encerramento das comunicações até a conclusão da fase de recuperação.",
      "C) A transição imediata para a atividade pós-incidente, com análise de causa raiz.",
      "D) A revalidação dos IoCs por uma equipe externa antes de qualquer ação interna."
    ],
    "ans": 0,
    "exp": "Quando um incidente é declarado, o processo de resposta a incidentes da organização e o plano de comunicações de IR precisam ser ativados — essa é a etapa de declaração de incidente, que é seguida pela fase de contenção, erradicação e recuperação. A alternativa B contraria o princípio de que a comunicação acontece em todas as etapas do processo. A C pula fases do ciclo: a atividade pós-incidente vem somente após contenção, erradicação e recuperação. A D cria uma exigência inexistente — a determinação de incidente versus falso positivo cabe aos próprios respondentes de incidentes."
  },
  {
    "t": "Um coordenador de resposta a incidentes está orientando sua equipe sobre comunicação eficaz durante um incidente. Quais elementos os respondentes precisam conhecer ao longo de todo o processo?",
    "opts": [
      "A) Apenas os canais técnicos usados para reportar IoCs à equipe de detecção.",
      "B) Somente o momento adequado de acionar a mídia e as autoridades competentes.",
      "C) O conteúdo do relatório final, já que a comunicação se concentra na fase pós-incidente.",
      "D) Quem precisa saber o que está acontecendo, qual nível de detalhe cada um necessita e quando devem receber a informação."
    ],
    "ans": 3,
    "exp": "A comunicação acontece em todas as etapas do processo de IR, e os respondentes precisam estar cientes de quem precisa saber o que está acontecendo, qual nível de detalhe essas pessoas necessitam e quando precisam receber essa informação. A alternativa A restringe a comunicação a um único fluxo técnico. A B limita o escopo a públicos externos específicos, que são apenas uma parte das comunicações possíveis. A C está errada porque a comunicação não se concentra na fase pós-incidente — ela ocorre ao longo de todo o processo."
  },
  {
    "t": "Durante a resposta a um incidente envolvendo exposição de dados, a diretoria de uma empresa avalia que provavelmente enfrentará processos judiciais movidos por clientes afetados. Qual parte interessada é a MAIS apropriada para ser acionada nesse cenário?",
    "opts": [
      "A) A assessoria jurídica interna, único canal adequado para qualquer aconselhamento em incidentes.",
      "B) A assessoria jurídica externa, acionada quando a organização acredita que pode enfrentar ação legal ou precisa de aconselhamento especializado relacionado ao incidente.",
      "C) A equipe de relações públicas, que assumirá a condução das questões judiciais decorrentes do incidente.",
      "D) O órgão regulador competente, que se encarregará da defesa jurídica da organização."
    ],
    "ans": 1,
    "exp": "A assessoria jurídica externa pode ser acionada quando a organização acredita que pode enfrentar uma ação legal ou por questões especializadas relacionadas ao incidente. A alternativa A está errada porque a assessoria interna atua tipicamente em aconselhamento envolvendo dados sensíveis, conformidade ou RH — o cenário de litígio provável aponta para a externa, e a interna não é o único canal. A C confunde papéis: RP trata de danos reputacionais, não da condução de questões judiciais. A D é incorreta porque órgãos reguladores exercem supervisão, não a defesa jurídica da organização."
  },
  {
    "t": "Uma organização sofreu um incidente de grande porte, com alta probabilidade de danos à sua reputação. Considerando as práticas de comunicação na resposta a incidentes, qual é a ação MAIS adequada nesse cenário?",
    "opts": [
      "A) Restringir todas as comunicações à equipe técnica de resposta até a recuperação completa.",
      "B) Envolver automaticamente a assessoria jurídica, já que todo incidente exige essa etapa.",
      "C) Acionar organizações ou profissionais especializados em relações públicas (RP).",
      "D) Transferir a responsabilidade pela comunicação ao fornecedor dos sistemas afetados."
    ],
    "ans": 2,
    "exp": "As organizações podem optar por acionar organizações ou profissionais especializados em RP durante incidentes, particularmente em incidentes de grande porte ou naqueles em que danos reputacionais são prováveis — exatamente o cenário descrito. A alternativa A isola a comunicação na equipe técnica, ignorando os demais públicos. A B está errada porque envolver a assessoria jurídica é parte de um processo de decisão, e não uma etapa automática da resposta a incidentes. A D terceiriza indevidamente uma responsabilidade que é da própria organização impactada."
  },
  {
    "t": "Uma empresa enfrentou dificuldades em um incidente anterior: demorou a decidir se notificava os clientes sobre uma exposição de dados e divulgou informações que depois se mostraram incorretas. Qual é a MELHOR medida para reduzir esses problemas em incidentes futuros?",
    "opts": [
      "A) Determinar antecipadamente as práticas gerais de comunicação com clientes: quem será responsável, o que será comunicado e quando, e como as informações serão disponibilizadas.",
      "B) Adotar a regra de comunicar os clientes somente após o encerramento definitivo de todas as investigações.",
      "C) Eliminar as notificações de exposição de dados, já que elas prejudicam o processo de resposta.",
      "D) Criar um comunicado único e imutável, aplicado de forma idêntica a qualquer tipo de incidente."
    ],
    "ans": 0,
    "exp": "As organizações devem determinar suas práticas gerais para comunicação com clientes — quem será responsável, o que será comunicado e quando, e como as informações serão disponibilizadas. Ter essas práticas e os princípios da organização bem compreendidos assegura que menos problemas surjam, mesmo que elas mudem conforme o incidente específico. A alternativa B ignora que notificar pode ser fundamental para reter a confiança e proteger os clientes. A C está errada pelo mesmo motivo: a notificação pode ser crítica, apesar dos impactos no processo. A D contraria a necessidade de adaptar as práticas aos requisitos de cada incidente."
  },
  {
    "t": "Durante um incidente de segurança de grande repercussão, uma organização divulgou à imprensa informações inconsistentes entre si e desatualizadas sobre o andamento da resposta. Qual recomendação do NIST trata MAIS diretamente desse problema?",
    "opts": [
      "A) Realizar sessões práticas para os respondentes de incidentes como parte dos exercícios de IR.",
      "B) Estabelecer procedimentos de briefing da mídia com foco na sensibilidade das informações do incidente.",
      "C) Selecionar um ponto único de contato com a mídia e um substituto, para garantir cobertura.",
      "D) Manter um documento ou declaração de status da resposta a incidentes, para garantir consistência e tempestividade nas comunicações com a mídia."
    ],
    "ans": 3,
    "exp": "O NIST recomenda manter um documento ou declaração de status da resposta a incidentes exatamente para garantir consistência e tempestividade nas comunicações com a mídia — o oposto do problema descrito (informações inconsistentes e desatualizadas). A alternativa A prepara os respondentes por meio de exercícios, mas não assegura a uniformidade do conteúdo divulgado. A B foca no tratamento da sensibilidade das informações, não na sua consistência. A C resolve a questão de cobertura das interações com a mídia, e não a divergência e a desatualização das informações comunicadas."
  },
  {
    "t": "Uma equipe de segurança está usando o NIST SP 800-61r2 como referência para estruturar seus procedimentos de comunicação com a mídia. Qual consideração é a MAIS apropriada ao adotar esse guia?",
    "opts": [
      "A) Aplicar as recomendações sem ajustes, pois o guia foi recentemente atualizado para a versão 3.",
      "B) Avaliar o que pode ter mudado desde sua publicação, pois o guia é de 2012 e muitas recomendações não refletem as mídias sociais modernas nem a velocidade do ciclo atual de comunicações.",
      "C) Descartar o guia, pois documentos do NIST não abrangem comunicações externas ou interações com a mídia.",
      "D) Restringir o uso do guia a incidentes sem exigências regulatórias de reporte."
    ],
    "ans": 1,
    "exp": "O NIST SP 800-61r2 foi lançado em 2012 e não foi atualizado para a versão 3, de modo que muitas de suas recomendações não refletem o impacto das mídias sociais modernas nem a velocidade do ciclo atual de comunicações. Ao revisar um padrão como esse, deve-se considerar o que mudou desde a publicação e pode impactar a organização. A alternativa A é factualmente incorreta, pois não há versão 3. A C está errada porque o guia contém justamente requisitos e diretrizes para comunicações externas e compartilhamento de informações. A D cria uma restrição inexistente — o guia se aplica à preparação para interação com a mídia independentemente do motivo da comunicação."
  },
  {
    "t": "Michelle está realizando uma análise de causa raiz. Qual das alternativas a seguir não é uma das quatro etapas comuns em um exercício de RCA?",
    "opts": [
      "A) Documentar a análise de causa raiz usando um gráfico ou diagrama",
      "B) Estabelecer uma linha do tempo dos eventos",
      "C) Determinar qual indivíduo ou equipe foi responsável pelo problema",
      "D) Identificar os problemas e eventos que ocorreram durante o evento e descrevê-los da forma mais completa possível"
    ],
    "ans": 2,
    "exp": "Os exercícios de análise de causa raiz não são concebidos nem destinados a determinar quem deve ser culpado. Em vez disso, concentram-se em identificar a causa raiz para que ela possa ser remediada."
  },
  {
    "t": "A organização em que Charles trabalha sofreu um incidente significativo. Qual das alternativas a seguir tem maior probabilidade de exigir que a organização comunique o incidente dentro de um prazo específico?",
    "opts": [
      "A) Política organizacional",
      "B) Governança interna",
      "C) Conformidade regulatória",
      "D) Exigências da mídia"
    ],
    "ans": 2,
    "exp": "As exigências internas dificilmente obrigarão a apresentação de um relatório de incidente dentro de um prazo específico, pois normalmente reconhecem a complexidade da resposta a incidentes. Embora a mídia possa querer um relatório dentro de determinado prazo, isso não exige uma resposta. Entre os itens listados, a conformidade regulatória é o principal fator que exige a apresentação de relatórios dentro de um prazo específico para a maioria das organizações."
  },
  {
    "t": "Uma operadora de infraestrutura crítica nos Estados Unidos sofreu um ataque de ransomware capaz de causar dano demonstrável à saúde e segurança públicas, e a diretoria decidiu efetuar o pagamento do resgate. De acordo com o CIRCIA, quais são os prazos de reporte aplicáveis?",
    "opts": [
      "A) O incidente substancial deve ser reportado à CISA em até 72 horas, e o pagamento do ransomware em no máximo 24 horas após ser realizado.",
      "B) O incidente e o pagamento devem ser reportados juntos à CISA em até 24 horas contadas a partir da detecção do ataque.",
      "C) O incidente deve ser reportado à CISA em até 24 horas, e o pagamento do ransomware em até 72 horas após ser realizado.",
      "D) Ambos os reportes devem ocorrer em até 72 horas, contadas a partir do momento do pagamento do resgate."
    ],
    "ans": 0,
    "exp": "O CIRCIA (2022) exige que incidentes cibernéticos substanciais — passíveis de resultar em dano demonstrável a interesses como segurança nacional, relações exteriores, economia, confiança pública, liberdades civis ou saúde e segurança públicas — sejam reportados à CISA em até 72 horas, e que pagamentos de ransomware sejam reportados em no máximo 24 horas após o pagamento ser realizado. A alternativa C inverte os dois prazos. A B cria um prazo único de 24 horas inexistente e usa a detecção como marco para o pagamento. A D unifica indevidamente os prazos em 72 horas e aplica o marco temporal errado ao reporte do incidente."
  },
  {
    "t": "Uma organização multinacional atua em diferentes países e setores regulados. Qual é a MELHOR prática para garantir que suas obrigações de reporte de incidentes permaneçam em conformidade ao longo do tempo?",
    "opts": [
      "A) Adotar exclusivamente o CIRCIA como referência global, já que ele abrange todos os cenários de reporte regulatório.",
      "B) Padronizar um prazo interno único de 72 horas para qualquer notificação, independentemente da jurisdição ou do setor.",
      "C) Revisar cuidadosamente os requisitos legais existentes e conduzir avaliações contínuas de novas leis e regulamentações.",
      "D) Reportar somente os incidentes que receberem cobertura da mídia, quando a divulgação se tornar inevitável."
    ],
    "ans": 2,
    "exp": "Como o reporte determinado por regulamentações varia conforme localidade, setor e diversos outros fatores, as organizações precisam realizar uma revisão cuidadosa dos requisitos legais existentes e conduzir avaliações contínuas de novas leis e regulamentações para permanecerem em conformidade. A alternativa A está errada porque o CIRCIA é uma lei dos Estados Unidos voltada a incidentes específicos, não uma referência global aplicável a todas as jurisdições. A B ignora que prazos e exigências variam entre localidades e setores. A D não constitui prática de conformidade — as obrigações legais de reporte existem independentemente da cobertura midiática."
  },
  {
    "t": "Uma organização identificou que está sob ataque de um ator estatal (nation-state actor), cuja capacidade excede a sua para conter a ameaça, e avalia envolver as forças da lei. O que a organização deve compreender ANTES de tomar essa decisão?",
    "opts": [
      "A) As forças da lei atuarão apenas como consultoras, sem interferir nas ações de contenção já planejadas pela equipe.",
      "B) O envolvimento das forças da lei pode alterar significativamente o processo de resposta, incluindo a apreensão de sistemas ou sua retirada de operação.",
      "C) O envolvimento das forças da lei é obrigatório sempre que um ator estatal for identificado, sem margem de decisão para a organização.",
      "D) A agência assumirá integralmente a comunicação com a mídia e demais partes externas, liberando a organização dessa responsabilidade."
    ],
    "ans": 1,
    "exp": "Envolver as forças da lei pode alterar o processo de resposta a incidentes de maneiras significativas — a agência pode precisar apreender sistemas, colocá-los fora de operação ou realizar outras ações que a organização poderia optar por não fazer se as forças da lei não estivessem envolvidas. A alternativa A minimiza indevidamente esse impacto, tratando a agência como mera consultora. A C está errada porque o envolvimento decorre da escolha da organização ou do interesse da própria agência quando o incidente parece criminal — e pode haver a opção de cooperar ou recusar. A D atribui às forças da lei responsabilidades de comunicação que permanecem com a organização."
  },
  {
    "t": "As forças da lei manifestaram interesse em conduzir uma investigação sobre um incidente ocorrido em uma empresa, e a diretoria pondera se deve participar. Qual é a conduta MAIS adequada nesse cenário?",
    "opts": [
      "A) Recusar a participação imediatamente, para evitar a apreensão de sistemas críticos ao negócio.",
      "B) Cooperar automaticamente, já que organizações nunca têm a opção de recusar participação em investigações.",
      "C) Delegar a decisão à equipe técnica de resposta, por ser a que melhor conhece os sistemas impactados.",
      "D) Decidir entre cooperar ou recusar com o aconselhamento da assessoria jurídica."
    ],
    "ans": 3,
    "exp": "A organização pode, às vezes, ter a opção de escolher cooperar ou recusar a participação em uma investigação, mas deve sempre tomar essa decisão com o aconselhamento da assessoria jurídica. A alternativa A é precipitada e ignora a avaliação jurídica necessária antes de qualquer recusa. A B está errada porque a cooperação nem sempre é compulsória — a opção de recusar pode existir. A C transfere indevidamente à equipe técnica uma decisão com implicações legais, que deve ser tomada com apoio da assessoria jurídica."
  },
  {
    "t": "Durante a atividade pós-incidente, uma equipe de resposta acabou de identificar e descrever, da melhor forma possível, os problemas e eventos que ocorreram como parte do incidente. De acordo com o processo de análise de causa raiz (RCA), qual é a próxima etapa?",
    "opts": [
      "A) Documentar a análise de causa raiz por meio de um diagrama ou gráfico.",
      "B) Diferenciar entre cada um dos eventos e os fatores causais.",
      "C) Estabelecer uma linha do tempo dos eventos, para determinar o que aconteceu e em que ordem.",
      "D) Implementar controles compensatórios para evitar a recorrência do incidente."
    ],
    "ans": 2,
    "exp": "As quatro etapas da RCA são: (1) identificar e descrever os problemas e eventos do incidente; (2) estabelecer uma linha do tempo, que ajuda a determinar o que aconteceu e em que ordem, auxiliando na identificação da(s) causa(s) raiz; (3) diferenciar eventos e fatores causais; e (4) documentar a análise. Concluída a primeira etapa, a próxima é a construção da linha do tempo. A alternativa B antecipa a terceira etapa, que depende da linha do tempo. A alternativa A corresponde à quarta e última etapa. A D não faz parte das etapas do processo de RCA."
  },
  {
    "t": "Ao conduzir uma RCA, um analista identifica um evento que contribuiu para o problema, mas que não foi a causa raiz do incidente. Como esse evento deve ser classificado?",
    "opts": [
      "A) Um fator causal, pois contribuiu para o problema sem ser a causa raiz.",
      "B) Um resultado da causa raiz, pois decorre diretamente dela.",
      "C) A própria causa raiz, pois participou da cadeia de eventos do incidente.",
      "D) Um falso positivo, que deve ser excluído da linha do tempo da análise."
    ],
    "ans": 0,
    "exp": "Na terceira etapa da RCA, é preciso determinar qual causa é a causa raiz, quais eventos são resultados da causa raiz e quais são fatores causais — ou seja, eventos que contribuíram para o problema, mas não foram a causa raiz, exatamente o caso descrito. A alternativa B está errada porque resultados da causa raiz são consequências dela, e não contribuintes para o problema. A C está errada porque participar da cadeia de eventos não torna o evento a causa subjacente do incidente. A D está errada porque o evento é real e relevante para a análise, devendo ser documentado, não descartado como falso positivo."
  },
  {
    "t": "Um gerente de segurança pretende usar o NIST SP 800-30 e o SP 800-39 como guias passo a passo para conduzir uma análise de causa raiz em sua organização. Qual limitação ele encontrará?",
    "opts": [
      "A) Os dois padrões proíbem o uso de diagramas e gráficos na documentação da RCA.",
      "B) Apenas o SP 800-30 menciona a RCA; o SP 800-39 não trata do assunto.",
      "C) Os padrões restringem a aplicação da RCA a incidentes de natureza criminal.",
      "D) Embora ambos descrevam a RCA como uma abordagem sistemática baseada em princípios, nenhum dos dois descreve como realizá-la."
    ],
    "ans": 3,
    "exp": "O NIST caracteriza a RCA, tanto no SP 800-30 quanto no SP 800-39, como uma abordagem sistemática e baseada em princípios para identificar causas subjacentes associadas a um conjunto específico de riscos — porém nenhum dos dois padrões descreve, de fato, como realizar uma. A alternativa A está errada porque diagramas e gráficos são justamente o meio frequente de documentação da RCA, sem qualquer proibição. A B está errada porque ambos os padrões mencionam a RCA. A C está errada porque a definição se refere a causas associadas a riscos, sem restrição a incidentes criminais."
  },
  {
    "t": "Após os testes, a equipe de Jim determinou que a instalação de um patch resultará em redução da funcionalidade devido à modificação de um serviço. O que Jim deve sugerir para lidar com esse obstáculo à remediação?",
    "opts": [
      "A) Submeter a mudança aos processos de governança organizacional.",
      "B) Identificar um controle compensatório.",
      "C) Substituir o sistema legado.",
      "D) Atualizar o acordo de nível de serviço."
    ],
    "ans": 1,
    "exp": "A melhor opção de Jim provavelmente será identificar um controle compensatório. Essa pode não ser uma solução adequada a longo prazo, e a organização de Jim pode precisar alterar seu serviço ou projeto para permitir a aplicação da correção de segurança. A governança organizacional não mudará o impacto funcional, nenhum sistema legado é mencionado e a questão também não cita um SLA."
  },
  {
    "t": "Qual das alternativas a seguir não é uma prática recomendada pelo NIST para auxiliar nos procedimentos de comunicação com a mídia?",
    "opts": [
      "A) Evitar contato com a mídia durante todo o processo de resposta a incidentes",
      "B) Estabelecer procedimentos para informar a mídia",
      "C) Manter um documento ou comunicado sobre o status da resposta a incidentes",
      "D) Treinamento para lidar com a mídia"
    ],
    "ans": 0,
    "exp": "O NIST reconhece a necessidade de lidar com a mídia e recomenda treinamento para isso, o estabelecimento de procedimentos para informar a mídia, a manutenção de um documento ou comunicado sobre o status da resposta a incidentes, a preparação da equipe para o contato com a mídia e para solicitações de informações, além da realização contínua de sessões de prática para os responsáveis pela resposta a incidentes como parte dos exercícios de resposta a incidentes."
  },
  {
    "t": "Após um incidente significativo, um diretor propõe que a reunião de lições aprendidas seja usada principalmente para identificar e responsabilizar formalmente os funcionários cujas falhas permitiram o ocorrido. Qual é a MELHOR orientação sobre o propósito desse processo?",
    "opts": [
      "A) O processo deve priorizar a atribuição de responsabilidade individual, garantindo consequências para os envolvidos.",
      "B) O processo deve se concentrar em descobrir como prevenir problemas futuros, impulsionando mudanças e a implementação de controles apropriados, e não em atribuir culpa.",
      "C) O processo deve se limitar a registrar o histórico do incidente, deixando mudanças e controles a cargo das auditorias de conformidade.",
      "D) O processo pode ser dispensado sempre que a causa raiz do incidente já tiver sido identificada."
    ],
    "ans": 1,
    "exp": "Os processos de lições aprendidas se concentram em descobrir como prevenir problemas futuros, e não em atribuir culpa, e devem ser usados para impulsionar mudanças e a implementação de controles apropriados. A alternativa A contraria diretamente esse princípio ao focar em culpabilização. A C reduz o exercício a mero registro, quando seu valor está em aplicar o conhecimento obtido. A D está errada porque saber como e por que o incidente ocorreu não ajuda a organização se esse conhecimento não for aplicado — a análise de lições aprendidas continua sendo fundamental."
  },
  {
    "t": "Por meio de análise forense, uma organização descobriu que esteve comprometida por uma ameaça persistente avançada durante mais de um ano antes de qualquer identificação do ataque. Qual métrica de resposta a incidentes é diretamente impactada por essa descoberta?",
    "opts": [
      "A) Tempo médio para responder, pois mede o intervalo até a ativação do processo de IR.",
      "B) Volume de alertas, pois comprova que os alertas estavam mal configurados.",
      "C) Tempo médio para remediar, pois o escopo do comprometimento aumentou com o tempo.",
      "D) Tempo médio para detectar, que mede do evento inicial até a detecção e resultaria em uma estatística muito ruim nesse caso."
    ],
    "ans": 3,
    "exp": "O tempo médio para detectar mede quanto tempo levou desde o evento inicial que resultou em um incidente até sua detecção, exige análise forense para ser determinado com precisão e ajuda a avaliar se as capacidades de detecção são adequadas às ameaças enfrentadas. Organizações comprometidas por APTs durante meses ou anos apresentam estatísticas muito ruins nessa métrica. A alternativa A trata do intervalo entre a detecção e a ativação do processo, etapa posterior. A B é uma inferência não sustentada — o volume de alertas é ambíguo por natureza. A C refere-se ao esforço de correção, não ao período sem detecção."
  },
  {
    "t": "Um analista precisa reportar a métrica que cobre o intervalo entre a detecção de um evento e a sua avaliação como incidente, com a consequente ativação do processo de resposta. Qual métrica corresponde a essa medição?",
    "opts": [
      "A) Tempo médio para responder.",
      "B) Tempo médio para detectar.",
      "C) Tempo médio para remediar.",
      "D) Volume de alertas."
    ],
    "ans": 0,
    "exp": "O tempo médio para responder mede o tempo desde a detecção até a avaliação do evento como um incidente e a ativação do processo. É importante diferenciá-lo do tempo médio para remediar, que varia conforme o tamanho e a complexidade do incidente. A alternativa B está errada porque o tempo médio para detectar cobre o intervalo anterior — do evento inicial até a detecção. A C refere-se à correção do incidente, medida mais complexa e influenciada pelo escopo de cada caso. A D não mede intervalos de tempo, sendo uma contagem de alertas de difícil interpretação."
  },
  {
    "t": "A liderança de segurança sugere adotar o volume de alertas como o principal KPI do SOC. Por que essa métrica costuma ser considerada falha, e qual seria uma medida mais útil?",
    "opts": [
      "A) Porque volumes altos sempre indicam ataques em andamento; uma medida mais útil seria o tempo médio para remediar.",
      "B) Porque só pode ser calculada por meio de análise forense; uma medida mais útil seria o tempo médio para detectar.",
      "C) Porque é difícil atribuir significado ao volume — ele pode indicar tanto alertas mal ajustados quanto um sistema eficaz e bem ajustado; mais útil seria verificar se os alertas ocorreram para incidentes e ativaram o processo de IR.",
      "D) Porque volumes baixos comprovam ineficácia da detecção; uma medida mais útil seria contabilizar apenas os alertas críticos gerados."
    ],
    "ans": 2,
    "exp": "O volume de alertas é considerado uma medida falha porque é difícil atribuir significado a um determinado volume: pode indicar alertas mal ajustados, poucos alertas eficazes ou, ao contrário, um sistema de detecção eficaz que gera apenas alertas críticos. Uma medida mais útil seria verificar se os alertas ocorreram para incidentes e resultaram na ativação do processo de IR, ou se incidentes foram descobertos por outras vias, indicando alertas mal configurados. As alternativas A e D fazem afirmações absolutas (\"sempre\", \"comprovam\") que ignoram a ambiguidade do volume. A B atribui ao volume uma característica do tempo médio para detectar."
  },
  {
    "t": "Uma equipe de segurança passou a divulgar mensalmente diversos números de métricas de resposta a incidentes, sem contexto significativo nem um processo definido para utilizá-los. Qual é o resultado MAIS provável dessa prática?",
    "opts": [
      "A) Melhoria automática dos processos de resposta, pois a simples visibilidade dos números gera responsabilização.",
      "B) As métricas não servirão para melhorar os processos e relatórios de IR e podem consumir recursos necessários em outros lugares.",
      "C) Redução imediata do tempo médio para detectar, devido ao maior foco da equipe nos indicadores.",
      "D) Atendimento pleno das obrigações regulatórias de reporte, dispensando outros relatórios."
    ],
    "ans": 1,
    "exp": "Organizações que implementam métricas e KPIs precisam compreender o que estão medindo e por quê. Fornecer números sem contexto significativo ou sem um processo para usá-los não serve para melhorar os processos e relatórios de resposta a incidentes e pode, na verdade, consumir recursos necessários em outros lugares. As alternativas A e C presumem benefícios automáticos que a simples divulgação de números não produz. A D está errada porque a prática descrita não guarda relação com o cumprimento de obrigações regulatórias, que possuem requisitos próprios de conteúdo e prazo."
  },
  {
    "t": "Durante a revisão de um incidente encerrado, a liderança de segurança quer identificar em quais momentos a equipe demorou a agir e quais metodologias o atacante utilizou ao longo do comprometimento. Qual componente do relatório de IR atende MELHOR a essa necessidade?",
    "opts": [
      "A) O resumo executivo, que apresenta o impacto e o status atual do incidente.",
      "B) A narrativa, que descreve os \"5 Ws\" do incidente.",
      "C) As recomendações, que documentam as ações corretivas necessárias.",
      "D) A linha do tempo, que delineia o que aconteceu e quando."
    ],
    "ans": 3,
    "exp": "A linha do tempo delineia o que aconteceu e quando, ajudando a estabelecer áreas de melhoria ao apontar onde ações não foram realizadas em tempo hábil ou onde houve atraso na resposta. Ela também pode evidenciar as metodologias dos atacantes e outras informações sobre processos e técnicas usados por atacantes e defensores — exatamente as duas necessidades do cenário. A alternativa A oferece apenas uma visão curta do incidente, sem detalhamento cronológico. A B descreve os 5 Ws, mas não mapeia atrasos na resposta. A C traz ações derivadas de lições aprendidas, não a reconstrução temporal dos eventos."
  },
  {
    "t": "Um executivo sem formação técnica precisa compreender rapidamente, logo no início do relatório, o que ocorreu no incidente, qual foi seu impacto e qual é seu status atual ou resolução. Qual componente do relatório de IR atende a essa necessidade?",
    "opts": [
      "A) O resumo executivo.",
      "B) A narrativa com os \"5 Ws\".",
      "C) A linha do tempo dos eventos.",
      "D) As recomendações baseadas em lições aprendidas."
    ],
    "ans": 0,
    "exp": "A maioria dos relatórios começa com um resumo executivo, que fornece uma explicação curta e claramente escrita do incidente, seu impacto e seu status atual ou resolução — exatamente o que o executivo precisa no início do documento. A alternativa B detalha o incidente por meio dos 5 Ws, mas não é a visão breve de abertura. A C reconstrói a cronologia dos eventos, servindo à análise de atrasos e metodologias, não à compreensão rápida. A D apresenta o que deu certo, o que melhorar e ações corretivas, sem cumprir o papel de síntese inicial do incidente."
  },
  {
    "t": "Em qual fase do ciclo de resposta a incidentes do NIST um relatório de incidente normalmente é preparado?",
    "opts": [
      "A) Detecção e análise",
      "B) Atividade pós-incidente",
      "C) Preparação",
      "D) Contenção, erradicação e recuperação"
    ],
    "ans": 1,
    "exp": "A atividade pós-incidente normalmente inclui o relatório de incidente no ciclo de resposta a incidentes do NIST."
  },
  {
    "t": "A equipe de segurança em que Chris trabalha foi notificada sobre uma vulnerabilidade de dia zero no Windows Server, divulgada mais cedo naquela manhã. O gerente de Chris pede que ele verifique imediatamente os relatórios recentes de vulnerabilidades para determinar se a organização foi afetada. O que Chris deve dizer ao seu gerente?",
    "opts": [
      "A) Que os relatórios precisarão ser executados novamente para listar a vulnerabilidade de dia zero.",
      "B) Que ele precisa atualizar o scanner de vulnerabilidades para detectar a vulnerabilidade de dia zero.",
      "C) Que vulnerabilidades de dia zero não aparecerão em relatórios de gestão de vulnerabilidades executados anteriormente.",
      "D) Que vulnerabilidades de dia zero não podem ser detectadas."
    ],
    "ans": 2,
    "exp": "Chris sabe que, por se tratar de uma vulnerabilidade de dia zero, o scanner ainda não teria uma regra ou um perfil de detecção para ela. Isso significa que os relatórios e as varreduras executados anteriormente não a mostrarão. É possível que o fornecedor tenha disponibilizado um perfil ou uma regra de detecção para essa vulnerabilidade de dia zero, mas, com tão pouco tempo entre a divulgação e a solicitação, é improvável que isso já tenha ocorrido. Executar os relatórios novamente não mostrará vulnerabilidades desconhecidas, e vulnerabilidades de dia zero podem ser detectadas se houver uma regra."
  },
  {
    "t": "Ao redigir a narrativa de um relatório de resposta a incidentes, quais informações — comumente chamadas de \"5 Ws\" — devem ser descritas?",
    "opts": [
      "A) Quem, o quê, quando, onde e como.",
      "B) O quê, quando, onde, por quê e quanto custou.",
      "C) Quem, o quê, quando, onde e por quê.",
      "D) Quem, por quê, como, com o quê e onde."
    ],
    "ans": 2,
    "exp": "A narrativa do relatório deve descrever as informações comumente chamadas de \"5 Ws\": quem (who), o quê (what), quando (when), onde (where) e por quê (why). As alternativas A e D incluem \"como\" (e \"com o quê\"), que não fazem parte dos 5 Ws definidos para a narrativa. A alternativa B substitui \"quem\" por uma estimativa de custo, elemento que também não integra o conjunto dos 5 Ws."
  },
  {
    "t": "Uma organização percebe que suas equipes documentam e acompanham incidentes de formas divergentes, comprometendo a consistência das respostas. Qual medida MELHOR trata esse problema?",
    "opts": [
      "A) Permitir que cada equipe mantenha seu próprio formato de relatório, priorizando a flexibilidade.",
      "B) Adotar formulários, processos e procedimentos de acompanhamento de reporte padronizados, a exemplo do modelo fornecido pelo DHS e pela CISA.",
      "C) Restringir todos os relatórios ao resumo executivo, reduzindo as variações de conteúdo.",
      "D) Transferir a elaboração dos relatórios exclusivamente à assessoria jurídica externa."
    ],
    "ans": 1,
    "exp": "Formulários, processos e procedimentos de acompanhamento de reporte padronizados ajudam as organizações a responder de maneira consistente — o modelo do DHS/CISA é um exemplo, com seções que descrevem sistemas e softwares impactados e o indivíduo ou equipe que preparou o relatório. A alternativa A perpetua a inconsistência apontada no cenário. A C elimina componentes importantes, como narrativa, linha do tempo e recomendações. A D desloca indevidamente a preparação do relatório, que cabe a um indivíduo ou equipe da própria organização, sem resolver a falta de padronização."
  },
  {
    "t": "Ao elaborar a seção de recomendações de um relatório de resposta a incidentes, qual abordagem está alinhada às boas práticas?",
    "opts": [
      "A) Limitar a seção à lista de sistemas e softwares impactados pelo incidente.",
      "B) Basear a seção exclusivamente nas metodologias do atacante identificadas na linha do tempo.",
      "C) Reproduzir o conteúdo do resumo executivo, garantindo consistência entre as seções.",
      "D) Basear as recomendações nas lições aprendidas, documentando o que deu certo, o que poderia ser melhorado e as ações corretivas necessárias."
    ],
    "ans": 3,
    "exp": "As recomendações são frequentemente baseadas em lições aprendidas, incluindo a documentação do que deu certo, o que poderia ser melhorado e quais ações corretivas precisam ser tomadas. A alternativa A confunde a seção com a descrição de sistemas impactados, presente no modelo de relatório, mas que não constitui recomendação. A B restringe indevidamente a fonte das recomendações às metodologias do atacante, que são um insumo da linha do tempo. A C apenas duplica o resumo executivo, sem cumprir a função de orientar melhorias e ações corretivas."
  },
  {
    "t": "Após a resolução de um incidente, a diretoria solicita informações que a ajudem a compreender qual foi o resultado do incidente e quais questões ainda podem precisar ser resolvidas, incluindo danos financeiros e reputacionais. Qual componente do relatório de IR fornece essas informações?",
    "opts": [
      "A) O escopo, que enumera os elementos da organização atingidos pelo incidente.",
      "B) As evidências, que fornecem contexto sobre a investigação conduzida.",
      "C) A avaliação de impacto.",
      "D) A linha do tempo, que delineia o que aconteceu e quando."
    ],
    "ans": 2,
    "exp": "A avaliação de impacto ajuda as organizações a compreender qual foi o resultado de um incidente e quais questões podem precisar ser resolvidas, o que pode incluir danos financeiros, reputacionais ou de outra natureza — exatamente o que a diretoria solicitou. A alternativa A está errada porque o escopo descreve quais sistemas, serviços e elementos foram impactados, não o resultado nem os danos. A B está errada porque as evidências fornecem informações contextuais sobre o incidente, sem dimensionar seus resultados. A D está errada porque a linha do tempo trata da cronologia dos eventos, não das consequências."
  },
  {
    "t": "Um analista precisa preencher a seção do relatório que identifica quais sistemas, serviços e outros elementos da organização foram impactados pelo incidente. Qual componente corresponde a essa seção?",
    "opts": [
      "A) Escopo.",
      "B) Avaliação de impacto.",
      "C) Resumo executivo.",
      "D) Narrativa."
    ],
    "ans": 0,
    "exp": "O escopo descreve quais sistemas, serviços e outros elementos da organização foram impactados — exatamente a seção que o analista precisa preencher. A alternativa B está errada porque a avaliação de impacto trata do resultado do incidente e dos danos (financeiros, reputacionais ou de outra natureza), não da enumeração dos elementos atingidos. A C está errada porque o resumo executivo é uma explicação curta do incidente, seu impacto e status atual ou resolução. A D está errada porque a narrativa descreve os \"5 Ws\" do incidente, não a lista de sistemas e serviços afetados."
  },
  {
    "t": "Durante a investigação de um incidente, a equipe coletou um grande volume de evidências. De acordo com as práticas de elaboração de relatórios de IR, como essas evidências normalmente devem ser tratadas?",
    "opts": [
      "A) Devem ser mantidas fora do relatório, para não comprometer sua objetividade.",
      "B) Devem ser incorporadas integralmente ao resumo executivo, garantindo transparência à liderança.",
      "C) Devem substituir a linha do tempo, já que documentam os mesmos eventos.",
      "D) Devem ser anexadas como apêndice, podendo também ser resumidas no relatório, onde fornecem informações contextuais úteis."
    ],
    "ans": 3,
    "exp": "As evidências coletadas durante a investigação são frequentemente anexadas como um apêndice, mas também podem ser resumidas como parte do relatório, onde fornecem informações contextuais úteis sobre o incidente. A alternativa A está errada porque as evidências têm lugar no relatório, seja como apêndice, seja resumidas. A B está errada porque o resumo executivo é uma explicação curta do incidente, incompatível com a incorporação integral de evidências. A C está errada porque evidências e linha do tempo são componentes distintos, com funções diferentes no relatório."
  },
  {
    "t": "Uma organização lida com incidentes de complexidades variadas e questiona se todos os relatórios de IR devem ter o mesmo nível de detalhamento. Qual orientação está correta?",
    "opts": [
      "A) Todos os relatórios devem ser exaustivos, independentemente da complexidade do incidente.",
      "B) Os relatórios podem ser resumos relativamente breves, conforme as necessidades organizacionais e a complexidade do incidente, com detalhes aprofundados no próprio relatório ou em anexos e apêndices.",
      "C) O nível de detalhamento deve ser idêntico em todos os relatórios, para preservar a padronização.",
      "D) Detalhes aprofundados nunca devem constar de anexos ou apêndices, apenas do corpo do relatório."
    ],
    "ans": 1,
    "exp": "Dependendo das necessidades organizacionais e da complexidade do incidente, os relatórios podem ser resumos relativamente breves, com detalhes mais aprofundados incluídos no relatório ou como anexos e apêndices. As alternativas A e C impõem uniformidade de profundidade que contraria essa flexibilidade — padronização se refere a formulários, processos e procedimentos de acompanhamento, não a um nível fixo de detalhe. A D está errada porque anexos e apêndices são justamente um dos meios previstos para acomodar o detalhamento aprofundado."
  },
  {
    "t": "A organização de Mikayla identificou um problema contínuo com base nos relatórios de seu painel de gestão de vulnerabilidades. As tendências indicam que a aplicação de patches não está ocorrendo em tempo hábil e que patches não estão sendo instalados para algumas das vulnerabilidades mais críticas. O que Mikayla deve fazer se acreditar que os administradores de sistemas não estão priorizando a aplicação de patches?",
    "opts": [
      "A) Realizar atividades de conscientização, educação e treinamento.",
      "B) Avaliar mudanças nos requisitos de negócio.",
      "C) Implantar controles compensatórios.",
      "D) Envolver a gestão para punir os administradores que não estão aplicando patches."
    ],
    "ans": 0,
    "exp": "Mikayla sabe que a conscientização e a educação são o primeiro passo para garantir que os funcionários estejam cientes da importância da aplicação de patches. Seu primeiro passo deve ser garantir que existam atividades adequadas de conscientização, educação e treinamento. Não há indicação de mudanças nos requisitos de negócio, controles compensatórios só devem ser usados quando necessários, não como uma prática geral, e é improvável que a punição resolva os problemas subjacentes."
  },
  {
    "t": "A organização de Geeta opera um sistema crítico fornecido por um fornecedor que especifica que o sistema operacional não pode receber patches. Que tipo de solução Geeta deve recomendar quando seus relatórios de vulnerabilidades mostram que o sistema está com patches atrasados e possui vulnerabilidades críticas?",
    "opts": [
      "A) Marcar as vulnerabilidades como impossíveis de remediar e continuar as operações para garantir a continuidade dos negócios.",
      "B) Desligar o sistema até que uma solução possa ser identificada.",
      "C) Instalar o patch do sistema operacional e testar se ele causa problemas.",
      "D) Identificar e implantar um controle compensatório."
    ],
    "ans": 3,
    "exp": "Geeta deve identificar um controle compensatório que garanta adequadamente a segurança do sistema com impacto mínimo em sua funcionalidade. Exemplos podem incluir posicionar logicamente um firewall de rede à frente do dispositivo, movê-lo para um segmento de rede isolado e protegido ou para uma VLAN isolada e protegida, ou adicionar proteção de outra forma. Marcar a vulnerabilidade como impossível de remediar não protege o sistema nem a empresa; desligá-lo afetará a capacidade de funcionamento da organização; e instalar os patches pode causar problemas funcionais ou impedir o suporte do fornecedor."
  },
  {
    "t": "Além de comunicar sobre incidentes, qual outra finalidade os relatórios de resposta a incidentes cumprem nas organizações?",
    "opts": [
      "A) Substituir os exercícios de lições aprendidas realizados na fase pós-incidente.",
      "B) Atender exclusivamente às exigências de órgãos reguladores externos.",
      "C) Servir como meio de garantir consistência na resposta, na análise e no rastreamento ao longo do tempo.",
      "D) Registrar unicamente as metodologias utilizadas pelos atacantes."
    ],
    "ans": 2,
    "exp": "Os relatórios de resposta a incidentes ajudam as organizações a comunicar sobre incidentes e também servem como um meio de garantir consistência na resposta, na análise e no rastreamento ao longo do tempo. A alternativa A está errada porque os relatórios não substituem as lições aprendidas — as recomendações, inclusive, frequentemente se baseiam nelas. A B restringe indevidamente a finalidade dos relatórios a exigências externas. A D está errada porque as metodologias dos atacantes são apenas uma das informações que podem aparecer (por exemplo, na linha do tempo), não a finalidade do relatório."
  }
];
