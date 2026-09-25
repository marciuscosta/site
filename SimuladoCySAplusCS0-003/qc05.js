// Questões do arquivo Questionario_Cap5.txt, na ordem original.
// Os números do TXT servem apenas como separadores de questões.
const Qs = [
  {
    "t": "Uma organização de varejo processa transações com cartão de crédito em seu ambiente de e-commerce e está se preparando para uma auditoria de conformidade. O gestor de segurança pede que a equipe defina a rotina mínima de varreduras de vulnerabilidade de rede exigida pelo PCI DSS. Qual das opções a seguir atende corretamente a essa exigência?",
    "opts": [
      "A. Executar varreduras externas de vulnerabilidade mensalmente e varreduras internas em base anual.",
      "B. Executar varreduras internas e externas de vulnerabilidade semestralmente e após cada mudança significativa.",
      "C. Executar varreduras externas trimestralmente, deixando as varreduras internas a critério da organização.",
      "D. Executar varreduras internas e externas de vulnerabilidade pelo menos trimestralmente e após qualquer mudança significativa."
    ],
    "ans": 3,
    "exp": "O PCI DSS exige que organizações que lidam com cartões de crédito realizem varreduras de vulnerabilidade de rede internas e externas, com periodicidade mínima trimestral e também após qualquer mudança significativa no ambiente. A alternativa A erra na frequência de ambos os tipos de varredura e cria uma assimetria inexistente. A alternativa B mantém corretamente os dois escopos e o gatilho por mudança significativa, mas a periodicidade semestral fica abaixo do mínimo exigido. A alternativa C acerta o intervalo trimestral, porém torna opcional a varredura interna, que também é obrigatória."
  },
  {
    "t": "Durante a revisão do inventário corporativo, um administrador percebe que vários dispositivos aparentemente foram realocados entre unidades e outros foram conectados à rede sem passar pelo processo formal de autorização. Qual abordagem melhor atende à necessidade de identificar o que está efetivamente presente na rede?",
    "opts": [
      "A. Conduzir um processo de descoberta de ativos, combinando enumeração de hosts com pesquisa manual para mapear sistemas e infraestrutura existentes.",
      "B. Realizar coleta passiva de inteligência a partir de fontes externas para determinar a superfície de exposição pública da organização.",
      "C. Executar uma avaliação de vulnerabilidades no ciclo trimestral de conformidade para identificar falhas nos dispositivos conectados.",
      "D. Derivar a topologia da rede a partir de dados de varredura de portas para documentar os segmentos já conhecidos."
    ],
    "ans": 0,
    "exp": "Processos de descoberta aplicados à gestão de ativos existem justamente para revelar dispositivos movidos ou adicionados sem processo e autorização adequados, e a enumeração de hosts combinada com pesquisa manual é o método usado para construir esse mapa de redes, sistemas e infraestrutura. A alternativa B trata de coleta passiva voltada ao footprint externo, e não ao inventário interno real. A alternativa C aborda a identificação de falhas em dispositivos já conhecidos, não a descoberta de equipamentos não catalogados. A alternativa D usa dados de varredura para determinar topologia, o que é uma atividade legítima, mas parte dos segmentos já documentados em vez de expor ativos não autorizados."
  },
  {
    "t": "Um analista de segurança precisa executar varreduras de hosts contra servidores da própria empresa que estão hospedados na infraestrutura de um provedor de nuvem pública. A direção da empresa já emitiu a autorização interna por escrito para a atividade. Qual é a ação mais apropriada antes de iniciar as varreduras?",
    "opts": [
      "A. Comunicar apenas os administradores de sistemas e de rede responsáveis pelas instâncias, já que as cargas de trabalho pertencem à organização.",
      "B. Preencher o formulário de solicitação de avaliação de vulnerabilidade ou teste de penetração exigido pela plataforma de nuvem e respeitar os limites impostos quanto aos tipos de sistemas e serviços que podem ser escaneados.",
      "C. Verificar se os termos de uso do provedor de serviços de internet permitem tráfego de varredura, uma vez que são esses termos que regem a infraestrutura de destino.",
      "D. Considerar a autorização executiva interna suficiente, pois ela funciona como um \"get out of jail free card\" e cobre as implicações legais da atividade."
    ],
    "ans": 1,
    "exp": "Algumas plataformas de computação em nuvem exigem que o usuário preencha um formulário de solicitação de avaliação de vulnerabilidade ou de teste de penetração antes de qualquer varredura em sua infraestrutura, além de aplicarem limites aos tipos de sistemas e serviços que podem ser escaneados. A alternativa A descreve uma boa prática válida (alinhar com administradores para evitar impacto não intencional), mas não substitui a autorização do provedor. A alternativa C confunde escopos: os termos de uso do ISP podem restringir varreduras, porém quem rege a infraestrutura hospedada é a plataforma de nuvem. A alternativa D trata a aprovação interna como suficiente, quando ela protege o profissional dentro da organização e não autoriza varreduras em ambientes de terceiros."
  },
  {
    "t": "Após receber um relatório de reconhecimento ativo, um gerente questiona por que o documento lista vulnerabilidades passíveis de exploração se a equipe afirmou que nenhuma exploração foi realizada. Qual afirmação descreve corretamente essa situação?",
    "opts": [
      "A. O reconhecimento ativo incorpora uma etapa limitada de exploração para validar cada vulnerabilidade antes de registrá-la no relatório.",
      "B. O reconhecimento ativo se restringe a enumerar hosts e redes, de modo que as vulnerabilidades só podem ser identificadas na fase seguinte de exploração.",
      "C. O reconhecimento ativo não envolve exploração, mas as ferramentas de varredura de hosts coletam informações sobre sistemas, serviços e vulnerabilidades que podem ser exploradas posteriormente.",
      "D. O reconhecimento ativo se apoia exclusivamente em fontes externas e públicas, logo as vulnerabilidades relatadas são inferidas e não observadas diretamente no alvo."
    ],
    "ans": 2,
    "exp": "O reconhecimento ativo usa ferramentas de varredura de hosts para coletar informações sobre sistemas, serviços e vulnerabilidades, e ainda assim não envolve exploração — ele apenas revela falhas que poderiam ser exploradas. A alternativa A insere indevidamente uma etapa de exploração no reconhecimento. A alternativa B confunde as fases: a enumeração fornece os alvos para o reconhecimento ativo, que por sua vez já levanta dados sobre serviços e vulnerabilidades. A alternativa D descreve o reconhecimento passivo, baseado em fontes externas, e não o ativo, que interage diretamente com os hosts por meio de varreduras."
  },
  {
    "t": "Megan quer usar o Metasploit Framework para realizar uma varredura de vulnerabilidades em aplicações web. Qual módulo da lista a seguir é o mais adequado às suas necessidades?",
    "opts": [
      "A) smb_login",
      "B) Angry IP",
      "C) nmap",
      "D) wmap"
    ],
    "ans": 3,
    "exp": "O scanner wmap é um módulo de varredura de aplicações web para o Metasploit Framework que pode procurar aplicações web vulneráveis. A ferramenta smb_login procura compartilhamentos SMB, e não aplicações web. O Angry IP Scanner não é integrado ao Metasploit, e o nmap é um scanner de portas, não um scanner completo de vulnerabilidades de aplicações web."
  },
  {
    "t": "Qual parâmetro o nmap usa para habilitar a identificação do sistema operacional?",
    "opts": [
      "A) -os",
      "B) -id",
      "C) -O",
      "D) -osscan"
    ],
    "ans": 2,
    "exp": "O parâmetro de identificação do sistema operacional do Nmap é -O, que habilita a detecção do sistema operacional. -A também habilita a identificação do sistema operacional e outros recursos. -osscan, com modificadores como -limit e -guess, define recursos específicos de identificação do sistema operacional. -os e -id não são parâmetros do nmap."
  },
  {
    "t": "Um analista executa uma varredura com Zenmap em uma faixa de endereços corporativa e gera a visualização de topologia. Ao comparar o resultado com o conhecimento da equipe de infraestrutura, percebe que um segmento inteiro de servidores não aparece no diagrama. Qual é a explicação mais provável para essa ausência?",
    "opts": [
      "A. Firewalls e outros dispositivos de segurança podem interromper o tráfego de varredura, tornando sistemas e segmentos efetivamente invisíveis ao mapeamento.",
      "B. A visualização de topologia exibe apenas hosts situados no mesmo segmento do sistema que executa a varredura, omitindo redes alcançadas por meio de roteadores.",
      "C. O endereço de loopback local ocupa o centro do diagrama e desloca os demais segmentos para fora da área renderizada pela interface.",
      "D. A ferramenta reconstrói a topologia exclusivamente a partir de respostas de traceroute, de modo que hosts que não respondem a ICMP são sempre agrupados em um único nó."
    ],
    "ans": 0,
    "exp": "Firewalls e outros dispositivos de segurança podem bloquear o tráfego de varredura, resultando em sistemas e redes ausentes do mapeamento — segmentos inteiros deixam de aparecer na topologia construída a partir dos resultados. A alternativa B contraria o comportamento real da ferramenta, que exibe hosts em segmentos alcançados por roteadores ou gateways. A alternativa C descreve incorretamente o papel do endereço de loopback, que apenas marca o sistema de origem no centro da varredura, sem ocultar segmentos. A alternativa D restringe indevidamente a técnica ao traceroute, quando a estimativa de topologia também se apoia em TTL e nas respostas de dispositivos de rede e de segurança."
  },
  {
    "t": "Durante uma atividade de descoberta e mapeamento de rede, um analista precisa organizar os hosts identificados de modo a avaliar sua posição relativa dentro da infraestrutura. Qual abordagem é mais adequada?",
    "opts": [
      "A. Agrupar os sistemas pelos serviços e portas abertas identificados, pois isso indica a função de cada host dentro da topologia.",
      "B. Organizar os hosts pela ordem em que responderam à varredura, já que a latência de resposta reflete a distância lógica até o scanner.",
      "C. Priorizar o diagrama gerado pela ferramenta de varredura sobre qualquer documentação de rede existente, pois ele reflete o estado atual do ambiente.",
      "D. Organizar os sistemas descobertos por seus endereços de rede e pelo TTL, pois esses pontos de dados ajudam a avaliar a posição relativa na rede."
    ],
    "ans": 3,
    "exp": "Ao realizar descoberta e mapeamento, os sistemas devem ser dispostos com base em seus endereços de rede e no TTL, pois esses dados permitem estimar a posição relativa de cada host na rede. A alternativa A trata de informação útil para caracterizar hosts, mas serviços e portas não indicam posicionamento topológico. A alternativa B parte de uma premissa não sustentada: tempo de resposta não é o indicador usado para inferir distância lógica. A alternativa C inverte a hierarquia de confiabilidade — diagramas de rede reais oferecem uma visão bem mais precisa do design do que varreduras, cujos resultados tendem a conter falhas."
  },
  {
    "t": "Uma equipe foi contratada para conduzir um teste de penetração em um ambiente misto, composto por redes cabeadas e sem fio, hosts virtualizados em VMware e Hyper-V e serviços hospedados em nuvem. Qual conjunto de considerações a equipe deve levar em conta ao planejar as varreduras?",
    "opts": [
      "A. Executar as varreduras exclusivamente a partir de um scanner externo ao ambiente virtual, garantindo cobertura uniforme de máquinas virtuais e físicas.",
      "B. Considerar que sistemas virtuais podem não ser visíveis fora do firewall do host virtual e que determinados serviços em nuvem podem precisar ficar fora do escopo com base em contratos ou acordos.",
      "C. Utilizar a mesma ferramenta empregada nas redes cabeadas também para as redes sem fio, desde que as faixas de endereços correspondentes estejam incluídas no escopo.",
      "D. Assumir que ambientes virtuais como VMware e Hyper-V são representados fielmente na topologia, uma vez que reportam valores de TTL consistentes com os hosts físicos."
    ],
    "ans": 1,
    "exp": "Sistemas virtuais podem não ser visíveis fora do firewall de um host virtual, e serviços ou sistemas em nuvem podem precisar ser tratados de forma diferente — inclusive evitando a varredura — em função de contratos ou acordos. A alternativa A falha justamente por isso: posicionar o scanner fora do ambiente virtual não garante cobertura, podendo ocultar sistemas. A alternativa C ignora que redes sem fio podem exigir uma ferramenta específica para esse tipo de ambiente. A alternativa D parte de uma suposição arriscada, já que a topologia obtida por varredura é uma estimativa sujeita a falhas, e variáveis de virtualização estão entre os fatores que podem distorcer o resultado."
  },
  {
    "t": "Um analista executa uma varredura de ping em um segmento com 60 endereços e obtém resposta de eco de apenas 20 deles. O gestor solicita que os 40 endereços restantes sejam marcados como desativados no inventário. Qual é a resposta mais apropriada do analista?",
    "opts": [
      "A. Confirmar que os endereços sem retorno estão inativos, uma vez que a ausência de resposta de eco demonstra que o caminho de comunicação não é válido.",
      "B. Reenviar as requisições com um volume maior de pacotes, já que perda de pacotes é a causa mais provável e uma quantidade reduzida de requisições não produz resultado conclusivo.",
      "C. Explicar que a ausência de resposta não confirma que os hosts estejam inativos, pois firewalls frequentemente bloqueiam requisições de ping e sistemas individuais podem ser configurados para ignorar pacotes de requisição de eco.",
      "D. Concluir que o ICMP foi desabilitado em todo o segmento, pois a resposta de eco é o único indicador válido de disponibilidade em uma rede local."
    ],
    "ans": 2,
    "exp": "Embora uma resposta de eco comprove que o host está ativo e que o caminho de comunicação é válido, a falta de resposta não significa necessariamente que o host esteja fora do ar — firewalls costumam bloquear requisições de ping e sistemas podem ser configurados para ignorar esses pacotes. A alternativa A inverte essa lógica e transforma ausência de evidência em evidência de ausência. A alternativa B atribui o silêncio à perda de pacotes, hipótese não sustentada quando o comportamento se repete em larga escala no segmento. A alternativa D generaliza indevidamente: parte dos hosts pode simplesmente estar desligada ou protegida individualmente, e o eco ICMP não é o único meio de verificar disponibilidade."
  },
  {
    "t": "Durante um teste de penetração, um analista constata que requisições de eco ICMP são descartadas no perímetro da rede-alvo e decide utilizar o utilitário hping executando hping -p 80 -S <alvo>. Qual afirmação descreve corretamente o funcionamento e a vantagem dessa sondagem?",
    "opts": [
      "A. A sondagem é direcionada à porta TCP 80 com o flag SYN definido, representando uma requisição de abertura de conexão que um servidor web provavelmente responderá por ser indistinguível de uma conexão web legítima.",
      "B. A sondagem encapsula a requisição de eco ICMP dentro de um segmento TCP destinado à porta 80, permitindo que o tráfego atravesse filtros configurados para bloquear ICMP.",
      "C. O parâmetro -S faz com que o utilitário alterne automaticamente a porta de origem a cada sondagem, dificultando a correlação dos pacotes pelos dispositivos de segurança do alvo.",
      "D. A sondagem depende de o alvo devolver uma resposta de eco pela porta 80, de modo que somente hosts com ICMP habilitado serão identificados como ativos."
    ],
    "ans": 0,
    "exp": "O parâmetro -p 80 define que as sondagens ocorram na porta TCP 80, usada por servidores web, e o -S define o flag TCP SYN, que sinaliza uma requisição de abertura de conexão. Qualquer alvo executando um servidor web HTTP tende a responder, pois a sondagem é indistinguível de uma conexão web legítima. A alternativa B descreve um encapsulamento inexistente: o hping gera pacotes TCP próprios, não ICMP tunelado. A alternativa C atribui ao -S uma função de manipulação de porta de origem que ele não possui. A alternativa D mantém a dependência do ICMP, justamente o que essa técnica contorna ao personalizar as sondagens para aumentar a chance de resposta."
  },
  {
    "t": "Que ferramenta de linha de comando pode ser usada para determinar o caminho que o tráfego percorre até um sistema remoto?",
    "opts": [
      "A) Whois",
      "B) traceroute",
      "C) nslookup",
      "D) routeview"
    ],
    "ans": 1,
    "exp": "Traceroute, ou tracert em sistemas Windows, é uma ferramenta de linha de comando que usa ICMP para rastrear a rota que um pacote percorre até um host. Whois e nslookup são ferramentas para consulta de domínios, e routeview não é uma ferramenta de linha de comando."
  },
  {
    "t": "Valerie quer usar uma interface gráfica para controlar o nmap e deseja exibir suas varreduras como um mapa visual para ajudá-la a compreender suas redes-alvo. Qual ferramenta da lista a seguir ela deve usar?",
    "opts": [
      "A) Angry IP Scanner",
      "B) wmap",
      "C) Zenmap",
      "D) nmap-gs"
    ],
    "ans": 2,
    "exp": "Zenmap é uma interface gráfica de usuário para o nmap que também oferece suporte à saída gráfica, incluindo mapas visuais de redes. Valerie pode usar o Zenmap para controlar o nmap e gerar a saída desejada. O Angry IP Scanner é um scanner separado e não gera um mapa visual das redes; em vez disso, fornece listas. O Wmap é um plug-in para o Metasploit Framework e uma ferramenta independente para testes de vulnerabilidades de aplicações web e serviços, e nmap-gs foi inventado para esta questão."
  },
  {
    "t": "Durante um levantamento de serviços, uma varredura retorna a porta 2121/tcp com a identificação de serviço ccproxy-ftp e a porta 8180/tcp como unknown. O responsável pelo inventário pede que o analista registre os serviços exatamente conforme reportado pela ferramenta. Qual é a conduta mais adequada?",
    "opts": [
      "A. Aceitar a identificação apresentada, pois portas registradas na faixa de 1024 a 49151 são atribuídas pela IANA e, portanto, refletem de forma confiável o serviço em execução.",
      "B. Validar o serviço efetivamente em execução por meio de identificação de versão, já que portas podem ser atribuídas manualmente e a identificação de serviços do scanner pode estar incorreta.",
      "C. Registrar como indeterminada qualquer porta acima de 1023, uma vez que somente as portas conhecidas, de 0 a 1023, possuem correspondência confiável com o serviço.",
      "D. Repetir a varredura com identificação de sistema operacional habilitada, pois o fingerprinting do SO elimina a ambiguidade sobre os serviços expostos."
    ],
    "ans": 1,
    "exp": "Como portas podem ser atribuídas manualmente, presumir que o serviço em uma porta corresponde ao seu uso comum não é uma boa prática — servidores SSH e HTTP/HTTPS frequentemente rodam em portas alternativas. Além disso, a identificação de serviços do nmap pode errar, servindo apenas como ponto de partida; a identificação de versão é um recurso próprio dos scanners de portas. A alternativa A confunde atribuição formal pela IANA com o que de fato está em execução. A alternativa C cria uma regra inexistente, pois portas altas também são de interesse e podem ser identificadas. A alternativa D aponta um recurso válido, mas a identificação do SO não esclarece qual serviço responde em determinada porta."
  },
  {
    "t": "Um analista revisa o comando executado por um colega em um alvo interno: nmap -O -P0 -sS 10.0.2.4. Qual descrição corresponde ao comportamento desse comando?",
    "opts": [
      "A. Tenta identificar o sistema operacional, envia ping prévio ao alvo para confirmar disponibilidade e executa uma varredura TCP SYN nas portas comuns.",
      "B. Identifica versões de serviço, ignora o ping prévio e conduz varredura em todas as 65.535 portas TCP do alvo.",
      "C. Tenta identificar o sistema operacional, ignora o ping prévio e executa uma varredura UDP restrita às portas conhecidas.",
      "D. Tenta identificar o sistema operacional, pula o ping antes da varredura e realiza uma varredura TCP SYN, enviando tentativas de conexão a cada porta do conjunto padrão de 1.000 portas comuns."
    ],
    "ans": 3,
    "exp": "A opção -O resulta em tentativa de identificação do sistema operacional, -P0 instrui a ferramenta a pular o ping no sistema antes da varredura e -sS realiza uma varredura TCP SYN, que envia tentativas de conexão a cada porta; por padrão, são escaneadas 1.000 portas comuns. A alternativa A inverte o efeito de -P0, afirmando que o ping prévio é enviado. A alternativa B troca a identificação do SO por identificação de versão e amplia indevidamente o escopo para todas as portas TCP. A alternativa C acerta dois pontos, mas descreve varredura UDP, quando -sS é uma varredura TCP SYN."
  },
  {
    "t": "Uma equipe recebe a tarefa de reproduzir o que um atacante externo, sem qualquer acesso à rede interna, conseguiria enxergar do ambiente. Uma varredura realizada anteriormente a partir de um servidor interno confiável revelou um número significativamente maior de hosts e serviços. Qual é a decisão mais apropriada?",
    "opts": [
      "A. Reaproveitar os resultados da varredura interna e filtrar os hosts sem publicação externa, já que esse conjunto de dados é mais completo e abrangente.",
      "B. Repetir a varredura internamente com o ping prévio desabilitado, de modo a simular o desconhecimento que um atacante externo teria sobre os alvos.",
      "C. Conduzir a varredura a partir de um ponto de vista externo compatível com o cenário, pois varreduras internas a partir de sistemas confiáveis normalmente revelam muito mais informações do que varreduras externas de uma rede bem protegida.",
      "D. Tratar a diferença entre os dois conjuntos de resultados como indício de falha de configuração nos dispositivos de segurança e revalidar as regras antes de repetir a varredura."
    ],
    "ans": 2,
    "exp": "O ponto de vista do reconhecimento ativo altera substancialmente os dados coletados: varreduras internas a partir de sistemas ou redes confiáveis costumam revelar muito mais do que varreduras externas contra uma rede bem protegida. Para replicar um cenário específico, o ponto de vista da varredura precisa corresponder a ele. A alternativa A parte da premissa equivocada de que mais dados equivalem a maior fidelidade ao cenário. A alternativa B confunde supressão do ping prévio com mudança de perspectiva — a origem da varredura continua interna e confiável. A alternativa D interpreta como defeito um comportamento esperado, já que a diferença decorre justamente dos controles de perímetro em funcionamento."
  },
  {
    "t": "Um analista precisa identificar o tipo e a versão de vários dispositivos de rede que estão protegidos por firewall e não respondem a nenhuma sondagem ativa. Qual abordagem permite caracterizar esses dispositivos?",
    "opts": [
      "A. Coletar e correlacionar informações obtidas a partir do tráfego de rede desses dispositivos e dos registros disponíveis nos dispositivos de rede.",
      "B. Solicitar a liberação temporária das regras de firewall, pois a caracterização depende necessariamente de respostas diretas às sondagens enviadas.",
      "C. Aplicar fingerprinting da pilha TCP/IP comparando as respostas a pacotes TCP e UDP enviados diretamente a cada dispositivo.",
      "D. Consultar a documentação de inventário da organização, já que ela oferece a representação mais fiel dos dispositivos presentes no ambiente."
    ],
    "ans": 0,
    "exp": "Dispositivos protegidos por firewall e que não respondem a sondagens ainda podem ter seu fingerprint determinado, desde que haja acesso ao seu tráfego de rede e aos logs disponíveis de dispositivos de rede — o fingerprinting de dispositivos consiste justamente na coleta e correlação dessas informações. A alternativa B parte da premissa falsa de que sondagens ativas seriam indispensáveis. A alternativa C descreve uma técnica válida em outro contexto, mas inviável aqui, pois depende de respostas que o alvo não fornece. A alternativa D é frágil porque redes crescem de forma orgânica e a documentação pode não corresponder ao que a coleta de inteligência revela."
  },
  {
    "t": "Uma equipe interna de segurança realizará um exercício de mapeamento com acesso completo ao conhecimento que a própria organização possui sobre suas redes e defesas. Qual afirmação descreve corretamente esse tipo de exercício e as precauções aplicáveis?",
    "opts": [
      "A. Por se tratar de um exercício em ambiente conhecido, a documentação existente pode ser usada como referência definitiva, dispensando a validação dos dados por meio de varreduras.",
      "B. O acesso prévio ao conhecimento interno elimina a necessidade das precauções de varredura aplicáveis a testes externos, já que os sistemas pertencem à própria organização.",
      "C. O esforço deve se concentrar em determinar a topologia da rede, pois é essa etapa que consome a maior parte do tempo em exercícios de ambiente conhecido.",
      "D. Trata-se de um exercício de ambiente conhecido, no qual o tempo é dedicado à coleta de informações e varredura em vez de à descoberta da topologia, mantendo-se cautela ao escanear sistemas delicados ou que controlam processos sensíveis."
    ],
    "ans": 3,
    "exp": "Em um exercício de ambiente conhecido (known-environment, também chamado de crystal-box ou white-box), a equipe não precisa gastar tempo compreendendo a topologia e pode focar em coletar informações, varrer redes e obter dados dos sistemas; ainda assim, as precauções de varredura permanecem válidas, especialmente com sistemas delicados ou que controlam processos sensíveis. A alternativa A trata a documentação como definitiva, quando ela pode divergir do que a coleta revela. A alternativa B dispensa indevidamente as precauções, que continuam se aplicando a testes internos. A alternativa C inverte a vantagem do exercício, pois a topologia já é conhecida de antemão."
  },
  {
    "t": "Um analista precisa determinar se os serviços expostos por um servidor estão em versões desatualizadas e também confirmar se algum deles está sendo executado em porta não padronizada. Qual técnica atende diretamente a esses dois objetivos?",
    "opts": [
      "A. Identificação do sistema operacional por fingerprinting da pilha TCP/IP, comparando as respostas a pacotes TCP e UDP enviados ao host.",
      "B. Varredura TCP SYN com detecção de estado das portas, classificando cada uma como aberta, fechada ou filtrada.",
      "C. Identificação de serviço e versão, capturando banners e comparando as respostas com um banco de dados de serviços conhecidos.",
      "D. Correlação do endereço MAC com o fabricante da interface de rede, para deduzir a plataforma e o conjunto de serviços esperado."
    ],
    "ans": 2,
    "exp": "A identificação de serviço e versão é feita capturando banners e informações de conexão fornecidas pelo serviço ou comparando suas respostas com assinaturas de serviços conhecidos. Os dados de versão obtidos permitem verificar níveis de correção e vulnerabilidades e ajudam a revelar serviços em portas não padronizadas. A alternativa A identifica o sistema operacional, não versões de serviço. A alternativa B revela o estado das portas, mas não qual software nem qual versão responde nelas. A alternativa D parte do endereço MAC, que indica o fabricante da interface, sem qualquer informação sobre os serviços em execução."
  },
  {
    "t": "Ao revisar o resultado de uma varredura com detecção de versão, um analista observa as seguintes linhas: 80/tcp open http Apache httpd 2.2.8 ((Ubuntu) DAV/2) e 8180/tcp open http Apache Tomcat/Coyote JSP engine 1.1. Qual conclusão é mais apropriada a partir desses dados?",
    "opts": [
      "A. Existem dois serviços HTTP distintos no host, sendo que um deles responde em porta não padronizada, e ambas as versões devem ser avaliadas quanto a nível de correção e vulnerabilidades conhecidas.",
      "B. A porta 8180 provavelmente foi identificada de forma incorreta, pois o protocolo HTTP é atribuído à porta 80 e a duplicidade indica erro de correspondência com o banco de assinaturas.",
      "C. O host está executando um proxy reverso que encaminha as requisições da porta 8180 para o serviço Apache na porta 80, o que explica a repetição do serviço HTTP.",
      "D. As duas portas pertencem à mesma instância de servidor web, de modo que apenas a versão mais recente entre elas precisa ser considerada na avaliação de vulnerabilidades."
    ],
    "ans": 0,
    "exp": "A detecção de versão identifica o nome do serviço, sua versão e, por vezes, detalhes adicionais de protocolo — aqui, dois servidores web diferentes, com versões próprias, um deles em porta não padronizada. Essas informações servem justamente para verificar níveis de correção e vulnerabilidades, e identificar serviços fora das portas usuais. A alternativa B trata como erro algo esperado, já que portas podem ser atribuídas manualmente. A alternativa C infere uma arquitetura de proxy reverso que os dados não sustentam. A alternativa D descarta indevidamente um dos serviços: cada instância possui versão própria e precisa ser avaliada separadamente."
  },
  {
    "t": "Um analista revisa o resultado de uma varredura de portas executada sem nenhum parâmetro adicional contra um host desconhecido. O relatório aponta as portas 135/tcp (msrpc), 139/tcp (netbios-ssn) e 445/tcp (microsoft-ds) abertas. Qual conclusão pode ser extraída desse resultado?",
    "opts": [
      "A. A combinação dessas portas indica fortemente que o alvo é um host Windows, o que pode ser inferido mesmo sem executar uma varredura de identificação do sistema operacional.",
      "B. Nenhuma conclusão sobre a plataforma pode ser extraída antes de executar o parâmetro -O, pois a identificação do sistema operacional exige o fingerprinting da pilha TCP/IP.",
      "C. O resultado indica um host Windows com firewall ativo, pois somente portas de serviços Microsoft permaneceram acessíveis à varredura.",
      "D. A conclusão só será válida após a execução do parâmetro -sV, já que os nomes exibidos na coluna de serviço são atribuições fixas registradas pela IANA."
    ],
    "ans": 0,
    "exp": "Portas Microsoft comuns como 135, 139 e 445, executando MSRPC, NetBIOS e serviços de domínio da Microsoft, são indicadores úteis de que o sistema remoto é um host Windows — muitas vezes é possível inferir corretamente detalhes sobre o sistema mesmo sem uma varredura de identificação de SO. A alternativa B trata o parâmetro -O como indispensável, quando ele apenas acrescenta informações. A alternativa C inverte a leitura: essa exposição é típica de firewall desativado, não ativo. A alternativa D confunde o nome de serviço estimado pela ferramenta com uma atribuição fixa, e a identificação de versão não é pré-requisito para essa inferência."
  },
  {
    "t": "Durante o planejamento de uma varredura, um analista precisa escolher a técnica que verifique a resposta dos serviços de forma rápida e pouco intrusiva, sem completar as conexões com o alvo. Qual método atende a esse requisito?",
    "opts": [
      "A. Varredura Connect, que estabelece a conexão completa e confirma com precisão que o serviço está acessível.",
      "B. Varredura ACK, indicada para verificar rapidamente a resposta dos serviços sem manter sessões abertas com o alvo.",
      "C. Varredura TCP SYN, que utiliza um pacote SYN para verificar a resposta do serviço e é rápida e discreta.",
      "D. Varredura UDP, adequada por não exigir handshake e, portanto, gerar menor volume de tráfego no alvo."
    ],
    "ans": 2,
    "exp": "A varredura TCP SYN é o método mais popular justamente por usar um pacote TCP SYN para verificar a resposta de um serviço, sendo rápida e discreta. A alternativa A descreve o método Connect, que completa uma conexão completa e, por isso, é mais intrusivo. A alternativa B atribui à varredura ACK uma finalidade que não é a sua: esse método é usado para mapear regras de firewall. A alternativa D aponta a varredura UDP, cuja função é alcançar serviços que não são TCP, e não atender ao critério de rapidez e discrição descrito."
  },
  {
    "t": "Uma equipe suspeita que exista um serviço não autorizado em execução em um servidor, possivelmente configurado em uma porta incomum para dificultar sua identificação. As varreduras anteriores usaram a configuração padrão da ferramenta e nada foi encontrado. Qual ajuste é mais adequado, considerando o impacto envolvido?",
    "opts": [
      "A. Habilitar a detecção de sistema operacional com -O, pois a identificação da plataforma revela quais serviços adicionais podem estar em execução no host.",
      "B. Especificar a faixa completa de 1 a 65535 portas, aceitando que a varredura será bem mais lenta, já que isso é útil para identificar serviços ocultos ou inesperados.",
      "C. Substituir a técnica de varredura por uma varredura ACK, pois ela localiza serviços que não respondem a pacotes SYN em portas altas.",
      "D. Manter as portas padrão e adicionar a detecção de versão com -sV, uma vez que esse parâmetro amplia a cobertura da varredura para portas não convencionais."
    ],
    "ans": 1,
    "exp": "Especificar a faixa completa de portas, de 1 a 65535, é muito lento, mas é útil justamente para identificar serviços ocultos ou inesperados — exatamente o cenário descrito. A alternativa A trata a detecção de SO como meio de revelar serviços, quando ela apenas fornece informações adicionais sobre o sistema. A alternativa C atribui à varredura ACK a função de descobrir serviços, embora seu propósito seja mapear regras de firewall. A alternativa D mantém o conjunto padrão de portas: o -sV acrescenta detalhes de versão dos serviços encontrados, mas não amplia o intervalo escaneado."
  },
  {
    "t": "Susan executa uma varredura com o nmap usando o seguinte comando:\n\nnmap -O -Pn 192.168.1.0/255\n\nQue informações ela verá sobre os hosts que examinar?",
    "opts": [
      "A) O nome do host e as portas dos serviços",
      "B) O nome do host, as portas dos serviços e o sistema operacional",
      "C) O nome do host e o sistema operacional",
      "D) O nome do host, o tempo de atividade e o usuário conectado"
    ],
    "ans": 1,
    "exp": "Além do tempo de execução da varredura e do tempo de vida dos pacotes enviados, Susan verá o nome do host, as portas dos serviços e o sistema operacional usando os parâmetros de varredura acima. O parâmetro -O tenta identificar o sistema operacional, enquanto o parâmetro -Pn ignora o ping e realiza a varredura de todos os hosts da rede nas portas normalmente examinadas."
  },
  {
    "t": "Tuan quer coletar informações adicionais sobre um domínio que inseriu no Maltego. Que funcionalidade é usada para executar ações baseadas em servidor no Maltego?",
    "opts": [
      "A) Um processo de trabalho",
      "B) Uma consulta",
      "C) Uma transformação",
      "D) Uma varredura"
    ],
    "ans": 2,
    "exp": "O Maltego chama suas funções de coleta de informações baseadas em servidor de \"transformações\"."
  },
  {
    "t": "Um analista deseja complementar suas varreduras com uma representação visual que mostre como os hosts descobertos se encaixam na rede. Qual recurso oferece essa capacidade?",
    "opts": [
      "A. O framework Metasploit, que agrega ferramentas de coleta de inteligência e gera representações do ambiente-alvo a partir dos dados obtidos.",
      "B. A detecção de sistema operacional combinada com a detecção de versão, cuja correlação permite posicionar cada host dentro do mapa da rede.",
      "C. Ferramentas de coleta e gerenciamento de inteligência de fontes abertas, que consolidam os dados coletados em um mapa do ambiente.",
      "D. O Zenmap, interface gráfica oficial do nmap, que oferece capacidades adicionais de visualização, incluindo um modo de visualização de topologia."
    ],
    "ans": 3,
    "exp": "O Zenmap é a interface gráfica oficial do nmap e fornece capacidades adicionais de visualização, incluindo um modo de visualização de topologia que mostra como os hosts se encaixam em uma rede. A alternativa A descreve o Metasploit, que é o kit de ferramentas de exploração de propósito geral mais popular, e não uma solução de visualização de topologia. A alternativa B reúne dois parâmetros que fornecem informações sobre sistema e serviços, mas não geram representação visual. A alternativa C trata de ferramentas de inteligência de fontes abertas, voltadas à coleta e ao gerenciamento de informações públicas, não ao mapeamento visual de varreduras."
  },
  {
    "t": "Um analista executa o Angry IP Scanner contra a faixa 192.168.1.0–192.168.1.255 e obtém hosts respondendo ao ping, porém a coluna de portas exibe [n/a] para praticamente todos eles. Além disso, o gestor pergunta quais serviços e versões estão em execução nos hosts que retornaram resultado. Qual avaliação descreve corretamente a situação?",
    "opts": [
      "A. As portas a serem escaneadas precisam ser configuradas no menu de preferências da ferramenta, caso contrário nenhuma informação de porta é retornada, e a identificação de serviços e versões exige uma ferramenta com esse recurso, já que o Angry IP Scanner não fornece nomes nem identificação de serviços.",
      "B. Os valores [n/a] indicam portas filtradas por firewall nos hosts correspondentes, e os nomes de serviço podem ser obtidos ativando o fetcher apropriado nas preferências da ferramenta.",
      "C. A ausência de dados decorre da falta do Java no sistema de origem, o que limita a execução dos módulos de varredura de portas, embora a identificação de serviços permaneça disponível normalmente.",
      "D. Os resultados indicam que apenas hosts com portas 80 e 443 acessíveis puderam ser caracterizados, e a identificação de versões dos serviços já está incluída por padrão na coluna de portas da ferramenta."
    ],
    "ans": 0,
    "exp": "Ao usar o Angry IP Scanner é preciso configurar as portas a serem escaneadas no menu Preferences; do contrário, nenhuma informação de porta é retornada. Além disso, diferentemente do nmap, essa ferramenta não fornece nomes de serviços nem identificação detalhada de serviços e sistemas operacionais. A alternativa B interpreta [n/a] como filtragem e sugere obter nomes de serviço via fetcher, recurso que a ferramenta não oferece — os fetchers cobrem portas, TTL, portas filtradas e outros dados. A alternativa C aponta o Java, cuja ausência impediria a execução da ferramenta, e ainda afirma que a identificação de serviços estaria disponível. A alternativa D atribui à ferramenta uma detecção de versão que ela não possui."
  },
  {
    "t": "Um analista precisa reunir informações disponíveis publicamente sobre a organização e representar visualmente as correlações e hierarquias entre os dados obtidos, recorrendo a ações executadas por um servidor que enriqueçam objetos e entidades já mapeados. Qual ferramenta atende a essa necessidade?",
    "opts": [
      "A. Zenmap, cuja interface gráfica documenta relações entre os elementos descobertos e exibe como os hosts se encaixam na rede.",
      "B. Maltego, que se concentra na coleta de inteligência de fontes abertas e conecta pontos de dados por meio de uma GUI, apoiando-se em transforms para obter dados ou processamento adicionais sobre objetos e entidades.",
      "C. Angry IP Scanner, que oferece módulos ativáveis para enriquecer os resultados coletados sobre cada entidade descoberta.",
      "D. Metasploit, que agrega diversos módulos de coleta e correlação de informações além de suas capacidades de exploração."
    ],
    "ans": 1,
    "exp": "O Maltego é voltado à coleta de inteligência de fontes abertas e à conexão de pontos de dados por meio de uma GUI que permite compreender e documentar correlações e hierarquias, baseando-se em transforms — ações executadas por um servidor que fornecem dados ou processamento adicionais sobre objetos e entidades. A alternativa A descreve o Zenmap, cuja visualização de topologia se limita a hosts descobertos por varredura ativa, não a inteligência de fontes abertas. A alternativa C aponta os fetchers do Angry IP Scanner, que apenas acrescentam dados de varredura como portas e TTL. A alternativa D descreve o Metasploit, que é o kit de ferramentas de exploração de propósito geral mais popular."
  },
  {
    "t": "Um analista precisa levantar a versão do serviço SSH em um host específico e, na sequência, avaliar vulnerabilidades em uma aplicação web hospedada no mesmo ambiente, utilizando uma única plataforma. Qual descrição corresponde corretamente à ferramenta e ao fluxo adequados?",
    "opts": [
      "A. Empregar o Metasploit Framework, selecionando um módulo auxiliar de varredura para obter a versão do servidor SSH e, em seguida, o módulo wmap para a varredura de vulnerabilidades da aplicação web.",
      "B. Empregar o Metasploit Framework, definindo o alvo em RHOSTS e executando o módulo de exploração correspondente, pois a coleta de versão de serviço ocorre como subproduto da exploração bem-sucedida.",
      "C. Utilizar um scanner de portas com detecção de versão para o SSH e, depois, recorrer ao Metasploit apenas para a etapa de aplicação web, já que o framework não dispõe de módulos próprios de varredura.",
      "D. Utilizar o Maltego para correlacionar as informações de versão do serviço SSH e, em seguida, acionar transforms específicos para avaliar as vulnerabilidades da aplicação web."
    ],
    "ans": 0,
    "exp": "O Metasploit permite descoberta e exploração de vulnerabilidades; seus módulos incluem varredura de portas com tcp, syn e outros módulos, coleta de informações como a versão de servidores SSH por meio de módulo auxiliar de varredura, e varredura de vulnerabilidades de aplicações web pelo módulo wmap. A alternativa B condiciona a coleta de versão à exploração, quando o levantamento é feito por módulo auxiliar sem explorar o alvo. A alternativa C nega ao framework capacidades de varredura que ele efetivamente possui. A alternativa D atribui ao Maltego uma função de varredura de vulnerabilidades: seu foco é inteligência de fontes abertas e correlação de dados."
  },
  {
    "t": "Um analista precisa identificar nomes de host e endereços IP associados aos domínios da organização sem gerar tráfego direto contra a infraestrutura-alvo e, posteriormente, complementar o levantamento com coleta ativa, utilizando a mesma plataforma. Qual abordagem é adequada?",
    "opts": [
      "A. Empregar o Recon-ng, instalando um módulo de coleta OSINT a partir do marketplace para o levantamento de domínios e hosts e, na sequência, recorrer ao módulo nmap para a coleta ativa de informações.",
      "B. Empregar o Recon-ng com integração ao Shodan e definir a opção SOURCE para o domínio-alvo, pois todos os módulos disponíveis realizam sondagens diretas contra os hosts identificados.",
      "C. Utilizar um scanner de vulnerabilidades com capacidade de varredura de portas integrada, já que ferramentas modulares de reconhecimento não oferecem recursos de coleta ativa.",
      "D. Utilizar o Metasploit para o levantamento de domínios via marketplace de módulos e, em seguida, acionar seus módulos de varredura para a etapa ativa."
    ],
    "ans": 0,
    "exp": "O Recon-ng é uma ferramenta de reconhecimento modular que utiliza um marketplace de módulos pesquisável; módulos como o hackertarget auxiliam na coleta OSINT para identificação de domínios e hosts, enquanto módulos de busca ativa, como o módulo nmap, permitem a coleta ativa de informações. A alternativa B erra ao afirmar que todos os módulos fazem sondagem direta — integrações como o Shodan fornecem inteligência de fontes abertas. A alternativa C nega ao Recon-ng a capacidade ativa que ele possui. A alternativa D atribui ao Metasploit o marketplace de módulos, recurso característico do Recon-ng."
  },
  {
    "t": "Laura quer realizar uma busca por hosts usando o Recon-ng, mas deseja utilizar um mecanismo de busca com acesso por API para obter dados existentes. Que módulo ela deve usar?",
    "opts": [
      "A) recon/companies-multi/whois_miner",
      "B) import/nmap",
      "C) recon/domains-hosts/shodan_hostname",
      "D) import/list"
    ],
    "ans": 2,
    "exp": "Embora você possa não conhecer a lista completa de plug-ins do Recon-ng, o Shodan é um mecanismo de busca bastante conhecido. Laura poderia usar o acesso por API ao Shodan para coletar informações de buscas realizadas anteriormente. Ambos os utilitários de importação exigirão que ela tenha dados já coletados, e pode-se presumir que o minerador Whois usa informações de Whois, em vez de um conjunto de dados existente de um mecanismo de busca."
  },
  {
    "t": "Depois de executar uma varredura com o nmap, Geoff vê as portas 80 e 443 abertas em um sistema que examinou. Que suposição razoável ele pode fazer sobre o sistema com base nesse resultado?",
    "opts": [
      "A) O sistema é um sistema Windows.",
      "B) O sistema está executando um servidor de banco de dados.",
      "C) O sistema é um sistema Linux.",
      "D) O sistema está executando um servidor web."
    ],
    "ans": 3,
    "exp": "As portas 80 e 443 costumam estar associadas a servidores web sem criptografia (porta 80) e com criptografia TLS (porta 443). Não há informações suficientes para determinar se se trata de um sistema Windows ou Linux, e essas não são portas típicas de um servidor de banco de dados."
  },
  {
    "t": "Durante o planejamento de um teste, a equipe considera executar um sniffer em paralelo às varreduras de portas e de vulnerabilidades. Qual consideração é mais apropriada para essa decisão?",
    "opts": [
      "A. A captura deve ser executada sempre, pois sem ela não é possível identificar problemas ocorridos durante a varredura nem preservar evidências do teste.",
      "B. A captura deve ser descartada nesse cenário, uma vez que o tráfego gerado pelas varreduras torna os dados capturados inadequados para análise posterior.",
      "C. A captura de pacotes fornece um conjunto de dados útil para análise posterior e ajuda a identificar problemas durante a varredura, mas convém confirmar a real necessidade desses dados antes de executar o sniffer, dado o volume gerado.",
      "D. A captura só se justifica em ferramentas que não possuem varredura de portas integrada, pois plataformas como Nessus, OpenVAS e Qualys já registram internamente todo o tráfego produzido."
    ],
    "ans": 2,
    "exp": "A captura de pacotes durante os testes fornece um conjunto de dados potencialmente útil para análise posterior e ajuda a identificar problemas ocorridos durante a varredura; como varreduras de portas e de vulnerabilidades geram grande volume de dados, vale confirmar se a captura é realmente necessária antes de executar o sniffer. A alternativa A transforma uma prática condicional em obrigatória. A alternativa B descarta a captura justamente no cenário em que ela costuma ser empregada. A alternativa D atribui a essas plataformas um registro completo do tráfego; a varredura de portas integrada apoia a funcionalidade principal delas, o que não substitui a captura de pacotes."
  },
  {
    "t": "Um analista revisa entradas de log de um roteador que registram repetidas negações de pacotes TCP originados do host 10.0.2.50 em direção a 192.168.2.1, nas portas 22, 23, 25, 26, 27, 28, 29, 30 e 31, cada uma com um único pacote e em intervalos curtos. Qual interpretação é mais consistente com esses registros?",
    "opts": [
      "A. O host de origem está tentando estabelecer conexões legítimas que falham por erro de configuração na lista de acesso aplicada à interface.",
      "B. Uma varredura de portas está em andamento a partir do host remoto e está sendo bloqueada por uma regra da lista de acesso do dispositivo.",
      "C. Uma tentativa de exaustão de recursos está em curso, evidenciada pelo grande número de entradas geradas contra o mesmo endereço de destino.",
      "D. O host remoto está realizando fingerprinting passivo do alvo, uma vez que o dispositivo apenas observa o tráfego sem completar as conexões."
    ],
    "ans": 1,
    "exp": "Entradas sucessivas com um único pacote negado, vindas do mesmo host remoto e destinadas a portas TCP que aumentam de forma constante, indicam uma varredura de portas em andamento sendo bloqueada por uma regra da lista de acesso. A alternativa A não se sustenta: conexões legítimas não percorrem sequencialmente portas distintas com um pacote cada. A alternativa C confunde volume de registros com ataque de exaustão, quando o padrão sequencial aponta reconhecimento. A alternativa D inverte os conceitos — há interação direta com o alvo, o que caracteriza atividade ativa, não passiva."
  },
  {
    "t": "Uma equipe precisa levantar informações sobre a organização sem interagir diretamente com os hosts do ambiente. Qual afirmação descreve corretamente essa abordagem e suas limitações?",
    "opts": [
      "A. A abordagem elimina o risco de indisponibilidade dos alvos e, por não depender de interação, produz um inventário tão completo quanto o obtido por sondagens diretas.",
      "B. A abordagem observa a atividade de rede e tira conclusões, mas exige o envio de sondagens de baixo volume para confirmar os dados coletados de fontes existentes.",
      "C. A abordagem depende de logs e outros dados existentes, que podem não conter todas as informações necessárias para identificar completamente os alvos e ainda podem estar desatualizados.",
      "D. A abordagem é mais simples de executar do que a coleta ativa, pois dispensa autorização prévia e se limita a consultar registros já disponíveis na organização."
    ],
    "ans": 2,
    "exp": "O fingerprinting passivo se apoia em logs e outros dados existentes, que podem não fornecer todas as informações necessárias para identificar completamente os alvos; a dependência de dados armazenados também implica risco de estarem desatualizados. A alternativa A afirma completude equivalente à das sondagens, o que contraria essas limitações. A alternativa B descaracteriza o método, já que a coleta passiva ocorre sem que sejam realizadas sondagens próprias. A alternativa D inverte a dificuldade: a descoberta passiva é muito mais desafiadora do que a coleta ativa de informações."
  },
  {
    "t": "Um analista foi designado para reconstruir como os sistemas de uma rede se relacionam e como estão configurados, tendo acesso tanto aos registros quanto aos arquivos de configuração dos dispositivos de rede. Qual conduta é mais adequada para o objetivo de coleta de inteligência?",
    "opts": [
      "A. Priorizar os arquivos de configuração dos dispositivos, já que os logs tendem a ser menos úteis para esse objetivo, embora possam auxiliar na descoberta de topologia com base nos dispositivos com os quais se comunicam.",
      "B. Priorizar os logs de nível 6, pois eventos de violação de ACL revelam os caminhos de comunicação efetivamente utilizados entre os sistemas.",
      "C. Priorizar os dados de SNMP enviados ao sistema de controle central, pois substituem os arquivos de configuração na reconstrução das relações entre sistemas.",
      "D. Priorizar os logs encaminhados via syslog ao servidor central, uma vez que a centralização garante um retrato mais completo da configuração do que os arquivos dos próprios dispositivos."
    ],
    "ans": 0,
    "exp": "Quando o foco é coleta de inteligência, os logs de dispositivos de rede frequentemente não são tão úteis quanto os dados de configuração do dispositivo, ainda que possam ajudar na descoberta de topologia a partir dos dispositivos com os quais se comunicam. A alternativa B eleva um tipo específico de evento acima dos dados de configuração, que são a fonte mais rica para esse objetivo. A alternativa C atribui ao SNMP um papel substitutivo: ele envia informações dos dispositivos a um sistema de controle central, sem suprir o conteúdo das configurações. A alternativa D confunde centralização de logs com completude de configuração — o syslog apenas consolida mensagens em um servidor central."
  },
  {
    "t": "Durante uma avaliação, um analista obtém acesso ao arquivo de configuração de um roteador de borda. Entre as entradas constam snmp-server contact example@demo.org, endereços de servidores SNMP de destino de traps e tacacs-server host 172.16.3.126. Qual avaliação descreve melhor o risco associado à exposição desse arquivo?",
    "opts": [
      "A. O risco se limita à possibilidade de leitura das variáveis SNMP do dispositivo, pois as community strings são o único elemento sensível presente nesse tipo de configuração.",
      "B. O conteúdo revela detalhes de infraestrutura, como servidores de autenticação e destinos de traps, além de informação de contato que poderia servir de ponto de partida para um ataque de engenharia social.",
      "C. A exposição é irrelevante do ponto de vista ofensivo, uma vez que os endereços apresentados pertencem a faixas privadas e não são alcançáveis a partir da internet.",
      "D. O risco principal é a perda de disponibilidade, já que o conhecimento dos destinos de traps permitiria suprimir os alertas enviados pelo dispositivo."
    ],
    "ans": 1,
    "exp": "Arquivos de configuração revelam detalhes da rede, sistemas com os quais o dispositivo interage, servidores syslog e SNMP e informações de contas. Na configuração descrita aparecem as community strings, o contato do dispositivo, quais traps estão habilitados e para onde são enviados, além dos servidores TACACS usados no controle de acesso — para um atacante, isso pode ser o início de um ataque de engenharia social eficaz. A alternativa A reduz indevidamente o escopo do que está exposto. A alternativa C descarta o valor da informação por serem endereços internos, quando o próprio mapeamento interno é o ganho do atacante. A alternativa D elege um efeito secundário como risco principal."
  },
  {
    "t": "Uma equipe precisa posicionar um roteador dentro da topologia da rede e identificar com quais outros dispositivos e sistemas ele interage, sem executar sondagens ativas contra o ambiente. Qual fonte de dados atende melhor a essa necessidade?",
    "opts": [
      "A. As mensagens de trap recebidas pelo servidor SNMP central, que registram os eventos gerados pelo dispositivo ao longo do tempo.",
      "B. Os registros encaminhados ao servidor syslog, que consolidam os eventos e o histórico operacional do equipamento.",
      "C. Os arquivos de configuração do dispositivo, que trazem detalhes da rede, rotas, informações de interface e os sistemas e dispositivos com os quais ele interage.",
      "D. A leitura das community strings configuradas, que permite consultar diretamente as tabelas de roteamento mantidas pelo equipamento."
    ],
    "ans": 2,
    "exp": "Arquivos de configuração de dispositivos de rede são inestimáveis ao mapear a topologia: incluem detalhes da rede, rotas, sistemas com os quais o dispositivo interage e outros dispositivos de rede, e sua leitura revela informações de roteamento e de interface que ajudam a posicionar o equipamento na topologia. A alternativa A trata de eventos pontuais notificados por traps, que não descrevem rotas nem interfaces. A alternativa B aponta registros operacionais, úteis em outros contextos, mas menos informativos que os dados de configuração para mapeamento. A alternativa D descreve consulta ativa via SNMP, contrariando a restrição de não interagir com o ambiente."
  },
  {
    "t": "Um analista precisa estabelecer uma linha de base do comportamento típico da rede e detectar desvios em relação a esse padrão, dispondo de origem e destino de IP e porta, além da classe de serviço do tráfego. Qual fonte de dados corresponde a essas informações e a esse objetivo?",
    "opts": [
      "A. Dados de fluxo coletados na rede, que oferecem visão do fluxo e do volume de tráfego e, com um analisador apropriado, apoiam a definição de baseline e a identificação de comportamentos inesperados.",
      "B. Capturas de pacotes realizadas por um sniffer, que registram o conteúdo completo das sessões e permitem comparar o tráfego observado com o padrão esperado.",
      "C. Registros encaminhados ao servidor syslog central, que consolidam eventos de todos os dispositivos e revelam desvios no volume de tráfego entre origens e destinos.",
      "D. Traps SNMP enviados ao sistema de controle central, que notificam variações de tráfego entre pares de endereços e portas monitorados."
    ],
    "ans": 0,
    "exp": "Os dados de fluxo fornecem uma visão do fluxo e do volume de tráfego, e uma captura típica inclui origem e destino de IP e porta, além da classe de serviço. Com um analisador, os netflows ajudam a identificar problemas de serviço, estabelecer a linha de base do comportamento típico da rede e apontar comportamentos inesperados. A alternativa B descreve captura de pacotes, que registra conteúdo, não o resumo de fluxo e volume descrito. A alternativa C aponta registros de eventos consolidados, que não trazem esse conjunto de campos de tráfego. A alternativa D trata de notificações pontuais de dispositivos, e não de coleta contínua de informações de tráfego IP."
  },
  {
    "t": "Que informação é usada para identificar segmentos de rede e a topologia ao realizar uma varredura com o nmap?",
    "opts": [
      "A) Endereços IP",
      "B) Nomes de host",
      "C) Tempo de vida",
      "D) Números de porta"
    ],
    "ans": 2,
    "exp": "O tempo de vida (TTL) fornecido como parte das respostas é usado para avaliar o número de saltos em uma rede e, assim, fazer a melhor estimativa possível da topologia da rede. Embora os endereços IP às vezes possam estar relacionados à topologia da rede, é menos provável que estejam diretamente associados a ela. Nomes de host e números de porta não têm correlação com a topologia."
  },
  {
    "t": "Murali quer fazer uma varredura em uma rede usando o nmap e executou uma varredura sem nenhum parâmetro, mas não descobriu todos os hosts que acredita que deveriam aparecer. Que parâmetro de varredura ele pode usar para realizar a varredura sem executar a descoberta de hosts e também determinar se há serviços abertos nos sistemas?",
    "opts": [
      "A) -sn",
      "B) -PS",
      "C) -Pn",
      "D) -sL"
    ],
    "ans": 2,
    "exp": "O parâmetro -Pn, ou \"sem ping\", ignora a descoberta de hosts e realiza uma varredura de portas. O parâmetro -sn ignora a varredura de portas após a descoberta, sL lista os hosts realizando consultas DNS, e -PS realiza sondagens usando um TCP SYN."
  },
  {
    "t": "Um analista suspeita que um processo desconhecido em uma estação Windows esteja mantendo conexões de rede. Ele precisa relacionar cada conexão ativa ao processo que a originou, de modo a investigar posteriormente no Gerenciador de Tarefas. Qual comando atende diretamente a esse objetivo?",
    "opts": [
      "A. netstat -e, que fornece as estatísticas de interface e permite correlacionar o volume de tráfego às aplicações responsáveis.",
      "B. netstat -o, que exibe as conexões ativas junto ao identificador de processo (PID) que criou cada uma delas.",
      "C. netstat -nr, que apresenta a tabela de rotas ativa e a interface associada a cada conexão estabelecida.",
      "D. netstat -ta, que lista as conexões TCP ativas e o executável responsável por cada sessão aberta."
    ],
    "ans": 1,
    "exp": "O parâmetro -o no Windows identifica os números de processo associados às conexões, que podem então ser referenciados no Gerenciador de Tarefas. A alternativa A aponta o -e, que fornece estatísticas de interface — bytes, pacotes, erros, descartes e protocolos desconhecidos — sem vincular tráfego a aplicações. A alternativa C descreve o -nr, voltado à tabela de rotas, com destino, máscara, gateway, interface e métrica, e não a processos. A alternativa D acerta ao dizer que -ta lista conexões TCP ativas, mas erra ao atribuir a esse parâmetro a exibição do executável responsável."
  },
  {
    "t": "Durante a análise de um host comprometido, um profissional precisa entender como a rede local se apresenta a partir daquele sistema, identificando o gateway utilizado, as redes de destino e a preferência entre rotas disponíveis. Qual saída fornece essas informações?",
    "opts": [
      "A. A listagem de conexões UDP ativas, que revela os destinos alcançados pelo host e os caminhos em uso.",
      "B. As estatísticas de interface, que indicam quais caminhos foram mais utilizados com base no volume de bytes transmitidos.",
      "C. A tabela de rotas, que apresenta a rede de destino, a máscara de rede, o gateway, a interface associada e a métrica que estabelece a preferência da rota.",
      "D. A listagem de conexões de soquete Unix, que expõe as associações locais entre interfaces e destinos configurados."
    ],
    "ans": 2,
    "exp": "As informações de tabela de rotas, obtidas com -nr, incluem IPv4 e IPv6 e, no Windows, mostram a rede de destino, a máscara de rede, o gateway, a interface à qual a rota está associada e uma métrica que reflete velocidade do link e outros detalhes para estabelecer a preferência da rota. A alternativa A trata de conexões UDP, que mostram comunicações em curso, não rotas configuradas. A alternativa B recorre às estatísticas de interface, que contabilizam bytes, pacotes, erros e descartes, sem qualquer informação de roteamento. A alternativa D descreve soquetes Unix, exibidos com -x, que são conexões locais e não trazem dados de rota."
  },
  {
    "t": "Uma equipe precisa levantar informações sobre o comportamento de rede de diversos hosts e sobre a aparência da rede local, sem depender da instalação de ferramentas adicionais nos sistemas avaliados. Qual avaliação é mais apropriada?",
    "opts": [
      "A. Recorrer ao netstat, disponível por padrão em Windows, Linux, macOS e na maioria dos sistemas Unix e similares, ainda que suas capacidades variem ligeiramente entre os sistemas operacionais.",
      "B. Recorrer ao netstat somente nos hosts Windows e Linux, já que em macOS e sistemas similares ao Unix a ferramenta precisa ser instalada separadamente.",
      "C. Descartar o netstat e utilizar dados de fluxo coletados na rede, pois a ferramenta local não informa com quais máquinas um sistema se comunicou.",
      "D. Padronizar a coleta com um único conjunto de parâmetros do netstat em todos os hosts, já que a ferramenta apresenta comportamento e saídas idênticos entre plataformas."
    ],
    "ans": 0,
    "exp": "O netstat está disponível por padrão em Windows, Linux, macOS e na maioria dos sistemas Unix e similares, o que permite presumir sua existência e usá-lo para coletar informações; suas capacidades variam ligeiramente entre os sistemas operacionais. Executá-lo revela tanto o comportamento de rede da máquina quanto como a rede local se apresenta. A alternativa B restringe indevidamente a disponibilidade da ferramenta. A alternativa C nega ao netstat a capacidade de mostrar com quais máquinas o sistema se comunica, informação que ajuda a compreender topologia e serviços locais. A alternativa D ignora a variação de capacidades entre plataformas."
  },
  {
    "t": "Durante uma coleta passiva de informações, um analista obtém o arquivo de configuração do servidor DHCP de um segmento. Nele constam a faixa dinâmica 192.168.1.20 a 192.168.1.240 e uma entrada individual com nome de host, endereço de hardware e endereço fixo 192.168.1.241. Qual conclusão é mais relevante para o levantamento?",
    "opts": [
      "A. O host com endereço fixo provavelmente é um servidor ou sistema que precisa de endereço IP conhecido para uma função específica, sendo mais interessante para a coleta de informações.",
      "B. O host com endereço fixo representa um desvio de configuração, pois está fora da faixa distribuída pelo servidor e indica atribuição manual não autorizada no segmento.",
      "C. Todos os hosts situados dentro da faixa dinâmica devem ser priorizados, pois concentram as estações de trabalho que oferecem maior probabilidade de exposição de serviços.",
      "D. A presença de endereço fixo impede determinar quais hosts do segmento usam endereços estáticos, exigindo varredura ativa para completar o inventário."
    ],
    "ans": 0,
    "exp": "Sistemas com endereços DHCP fixos costumam ser servidores ou sistemas que precisam de um endereço IP conhecido para uma função específica e, por isso, são mais interessantes durante a coleta de informações. A alternativa B trata como anomalia uma reserva legítima definida no próprio arquivo de configuração. A alternativa C inverte a prioridade: estações de trabalho são as que mais recebem endereços dinâmicos e tendem a ser menos relevantes que servidores. A alternativa D nega possibilidades reais, pois combinar logs de DHCP com outros logs, como os de firewall, permite distinguir hosts com endereços dinâmicos daqueles com endereços estáticos."
  },
  {
    "t": "Um analista revisa entradas de log de um servidor DHCP em Linux que registram, em sequência, DHCPREQUEST e DHCPACK para 10.0.2.40 a partir do endereço de hardware 08:00:27:fa:25:8e, via enp0s3. Qual descrição corresponde corretamente ao que esses registros indicam e ao valor dessa fonte de dados?",
    "opts": [
      "A. Um novo host acaba de ingressar no segmento e recebeu seu primeiro endereço; esse tipo de registro serve principalmente para dimensionar a ocupação da faixa dinâmica.",
      "B. O servidor negou a solicitação e reatribuiu o endereço a outro cliente, evidência que ajuda a identificar conflitos de endereçamento no segmento.",
      "C. O endereço 10.0.2.40 foi configurado estaticamente no cliente, e o servidor apenas confirmou seu uso, o que permite mapear os hosts fora da faixa dinâmica.",
      "D. Um sistema está renovando sua concessão existente, e esse tipo de registro fornece informações sobre sistemas, seus endereços MAC e seus endereços IP."
    ],
    "ans": 3,
    "exp": "A sequência de DHCPREQUEST e DHCPACK para o mesmo endereço, vinda do mesmo endereço de hardware, mostra um sistema renovando sua concessão existente; os logs de DHCP fornecem informações sobre sistemas, seus endereços MAC e seus endereços IP, sendo uma forma rápida de identificar muitos hosts da rede. A alternativa A interpreta renovação como primeira concessão. A alternativa B contraria o registro, já que DHCPACK indica confirmação, não negação. A alternativa C atribui ao cliente uma configuração estática, quando o endereço está sendo concedido pelo próprio servidor DHCP."
  },
  {
    "t": "Durante a revisão de uma lista de acesso aplicada a um roteador de borda, um analista identifica a seguinte entrada: permit tcp 172.16.0.0 0.15.255.255 any eq 22. Qual descrição corresponde ao efeito dessa regra?",
    "opts": [
      "A. Permite tráfego TCP originado da rede 172.16.0.0, em qualquer porta de origem, destinado à porta 22, autorizando o uso de SSH por essa faixa.",
      "B. Permite tráfego TCP originado de qualquer rede em direção aos hosts da faixa 172.16.0.0, desde que utilize a porta de origem 22.",
      "C. Permite que os hosts da faixa 172.16.0.0 recebam conexões SSH provenientes de qualquer origem, restringindo o tráfego de saída do segmento.",
      "D. Permite tráfego TCP entre a rede 172.16.0.0 e qualquer destino, limitando a comunicação exclusivamente às portas de origem e destino iguais a 22."
    ],
    "ans": 0,
    "exp": "Ao reescrever a regra em linguagem simples, começa-se pela ação, depois os elementos afetados e por fim os modificadores: permitir tráfego TCP da rede indicada, em qualquer porta de origem, para a porta de destino 22 — o que autoriza SSH a partir dessa faixa. A alternativa B inverte origem e destino e ainda desloca a porta 22 para o lado da origem. A alternativa C também inverte o sentido da regra, tratando a faixa como destino das conexões. A alternativa D acrescenta uma restrição de porta de origem que a regra não impõe, já que any cobre qualquer porta de origem."
  },
  {
    "t": "Jaime está usando o Angry IP Scanner e percebe que ele oferece suporte a vários tipos de ping para identificar hosts. Por que ela poderia escolher um tipo específico de ping em vez dos demais?",
    "opts": [
      "A) Para contornar firewalls",
      "B) Para permitir uma melhor detecção de vulnerabilidades",
      "C) Para impedir que a varredura seja sinalizada por ferramentas de proteção contra DDoS",
      "D) Para aproveitar a maior velocidade dos pings TCP em relação aos pings UDP"
    ],
    "ans": 0,
    "exp": "Alguns firewalls bloqueiam ICMP, mas permitem pings UDP ou TCP. Jaime sabe que a escolha do protocolo do ping pode ajudar a contornar alguns firewalls. O Angry IP Scanner não é um scanner de vulnerabilidades, e os pings UDP são mais rápidos que os pings TCP."
  },
  {
    "t": "Hue quer realizar o levantamento de informações sobre uma rede como parte de uma atividade de reconhecimento. Qual das seguintes ferramentas é a mais adequada para o levantamento passivo de informações, tendo um nome de domínio como ponto de partida?",
    "opts": [
      "A) Traceroute",
      "B) Maltego",
      "C) Nmap",
      "D) Angry IP Scanner"
    ],
    "ans": 1,
    "exp": "Hue sabe que o Maltego fornece transformações que podem identificar hosts e endereços IP relacionados a um domínio e que, em seguida, pode coletar informações adicionais usando outras transformações OSINT. Nmap e Angry IP Scanner são ferramentas de varredura ativa, e o traceroute não fornecerá informações úteis para o levantamento com apenas um nome de domínio."
  },
  {
    "t": "Um analista revisa registros de um firewall e encontra a entrada: Sep 13 10:05:11 10.0.0.1 %ASA-5-111008: User 'ASAadmin' executed the 'enable' command. Qual interpretação é correta?",
    "opts": [
      "A. O identificador numérico presente na mensagem indica o nível de severidade do evento, o que caracteriza a entrada como um alerta de segurança de alta prioridade.",
      "B. A entrada registra a tentativa de uma conexão administrativa remota bloqueada pelo dispositivo, evidência típica de acesso não autorizado ao equipamento.",
      "C. O usuário indicado executou o comando usado para entrar no modo privilegiado do dispositivo, o que constituiria um alerta imediato caso ele não devesse possuir acesso administrativo.",
      "D. A mensagem apenas confirma a autenticação bem-sucedida no console, sem implicação de elevação de privilégios, e pode ser tratada como evento meramente informativo."
    ],
    "ans": 2,
    "exp": "A entrada indica que o usuário executou o comando enable, normalmente usado para entrar no modo privilegiado do dispositivo; se esse usuário não deveria ter acesso administrativo, isso seria um alerta imediato na investigação. A alternativa A confunde o número de seis dígitos, que corresponde ao tipo de comando, com o nível de severidade. A alternativa B descreve um bloqueio que a mensagem não registra — a ação foi executada com sucesso. A alternativa D nega a elevação de privilégios, que é justamente o que o comando representa."
  },
  {
    "t": "Uma equipe de teste de penetração não conseguiu acesso aos arquivos de configuração dos dispositivos de perímetro, mas obteve os registros de eventos do firewall. O responsável questiona se ainda é possível extrair valor desses dados. Qual avaliação é mais apropriada?",
    "opts": [
      "A. Os registros só permitem contabilizar volume de conexões, de modo que a análise deve se concentrar em identificar picos de tráfego e possíveis problemas de disponibilidade.",
      "B. Os registros são pouco úteis sem a configuração correspondente, já que somente as listas de controle de acesso revelam quais fluxos são permitidos ou bloqueados.",
      "C. Os registros permitem apenas identificar ações administrativas realizadas no dispositivo, uma vez que eventos de tráfego costumam ser classificados como mensagens de depuração.",
      "D. Os registros oferecem uma boa visão de como o tráfego flui e permitem fazer a engenharia reversa das regras do firewall com base em seu conteúdo."
    ],
    "ans": 3,
    "exp": "Mesmo sem os arquivos de configuração, os arquivos de log oferecem uma boa visão de como o tráfego flui e podem permitir que testadores de penetração façam a engenharia reversa das regras do firewall a partir de seu conteúdo. A alternativa A reduz os registros a métricas de volume, ignorando que eles trazem informações sobre conexões permitidas e bloqueadas. A alternativa B condiciona toda a análise à posse da configuração, quando os logs por si já são informativos. A alternativa C limita indevidamente o conteúdo a ações administrativas; os níveis de log servem para separar mensagens informativas e de depuração das mais importantes, não para descartar eventos de tráfego."
  },
  {
    "t": "Um analista precisa levantar eventos de login, uso de recursos e direitos, além de registros de arquivos abertos, criados ou excluídos em uma estação Windows. Qual log de eventos atende a essa necessidade?",
    "opts": [
      "A. O log de aplicação, que reúne os eventos registrados pelos programas em execução na estação e inclui as ações realizadas sobre os arquivos por eles manipulados.",
      "B. O log de segurança, cujos eventos capturados são definidos pelos administradores do sistema.",
      "C. O log de sistema, que contém os eventos registrados pelos componentes do Windows e vem predefinido com o sistema operacional.",
      "D. O log de eventos encaminhados, que consolida os registros de auditoria coletados por meio de assinaturas de eventos."
    ],
    "ans": 1,
    "exp": "Os logs de segurança do Windows podem capturar eventos de login, uso de recursos e direitos e eventos como arquivos sendo abertos, criados ou excluídos, sendo essas opções definidas pelos administradores do sistema. A alternativa A descreve o log de aplicação, que contém eventos registrados por programas ou aplicações, variando conforme o programa. A alternativa C aponta o log de sistema, voltado a eventos de componentes do Windows e predefinido como parte do sistema. A alternativa D trata dos eventos encaminhados, que contêm eventos coletados de computadores remotos por meio de assinaturas e precisam ser especificamente configurados."
  },
  {
    "t": "Uma equipe de resposta a incidentes deseja centralizar, em um único host Windows, os eventos gerados por outras estações da rede. Qual recurso atende a esse objetivo e qual é a condição para seu funcionamento?",
    "opts": [
      "A. O log de configuração, que registra os eventos gerados durante a instalação de aplicações nos hosts monitorados e os consolida automaticamente no servidor.",
      "B. O log de sistema, que já vem predefinido como parte do Windows e passa a receber os eventos dos demais hosts assim que o encaminhamento é habilitado no domínio.",
      "C. O log de eventos encaminhados, que é configurado por meio de assinaturas de eventos e contém registros coletados de computadores remotos, exigindo configuração específica.",
      "D. O log de segurança, que pode ser ajustado pelos administradores para incluir os eventos provenientes das demais máquinas da rede."
    ],
    "ans": 2,
    "exp": "Os logs de eventos encaminhados são configurados usando assinaturas de eventos e contêm eventos coletados de computadores remotos; precisam ser especificamente configurados. A alternativa A descreve os logs de configuração, capturados quando aplicações são instaladas, sem função de centralização. A alternativa B atribui ao log de sistema, que é predefinido e registra eventos de componentes do Windows, um papel de coleta remota que ele não desempenha. A alternativa D estende indevidamente o log de segurança: os administradores definem quais eventos locais são capturados, e não a coleta de máquinas remotas."
  },
  {
    "t": "Ao planejar uma coleta de informações sobre o ambiente, um analista avalia o uso de arquivos de log de sistemas como fonte. Qual consideração é mais apropriada?",
    "opts": [
      "A. Devem ser a fonte prioritária, pois revelam a configuração dos sistemas, as aplicações em execução e as contas existentes com maior fidelidade que as demais fontes.",
      "B. Devem ser descartados, uma vez que seu conteúdo varia conforme o sistema operacional e as aplicações em execução, o que compromete a comparação entre hosts.",
      "C. São úteis quando disponíveis, pois trazem dados sobre configuração, aplicações e contas, mas normalmente não estão no topo da lista para reconhecimento, já que costumam ficar em local seguro e exigem acesso administrativo.",
      "D. Podem ser coletados de qualquer host do ambiente sem privilégios elevados, desde que o analista conheça o diretório padrão utilizado por cada sistema operacional."
    ],
    "ans": 2,
    "exp": "Os arquivos de log fornecem informações sobre como os sistemas estão configurados, quais aplicações executam e quais contas existem, mas normalmente não estão no topo da lista para reconhecimento: são coletados se estiverem acessíveis, pois a maioria é mantida em local seguro e não fica disponível sem acesso administrativo. A alternativa A os coloca como fonte prioritária, contrariando essa ordem de preferência. A alternativa B descarta uma fonte reconhecidamente útil por causa de sua variabilidade. A alternativa D ignora a exigência de acesso administrativo, que é justamente a principal barreira à coleta."
  },
  {
    "t": "Jack quer examinar um sistema usando o Angry IP Scanner. De que informação ele precisa para executar a varredura?",
    "opts": [
      "A) O endereço IP do sistema",
      "B) Os dados Whois do sistema",
      "C) O endereço MAC do sistema",
      "D) O nome de usuário e a senha do administrador do sistema"
    ],
    "ans": 0,
    "exp": "Para realizar uma varredura de portas, tudo de que Jack precisa é um endereço IP, um nome de host ou um intervalo de endereços IP."
  },
  {
    "t": "Qual das seguintes opções não é um motivo pelo qual profissionais de segurança costumam capturar pacotes enquanto realizam varreduras de portas e de vulnerabilidades?",
    "opts": [
      "A) Documentação do processo de trabalho",
      "B) Capturar dados adicionais para análise",
      "C) Impedir ataques externos",
      "D) Fornecer uma linha do tempo"
    ],
    "ans": 2,
    "exp": "Uma captura de pacotes não pode impedir ataques externos, embora possa capturar evidências de um ataque. A captura de pacotes é frequentemente usada para documentar o trabalho, incluindo o momento em que uma determinada varredura ou processo ocorreu, e também pode ser usada para fornecer dados adicionais para análise posterior."
  },
  {
    "t": "Durante o mapeamento da superfície de exposição de uma organização, um analista precisa identificar quais servidores tratam o correio eletrônico do domínio alvo, consultando um servidor DNS público de sua escolha. Qual abordagem atende a esse objetivo?",
    "opts": [
      "A. Executar uma consulta de traceroute contra o nome do domínio, observando os últimos saltos retornados para identificar os servidores responsáveis pela entrega de mensagens.",
      "B. Consultar os dados de registro do domínio por Whois, uma vez que os responsáveis pelo correio eletrônico constam nas informações de registro associadas ao site.",
      "C. Executar nslookup com o parâmetro de consulta ajustado para o tipo de registro correspondente ao serviço de correio, indicando o servidor DNS desejado como segundo parâmetro.",
      "D. Executar nslookup apenas com o nome do domínio, pois a resposta padrão da consulta apresenta todos os tipos de registro associados, incluindo os de correio."
    ],
    "ans": 2,
    "exp": "Diferentes tipos de registros DNS podem ser consultados com o parâmetro -query, que aceita entradas como MX, NS, SOA e ANY; além disso, o servidor DNS a ser utilizado é escolhido informando-o como segundo parâmetro do comando. A alternativa A confunde o traceroute, que mostra o caminho dos pacotes até o host, com consulta de registros DNS. A alternativa B trata o Whois como fonte de registros de correio, quando ele consulta dados de registro de domínio. A alternativa D assume que a consulta padrão traz todos os tipos de registro, o que não corresponde ao comportamento da ferramenta."
  },
  {
    "t": "Um analista executa um traceroute contra o site de uma organização e observa asteriscos e entradas indicando expiração de requisição em alguns saltos, além de dois saltos finais que retornam apenas endereços IP, sem nome de host. Qual conclusão é mais apropriada?",
    "opts": [
      "A. O resultado é parcial, pois alguns sistemas não respondem com dados de nome de host, mas o caminho observado ainda revela provedores upstream e ajuda a estimar faixas de IP da organização.",
      "B. O resultado é inválido para fins de mapeamento, já que a ausência de resposta em saltos intermediários impede determinar o caminho seguido pelos pacotes até o destino.",
      "C. O resultado indica que os saltos sem nome de host pertencem a redes distintas da organização alvo, devendo ser descartados da análise de topologia.",
      "D. O resultado sugere que o destino final está protegido por um dispositivo que reescreve as respostas, de modo que os endereços IP exibidos nos últimos saltos não são confiáveis."
    ],
    "ans": 0,
    "exp": "O traceroute frequentemente fornece apenas parte da história: alguns sistemas não respondem com dados de nome de host e há saltos que expiram. Ainda assim, o caminho observado permite ver provedores de rede upstream e redes de backbone, e até ter uma noção das faixas de IP da rede de produção da organização; endereços sem resolução de nome podem ser associados por Whois. A alternativa B descarta um resultado que continua informativo. A alternativa C elimina justamente saltos que podem pertencer ao destino. A alternativa D inventa um mecanismo de reescrita que nada nos dados sustenta."
  },
  {
    "t": "Uma equipe inicia a construção do footprint externo de uma organização e dispõe apenas do endereço do site institucional. Qual sequência de ações é mais adequada para ampliar o levantamento?",
    "opts": [
      "A. Executar traceroute contra o site e consultar servidores públicos de informações de rota BGP, pois somente esses dados permitem associar a organização aos seus domínios adicionais.",
      "B. Consultar registros DNS do domínio e verificar os dados de registro por Whois, usando o endereço IP obtido para investigar a faixa em que ele reside e assim encontrar outros sites e hosts.",
      "C. Solicitar acesso interno aos arquivos de configuração dos servidores DNS da organização, já que informações públicas não permitem identificar hosts adicionais associados ao domínio.",
      "D. Executar varreduras de portas contra o endereço IP do site, pois a identificação dos serviços expostos é o passo que permite associar novos hosts ao domínio."
    ],
    "ans": 1,
    "exp": "O DNS costuma ser uma das primeiras paradas na coleta de informações: os dados são públicos e se conectam à organização pela verificação de Whois do site, permitindo encontrar outros sites e hosts para somar ao footprint. Conhecido o endereço IP, é possível consultar a faixa em que ele reside e obter informações sobre a empresa ou seus serviços de hospedagem. A alternativa A trata rotas e BGP como via exclusiva, quando são complementares. A alternativa C recorre a acesso interno, desnecessário nessa etapa pública. A alternativa D parte para varredura ativa, que identifica serviços do host já conhecido, sem revelar novos domínios."
  },
  {
    "t": "Um analista precisa identificar a quem foi atribuída uma faixa de endereços IP utilizada por uma organização sediada na Europa. Qual entidade fornece o serviço adequado para essa consulta?",
    "opts": [
      "A. A IANA, que gerencia o espaço global de endereços IP e mantém os dados de atribuição de cada faixa alocada aos operadores de rede.",
      "B. O RIPE NCC, que oferece serviços de Whois para identificar os usuários atribuídos do espaço de IP sob sua responsabilidade regional.",
      "C. O registrador de domínio contratado pela organização, que mantém a interface entre o cliente e os registros e responde pelas atribuições de endereçamento.",
      "D. A ARIN, que concentra as consultas de Whois para faixas utilizadas por organizações europeias por meio de acordos com os demais registros regionais."
    ],
    "ans": 1,
    "exp": "Cada registro regional da internet fornece serviços de Whois para identificar os usuários atribuídos do espaço de IP pelo qual é responsável; o RIPE NCC cobre Ásia Central, Europa, Oriente Médio e Rússia. A alternativa A confunde papéis: a IANA gerencia o espaço global de endereços e a Zona Raiz do DNS, enquanto a autoridade regional cabe aos RIRs. A alternativa C atribui ao registrador de domínio a responsabilidade por endereçamento IP, quando ele atua na aquisição, faturamento e manutenção de nomes de domínio. A alternativa D desloca para a ARIN uma região que pertence ao RIPE NCC."
  },
  {
    "t": "O responsável pela gestão de domínios de uma organização recebe uma comunicação urgente sobre a renovação de um domínio corporativo próximo do vencimento, enviada por uma empresa que ele não reconhece. Qual orientação é mais apropriada?",
    "opts": [
      "A. Confirmar com qual registrador a organização efetivamente trabalha e o que esperar quanto às renovações, pois golpes de transferência de domínio costumam visar organizações com domínios próximos de expirar.",
      "B. Efetuar a renovação imediatamente com a empresa que entrou em contato, já que a perda do domínio permite que qualquer terceiro o registre.",
      "C. Autorizar a transferência do domínio para a empresa remetente, uma vez que a transferência entre registradores é um procedimento rotineiro conduzido pelos registros de topo.",
      "D. Encaminhar a solicitação ao registro regional responsável, pois é ele quem valida a legitimidade das comunicações de renovação enviadas aos titulares."
    ],
    "ans": 0,
    "exp": "Golpes de transferência de domínio frequentemente visam organizações cujos domínios estão próximos de expirar, e a orientação é garantir que os responsáveis saibam com qual registrador a organização trabalha e o que esperar quanto às renovações. A alternativa B age sobre um contato não verificado, exatamente o comportamento explorado nesses golpes. A alternativa C ignora que a transferência exige autorização do proprietário atual e liberação para o novo registrador, e ainda atribui o processo aos registros de topo em vez dos registradores. A alternativa D atribui aos registros regionais um papel de validação de comunicações que eles não exercem."
  },
  {
    "t": "Que processo usa informações como a maneira pela qual a pilha TCP de um sistema responde a consultas, as opções TCP às quais ela oferece suporte e o tamanho inicial da janela que utiliza?",
    "opts": [
      "A) Identificação de serviços",
      "B) Fuzzing",
      "C) Varredura de aplicações",
      "D) Detecção do sistema operacional"
    ],
    "ans": 3,
    "exp": "A detecção do sistema operacional frequentemente utiliza o suporte a opções TCP, a amostragem de IDs IP e verificações do tamanho da janela, além de outros indicadores que criam impressões digitais exclusivas para vários sistemas operacionais. A identificação de serviços frequentemente utiliza banners, uma vez que os recursos TCP não são exclusivos de um determinado serviço. O fuzzing é um método de teste de código, e a varredura de aplicações normalmente está relacionada à segurança de aplicações web."
  },
  {
    "t": "Li quer usar o Recon-ng para coletar dados de sistemas. Qual das seguintes opções não é um uso comum do Recon-ng?",
    "opts": [
      "A) Realizar varreduras de vulnerabilidades de serviços",
      "B) Procurar arquivos sensíveis",
      "C) Realizar coleta OSINT de dados de Whois, DNS e similares",
      "D) Encontrar endereços IP de alvos"
    ],
    "ans": 0,
    "exp": "O Recon-ng não é um scanner de vulnerabilidades. Ele ajuda em atividades OSINT, como procurar arquivos sensíveis, coletar informações OSINT e encontrar endereços IP de alvos. Li sabe que o Recon-ng é uma ferramenta voltada a OSINT e que a varredura de vulnerabilidades é uma atividade de coleta de informações ativa, e não passiva. Embora o Recon-ng ofereça suporte à varredura de portas, ele não possui uma função de scanner de vulnerabilidades."
  },
  {
    "t": "Ao revisar controles do processo de gestão de domínios, um analista precisa justificar por que a expiração de um nome de domínio corporativo representa risco de segurança, e não apenas indisponibilidade do site. Qual argumento sustenta essa avaliação?",
    "opts": [
      "A. O risco é limitado, pois a expiração apenas suspende a resolução do nome até que a renovação seja concluída junto ao registrador responsável.",
      "B. A expiração transfere o domínio automaticamente ao registro de topo correspondente, que passa a controlar temporariamente os serviços associados.",
      "C. A expiração invalida as atribuições de espaço de IP associadas ao domínio, o que exige nova solicitação junto ao registro regional da internet.",
      "D. Caso o domínio não seja renovado, outra pessoa pode registrá-lo e passar a receber as mensagens que seriam destinadas ao titular original, com potencial para danos significativos."
    ],
    "ans": 3,
    "exp": "Quando uma organização não renova seu nome de domínio, outra pessoa pode registrá-lo — como no caso em que um particular adquiriu um domínio corporativo e imediatamente recebeu acesso às mensagens que o titular normalmente receberia, com potencial para estrago considerável. A alternativa A reduz o problema a uma suspensão temporária. A alternativa B inventa uma transferência automática ao registro de topo. A alternativa C mistura domínios com endereçamento IP, que é gerenciado pela IANA e pelos registros regionais, sem relação com a renovação do nome."
  },
  {
    "t": "Um analista precisa localizar servidores DNS adicionais de uma organização que não constam nas informações públicas de registro do domínio. Qual abordagem é adequada para essa etapa?",
    "opts": [
      "A. Executar uma varredura de portas procurando sistemas que ofereçam serviços DNS na porta UDP ou TCP 53 e, em seguida, consultá-los com dig ou outros comandos de consulta DNS.",
      "B. Consultar os registros MX do domínio, pois os servidores de correio indicados apontam para os servidores DNS internos responsáveis pela zona.",
      "C. Executar nslookup contra o domínio principal, uma vez que a resposta lista todos os servidores DNS autoritativos e não autoritativos da organização.",
      "D. Recorrer exclusivamente à revisão da documentação da organização, já que servidores DNS adicionais não são detectáveis por varredura ativa nem por coleta passiva."
    ],
    "ans": 0,
    "exp": "Servidores DNS adicionais podem ser identificados por varredura ativa, coleta passiva a partir do tráfego ou dos logs, ou pela revisão da documentação da organização; na prática, isso é feito com uma varredura de portas buscando sistemas que forneçam serviços DNS na porta UDP ou TCP 53, consultando-os depois com dig ou comandos equivalentes. A alternativa B confunde registros de correio com servidores de nomes. A alternativa C atribui a uma consulta simples uma enumeração completa que ela não entrega. A alternativa D descarta caminhos de descoberta que são justamente os indicados."
  },
  {
    "t": "Durante a análise de registros DNS de uma organização, um analista identifica nomes de host como \"AD4\" e outros que indicam claramente aplicações e serviços específicos. Qual avaliação melhor descreve o valor dessas informações para um atacante?",
    "opts": [
      "A. Os nomes indicam apenas convenções internas de nomenclatura e não oferecem vantagem prática, já que a função real de cada sistema precisa ser confirmada por identificação de serviço e versão.",
      "B. Os nomes permitem determinar a topologia interna da rede, pois refletem a posição de cada host nos segmentos em que estão alocados.",
      "C. Os nomes sugerem a função dos sistemas, tornando alguns alvos mais prováveis para explorações e varreduras específicas de plataforma, e fornecem pistas para engenharia social e inteligência humana.",
      "D. Os nomes revelam quais sistemas suportam transferências de zona, o que facilita a aquisição dos dados DNS da organização."
    ],
    "ans": 2,
    "exp": "Entradas de DNS fornecem informações úteis pelo próprio nome do host: um sistema chamado \"AD4\" é alvo mais provável para explorações baseadas em Active Directory e varreduras específicas de Windows Server, e nomes que refletem uma aplicação ou serviço trazem informação sobre o alvo e pistas para engenharia social e inteligência humana. A alternativa A descarta um valor de reconhecimento reconhecido. A alternativa B extrapola para topologia interna, que não decorre do nome. A alternativa D confunde nomenclatura com suporte a transferências de zona, que precisa ser testado no servidor."
  },
  {
    "t": "Um analista precisa verificar, a partir da linha de comando, se um servidor DNS da organização aceita solicitações de replicação do banco de dados de zona vindas de sistemas que não são seus pares confiáveis. Qual comando atende a essa verificação?",
    "opts": [
      "A. nslookup -query=ns domain.name, que retorna os servidores de nomes autoritativos e indica quais deles aceitam solicitações de replicação.",
      "B. dig axfr @dns-server domain.name, que solicita a transferência de zona diretamente ao servidor indicado.",
      "C. host -t soa domain.name dns-server, que consulta o registro de início de autoridade e revela a política de replicação configurada na zona.",
      "D. dig any @dns-server domain.name, que retorna todos os registros publicados e equivale ao conteúdo obtido em uma replicação de zona."
    ],
    "ans": 1,
    "exp": "Para verificar se um servidor DNS permite transferências de zona a partir da linha de comando, usa-se host -t axfr domain.name dns-server ou dig axfr @dns-server domain.name. A alternativa A consulta servidores de nomes, sem testar se a transferência é aceita. A alternativa C busca o registro SOA, que traz dados como servidor primário, contato, número de série e temporizadores, mas não a permissão de replicação. A alternativa D consulta registros publicados de forma pontual, o que não equivale à replicação completa da zona obtida por uma transferência."
  },
  {
    "t": "Ao revisar a saída de uma transferência de zona bem-sucedida, um analista observa a linha com o registro de início de autoridade contendo, entre outros valores, o número de série 2014101603 e os temporizadores 172800, 900, 1209600 e 3600. Qual descrição corresponde corretamente a esses elementos?",
    "opts": [
      "A. O número de série identifica a versão atual do domínio, e os valores indicam, respectivamente, o tempo de espera do primário em caso de falha de atualização, o período em que um secundário pode alegar informação autoritativa, a expiração do registro e o TTL mínimo do domínio.",
      "B. O número de série indica a quantidade de registros presentes na zona, e os valores representam os intervalos de replicação negociados entre os servidores primário e secundários.",
      "C. O número de série corresponde à data da última consulta atendida pelo servidor, e os valores definem os limites de cache aplicados pelos resolvedores recursivos que acessam a zona.",
      "D. O número de série identifica a versão da zona, e os valores expressam o tempo de vida de cada tipo de registro publicado, sendo o último o TTL máximo permitido para o domínio."
    ],
    "ans": 0,
    "exp": "O registro SOA lista o servidor de nomes primário, o contato e o número de série atual do domínio, além dos temporizadores: 172.800 segundos como tempo que o primário deve esperar caso falhe ao atualizar, 900 segundos como o período em que um secundário pode alegar ter informação autoritativa, 1.209.600 segundos como expiração do registro e 3.600 segundos como TTL mínimo do domínio. A alternativa B trata o número de série como contagem de registros. A alternativa C o associa à última consulta atendida. A alternativa D inverte o último valor, que é o TTL mínimo, não o máximo."
  },
  {
    "t": "Jason quer realizar uma varredura de portas usando o Metasploit Framework. Qual ferramenta do framework ele pode usar para fazer isso?",
    "opts": [
      "A) Angry IP Scanner",
      "B) Recon-ng",
      "C) Maltego",
      "D) Nmap"
    ],
    "ans": 3,
    "exp": "O suporte ao Nmap é integrado ao MSF, permitindo realizar facilmente varreduras de portas apenas chamando o nmap como você normalmente faria na linha de comando. O Angry IP Scanner não é integrado, e tanto o Recon-ng quanto o Maltego são ferramentas separadas com recursos OSINT e de gerenciamento de informações."
  },
  {
    "t": "Sally quer usar a identificação de sistemas operacionais do nmap para determinar qual sistema operacional um dispositivo está executando. Qual das seguintes opções não é um dado usado pelo nmap para identificar sistemas operacionais?",
    "opts": [
      "A) Sequências TCP",
      "B) Marcas de tempo TCP",
      "C) Cabeçalho de SO do TCP",
      "D) Opções TCP"
    ],
    "ans": 2,
    "exp": "A identificação do sistema operacional por impressão digital depende, em muitos casos, do conhecimento do que a pilha TCP de um determinado sistema operacional faz quando envia respostas. Você pode ler mais sobre as várias maneiras pelas quais o nmap testa e filtra os dados em https://nmap.org/book/osdetect-methods.html#osdetect-probes. Sally sabe que banners são fornecidos em logins interativos ou por serviços e que o nmap utiliza dados de protocolos de rede para detectar o sistema operacional."
  },
  {
    "t": "Durante uma revisão de configuração, um administrador questiona por que a equipe de segurança recomenda restringir transferências de zona apenas aos pares DNS confiáveis. Qual justificativa sustenta a recomendação?",
    "opts": [
      "A. A transferência de zona sobrecarrega o servidor primário, que passa a responder a solicitações de replicação de qualquer origem, comprometendo a disponibilidade do serviço de nomes.",
      "B. A transferência de zona exporia os dados de registro do domínio, incluindo o registrador responsável e os contatos administrativos utilizados no processo de renovação.",
      "C. A transferência de zona expõe a lista completa de entradas de DNS do domínio, incluindo servidores de nomes, registros MX e outros detalhes muito úteis na coleta de informações sobre a organização.",
      "D. A transferência de zona permite que o solicitante altere registros replicados, uma vez que o mecanismo foi projetado para sincronizar bancos de dados entre servidores."
    ],
    "ans": 2,
    "exp": "As transferências de zona replicam bancos de dados DNS entre servidores e, por isso, entregam a lista completa de entradas de DNS do domínio — servidores de nomes, registros MX e outros detalhes —, o que é muito útil na coleta de informações sobre a organização e é um dos principais motivos para desativá-las na maioria dos servidores. A alternativa A troca o risco de exposição por um problema de desempenho. A alternativa B confunde dados de zona com dados de registro do domínio, obtidos via Whois. A alternativa D atribui capacidade de escrita ao solicitante, quando a replicação apenas transfere os dados."
  },
  {
    "t": "Uma equipe implementou uma regra de IPS destinada a bloquear tentativas de enumeração de nomes por consultas DNS repetidas. Durante um exercício autorizado, o testador conseguiu levantar a lista de sistemas mesmo com a regra ativa. Qual explicação é mais consistente?",
    "opts": [
      "A. Regras de IDS ou IPS evitam apenas parcialmente esse tipo de enumeração, já que consultas enviadas a uma taxa lenta ou distribuídas entre vários sistemas contornam a maioria dos métodos de prevenção.",
      "B. A regra só é eficaz contra transferências de zona, de modo que consultas individuais por endereço IP nunca são detectadas por esse tipo de controle.",
      "C. O bloqueio falhou porque a enumeração foi conduzida contra servidores DNS públicos externos, que estão fora do alcance de qualquer regra do dispositivo de detecção.",
      "D. O testador utilizou consultas manuais em vez de consultas programadas por script, o que impede que a assinatura do dispositivo reconheça o padrão de enumeração."
    ],
    "ans": 0,
    "exp": "A enumeração por força bruta de DNS pode ser apenas parcialmente evitada por uma regra de IDS ou IPS, pois enviar consultas a uma taxa lenta ou a partir de vários sistemas contorna a maioria dos métodos de prevenção. A alternativa B restringe indevidamente o alcance da regra às transferências de zona. A alternativa C generaliza que consultas a DNS público seriam sempre invisíveis ao controle, quando o fator decisivo é o ritmo e a distribuição das consultas. A alternativa D atribui a diferença ao modo manual ou por script, sendo que ambos servem para o levantamento e não determinam a evasão."
  },
  {
    "t": "Durante o levantamento externo de uma organização, um analista deseja obter os endereços IPv4 e IPv6 associados a um domínio e também os servidores responsáveis pelo tratamento de e-mail, em uma única consulta a partir de um sistema Linux. Qual recurso atende a isso?",
    "opts": [
      "A. Uma consulta Whois ao domínio, cujo retorno inclui os servidores de nomes primários e os servidores de correio utilizados pela organização.",
      "B. Uma solicitação de transferência de zona ao servidor autoritativo, única forma de obter simultaneamente registros de endereço e de correio.",
      "C. Uma consulta ao serviço de histórico de registro do domínio, que consolida endereços e servidores de e-mail utilizados ao longo do tempo.",
      "D. O comando host aplicado ao domínio, que retorna o endereço IPv4, o endereço IPv6 e os servidores de e-mail do sistema consultado."
    ],
    "ans": 3,
    "exp": "O comando host no Linux fornece informações sobre os endereços IPv4 e IPv6 de um sistema, bem como sobre seus servidores de e-mail. A alternativa A descreve o Whois, que retorna dados de registro como localização da sede, informações de contato e servidores de nomes primários, mas não essa combinação de endereços e servidores de correio. A alternativa B recorre à transferência de zona, que depende de permissão no servidor e não é a única via para esses dados. A alternativa C aponta serviços de histórico de registro, voltados a informações passadas de propriedade do domínio."
  },
  {
    "t": "Um analista observa que a consulta atual de registro de um domínio corporativo traz poucos dados de contato. O gestor pergunta se ainda é possível obter informações adicionais sobre a organização por essa via. Qual orientação é apropriada?",
    "opts": [
      "A. Recorrer a serviços que oferecem visão histórica das informações de registro, pois muitos proprietários reduzem os dados visíveis após algum tempo e os registros antigos podem conter detalhes úteis.",
      "B. Repetir a consulta diretamente no servidor Whois do registrador indicado, pois apenas ele apresenta a versão completa e não filtrada dos dados de contato.",
      "C. Consultar os registros de nomes do domínio, uma vez que os dados de contato omitidos permanecem publicados nos servidores autoritativos da zona.",
      "D. Concluir que o levantamento por registro se esgotou, já que dados removidos do registro atual não permanecem acessíveis em nenhuma fonte pública."
    ],
    "ans": 0,
    "exp": "Conhecer o histórico de propriedade de um domínio é útil no reconhecimento, e serviços de histórico oferecem uma visão das informações de registro fornecidas pelo Whois ao longo do tempo. Como muitos proprietários reduzem a quantidade de dados visíveis depois que o domínio está registrado há algum tempo, as informações históricas podem concentrar detalhes valiosos. A alternativa B supõe que o servidor do registrador exibiria dados que foram deliberadamente reduzidos. A alternativa C confunde dados de registro com registros publicados na zona. A alternativa D descarta uma fonte que permanece disponível."
  },
  {
    "t": "Um analista precisa reunir endereços de e-mail, nomes de funcionários, nomes de host e informações de domínio de uma organização, apoiando-se em mecanismos de busca para acelerar o trabalho sobre grandes volumes de dados. Qual ferramenta é mais adequada e qual ressalva deve acompanhar seu uso?",
    "opts": [
      "A. O Shodan, mecanismo voltado a dispositivos conectados à internet, cujo resultado precisa ser validado por consultas manuais aos domínios identificados.",
      "B. O theHarvester, que coleta esses dados por meio de mecanismos de busca e simplifica buscas em grandes conjuntos de dados, mas não substitui completamente a criatividade humana.",
      "C. O Maltego, que constrói mapas de relacionamento entre pessoas e recursos e, por isso, depende de um conjunto inicial de entidades fornecido pelo analista.",
      "D. O Recon-ng, ferramenta de coleta de inteligência de fontes abertas que consolida automaticamente os resultados sem necessidade de refinamento posterior."
    ],
    "ans": 1,
    "exp": "O theHarvester foi projetado para coletar e-mails, informações de domínio, nomes de host, nomes de funcionários e portas abertas e banners usando mecanismos de busca; ele simplifica buscas em grandes conjuntos de dados, mas não é substituto completo para a criatividade humana. A alternativa A aponta o Shodan, cujo foco são dispositivos conectados à internet e suas vulnerabilidades. A alternativa C descreve o Maltego, voltado a mapas de relacionamento e análise de vínculos. A alternativa D cita uma ferramenta OSINT legítima, mas atribui a ela uma consolidação automática que dispensaria o trabalho humano."
  },
  {
    "t": "Durante um teste autorizado, a equipe deseja registrar evidências de que um host específico foi efetivamente sondado em determinado horário e também investigar as respostas obtidas. Qual recurso atende a essa necessidade?",
    "opts": [
      "A. Os registros do dispositivo de perímetro, que consolidam as conexões permitidas e bloqueadas e comprovam o horário das sondagens realizadas.",
      "B. A saída do scanner de portas com detecção de versão, que documenta os serviços encontrados e o instante de cada sondagem enviada.",
      "C. A captura de pacotes durante a atividade, que permite investigar respostas específicas e serve como prova de que a tarefa foi concluída.",
      "D. Os dados de fluxo coletados na rede, que registram origem, destino e horário de cada conexão estabelecida durante o teste."
    ],
    "ans": 2,
    "exp": "A captura de pacotes permite investigar respostas específicas e verificar que um host determinado foi testado em um momento determinado, servindo tanto como ferramenta de análise quanto como prova de que a tarefa foi concluída. A alternativa A depende de registros de terceiros, que refletem a política do dispositivo e não a atividade do testador em detalhe. A alternativa B entrega o resultado da varredura, sem o registro do tráfego que sustenta a evidência. A alternativa D oferece resumo de tráfego, insuficiente para examinar respostas individuais."
  },
  {
    "t": "Chris quer realizar a descoberta de ativos pela rede. Que limitação ele encontrará se depender de um scanner de portas para realizar essa descoberta?",
    "opts": [
      "A) Scanners de portas não conseguem detectar vulnerabilidades.",
      "B) Scanners de portas não conseguem determinar quais serviços estão em execução em uma determinada porta.",
      "C) Firewalls podem impedir que scanners de portas detectem sistemas.",
      "D) Um scanner de portas pode causar uma condição de negação de serviço em muitos sistemas modernos."
    ],
    "ans": 2,
    "exp": "Firewalls podem impedir respostas aos scanners de portas, tornando os sistemas essencialmente invisíveis ao scanner. Um scanner de portas, por si só, não é suficiente para a descoberta de ativos em muitas redes. Scanners de portas costumam ter alguma capacidade limitada de detecção de vulnerabilidades integrada, frequentemente baseada em informações de versão ou na identificação por impressão digital, mas a ausência de detecção de vulnerabilidades não impede a descoberta. Scanners de portas fazem a melhor estimativa possível dos serviços em uma porta com base nas informações fornecidas pelo serviço. Scanners de portas normalmente não causam problemas para a maioria das aplicações e serviços modernos, mas podem causá-los em algumas circunstâncias. Isso, porém, não deve impedir uma varredura de portas para descoberta!"
  },
  {
    "t": "Emily quer coletar inteligência de fontes abertas e centralizá-la usando uma ferramenta de código aberto. Qual das seguintes ferramentas é a mais adequada para gerenciar a coleta de dados em atividades OSINT?",
    "opts": [
      "A) O Metasploit Framework",
      "B) Recon-ng",
      "C) nmap",
      "D) Angry IP Scanner"
    ],
    "ans": 1,
    "exp": "O Recon-ng é um framework de código aberto baseado em Python para coleta de inteligência de fontes abertas e reconhecimento baseado na web. O Metasploit Framework é uma ferramenta de testes de penetração e de comprometimento com uma grande variedade de outros recursos, mas não é tão adequada à coleta de informações como finalidade principal. O Nmap e o Angry IP Scanner são ambos scanners de portas."
  },
  {
    "t": "Uma equipe interna de segurança pretende usar captura de tráfego para levantar quais sistemas existem em um segmento e estimar seus sistemas operacionais, com a maior abrangência possível. Qual abordagem é mais apropriada?",
    "opts": [
      "A. Posicionar a captura em um ponto estratégico da rede, com network tap ou porta span, ampliando o volume de tráfego observado além do que uma captura em host único ofereceria.",
      "B. Executar a captura em um único host do segmento, já que os pacotes de broadcast recebidos ali são suficientes para cobrir todo o tráfego trocado na rede.",
      "C. Solicitar acesso privilegiado aos sistemas do segmento, pois a captura de tráfego depende de violar os controles de segurança para observar as comunicações.",
      "D. Substituir a captura por varredura ativa com identificação de sistema operacional, uma vez que a análise de tráfego não permite estimar a plataforma dos hosts remotos."
    ],
    "ans": 0,
    "exp": "Capturar dados a partir de um local estratégico na rede, com um network tap ou uma porta span, dá acesso a muito mais tráfego e, portanto, a mais informações sobre o ambiente. A alternativa B subestima a limitação da captura em host único, que identifica sistemas por pacotes de broadcast mas não cobre todo o tráfego. A alternativa C inverte o cenário: equipes internas contam mais facilmente com a captura, enquanto testadores externos ou atacantes é que precisariam violar a segurança. A alternativa D nega que a captura permita fingerprinting de sistema operacional, que é justamente um de seus usos."
  }
];
