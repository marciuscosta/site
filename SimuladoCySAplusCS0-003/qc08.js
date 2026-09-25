// Questões do arquivo Questionario_Cap8.txt, na ordem original.
// Os números do TXT servem apenas como separadores de questões.
const Qs = [
  {
    "t": "Uma varredura identifica um servidor que expõe a porta TCP 22 à internet, permitindo tentativas de acesso SSH por força bruta. Paralelamente, a equipe de segurança confirma que atacantes com ferramentas de força bruta varrem ativamente a faixa de endereços da empresa. Qual classificação está CORRETA?",
    "opts": [
      "A) A exposição da porta 22 é a vulnerabilidade, o atacante com a ferramenta de força bruta é a ameaça, e a combinação de ambos é o risco",
      "B) A exposição da porta 22 é a ameaça, o atacante com a ferramenta de força bruta é a vulnerabilidade, e a combinação de ambos é o risco",
      "C) A exposição da porta 22 é o risco, o atacante é a ameaça, e a vulnerabilidade só surge quando o ataque de força bruta tem sucesso",
      "D) A exposição da porta 22 é a vulnerabilidade, o atacante é o risco, e a ameaça corresponde ao impacto sobre a disponibilidade do servidor"
    ],
    "ans": 0,
    "exp": "Vulnerabilidades são fraquezas em sistemas ou controles que podem ser exploradas por uma ameaça, como a exposição da porta 22 à internet. Ameaças são eventos possíveis com impacto adverso sobre a confidencialidade, a integridade ou a disponibilidade, como o atacante com a ferramenta de força bruta. O risco ocorre na interseção entre a vulnerabilidade e a ameaça capaz de explorá-la. A alternativa B inverte ameaça e vulnerabilidade. A alternativa C erra ao tratar a exposição como risco e ao condicionar a vulnerabilidade ao sucesso do ataque, quando ela já existe antes disso. A alternativa D classifica o atacante como risco e confunde a ameaça com o impacto que ela pode causar."
  },
  {
    "t": "Uma varredura identifica que um servidor expõe o serviço SSH (porta TCP 22) à internet, permitindo tentativas de força bruta. A equipe confirma que o serviço não é mais necessário. Considerando que a organização não tem como eliminar os atacantes, qual ação trata o risco da forma MAIS completa?",
    "opts": [
      "A) Tentar eliminar a ameaça, identificando e bloqueando individualmente os atacantes que realizam varreduras de força bruta",
      "B) Manter o serviço exposto, pois uma vulnerabilidade só passa a representar risco após um ataque bem-sucedido",
      "C) Manter o serviço e adotar apenas medidas de redução do risco, já que eliminar vulnerabilidades nunca é viável",
      "D) Desligar o serviço SSH e fechar a porta 22, eliminando a vulnerabilidade e, consequentemente, o risco"
    ],
    "ans": 3,
    "exp": "Como a organização não pode eliminar os atacantes, não consegue tratar a ameaça, mas controla os serviços que executa. Ao desligar o SSH e fechar a porta 22, elimina a vulnerabilidade e, com ela, o risco, já que uma ameaça sem vulnerabilidade correspondente não representa risco. A alternativa C é a mais próxima, pois reduzir o risco é uma opção quando não é viável desligar o serviço, mas aqui o serviço não é mais necessário e a eliminação é possível. A alternativa A é inviável, pois não há como eliminar os atacantes. A alternativa B erra porque o risco já existe na combinação entre a exposição da porta e a existência de atacantes, antes de qualquer ataque bem-sucedido."
  },
  {
    "t": "Uma organização quer desenvolver uma lista abrangente de ameaças, vulnerabilidades e riscos de seu ambiente operacional. Qual abordagem fornece as informações necessárias para essa identificação?",
    "opts": [
      "A) Usar apenas as varreduras de vulnerabilidades de rotina, que identificam as ameaças e as vulnerabilidades do ambiente",
      "B) Reunir os resultados da inteligência de ameaças, de fontes internas e externas, e do gerenciamento de vulnerabilidades",
      "C) Usar apenas fontes externas de inteligência de ameaças, pois as vulnerabilidades só são conhecidas após incidentes",
      "D) Calcular a severidade de cada risco antes de levantar ameaças e vulnerabilidades, para priorizar a identificação"
    ],
    "ans": 1,
    "exp": "A identificação de riscos exige levantar as ameaças e as vulnerabilidades do ambiente operacional. As ameaças são identificadas pela inteligência de ameaças, que aproveita fontes internas e externas, e as vulnerabilidades, pelo programa de gerenciamento de vulnerabilidades, que pode ser automatizado com varreduras de rotina; depois, basta reunir essas informações em uma lista abrangente. A alternativa A é a mais próxima, mas as varreduras identificam vulnerabilidades, e não as ameaças que a organização enfrenta. A alternativa C ignora o papel das varreduras na descoberta de vulnerabilidades e despreza as fontes internas. A alternativa D inverte o processo, pois a severidade só pode ser avaliada depois que os riscos são identificados."
  },
  {
    "t": "Um analista compara dois riscos. O risco X tem probabilidade estimada de 60% de ocorrer no próximo ano e impacto de R$ 10.000. O risco Y tem probabilidade de 1% no mesmo período e impacto de R$ 200.000. Usando a relação entre probabilidade e magnitude, qual risco é MAIS severo?",
    "opts": [
      "A) O risco X, pois a combinação de probabilidade e magnitude resulta em severidade maior (6.000 contra 2.000)",
      "B) O risco Y, pois uma magnitude mais alta sempre torna o risco mais severo, independentemente da probabilidade",
      "C) Os dois têm a mesma severidade, pois ambos podem gerar perdas financeiras relevantes para a organização",
      "D) Não é possível compará-los, pois a fórmula de severidade nunca deve ser aplicada a valores numéricos"
    ],
    "ans": 0,
    "exp": "O cálculo de risco combina a probabilidade, que é a chance de uma ameaça explorar uma vulnerabilidade em um período especificado, com a magnitude, que é o impacto do risco caso ocorra. Aplicando a fórmula Severidade = Probabilidade × Magnitude, X resulta em 0,60 × 10.000 = 6.000, e Y, em 0,01 × 200.000 = 2.000; logo, X é mais severo. A alternativa B considera apenas a magnitude, ignorando que a probabilidade também determina o grau do risco. A alternativa C desconsidera a diferença entre as combinações dos dois fatores. A alternativa D é a mais próxima, pois a fórmula pode ser interpretada conceitualmente, mas alguns processos de avaliação de riscos de fato multiplicam esses valores."
  },
  {
    "t": "Jen identificou que faltava uma correção em um servidor Windows, o que poderia permitir a um invasor obter controle remoto do sistema. Após consultar seu gerente, ela aplicou a correção. Do ponto de vista da gestão de riscos, o que ela fez?",
    "opts": [
      "A) Removeu a ameaça",
      "B) Reduziu a ameaça",
      "C) Removeu a vulnerabilidade",
      "D) Reduziu a vulnerabilidade"
    ],
    "ans": 2,
    "exp": "Ao aplicar a correção, Jen removeu a vulnerabilidade de seu servidor. Isso também tem o efeito de eliminar esse risco específico. Jen não pode controlar a ameaça externa representada por um invasor tentando obter acesso ao seu servidor."
  },
  {
    "t": "Você percebe um grande número de ataques de injeção de SQL contra uma aplicação web operada por sua organização e instala um firewall de aplicação web para bloquear muitos desses ataques antes que eles cheguem ao servidor. Como você alterou a severidade desse risco?",
    "opts": [
      "A) Reduziu a magnitude",
      "B) Eliminou a vulnerabilidade",
      "C) Reduziu a probabilidade",
      "D) Eliminou a ameaça"
    ],
    "ans": 2,
    "exp": "A instalação de um firewall de aplicação web reduz a probabilidade de que um ataque alcance o servidor web. Ainda podem existir vulnerabilidades na aplicação web, e a ameaça de um ataque externo permanece inalterada. O impacto de um ataque bem-sucedido de injeção de SQL também não é alterado por um firewall de aplicação web."
  },
  {
    "t": "Um comitê de riscos analisa dois cenários: (1) uma falha com alta probabilidade de ser explorada no próximo ano, mas com impacto financeiro moderado; (2) um evento com impacto catastrófico, mas com probabilidade extremamente baixa de ocorrer. Qual abordagem está MAIS alinhada ao cálculo de risco?",
    "opts": [
      "A) Priorizar o cenário 2, já que a magnitude é o único fator que determina a severidade de um risco",
      "B) Não agir em nenhum dos cenários, já que nenhum deles combina probabilidade alta e magnitude alta",
      "C) Tomar medidas para reduzir o risco do cenário 1 e reconhecer o risco do cenário 2, sem alterar a operação",
      "D) Dar a mesma prioridade aos dois cenários, já que cada um apresenta pelo menos um fator elevado"
    ],
    "ans": 2,
    "exp": "Pelo cálculo de risco, um cenário com alta probabilidade e magnitude moderada justifica medidas para reduzir o risco, enquanto um evento de impacto catastrófico, mas extremamente improvável, pode ser reconhecido sem mudanças de comportamento, já que a severidade resulta da combinação dos dois fatores. A alternativa A considera apenas a magnitude, desprezando a probabilidade. A alternativa B é incorreta porque o cenário 1 já apresenta severidade suficiente para justificar ações de redução. A alternativa D ignora que a combinação dos fatores, e não a presença isolada de um fator elevado, define a severidade de cada risco."
  },
  {
    "t": "Um servidor de banco de dados tem valor de substituição de R$ 200.000. Estima-se que uma inundação danificaria 25% desse ativo e que um evento desse tipo ocorre, em média, uma vez a cada 20 anos. Quais são a expectativa de perda única (SLE) e a expectativa de perda anual (ALE)?",
    "opts": [
      "A) SLE de R$ 2.500 e ALE de R$ 50.000",
      "B) SLE de R$ 200.000 e ALE de R$ 10.000",
      "C) SLE de R$ 50.000 e ALE de R$ 2.500",
      "D) SLE de R$ 50.000 e ALE de R$ 1.000.000"
    ],
    "ans": 2,
    "exp": "A SLE é obtida multiplicando o valor do ativo pelo fator de exposição: R$ 200.000 × 25% = R$ 50.000. A ALE é obtida multiplicando a SLE pela ARO; como o evento ocorre uma vez a cada 20 anos, a ARO é 0,05, e a ALE é R$ 50.000 × 0,05 = R$ 2.500. A alternativa A inverte os dois valores. A alternativa B ignora o fator de exposição e trata o ativo como totalmente destruído, o que corresponderia a um EF de 100%. A alternativa D acerta a SLE, mas divide o valor pela ARO em vez de multiplicá-lo."
  },
  {
    "t": "Um ativo com valor de R$ 160.000 tem fator de exposição de 50% diante de determinado risco, cuja taxa anual de ocorrência é 0,5. Um fornecedor oferece um controle que eliminaria esse risco por R$ 55.000 por ano. Do ponto de vista estritamente financeiro, qual é a decisão MAIS adequada?",
    "opts": [
      "A) Contratar o controle, pois seu custo anual é inferior à SLE de R$ 80.000",
      "B) Não contratar o controle, pois seu custo anual supera a ALE de R$ 40.000",
      "C) Não contratar o controle, pois uma ARO inferior a 1,0 indica que o risco não precisa ser tratado",
      "D) Contratar o controle, pois seu custo anual é inferior ao valor do ativo protegido, de R$ 160.000"
    ],
    "ans": 1,
    "exp": "A SLE é R$ 160.000 × 50% = R$ 80.000, e a ALE é R$ 80.000 × 0,5 = R$ 40.000. Do ponto de vista estritamente financeiro, normalmente não faz sentido gastar anualmente mais do que a ALE para se proteger contra um risco; como o controle custa R$ 55.000 por ano, ele não se justifica. A alternativa A é a mais próxima, mas compara o custo anual à SLE, que representa a perda de uma única ocorrência, e não a perda esperada por ano. A alternativa D usa o valor do ativo, que também não é a métrica adequada. A alternativa C chega à decisão correta por um motivo errado: uma ARO inferior a 1,0 indica apenas que o risco ocorre menos de uma vez por ano, e não que dispensa tratamento."
  },
  {
    "t": "A equipe de riscos precisa avaliar o dano à reputação causado por um possível vazamento de dados, impacto difícil de expressar em valores monetários, e apresentar aos executivos uma visão clara dos fatores de risco. Qual abordagem é a MAIS adequada?",
    "opts": [
      "A) Usar apenas a avaliação quantitativa, pois dados numéricos permitem priorizar de forma direta qualquer tipo de risco",
      "B) Usar apenas a avaliação qualitativa, pois ela é incompatível com o uso de dados numéricos na mesma análise",
      "C) Aplicar uma única avaliação quantitativa a todas as ameaças em conjunto, evitando repetir o processo para cada risco",
      "D) Avaliar o dano à reputação com categorias qualitativas e combiná-las a elementos quantitativos na comunicação dos riscos"
    ],
    "ans": 3,
    "exp": "Avaliações qualitativas substituem a análise estritamente numérica por julgamentos e categorias subjetivas, permitindo avaliar riscos difíceis de quantificar, como o dano à reputação. Para comunicar os fatores de risco com clareza às partes interessadas, as organizações frequentemente combinam elementos qualitativos e quantitativos. A alternativa A é a mais próxima, pois a avaliação quantitativa facilita a priorização, mas não se aplica bem a impactos difíceis de quantificar. A alternativa B erra porque as duas abordagens são frequentemente combinadas. A alternativa C contraria a metodologia quantitativa, que avalia um risco por vez e deve ser repetida para cada combinação de ameaça e vulnerabilidade."
  },
  {
    "t": "Uma avaliação qualitativa de risco, feita por especialistas em escala Baixa/Média/Alta, classificou: intrusão no data center (probabilidade baixa, magnitude alta); DDoS no site (probabilidade média, magnitude alta); dispositivos não criptografados roubados e spear phishing (probabilidade alta, magnitude alta); malware em endpoints (probabilidade média, magnitude média). O gestor, com orçamento limitado, pensa em reforçar a segurança física do data center. Qual é a MELHOR recomendação?",
    "opts": [
      "A) Priorizar criptografia de disco completo em dispositivos móveis e um gateway de e-mail seguro",
      "B) Priorizar a segurança física do data center, já que a intrusão nesse ambiente tem magnitude alta",
      "C) Priorizar a proteção contra DDoS no site, já que combina magnitude alta e probabilidade média",
      "D) Priorizar o combate a malware nos endpoints, único risco classificado como médio nos dois fatores"
    ],
    "ans": 0,
    "exp": "Na avaliação qualitativa, os riscos de maior prioridade são os que combinam probabilidade e magnitude altas, como dispositivos não criptografados roubados e spear phishing. Assim, os recursos tendem a render mais em criptografia de disco completo para dispositivos móveis e em um gateway de e-mail seguro. A alternativa B reflete a ideia inicial do gestor, mas a intrusão no data center, embora de magnitude alta, tem probabilidade baixa. A alternativa C trata um risco de magnitude alta, porém de probabilidade apenas média, abaixo dos riscos mais críticos. A alternativa D foca um risco médio nos dois fatores, também menos prioritário."
  },
  {
    "t": "Aziz é responsável pela administração de um site de comércio eletrônico que gera US$ 100.000 por dia em receita para sua empresa. O site usa um banco de dados que contém informações sensíveis sobre os clientes da empresa. Ele prevê que o comprometimento desse banco de dados resultaria em US$ 500.000 em multas para a empresa.\n\nAziz está avaliando o risco de um ataque de injeção de SQL contra o banco de dados, no qual o invasor roubaria todas as informações de identificação pessoal (PII) dos clientes armazenadas nele. Após consultar informações de inteligência de ameaças, ele acredita que existe uma chance de 5% de um ataque bem-sucedido em qualquer ano.\n\nQual é o valor do ativo (AV)?",
    "opts": [
      "A) US$ 5.000",
      "B) US$ 100.000",
      "C) US$ 500.000",
      "D) US$ 600.000"
    ],
    "ans": 2,
    "exp": "O ativo em risco, neste caso, é o banco de dados de clientes. A perda de controle do banco de dados resultaria em uma multa de US$ 500.000, portanto o valor do ativo (AV) é de US$ 500.000."
  },
  {
    "t": "Aziz é responsável pela administração de um site de comércio eletrônico que gera US$ 100.000 por dia em receita para sua empresa. O site usa um banco de dados que contém informações sensíveis sobre os clientes da empresa. Ele prevê que o comprometimento desse banco de dados resultaria em US$ 500.000 em multas para a empresa.\n\nAziz está avaliando o risco de um ataque de injeção de SQL contra o banco de dados, no qual o invasor roubaria todas as informações de identificação pessoal (PII) dos clientes armazenadas nele. Após consultar informações de inteligência de ameaças, ele acredita que existe uma chance de 5% de um ataque bem-sucedido em qualquer ano.\n\nQual é o fator de exposição (EF)?",
    "opts": [
      "A) 5%",
      "B) 20%",
      "C) 50%",
      "D) 100%"
    ],
    "ans": 3,
    "exp": "O ataque resultaria na perda total dos dados dos clientes armazenados no banco de dados, tornando o fator de exposição (EF) igual a 100%."
  },
  {
    "t": "Uma organização precisa avaliar riscos ligados à saúde e segurança pública e ao moral dos funcionários, que não se prestam bem à análise numérica, e decide adotar uma avaliação qualitativa. Qual afirmação descreve CORRETAMENTE essa abordagem?",
    "opts": [
      "A) Descarta os fatores de probabilidade e magnitude, substituindo-os por uma classificação única de severidade",
      "B) Permite calcular diretamente o impacto financeiro de cada risco, desde que se use a escala Baixa/Média/Alta",
      "C) Baseia-se em dados objetivos coletados automaticamente, dispensando o julgamento de especialistas no assunto",
      "D) Usa os mesmos fatores de probabilidade e magnitude, mas em categorias subjetivas atribuídas por especialistas"
    ],
    "ans": 3,
    "exp": "Técnicas qualitativas substituem dados objetivos por julgamento subjetivo, mas continuam usando os mesmos fatores de probabilidade e magnitude, agora em categorias como Baixa, Média e Alta, com os riscos posicionados conforme o julgamento de especialistas no assunto. A alternativa A erra porque esses fatores não são descartados. A alternativa B é a mais próxima, pois a escala permite priorizar os riscos, mas não calcular diretamente seu impacto financeiro. A alternativa C inverte a lógica da abordagem, que depende justamente do julgamento subjetivo dos especialistas, e não de dados objetivos."
  },
  {
    "t": "Uma organização teme que switches recém-adquiridos possam ter sido interceptados durante o transporte e recebido código malicioso implantado em seu hardware antes da entrega. Qual avaliação trata DIRETAMENTE essa preocupação?",
    "opts": [
      "A) Avaliar os controles de segurança dos provedores de nuvem que tratam os dados sensíveis da organização",
      "B) Realizar avaliações de autenticidade da origem do hardware, validando que não houve adulteração após o fornecedor",
      "C) Classificar o risco de adulteração em uma escala Baixa/Média/Alta, com base no julgamento de especialistas",
      "D) Combinar técnicas quantitativas e qualitativas para obter uma visão dos riscos tangíveis e intangíveis do equipamento"
    ],
    "ans": 1,
    "exp": "Avaliações de autenticidade da origem do hardware validam que o equipamento recebido não foi adulterado depois de sair do fornecedor, tratando diretamente o risco de interceptação e implantação de código malicioso durante o transporte, como em casos revelados por documentos vazados da NSA. A alternativa A também faz parte da avaliação da cadeia de suprimentos, mas trata dos controles de provedores de nuvem, e não da integridade do hardware entregue. A alternativa C apenas classifica o risco, sem verificar se houve adulteração. A alternativa D oferece uma visão ampla dos riscos, mas também não valida a integridade do equipamento recebido."
  },
  {
    "t": "Após concluir a avaliação de risco da organização, o gestor de segurança questiona como esse trabalho apoiará as decisões de gerenciamento de riscos. Qual resposta descreve CORRETAMENTE o papel da avaliação nesse processo?",
    "opts": [
      "A) Substitui a escolha de estratégias pelo gerente de risco, definindo automaticamente o controle a aplicar em cada caso",
      "B) Serve apenas para documentar os riscos para fins de auditoria, sem influenciar a ordem em que serão tratados",
      "C) Orienta a priorização dos riscos mais prováveis e de maior magnitude e, se quantitativa, indica se o impacto justifica os custos",
      "D) Indica que apenas os riscos de maior magnitude devem ser tratados, independentemente da probabilidade de ocorrência"
    ],
    "ans": 2,
    "exp": "A avaliação de risco cumpre dois papéis no gerenciamento de riscos: orienta a priorização, para que os riscos de maior probabilidade e magnitude sejam tratados primeiro, e, quando quantitativa, ajuda a determinar se o impacto potencial de um risco justifica os custos da abordagem escolhida. A alternativa A é incorreta porque cabe aos gerentes de risco identificar a estratégia adequada para cada risco. A alternativa B ignora que a avaliação orienta diretamente a priorização. A alternativa D considera apenas a magnitude, quando a priorização combina probabilidade e magnitude."
  },
  {
    "t": "Para tratar o roubo de laptops e ataques DDoS contra seu site, uma organização instala travas de cabo nos notebooks e contrata um serviço de terceiros que impede que o tráfego de ataque chegue à sua rede. Qual estratégia de gerenciamento de riscos está sendo adotada?",
    "opts": [
      "A) Mitigação de risco, pois ambos são controles aplicados para reduzir a probabilidade ou o impacto dos riscos",
      "B) Transferência de risco, pois o serviço contra DDoS é contratado de um terceiro, que passa a responder pelo risco",
      "C) Evitação de risco, pois os controles impedem que os eventos indesejados ocorram na organização",
      "D) Aceitação de risco, pois a organização reconhece os riscos e mantém suas operações inalteradas"
    ],
    "ans": 0,
    "exp": "A mitigação de risco consiste em aplicar controles de segurança para reduzir a probabilidade e/ou a magnitude de um risco, e é a estratégia mais comum. As travas de cabo reduzem a probabilidade de roubo, e o serviço de terceiros impede que o tráfego chegue à rede, reduzindo a probabilidade de ataque. A alternativa B é a mais próxima, mas contratar um fornecedor não caracteriza, por si só, transferência: o serviço funciona como um controle mitigador. A alternativa C confunde a redução da probabilidade com a evitação, que é uma estratégia distinta. A alternativa D não se aplica, pois a organização está implementando controles, e não mantendo suas operações inalteradas."
  },
  {
    "t": "Uma empresa avalia dois controles contra ataques DDoS ao seu site: ampliar a largura de banda e a capacidade dos servidores para absorver o ataque, ou contratar um serviço de terceiros que impede que o tráfego malicioso chegue à rede. Qual afirmação descreve CORRETAMENTE o efeito de cada controle?",
    "opts": [
      "A) Mais largura de banda reduz a probabilidade do ataque; o serviço de terceiros reduz seu impacto",
      "B) Os dois controles reduzem apenas a probabilidade de que o ataque DDoS ocorra contra o site",
      "C) Os dois controles reduzem apenas o impacto do ataque DDoS sobre a disponibilidade do site",
      "D) Mais largura de banda reduz o impacto do ataque; o serviço de terceiros reduz sua probabilidade"
    ],
    "ans": 3,
    "exp": "Ampliar a largura de banda e a capacidade dos servidores permite absorver o bombardeio do ataque, reduzindo seu impacto. Já o serviço de mitigação de DDoS de terceiros impede que o tráfego chegue à rede, reduzindo a probabilidade de um ataque. A alternativa A inverte os efeitos dos dois controles. A alternativa B ignora que a capacidade adicional não impede o ataque, apenas ajuda a suportá-lo. A alternativa C ignora que o serviço de terceiros atua antes que o tráfego alcance a rede, reduzindo a probabilidade, e não apenas o impacto."
  },
  {
    "t": "Uma organização passa a afixar em seus laptops etiquetas de registro à prova de adulteração, que exibem um aviso a potenciais ladrões e, se removidas, deixam um resíduo permanente instruindo quem encontrar o dispositivo a contatar o fornecedor do serviço. Sobre quais fatores do risco de roubo esse controle atua?",
    "opts": [
      "A) Apenas sobre a probabilidade, pois o aviso afixado ao dispositivo desencoraja potenciais ladrões",
      "B) Sobre a probabilidade, ao dissuadir ladrões, e sobre o impacto, ao facilitar a devolução do dispositivo",
      "C) Apenas sobre o impacto, pois o resíduo deixado após a remoção ajuda a recuperar o dispositivo roubado",
      "D) Sobre nenhum dos dois fatores, pois a etiqueta pode ser removida pelo ladrão logo após o roubo"
    ],
    "ans": 1,
    "exp": "As etiquetas atuam sobre os dois fatores: o aviso proeminente dissuade potenciais ladrões, reduzindo a probabilidade de roubo, e, se a etiqueta for removida, o resíduo permanente orienta quem encontrar o dispositivo a contatar o fornecedor, reduzindo o impacto caso o equipamento seja devolvido. As alternativas A e C são as mais próximas, mas cada uma considera apenas um dos efeitos. A alternativa D erra porque a remoção da etiqueta não anula o controle: é justamente o resíduo deixado que contribui para a recuperação do dispositivo."
  },
  {
    "t": "Para eliminar o risco de ataques DDoS contra o site de comércio eletrônico da empresa, um conselheiro propõe desativar o site permanentemente. Qual estratégia de gerenciamento de riscos está sendo proposta e qual é sua principal desvantagem?",
    "opts": [
      "A) Evitação de risco; elimina o risco, mas tende a causar um impacto seriamente prejudicial ao negócio",
      "B) Evitação de risco; é a abordagem ideal, pois elimina o risco sem desvantagens relevantes para a organização",
      "C) Transferência de risco; desloca o impacto do ataque para os clientes, que deixam de acessar o site",
      "D) Evitação de risco; apenas reduz a probabilidade do ataque, sem eliminar completamente o risco"
    ],
    "ans": 0,
    "exp": "Desativar o site elimina completamente o potencial de ataques DDoS contra ele, o que caracteriza evitação de risco: mudar as práticas de negócio para que o risco não possa se materializar. A grande desvantagem é o impacto seriamente prejudicial ao negócio; na prática, desligar o site para evitar DDoS equivaleria ao próprio resultado que o ataque buscaria. A alternativa B ignora essa desvantagem, que torna a abordagem pouco aceitável para os líderes de negócio. A alternativa C erra porque a transferência desloca parte do impacto para outra entidade, como uma seguradora, e não para os clientes. A alternativa D é incorreta porque a evitação elimina completamente o risco, em vez de apenas reduzir sua probabilidade."
  },
  {
    "t": "Uma empresa possui uma apólice de seguro patrimonial e uma apólice empresarial geral. O comitê de riscos deseja se proteger financeiramente contra ataques DDoS, incluindo os custos de recuperação das operações e a receita perdida durante um ataque. Qual é a abordagem MAIS adequada?",
    "opts": [
      "A) Confiar na apólice de seguro patrimonial existente, que normalmente cobre ataques DDoS contra ativos da empresa",
      "B) Acionar a apólice empresarial geral, que costuma incluir todos os riscos de cibersegurança sem custo adicional",
      "C) Contratar seguro de cibersegurança, como apólice separada ou adendo, que pode cobrir recuperação e receita perdida",
      "D) Contratar seguro de cibersegurança para transferir integralmente o risco, eliminando qualquer impacto do ataque"
    ],
    "ans": 2,
    "exp": "Apólices de seguro patrimonial dificilmente cobrem ataques DDoS, e muitas apólices empresariais gerais excluem todos os riscos de cibersegurança. Por isso, a organização deve contratar um seguro de cibersegurança, como apólice separada ou como adendo a uma apólice existente, que pode reembolsar parte ou todo o custo de recuperação das operações e cobrir a receita perdida durante o ataque. A alternativa D é a mais próxima, mas a transferência desloca apenas parte do impacto para outra entidade, sem eliminar o risco nem todos os seus efeitos. A alternativa A superestima a cobertura patrimonial, e a B ignora que as apólices gerais frequentemente excluem riscos de cibersegurança."
  },
  {
    "t": "Em uma reunião de acompanhamento, um gestor encerra a discussão sobre uma vulnerabilidade recém-identificada declarando: \"aceitamos esse risco\". Não houve nenhuma análise de custos, impactos ou alternativas de tratamento. Como essa situação deve ser classificada?",
    "opts": [
      "A) Aceitação de risco, pois a declaração formal do gestor é suficiente para caracterizar a estratégia",
      "B) Risco não gerenciado, pois a aceitação exige uma decisão deliberada resultante de uma análise cuidadosa",
      "C) Evitação de risco, pois a organização decidiu não investir em nenhum controle para tratar a vulnerabilidade",
      "D) Aceitação de risco, pois ela deve ser a estratégia padrão sempre que não houver orçamento disponível"
    ],
    "ans": 1,
    "exp": "A aceitação de risco é uma decisão deliberada que resulta de uma análise cuidadosa e não deve ser adotada como estratégia padrão. Simplesmente declarar \"aceitamos esse risco\" sem essa análise não caracteriza um risco aceito, e sim um risco não gerenciado. A alternativa A é a mais próxima, mas a declaração, por si só, não substitui a análise que fundamenta a aceitação. A alternativa C confunde a ausência de controles com evitação, que exigiria mudar as práticas de negócio para eliminar o risco. A alternativa D contraria o princípio de que a aceitação não deve ser a estratégia padrão."
  },
  {
    "t": "Aziz é responsável pela administração de um site de comércio eletrônico que gera US$ 100.000 por dia em receita para sua empresa. O site usa um banco de dados que contém informações sensíveis sobre os clientes da empresa. Ele prevê que o comprometimento desse banco de dados resultaria em US$ 500.000 em multas para a empresa.\n\nAziz está avaliando o risco de um ataque de injeção de SQL contra o banco de dados, no qual o invasor roubaria todas as informações de identificação pessoal (PII) dos clientes armazenadas nele. Após consultar informações de inteligência de ameaças, ele acredita que existe uma chance de 5% de um ataque bem-sucedido em qualquer ano.\n\nQual é a expectativa de perda única (SLE)?",
    "opts": [
      "A) US$ 5.000",
      "B) US$ 100.000",
      "C) US$ 500.000",
      "D) US$ 600.000"
    ],
    "ans": 2,
    "exp": "Calculamos a expectativa de perda única (SLE) multiplicando o valor do ativo (AV), de US$ 500.000, pelo fator de exposição (EF), de 100%, para obter uma SLE de US$ 500.000."
  },
  {
    "t": "Aziz é responsável pela administração de um site de comércio eletrônico que gera US$ 100.000 por dia em receita para sua empresa. O site usa um banco de dados que contém informações sensíveis sobre os clientes da empresa. Ele prevê que o comprometimento desse banco de dados resultaria em US$ 500.000 em multas para a empresa.\n\nAziz está avaliando o risco de um ataque de injeção de SQL contra o banco de dados, no qual o invasor roubaria todas as informações de identificação pessoal (PII) dos clientes armazenadas nele. Após consultar informações de inteligência de ameaças, ele acredita que existe uma chance de 5% de um ataque bem-sucedido em qualquer ano.\n\nQual é a taxa anualizada de ocorrência (ARO)?",
    "opts": [
      "A) 0,05",
      "B) 0,20",
      "C) 2,00",
      "D) 5,00"
    ],
    "ans": 0,
    "exp": "A pesquisa de inteligência de ameaças de Aziz determinou que a ameaça tem uma probabilidade de 5% de ocorrer a cada ano. Isso corresponde a uma ARO de 0,05."
  },
  {
    "t": "Uma empresa analisou o risco de roubo dos tablets de baixo custo usados por seus técnicos de campo. Concluiu que os controles avaliados custariam mais do que repor os aparelhos, que o negócio depende do uso dos tablets e que o seguro disponível teria custo superior às perdas esperadas. A empresa decidiu manter as operações e repor os aparelhos quando houver roubos. Qual estratégia foi adotada?",
    "opts": [
      "A) Mitigação de risco, pois a reposição dos tablets roubados reduz o impacto do risco sobre as operações",
      "B) Transferência de risco, pois o custo das reposições passa a ser absorvido por outra área da empresa",
      "C) Evitação de risco, pois a empresa decidiu não implementar nenhum dos controles avaliados",
      "D) Aceitação de risco, pois, após análise, a empresa optou por manter as operações e arcar com as perdas"
    ],
    "ans": 3,
    "exp": "A aceitação de risco consiste em escolher deliberadamente não adotar outra estratégia e continuar as operações normalmente diante do risco, o que pode se justificar quando o custo de mitigá-lo supera o impacto do próprio risco. No cenário, a empresa analisou as alternativas e decidiu arcar com as perdas quando os roubos ocorrerem. A alternativa A confunde a reposição das perdas com mitigação, que exigiria controles para reduzir a probabilidade ou o impacto. A alternativa B erra porque o custo continua dentro da própria organização, sem ser deslocado para outra entidade. A alternativa C descreve incorretamente a evitação, já que a empresa mantém o uso dos tablets e continua exposta ao risco."
  },
  {
    "t": "Para cumprir o objetivo de impedir o acesso não autorizado ao seu data center, uma organização implanta controle de acesso biométrico, realiza revisões periódicas dos acessos autorizados e conduz avaliações de risco de rotina. Qual alternativa classifica CORRETAMENTE essas medidas, na ordem apresentada?",
    "opts": [
      "A) Biometria: operacional; revisões de acesso: técnico; avaliações de risco: gerencial",
      "B) Biometria: técnico; revisões de acesso: gerencial; avaliações de risco: operacional",
      "C) Biometria: técnico; revisões de acesso: técnico; avaliações de risco: gerencial",
      "D) Biometria: técnico; revisões de acesso: operacional; avaliações de risco: gerencial"
    ],
    "ans": 3,
    "exp": "O controle de acesso biométrico impõe a segurança no espaço digital e é um controle técnico. As revisões periódicas dos acessos autorizados são processos para gerenciar a tecnologia com segurança, ou seja, controles operacionais. As avaliações de risco de rotina concentram-se na mecânica do gerenciamento de riscos e são controles gerenciais. A alternativa C é a mais próxima, mas trata a revisão de acessos como controle técnico, quando se trata de um processo. A alternativa A troca as categorias da biometria e das revisões. A alternativa B inverte as categorias das revisões de acesso e das avaliações de risco."
  },
  {
    "t": "Durante um incidente de ransomware, um sistema de detecção de intrusão alertou sobre a atividade maliciosa, o centro de operações de segurança 24×7 fez a triagem e acionou os primeiros respondentes e, ao final, a equipe restaurou os dados a partir de backups. Qual alternativa classifica CORRETAMENTE o tipo de cada controle, na ordem apresentada?",
    "opts": [
      "A) IDS: detectivo; SOC 24×7: responsivo; restauração de backups: corretivo",
      "B) IDS: preventivo; SOC 24×7: corretivo; restauração de backups: responsivo",
      "C) IDS: preventivo; SOC 24×7: responsivo; restauração de backups: corretivo",
      "D) IDS: detectivo; SOC 24×7: corretivo; restauração de backups: compensatório"
    ],
    "ans": 0,
    "exp": "Sistemas de detecção de intrusão identificam eventos de segurança que já ocorreram, sendo controles detectivos. O SOC 24×7 que faz a triagem e direciona os primeiros respondentes ajuda a responder a um incidente ativo, o que caracteriza um controle responsivo. A restauração de backups após o ransomware remedia um problema já ocorrido, sendo um controle corretivo. A alternativa C é a mais próxima, mas classifica o IDS como preventivo, tipo que busca deter o problema antes que ocorra, como firewalls e criptografia. A alternativa B confunde os tipos do SOC e da restauração. A alternativa D classifica a restauração como compensatória, tipo voltado a mitigar riscos de exceções a políticas."
  },
  {
    "t": "A política de segurança exige que todos os servidores recebam determinado controle, mas a organização aprova uma exceção para um sistema legado que não o suporta. Para reduzir o risco associado a essa exceção, a equipe implementa medidas adicionais. Como essas medidas são classificadas?",
    "opts": [
      "A) Controles corretivos, pois remediam um problema de segurança que já ocorreu no sistema legado",
      "B) Objetivos de controle, pois declaram o estado de segurança desejado para o sistema legado",
      "C) Controles compensatórios, pois mitigam o risco associado a exceções feitas a uma política de segurança",
      "D) Controles gerenciais, pois exceções a políticas são tratadas exclusivamente pelo processo de gestão de riscos"
    ],
    "ans": 2,
    "exp": "Controles compensatórios são projetados para mitigar o risco associado a exceções feitas a uma política de segurança, exatamente o caso do sistema legado que não suporta o controle exigido. A alternativa B é a mais próxima, mas confunde objetivos de controle, que apenas declaram o estado de segurança desejado sem executar atividades, com as medidas específicas que os cumprem. A alternativa A é incorreta porque controles corretivos remediam problemas que já ocorreram, e não riscos decorrentes de exceções. A alternativa D confunde as dimensões de classificação: a categoria gerencial descreve o mecanismo de ação, enquanto o tipo compensatório descreve o efeito desejado, que é o foco da pergunta."
  },
  {
    "t": "Um atacante usa credenciais roubadas para acessar um sistema financeiro fazendo-se passar por um usuário legítimo e, em seguida, altera registros de transações sem autorização. Segundo o modelo STRIDE, quais categorias de ameaça estão presentes?",
    "opts": [
      "A) Repudiation (repúdio) e Tampering (adulteração)",
      "B) Spoofing (falsificação de identidade) e Tampering (adulteração)",
      "C) Spoofing (falsificação de identidade) e Information disclosure (divulgação de informações)",
      "D) Elevation of privilege (elevação de privilégio) e Repudiation (repúdio)"
    ],
    "ans": 1,
    "exp": "Usar credenciais roubadas para se passar por um usuário legítimo corresponde ao spoofing de identidade de usuário, e alterar registros sem autorização corresponde ao tampering (adulteração), ambas categorias do modelo STRIDE, que classifica ameaças com base no que elas exploram. A alternativa A é a mais próxima, pois acerta a adulteração, mas o repúdio refere-se a negar a autoria de uma ação, e não a assumir a identidade de outro usuário. A alternativa C acerta o spoofing, mas a modificação de registros não é uma divulgação de informações. A alternativa D erra nas duas categorias: o atacante não elevou privilégios, e sim usou a identidade de um usuário existente."
  },
  {
    "t": "Durante uma atividade de modelagem de ameaças, a equipe (1) avaliou os recursos, a intenção e a habilidade de um grupo que provavelmente atacaria a empresa; (2) inventariou todos os sistemas, dispositivos, redes, aplicações e membros da equipe que poderiam ser visados; e (3) listou e-mails de phishing, uma VPN exposta e mídias removíveis como meios de obter acesso aos alvos. Quais elementos correspondem, respectivamente, aos itens 1, 2 e 3?",
    "opts": [
      "A) Capacidade do adversário; vetores de ataque; superfície de ataque",
      "B) Superfície de ataque; capacidade do adversário; vetores de ataque",
      "C) Capacidade do adversário; superfície de ataque; vetores de ataque",
      "D) Reputação de ameaça; superfície de ataque; vetores de ataque"
    ],
    "ans": 2,
    "exp": "A capacidade do adversário corresponde aos recursos, à intenção e à habilidade do provável ator de ameaça; a superfície de ataque abrange qualquer sistema, dispositivo, rede, aplicação, membro da equipe ou outro alvo que possa ser visado; e os vetores de ataque são os meios pelos quais os atacantes podem obter acesso a esses alvos. A alternativa A inverte superfície de ataque e vetores de ataque. A alternativa B desloca todos os elementos de posição. A alternativa D é a mais próxima, mas confunde a capacidade do adversário com a reputação de ameaça, que é um tipo de pesquisa sobre o histórico de comportamento malicioso de um site, netblock ou ator."
  },
  {
    "t": "Uma organização suspeita que um funcionário com acesso privilegiado esteja abusando de suas permissões para acessar informações sensíveis. As ações dele se confundem com as atividades normais de seu cargo, mas os registros mostram acessos frequentes fora do horário de expediente e sessões mais longas que o habitual. Qual abordagem de avaliação de ameaças é a MAIS adequada?",
    "opts": [
      "A) Avaliação comportamental, analisando o contexto das ações do usuário em diversos sistemas ao longo do tempo",
      "B) Consulta de reputação de ameaça, verificando se o endereço IP da estação do usuário consta em listas de bloqueio",
      "C) Análise de indicadores de comprometimento, que permite detectar a ameaça antes do início de qualquer ação maliciosa",
      "D) Classificação da ameaça como desconhecida, tratando-a apenas com controles e processos gerais de segurança"
    ],
    "ans": 0,
    "exp": "Ameaças internas são difíceis de distinguir de atividades ligadas ao cargo, por isso as avaliações comportamentais são particularmente úteis: elas dependem do contexto das ações, de uma visão ampla do comportamento do insider em sistemas, aplicações e redes e de análise ao longo do tempo. Diferenças como acessos fora do horário normal e sessões mais longas ajudam a identificar esses ataques. A alternativa B é voltada ao histórico de comportamento malicioso de sites, netblocks ou atores, e não ao uso indevido de acessos legítimos. A alternativa C erra porque indicadores de comprometimento são usados exclusivamente após o início de um ataque. A alternativa D é incorreta, pois há sinais concretos que permitem uma avaliação direcionada da ameaça."
  },
  {
    "t": "Após realizar a varredura dos endereços IP pertencentes à organização, a equipe de segurança passa a monitorar o tráfego de entrada e saída da rede e identifica dispositivos que não haviam aparecido na varredura anterior. Qual atividade de gerenciamento da superfície de ataque está sendo realizada nessa segunda etapa?",
    "opts": [
      "A) Descoberta de borda, pois identifica sistemas com exposição pública pela varredura dos endereços IP da organização",
      "B) Teste de controles de segurança, pois verifica se os controles da organização estão funcionando adequadamente",
      "C) Descoberta passiva, pois monitora o tráfego de entrada e saída para detectar dispositivos ausentes em outras varreduras",
      "D) Emulação de adversário, pois reproduz as ações de um atacante para encontrar falhas nos controles de segurança"
    ],
    "ans": 2,
    "exp": "Técnicas de descoberta passiva monitoram o tráfego de entrada e saída para detectar dispositivos que não apareceram em outras varreduras de descoberta, exatamente o que ocorre na segunda etapa. A alternativa A é a mais próxima, pois descreve a primeira etapa: a descoberta de borda, que identifica sistemas com exposição pública por meio da varredura dos endereços IP da organização. A alternativa B verifica se os controles de segurança funcionam adequadamente, sem buscar dispositivos. A alternativa D busca falhas nos controles emulando um adversário, e não identificar dispositivos a partir do tráfego."
  },
  {
    "t": "Com base nos resultados de uma varredura de descoberta de borda e de um teste de invasão, a equipe desativa serviços desnecessários expostos à internet e corrige as falhas encontradas nos controles de segurança. Como é chamado esse conjunto de mudanças?",
    "opts": [
      "A) Teste de controles de segurança, pois confirma que os controles da organização funcionam adequadamente",
      "B) Descoberta de borda, pois ajusta os sistemas com exposição pública identificados na varredura",
      "C) Emulação de adversário, pois as mudanças se baseiam em falhas encontradas ao imitar um atacante",
      "D) Redução da superfície de ataque, pois as mudanças diminuem o número de maneiras de atacar a organização"
    ],
    "ans": 3,
    "exp": "Usar os resultados das técnicas de descoberta e teste para fazer mudanças que melhoram a segurança é chamado de redução da superfície de ataque, pois diminui o número de maneiras pelas quais um potencial adversário poderia atacar a organização. As alternativas A, B e C descrevem atividades que geram as informações usadas nesse processo, e não as mudanças em si: o teste de controles verifica se eles funcionam adequadamente, a descoberta de borda identifica sistemas com exposição pública, e a emulação de adversário imita as ações de um atacante para revelar falhas nos controles."
  },
  {
    "t": "Aziz é responsável pela administração de um site de comércio eletrônico que gera US$ 100.000 por dia em receita para sua empresa. O site usa um banco de dados que contém informações sensíveis sobre os clientes da empresa. Ele prevê que o comprometimento desse banco de dados resultaria em US$ 500.000 em multas para a empresa.\n\nAziz está avaliando o risco de um ataque de injeção de SQL contra o banco de dados, no qual o invasor roubaria todas as informações de identificação pessoal (PII) dos clientes armazenadas nele. Após consultar informações de inteligência de ameaças, ele acredita que existe uma chance de 5% de um ataque bem-sucedido em qualquer ano.\n\nQual é a expectativa de perda anualizada (ALE)?",
    "opts": [
      "A) US$ 5.000",
      "B) US$ 25.000",
      "C) US$ 100.000",
      "D) US$ 500.000"
    ],
    "ans": 1,
    "exp": "Calculamos a expectativa de perda anualizada (ALE) multiplicando a SLE (US$ 500.000) pela ARO (0,05), para obter uma ALE de US$ 25.000."
  },
  {
    "t": "Grace concluiu recentemente uma avaliação de riscos da exposição de sua organização a violações de dados e determinou que há um alto nível de risco relacionado à perda de informações pessoais sensíveis. Ela está considerando diversas abordagens para gerenciar esse risco.\n\nA primeira ideia de Grace é adicionar um firewall de aplicação web para proteger sua organização contra ataques de injeção de SQL. Qual estratégia de gestão de riscos essa abordagem adota?",
    "opts": [
      "A) Aceitação de riscos",
      "B) Evitação de riscos",
      "C) Mitigação de riscos",
      "D) Transferência de riscos"
    ],
    "ans": 2,
    "exp": "Instalar novos controles ou aprimorar os controles existentes é uma tentativa de reduzir a probabilidade ou a magnitude de um risco. Esse é um exemplo de atividade de mitigação de riscos."
  },
  {
    "t": "Uma empresa lança um programa de bug bounty. Um conselheiro afirma que, com isso, os pesquisadores deixarão de ter alternativas como divulgar publicamente ou explorar as vulnerabilidades encontradas. Qual afirmação descreve CORRETAMENTE o efeito do programa?",
    "opts": [
      "A) Elimina as opções de divulgação pública e de exploração, restando ao testador apenas a divulgação responsável",
      "B) Não altera as opções do testador, mas o incentiva, normalmente com pagamento, a optar pela divulgação responsável",
      "C) Impede que testadores sondem os sistemas sem autorização, já que toda inspeção passa a ocorrer em ambiente controlado",
      "D) Dispensa a atuação de um fornecedor especializado, já que a própria organização define as recompensas oferecidas"
    ],
    "ans": 1,
    "exp": "Testadores sondarão os sistemas em busca de vulnerabilidades com ou sem autorização, e quem descobre uma falha pode divulgá-la publicamente, explorá-la, divulgá-la de forma responsável ou não fazer nada. O programa de bug bounty não altera essas opções, mas incentiva a divulgação responsável, normalmente por meio de pagamento financeiro direto. A alternativa A é a mais próxima, mas o programa não elimina as demais opções, apenas torna a divulgação responsável mais atraente. A alternativa C ignora que testadores sondam os sistemas mesmo sem autorização. A alternativa D é incorreta porque as organizações normalmente implantam esses programas com a ajuda de um fornecedor especializado."
  },
  {
    "t": "Durante uma investigação, um analista precisa determinar se a configuração de um servidor foi alterada fora do processo de gerenciamento de mudanças aprovado. Qual abordagem é a MAIS adequada?",
    "opts": [
      "A) Comparar o servidor com uma baseline e confrontar as diferenças com a lista de solicitações de mudança aprovadas",
      "B) Consultar o controle de versão, que atribui um número incremental a cada release do software instalado",
      "C) Revisar os diagramas do sistema, que mostram como o servidor foi projetado e configurado originalmente",
      "D) Analisar a saída do gerenciamento de patches, que confirma quais atualizações foram aplicadas ao servidor"
    ],
    "ans": 0,
    "exp": "Uma baseline é um instantâneo de um sistema em um dado momento e permite avaliar se ele foi alterado fora do processo aprovado: o administrador compara o sistema em execução com a baseline, identifica todas as mudanças e as confronta com a lista de solicitações aprovadas. A alternativa C é a mais próxima, pois diagramas ajudam a entender como o sistema foi projetado e configurado, mas não identificam todas as alterações feitas. A alternativa B trata do controle de versão, que identifica cópias de software por meio de números de release, e não mudanças de configuração. A alternativa D confirma apenas a aplicação de patches, sem revelar outras alterações não autorizadas."
  },
  {
    "t": "Uma organização tem várias mudanças aprovadas para sistemas críticos, e algumas delas podem causar interrupções. Qual é a MELHOR forma de coordenar a implementação?",
    "opts": [
      "A) Aplicar cada mudança logo após a aprovação, em horário comercial, para que a equipe reaja rapidamente a problemas",
      "B) Consolidar as mudanças em um período de alta atividade, para que os usuários identifiquem logo qualquer impacto",
      "C) Agendar as mudanças com pouca antecedência, permitindo que cada equipe escolha o melhor momento para implementá-las",
      "D) Reunir as mudanças em uma janela de manutenção antecipada, em horário de baixa atividade, coordenada por um gerente de mudanças"
    ],
    "ans": 3,
    "exp": "Como as mudanças podem ser disruptivas, muitas organizações as consolidam em uma janela de manutenção, agendada com bastante antecedência e realizada à noite, nos fins de semana ou em outros períodos de baixa atividade. Um gerente de mudanças coordena a janela, publica a lista de mudanças planejadas e monitora a implementação, a validação e os testes. A alternativa A aumenta o risco de interrupção ao aplicar mudanças durante o horário comercial. A alternativa B contraria a escolha de períodos de baixa atividade. A alternativa C é a mais próxima, pois também organiza as mudanças, mas elimina o agendamento antecipado e a coordenação centralizada."
  },
  {
    "t": "Os servidores Windows e Linux de uma organização estão configurados para receber atualizações automaticamente. O gestor de TI considera, por isso, que o gerenciamento de patches está concluído. Qual deve ser a posição do analista de segurança?",
    "opts": [
      "A) Concordar, pois sistemas configurados para receber atualizações têm a aplicação dos patches garantida",
      "B) Concordar em parte, pois só os patches do sistema operacional exigem acompanhamento, e os de aplicações cabem aos fornecedores",
      "C) Discordar, pois é preciso analisar a saída do gerenciamento de patches para confirmar sua aplicação, com apoio de ferramentas",
      "D) Discordar, pois mecanismos automáticos como o Windows Update não são recomendados e devem dar lugar à aplicação manual"
    ],
    "ans": 2,
    "exp": "Garantir que os sistemas estejam configurados para receber atualizações não basta: o administrador de segurança também deve analisar a saída dos processos de gerenciamento de patches para assegurar que os patches foram de fato aplicados. Ferramentas de gerenciamento de configuração ajudam a automatizar esse trabalho e a acompanhar os patches das aplicações usadas na organização. A alternativa A é a mais próxima da visão do gestor, mas presume que a configuração garante a aplicação, sem verificação. A alternativa B ignora que também é preciso acompanhar os patches das aplicações. A alternativa D contraria o fato de o Windows Update ser a maneira mais simples de aplicar patches de segurança assim que são lançados."
  },
  {
    "t": "Uma organização quer garantir que uma nova aplicação seja projetada para ser segura e que os desenvolvedores adotem práticas de codificação segura desde o início. Em qual fase do SDLC a definição dos requisitos de segurança deve ocorrer?",
    "opts": [
      "A) Na fase de design, na qual se definem a arquitetura, os fluxos de dados e os pontos de integração da aplicação",
      "B) Na fase de análise e definição de requisitos, junto com o levantamento da funcionalidade desejada pelo cliente",
      "C) Na fase de desenvolvimento, na qual o teste unitário e a análise de código identificam falhas de segurança",
      "D) Na fase de teste e integração, na qual o teste de aceitação do usuário valida a funcionalidade da aplicação"
    ],
    "ans": 1,
    "exp": "A definição de requisitos de segurança é parte importante da fase de análise e definição de requisitos, na qual também se levanta a funcionalidade desejada pelo cliente. Isso garante que a aplicação seja projetada para ser segura e que práticas de codificação segura sejam usadas. A alternativa A é a mais próxima, mas o design já deve partir dos requisitos de segurança definidos anteriormente. A alternativa C trata de verificações realizadas durante a codificação, tarde demais para orientar o projeto desde o início. A alternativa D ocorre ainda mais adiante, quando a aplicação já está construída e sendo validada."
  },
  {
    "t": "Os componentes de uma nova aplicação foram integrados e conectados a fontes de dados externas. Em seguida, usuários de negócio, de fora da equipe de desenvolvimento, testam formalmente o sistema para confirmar se estão satisfeitos com sua funcionalidade. Em qual fase do SDLC essas atividades ocorrem?",
    "opts": [
      "A) Desenvolvimento, pois é nessa fase que ocorrem os testes de partes do software, como o teste unitário",
      "B) Treinamento e transição, também chamada de fase de aceitação, instalação e implantação",
      "C) Teste e integração, na qual os componentes são integrados e ocorre o teste de aceitação do usuário (UAT)",
      "D) Operações e manutenção contínuas, na qual o software recebe atualizações e pequenas modificações"
    ],
    "ans": 2,
    "exp": "O teste formal com clientes ou outras pessoas de fora da equipe de desenvolvimento ocorre na fase de teste e integração, em que os componentes são integrados, conexões com serviços externos e fontes de dados podem ser estabelecidas e o teste de aceitação do usuário (UAT) confirma se os usuários estão satisfeitos com a funcionalidade. A alternativa B é a mais próxima por causa do nome alternativo ligado à aceitação, mas essa fase trata do treinamento dos usuários finais e da entrada do software em uso geral. A alternativa A envolve apenas testes de partes do software, como o teste unitário. A alternativa D ocorre após a conclusão do projeto."
  },
  {
    "t": "Uma empresa está substituindo um sistema legado por uma nova aplicação. Empolgada com o novo produto, a equipe do projeto propõe simplesmente desligar o sistema antigo, sem nenhuma etapa formal. Qual deve ser a recomendação do analista de segurança?",
    "opts": [
      "A) Realizar a disposição formal, pois ela pode gerar economia e exige preservar ou descartar adequadamente dados e sistemas",
      "B) Desligar o sistema imediatamente, pois a disposição costuma ser a fase mais longa e atrasaria a entrega do novo produto",
      "C) Tratar a desativação como parte da manutenção contínua, que já inclui patches, atualizações e pequenas modificações",
      "D) Tratar a disposição como mera formalidade de encerramento, sem impacto relevante sobre custos ou dados"
    ],
    "ans": 0,
    "exp": "A fase de disposição ocorre quando um produto atinge o fim de sua vida útil e, embora seja frequentemente ignorada na empolgação com novos produtos, é importante: desligar produtos antigos pode gerar economia de custos, substituir ferramentas pode exigir conhecimento específico ou esforço adicional, e dados e sistemas podem precisar ser preservados ou descartados adequadamente. A alternativa D é a mais próxima da proposta da equipe, mas subestima esses impactos. A alternativa B erra porque a fase normalmente mais longa é a de operações e manutenção contínuas, e não a disposição. A alternativa C confunde disposição com manutenção contínua, que envolve patches, atualizações e pequenas modificações no suporte diário."
  },
  {
    "t": "Grace concluiu recentemente uma avaliação de riscos da exposição de sua organização a violações de dados e determinou que há um alto nível de risco relacionado à perda de informações pessoais sensíveis. Ela está considerando diversas abordagens para gerenciar esse risco.\n\nAs lideranças da empresa estão considerando descontinuar as atividades relacionadas aos clientes que envolvem a coleta e o armazenamento de informações pessoais sensíveis. Qual estratégia de gestão de riscos essa abordagem utilizaria?",
    "opts": [
      "A) Aceitação de riscos",
      "B) Evitação de riscos",
      "C) Mitigação de riscos",
      "D) Transferência de riscos"
    ],
    "ans": 1,
    "exp": "Alterar processos ou atividades de negócios para eliminar um risco é um exemplo de evitação de riscos."
  },
  {
    "t": "Grace concluiu recentemente uma avaliação de riscos da exposição de sua organização a violações de dados e determinou que há um alto nível de risco relacionado à perda de informações pessoais sensíveis. Ela está considerando diversas abordagens para gerenciar esse risco.\n\nA empresa decidiu instalar o firewall de aplicação web e continuar suas atividades. Ela ainda se preocupa com outros riscos às informações que não foram tratados pelo firewall e considera contratar uma apólice de seguro para cobrir esses riscos. Qual estratégia isso utiliza?",
    "opts": [
      "A) Aceitação de riscos",
      "B) Evitação de riscos",
      "C) Mitigação de riscos",
      "D) Transferência de riscos"
    ],
    "ans": 3,
    "exp": "As apólices de seguro usam uma estratégia de transferência de riscos ao transferir parte ou todo o risco financeiro da organização para uma seguradora."
  },
  {
    "t": "Um patch testado e validado no ambiente de pré-produção foi aprovado e implantado em produção, mas passou a causar falhas inesperadas em um serviço crítico. A organização está sujeita a auditorias de conformidade. Qual é a ação MAIS adequada?",
    "opts": [
      "A) Corrigir o problema diretamente em produção, sem registro, para restabelecer o serviço o mais rápido possível",
      "B) Transferir o serviço para o ambiente de desenvolvimento compartilhado até que o patch seja corrigido",
      "C) Repetir os testes no próprio ambiente de produção, que substitui o ambiente de teste na validação de patches",
      "D) Realizar um rollback pelo processo de gerenciamento de mudanças, restaurando o sistema ao estado anterior"
    ],
    "ans": 3,
    "exp": "Processos de gerenciamento de mudanças, seguidos para mover alterações entre os ambientes de desenvolvimento, teste e produção, também permitem realizar rollback, desfazendo mudanças com consequências não intencionais e restaurando o sistema a um estado anterior. Isso proporciona responsabilização e supervisão, e pode ser exigido para fins de auditoria e conformidade. A alternativa A é a mais próxima, pois busca restabelecer o serviço rapidamente, mas ignora o controle e o registro exigidos. A alternativa C contraria o propósito do ambiente de teste, que existe para validar mudanças sem impactar a produção. A alternativa B mistura indevidamente o sistema ativo com o ambiente usado pelos desenvolvedores."
  },
  {
    "t": "Antes de comprometer recursos com um novo sistema de gestão, a diretoria pede uma investigação inicial para decidir se o projeto deve seguir adiante, comparando soluções alternativas e seus custos de alto nível. O resultado esperado é uma recomendação acompanhada de um plano. Em qual fase do SDLC isso ocorre?",
    "opts": [
      "A) Análise e definição de requisitos, pois busca a contribuição do cliente sobre a funcionalidade desejada",
      "B) Viabilidade, pois investiga se o esforço deve ocorrer, avaliando alternativas e custos de alto nível",
      "C) Design, pois define a arquitetura, os fluxos de dados e os processos de negócio de cada solução proposta",
      "D) Disposição, pois avalia os custos de desligar o sistema atual antes de iniciar o novo projeto"
    ],
    "ans": 1,
    "exp": "A fase de viabilidade é onde se conduzem as investigações iniciais sobre se o esforço deve ocorrer, analisando soluções alternativas e os custos de alto nível de cada uma, e resulta em uma recomendação com um plano para seguir adiante. A alternativa A é a mais próxima, mas a análise e definição de requisitos só ocorre depois que o esforço é considerado viável, com foco na funcionalidade desejada pelo cliente. A alternativa C trata do projeto de funcionalidade, arquitetura e integrações, etapa posterior. A alternativa D refere-se ao fim da vida útil de um produto, e não à decisão de iniciar um novo projeto."
  },
  {
    "t": "Uma organização avalia qual projeto se beneficiaria mais de uma abordagem de desenvolvimento em Cascata (Waterfall). Qual projeto é o MAIS indicado para esse modelo?",
    "opts": [
      "A) Um aplicativo inovador cujos requisitos devem mudar com frequência conforme o feedback dos usuários",
      "B) Um produto experimental que depende de ciclos internos de iteração entre codificação e testes",
      "C) Um sistema com escopo definido, mas construído sobre uma plataforma tecnológica nova e pouco conhecida",
      "D) Um sistema complexo, com escopo fixo, prazo de entrega conhecido e plataforma estável e bem compreendida"
    ],
    "ans": 3,
    "exp": "A Cascata não é muito responsiva a mudanças e não considera o trabalho iterativo interno; por isso, é tipicamente recomendada para esforços com escopo fixo, prazo de entrega conhecido e plataforma tecnológica estável e bem compreendida, e segue em uso para sistemas complexos. A alternativa A contraria a baixa responsividade do modelo a mudanças de requisitos. A alternativa B depende de iterações internas, que a Cascata não contempla. A alternativa C é a mais próxima, pois envolve um escopo definido, mas a plataforma nova e pouco conhecida contraria a recomendação de usar uma tecnologia estável e bem compreendida."
  },
  {
    "t": "Em um projeto conduzido no modelo Cascata (Waterfall), a codificação já está em andamento quando o cliente solicita mudanças significativas nos requisitos. Qual característica do modelo explica a dificuldade de acomodar essas mudanças?",
    "opts": [
      "A) O modelo é sequencial, com fases que não se sobrepõem, e por isso é pouco responsivo a mudanças",
      "B) O modelo prevê ciclos internos de iteração, e as mudanças precisam aguardar o fim da iteração atual",
      "C) O modelo permite a sobreposição das fases de requisitos e implementação, gerando conflitos entre equipes",
      "D) O modelo concentra testes e depuração na fase de análise, o que impede validar novos requisitos"
    ],
    "ans": 0,
    "exp": "A Cascata é um modelo sequencial em que cada fase é seguida pela próxima, sem sobreposição, e cada uma leva logicamente à seguinte; por isso, o modelo é pouco responsivo a mudanças, e alterar requisitos durante a implementação é difícil. A alternativa B descreve o oposto do modelo, que não considera o trabalho iterativo interno. A alternativa C erra porque as fases da Cascata não se sobrepõem. A alternativa D é incorreta porque os testes e a depuração ocorrem na quinta fase, após a conclusão do software, e não na fase de análise, voltada à construção de regras de negócio e modelos."
  },
  {
    "t": "Uma organização vai desenvolver um sistema de alta complexidade técnica. A gerência quer começar com uma prova de conceito, revisitar requisitos e design a cada ciclo e, sobretudo, reavaliar os riscos e a viabilidade técnica e gerencial do projeto várias vezes ao longo do desenvolvimento. Qual modelo de SDLC é o MAIS adequado?",
    "opts": [
      "A) Cascata, pois organiza o projeto em fases sequenciais que levam logicamente uma à outra",
      "B) Espiral, pois revisita identificação, design, construção e avaliação, reavaliando os riscos a cada ciclo",
      "C) Ágil, pois divide o trabalho em sprints curtos com planejamento, desenvolvimento, testes e demonstração",
      "D) Cascata com fases sobrepostas, pois permite construir uma prova de conceito antes de concluir o design"
    ],
    "ans": 1,
    "exp": "O modelo Espiral adiciona aos conceitos lineares da Cascata um processo iterativo que revisita quatro fases (identificação, design, construção e avaliação) e dá ênfase significativa à avaliação de riscos, revisada várias vezes. A construção começa com uma prova de conceito, e a avaliação monitora a viabilidade técnica e gerencial do projeto. A alternativa C é a mais próxima, pois o Ágil também é iterativo, mas não se caracteriza pela reavaliação sistemática de riscos a cada ciclo. A alternativa A descreve a Cascata, que não revisita fases. A alternativa D erra porque, na Cascata, as fases não se sobrepõem."
  },
  {
    "t": "Em um projeto ágil, a equipe (1) mantém uma lista das funcionalidades e tarefas necessárias para concluir o projeto; (2) estima o esforço das tarefas com cartas, revelando as estimativas e discutindo até chegar a um consenso; (3) limita o trabalho em cada objetivo a um tempo previamente acordado, avaliando o resultado ao final; e (4) compara a soma das estimativas do sprint com o que foi efetivamente concluído. Quais termos correspondem, respectivamente, às práticas 1, 2, 3 e 4?",
    "opts": [
      "A) Backlog; planning poker; velocity tracking; timeboxing",
      "B) User stories; planning poker; timeboxing; velocity tracking",
      "C) Backlog; timeboxing; planning poker; velocity tracking",
      "D) Backlog; planning poker; timeboxing; velocity tracking"
    ],
    "ans": 3,
    "exp": "Backlogs são listas de funcionalidades ou tarefas necessárias para concluir um projeto; o planning poker usa cartas para estimar o esforço, com discussão até o consenso; o timeboxing limita o trabalho em um objetivo a um tempo previamente acordado, avaliando o resultado ao final; e o velocity tracking compara a soma das estimativas do sprint com o que foi concluído. A alternativa B é a mais próxima, mas user stories descrevem requisitos de usuário de alto nível, e não a lista de tarefas do projeto. A alternativa A inverte timeboxing e velocity tracking. A alternativa C inverte planning poker e timeboxing."
  },
  {
    "t": "Uma equipe que desenvolve um aplicativo descobre com frequência novos requisitos de segurança ao longo do projeto e precisa reagir rapidamente, com feedback constante do cliente e entregas frequentes de software funcionando. Qual modelo é o MAIS adequado e por quê?",
    "opts": [
      "A) Ágil, por ser menos formalmente estruturado, com muitas oportunidades de feedback e reação mais ágil a problemas",
      "B) Espiral, por ser o único modelo que permite incorporar novos requisitos após o início do desenvolvimento",
      "C) Cascata, por documentar todos os requisitos de segurança antes da codificação, evitando retrabalho posterior",
      "D) Ágil, por dispensar testes e demonstrações, acelerando as entregas quando surgem problemas de segurança"
    ],
    "ans": 0,
    "exp": "O Ágil acolhe requisitos mutáveis, mesmo tardiamente, entrega software funcionando com frequência e, por ser menos formalmente estruturado, oferece muitas oportunidades de feedback e revisão do cliente, reagindo mais agilmente a problemas, uma vantagem quando surgem questões de segurança. A alternativa B exagera: o Espiral oferece flexibilidade para mudanças, mas não é o único modelo a permitir isso e pode gerar retrabalho quando novos requisitos surgem tarde. A alternativa C contraria o cenário, pois a Cascata é pouco responsiva a mudanças. A alternativa D erra porque os sprints incluem testes e demonstração."
  },
  {
    "t": "Um gerente de projetos avalia trocar a Cascata pelo modelo Espiral em um novo desenvolvimento. Qual afirmação compara CORRETAMENTE os dois modelos?",
    "opts": [
      "A) O Espiral é linear como a Cascata, sem iterações, mas acrescenta uma avaliação de riscos ao final do projeto",
      "B) O Espiral elimina o retrabalho, pois todos os requisitos detalhados são levantados antes do primeiro design",
      "C) O Espiral é mais flexível a mudanças e começa antes que a Cascata, mas pode gerar retrabalho ao revelar requisitos tarde",
      "D) O Espiral é iterativo e incremental como o Ágil, organizando o trabalho em sprints de dias a poucas semanas"
    ],
    "ans": 2,
    "exp": "O Espiral oferece maior flexibilidade para lidar com mudanças nos requisitos e com influências externas, além de permitir que o ciclo de desenvolvimento comece mais cedo que na Cascata. Porém, como revisita seu processo, pode gerar retrabalho ou revelar requisitos de design tardiamente, exigindo mudanças significativas no design. A alternativa A erra porque o Espiral é iterativo e revisa os riscos várias vezes ao longo do desenvolvimento. A alternativa B ignora a possibilidade de retrabalho. A alternativa D confunde o Espiral com o Ágil, que é iterativo e incremental e organiza o trabalho em sprints, ao contrário do processo linear usado pelo Espiral."
  },
  {
    "t": "Grace concluiu recentemente uma avaliação de riscos da exposição de sua organização a violações de dados e determinou que há um alto nível de risco relacionado à perda de informações pessoais sensíveis. Ela está considerando diversas abordagens para gerenciar esse risco.\n\nPor fim, os gestores de riscos concluíram que a apólice de seguro era muito cara e optaram por não contratá-la. Eles não estão tomando nenhuma medida adicional. Qual estratégia de gestão de riscos está sendo usada nessa situação?",
    "opts": [
      "A) Aceitação de riscos",
      "B) Evitação de riscos",
      "C) Mitigação de riscos",
      "D) Transferência de riscos"
    ],
    "ans": 0,
    "exp": "Quando uma organização decide não tomar nenhuma medida adicional para lidar com o risco remanescente, ela está escolhendo uma estratégia de aceitação de riscos."
  },
  {
    "t": "Qual das seguintes opções é um processo formal que permite às organizações abrir seus sistemas à inspeção por pesquisadores de segurança em um ambiente controlado?",
    "opts": [
      "A) Descoberta de borda",
      "B) Descoberta passiva",
      "C) Teste de controles de segurança",
      "D) Recompensa por descoberta de falhas"
    ],
    "ans": 3,
    "exp": "Os programas de recompensa por descoberta de falhas oferecem um processo formal que permite às organizações abrir seus sistemas à inspeção por pesquisadores de segurança em um ambiente controlado, que incentiva os invasores a relatar vulnerabilidades de maneira responsável. A varredura de descoberta de borda identifica sistemas ou dispositivos com exposição pública por meio da varredura de endereços IP pertencentes à organização. As técnicas de descoberta passiva monitoram o tráfego de entrada e de saída para detectar dispositivos que não aparecem em outras varreduras de descoberta. O teste de controles de segurança verifica se o conjunto de controles de segurança da organização está funcionando corretamente."
  },
  {
    "t": "Uma equipe precisa entregar rapidamente uma aplicação interna. Em vez de uma fase de planejamento separada, o planejamento ocorre à medida que o software é escrito, e componentes funcionais são desenvolvidos em paralelo como protótipos, testados a cada iteração e depois integrados ao produto final. Qual modelo está sendo utilizado?",
    "opts": [
      "A) RAD, pois é iterativo, baseado em protótipos e dispensa uma fase de planejamento separada",
      "B) DevOps, pois combina desenvolvimento e operações para otimizar o SDLC por meio de toolchains",
      "C) Integração contínua, pois faz check-ins frequentes do código em um repositório compartilhado",
      "D) Ágil, por ser o único modelo altamente responsivo que dispensa uma fase de planejamento separada"
    ],
    "ans": 0,
    "exp": "O RAD é um processo iterativo baseado na construção de protótipos, sem uma fase de planejamento separada: o planejamento ocorre enquanto o software é escrito, e componentes funcionais são desenvolvidos em paralelo e depois integrados ao produto final. A alternativa D é a mais próxima, pois o Ágil também pode oferecer um ambiente altamente responsivo, mas não é o único, e o modelo descrito é o RAD. A alternativa B trata da combinação entre desenvolvimento e operações por meio de toolchains, e não de um modelo baseado em protótipos. A alternativa C descreve uma prática de check-in frequente de código em um repositório compartilhado."
  },
  {
    "t": "Em um projeto que segue o modelo RAD, cada protótipo passa pelas mesmas cinco fases. Qual sequência representa CORRETAMENTE essas fases?",
    "opts": [
      "A) Modelagem de dados → modelagem de negócio → modelagem de processos → geração da aplicação → teste e entrega",
      "B) Modelagem de negócio → modelagem de processos → modelagem de dados → geração da aplicação → teste e entrega",
      "C) Modelagem de negócio → modelagem de dados → modelagem de processos → geração da aplicação → teste e entrega",
      "D) Modelagem de negócio → modelagem de dados → geração da aplicação → modelagem de processos → teste e entrega"
    ],
    "ans": 2,
    "exp": "No RAD, cada protótipo passa por modelagem de negócio, modelagem de dados, modelagem de processos, geração da aplicação e teste e entrega. A modelagem de processos descreve os fluxos de dados com base no modelo de negócio, e a geração da aplicação converte os modelos de dados e de processos em protótipos, que só então são testados. A alternativa A inverte as modelagens de negócio e de dados. A alternativa B inverte as modelagens de processos e de dados. A alternativa D coloca a geração da aplicação antes da modelagem de processos, embora ela dependa desse modelo para gerar os protótipos."
  },
  {
    "t": "Uma organização que adotou DevOps quer incorporar segurança ao seu processo. Um gestor propõe que uma equipe de segurança separada revise as aplicações apenas antes de cada release. Qual abordagem está alinhada ao modelo DevSecOps?",
    "opts": [
      "A) Manter a segurança como responsabilidade exclusiva de uma equipe separada, acionada apenas antes de cada release",
      "B) Tornar a segurança uma responsabilidade compartilhada, integrada ao design, desenvolvimento, testes e operações",
      "C) Concentrar a segurança na fase de operações, por meio de monitoramento contínuo após cada implantação",
      "D) Substituir os profissionais de segurança por ferramentas automatizadas de varredura integradas ao pipeline"
    ],
    "ans": 1,
    "exp": "No DevSecOps, a segurança faz parte do modelo DevOps como responsabilidade compartilhada ao longo de todo o ciclo de desenvolvimento e operações, integrada ao design, ao desenvolvimento, aos testes e ao trabalho operacional. Os profissionais de segurança atuam com análise e comunicação de ameaças, planejamento, testes, feedback e melhoria contínua. A alternativa A, proposta pelo gestor, isola a segurança no fim do processo. A alternativa C restringe a segurança às operações. A alternativa D é a mais próxima, pois testes e ferramentas automatizadas apoiam o DevSecOps, mas não substituem o papel dos profissionais de segurança, que exige entender a tolerância a risco da organização."
  },
  {
    "t": "Em um pipeline de CI/CD, as mudanças aprovadas nos testes são implantadas automaticamente em produção. Um analista teme que um desenvolvedor mal-intencionado insira uma falha no código implantado e a remova no ciclo seguinte, dificultando sua detecção. Qual abordagem trata MELHOR esse risco?",
    "opts": [
      "A) Suspender a implantação contínua, já que CI/CD é incompatível com testes de segurança automatizados",
      "B) Confiar nos testes do pipeline, pois qualquer código aprovado neles está livre de vulnerabilidades",
      "C) Revisar os logs apenas nas janelas de manutenção mensais, já que o código muda com muita frequência",
      "D) Incluir testes de segurança automatizados no pipeline e adequar logging, relatórios e monitoramento ao CI/CD"
    ],
    "ans": 3,
    "exp": "Métodos de CI/CD podem resultar na implantação de novas vulnerabilidades em produção e permitir que um desenvolvedor não confiável insira falhas no código implantado e as remova no ciclo seguinte. Por isso, é preciso incorporar testes de segurança automatizados ao processo de testes do pipeline e projetar o logging, os relatórios e o monitoramento para o ritmo do CI/CD. A alternativa B é a mais próxima, pois o pipeline de fato executa testes antes da implantação, mas testes que não incluem segurança não impedem que vulnerabilidades cheguem à produção. A alternativa A contraria a combinação comum de CI/CD com testes de segurança automatizados. A alternativa C adota uma periodicidade incompatível com implantações frequentes."
  },
  {
    "t": "Durante um teste, um analista envia entradas inválidas a uma aplicação web, que responde com mensagens contendo rastreamento de pilha (stack trace) e nomes de tabelas do banco de dados. Mesmo quando as mensagens são genéricas, elas variam conforme a entrada enviada. Qual falha está presente e por que ela é relevante?",
    "opts": [
      "A) Referência insegura a objeto, pois a aplicação revela como os objetos são identificados e armazenados no backend",
      "B) Tratamento inadequado de erros, pois as mensagens e as variações nas respostas revelam detalhes úteis a novos ataques",
      "C) Registro de logs insuficiente, pois os detalhes do erro deveriam ser gravados em log, e não exibidos ao usuário",
      "D) Desreferenciação de ponteiro nulo, pois o erro indica que a aplicação usou um valor NULL como se fosse válido"
    ],
    "ans": 1,
    "exp": "O tratamento inadequado de erros expõe mensagens que não deveriam ser acessíveis fora da aplicação, como rastreamentos de pilha e detalhes do banco de dados, que atacantes podem aproveitar em novos ataques. Mesmo mensagens genéricas podem revelar informações quando as respostas variam conforme a entrada, indicando o sucesso das tentativas. A alternativa A é a mais próxima, mas a referência insegura a objetos envolve expor como os objetos internos são identificados e armazenados no backend, e não mensagens de erro. A alternativa C confunde o problema: o risco está na exposição das mensagens ao usuário, e não na falta de registro. A alternativa D descreve uma falha de programação que costuma causar o travamento da aplicação, e não a divulgação de detalhes em respostas."
  },
  {
    "t": "Uma revisão de código identifica que uma aplicação usa a função strcpy para copiar dados fornecidos pelo usuário para um buffer de tamanho fixo. Qual problema essa prática representa?",
    "opts": [
      "A) Uso de função insegura, que copia dados sem checar se a origem excede o destino, permitindo estouro de buffer",
      "B) Condição de corrida, pois o resultado depende do momento em que a cópia ocorre em relação a outras ações",
      "C) Componente inseguro, pois a vulnerabilidade é introduzida por um módulo vulnerável incorporado à aplicação",
      "D) Desreferenciação, pois copiar dados para um buffer não definido faz a aplicação usar um ponteiro NULL"
    ],
    "ans": 0,
    "exp": "Funções inseguras, como a strcpy, não têm recursos críticos de segurança: ela copia os dados sem verificar se a origem é maior que o destino, permitindo que o atacante coloque dados arbitrários em áreas de memória além do destino e, possivelmente, realize um estouro de buffer. A alternativa C é a mais próxima, pois também trata de problemas introduzidos por partes da aplicação, mas componentes inseguros são componentes ou módulos vulneráveis que levam suas falhas para a aplicação, e não o uso de uma função sem proteções. A alternativa B descreve condições de corrida, que dependem de timing. A alternativa D descreve a desreferenciação de ponteiro nulo, em que um ponteiro sem valor definido é usado como se contivesse um valor esperado."
  },
  {
    "t": "Uma avaliação de segurança de uma aplicação encontrou três situações: (1) a conexão com o banco de dados usa a senha que veio de fábrica no produto; (2) uma biblioteca de terceiros incorporada à aplicação tem uma vulnerabilidade conhecida; (3) após um incidente, a equipe não conseguiu determinar o que aconteceu. Quais falhas correspondem, respectivamente, às situações 1, 2 e 3?",
    "opts": [
      "A) Autenticação quebrada; componentes inseguros; registro de logs e monitoramento insuficientes",
      "B) Configurações fracas ou padrão; uso de funções inseguras; registro de logs e monitoramento insuficientes",
      "C) Configurações fracas ou padrão; componentes inseguros; registro de logs e monitoramento insuficientes",
      "D) Configurações fracas ou padrão; componentes inseguros; exposição de dados sensíveis"
    ],
    "ans": 2,
    "exp": "Usar a senha padrão de uma conexão de banco de dados é um exemplo comum de configurações fracas ou padrão, que scanners de vulnerabilidades procuram e que atacantes encontram com facilidade. Uma biblioteca vulnerável incorporada à aplicação caracteriza componentes inseguros, que introduzem suas vulnerabilidades na aplicação. Não conseguir determinar o que ocorreu após um incidente é consequência de registro de logs e monitoramento insuficientes. A alternativa A é a mais próxima, mas a senha padrão decorre de configuração inadequada, e não de uma implementação falha da autenticação. A alternativa B confunde componentes inseguros com uso de funções inseguras. A alternativa D atribui à terceira situação a exposição de dados sensíveis, que envolve dados mal protegidos acessados por atacantes."
  },
  {
    "t": "Qual das seguintes opções costuma ser usada para ajudar a prevenir ataques de XSS e injeção de SQL?",
    "opts": [
      "A) Gerenciamento seguro de sessões",
      "B) Validação de entrada",
      "C) SLOs",
      "D) Janelas de manutenção"
    ],
    "ans": 1,
    "exp": "A validação de entrada ajuda a prevenir uma grande variedade de problemas, desde scripting entre sites (XSS) até ataques de injeção de SQL. O gerenciamento seguro de sessões garante que invasores não consigam sequestrar sessões de usuários ou que problemas de sessão não causem confusão entre os usuários. As organizações que oferecem serviços de tecnologia aos clientes podem definir objetivos de nível de serviço (SLOs), que estabelecem expectativas formais de disponibilidade do serviço, preservação de dados e outros requisitos essenciais. Muitas organizações optam por concentrar várias alterações em um único período conhecido como janela de manutenção. As janelas de manutenção normalmente ocorrem à noite, nos fins de semana ou em outros períodos em que a atividade da empresa é baixa."
  },
  {
    "t": "Qual das seguintes opções foi projetada especificamente para dar suporte a testes de penetração e à engenharia reversa de malware?",
    "opts": [
      "A) Immunity Debugger",
      "B) GDB",
      "C) SDLC",
      "D) Consultas parametrizadas"
    ],
    "ans": 0,
    "exp": "O Immunity Debugger foi projetado especificamente para dar suporte a testes de penetração e à engenharia reversa de malware. O depurador GNU (GDB) é um depurador de código aberto amplamente utilizado no Linux e que funciona com diversas linguagens de programação. O ciclo de vida de desenvolvimento de software (SDLC) descreve as etapas de um modelo de desenvolvimento de software ao longo de sua vida. Consultas parametrizadas impedem ataques de injeção de SQL ao pré-compilar consultas SQL, de modo que nenhum código novo possa ser inserido quando a consulta for executada."
  },
  {
    "t": "Um teste de invasão revela que uma aplicação web monta consultas ao banco de dados concatenando diretamente os valores digitados pelos usuários, o que permitiu uma injeção de SQL. Qual prática de codificação trata esse problema de forma MAIS direta?",
    "opts": [
      "A) Codificação de saída, que traduz caracteres especiais antes que uma aplicação ou interpretador os leia",
      "B) Validação de entrada, que ajuda a prevenir uma ampla gama de problemas, do XSS à injeção de SQL",
      "C) Consultas parametrizadas, que pré-compilam as consultas e impedem a inserção de novo código na execução",
      "D) Gerenciamento seguro de sessão, que impede que atacantes sequestrem as sessões dos usuários"
    ],
    "ans": 2,
    "exp": "Consultas parametrizadas previnem a injeção de SQL ao pré-compilar as consultas, de modo que nenhum novo código possa ser inserido quando elas são executadas, o que resolve diretamente a concatenação insegura dos valores digitados. A alternativa B é a mais próxima, pois a validação de entrada ajuda a prevenir uma ampla gama de problemas, inclusive a injeção de SQL, mas é uma medida ampla, enquanto as consultas parametrizadas atacam a causa descrita, impedindo a inserção de código na execução da consulta. A alternativa A é voltada principalmente à prevenção de XSS. A alternativa D trata do sequestro de sessões, e não da manipulação de consultas ao banco de dados."
  },
  {
    "t": "Em um fórum on-line, um atacante publicou um comentário contendo caracteres especiais que, ao serem exibidos, fizeram o navegador de outros usuários executar um script (XSS). A equipe quer que os comentários continuem sendo exibidos, mas sem que esses caracteres provoquem ações. Qual prática atende MELHOR a esse objetivo?",
    "opts": [
      "A) Consultas parametrizadas, pois pré-compilam as instruções e impedem a inserção de novo código",
      "B) Proteção de dados com criptografia, pois impede a leitura dos comentários em trânsito pela rede",
      "C) Autenticação multifator, pois restringe a publicação de comentários a usuários autenticados",
      "D) Codificação de saída, que converte caracteres especiais em versões seguras antes de serem interpretados"
    ],
    "ans": 3,
    "exp": "A codificação de saída traduz caracteres especiais em uma versão equivalente, mas segura, antes que a aplicação-alvo ou o interpretador os leia, impedindo que esses caracteres façam o navegador executar uma ação. Assim, os comentários continuam visíveis, mas sem provocar XSS. A alternativa A trata da prevenção de injeção de SQL. A alternativa B protege a confidencialidade dos dados armazenados ou em trânsito, sem impedir que o conteúdo malicioso seja interpretado. A alternativa C é a mais próxima, pois restringe quem pode publicar, mas um usuário autenticado ainda poderia inserir os mesmos caracteres especiais."
  },
  {
    "t": "Uma equipe de desenvolvimento precisa tratar três riscos em uma nova aplicação: (1) limitar o impacto caso credenciais de usuários sejam comprometidas; (2) impedir que dados sejam interceptados e lidos enquanto armazenados ou em trânsito pela rede; e (3) impedir que atacantes assumam sessões de usuários ou que sessões se misturem entre usuários. Quais práticas correspondem, respectivamente, aos riscos 1, 2 e 3?",
    "opts": [
      "A) Gerenciamento seguro de sessão; proteção de dados com criptografia; autenticação multifator",
      "B) Autenticação multifator; proteção de dados com criptografia; gerenciamento seguro de sessão",
      "C) Autenticação multifator; validação de entrada; gerenciamento seguro de sessão",
      "D) Proteção de dados com criptografia; autenticação multifator; gerenciamento seguro de sessão"
    ],
    "ans": 1,
    "exp": "A autenticação multifator ajuda a limitar o impacto de comprometimentos de credenciais; técnicas de proteção de dados, como a criptografia, protegem os dados contra espionagem e outras violações de confidencialidade enquanto armazenados ou em trânsito; e o gerenciamento seguro de sessão garante que atacantes não sequestrem sessões e que problemas de sessão não causem confusão entre usuários. A alternativa D inverte as práticas dos riscos 1 e 2. A alternativa A inverte as práticas dos riscos 1 e 3. A alternativa C é a mais próxima, mas atribui ao risco 2 a validação de entrada, voltada a problemas como XSS e injeção de SQL, e não à confidencialidade dos dados."
  },
  {
    "t": "Um diretor de engenharia propõe reduzir o orçamento de testes de segurança de software, alegando que a equipe de desenvolvimento é extremamente experiente e talentosa, o que praticamente eliminaria a necessidade desses testes. Qual argumento do analista de segurança é o MAIS bem fundamentado?",
    "opts": [
      "A) A experiência da equipe não elimina a necessidade de testes: um estudo da Veracode encontrou ao menos uma falha de segurança em 83% de 1,4 milhão de aplicações analisadas já na varredura inicial",
      "B) Reduzir o orçamento é aceitável, desde que a equipe mantenha o mesmo nível de talento observado até o momento",
      "C) O estudo da Veracode citado só é aplicável a equipes iniciantes, sem relevância para equipes seniores e experientes",
      "D) Testes de segurança só passaram a ser necessários recentemente, por isso equipes formadas antes disso não precisam deles"
    ],
    "ans": 0,
    "exp": "Não importa quão talentosa seja a equipe de desenvolvimento, haverá alguma forma de falha no código; um estudo da Veracode mostrou que 83% das 1,4 milhão de aplicações analisadas tinham ao menos uma falha de segurança já na varredura inicial, o que aponta para uma necessidade enorme de testes bem integrados ao ciclo de vida de desenvolvimento. A alternativa B aceita a premissa falha do diretor. A alternativa C inventa uma restrição de escopo que não existe no estudo. A alternativa D inventa uma limitação temporal sem fundamento."
  },
  {
    "t": "Uma equipe de segurança revisa manualmente o código-fonte de uma aplicação financeira sem executar o programa, buscando entender a lógica de negócio interna e identificar problemas que testes de execução normalmente não alcançam. Qual tipo de avaliação está sendo realizado?",
    "opts": [
      "A) Análise dinâmica de código, que fornece entradas ao programa em execução para observar seu comportamento",
      "B) Teste de estresse, que avalia o comportamento da aplicação sob carga elevada durante a execução",
      "C) Análise estática de código, um tipo de teste de caixa-branca que revisa o código-fonte sem executar o programa",
      "D) Fuzzing, que envia entradas malformadas ao programa em execução para provocar falhas"
    ],
    "ans": 2,
    "exp": "A análise estática de código é conduzida revisando o código de uma aplicação, sem executar o programa; por usar o código-fonte com visibilidade total, é vista como um tipo de teste de caixa-branca, capaz de encontrar problemas que outros testes deixam passar, seja porque a lógica não é exposta a outros métodos, seja por problemas internos de lógica de negócio. As alternativas A, B e D descrevem métodos que dependem da execução do programa, o que contraria a premissa do cenário."
  },
  {
    "t": "Uma organização compara duas abordagens de análise estática de código: a Equipe A usa uma ferramenta automatizada para varrer o código em busca de padrões de vulnerabilidade já catalogados; a Equipe B tem desenvolvedores sênior revisando manualmente trechos específicos do código para identificar erros de lógica introduzidos durante a implementação. Qual afirmação descreve CORRETAMENTE a adequação de cada abordagem?",
    "opts": [
      "A) A abordagem da Equipe A é mais eficaz para identificar erros introduzidos pelo programador, e a da Equipe B, para encontrar problemas já conhecidos",
      "B) A análise automatizada da Equipe A tende a ser muito eficaz para encontrar problemas conhecidos, e a revisão manual da Equipe B ajuda a identificar erros induzidos pelo programador",
      "C) Ambas as equipes praticam, na realidade, análise dinâmica de código, já que estão testando trechos específicos do código-fonte",
      "D) A abordagem da Equipe B é desnecessária, pois ferramentas automatizadas de análise estática já cobrem toda a gama de erros induzidos pelo programador"
    ],
    "ans": 1,
    "exp": "A análise estática de código automatizada pode ser muito eficaz para encontrar problemas conhecidos, enquanto a análise estática de código manual ajuda a identificar erros induzidos pelo programador — exatamente o papel de cada equipe no cenário. A alternativa A inverte essa atribuição. A alternativa C erra ao chamar de dinâmica uma análise que não executa o programa. A alternativa D superestima as ferramentas automatizadas, ignorando o valor específico da revisão manual."
  },
  {
    "t": "Jason coleta inteligência de ameaças que indica que um adversário considerado uma ameaça por sua organização costuma abandonar pendrives USB para comprometer seus alvos. Isso é um exemplo de quê?",
    "opts": [
      "A) A superfície de ataque de sua organização",
      "B) Um possível vetor de ataque",
      "C) Um exemplo de capacidade do adversário",
      "D) Uma avaliação de probabilidade"
    ],
    "ans": 1,
    "exp": "Vetores de ataque, ou os meios pelos quais um invasor pode obter acesso a seu alvo, podem incluir ações como abandonar pendrives USB. Você pode se sentir tentado a responder a essa questão com capacidade do adversário, mas lembre-se da definição: os recursos, a intenção ou a capacidade do provável agente de ameaça. Capacidade, aqui, não significa o que ele pode fazer, mas sua habilidade para fazê-lo. A superfície de ataque poderia incluir o estacionamento da organização neste exemplo, mas isso não é um exemplo de superfície de ataque, e nenhuma avaliação de probabilidade foi incluída nesse problema."
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
    "exp": "Avaliações comportamentais são muito úteis quando você está tentando identificar ameaças internas. Como ameaças internas costumam ser difíceis de distinguir do comportamento normal, frequentemente são usados o contexto das ações realizadas, como logins fora do horário de expediente, uso indevido de credenciais e logins de locais incomuns ou em padrões anormais, além de outros indicadores comportamentais."
  },
  {
    "t": "Uma equipe executa uma ferramenta automatizada que envia grandes volumes de dados inválidos e aleatórios a uma aplicação, monitorando se ela trava ou responde de forma incorreta. Os testes encontraram falhas de validação de entrada, mas nenhum problema ligado às regras de negócio. Qual conclusão é CORRETA?",
    "opts": [
      "A) O resultado indica que a aplicação não possui falhas de lógica de negócio, pois o fuzzing avalia todos os caminhos do código",
      "B) O resultado é esperado, pois o fuzzing tende a encontrar problemas simples e não considera lógica complexa ou processos de negócio",
      "C) O resultado indica erro na execução, pois o fuzzing só é eficaz quando conduzido manualmente pelos desenvolvedores",
      "D) O resultado é inconclusivo, pois o fuzzing não é capaz de detectar problemas de validação de entrada nem de tratamento de erros"
    ],
    "ans": 1,
    "exp": "O fuzzing envia dados inválidos ou aleatórios e é útil para detectar problemas de validação de entrada e de lógica, vazamentos de memória e falhas de tratamento de erros; porém, tende a identificar apenas problemas simples e não considera lógica complexa ou questões de processo de negócio. A alternativa A é a mais próxima, mas erra ao supor cobertura completa: sem monitoramento do progresso, o fuzzing pode não cobrir todo o código. A alternativa C contraria o fato de o fuzzing ser tipicamente automatizado, pelo grande volume de dados. A alternativa D nega justamente os problemas que o fuzzing detecta bem."
  },
  {
    "t": "Uma equipe precisa testar mecanismos de tratamento de erros raramente acionados em uma aplicação crítica. Ela pretende inserir falhas modificando o código-fonte antes da compilação e, em outro teste, inserir dados diretamente na memória do programa em execução. Qual alternativa identifica CORRETAMENTE a técnica e as duas formas utilizadas?",
    "opts": [
      "A) Fuzzing, por meio de injeção em tempo de compilação e injeção em tempo de execução",
      "B) Injeção de falhas, por meio de injeção em tempo de compilação e injeção por software de protocolo",
      "C) Injeção de falhas, por meio de injeção em tempo de compilação e injeção em tempo de execução",
      "D) Injeção de falhas, por meio de injeção por software de protocolo e injeção em tempo de execução"
    ],
    "ans": 2,
    "exp": "A injeção de falhas insere falhas diretamente nos caminhos de tratamento de erros, sobretudo em mecanismos raramente usados. A injeção em tempo de compilação modifica o código-fonte da aplicação, e a injeção em tempo de execução insere dados no programa em execução, inclusive em sua memória. As alternativas B e D substituem uma das formas descritas pela injeção por software de protocolo, que usa técnicas de fuzzing para enviar dados não conformes ao protocolo a um serviço. A alternativa A confunde as técnicas: o fuzzing envia dados inválidos ou aleatórios à aplicação, enquanto a injeção de falhas atua diretamente nos caminhos de tratamento de erros."
  },
  {
    "t": "Uma equipe de qualidade aplica pequenas modificações controladas ao próprio código da aplicação, gerando versões alteradas que são executadas e rejeitadas quando provocam falhas. O objetivo é replicar erros comuns de programação e avaliar se os scripts de teste realmente cobrem os possíveis problemas. Qual técnica está sendo utilizada?",
    "opts": [
      "A) Fuzzing, pois envia grandes volumes de dados inesperados à aplicação para verificar como ela responde",
      "B) Teste de mutação, pois altera o próprio programa e rejeita as versões alteradas que causam falhas",
      "C) Injeção de falhas, pois insere falhas nos caminhos de tratamento de erros raramente usados da aplicação",
      "D) Teste de regressão de segurança, pois verifica se as mudanças aplicadas introduziram novos problemas"
    ],
    "ans": 1,
    "exp": "O teste de mutação faz pequenas modificações no próprio programa; as versões alteradas, chamadas mutantes, são testadas e rejeitadas se causarem falhas. As mutações seguem regras que replicam erros comuns de programação e ajudam a revelar problemas com dados de teste e scripts que não testam completamente possíveis falhas. A alternativa C é a mais próxima, pois ambas ajudam a avaliar código pouco usado, mas a injeção de falhas insere falhas nos caminhos de tratamento de erros, em vez de modificar o programa. A alternativa A altera as entradas, não o código. A alternativa D verifica o efeito de mudanças já aplicadas, sem gerar mutantes."
  },
  {
    "t": "Antes de colocar uma aplicação em produção, a equipe quer simular a carga total esperada e ir além dela, até identificar o ponto de ruptura do sistema e conhecer seu cenário de pior caso. A aplicação, porém, roda em uma infraestrutura com escalonamento automático. Qual é a abordagem MAIS adequada?",
    "opts": [
      "A) Realizar apenas teste de carga com a carga média diária, já que o escalonamento automático absorve os picos",
      "B) Testar somente a aplicação como um todo, pois componentes individuais não podem ser submetidos a teste de estresse",
      "C) Conduzir teste de estresse definindo um máximo razoável a ser testado, dada a dificuldade imposta pelo escalonamento automático",
      "D) Elevar a carga indefinidamente até o rompimento da infraestrutura, mesmo com o escalonamento automático ativo"
    ],
    "ans": 2,
    "exp": "Testes de estresse e de carga devem contemplar o pior caso, e muitas organizações testam até o ponto de ruptura da infraestrutura. Com aplicações de escalonamento automático, porém, isso se torna muito mais difícil, sendo recomendado definir um máximo razoável a ser testado. A alternativa D é a mais próxima, mas ignora justamente essa dificuldade. A alternativa A limita o teste à carga média, quando o objetivo é simular a carga total e ultrapassá-la. A alternativa B contraria a possibilidade de conduzir teste de estresse contra componentes individuais da aplicação."
  },
  {
    "t": "Após a instalação de um patch em uma aplicação web, o analista precisa garantir que a mudança não tenha introduzido novas vulnerabilidades ou configurações incorretas. Qual abordagem é a MAIS adequada?",
    "opts": [
      "A) Executar fuzzing na aplicação, enviando dados aleatórios para verificar se o patch alterou o tratamento de entradas",
      "B) Aplicar teste de mutação ao código corrigido, gerando mutantes para confirmar a eficácia do patch instalado",
      "C) Confiar na validação do fornecedor do patch, já que correções publicadas não introduzem novas vulnerabilidades",
      "D) Realizar teste de regressão de segurança, comparando relatórios de varredura da aplicação antes e depois da mudança"
    ],
    "ans": 3,
    "exp": "O teste de regressão de segurança verifica se mudanças, como a instalação de patches e atualizações, introduziram novas vulnerabilidades, configurações incorretas ou outros problemas. Esse processo costuma ser automatizado ou semiautomatizado com scanners de vulnerabilidades de aplicações web, gerando relatórios do estado da aplicação e de seus serviços antes e depois das mudanças. A alternativa C ignora que não é incomum uma vulnerabilidade ser introduzida por um patch, inclusive por falhas de controle de versão que reintroduzem código já corrigido. As alternativas A e B descrevem técnicas voltadas à descoberta de falhas no software, e não à comparação do estado de segurança antes e depois de uma mudança."
  },
  {
    "t": "Uma aplicação corporativa concluiu todos os testes funcionais e de segurança e está na etapa final antes da promoção para produção, na qual usuários de negócio validam se ela atende às suas necessidades reais de uso. O gerente do projeto quer garantir que exista um parâmetro objetivo para determinar quando essa etapa pode ser considerada concluída com sucesso. O que deve ser estabelecido para atender a essa necessidade?",
    "opts": [
      "A. Métricas de cobertura de código obtidas por meio de análise dinâmica do executável",
      "B. Casos de teste de regressão cobrindo todas as funções alteradas na última build",
      "C. Uma linha de base de desempenho medida sob a carga máxima esperada da aplicação",
      "D. Critérios de aceitação associados a um plano de testes formal com os processos de negócio comuns"
    ],
    "ans": 3,
    "exp": "A etapa descrita é o teste de aceitação do usuário, que idealmente combina um plano de testes formal contendo exemplos dos processos de negócio comuns executados pelos usuários com critérios de aceitação, os quais indicam quais requisitos precisam ser satisfeitos para que o trabalho seja considerado aceitável e pronto para produção — exatamente o parâmetro objetivo solicitado. A alternativa A trata de análise dinâmica de executáveis, atividade de depuração e não de validação pelos usuários. A alternativa B pertence ao teste funcional, já concluído nesse ponto do ciclo. A alternativa C mede desempenho sob carga, o que não define se os requisitos de negócio e usabilidade foram atendidos."
  },
  {
    "t": "Um testador de invasão recebe um arquivo executável suspeito, sem acesso ao código-fonte, e precisa observar seu comportamento durante a execução em um host Linux. O binário foi escrito em uma linguagem diferente das utilizadas no restante do ambiente. Qual abordagem atende melhor a esse requisito?",
    "opts": [
      "A. Utilizar o GNU Debugger (GDB), que opera em Linux com diversas linguagens de programação",
      "B. Utilizar o Immunity Debugger, por ser voltado a testes de invasão e engenharia reversa de malware",
      "C. Descompilar o executável para reconstruir o código-fonte original antes de qualquer análise",
      "D. Realizar revisão manual do código-fonte da aplicação, por ser mais precisa que a depuração"
    ],
    "ans": 0,
    "exp": "O GDB é um depurador de código aberto amplamente utilizado no Linux e compatível com uma variedade de linguagens de programação, atendendo aos dois requisitos do cenário e permitindo a análise dinâmica do executável. A alternativa B cita um depurador legítimo para pen testing e engenharia reversa de malware, mas não é a opção alinhada ao requisito de operação em Linux com múltiplas linguagens. A alternativa C descreve a descompilação, processo que tenta converter o executável de volta em código-fonte, mas é bastante difícil e raramente bem-sucedido, além de não observar o comportamento em tempo de execução. A alternativa D é inviável, pois o código-fonte não está disponível."
  },
  {
    "t": "O CISO de uma empresa de médio porte precisa revisar a política de segurança da informação, que hoje possui quase 100 páginas e detalha configurações específicas de tecnologias já descontinuadas. A aprovação de qualquer alteração exige aval do CEO, e a equipe reclama do esforço de republicar o documento a cada ajuste pontual. Qual abordagem melhor resolve esse problema de governança?",
    "opts": [
      "A. Incorporar todos os requisitos técnicos à política e obter uma aprovação executiva única que cubra alterações futuras",
      "B. Manter a política com declarações amplas e usar a delegação de autoridade para criar padrões, procedimentos e diretrizes que a implementem",
      "C. Converter a política em um código de conduta/ética, que serve como respaldo para situações não especificamente abordadas",
      "D. Reduzir o ciclo de revisão da política para republicá-la sempre que um requisito individual precisar de ajuste"
    ],
    "ans": 1,
    "exp": "Manter as declarações de política em nível elevado dá ao CISO flexibilidade para adaptar requisitos de segurança específicos conforme mudam os ambientes de negócio e tecnologia, e a própria política delega ao CISO a autoridade para criar padrões, procedimentos e diretrizes que a implementam. A alternativa A agrava o problema: políticas extensas ficam desatualizadas rapidamente e exigem aprovação de alto nível a cada mudança. A alternativa C confunde funções — o código de conduta trata do comportamento esperado de funcionários e afiliados, não substitui a autoridade de alto nível do programa de segurança. A alternativa D perpetua o ciclo de republicação constante que desgasta a equipe e leva à negligência de alterações necessárias."
  },
  {
    "t": "STRIDE, PASTA e LIDDUN são exemplos de quê?",
    "opts": [
      "A) Sistemas de classificação de dia zero",
      "B) Ferramentas de avaliação de vulnerabilidades",
      "C) Ferramentas de análise de adversários",
      "D) Ferramentas de classificação de ameaças"
    ],
    "ans": 3,
    "exp": "STRIDE, PASTA e LIDDUN são exemplos de ferramentas de classificação de ameaças. O LIDDUN se concentra nas ameaças à privacidade, o STRIDE é uma ferramenta da Microsoft, e o PASTA é uma ferramenta de modelagem de ameaças centrada no invasor."
  },
  {
    "t": "Que tipo de ferramenta de teste de software executa o código enquanto ele está sendo testado?",
    "opts": [
      "A) Análise estática",
      "B) Análise dinâmica",
      "C) Compilação",
      "D) Descompilação"
    ],
    "ans": 1,
    "exp": "As técnicas de análise dinâmica realmente executam o código durante o processo de teste. As ferramentas e técnicas de análise estática de código analisam a estrutura e o conteúdo do código sem executar o próprio código. Compilação é o processo de transformar código-fonte em um executável, e a descompilação tenta reverter esse processo. Nem a compilação nem a descompilação executam o código."
  },
  {
    "t": "Durante uma auditoria, constata-se que contas de funcionários desligados permanecem ativas por meses e que não há critério documentado para provisionamento, uso ativo e desativação de contas. O comitê de governança solicita que a lacuna seja endereçada pelo documento apropriado da biblioteca de segurança da informação. Qual documento deve ser elaborado ou revisado?",
    "opts": [
      "A. Política de senhas",
      "B. Política de retenção de dados",
      "C. Política de gerenciamento de contas",
      "D. Política de monitoramento contínuo"
    ],
    "ans": 2,
    "exp": "A política de gerenciamento de contas é justamente a que descreve o ciclo de vida da conta, desde o provisionamento, passando pelo uso ativo, até a desativação — exatamente a lacuna identificada. A alternativa A trata de comprimento, complexidade e reutilização de senhas, e não do ciclo de vida das contas. A alternativa B define quais informações são mantidas e por quanto tempo antes da destruição, aplicando-se a dados e produtos de trabalho, não a credenciais de acesso. A alternativa D descreve a abordagem da organização quanto ao monitoramento e informa os funcionários de que suas atividades estão sujeitas a monitoramento, o que poderia detectar o uso indevido, mas não estabelece o processo de desativação."
  },
  {
    "t": "Um analista revisa a biblioteca de políticas de segurança da informação da organização e observa que requisitos de comprimento e complexidade de senha estão publicados como parte dessa biblioteca, apesar de as políticas serem definidas como declarações de alto nível da intenção da gestão. Qual é a avaliação mais precisa dessa situação?",
    "opts": [
      "A. A observação é razoável, mas esses itens são reconhecidos como elementos da política de segurança da informação, ainda que muitas organizações os desloquem para documentos de padrões",
      "B. Trata-se de um erro de classificação que torna o cumprimento desses requisitos não obrigatório para funcionários e contratados",
      "C. Requisitos de senha pertencem obrigatoriamente a procedimentos, por descreverem etapas operacionais executadas pelos administradores",
      "D. A presença desses requisitos indica que a política deixou de delegar ao CISO a autoridade para criar padrões e diretrizes"
    ],
    "ans": 0,
    "exp": "Alguns documentos da biblioteca realmente se aproximam mais da definição de padrão do que de política de alto nível, e essa é uma conclusão razoável; ainda assim, esses itens — incluindo requisitos de senha — são tratados como elementos da política de segurança da informação, embora muitas organizações prefiram movê-los para documentos de padrões. A alternativa B está errada porque o cumprimento das políticas é obrigatório, independentemente do grau de detalhe. A alternativa C confunde categorias: as definições variam entre organizações e limites pouco nítidos são comuns, sem uma obrigatoriedade de classificar tais requisitos como procedimento. A alternativa D não se sustenta, pois a delegação de autoridade ao CISO independe de onde os requisitos de senha estejam publicados."
  },
  {
    "t": "A política de segurança da informação de uma empresa determina que os sistemas sejam protegidos contra configuração insegura, mas não especifica parâmetros técnicos. A equipe de segurança precisa publicar as configurações exatas a serem aplicadas no sistema operacional mais usado no parque, sabendo que esses parâmetros serão ajustados várias vezes ao ano conforme novas versões do fornecedor. Em qual documento esses requisitos devem ser publicados e por quê?",
    "opts": [
      "A. Em uma diretriz, pois traz recomendações que podem ser ajustadas sem passar por aprovação formal",
      "B. Em um padrão, pois contém requisitos obrigatórios e costuma ser aprovado em nível organizacional inferior ao da política",
      "C. Na própria política de segurança da informação, pois o cumprimento é obrigatório para todos os funcionários e contratados",
      "D. Em um acordo de nível de serviço, pois formaliza expectativas técnicas e é revisado a cada ciclo contratual"
    ],
    "ans": 1,
    "exp": "Os padrões trazem requisitos obrigatórios que descrevem como a organização executará suas políticas, incluindo configurações específicas de um sistema operacional comum; por serem aprovados em nível organizacional inferior ao das políticas, podem mudar com mais regularidade — exatamente o que o cenário exige. A alternativa A falha porque diretrizes são orientações, e o cenário exige requisitos obrigatórios. A alternativa C é inadequada porque políticas são declarações amplas de alto nível, cuja alteração é trabalhosa e exige aprovação elevada, incompatível com ajustes frequentes. A alternativa D confunde categorias: SLAs formalizam expectativas de serviço perante clientes, não a configuração interna de sistemas."
  },
  {
    "t": "Um documento de recomendações publicado por uma universidade acompanha seus padrões mínimos de segurança e abre com a observação de que a política institucional exige conformidade com esses padrões para dispositivos que tratam dados cobertos, e que as recomendações apresentadas em seguida constituem orientação opcional. Um administrador pergunta se sua equipe pode ser apontada como não conforme por não adotar tais recomendações. Qual é a resposta correta?",
    "opts": [
      "A. Sim, pois qualquer documento vinculado a um padrão obrigatório herda o caráter mandatório desse padrão",
      "B. Não, pois padrões aprovados em nível organizacional inferior perdem o caráter obrigatório dos controles que descrevem",
      "C. Sim, desde que os desvios em relação a essas recomendações sejam aprovados por processo de gestão de mudanças e documentados",
      "D. Não, pois diretrizes fornecem orientação às organizações que buscam cumprir a política e os padrões, sem serem obrigatórias"
    ],
    "ans": 3,
    "exp": "O documento descrito é uma diretriz, cujo papel é aconselhar organizações que buscam cumprir a política e os padrões; o próprio texto a qualifica como orientação opcional, de modo que não gera não conformidade. A alternativa A está errada porque a obrigatoriedade não se transfere automaticamente: política e padrões são mandatórios, diretrizes não. A alternativa B inverte o conceito — padrões contêm requisitos obrigatórios independentemente do nível em que são aprovados; o nível inferior apenas permite atualizações mais frequentes. A alternativa C aplica indevidamente a exigência de aprovar e documentar desvios, que incide sobre configurações de segurança definidas em padrão, não sobre recomendações opcionais."
  },
  {
    "t": "Um provedor de serviços de tecnologia compromete-se a manter 99,999% de tempo de atividade nos sistemas voltados ao cliente. A área jurídica do cliente quer entender como esse compromisso é formalizado e quais consequências existem caso não seja cumprido. Qual afirmação descreve corretamente a situação?",
    "opts": [
      "A. O SLO é o documento contratual assinado com o cliente, enquanto o SLA é a métrica interna de disponibilidade acompanhada pela equipe de operações",
      "B. O compromisso equivale a cerca de seis horas de indisponibilidade anual e deve constar da política de segurança da informação do provedor",
      "C. O SLO estabelece a expectativa formal de disponibilidade, é documentado em um SLA incluído no contrato e pode prever penalidades, como reembolso de parte das tarifas do serviço",
      "D. Por tratar de disponibilidade operacional, o compromisso deve ser publicado como diretriz, servindo de orientação opcional às equipes do provedor"
    ],
    "ans": 2,
    "exp": "SLOs estabelecem expectativas formais quanto à disponibilidade do serviço, preservação de dados e outros requisitos; são documentados em SLAs, documentos formais tipicamente incluídos em contratos com clientes, que podem prever penalidades a fornecedores que não os cumpram, como o reembolso de parte das tarifas. A alternativa A inverte os papéis de SLO e SLA. A alternativa B erra na conta e no documento: \"cinco noves\" representam menos de seis minutos de inatividade por ano, e o compromisso é contratual, não parte da política de segurança. A alternativa D trata como orientação opcional algo que é uma expectativa formal contratada, sujeita inclusive a penalidades."
  },
  {
    "t": "Uma rede varejista suspeita do comprometimento de dados de cartões de pagamento. O documento da bandeira aplicável determina a notificação em até três dias, a contratação de um investigador forense qualificado em até cinco dias úteis e a entrega de relatórios preliminar e final em prazos fixos, sem margem para interpretação. Como esse documento deve ser classificado dentro da estrutura de políticas da organização e qual é sua força de cumprimento?",
    "opts": [
      "A. Padrão, com cumprimento obrigatório por definir controles mínimos exigidos para dados de cartão",
      "B. Diretriz setorial, com adoção recomendada para demonstrar alinhamento às melhores práticas do setor",
      "C. Procedimento, com cumprimento obrigatório por descrever um processo detalhado e passo a passo para circunstâncias específicas",
      "D. Política, com cumprimento obrigatório por expressar a intenção da gestão quanto à resposta a incidentes"
    ],
    "ans": 2,
    "exp": "Procedimentos são processos detalhados, passo a passo, que devem ser seguidos em circunstâncias específicas, com cumprimento obrigatório; o documento citado estabelece exatamente ações, tipo de investigador e prazos, sem espaço para interpretação — característica de procedimento, ainda que a palavra não apareça no título. A alternativa A confunde com padrão, que define requisitos de controle, não a sequência de ações e marcos temporais. A alternativa B erra ao tratar como orientação recomendada algo expressamente obrigatório. A alternativa D descreve política, documento amplo e de alto nível, incompatível com o nível de detalhe operacional apresentado."
  },
  {
    "t": "O departamento jurídico de uma empresa recebe uma ordem judicial exigindo a entrega de registros digitais de um sistema corporativo. A equipe de segurança percebe que não existe processo documentado definindo como coletar, validar e entregar esse material de forma consistente. Qual documento deve ser criado para suprir essa lacuna?",
    "opts": [
      "A. Procedimentos de produção de evidências",
      "B. Procedimentos de monitoramento",
      "C. Política de retenção de dados",
      "D. Procedimentos de aplicação de patches"
    ],
    "ans": 0,
    "exp": "Os procedimentos de produção de evidências descrevem como a organização responderá a intimações, ordens judiciais e outras solicitações legítimas de produção de evidências digitais — exatamente a situação apresentada. A alternativa B trata de como as atividades de monitoramento de segurança serão realizadas, incluindo o possível uso de monitoramento contínuo, o que pode gerar registros, mas não define a resposta a demandas judiciais. A alternativa C determina o que é mantido e por quanto tempo, sem estabelecer o processo de entrega do material. A alternativa D trata da frequência e do processo de aplicação de patches, tema alheio à produção de evidências."
  },
  {
    "t": "Após incidentes causados por servidores colocados em produção com serviços desnecessários habilitados, um gestor propõe publicar um documento que oriente as equipes sobre boas práticas de instalação, deixando a adoção a critério de cada área. Um analista argumenta que a abordagem não resolverá o problema. Qual justificativa sustenta melhor a posição do analista?",
    "opts": [
      "A. Documentos de construção de sistemas só produzem efeito quando incorporados ao contrato de nível de serviço firmado com as áreas internas",
      "B. A consistência exigida depende de um procedimento com passos definidos e cumprimento obrigatório, e não de orientação de adoção facultativa",
      "C. A frequência de aplicação de patches determina a segurança do servidor, tornando irrelevante o processo adotado na instalação",
      "D. Somente a alta gestão pode autorizar documentos operacionais, de modo que qualquer texto publicado pela equipe técnica não teria validade"
    ],
    "ans": 1,
    "exp": "Procedimentos funcionam como checklists e garantem um processo consistente para alcançar um objetivo de segurança, sendo comumente criados para a construção de novos sistemas, e seu cumprimento é obrigatório — por isso a orientação facultativa proposta não asseguraria a padronização necessária. A alternativa A desvia o foco para acordos de nível de serviço, que formalizam expectativas de serviço e não substituem processos internos obrigatórios. A alternativa C ignora que o problema está na instalação inicial; procedimentos de patching tratam de outra etapa e não corrigem serviços desnecessários habilitados. A alternativa D inventa uma restrição inexistente: equipes de cibersegurança podem incluir procedimentos em suas estruturas conforme as necessidades operacionais."
  },
  {
    "t": "Um órgão público publica um documento de 25 páginas que ajuda as unidades administrativas a decidir se, e em que medida, adotarão assinaturas eletrônicas, e lhes fornece informações para que criem suas próprias regras sobre o tema. Um gestor de TI pergunta se sua unidade pode ser considerada em descumprimento por não adotar a tecnologia. Qual afirmação responde corretamente?",
    "opts": [
      "A. Não, pois o documento apresenta melhores práticas e recomendações, e o cumprimento de diretrizes não é obrigatório",
      "B. Sim, pois documentos publicados pela autoridade máxima de TI adquirem caráter mandatório em toda a organização",
      "C. Não, desde que a unidade registre formalmente a exceção e obtenha aprovação para o desvio",
      "D. Sim, pois a extensão e o detalhamento do documento caracterizam requisitos obrigatórios equivalentes aos de um padrão"
    ],
    "ans": 0,
    "exp": "Diretrizes fornecem melhores práticas e recomendações sobre um conceito, tecnologia ou tarefa, e seu cumprimento não é obrigatório — o documento descrito foi concebido para aconselhar, não para obrigar. A alternativa B erra ao supor que a autoria em nível executivo converte recomendação em obrigação. A alternativa C aplica indevidamente o registro formal de exceções, mecanismo próprio de requisitos obrigatórios; não havendo obrigação, não há desvio a aprovar. A alternativa D confunde volume com força normativa: nem a extensão nem o nível de detalhe transformam uma diretriz em padrão."
  },
  {
    "t": "Um analista revisa um documento de diretrizes e identifica que, entre páginas de recomendações, há um parágrafo determinando que links e contatos sejam enviados por e-mail a uma caixa específica, com prazo de inclusão de cinco dias úteis e responsabilidade de comunicar alterações. Qual é a avaliação mais precisa sobre esse parágrafo?",
    "opts": [
      "A. O parágrafo invalida a natureza consultiva do documento inteiro, que passa a ser tratado como procedimento",
      "B. A presença de prazos indica que o trecho deveria constar de uma política, já que apenas políticas estabelecem responsabilidades atribuíveis",
      "C. O trecho descreve um procedimento obrigatório e, pela definição estrita, não caberia em uma diretriz, tendo sido incluído por conveniência do leitor em vez de gerar documento separado",
      "D. O trecho é coerente com a diretriz, pois toda recomendação de melhor prática costuma incluir prazos sugeridos de execução"
    ],
    "ans": 2,
    "exp": "O parágrafo realmente delineia um procedimento obrigatório e não seria apropriado em uma diretriz sob a definição estrita do termo; a explicação mais provável é que o comitê redator julgou mais conveniente para o leitor incluí-lo ali do que elaborar um documento de procedimento separado para uma tarefa simples. A alternativa A exagera: um único parágrafo não converte um documento de 25 páginas em procedimento. A alternativa B erra ao afirmar que somente políticas atribuem responsabilidades — procedimentos também o fazem, com passos e prazos. A alternativa D trata como recomendação algo redigido em termos mandatórios."
  },
  {
    "t": "Adam está realizando testes de software revisando o código-fonte da aplicação. Que tipo de teste de código Adam está realizando?",
    "opts": [
      "A) Teste de mutação",
      "B) Análise estática de código",
      "C) Análise dinâmica de código",
      "D) Fuzzing"
    ],
    "ans": 1,
    "exp": "Adam está realizando análise estática de código ao revisar o código-fonte. A análise dinâmica de código exige a execução do programa, e tanto o teste de mutação quanto o fuzzing são tipos de análise dinâmica."
  },
  {
    "t": "Durante os testes, Tiffany aumenta lentamente o número de conexões com uma aplicação até que ela falhe. O que ela está fazendo?",
    "opts": [
      "A) Teste de regressão",
      "B) Teste unitário",
      "C) Teste de estresse",
      "D) Teste de Fagan"
    ],
    "ans": 2,
    "exp": "Tiffany está submetendo a aplicação a um teste de estresse. Os testes de estresse ultrapassam intencionalmente os limites normais da aplicação para verificar como ela responde a cargas extremas ou a outras condições anormais além de sua capacidade normal. Os testes unitários testam componentes individuais de uma aplicação, enquanto os testes de regressão são realizados para garantir que novas versões não reintroduzam erros antigos. O teste de Fagan é um método formal de inspeção de código."
  },
  {
    "t": "Durante a padronização documental de uma empresa, a equipe precisa classificar textos pela linguagem utilizada. Um documento repetidamente usa expressões como \"ajudar as áreas a determinar\" e \"fornecer informações que possam ser usadas\", e declara que a legislação aplicável não exige a adoção da tecnologia tratada. Qual conclusão o analista deve registrar?",
    "opts": [
      "A. A linguagem é típica de padrões, pois descreve como implementar tecnologias específicas de forma consistente",
      "B. A linguagem indica um documento consultivo, característica de diretrizes, embora o grau de opcionalidade possa variar conforme a cultura organizacional",
      "C. A ausência de exigência legal impede qualquer classificação formal, devendo o documento ficar fora da estrutura de políticas",
      "D. A linguagem é típica de políticas, pois expressa a intenção da gestão sem descer a detalhes técnicos de implementação"
    ],
    "ans": 1,
    "exp": "Expressões como \"ajudar a determinar\" e \"fornecer informações\" são comuns em documentos de diretrizes e não têm nada de obrigatório, reforçadas aqui pela declaração de que a lei não exige a adoção — perfil consultivo típico de diretriz, cuja \"opcionalidade\" ainda pode variar conforme a cultura da organização. A alternativa A descreve padrões, que trazem requisitos obrigatórios, incompatíveis com linguagem de aconselhamento. A alternativa C está errada porque diretrizes integram normalmente a estrutura de políticas, independentemente de exigência legal. A alternativa D confunde com política: esta é de alto nível, mas de cumprimento obrigatório, e não meramente informativa."
  },
  {
    "t": "Uma linha de produção depende de um software que só funciona em uma versão descontinuada de sistema operacional, cuja utilização é vedada pela política de segurança da empresa. A equipe de segurança autoriza a permanência da máquina e decide colocá-la em um segmento isolado, com pouco ou nenhum acesso a outros sistemas, até que o fornecedor entregue uma versão compatível. Como essa decisão deve ser caracterizada?",
    "opts": [
      "A. Controle compensatório aplicado a uma exceção temporária, que deve ser acompanhado de um plano de remediação para restabelecer a conformidade",
      "B. Aceitação formal de risco residual, que dispensa controles adicionais por já haver justificativa de negócio documentada",
      "C. Revisão do padrão de segurança, já que a impossibilidade técnica demonstra que o requisito original é inexequível",
      "D. Controle compensatório permanente, adequado por substituir definitivamente o requisito original enquanto o sistema existir"
    ],
    "ans": 0,
    "exp": "Um controle compensatório busca meios alternativos de atingir o objetivo quando o requisito original não pode ser cumprido, e o isolamento de rede é exatamente o exemplo clássico dessa abordagem. Como a exceção é temporária, a organização também deve desenvolver planos de remediação que a tragam de volta à conformidade com a letra e a intenção do controle original. A alternativa B erra ao tratar o caso como aceitação pura de risco, ignorando o controle efetivamente implementado. A alternativa C confunde exceção pontual com alteração do padrão, que continua válido para o restante do ambiente. A alternativa D falha ao presumir permanência: o cenário indica solução provisória, exigindo remediação."
  },
  {
    "t": "Uma empresa sujeita ao PCI DSS não consegue implementar um requisito específico e propõe um controle alternativo. O avaliador questiona se a proposta será aceita. Qual conjunto de critérios o controle precisa satisfazer para ser considerado satisfatório?",
    "opts": [
      "A. Ser aprovado pelo comitê de exceções, documentar riscos não mitigados e ter duração inferior a um ano",
      "B. Reduzir o custo de conformidade, ser auditável e constar do plano de remediação aprovado",
      "C. Atender à intenção e ao rigor do requisito original, oferecer nível de defesa semelhante que compense o risco visado e ir além dos demais requisitos do PCI DSS",
      "D. Eliminar completamente a vulnerabilidade tratada pelo requisito original e ser validado por investigador forense credenciado"
    ],
    "ans": 2,
    "exp": "O PCI DSS define três critérios para um controle compensatório: atender à intenção e ao rigor do requisito original; fornecer nível de defesa semelhante, compensando suficientemente o risco que o requisito original visava defender; e ir \"além\" dos demais requisitos do PCI DSS. A alternativa A mistura elementos do processo de exceção com prazos inexistentes nos critérios. A alternativa B introduz redução de custo, que não é critério de aceitação. A alternativa D exige eliminação total da vulnerabilidade e validação forense, patamares não previstos — o exigido é defesa equivalente, não perfeição."
  },
  {
    "t": "Ao implantar novos padrões de segurança, um CISO percebe que áreas de negócio vêm descumprindo requisitos de forma informal, sem registro. Ele quer estruturar um mecanismo formal de exceções. Qual conjunto de elementos deve constar da solicitação para que o processo seja completo?",
    "opts": [
      "A. Requisito objeto da exceção, motivo do não cumprimento, justificativa de negócio ou técnica, escopo e duração, riscos envolvidos, controles suplementares, plano de conformidade e riscos não mitigados",
      "B. Requisito objeto da exceção, custo estimado de conformidade, fornecedor responsável pela tecnologia e data da próxima auditoria externa",
      "C. Inventário completo dos ativos afetados, classificação dos dados envolvidos e parecer jurídico sobre responsabilidade civil",
      "D. Motivo do não cumprimento, aprovação do CEO e comprovação de que nenhum risco residual permanecerá após a exceção"
    ],
    "ans": 0,
    "exp": "Um processo de exceção maduro exige que o solicitante documente o padrão ou requisito que demanda exceção, o motivo do não cumprimento, a justificativa de negócio e/ou técnica, escopo e duração, riscos associados, controles suplementares que os mitiguem, plano para alcançar a conformidade e a identificação de riscos não mitigados. A alternativa B troca elementos essenciais por dados contratuais e de auditoria. A alternativa C lista insumos úteis de gestão de risco, mas que não compõem a solicitação de exceção. A alternativa D exige aprovação obrigatória do CEO — a autoridade pode ser de outro indivíduo ou comitê — e contraria a própria previsão de identificar riscos não mitigados."
  }
];
