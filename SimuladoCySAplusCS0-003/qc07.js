// Questões do arquivo Questionario_cap7(1).txt, na ordem original.
// Os números do TXT servem apenas como separadores de questões.
const Qs = [
  {
    "t": "O gerente de TI de uma organização propõe que os relatórios do scanner de vulnerabilidades sejam encaminhados diretamente às equipes de infraestrutura para correção imediata, sem revisão da equipe de segurança, já que a ferramenta automatiza a identificação das vulnerabilidades. Qual é o MELHOR argumento de um analista de cibersegurança contra essa proposta?",
    "opts": [
      "A) Os scanners não atribuem severidade às vulnerabilidades encontradas, cabendo ao analista classificar cada item antes da correção",
      "B) Os resultados exigem interpretação de um analista treinado para eliminar falsos positivos, priorizar a remediação e investigar causas-raiz",
      "C) Os scanners apenas identificam as vulnerabilidades, sem oferecer orientações de correção, cabendo ao analista pesquisar cada solução",
      "D) Os relatórios trazem somente o nome de cada vulnerabilidade, exigindo que o analista elabore as descrições técnicas para as equipes"
    ],
    "ans": 1,
    "exp": "Os scanners são muito eficazes em automatizar a identificação de vulnerabilidades, mas seus resultados precisam ser interpretados por um analista treinado para eliminar falsos positivos, priorizar as atividades de remediação e investigar as causas-raiz dos problemas relatados. A alternativa A é incorreta porque os relatórios já apresentam a severidade geral de cada vulnerabilidade (baixa, média, alta ou crítica); o papel do analista é priorizar, não suprir uma classificação ausente. A alternativa C é falsa porque, quando possível, o scanner inclui uma seção de solução com orientações detalhadas de correção para administradores, engenheiros de rede ou desenvolvedores. A alternativa D também está errada, pois, além do nome, os relatórios trazem uma descrição detalhada de cada vulnerabilidade."
  },
  {
    "t": "Durante a revisão de um relatório gerado pelo Nessus, um analista encontra uma vulnerabilidade de severidade alta: um servidor está utilizando SSL 2.0 e SSL 3.0, versões desatualizadas e inseguras do protocolo. Qual ação corretiva deve ser recomendada ao administrador?",
    "opts": [
      "A) Desativar o SSL 2.0 e manter o SSL 3.0 habilitado para preservar a compatibilidade com clientes legados",
      "B) Atualizar o servidor para a versão mais recente do SSL e reavaliar a vulnerabilidade em uma nova varredura",
      "C) Habilitar uma versão segura do protocolo TLS, mantendo o SSL 2.0 e 3.0 ativos como alternativa",
      "D) Desativar o SSL 2.0 e 3.0 e substituir seu uso por uma versão segura do protocolo TLS"
    ],
    "ans": 3,
    "exp": "As falhas do protocolo SSL fazem com que ele não seja mais considerado aceitável para uso, portanto a correção adequada é desativar o SSL 2.0 e 3.0 e substituir seu uso por uma versão segura do TLS. A alternativa A é incorreta porque mantém o SSL 3.0 habilitado, e essa versão também precisa ser desativada. A alternativa B falha porque nenhuma versão do SSL é considerada aceitável: o problema está no protocolo em si, e não em uma versão específica, então uma nova varredura continuaria apontando a vulnerabilidade. A alternativa C é a mais próxima da correta, pois adota o TLS, mas mantém as versões inseguras do SSL ativas, deixando a vulnerabilidade sem correção."
  },
  {
    "t": "Tom está analisando um relatório de varredura de vulnerabilidades e descobre que um dos servidores em sua rede apresenta uma vulnerabilidade de divulgação de endereço IP interno. Qual tecnologia provavelmente está sendo usada nessa rede e resultou nessa vulnerabilidade?",
    "opts": [
      "A) TLS",
      "B) NAT",
      "C) SSH",
      "D) VPN"
    ],
    "ans": 1,
    "exp": "Embora a rede possa oferecer suporte a qualquer um desses protocolos, as vulnerabilidades de divulgação de IP interno ocorrem quando uma rede usa a Tradução de Endereços de Rede (NAT) para mapear endereços IP públicos e privados, mas um servidor divulga inadvertidamente seu endereço IP privado a sistemas remotos."
  },
  {
    "t": "Qual das métricas do CVSS conteria informações sobre o tipo de acesso à conta que um invasor deve ter para executar um ataque?",
    "opts": [
      "A) AV",
      "B) C",
      "C) PR",
      "D) AC"
    ],
    "ans": 2,
    "exp": "A métrica de privilégios necessários (PR) indica o tipo de acesso à conta que o invasor deve ter."
  },
  {
    "t": "Um relatório do Nessus aponta que um servidor web aceita conexões com SSL 3.0. O administrador do servidor contesta o achado, afirmando que o protocolo foi desativado há meses e que se trata de um falso positivo. Qual seção do relatório o analista deve examinar PRIMEIRO para validar essa alegação?",
    "opts": [
      "A) Informações de risco, que apresentam o fator de risco e as pontuações CVSS atribuídas à vulnerabilidade",
      "B) Detalhes do plugin, que indicam o ID, a data de publicação e a data de modificação da verificação executada",
      "C) Saída, que exibe as informações retornadas pelo sistema remoto durante a sondagem, muitas vezes de forma literal",
      "D) Porta/hosts, que identifica os servidores afetados e os serviços específicos em que a vulnerabilidade foi detectada"
    ],
    "ans": 2,
    "exp": "A seção de saída mostra as informações detalhadas retornadas pelo sistema remoto quando sondado, frequentemente com a saída literal de um comando. Com ela, o analista entende por que o scanner relatou a vulnerabilidade e pode identificar falsos positivos; neste caso, verificaria se a resposta do servidor realmente evidencia o SSLv3 habilitado. A alternativa D é a mais próxima, pois indica onde o problema foi detectado (servidores e portas), mas não apresenta a evidência técnica que o comprova. A alternativa A ajuda a avaliar a severidade, não a confirmar a existência do achado. A alternativa B identifica a verificação que detectou o problema e suas datas, sem mostrar o que o sistema remoto efetivamente respondeu."
  },
  {
    "t": "Uma organização sujeita ao PCI DSS recebe um relatório de varredura indicando que um servidor web aceita conexões com SSL 3.0. A seção de saída classifica as cifras suportadas como de alta robustez, com chaves de 112 bits ou mais, e o gestor da área argumenta que, por isso, o servidor está em conformidade. Qual é a avaliação CORRETA do analista?",
    "opts": [
      "A) O servidor não está em conformidade, pois nenhuma versão do SSL atende à definição de criptografia forte do PCI SSC",
      "B) O servidor estará em conformidade se o SSL 2.0 for desativado, mantendo apenas o SSL 3.0 com cifras de alta robustez",
      "C) O servidor está em conformidade desde que também ofereça TLS 1.1 ou superior, pois a negociação selecionará a versão mais alta suportada",
      "D) O servidor está temporariamente em conformidade, pois as cifras de 112 bits ou mais compensam as falhas de padding do SSL 3.0"
    ],
    "ans": 0,
    "exp": "Conforme o PCI DSS v3.1, nenhuma versão do SSL atende à definição de criptografia forte do PCI SSC, e o NIST também determinou que o SSL 3.0 não é aceitável para comunicações seguras; a robustez das cifras não altera essa conclusão. A alternativa B é incorreta porque manter o SSL 3.0 continua violando o requisito. A alternativa C é a mais próxima, mas ignora que muitos navegadores implementam a escolha de versão de forma insegura, permitindo que um atacante rebaixe a conexão, como no POODLE; por isso, o SSL deve ser desativado por completo. A alternativa D está errada porque as fragilidades do protocolo, como o esquema de padding inseguro com cifras CBC, não são compensadas pelo tamanho da chave."
  },
  {
    "t": "Um analista avalia uma vulnerabilidade em um switch corporativo que só pode ser explorada por um atacante conectado à mesma rede local do equipamento; a exploração não é possível a partir da internet. Qual valor da métrica de vetor de ataque (AV) deve ser atribuído?",
    "opts": [
      "A) Rede (AV:N), pois a exploração ocorre por meio de comunicação de rede com o equipamento",
      "B) Local (AV:L), pois o atacante precisa de acesso lógico ao sistema afetado para explorá-lo",
      "C) Físico (AV:P), pois o atacante precisa estar presente nas instalações onde o switch está",
      "D) Adjacente à Rede (AV:A), pois exige acesso à rede local à qual o sistema está conectado"
    ],
    "ans": 3,
    "exp": "O valor Adjacente à Rede (AV:A) é atribuído quando o atacante precisa ter acesso à rede local à qual o sistema afetado está conectado, exatamente o cenário descrito; sua pontuação é 0.62. A alternativa A é a mais próxima, mas Rede (AV:N, 0.85) se aplica quando a vulnerabilidade pode ser explorada remotamente, por meio de uma rede, possibilidade que foi descartada. A alternativa B é incorreta porque Local (AV:L) exige acesso físico ou lógico ao próprio sistema afetado, e não apenas à rede em que ele está. A alternativa C erra porque Físico (AV:P) exige que o atacante toque fisicamente o dispositivo; estar presente nas instalações não basta para essa classificação."
  },
  {
    "t": "Ao revisar a pontuação CVSS de uma vulnerabilidade recém-descoberta, um analista quer separar os fatores que indicam o quão fácil é explorá-la daqueles que medem as consequências de uma exploração bem-sucedida. Qual conjunto de métricas avalia a explorabilidade da vulnerabilidade?",
    "opts": [
      "A) Vetor de Ataque, Complexidade do Ataque, Privilégios Necessários e Escopo",
      "B) Vetor de Ataque, Complexidade do Ataque, Privilégios Necessários e Interação do Usuário",
      "C) Complexidade do Ataque, Privilégios Necessários, Interação do Usuário e Confidencialidade",
      "D) Vetor de Ataque, Complexidade do Ataque, Interação do Usuário e Integridade"
    ],
    "ans": 1,
    "exp": "O CVSS avalia a vulnerabilidade em oito medidas: as quatro primeiras (Vetor de Ataque, Complexidade do Ataque, Privilégios Necessários e Interação do Usuário) medem a explorabilidade; as três últimas (Confidencialidade, Integridade e Disponibilidade) medem o impacto; e o Escopo é tratado por uma métrica própria. A alternativa A é a mais próxima, mas substitui Interação do Usuário pelo Escopo, que não integra o grupo de explorabilidade. A alternativa C troca o Vetor de Ataque por Confidencialidade, e a D troca Privilégios Necessários por Integridade; ambas misturam métricas de impacto, que medem as consequências da exploração, com métricas de explorabilidade."
  },
  {
    "t": "Um analista avalia uma vulnerabilidade em uma aplicação interna. A exploração só é possível quando o servidor apresenta condições especializadas, difíceis de encontrar em ambientes de produção, e o atacante precisa estar autenticado com uma conta de usuário comum, sem permissões administrativas. Quais valores devem ser atribuídos às métricas de complexidade do ataque (AC) e de privilégios necessários (PR)?",
    "opts": [
      "A) AC: Alta (H) e PR: Baixo (L)",
      "B) AC: Baixa (L) e PR: Baixo (L)",
      "C) AC: Alta (H) e PR: Alto (H)",
      "D) AC: Alta (H) e PR: Nenhum (N)"
    ],
    "ans": 0,
    "exp": "A complexidade do ataque é Alta (AC:H) quando a exploração requer condições especializadas difíceis de encontrar, e os privilégios necessários são Baixos (PR:L) quando o atacante precisa apenas de privilégios básicos de usuário. A alternativa B erra na complexidade: Baixa (AC:L) só se aplica quando nenhuma condição especializada é necessária. A alternativa C erra nos privilégios, pois Alto (PR:H) exige privilégios administrativos, e não apenas uma conta autenticada. A alternativa D também erra nos privilégios, já que Nenhum (PR:N) indica que o atacante não precisa se autenticar, o que não ocorre no cenário."
  },
  {
    "t": "Ao revisar o cálculo CVSS de uma vulnerabilidade classificada com privilégios necessários Alto (PR:H), um analista percebe que o valor atribuído a essa métrica foi 0.50, e não 0.27. Qual das alternativas explica corretamente essa diferença?",
    "opts": [
      "A) O Escopo foi classificado como Inalterado, condição em que o valor de PR:H sobe para 0.50",
      "B) O valor 0.50 corresponde a Baixo (PR:L) com Escopo Alterado, indicando erro na classificação",
      "C) O Escopo foi classificado como Alterado, condição em que o valor de PR:H passa a ser 0.50",
      "D) A complexidade do ataque foi classificada como Baixa (AC:L), elevando o valor de PR:H para 0.50"
    ],
    "ans": 2,
    "exp": "Na métrica de privilégios necessários, o valor Alto (PR:H) vale 0.27, mas passa a valer 0.50 quando o Escopo é Alterado. A alternativa A inverte a regra: com o Escopo Inalterado, o valor permanece 0.27. A alternativa B é incorreta porque Baixo (PR:L) vale 0.62, ou 0.68 com Escopo Alterado, e nunca 0.50; portanto, não há indício de erro na classificação. A alternativa D confunde métricas distintas: a complexidade do ataque tem pontuação própria (0.44 para Alta e 0.77 para Baixa), e o único fator que modifica o valor de PR é o Escopo."
  },
  {
    "t": "Um atacante envia a vários funcionários um e-mail com um link malicioso. A vulnerabilidade só é explorada com sucesso quando algum destinatário clica no link, sem perceber que está contribuindo para o ataque. Qual valor deve ser atribuído à métrica de interação do usuário (UI)?",
    "opts": [
      "A) Nenhuma (UI:N), pois o destinatário não tem consciência de que está participando do ataque",
      "B) Necessária (UI:R), pois a exploração depende da ação de um usuário além do próprio atacante",
      "C) Nenhuma (UI:N), pois todas as etapas técnicas da exploração são executadas pelo atacante",
      "D) Necessária (UI:R), pois o atacante precisa convencer a vítima a colaborar conscientemente"
    ],
    "ans": 1,
    "exp": "A interação do usuário é Necessária (UI:R) quando a exploração bem-sucedida requer a ação de um usuário além do atacante, como o clique do destinatário no link; sua pontuação é 0.62. A alternativa A erra porque a métrica considera apenas se a ação de outra pessoa é necessária, e não se ela sabe que está participando do ataque. A alternativa C é incorreta porque, sem o clique do destinatário, a exploração não ocorre; portanto, ela não depende apenas do atacante, condição exigida pelo valor Nenhuma (UI:N, 0.85). A alternativa D chega ao valor correto com uma justificativa errada: a métrica exige apenas a ação de outro usuário, não sua colaboração consciente, e no cenário a vítima nem percebe o ataque."
  },
  {
    "t": "Qual dos seguintes valores para a métrica de complexidade do ataque do CVSS indicaria que o ataque especificado é o mais simples de explorar?",
    "opts": [
      "A) Alta",
      "B) Média",
      "C) Baixa",
      "D) Severa"
    ],
    "ans": 2,
    "exp": "Uma complexidade de ataque “baixa” indica que a exploração da vulnerabilidade não exige nenhuma condição especial."
  },
  {
    "t": "Qual dos seguintes valores para uma métrica CVSS de confidencialidade, integridade ou disponibilidade indicaria o potencial de comprometimento total de um sistema?",
    "opts": [
      "A) N",
      "B) L",
      "C) M",
      "D) H"
    ],
    "ans": 3,
    "exp": "Um valor Alto (H) para uma métrica de impacto indica o potencial de perda completa de confidencialidade, integridade e/ou disponibilidade."
  },
  {
    "t": "Uma vulnerabilidade em um servidor de arquivos permite que um atacante obtenha trechos aleatórios dos dados armazenados, sem conseguir escolher quais informações serão expostas. A falha não permite nenhuma alteração de dados. Quais valores devem ser atribuídos às métricas de confidencialidade (C) e integridade (I)?",
    "opts": [
      "A) C: Baixa (L) e I: Nenhuma (N)",
      "B) C: Alta (H) e I: Nenhuma (N)",
      "C) C: Baixa (L) e I: Baixa (L)",
      "D) C: Nenhuma (N) e I: Nenhuma (N)"
    ],
    "ans": 0,
    "exp": "A confidencialidade é Baixa (C:L, 0.22) quando o acesso a algumas informações é possível, mas o atacante não controla quais são comprometidas; como não há alteração de dados, a integridade é Nenhuma (I:N, 0.00). A alternativa B superestima o impacto, pois Alta (C:H) exige que todas as informações do sistema sejam comprometidas. A alternativa C confunde divulgação com alteração: a integridade só seria Baixa se fosse possível modificar algumas informações. A alternativa D erra ao tratar a falta de controle do atacante como ausência de impacto, já que há exposição de dados, ainda que aleatória."
  },
  {
    "t": "Em um relatório de varredura, uma vulnerabilidade apresenta, entre os componentes de seu vetor CVSS, os valores UI:R, C:H e I:L (interação do usuário, confidencialidade e integridade, respectivamente). Qual descrição corresponde corretamente a esses valores?",
    "opts": [
      "A) A exploração não depende de outro usuário; todas as informações do sistema são comprometidas; algumas informações podem ser modificadas, sem controle do atacante sobre quais",
      "B) A exploração depende da ação de outro usuário; algumas informações podem ser acessadas, sem controle do atacante sobre quais; o atacante pode alterar qualquer informação à vontade",
      "C) A exploração depende da ação de outro usuário; todas as informações do sistema são comprometidas; o atacante pode alterar qualquer informação à vontade",
      "D) A exploração depende da ação de outro usuário; todas as informações do sistema são comprometidas; algumas informações podem ser modificadas, sem controle do atacante sobre quais"
    ],
    "ans": 3,
    "exp": "UI:R indica que a exploração requer a ação de um usuário além do atacante; C:H significa que todas as informações do sistema são comprometidas; e I:L indica que a modificação de algumas informações é possível, sem que o atacante controle quais. A alternativa A interpreta UI:R como se nenhuma interação fosse necessária, o que corresponde a UI:N. A alternativa B inverte os níveis de confidencialidade e integridade. A alternativa C descreve corretamente UI e C, mas trata a integridade como Alta (I:H), situação em que o atacante poderia alterar qualquer informação à vontade."
  },
  {
    "t": "Ao ser explorada, uma vulnerabilidade em um servidor web faz com que as páginas passem a carregar de forma muito lenta, embora o servidor continue ligado e respondendo às requisições. Qual valor deve ser atribuído à métrica de disponibilidade (A)?",
    "opts": [
      "A) Alta (A:H), pois os usuários percebem a interrupção na prestação do serviço",
      "B) Nenhuma (A:N), pois o servidor permanece ligado e continua atendendo às requisições",
      "C) Baixa (A:L), pois há degradação do desempenho, sem desligamento completo do sistema",
      "D) Nenhuma (A:N), pois a lentidão afeta apenas o desempenho, e não a disponibilidade"
    ],
    "ans": 2,
    "exp": "A disponibilidade é Baixa (A:L, 0.22) quando o desempenho do sistema é degradado, exatamente o que ocorre com a lentidão do servidor, que continua funcionando. A alternativa A superestima o impacto, pois Alta (A:H, 0.56) se aplica quando o sistema é completamente desligado, o que não acontece. A alternativa B erra ao considerar que só há impacto quando o serviço para, já que Nenhuma (A:N) indica ausência total de impacto à disponibilidade. A alternativa D é incorreta porque a degradação de desempenho é justamente o critério do valor Baixa na métrica de disponibilidade, e não algo separado dela."
  },
  {
    "t": "Uma vulnerabilidade em um aplicativo executado dentro de uma máquina virtual permite que o atacante ultrapasse os limites da VM e comprometa recursos do hipervisor, que está sob uma autoridade de segurança diferente daquela que gerencia a máquina virtual. Qual valor deve ser atribuído à métrica de escopo (S)?",
    "opts": [
      "A) Inalterado (S:U), pois a vulnerabilidade está contida em um único componente, a máquina virtual",
      "B) Inalterado (S:U), pois o escopo só seria Alterado se o hipervisor fosse completamente desligado",
      "C) Alterado (S:C), pois a exploração afeta mais de um recurso gerenciado pela mesma autoridade de segurança",
      "D) Alterado (S:C), pois a exploração afeta recursos além da autoridade de segurança do componente vulnerável"
    ],
    "ans": 3,
    "exp": "O escopo é Alterado (S:C) quando a vulnerabilidade explorada pode afetar recursos além do escopo da autoridade de segurança que gerencia o componente vulnerável, como ocorre quando o ataque parte da VM e atinge o hipervisor. A alternativa C é a mais próxima, mas afetar vários recursos sob a mesma autoridade de segurança caracteriza escopo Inalterado; o critério é ultrapassar essa autoridade, e não a quantidade de recursos atingidos. A alternativa A erra porque o que importa não é onde a falha está, mas até onde a exploração alcança. A alternativa B confunde escopo com disponibilidade: o desligamento completo do sistema define disponibilidade Alta, e não escopo."
  },
  {
    "t": "Um analista júnior está montando uma planilha para calcular pontuações CVSS e percebe que não há valores numéricos associados à métrica de escopo. Ele pergunta como essa métrica influencia o resultado. Qual é a resposta CORRETA?",
    "opts": [
      "A) Ela não influencia a pontuação, servindo apenas como informação descritiva sobre o alcance da vulnerabilidade",
      "B) Seu valor é refletido nos valores atribuídos à métrica de privilégios necessários, que variam conforme o escopo",
      "C) Seu valor é refletido nos valores da métrica de disponibilidade, já que ambas descrevem o alcance do impacto",
      "D) Ela recebe uma pontuação calculada pelo scanner com base na quantidade de componentes afetados pela falha"
    ],
    "ans": 1,
    "exp": "A métrica de escopo não tem pontuação própria: seu valor é refletido nos valores da métrica de privilégios necessários, que mudam conforme o escopo seja Inalterado ou Alterado. A alternativa A é a mais próxima, pois é verdade que o escopo não possui pontuação própria, mas ele influencia o resultado indiretamente por meio dos privilégios necessários. A alternativa C associa o escopo à métrica errada, já que a disponibilidade descreve o tipo de interrupção causada pela exploração e tem pontuação própria. A alternativa D é incorreta porque o escopo não é pontuado com base na quantidade de componentes afetados, e sim classificado como Inalterado ou Alterado."
  },
  {
    "t": "Um analista encontra a string CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:N/A:N em um relatório de vulnerabilidades. Qual afirmação descreve corretamente a estrutura desse vetor?",
    "opts": [
      "A) Contém nove componentes, cada um correspondente a uma das nove métricas do CVSS versão 3.1",
      "B) Contém oito componentes, correspondentes às métricas; a versão do CVSS é informada fora do vetor",
      "C) Contém nove componentes: o primeiro indica a versão do CVSS utilizada, e os oito seguintes, as métricas",
      "D) Contém nove componentes: o primeiro indica a pontuação da vulnerabilidade, e os oito seguintes, as métricas"
    ],
    "ans": 2,
    "exp": "O vetor possui nove componentes: o primeiro, CVSS:3.1, apenas informa ao leitor, seja humano ou sistema, que o vetor foi composto com o CVSS versão 3.1, e os oito seguintes correspondem às oito métricas do CVSS. A alternativa D é a armadilha mais comum: o valor 3.1 indica a versão, e não uma pontuação da vulnerabilidade. A alternativa A erra ao tratar os nove componentes como nove métricas, quando o primeiro é apenas a identificação da versão. A alternativa B é incorreta porque a versão faz parte do próprio vetor, como seu primeiro componente, totalizando nove, e não oito."
  },
  {
    "t": "Um relatório de varredura associa a uma vulnerabilidade do SSL o vetor CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:N/A:N. O gestor de TI pede ao analista um resumo do que esse vetor indica. Qual conclusão está CORRETA?",
    "opts": [
      "A) Pode ser explorada pela rede, com baixa complexidade, sem exigir privilégios nem interação do usuário, com impacto alto somente à confidencialidade",
      "B) Pode ser explorada pela rede, com baixa complexidade, sem exigir privilégios, mas depende da interação do usuário, com impacto alto à confidencialidade",
      "C) Pode ser explorada pela rede, com baixa complexidade, sem exigir privilégios nem interação do usuário, com impacto alto à confidencialidade e à disponibilidade",
      "D) Pode ser explorada pela rede, com baixa complexidade, sem exigir privilégios nem interação do usuário, com impacto alto à confidencialidade e escopo Alterado"
    ],
    "ans": 0,
    "exp": "O vetor indica Vetor de Ataque Rede (AV:N), Complexidade do Ataque Baixa (AC:L), nenhum privilégio necessário (PR:N), nenhuma interação do usuário (UI:N), escopo Inalterado (S:U), confidencialidade Alta (C:H) e ausência de impacto à integridade (I:N) e à disponibilidade (A:N). A alternativa B interpreta UI:N como se a interação do usuário fosse necessária. A alternativa C atribui impacto alto à disponibilidade, mas A:N indica classificação Nenhuma, com pontuação 0.00. A alternativa D interpreta S:U como escopo Alterado, quando o U corresponde a Inalterado."
  },
  {
    "t": "Ao transcrever o vetor CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:N/A:N para uma planilha que registra a pontuação de cada métrica, um analista percebe que uma das oito métricas não possui valor numérico associado. Qual é essa métrica?",
    "opts": [
      "A) I:N, pois a ausência de impacto à integridade dispensa a atribuição de pontuação",
      "B) S:U, pois o escopo é classificado como Inalterado, sem pontuação própria",
      "C) UI:N, pois a classificação Nenhuma indica que a métrica não é pontuada",
      "D) A:N, pois métricas de impacto classificadas como Nenhuma ficam sem valor numérico"
    ],
    "ans": 1,
    "exp": "Entre as oito métricas do vetor, somente o escopo (S:U) aparece classificado como Inalterado sem pontuação numérica associada. As alternativas A e D são as mais próximas, mas confundem a classificação Nenhuma com ausência de pontuação: I:N e A:N recebem pontuação 0.00, que é um valor numérico. A alternativa C comete o mesmo erro com UI:N, que recebe pontuação 0.85, igual à de AV:N e PR:N."
  },
  {
    "t": "Após uma varredura, um analista precisa entregar à gerência uma lista de vulnerabilidades ordenada por prioridade de correção. Ele percebe que os vetores CVSS, embora detalhados, são difíceis de comparar entre si. Qual abordagem é a MAIS adequada para esse exercício de priorização?",
    "opts": [
      "A) Ordenar as vulnerabilidades pela pontuação de explorabilidade, que mede a probabilidade de uso efetivo da falha",
      "B) Ordenar as vulnerabilidades pela sub-pontuação de impacto (ISS), que resume as três métricas de impacto",
      "C) Ordenar as vulnerabilidades pela pontuação de impacto, calculada a partir do ISS e do valor do escopo",
      "D) Ordenar as vulnerabilidades pela pontuação base CVSS, que representa o risco geral em um único número"
    ],
    "ans": 3,
    "exp": "O vetor CVSS traz informações detalhadas sobre a natureza do risco, mas sua complexidade dificulta o uso em exercícios de priorização; por isso, calcula-se a pontuação base CVSS, um número único que representa o risco geral da vulnerabilidade. As alternativas A, B e C usam componentes intermediários desse cálculo: a explorabilidade considera apenas a probabilidade de a falha ser usada, enquanto o ISS e a pontuação de impacto consideram apenas as consequências da exploração. Isoladamente, nenhum deles representa o risco geral, que resulta da combinação de impacto e explorabilidade na pontuação base."
  },
  {
    "t": "Uma vulnerabilidade recebeu as seguintes pontuações nas métricas de impacto: Confidencialidade 0.22, Integridade 0.22 e Disponibilidade 0.00. Qual é o valor aproximado da sub-pontuação de impacto (ISS)?",
    "opts": [
      "A) 0.44",
      "B) 0.39",
      "C) 0.61",
      "D) 0.00"
    ],
    "ans": 1,
    "exp": "Pela fórmula ISS = 1 − [(1 − C) × (1 − I) × (1 − A)], temos 1 − [(1 − 0.22) × (1 − 0.22) × (1 − 0.00)] = 1 − [0.78 × 0.78 × 1.00] = 1 − 0.6084 ≈ 0.39. A alternativa A soma diretamente as pontuações de impacto, operação que a fórmula não prevê. A alternativa C corresponde a 0.6084, resultado obtido quando se esquece a subtração final de 1. A alternativa D resulta de multiplicar diretamente as três pontuações, o que zera o valor por causa da disponibilidade 0.00 e ignora a estrutura da fórmula."
  },
  {
    "t": "Em uma reunião de gestão de vulnerabilidades, um analista afirma que determinada falha apresenta alto potencial de weaponization. O que essa afirmação indica?",
    "opts": [
      "A) Que a falha causa impacto elevado à confidencialidade, à integridade e à disponibilidade do sistema",
      "B) Que a falha já está sendo ativamente utilizada por atacantes em campanhas de ataque em andamento",
      "C) Que a pontuação base da falha certamente ultrapassa 9.0, enquadrando-a na categoria Crítica",
      "D) Que um atacante tem grande capacidade de desenvolver um exploit que aproveite essa vulnerabilidade"
    ],
    "ans": 3,
    "exp": "Weaponization é um termo frequentemente usado para descrever a explorabilidade: a capacidade de um atacante de desenvolver um exploit que aproveite uma vulnerabilidade específica, o que se relaciona à probabilidade de ele conseguir, de fato, usar a falha para obter acesso a um sistema. A alternativa B é a mais próxima, mas confunde a capacidade de criar um exploit com a confirmação de uso ativo em ataques. A alternativa A descreve o impacto da exploração, que é medido separadamente da explorabilidade. A alternativa C é incorreta porque a explorabilidade é apenas um dos componentes da pontuação base e, sozinha, não garante a classificação Crítica."
  },
  {
    "t": "Uma vulnerabilidade apresenta pontuação de impacto 6.0 e pontuação de explorabilidade 3.9, com escopo Alterado. Qual é a pontuação base CVSS resultante?",
    "opts": [
      "A) 10.0, pois o resultado da soma multiplicada por 1.08 excede o valor máximo permitido",
      "B) 10.7, pois a soma das pontuações é multiplicada por 1.08 quando o escopo é Alterado",
      "C) 9.9, pois a pontuação base corresponde à soma das pontuações de impacto e explorabilidade",
      "D) 10.0, pois vulnerabilidades com escopo Alterado recebem automaticamente a pontuação máxima"
    ],
    "ans": 0,
    "exp": "Com escopo Alterado, a pontuação base é a soma das pontuações de impacto e explorabilidade multiplicada por 1.08: (6.0 + 3.9) × 1.08 ≈ 10.7. Como a maior pontuação base possível é 10, qualquer valor calculado acima disso é definido como 10. A alternativa B aplica corretamente o multiplicador, mas ignora esse limite máximo. A alternativa C usa a regra do escopo Inalterado, que apenas soma as pontuações. A alternativa D chega ao valor correto com uma justificativa errada: o escopo Alterado aplica o multiplicador de 1.08, mas não atribui automaticamente a pontuação máxima."
  },
  {
    "t": "Qual é a versão mais recente do CVSS disponível atualmente?",
    "opts": [
      "A) 2.0",
      "B) 2.5",
      "C) 3.1",
      "D) 3.2"
    ],
    "ans": 2,
    "exp": "O CVSS 3.1 era a versão mais recente do padrão quando este livro foi publicado, em 2023."
  },
  {
    "t": "Qual das seguintes métricas não está incluída no cálculo da pontuação de explorabilidade do CVSS?",
    "opts": [
      "A) Vetor de ataque",
      "B) Idade da vulnerabilidade",
      "C) Complexidade do ataque",
      "D) Privilégios necessários"
    ],
    "ans": 1,
    "exp": "A pontuação de explorabilidade do CVSS é calculada usando as métricas de vetor de ataque (AV), complexidade do ataque (AC), privilégios necessários (PR) e interação do usuário (UI). A idade da vulnerabilidade não é uma métrica incluída."
  },
  {
    "t": "A política de segurança de uma organização determina que vulnerabilidades classificadas como Alta ou Crítica sejam corrigidas em até 15 dias. Uma varredura identificou vulnerabilidades com pontuações base CVSS de 3.9, 6.9, 7.0, 8.9 e 9.0. Considerando a escala qualitativa de severidade do CVSS, quais delas estão sujeitas a esse prazo?",
    "opts": [
      "A) Apenas as de 7.0 e 8.9",
      "B) As de 6.9, 7.0, 8.9 e 9.0",
      "C) Apenas as de 7.0, 8.9 e 9.0",
      "D) Apenas as de 8.9 e 9.0"
    ],
    "ans": 2,
    "exp": "Na escala qualitativa de severidade do CVSS, pontuações de 7.0 a 8.9 são classificadas como Alta e de 9.0 a 10.0 como Crítica; portanto, 7.0, 8.9 e 9.0 estão sujeitas ao prazo. A alternativa B inclui 6.9, que pertence à faixa Média (4.0 a 6.9). A alternativa D exclui 7.0, que é justamente o limite inferior da faixa Alta. A alternativa A considera apenas a faixa Alta e deixa de fora 9.0, classificada como Crítica e também abrangida pela política. A pontuação 3.9, por sua vez, pertence à faixa Baixa (0.1 a 3.9)."
  },
  {
    "t": "Uma varredura não relatou nenhuma vulnerabilidade de injeção de SQL em uma aplicação web. Semanas depois, durante um teste manual, um analista tenta um ataque contra a aplicação e confirma, no banco de dados de backend, que a falha existe. Como deve ser classificado o resultado original da varredura?",
    "opts": [
      "A) Falso positivo, pois o scanner apresentou um resultado impreciso sobre a vulnerabilidade",
      "B) Falso negativo, pois o scanner relatou a ausência de uma vulnerabilidade que, na verdade, existe",
      "C) Verdadeiro negativo, pois o scanner não relatou nenhuma vulnerabilidade na aplicação",
      "D) Verdadeiro positivo, pois a vulnerabilidade foi confirmada por meio da simulação de um exploit"
    ],
    "ans": 1,
    "exp": "Quando o scanner relata que uma vulnerabilidade não está presente, trata-se de um relato negativo; se a falha de fato existe, esse relato é impreciso e classificado como falso negativo. A alternativa A é a mais próxima, pois o resultado foi realmente impreciso, mas falso positivo ocorre quando o scanner relata uma vulnerabilidade que não existe. A alternativa C só seria correta se a vulnerabilidade realmente não existisse. A alternativa D confunde o teste manual com o resultado da varredura: a confirmação posterior mostra que a falha existe, mas o scanner não a relatou, então seu resultado não pode ser positivo."
  },
  {
    "t": "Um scanner relatou uma vulnerabilidade crítica em um servidor de banco de dados. O analista suspeita de um falso positivo, pois o scanner pode não ter tido acesso suficiente ao sistema-alvo para confirmar a falha. Qual é a MELHOR ação a ser tomada?",
    "opts": [
      "A) Investigar o relato com a própria expertise e o apoio do administrador de banco de dados para confirmar a falha",
      "B) Descartar o relato como falso positivo, já que o acesso insuficiente do scanner compromete o resultado",
      "C) Tratar o relato como verdadeiro positivo, já que scanners automatizam com precisão a identificação de falhas",
      "D) Repetir a varredura com o mesmo plugin e considerar o resultado definitivo se a falha for relatada novamente"
    ],
    "ans": 0,
    "exp": "Scanners não são infalíveis: podem não ter acesso suficiente ao sistema-alvo ou apresentar erros em plugins. Por isso, cada vulnerabilidade relatada deve ser confirmada, com o analista recorrendo à própria expertise e ao conhecimento de especialistas da organização, como o administrador de banco de dados, cujo conhecimento de domínio é essencial para avaliar um potencial falso positivo. A alternativa B descarta o relato sem investigação, apenas com base na suspeita. A alternativa C ignora que scanners cometem erros. A alternativa D não resolve o problema, pois repetir a varredura nas mesmas condições tende a reproduzir o mesmo relato, seja por acesso insuficiente, seja por erro no plugin."
  },
  {
    "t": "Os gerentes de desenvolvimento decidiram não corrigir uma vulnerabilidade em uma aplicação web acessível apenas pela rede interna, pois o custo da remediação supera o benefício de segurança. A organização está sujeita a requisitos de conformidade para varredura de vulnerabilidades. Qual é a MELHOR conduta do analista?",
    "opts": [
      "A) Registrar imediatamente a exceção no sistema de gerenciamento de vulnerabilidades para que o scanner deixe de relatá-la",
      "B) Remover a aplicação do escopo das varreduras, já que ela está exposta apenas à rede interna da organização",
      "C) Verificar se a exceção viola obrigações de conformidade e, se permitida, documentá-la no sistema de gerenciamento",
      "D) Manter a vulnerabilidade nos relatórios e desconsiderá-la manualmente a cada análise, preservando o histórico"
    ],
    "ans": 2,
    "exp": "Documentar exceções no sistema de gerenciamento de vulnerabilidades é uma boa prática, pois faz o scanner ignorá-las em relatórios futuros, reduzindo o ruído. Porém, é preciso cuidado ao permitir uma exceção: em organizações sujeitas a requisitos de conformidade, ela pode violar essas obrigações ou contrariar as melhores práticas de segurança. A alternativa A é a mais próxima, mas registra a exceção sem avaliar esse risco. A alternativa B retira a aplicação inteira das varreduras, eliminando a visibilidade sobre ela, em vez de registrar apenas a exceção da vulnerabilidade específica. A alternativa D mantém o ruído, já que, sem o registro da exceção, o scanner continuará relatando a vulnerabilidade a cada execução."
  },
  {
    "t": "Um relatório de varredura de um servidor web apresenta uma vulnerabilidade de injeção de SQL de alta severidade, sete vulnerabilidades de média severidade e diversos resultados classificados como \"Info\", como o tipo e a versão do servidor HTTP. Qual é a abordagem MAIS adequada para o analista?",
    "opts": [
      "A) Remediar primeiro a injeção de SQL e depois tratar as vulnerabilidades médias; os resultados informativos provavelmente podem ser deixados de lado",
      "B) Tratar primeiro os resultados informativos, pois compõem a maior parte do relatório e revelam dados úteis ao reconhecimento de um atacante",
      "C) Remediar primeiro a injeção de SQL e, em seguida, eliminar todas as fontes de informação apontadas nos resultados informativos antes das médias",
      "D) Reclassificar os resultados informativos pelo CVSS antes de priorizar os achados, já que eles compõem a maior parte do relatório"
    ],
    "ans": 0,
    "exp": "O analista deve priorizar a vulnerabilidade de injeção de SQL de alta severidade e, após remediá-la, tratar as sete vulnerabilidades médias; os resultados informativos provavelmente podem ser deixados de lado. A alternativa B inverte a prioridade: os resultados informativos mostram o que um atacante poderia coletar em um reconhecimento, mas nem tudo que o scanner relata é um problema de segurança significativo. A alternativa C é impraticável, pois remover todas as fontes de informação sobre um sistema pode ser difícil, se não impossível. A alternativa D é incorreta porque esses resultados vêm de plugins que nem sequer são categorizados pelo CVSS; são simplesmente informativos."
  },
  {
    "t": "Uma instituição altamente regulamentada, sujeita a auditorias frequentes e a requisitos rigorosos de conformidade, percebe que as mesmas mensagens informativas aparecem repetidamente em suas varreduras. Qual prática ajuda a organização a demonstrar aos auditores que conduziu a devida diligência?",
    "opts": [
      "A) Configurar o scanner para ocultar todas as mensagens informativas, reduzindo o ruído dos relatórios apresentados na auditoria",
      "B) Eliminar todas as fontes de informação sobre os sistemas, garantindo que nenhuma mensagem informativa volte a aparecer",
      "C) Tratar cada mensagem informativa como vulnerabilidade de média severidade, remediando-a antes da próxima varredura",
      "D) Adotar uma política formal que, após duas ou três varreduras consecutivas, exija registrar as ações tomadas ou os motivos para não agir"
    ],
    "ans": 3,
    "exp": "Uma política formal para mensagens informativas, como registrar as ações tomadas ou os motivos para não agir quando uma mensagem aparece em duas ou três varreduras consecutivas, cria um registro do processo de decisão que comprova aos auditores a devida diligência, prática especialmente importante para organizações altamente regulamentadas. A alternativa A é a mais próxima, pois reduz o ruído, mas não deixa nenhum registro de decisão para apresentar aos auditores. A alternativa B é impraticável, já que eliminar todas as fontes de informação pode ser difícil, se não impossível. A alternativa C exagera no tratamento, pois resultados informativos nem sempre representam problemas de segurança significativos."
  },
  {
    "t": "Um relatório de varredura aponta uma vulnerabilidade em determinada aplicação de um servidor. O administrador afirma que essa aplicação nunca foi instalada no equipamento. Qual fonte de informação o analista deve consultar para reconciliar o relatório com a realidade do ambiente?",
    "opts": [
      "A) O SIEM, que correlaciona entradas de log de múltiplas fontes e fornece inteligência acionável",
      "B) O sistema de gerenciamento de configuração, que informa o sistema operacional e as aplicações instaladas",
      "C) Os logs do servidor, que podem conter registros de possíveis tentativas de explorar a vulnerabilidade",
      "D) O relatório de análise de tendências, que mostra a idade das vulnerabilidades existentes no ambiente"
    ],
    "ans": 1,
    "exp": "Sistemas de gerenciamento de configuração fornecem informações sobre o sistema operacional e as aplicações instaladas em um sistema, permitindo confirmar se a aplicação apontada realmente existe no servidor e reconciliar o relatório com a realidade do ambiente. A alternativa C é a mais próxima, pois os logs são valiosos na análise, mas revelam possíveis tentativas de exploração, e não o inventário de aplicações instaladas. A alternativa A é voltada à análise de eventos registrados e também não responde se a aplicação está instalada. A alternativa D acompanha a evolução das vulnerabilidades ao longo do tempo, sem confirmar a presença de uma aplicação específica em um servidor."
  },
  {
    "t": "Kevin identificou recentemente uma nova vulnerabilidade de software e calculou sua pontuação base do CVSS como 6,5. Em qual categoria de risco essa vulnerabilidade se enquadraria?",
    "opts": [
      "A) Baixo",
      "B) Médio",
      "C) Alto",
      "D) Crítico"
    ],
    "ans": 1,
    "exp": "Vulnerabilidades com pontuações base do CVSS entre 4,0 e 6,9 se enquadram na categoria de risco médio."
  },
  {
    "t": "Tara analisou recentemente os resultados de um relatório de varredura de vulnerabilidades e constatou que uma vulnerabilidade relatada pelo scanner não existia, pois o sistema havia, de fato, recebido a correção conforme especificado. Que tipo de erro ocorreu?",
    "opts": [
      "A) Falso positivo",
      "B) Falso negativo",
      "C) Verdadeiro positivo",
      "D) Verdadeiro negativo"
    ],
    "ans": 0,
    "exp": "Um erro de falso positivo ocorre quando o scanner de vulnerabilidades relata uma vulnerabilidade que, na realidade, não existe."
  },
  {
    "t": "Após confirmar uma vulnerabilidade explorável em um servidor web, o analista quer saber se houve tentativas de exploração dessa falha, cruzando em uma única visão os eventos registrados por servidores, aplicações e dispositivos de rede. Qual fonte é a MAIS adequada para essa análise?",
    "opts": [
      "A) Os logs do próprio servidor web, que podem registrar possíveis tentativas de explorar a falha detectada",
      "B) O sistema de gerenciamento de configuração, que detalha o sistema operacional e as aplicações do servidor",
      "C) O relatório de análise de tendências, que mostra o número de novas vulnerabilidades surgidas ao longo do tempo",
      "D) O SIEM, que reúne e correlaciona entradas de log de múltiplas fontes, fornecendo inteligência acionável"
    ],
    "ans": 3,
    "exp": "O SIEM correlaciona entradas de log de múltiplas fontes, como servidores, aplicações e dispositivos de rede, e fornece inteligência acionável, exatamente o necessário para identificar tentativas de exploração em diferentes pontos da rede. A alternativa A é a mais próxima, pois os logs podem registrar tentativas de explorar a falha, mas os de um único servidor não oferecem a visão correlacionada exigida no cenário. A alternativa B informa o sistema operacional e as aplicações instaladas, sem registrar tentativas de ataque. A alternativa C acompanha tendências gerais das vulnerabilidades, e não eventos de exploração."
  },
  {
    "t": "O gestor de segurança quer avaliar, ao longo dos meses, se o programa de varredura de vulnerabilidades da organização está evoluindo. Quais indicadores ele deve acompanhar por meio da análise de tendências?",
    "opts": [
      "A) O número de novas vulnerabilidades ao longo do tempo, a idade das vulnerabilidades existentes e o volume de entradas de log correlacionadas pelo SIEM",
      "B) A quantidade de varreduras executadas, o número de plugins atualizados no scanner e a duração média de cada varredura",
      "C) O número de novas vulnerabilidades ao longo do tempo, a idade das vulnerabilidades existentes e o tempo necessário para remediá-las",
      "D) A idade das vulnerabilidades existentes, o tempo necessário para remediá-las e o número de aplicações instaladas em cada sistema"
    ],
    "ans": 2,
    "exp": "A análise de tendências é parte importante de um programa de varredura, e os gestores devem acompanhar o número de novas vulnerabilidades que surgem ao longo do tempo, a idade das vulnerabilidades existentes e o tempo necessário para remediá-las. As alternativas A e D são as mais próximas, pois acertam dois desses indicadores, mas incluem itens de outras fontes: o volume de logs correlacionados pelo SIEM e o número de aplicações instaladas, dado do gerenciamento de configuração. A alternativa B trata de aspectos operacionais do scanner, e não da evolução das vulnerabilidades."
  },
  {
    "t": "Uma varredura identificou a mesma vulnerabilidade, com a mesma severidade, em quatro sistemas diferentes. Considerando o contexto do ambiente e o valor dos ativos, qual sistema deve ocupar a posição mais alta na lista de prioridades de remediação?",
    "opts": [
      "A) Um servidor de alto valor para o negócio, diretamente conectado à internet",
      "B) Um servidor de alto valor para o negócio, localizado em uma rede isolada",
      "C) Uma estação de trabalho de baixo valor, diretamente conectada à internet",
      "D) Um servidor interno de valor moderado, acessível apenas pela rede corporativa"
    ],
    "ans": 0,
    "exp": "Ao avaliar uma vulnerabilidade, é preciso considerar o contexto do ambiente: uma falha em um sistema diretamente conectado à internet é muito mais severa do que em um sistema interno ou em uma rede isolada. Além disso, ativos de maior valor representam mais risco à organização e devem ficar mais acima na lista de remediação. O servidor de alto valor exposto à internet reúne os dois fatores. A alternativa B tem alto valor, mas está em uma rede isolada, o que reduz a severidade. A alternativa C está exposta à internet, mas tem baixo valor. A alternativa D não reúne nenhum dos dois fatores em grau máximo, pois é interna e de valor moderado."
  },
  {
    "t": "Um relatório de inteligência indica que um grupo de ameaça persistente avançada (APT) está explorando uma vulnerabilidade que descobriu por meio de pesquisa própria e que ainda não é conhecida por outras equipes de cibersegurança. Por que esse tipo de ataque é considerado particularmente perigoso?",
    "opts": [
      "A) Porque o grupo divulga a falha logo após explorá-la, permitindo que outros atacantes a utilizem antes da correção",
      "B) Porque o fornecedor já conhece a falha, mas ainda não concluiu o desenvolvimento do patch de correção",
      "C) Porque a falha é desconhecida pelo fornecedor do produto e, portanto, não há patch disponível para corrigi-la",
      "D) Porque afeta exclusivamente redes de controle, como no caso Stuxnet, nas quais patches não podem ser aplicados"
    ],
    "ans": 2,
    "exp": "Ataques de dia zero exploram vulnerabilidades desconhecidas pelos fornecedores dos produtos; por isso, não há patches disponíveis para corrigi-las, e atores APT que as exploram frequentemente comprometem seus alvos com facilidade. A alternativa B é a mais próxima, mas pressupõe que o fornecedor já conhece a falha, o que descaracteriza o dia zero. A alternativa A é incorreta porque atacantes sofisticados não divulgam essas vulnerabilidades: eles as armazenam em um repositório para uso posterior. A alternativa D generaliza indevidamente o caso Stuxnet, que é apenas um exemplo de ataque com falhas de dia zero; o perigo desses ataques está na inexistência de patches, e não em uma limitação específica das redes de controle."
  },
  {
    "t": "Para otimizar recursos, um gestor propõe que a equipe de segurança corrija apenas vulnerabilidades publicadas nos últimos 12 meses, já que os scanners são atualizados regularmente para detectar ameaças recém-descobertas. Qual argumento o analista deve apresentar contra essa proposta?",
    "opts": [
      "A) Scanners atualizados deixam de detectar vulnerabilidades antigas, que são removidas das bases de plugins",
      "B) Atualizar os scanners é pouco eficaz contra ameaças recém-descobertas, o que torna a proposta inviável",
      "C) Vulnerabilidades recentes representam, em sua maioria, apenas questões corriqueiras de divulgação de informações",
      "D) Vulnerabilidades antigas seguem sendo exploradas em violações, muitas delas descobertas há mais de uma década"
    ],
    "ans": 3,
    "exp": "Embora atualizar os scanners seja importante para torná-los eficazes contra ameaças recém-descobertas, vulnerabilidades antigas também podem representar problemas significativos: muitas das exploradas em violações de dados foram descobertas mais de uma década antes, o que mostra que diversas organizações deixam de tratá-las. A alternativa A não se sustenta, pois os scanners contêm plugins para milhares de vulnerabilidades, e o problema é a falta de tratamento das falhas antigas, não sua detecção. A alternativa B contradiz a importância das atualizações, que tornam os scanners eficazes contra novas ameaças. A alternativa C generaliza sem fundamento: os plugins detectam desde questões corriqueiras de divulgação de informações até falhas graves, como injeção de SQL."
  },
  {
    "t": "Um analista júnior percebe que o scanner da organização possui plugins capazes de detectar milhares de vulnerabilidades, de falhas graves de injeção de SQL em aplicações web a questões corriqueiras de divulgação de informações em dispositivos de rede. Qual é a abordagem MAIS adequada para desenvolver seu conhecimento?",
    "opts": [
      "A) Estudar em detalhe cada uma das milhares de vulnerabilidades que os plugins do scanner conseguem detectar",
      "B) Familiarizar-se com as vulnerabilidades mais comumente detectadas e com categorias gerais que abrangem muitas variantes",
      "C) Concentrar-se apenas nas falhas de injeção de SQL, por estarem entre as mais graves detectadas pelos scanners",
      "D) Confiar integralmente nos plugins do scanner, dispensando o conhecimento prévio do analista sobre vulnerabilidades"
    ],
    "ans": 1,
    "exp": "Como os scanners contêm plugins para milhares de vulnerabilidades, é impossível abordar cada uma delas; por isso, o analista deve se familiarizar com as vulnerabilidades mais comumente detectadas e com as categorias gerais que abrangem muitas variantes. A alternativa A é impraticável justamente pelo volume de vulnerabilidades detectáveis. A alternativa C é a mais próxima, mas restringe demais o foco: a injeção de SQL é apenas uma das categorias relevantes, ao lado de outras, como a divulgação de informações. A alternativa D contraria a necessidade de o analista conhecer as vulnerabilidades mais comuns e suas categorias, em vez de depender apenas dos plugins."
  },
  {
    "t": "Uma varredura reporta uma vulnerabilidade crítica (MS15-034) em um servidor Windows: uma falha na pilha do protocolo HTTP (HTTP.sys) que permite a um atacante remoto executar código arbitrário com privilégios de System. Qual é a ação corretiva MAIS adequada?",
    "opts": [
      "A) Aplicar os patches lançados pela Microsoft para os sistemas afetados, consultando o boletim MS15-034 para mais detalhes",
      "B) Aguardar o lançamento de um patch pela Microsoft, mantendo o servidor sob monitoramento reforçado até lá",
      "C) Reinstalar o sistema operacional, já que vulnerabilidades em servidores estão entre as mais complexas de remediar",
      "D) Registrar uma exceção para a vulnerabilidade, pois falhas na pilha HTTP do sistema operacional não têm correção simples"
    ],
    "ans": 0,
    "exp": "Trata-se de uma vulnerabilidade de patch ausente: a Microsoft lançou patches para os sistemas operacionais afetados, e o boletim de segurança MS15-034 descreve o problema e a solução em maior detalhe, o que torna a correção simples. A alternativa B é incorreta porque os patches já estão disponíveis. A alternativa C generaliza indevidamente: embora vulnerabilidades em servidores e endpoints estejam frequentemente entre as mais complexas de remediar, neste caso há uma correção fácil. A alternativa D também ignora a existência dos patches e manteria exposta uma falha crítica, com pontuação base CVSS 10, que permite execução remota de código."
  },
  {
    "t": "Qual das seguintes opções não é uma fonte comum de informações que podem ser correlacionadas com os resultados de varreduras de vulnerabilidades?",
    "opts": [
      "A) Logs",
      "B) Tabelas de banco de dados",
      "C) SIEM",
      "D) Sistema de gerenciamento de configurações"
    ],
    "ans": 1,
    "exp": "É improvável que uma tabela de banco de dados contenha informações relevantes para avaliar um relatório de varredura de vulnerabilidades. Logs, relatórios de SIEM e sistemas de gerenciamento de configurações têm muito mais probabilidade de conter informações relevantes."
  },
  {
    "t": "Qual dos seguintes sistemas operacionais deve ser evitado em redes de produção?",
    "opts": [
      "A) Windows Server 2008 R2",
      "B) Red Hat Enterprise Linux 9",
      "C) Debian Linux 11",
      "D) Ubuntu 22"
    ],
    "ans": 0,
    "exp": "A Microsoft descontinuou o suporte ao Windows Server 2008 R2 em 2020, e é altamente provável que o sistema operacional contenha vulnerabilidades que não podem ser corrigidas."
  },
  {
    "t": "Ao analisar os relatórios de varredura da organização, um analista percebe que o alerta mais frequente é o de sistemas executando versões desatualizadas de sistemas operacionais e aplicações que requerem patches de segurança. Qual fator MELHOR explica essa situação?",
    "opts": [
      "A) A complexidade dos sistemas, com milhões de linhas de código, impede que os fornecedores disponibilizem patches para a maioria das falhas",
      "B) A combinação única de aplicações em cada sistema impede que o scanner identifique corretamente quais patches estão ausentes",
      "C) A aplicação de patches, embora seja uma prática central, costuma ser negligenciada por falta de recursos para manutenção preventiva",
      "D) A aplicação de patches é tratada como tarefa excepcional, reservada a vulnerabilidades críticas já exploradas por atacantes"
    ],
    "ans": 2,
    "exp": "Aplicar patches de segurança deveria ser uma das práticas centrais de qualquer programa de segurança, mas essa tarefa rotineira costuma ser negligenciada por falta de recursos para manutenção preventiva; por isso, versões desatualizadas estão entre os alertas mais comuns das varreduras. A alternativa A distorce a complexidade dos sistemas: ela torna as vulnerabilidades difíceis de remediar, mas não impede que fornecedores lancem patches. A alternativa B contradiz o próprio cenário, já que o scanner está identificando as versões desatualizadas. A alternativa D é a mais próxima, mas atribui o problema a uma decisão deliberada, quando a causa é a falta de recursos para uma tarefa que deveria ser rotineira."
  },
  {
    "t": "Após a varredura mensal de vulnerabilidades, nenhum smartphone ou tablet corporativo aparece como exigindo atenção. O gestor conclui que a frota de dispositivos móveis está segura. Qual é a MELHOR resposta do analista?",
    "opts": [
      "A) Concordar com o gestor, já que a varredura avalia todos os dispositivos que acessam a rede corporativa",
      "B) Alertar que dispositivos móveis raramente estão na rede durante as varreduras e devem ser gerenciados, por exemplo, via MDM",
      "C) Aumentar a frequência das varreduras até que os dispositivos móveis apareçam, pois só elas confirmam a segurança desses aparelhos",
      "D) Considerar os dispositivos seguros se o MDM exigir criptografia, já que ela dispensa a aplicação de patches nesses aparelhos"
    ],
    "ans": 1,
    "exp": "Dispositivos móveis normalmente não aparecem nas varreduras porque frequentemente não estão conectados à rede quando elas são executadas; por isso, sua segurança exige atenção mesmo sem alertas. Soluções de MDM permitem gerenciar a configuração, instalar patches automaticamente, exigir criptografia, apagar remotamente os dados e restringir aplicações a uma lista aprovada. A alternativa A ignora que esses dispositivos frequentemente escapam das varreduras. A alternativa C insiste em um método que, por natureza, tende a não alcançar esses aparelhos. A alternativa D é a mais próxima, mas a criptografia é apenas um dos controles do MDM e não substitui a aplicação de patches."
  },
  {
    "t": "Uma aplicação crítica para o negócio só funciona em um sistema operacional cujo suporte foi encerrado pelo fornecedor e não pode ser migrada para versões mais novas. A organização decidiu manter o sistema em uso. Qual é a MELHOR prática nesse cenário?",
    "opts": [
      "A) Manter o sistema conectado à rede corporativa, contando apenas com o aumento do monitoramento para detectar ataques",
      "B) Solicitar ao fornecedor que investigue e corrija as falhas relatadas, já que o sistema continua em uso pela organização",
      "C) Isolar o sistema ao máximo, de preferência sem conexão com nenhuma rede, e aplicar o máximo de controles compensatórios",
      "D) Atualizar o sistema operacional imediatamente, mesmo que a aplicação crítica deixe de funcionar após a migração"
    ],
    "ans": 2,
    "exp": "Quando a organização precisa continuar usando um sistema operacional sem suporte, as melhores práticas indicam isolá-lo o máximo possível, de preferência sem conexão com nenhuma rede, e aplicar o máximo de controles compensatórios, como monitoramento aumentado e regras rigorosas de firewall. A alternativa A é a mais próxima, mas usa apenas um controle compensatório e mantém o sistema exposto na rede. A alternativa B é inviável porque, após o fim do suporte, o fornecedor não investiga nem corrige novas falhas. A alternativa D ignora a restrição do cenário: atualizar é a solução recomendada, mas é justamente o que a dependência da aplicação impede."
  },
  {
    "t": "O CISO de uma organização quer evitar ser surpreendido pelo fim do suporte de sistemas operacionais e aplicações usados no ambiente. Qual prática é a MAIS eficaz para planejar e mitigar esses eventos?",
    "opts": [
      "A) Confiar nas varreduras de vulnerabilidades, que classificam sistemas sem suporte como achados críticos",
      "B) Aguardar que o fornecedor deixe de lançar patches, sinal de que o fim do suporte do produto chegou",
      "C) Manter uma equipe interna de desenvolvedores para corrigir as falhas dos produtos após o fim do suporte",
      "D) Acompanhar as informações de ciclo de vida dos produtos, incluindo os sites dos fornecedores que preveem eventos de EOL"
    ],
    "ans": 3,
    "exp": "Profissionais de segurança devem se manter atualizados sobre as informações de ciclo de vida de produtos e serviços para planejar e mitigar eventos de fim de vida (EOL) que se aproximam; muitos fornecedores publicam em seus sites informações detalhadas que ajudam a prever essas datas. A alternativa A é a mais próxima, mas a varredura só aponta o problema depois que o suporte já terminou, sem permitir planejamento prévio. A alternativa B também é reativa, pois espera o fim do suporte acontecer. A alternativa C é impraticável para a maioria das organizações, que não mantêm equipes de desenvolvedores de sistemas operacionais para corrigir falhas por conta própria."
  },
  {
    "t": "Um relatório de varredura classifica como crítica a detecção de dois servidores executando o Windows Server 2003, cujo suporte terminou. O administrador argumenta que o relatório não aponta nenhuma falha específica, apenas a versão do sistema. Qual é a avaliação CORRETA do analista?",
    "opts": [
      "A) O risco é significativo, pois sem suporte não haverá novos patches do fornecedor, e o sistema provavelmente contém vulnerabilidades",
      "B) O risco é baixo, pois o relatório não aponta nenhuma falha específica, o que caracteriza um resultado apenas informativo sobre a versão",
      "C) O risco se limita às falhas descobertas antes do fim do suporte, que já foram corrigidas pelos patches lançados até então",
      "D) O risco depende de o fornecedor confirmar novas vulnerabilidades, já que ele continuará investigando os relatos recebidos"
    ],
    "ans": 0,
    "exp": "Após o fim do suporte, o fornecedor não lança novos patches de segurança e não investiga nem corrige as falhas que surgirem; por isso, é provável que o sistema contenha vulnerabilidades, e a organização fica por conta própria, sob risco significativo de ataque. A alternativa B confunde a ausência de uma falha específica com baixo risco: a falta de suporte, por si só, é o problema. A alternativa C ignora que as falhas descobertas após o fim do suporte não serão corrigidas. A alternativa D é incorreta porque é improvável que o fornecedor investigue ou reconheça relatos de vulnerabilidades em um produto sem suporte."
  },
  {
    "t": "Uma varredura aponta um estouro de buffer em uma aplicação desenvolvida internamente. A análise mostra que o ataque afeta a região de memória onde ficam os objetos criados pelo código da aplicação. Como esse estouro deve ser classificado, e a quem cabe o gerenciamento dessa região?",
    "opts": [
      "A) Estouro de pilha; a região é gerenciada pelo sistema operacional",
      "B) Estouro de pilha; a região é gerenciada pelos desenvolvedores da aplicação",
      "C) Estouro de heap; a região é gerenciada pelo sistema operacional",
      "D) Estouro de heap; a região é gerenciada pelos desenvolvedores da aplicação"
    ],
    "ans": 3,
    "exp": "Estouros de heap visam o heap, região que armazena objetos criados pelo código e cujo gerenciamento cabe aos desenvolvedores da aplicação. Já os estouros de pilha visam a pilha, que armazena valores de variáveis e é gerenciada pelo sistema operacional. A alternativa C é a mais próxima, pois identifica corretamente o tipo de estouro, mas atribui o gerenciamento do heap ao sistema operacional. A alternativa B faz o inverso: acerta o responsável, mas classifica o ataque como estouro de pilha. A alternativa A descreve corretamente um estouro de pilha, mas o cenário trata da região de objetos criados pelo código, que é o heap."
  },
  {
    "t": "Um relatório de varredura aponta \"múltiplos estouros de inteiros\" em uma biblioteca utilizada por diversos sistemas. Um analista júnior pergunta o que caracteriza esse tipo de vulnerabilidade. Qual é a resposta CORRETA?",
    "opts": [
      "A) Uma categoria de vulnerabilidade independente dos estouros de buffer, que afeta apenas bibliotecas de sistemas operacionais",
      "B) Uma variante do estouro de buffer em que o resultado de uma operação aritmética é grande demais para caber no buffer especificado",
      "C) Uma variante do estouro de buffer que visa a pilha, região que armazena valores de variáveis e é gerenciada pelo sistema operacional",
      "D) Uma variante do estouro de buffer em que o atacante insere mais objetos no heap do que a área alocada pelos desenvolvedores"
    ],
    "ans": 1,
    "exp": "O estouro de inteiro é simplesmente uma variante do estouro de buffer, na qual o resultado de uma operação aritmética tenta armazenar um inteiro grande demais para caber no buffer especificado. A alternativa A erra ao tratá-lo como categoria independente e ao restringi-lo a bibliotecas de sistemas operacionais. As alternativas C e D descrevem outras variantes do estouro de buffer, definidas pela região de memória atingida: a C corresponde ao estouro de pilha, e a D, ao estouro de heap. Nenhuma delas envolve o resultado de uma operação aritmética, que é o que caracteriza o estouro de inteiro."
  },
  {
    "t": "Uma varredura identifica em um servidor FTP a vulnerabilidade CVE 2002-0126, um estouro de buffer. O gestor argumenta que, por ser uma falha antiga, ela não representa mais uma ameaça real e pode ser ignorada. Qual deve ser a posição do analista?",
    "opts": [
      "A) Concordar, pois o número após as letras CVE indica o ano da última exploração registrada da falha",
      "B) Discordar e recomendar reescrever o servidor FTP, pois estouros de buffer raramente têm patches disponíveis",
      "C) Discordar, pois estouros de buffer persistem por anos; deve-se buscar o patch, geralmente indicado no próprio relatório",
      "D) Concordar, pois vulnerabilidades com mais de uma década deixam de ser exploradas após a divulgação do CVE"
    ],
    "ans": 2,
    "exp": "Ataques de estouro de buffer são bastante comuns e tendem a persistir por muitos anos após a descoberta; em um estudo de violações, quatro dos dez principais problemas eram explorações de vulnerabilidades de estouro com 12 a 16 anos de idade. Ao encontrar esse tipo de falha, o analista deve buscar um patch, que, na maioria dos casos, é identificado diretamente no relatório da varredura. A alternativa A é incorreta porque o número após as letras CVE indica o ano de descoberta da vulnerabilidade, e não o de sua última exploração. A alternativa B ignora que normalmente há patch disponível. A alternativa D contraria a evidência de que falhas antigas continuam sendo exploradas."
  },
  {
    "t": "Um atacante obteve acesso a uma conta de usuário comum em um servidor Linux e utiliza uma ferramenta que automatiza a exploração de uma falha no kernel para obter privilégios de root. O que MELHOR descreve a ferramenta e o ataque em questão?",
    "opts": [
      "A) Um rootkit, ferramenta que automatiza ataques de escalação de privilégios a partir de uma conta comum",
      "B) Um ataque de execução remota de código, já que o atacante executa software de sua escolha no servidor",
      "C) Um rootkit, ferramenta que permite explorar vulnerabilidades pela rede sem nenhum acesso ao sistema-alvo",
      "D) Uma escalação de privilégios que dispensa a exploração de vulnerabilidades, por partir de uma conta legítima"
    ],
    "ans": 0,
    "exp": "Rootkits são ferramentas de hacking projetadas para automatizar ataques de escalação de privilégios: a partir de uma conta de usuário comum, o atacante explora uma vulnerabilidade para obter uma conta mais privilegiada, como a de root. A alternativa B confunde os conceitos: embora o atacante execute software, o objetivo e o mecanismo descritos são de escalação de privilégios, e ele já possuía acesso ao sistema. A alternativa C identifica a ferramenta corretamente, mas atribui a ela a característica da execução remota de código, que dispensa acesso ao alvo. A alternativa D erra porque a escalação de privilégios depende justamente da exploração de vulnerabilidades."
  },
  {
    "t": "Em que tipo de ataque o invasor coloca em uma área de memória mais informações do que o espaço alocado para esse uso permite?",
    "opts": [
      "A) Injeção de SQL",
      "B) Injeção de LDAP",
      "C) Scripting entre sites",
      "D) Estouro de buffer"
    ],
    "ans": 3,
    "exp": "Ataques de estouro de buffer ocorrem quando um invasor manipula um programa para que ele coloque em uma área de memória mais dados do que o espaço alocado para o uso desse programa permite. O objetivo é sobrescrever outras informações na memória com instruções que podem ser executadas por um processo diferente em execução no sistema."
  },
  {
    "t": "O ataque Dirty COW é um exemplo de que tipo de vulnerabilidade?",
    "opts": [
      "A) Código malicioso",
      "B) Elevação de privilégios",
      "C) Estouro de buffer",
      "D) Injeção de LDAP"
    ],
    "ans": 1,
    "exp": "Em outubro de 2016, pesquisadores de segurança anunciaram a descoberta de uma vulnerabilidade no kernel do Linux apelidada de Dirty COW. Essa vulnerabilidade, presente no kernel do Linux havia nove anos, era extremamente fácil de explorar e concedia aos invasores que a exploravam com sucesso o controle administrativo dos sistemas afetados."
  },
  {
    "t": "Um analista compara duas vulnerabilidades que permitem executar código com privilégios administrativos. A primeira exige que o atacante tenha acesso lógico ao sistema; a segunda pode ser explorada por meio de uma conexão de rede, sem acesso físico ou lógico ao alvo. Qual afirmação está CORRETA?",
    "opts": [
      "A) Ambas são de execução remota de código, pois permitem executar software com privilégios administrativos",
      "B) A primeira é mais perigosa, pois o acesso lógico prévio garante ao atacante privilégios administrativos",
      "C) A segunda é uma escalação de privilégios, pois transforma o acesso pela rede em uma conta de superusuário",
      "D) A segunda é de execução remota de código, subconjunto mais perigoso por dispensar acesso físico ou lógico ao alvo"
    ],
    "ans": 3,
    "exp": "Vulnerabilidades de execução de código permitem que o atacante execute software de sua escolha no sistema-alvo, o que é especialmente grave com privilégios administrativos. A execução remota de código é um subconjunto ainda mais perigoso, pois a exploração ocorre por meio de uma conexão de rede, sem acesso físico ou lógico ao alvo, como na segunda vulnerabilidade. A alternativa A ignora essa distinção: a primeira exige acesso lógico e, portanto, não é remota. A alternativa B inverte o nível de perigo. A alternativa C confunde execução remota de código com escalação de privilégios, que parte de uma conta comum para obter uma conta mais privilegiada."
  },
  {
    "t": "Uma varredura com o plugin que verifica a vulnerabilidade MS14-066 (Schannel) em vários servidores Windows aponta a falha em apenas um deles. Ao ler a descrição do plugin, o analista nota que alguns hosts encerram a conexão ao receber um certificado de cliente não solicitado, impedindo o envio da mensagem CertificateVerify. Qual é a interpretação CORRETA?",
    "opts": [
      "A) Os demais servidores não são vulneráveis, já que o plugin não relatou a falha em nenhum deles",
      "B) Nos hosts que encerraram a conexão, a detecção não pôde ser concluída, e a ausência de alerta não comprova proteção",
      "C) Os hosts que encerraram a conexão já estão corrigidos, pois esse comportamento é efeito da aplicação do patch MS14-066",
      "D) O único alerta deve ser tratado como falso positivo, já que o plugin apresentou comportamento inconsistente entre os hosts"
    ],
    "ans": 1,
    "exp": "A descrição do plugin informa que ele envia um certificado de cliente seguido de uma mensagem CertificateVerify e que alguns hosts Windows encerram a conexão ao receber um certificado não solicitado; nesses casos, o plugin não consegue prosseguir com a detecção. Portanto, a ausência de alerta nesses servidores não comprova que estejam protegidos, e o analista deve confirmar se os patches lançados pela Microsoft foram aplicados. A alternativa A assume um verdadeiro negativo que o plugin não conseguiu verificar. A alternativa C atribui ao patch um comportamento que a descrição associa ao próprio host. A alternativa D descarta sem fundamento o alerta obtido no host em que a detecção pôde ser concluída."
  },
  {
    "t": "Uma varredura revela que os administradores usam Telnet para acessar servidores remotamente via linha de comando e FTP para transferir arquivos, ambos transmitindo credenciais sem criptografia. Qual é a solução MAIS adequada?",
    "opts": [
      "A) Substituir o Telnet pelo SFTP e o FTP pelo SSH, eliminando a transmissão de credenciais em texto claro",
      "B) Substituir o Telnet pelo SSH e o FTP pelo SFTP ou FTPS, eliminando a transmissão de credenciais em texto claro",
      "C) Manter o Telnet e o FTP, restringindo seu uso à rede interna para reduzir o risco de interceptação",
      "D) Substituir o Telnet pelo SSH e manter o FTP, exigindo senhas mais complexas de todos os usuários"
    ],
    "ans": 1,
    "exp": "Telnet e FTP foram projetados sem foco em segurança e não protegem credenciais nem conteúdo com criptografia, expondo os usuários à espionagem. A solução é mudar para protocolos seguros: o SSH substitui o Telnet no acesso via linha de comando, e o SFTP ou o FTPS substituem o FTP na transferência de arquivos. A alternativa A inverte as substituições. A alternativa C mantém os protocolos inseguros, e as credenciais continuariam trafegando sem criptografia. A alternativa D corrige apenas o Telnet; senhas mais complexas não impedem que as credenciais do FTP sejam interceptadas em texto claro."
  },
  {
    "t": "Para corrigir um achado de autenticação em texto claro no FTP, cuja saída indica que o servidor não suporta \"AUTH TLS\", a equipe decide adotar o FTPS em vez do SFTP. Qual cuidado adicional deve ser tomado na configuração?",
    "opts": [
      "A) Configurar o servidor para criptografar apenas as conexões de dados, mantendo as de controle em texto claro",
      "B) Migrar os usuários para o conjunto SSH, já que o FTPS é um dos componentes desse conjunto de protocolos",
      "C) Configurar o servidor para que as conexões de controle sejam criptografadas, já que o FTPS opera sobre SSL/TLS",
      "D) Manter o servidor como está, pois a adoção do FTPS, por si só, criptografa automaticamente todas as conexões"
    ],
    "ans": 2,
    "exp": "O FTPS é o FTP sobre SSL/TLS; ao optar por ele, é preciso configurar o servidor para que as conexões de controle sejam criptografadas, o que resolve a situação indicada na saída, em que o servidor não suportava \"AUTH TLS\". A alternativa A contraria a recomendação, que exige justamente a criptografia das conexões de controle. A alternativa B confunde os protocolos: é o SFTP que faz parte do conjunto SSH. A alternativa D é a mais próxima, mas ignora que, no FTPS, a criptografia das conexões de controle depende de configuração no servidor."
  },
  {
    "t": "Uma varredura aponta \"Método DEBUG do ASP.NET Habilitado\" em um servidor web voltado ao público. Os desenvolvedores argumentam que precisam do modo de depuração para solucionar problemas da aplicação. Qual é a MELHOR abordagem?",
    "opts": [
      "A) Desativar o modo de depuração no servidor público e levar os testes a um ambiente dedicado, acessível só por redes privadas",
      "B) Manter o modo de depuração no servidor público, mas restringir seu uso apenas a usuários autenticados da aplicação",
      "C) Criar um ambiente de desenvolvimento dedicado, acessível pela internet para desenvolvedores remotos, com depuração habilitada",
      "D) Manter o modo de depuração habilitado, já que a severidade é média e as informações expostas só interessam aos desenvolvedores"
    ],
    "ans": 0,
    "exp": "O modo de depuração expõe detalhes do funcionamento interno da aplicação, do servidor e dos bancos de dados, o que pode ajudar um atacante; por isso, deve ser desativado em sistemas com exposição pública. Em organizações maduras, o desenvolvimento ocorre em um ambiente dedicado, acessível apenas por redes privadas, onde é apropriado habilitar a depuração. A alternativa B é a mais próxima, pois restringir o uso a usuários autenticados reduz o risco, mas não há necessidade de manter esse recurso em sistemas voltados ao público. A alternativa C erra ao expor o ambiente de desenvolvimento à internet. A alternativa D ignora que essas informações podem auxiliar atacantes."
  },
  {
    "t": "Uma varredura de vulnerabilidades identifica uma falha de segurança em um appliance de rede, cuja correção depende de uma atualização fornecida pelo fabricante do equipamento. Qual é a ação MAIS adequada?",
    "opts": [
      "A) Tratar o achado como falso positivo, pois varreduras avaliam apenas sistemas operacionais e aplicações instaladas",
      "B) Substituir o equipamento, já que vulnerabilidades em dispositivos de rede não podem ser corrigidas por atualizações",
      "C) Aplicar os patches do sistema operacional do servidor de gerenciamento, que também corrigem os dispositivos gerenciados",
      "D) Aplicar a atualização de firmware do fabricante, geralmente indicada no relatório com o local de download no site do fornecedor"
    ],
    "ans": 3,
    "exp": "Sistemas operacionais e aplicações não são os únicos que precisam de atualizações regulares: varreduras também detectam falhas em dispositivos de rede que exigem atualizações de firmware do fabricante. Esses relatórios se assemelham aos de patch ausente e normalmente indicam o local no site do fornecedor onde a atualização está disponível para download. A alternativa A é incorreta porque as varreduras também avaliam dispositivos de rede. A alternativa B ignora que a correção indicada é justamente a atualização de firmware. A alternativa C é a mais próxima, mas confunde os alvos: a falha está no firmware do próprio appliance, e não no sistema operacional de outro servidor."
  },
  {
    "t": "Durante uma reunião, um engenheiro de redes afirma que \"todos os servidores web da empresa usam SSL para proteger as conexões\". Qual é a MELHOR resposta do analista de segurança?",
    "opts": [
      "A) Questionar se ele se refere, na verdade, ao TLS, já que o SSL não é mais seguro e o termo costuma ser usado de forma imprecisa",
      "B) Aceitar a afirmação, pois SSL e TLS são nomes diferentes para o mesmo protocolo, com as mesmas características de segurança",
      "C) Aceitar a afirmação, pois o SSL continua seguro quando usado exclusivamente para proteger conexões HTTPS com servidores web",
      "D) Recomendar a padronização de todos os servidores na versão 3 do SSL, a mais recente e segura desse protocolo"
    ],
    "ans": 0,
    "exp": "Muitos analistas usam a sigla SSL, de forma incorreta, para se referir tanto ao SSL quanto ao TLS. Como o SSL não é mais seguro e não deve ser usado, o analista deve empregar a terminologia com precisão e questionar se o interlocutor se refere, na verdade, ao TLS, evitando ambiguidade. A alternativa B é incorreta porque o TLS é um substituto do SSL que oferece funcionalidade semelhante, mas sem as falhas de segurança do SSL; não são o mesmo protocolo. A alternativa C erra porque o SSL não é seguro em nenhum uso de produção, inclusive em conexões HTTPS. A alternativa D recomenda justamente uma versão desatualizada do SSL, que não deve ser usada."
  },
  {
    "t": "Qual dos seguintes protocolos nunca deve ser usado em uma rede pública?",
    "opts": [
      "A) SSH",
      "B) HTTPS",
      "C) SFTP",
      "D) Telnet"
    ],
    "ans": 3,
    "exp": "O Telnet é um protocolo inseguro que não utiliza criptografia. Todos os outros protocolos mencionados são considerados seguros."
  },
  {
    "t": "Betty está escolhendo um protocolo de criptografia de transporte para usar em um novo site público que está criando. Qual protocolo seria a melhor escolha?",
    "opts": [
      "A) SSL 2.0",
      "B) SSL 3.0",
      "C) TLS 1.0",
      "D) TLS 1.3"
    ],
    "ans": 3,
    "exp": "O TLS 1.3 é um protocolo de transporte seguro que oferece suporte ao tráfego web. Todos os outros protocolos listados apresentam falhas que os tornam inseguros e inadequados para uso."
  },
  {
    "t": "Uma varredura aponta que diversos servidores web de produção suportam o SSL versão 3 e versões iniciais do TLS. Qual deve ser a recomendação aos administradores?",
    "opts": [
      "A) Desativar o SSL 3 e manter as versões iniciais do TLS, já que o TLS substituiu o SSL sem as mesmas falhas de segurança",
      "B) Manter todos os protocolos habilitados, configurando os servidores para dar preferência ao TLS 1.3 nas conexões",
      "C) Desativar o suporte ao SSL e às versões iniciais do TLS, mantendo apenas versões mais novas, como TLS 1.2 ou 1.3",
      "D) Manter o SSL 3 apenas nos servidores de redes privadas, onde as conexões não estão sujeitas a ataques de espionagem"
    ],
    "ans": 2,
    "exp": "O SSL não é mais considerado seguro e não deve ser usado em sistemas de produção, e o mesmo vale para as versões iniciais do TLS; conexões que usam essas versões podem estar sujeitas a ataques de espionagem. Por isso, os administradores devem desativar o suporte a esses protocolos antigos e manter apenas versões mais novas, como TLS 1.2 ou 1.3. A alternativa A é a mais próxima, mas mantém as versões iniciais do TLS, que também são inseguras. A alternativa B deixa os protocolos antigos habilitados, mantendo a exposição. A alternativa D é incorreta porque qualquer conexão que use essas versões desatualizadas pode estar sujeita a espionagem, inclusive em redes privadas."
  },
  {
    "t": "Uma varredura aponta que um servidor web que utiliza TLS suporta conjuntos de cifras RC4. Um gestor sugere \"trocar o TLS por um algoritmo mais forte\". Qual é a ação CORRETA para tratar o achado?",
    "opts": [
      "A) Substituir o protocolo TLS, pois ele é o algoritmo criptográfico responsável pela fraqueza do RC4",
      "B) Alterar o conjunto de cifras suportadas no servidor, removendo o RC4 e mantendo apenas cifras seguras",
      "C) Manter o RC4, pois a exploração exige dezenas de milhões de textos cifrados, o que a torna inviável na prática",
      "D) Migrar o servidor para o SSL 3.0, que negocia cifras de forma independente e não utiliza o RC4"
    ],
    "ans": 1,
    "exp": "SSL e TLS não são cifras criptográficas: são protocolos que descrevem como as cifras podem ser usadas e permitem ao administrador definir, servidor por servidor, quais cifras são aceitas. Por isso, o achado é resolvido alterando o conjunto de cifras suportadas no servidor, eliminando o RC4 e mantendo apenas cifras seguras, como os conjuntos AES-GCM com TLS 1.2, conforme o suporte de navegadores e servidores. A alternativa A trata o TLS como algoritmo criptográfico. A alternativa C é a mais próxima, pois a exploração de fato exige muitos textos cifrados, mas a recomendação é evitar o RC4, suscetível à espionagem. A alternativa D migra para o SSL 3.0, versão que não deve mais ser usada."
  },
  {
    "t": "Durante a revisão de uma varredura, um analista precisa explicar à equipe o significado mais provável de diferentes erros de certificado encontrados em servidores web. Qual associação está CORRETA?",
    "opts": [
      "A) Certificado expirado: indica o uso de um certificado retirado de outro site",
      "B) CA desconhecida: indica que o administrador deixou de renovar o certificado a tempo",
      "C) Nome incompatível: indica que o certificado foi emitido por uma entidade não confiável",
      "D) Nome incompatível: pode indicar o uso de um certificado retirado de outro site"
    ],
    "ans": 3,
    "exp": "Um nome no certificado incompatível com o nome do servidor é um erro muito sério, pois pode indicar o uso de um certificado retirado de outro site, o equivalente digital de usar uma identidade falsa emprestada. As demais alternativas trocam as interpretações. A alternativa A atribui ao certificado expirado o significado da incompatibilidade de nomes, quando a expiração indica, muito provavelmente, que o administrador deixou de renová-lo a tempo. A alternativa B associa essa falta de renovação à CA desconhecida, que na verdade indica um emissor não confiável para o sistema ou navegador. A alternativa C atribui à incompatibilidade de nomes o significado do erro de CA desconhecida."
  },
  {
    "t": "Um funcionário, conectado ao Wi-Fi público de um voo, tenta acessar o webmail corporativo e recebe o erro NET::ERR_CERT_COMMON_NAME_INVALID: o certificado apresentado foi emitido para o domínio do provedor de Wi-Fi. Qual é a interpretação CORRETA?",
    "opts": [
      "A) O certificado é de outro domínio, típico de portais cativos; o usuário não fala com o site pretendido e não deve enviar dados sensíveis",
      "B) O erro indica apenas um certificado expirado do webmail, cuja renovação foi esquecida; o usuário pode prosseguir com segurança",
      "C) O erro é inofensivo em portais cativos, pois a conexão continua criptografada diretamente com o site pretendido",
      "D) O certificado foi emitido por uma CA desconhecida; basta adicioná-la às autoridades confiáveis do navegador para prosseguir"
    ],
    "ans": 0,
    "exp": "O erro mostra que o certificado apresentado foi emitido para outro domínio, situação típica de redes que usam um portal cativo para autenticar usuários em redes sem fio públicas. Ele alerta que o usuário não está se comunicando com o site pretendido e, portanto, não deve fornecer informações sensíveis. A alternativa C é a mais próxima, pois reconhece o portal cativo, mas erra ao afirmar que a conexão segue diretamente com o site pretendido. A alternativa B confunde o erro de nome com a expiração do certificado. A alternativa D o confunde com CA desconhecida e ainda recomenda ignorar um alerta importante, algo que, infelizmente, ocorre com frequência."
  },
  {
    "t": "Durante uma varredura externa, um analista envia uma requisição HTTP ao endereço público de uma aplicação protegida por um firewall com NAT. O servidor retorna: http HTTP/1.1 302 Found Connection: close Content-Type: text/html Location: https://192.168.0.115/. Qual interpretação é MAIS adequada para registrar o achado?",
    "opts": [
      "A) O retorno do endereço privado indica uma falha no mapeamento NAT, que encaminhou a requisição ao servidor incorreto.",
      "B) O redirecionamento permite identificar um servidor Microsoft IIS 4.0, pois essa divulgação caracteriza sua configuração padrão.",
      "C) O cabeçalho divulga um endereço privado e pode ajudar um atacante a conhecer a configuração interna da rede protegida.",
      "D) O cabeçalho revela um endereço interno, mas o risco depende de o cliente externo conseguir estabelecer uma conexão com esse endereço."
    ],
    "ans": 2,
    "exp": "O campo Location expõe o IP privado do servidor, fornecendo informações sobre a rede interna. A está errada porque essa resposta não demonstra falha no mapeamento NAT: o próprio servidor pode incluir seu endereço privado no cabeçalho. B está errada porque o problema também pode afetar outros servidores, aplicações, proxies e balanceadores. D está errada porque a informação pode auxiliar o reconhecimento da rede mesmo sem permitir conexão direta ao endereço divulgado."
  },
  {
    "t": "Uma organização utiliza dispositivos IoT no controle de acesso físico e na automação de sistemas de climatização. O analista identifica dificuldades para obter atualizações desses equipamentos e precisa estabelecer uma rotina para descobrir correções disponíveis. Qual abordagem é MAIS adequada?",
    "opts": [
      "A) Assinar os boletins de segurança dos fabricantes e realizar varreduras de vulnerabilidades nos dispositivos.",
      "B) Acompanhar as atualizações dos servidores de automação e usar seus resultados como referência para os dispositivos conectados.",
      "C) Aguardar os mecanismos de atualização automática dos fabricantes e investigar os dispositivos que não receberem correções.",
      "D) Consultar os boletins dos fabricantes quando ocorrerem falhas de funcionamento e direcionar as varreduras aos dispositivos afetados."
    ],
    "ans": 0,
    "exp": "Varreduras de vulnerabilidades e acompanhamento proativo dos boletins dos fabricantes permitem descobrir atualizações para dispositivos IoT. B está errada porque avaliar os servidores de automação não substitui o acompanhamento dos próprios dispositivos. C pressupõe mecanismos de atualização automática que podem não existir. D condiciona a investigação a falhas de funcionamento, deixando de acompanhar proativamente vulnerabilidades e correções."
  },
  {
    "t": "Vários serviços online ficam indisponíveis simultaneamente. A investigação identifica que um provedor de DNS deixou de responder às consultas após receber um volume massivo de requisições. O tráfego foi originado de câmeras de segurança, DVRs e monitores de bebê infectados, que receberam instruções para agir ao mesmo tempo. Qual descrição representa MELHOR o mecanismo do ataque?",
    "opts": [
      "A) Uma botnet de IoT sobrecarregou diretamente os serviços online, e a interrupção do provedor de DNS foi consequência da indisponibilidade dessas aplicações.",
      "B) Um DDoS sobrecarregou os dispositivos IoT, e a indisponibilidade desses equipamentos comprometeu a capacidade de resposta do provedor de DNS.",
      "C) Uma botnet formada pelos servidores do provedor de DNS enviou requisições aos dispositivos IoT, provocando a interrupção dos serviços online.",
      "D) Uma botnet de IoT sobrecarregou o provedor de DNS, comprometendo o acesso aos serviços que dependiam de suas respostas."
    ],
    "ans": 3,
    "exp": "Os dispositivos IoT infectados atuaram como fontes de um DDoS contra o provedor de DNS. A sobrecarga impediu as respostas às consultas, afetando o acesso a diversos serviços. A está errada porque coloca os serviços online como alvos diretos. B inverte o papel dos dispositivos IoT: eles geraram o tráfego, em vez de serem os alvos sobrecarregados. C inverte a composição da botnet e o sentido do ataque: os dispositivos IoT atacaram o provedor de DNS."
  },
  {
    "t": "Qual das seguintes condições não resultaria em um aviso sobre o certificado durante uma varredura de vulnerabilidades de um servidor web?",
    "opts": [
      "A) Uso de uma CA não confiável",
      "B) Inclusão de uma chave pública de criptografia",
      "C) Expiração do certificado",
      "D) Divergência no nome do certificado"
    ],
    "ans": 1,
    "exp": "Os certificados digitais destinam-se a fornecer chaves públicas de criptografia, e isso não causaria um erro. As outras circunstâncias são todas motivos de preocupação e acionariam um alerta durante uma varredura de vulnerabilidades."
  },
  {
    "t": "Que tipo de ataque depende do fato de que os usuários frequentemente estão autenticados em vários sites simultaneamente no mesmo navegador?",
    "opts": [
      "A) Injeção de SQL",
      "B) Scripting entre sites",
      "C) Falsificação de requisições entre sites",
      "D) Inclusão de arquivo"
    ],
    "ans": 2,
    "exp": "Os ataques XSRF funcionam com base na suposição razoável de que os usuários estão autenticados em vários sites diferentes ao mesmo tempo. Os invasores então inserem em um site um código que envia um comando para um segundo site."
  },
  {
    "t": "Durante a avaliação de uma aplicação de comércio eletrônico, um analista identifica que o conteúdo do campo de pesquisa é utilizado diretamente na construção de consultas SQL. Ele encontra a seguinte entrada: orange tiger pillow'; SELECT CustomerName, CreditCardNumber FROM Orders; -- Considerando que o banco aceite a execução dos comandos e que a aplicação tenha as permissões necessárias, qual efeito essa entrada pode produzir?",
    "opts": [
      "A) Ampliar a consulta de produtos para retornar todos os itens do catálogo, sem executar uma consulta separada à tabela de pedidos.",
      "B) Acrescentar os nomes e os números de cartões dos clientes às colunas retornadas pela consulta original de produtos.",
      "C) Executar a consulta de produtos e uma segunda consulta capaz de recuperar nomes de clientes e números de cartões de crédito.",
      "D) Substituir a consulta de produtos pela consulta de pedidos, fazendo o banco processar apenas os dados dos clientes."
    ],
    "ans": 2,
    "exp": "O apóstrofo permite encerrar o trecho de texto da consulta, e o ponto e vírgula separa os comandos. Se a execução for bem-sucedida, a consulta de produtos será seguida pela consulta dos nomes e cartões. A está errada porque a entrada não transforma a pesquisa em uma seleção de todos os produtos. B confunde uma segunda consulta com a ampliação das colunas da primeira. D está errada porque a consulta original não é substituída."
  },
  {
    "t": "Uma aplicação de catálogo possui acesso à tabela de produtos e a outra tabela que contém dados de cartões de crédito. A equipe deseja impedir a leitura dos cartões mesmo que um comando SQL malicioso consiga chegar ao banco de dados. A pesquisa de produtos precisa continuar funcionando. Qual medida atende MAIS diretamente a esse objetivo?",
    "opts": [
      "A) Reforçar a validação de entrada para rejeitar caracteres e textos inesperados no campo de pesquisa.",
      "B) Restringir as permissões da aplicação no banco às tabelas necessárias para consultar o catálogo de produtos.",
      "C) Modificar os scripts CGI para realizar corretamente o escape dos argumentos utilizados na construção das consultas.",
      "D) Restringir o acesso à aplicação vulnerável enquanto o fornecedor prepara uma correção para o componente afetado."
    ],
    "ans": 1,
    "exp": "O menor privilégio restringe as tabelas que a aplicação pode acessar, impedindo que uma função de catálogo leia dados de cartões. A e C atuam sobre a entrada e a construção dos comandos, mas não restringem as permissões de uma consulta maliciosa que já tenha chegado ao banco. D limita o acesso à aplicação, sem definir quais tabelas ela pode consultar."
  },
  {
    "t": "Durante uma varredura, o Nessus identifica uma possível injeção SQL cega baseada em tempo. O alerta foi gerado após parâmetros especialmente preparados provocarem uma resposta mais lenta da aplicação. O relatório informa que o script de detecção é experimental e classifica a vulnerabilidade como alta. Qual é a conduta MAIS adequada para tratar o achado?",
    "opts": [
      "A) Modificar o escape dos argumentos e registrar o achado como corrigido, considerando a alteração no tratamento da entrada uma confirmação suficiente.",
      "B) Investigar o achado com os desenvolvedores, validar a existência da vulnerabilidade e corrigir o código afetado caso a falha seja confirmada.",
      "C) Aplicar o menor privilégio no banco e classificar a vulnerabilidade como eliminada quando a aplicação deixar de acessar tabelas com dados confidenciais.",
      "D) Repetir a varredura e considerar a vulnerabilidade confirmada se a classificação alta persistir, adotando o novo relatório como validação suficiente."
    ],
    "ans": 1,
    "exp": "O atraso é um indício de possível injeção SQL, e o script experimental pode gerar falsos positivos. A conduta adequada é validar o achado com os desenvolvedores e corrigir o código se a falha for confirmada. A encerra o achado sem confirmar o problema e a correção. C confunde redução do impacto com eliminação da vulnerabilidade. D trata a repetição do alerta e sua severidade como confirmação suficiente."
  },
  {
    "t": "Um analista documenta dois comportamentos durante testes em uma aplicação web: Teste I: um conteúdo malicioso enviado ao site permanece armazenado no servidor. Quando outros usuários acessam esse conteúdo, o script é executado em seus navegadores. Teste II: um usuário é induzido a enviar código malicioso em uma string de consulta. O servidor inclui esse código na resposta à própria requisição, provocando sua execução no navegador, sem armazená-lo para acessos posteriores. Como os testes I e II devem ser classificados, respectivamente?",
    "opts": [
      "A) XSS persistente e XSS refletido.",
      "B) XSS refletido e XSS persistente.",
      "C) XSS persistente e injeção SQL.",
      "D) Injeção SQL e XSS refletido."
    ],
    "ans": 0,
    "exp": "No teste I, o código permanece armazenado no servidor e é executado quando outros usuários acessam o conteúdo: XSS persistente. No teste II, o servidor devolve o código enviado na requisição: XSS refletido. B inverte as classificações. C classifica indevidamente o segundo teste como injeção SQL. D faz o mesmo com o primeiro; em ambos os testes, a evidência é a execução de scripts no navegador, não de comandos SQL no banco."
  },
  {
    "t": "Uma equipe concluiu a revisão das consultas SQL de uma aplicação. Durante o levantamento dos demais componentes, um analista identifica funções que recebem dados de usuários e os inserem em documentos XML e consultas LDAP. Qual decisão é MAIS adequada para completar a avaliação de falhas de injeção?",
    "opts": [
      "A) Examinar as consultas LDAP quanto à injeção e revisar os documentos XML apenas quanto à presença de scripts executados no navegador.",
      "B) Examinar os documentos XML quanto à injeção e limitar a revisão das consultas LDAP à verificação dos controles de autenticação.",
      "C) Examinar XML e LDAP como possíveis casos de XSS, considerando o recebimento e o processamento de conteúdo fornecido por usuários.",
      "D) Examinar XML e LDAP quanto à introdução de conteúdo malicioso, considerando que falhas de injeção também podem afetar esses contextos."
    ],
    "ans": 3,
    "exp": "Falhas de injeção também podem introduzir conteúdo malicioso em documentos XML e consultas LDAP. A restringe indevidamente a análise de XML a scripts executados no navegador. B reduz a avaliação de LDAP à autenticação, deixando de examinar a entrada maliciosa. C confunde processamento de dados fornecidos pelo usuário com XSS, que envolve execução de scripts no navegador."
  },
  {
    "t": "Uma aplicação permite consultar documentos de políticas por meio do parâmetro document. Durante um teste autorizado, um analista envia a seguinte requisição: www.myserver.com/policy?document='../payroll/mike.pdf'. O servidor retorna um documento da folha de pagamento, embora o usuário devesse acessar apenas a pasta de políticas. Não foi observada execução de código contido no arquivo. Qual interpretação descreve MAIS precisamente o resultado?",
    "opts": [
      "A) Inclusão de arquivos locais, pois o parâmetro fez o servidor executar um arquivo existente em outra pasta.",
      "B) Travessia de diretórios, pois o parâmetro permitiu sair da pasta de políticas e recuperar um arquivo de outra área.",
      "C) Inclusão de arquivos remotos, pois o parâmetro fez a aplicação executar conteúdo obtido de outro servidor.",
      "D) SSRF, pois o parâmetro fez o servidor consultar uma URL interna para recuperar informações não públicas."
    ],
    "ans": 1,
    "exp": "O caminho ../ sobe ao diretório pai e permite alcançar a pasta payroll, caracterizando travessia de diretórios. A pressupõe execução do arquivo local, que não foi observada. C pressupõe execução de código armazenado em um servidor remoto, ausente no cenário. D confunde a navegação pelo sistema de arquivos com o acesso do servidor a uma URL fornecida pelo usuário."
  },
  {
    "t": "Um analista confirma dois comportamentos em uma aplicação vulnerável: Teste I: a manipulação de um parâmetro faz o servidor executar código de um arquivo já armazenado em outra pasta do próprio servidor. Teste II: a manipulação do parâmetro faz o servidor executar código obtido de um servidor controlado pelo atacante, sem exigir que ele armazene previamente o arquivo no servidor da aplicação. Quais são as classificações MAIS específicas para os testes I e II, respectivamente?",
    "opts": [
      "A) Inclusão de arquivos locais (LFI) e inclusão de arquivos remotos (RFI).",
      "B) Travessia de diretórios e inclusão de arquivos remotos (RFI).",
      "C) Inclusão de arquivos locais (LFI) e falsificação de requisições do lado do servidor (SSRF).",
      "D) Inclusão de arquivos remotos (RFI) e inclusão de arquivos locais (LFI)."
    ],
    "ans": 0,
    "exp": "No teste I, o código executado já está no próprio servidor: LFI. No teste II, o código é obtido de um servidor remoto e executado: RFI. B reduz o primeiro teste à recuperação de arquivos, ignorando a execução. C confunde a execução de código remoto com a recuperação de informações por uma URL em SSRF. D inverte as origens local e remota dos arquivos."
  },
  {
    "t": "Bonnie encontra entradas em um log de servidor web indicando que os responsáveis pelos testes de penetração tentaram acessar a seguinte URL:\n\nwww.mycompany.com/sortusers.php?file=C:\\uploads\\attack.exe\n\nQue tipo de ataque eles provavelmente tentaram realizar?",
    "opts": [
      "A) XSS refletido",
      "B) XSS persistente",
      "C) Inclusão de arquivo local",
      "D) Inclusão de arquivo remoto"
    ],
    "ans": 2,
    "exp": "Essa URL contém o endereço de um arquivo local passado para uma aplicação web como argumento. Muito provavelmente, trata-se de uma exploração de inclusão de arquivo local (LFI), que tenta executar um arquivo malicioso que os responsáveis pelos testes enviaram anteriormente para o servidor."
  },
  {
    "t": "Qual dos seguintes termos não é normalmente usado para descrever a conexão de dispositivos físicos a uma rede?",
    "opts": [
      "A) IoT",
      "B) IDS",
      "C) SCADA",
      "D) ICS"
    ],
    "ans": 1,
    "exp": "Sistemas de detecção de intrusão (IDSs) são um controle de segurança usado para detectar ataques à rede ou ao host. A Internet das Coisas (IoT), os sistemas de controle supervisório e aquisição de dados (SCADA) e os sistemas de controle industrial (ICSs) estão todos associados à conexão de objetos do mundo físico a uma rede."
  },
  {
    "t": "Durante uma investigação, a equipe identifica que uma vulnerabilidade de inclusão de arquivos anteriormente explorada deixou de ser reproduzível. Entretanto, encontra um arquivo no servidor que recebe comandos por HTTP/HTTPS, executa esses comandos e apresenta os resultados no navegador. Qual avaliação é MAIS adequada?",
    "opts": [
      "A) Trata-se de uma web shell, mas sua execução depende da permanência da vulnerabilidade de inclusão de arquivos originalmente explorada.",
      "B) Trata-se de uma web shell; a falha inicial pode ter sido corrigida pelo atacante, sem que isso encerre o acesso por comandos.",
      "C) Trata-se de RFI, pois o recebimento de comandos por HTTP/HTTPS indica que o código está hospedado fora do servidor comprometido.",
      "D) Trata-se de CSRF, pois o navegador envia comandos ao servidor pelas mesmas portas utilizadas no acesso legítimo à aplicação."
    ],
    "ans": 1,
    "exp": "A execução de comandos no servidor com resultados exibidos no navegador caracteriza uma web shell. O atacante pode corrigir a falha inicial para reduzir sua descoberta por outros atacantes ou pela equipe de segurança. A confunde a vulnerabilidade usada para entrar com o acesso posteriormente estabelecido. C não é sustentada: HTTP/HTTPS não determina onde o código está armazenado. D exigiria explorar a confiança na sessão de uma vítima para realizar uma ação involuntária, o que não foi demonstrado."
  },
  {
    "t": "Um usuário permanece conectado ao site de seu banco enquanto acessa um fórum. Ao clicar em um link publicado no fórum, seu navegador envia uma requisição ao banco, que realiza uma transferência não pretendida pelo usuário. Qual proposta de proteção é MAIS adequada para esse cenário?",
    "opts": [
      "A) Exigir um token fixo publicado na documentação pública da aplicação e conferir sua presença nas requisições de transferência.",
      "B) Verificar se a URL de destino pertence ao banco e aceitar as solicitações quando o usuário já estiver conectado.",
      "C) Exigir tokens seguros desconhecidos pelo atacante e verificar se a URL de referência da requisição pertence ao próprio site.",
      "D) Validar os caracteres dos parâmetros de transferência e autorizar a operação quando todos os valores apresentarem o formato esperado."
    ],
    "ans": 2,
    "exp": "O cenário caracteriza CSRF: uma requisição enviada pelo navegador de um usuário conectado realiza uma ação não pretendida. Tokens desconhecidos pelo atacante e a verificação da URL de referência ajudam a impedir esse fluxo. A falha porque um token público pode ser incluído pelo atacante no link malicioso. B verifica condições que também existem no ataque: destino legítimo e usuário conectado. D não impede uma requisição maliciosa cujos parâmetros tenham formato válido."
  },
  {
    "t": "Uma aplicação recebe uma URL fornecida pelo usuário, acessa esse endereço e apresenta as informações recuperadas. Durante um teste, o analista fornece uma URL não pública, acessível pelo servidor da aplicação, mas inacessível diretamente pelo computador do analista. A aplicação retorna informações desse endereço. Não há execução de código obtido da URL nem participação de outro usuário conectado. Qual vulnerabilidade explica MAIS precisamente esse comportamento?",
    "opts": [
      "A) RFI, porque a aplicação recebeu uma URL e recuperou conteúdo hospedado em outro servidor.",
      "B) CSRF, porque uma entrada do usuário fez o servidor realizar uma requisição que ele não deveria aceitar.",
      "C) Travessia de diretórios, porque a aplicação recuperou informações localizadas fora da área de acesso público.",
      "D) SSRF, porque o servidor foi induzido a acessar uma URL fornecida pelo usuário e expôs informações não públicas."
    ],
    "ans": 3,
    "exp": "O servidor foi induzido a acessar uma URL fornecida pelo usuário e revelou informações não públicas, caracterizando SSRF. A confunde recuperação de informações com execução de código remoto, característica da RFI descrita. B exigiria explorar a sessão de uma vítima para enviar uma ação em seu nome. C envolve caminhos do sistema de arquivos e navegação entre diretórios, não demonstrados nesse caso."
  },
  {
    "t": "Os logs do portal corporativo mostram tentativas de login em centenas de contas diferentes, cada uma testada com o mesmo pequeno conjunto de senhas muito comuns. Nenhuma conta recebe mais do que poucas tentativas. Qual ataque MELHOR descreve esse padrão?",
    "opts": [
      "A) Credential stuffing, pois o atacante testa credenciais em várias contas do portal corporativo",
      "B) Sequestro de sessão, pois o atacante tenta assumir sessões ativas de usuários legítimos",
      "C) Password spraying, pois o atacante testa poucas senhas comuns em muitas contas diferentes",
      "D) Impersonação, pois o objetivo final do atacante é assumir a identidade de um usuário legítimo"
    ],
    "ans": 2,
    "exp": "No password spraying, o atacante usa uma lista de senhas comuns e tenta fazer login em muitas contas diferentes, precisando encontrar apenas uma combinação válida; o ataque funciona quando os usuários não escolhem senhas suficientemente únicas. A alternativa A é a mais próxima, mas o credential stuffing usa pares de usuário e senha roubados no comprometimento de outro site, e não uma lista de senhas comuns. A alternativa B descreve um ataque voltado a sessões, e não a tentativas de login. A alternativa D confunde o possível objetivo final com a técnica observada: a impersonação ocorre quando o atacante assume a identidade de um usuário legítimo, mas o padrão nos logs é típico de password spraying."
  },
  {
    "t": "Após um fórum de compras on-line, sem relação com a empresa, sofrer um vazamento de nomes de usuário e senhas, várias contas corporativas de funcionários foram acessadas com exatamente as mesmas credenciais. Qual ataque ocorreu e qual controle é o MAIS eficaz para proteger os sistemas sensíveis?",
    "opts": [
      "A) Credential stuffing; exigir autenticação multifator nos sistemas sensíveis",
      "B) Password spraying; exigir autenticação multifator nos sistemas sensíveis",
      "C) Credential stuffing; bloquear o acesso ao site comprometido a partir da rede corporativa",
      "D) Impersonação; reforçar a proteção dos identificadores de sessão nas estações de trabalho"
    ],
    "ans": 0,
    "exp": "O credential stuffing ocorre quando o atacante usa pares de usuário e senha roubados no comprometimento de um site para acessar outro, potencialmente sem relação, e tem sucesso quando os usuários reutilizam a mesma senha em vários sites. Além de incentivar boas práticas de gerenciamento de senhas, exigir autenticação multifator nos sistemas sensíveis protege contra esse tipo de vulnerabilidade. A alternativa B indica o controle correto, mas classifica mal o ataque: o password spraying usa listas de senhas comuns, e não credenciais vazadas. A alternativa C identifica o ataque, mas o bloqueio do site não impede o uso das credenciais já roubadas. A alternativa D descreve outro ataque e outro controle."
  },
  {
    "t": "Uma aplicação que utiliza OAuth apresenta uma falha de redirecionamento aberto que permite a atacantes assumirem a identidade de usuários legítimos. Além disso, testes mostram que identificadores de sessão podem ser capturados na rede. Qual é a abordagem MAIS adequada para mitigar esse risco?",
    "opts": [
      "A) Exigir autenticação multifator, que por si só elimina qualquer forma de impersonação e dispensa controles de sessão",
      "B) Adotar técnicas mais robustas de gerenciamento de sessão e proteger os identificadores de sessão na estação e na rede",
      "C) Obrigar a troca periódica de senhas, já que a impersonação decorre da reutilização de senhas entre diferentes sites",
      "D) Exigir senhas mais únicas, já que a impersonação depende de o atacante acertar senhas comuns em várias contas"
    ],
    "ans": 1,
    "exp": "A impersonação ocorre quando o atacante assume a identidade de um usuário legítimo, e falhas como redirecionamentos abertos do OAuth podem permiti-la. Sua prevenção pode exigir técnicas mais robustas de manipulação de sessão, como as recomendadas pela OWASP, além da proteção dos identificadores de sessão que o atacante poderia obter na estação de trabalho ou pela rede. A alternativa A é a mais próxima, mas a autenticação multifator é o controle indicado contra a reutilização de senhas e não substitui os controles de sessão exigidos no cenário. As alternativas C e D tratam de problemas de senha, como reutilização e senhas pouco únicas, que não explicam um ataque baseado em redirecionamento aberto e captura de sessão."
  },
  {
    "t": "Uma usuária tenta acessar o site de seu banco via HTTPS. Um atacante consegue se passar pelo servidor do banco, aceita a conexão da usuária e estabelece sua própria conexão com o servidor legítimo, repassando as requisições dela e as respostas do banco. Qual ataque está ocorrendo?",
    "opts": [
      "A) Sequestro de sessão, pois o atacante assume uma sessão já existente entre a usuária e o banco",
      "B) Espionagem passiva, pois o atacante apenas observa o tráfego criptografado, sem interferir nele",
      "C) Impersonação, pois o atacante assume a identidade do banco sem se conectar ao servidor legítimo",
      "D) Ataque on-path, pois o atacante se interpõe entre as partes e repassa o tráfego por conexões separadas"
    ],
    "ans": 3,
    "exp": "Em um ataque on-path (man-in-the-middle), o atacante interfere no fluxo de comunicação entre dois sistemas: ao se passar pelo servidor do banco, aceita a conexão da usuária, estabelece sua própria conexão com o servidor legítimo e repassa requisições e respostas, atuando como intermediário. A alternativa A é a mais próxima, mas o sequestro de sessão consiste em assumir uma sessão já existente, por exemplo, obtendo chaves ou cookies de sessão. A alternativa B descreve um espião que apenas observa o tráfego criptografado e não consegue lê-lo, sem interferir na comunicação. A alternativa C erra porque, no cenário, o atacante se conecta ao servidor legítimo e repassa o tráfego, em vez de substituí-lo completamente."
  },
  {
    "t": "Um atacante obteve os cookies que uma aplicação web usa para validar sessões e, com eles, assumiu a sessão ativa de um usuário sem conhecer sua senha. Qual abordagem é a MAIS adequada para limitar esse tipo de ataque?",
    "opts": [
      "A) Exigir senhas mais fortes, já que o atacante precisou descobrir a senha da vítima para assumir a sessão",
      "B) Proteger cookies e chaves de sessão, criptografando sessões e links de rede e protegendo-os no sistema local",
      "C) Adotar apenas criptografia ponta a ponta, que impede o sequestro mesmo se o atacante controlar o endpoint",
      "D) Proteger os cookies apenas no sistema local, já que o sequestro de sessão não envolve o tráfego de rede"
    ],
    "ans": 1,
    "exp": "O sequestro de sessão consiste em assumir uma sessão já existente, por exemplo, adquirindo a chave ou os cookies que o servidor usa para validá-la. Para limitar esse ataque, é preciso proteger os dados de que o atacante precisa, criptografando as sessões e os links de rede e protegendo essas informações no sistema local. A alternativa A é incorreta porque, no cenário, o atacante não precisou da senha. A alternativa C é a mais próxima, mas a criptografia ponta a ponta perde eficácia quando o atacante controla um endpoint ou possui as chaves de criptografia. A alternativa D ignora que o sequestro também pode ocorrer quando a sessão passa por um sistema controlado pelo atacante, o que exige proteger o tráfego de rede."
  },
  {
    "t": "Uma empresa usa um modelo de aprendizado de máquina, treinado com registros de transações passadas, para aprovar pedidos de crédito. Após o último retreinamento, o modelo passou a gerar previsões imprecisas, e a investigação revelou que um invasor havia inserido registros manipulados na base usada para treiná-lo. Qual ataque ocorreu e qual era seu objetivo?",
    "opts": [
      "A) Ataque on-path, cujo objetivo era interceptar as comunicações entre o modelo e seus usuários",
      "B) Sequestro de sessão, cujo objetivo era assumir as sessões dos analistas que operam o modelo",
      "C) Envenenamento de dados, cujo objetivo era levar o algoritmo a gerar um modelo impreciso",
      "D) Impersonação, cujo objetivo era consultar o modelo usando a identidade de um usuário legítimo"
    ],
    "ans": 2,
    "exp": "O envenenamento de dados tenta manipular o conjunto de dados de treinamento para que os algoritmos de aprendizado de máquina gerem modelos imprecisos; ao modificar ou influenciar esses dados, o atacante altera os modelos que a empresa usa em decisões críticas de negócio. A alternativa A descreve um ataque on-path, que interfere na comunicação entre dois sistemas, e não nos dados de treinamento. A alternativa B descreve o sequestro de sessão, focado em assumir sessões existentes. A alternativa D descreve a impersonação, em que o atacante assume a identidade de um usuário legítimo. Nenhuma delas explica a alteração dos registros usados para treinar o modelo."
  },
  {
    "t": "Monica descobre que um invasor publicou uma mensagem em um fórum web que ela administra e que essa mensagem está atacando os usuários que visitam o site. Qual dos seguintes tipos de ataque provavelmente ocorreu?",
    "opts": [
      "A) Injeção de SQL",
      "B) Injeção de malware",
      "C) Injeção de LDAP",
      "D) Cross-site scripting"
    ],
    "ans": 3,
    "exp": "Em um ataque de Cross-site scripting (XSS), um invasor insere em um site comandos de script que serão posteriormente executados por um visitante desavisado ao acessar o site. A ideia é enganar um usuário que visita um site confiável, levando-o a executar código malicioso colocado ali por um terceiro não confiável."
  },
  {
    "t": "Alan está analisando logs de um servidor web após um ataque e encontra muitos registros que contêm caracteres de ponto e vírgula e apóstrofo em consultas de usuários finais. De que tipo de ataque ele deve suspeitar?",
    "opts": [
      "A) Injeção de SQL",
      "B) Injeção de LDAP",
      "C) Scripting entre sites",
      "D) Estouro de buffer"
    ],
    "ans": 0,
    "exp": "Em um ataque de injeção de SQL, o invasor procura usar uma aplicação web para obter acesso ao banco de dados subjacente. Caracteres de ponto e vírgula e apóstrofo são característicos desses ataques."
  }
];
