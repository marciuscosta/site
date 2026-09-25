// Questões do arquivo Questionario_Cap3.txt, na ordem original.
// Os números do TXT servem apenas como separadores de questões.
const Qs = [
  {
    "t": "Durante a padronização da terminologia interna de segurança, uma analista precisa classificar corretamente o download de um arquivo registrado pelo sistema de monitoramento, sem qualquer indício de violação de política. Como essa ocorrência deve ser tratada?",
    "opts": [
      "A. Como um incidente, por representar movimentação de dados passível de causar dano à organização",
      "B. Como um evento, por se tratar de um acontecimento observável",
      "C. Como um alerta, por ter sido capturado e registrado pela plataforma de monitoramento",
      "D. Como um indicador de comprometimento, por sinalizar possível exfiltração de dados"
    ],
    "ans": 1,
    "exp": "Eventos são acontecimentos observáveis, como um e-mail ou o download de um arquivo, enquanto incidentes envolvem violação de política de segurança, uso ou acesso não autorizado, negação de serviço ou outras ações maliciosas capazes de causar dano. A alternativa A eleva indevidamente a ocorrência à categoria de incidente. A alternativa C confunde o acontecimento com o alerta, que é a notificação gerada quando um evento a provoca. A alternativa D presume malícia sem qualquer sinal que sustente essa leitura."
  },
  {
    "t": "Uma equipe de monitoramento revisa quais sinais de rede merecem investigação por poderem preceder incidentes sérios. Qual conjunto representa esses sinais?",
    "opts": [
      "A. Atualizações de assinatura em endpoints, rotinas de backup noturno e sincronização de diretórios entre filiais",
      "B. Consumo de banda, beaconing, varreduras, tráfego peer-to-peer irregular, tráfego de ataque e dispositivos não autorizados na rede",
      "C. Falhas de autenticação isoladas, expiração de certificados e reinicializações programadas de servidores",
      "D. Erros de aplicação registrados em log, lentidão em consultas de banco de dados e picos de uso de CPU em estações"
    ],
    "ans": 1,
    "exp": "Muitos incidentes começam com tráfego suspeito ou inesperado, que pode se manifestar como consumo de banda, beaconing, varreduras, tráfego peer-to-peer irregular, tráfego de ataque ou dispositivos não autorizados aparecendo na rede. A alternativa A lista atividades operacionais rotineiras. A alternativa C reúne ocorrências administrativas e de manutenção, sem caracterizar tráfego suspeito. A alternativa D descreve sintomas de host e de aplicação, tratados em outra frente da análise, e não os eventos de rede que iniciam a investigação descrita."
  },
  {
    "t": "Uma equipe precisa obter visibilidade sobre como a banda disponível está sendo consumida em toda a rede corporativa. Quais são os métodos comumente utilizados para esse levantamento?",
    "opts": [
      "A. Monitoramento baseado em roteador, monitoramento ativo e monitoramento passivo",
      "B. Captura integral de pacotes, correlação em SIEM e análise forense de endpoints",
      "C. Varreduras autenticadas, sondagens de portas e inventário de dispositivos",
      "D. Monitoramento baseado em agente, inspeção de tráfego criptografado e telemetria de aplicações"
    ],
    "ans": 0,
    "exp": "A visibilidade sobre o uso da banda é obtida normalmente por um de três métodos: monitoramento baseado em roteador, monitoramento ativo ou monitoramento passivo. A alternativa B mistura técnicas de coleta e análise que não constituem essa tríade. A alternativa C descreve atividades de varredura e inventário, voltadas à descoberta de sistemas e serviços. A alternativa D reúne abordagens de instrumentação e inspeção que não correspondem aos métodos padrão de levantamento de uso de banda."
  },
  {
    "t": "Ao revisar registros do NetFlow durante uma investigação, uma analista precisa saber quais informações esses dados oferecem. O que os fluxos permitem observar?",
    "opts": [
      "A. O conteúdo das cargas úteis transmitidas, útil para confirmar exfiltração de arquivos sensíveis",
      "B. Endereços IP de origem e destino, quantidade de pacotes e de dados enviados, além da porta e do protocolo utilizados",
      "C. As credenciais utilizadas na sessão e o usuário autenticado em cada host envolvido",
      "D. O estado operacional das interfaces e a utilização de CPU e memória dos dispositivos de rede"
    ],
    "ans": 1,
    "exp": "Os fluxos mostram origem e destino com seus endereços IP, quantos pacotes foram enviados, quanto de dados trafegou e a porta e o protocolo utilizados, o que permite um bom palpite sobre a aplicação em uso. A alternativa A atribui aos fluxos a inspeção de conteúdo, que eles não realizam. A alternativa C supõe informações de autenticação inexistentes nesse tipo de registro. A alternativa D descreve dados sobre os próprios dispositivos, normalmente coletados via SNMP, e não pelos protocolos de captura de fluxo."
  },
  {
    "t": "Um administrador questiona por que a soma do tráfego registrada pelos coletores de fluxo não corresponde exatamente ao volume total que trafega pelos roteadores. Qual explicação justifica essa diferença?",
    "opts": [
      "A. Os coletores descartam fluxos cujo protocolo não é reconhecido pela plataforma de análise",
      "B. Os roteadores enviam apenas os fluxos relacionados a tráfego destinado à Internet, ignorando o tráfego interno",
      "C. Os fluxos costumam ser amostrados devido à enorme quantidade de dados, com um pacote a cada cem ou mil sendo capturado",
      "D. As informações de fluxo são agregadas por porta e protocolo, o que elimina os registros de menor volume"
    ],
    "ans": 2,
    "exp": "Devido ao volume gigantesco de dados, os fluxos costumam ser amostrados — um em cada mil ou um em cada cem pacotes é capturado, em vez de todos. A alternativa A inventa um descarte por protocolo desconhecido. A alternativa B restringe arbitrariamente a coleta ao tráfego externo, quando roteadores de divisão e de borda enviam dados ao coletor central. A alternativa D confunde a apresentação ordenável dos dados com supressão de registros, que não ocorre por agregação."
  },
  {
    "t": "Uma equipe precisa coletar informações sobre o estado e as características dos próprios roteadores e switches, e não sobre o tráfego que passa por eles. Qual protocolo atende a essa necessidade?",
    "opts": [
      "A. sFlow",
      "B. SNMP",
      "C. J-Flow",
      "D. NetFlow"
    ],
    "ans": 1,
    "exp": "O SNMP é comumente usado para coletar informações de roteadores e outros dispositivos de rede, fornecendo dados sobre os próprios dispositivos, em vez das informações de fluxo de tráfego entregues pelos protocolos de captura de fluxo. As alternativas A, C e D citam justamente esses protocolos de fluxo — sFlow, J-Flow e NetFlow —, que registram informações sobre o tráfego nas interfaces e as enviam a coletores de fluxo, sem detalhar o estado dos equipamentos."
  },
  {
    "t": "Uma organização quer aproveitar os dados de fluxo tanto na operação diária quanto em investigações de segurança. Qual afirmação descreve corretamente esse aproveitamento?",
    "opts": [
      "A. Servem apenas para uso reativo, já que os fluxos são gerados após a conclusão das sessões monitoradas",
      "B. Substituem o uso de SIEM, pois concentram os registros de sistema e de rede em um único repositório",
      "C. Permitem uso proativo, no monitoramento da saúde e dos níveis de tráfego, e reativo, diante de tráfego inesperado ou mudanças repentinas no uso de banda, sendo frequentemente combinados com outros logs em um SIEM",
      "D. Limitam-se a identificar hosts internos que acessam serviços externos conhecidos, como redes de entrega de conteúdo"
    ],
    "ans": 2,
    "exp": "Os dados de fluxo servem proativamente, para monitorar a saúde geral da rede e os níveis de tráfego, e reativamente, diante de tráfego inesperado ou mudanças repentinas no uso de banda, sendo comumente combinados com outros dados de log e eventos em um SIEM ou ferramenta de análise de logs. A alternativa A descarta o uso proativo. A alternativa B trata os fluxos como substitutos do SIEM, quando na prática os alimentam. A alternativa D reduz o valor dos fluxos, que também apoiam a detecção de comunicações inesperadas com sistemas de comando e controle."
  },
  {
    "t": "Uma equipe precisa estabelecer uma linha de base de desempenho para identificar quando os enlaces da rede se aproximarão de seus limites úteis. Qual ferramenta atende diretamente a esse objetivo?",
    "opts": [
      "A. Consulta SNMP periódica às interfaces dos roteadores de borda",
      "B. iPerf, que mede a largura de banda máxima suportada por uma rede IP",
      "C. Script de ping ICMP executado em intervalos regulares contra os hosts críticos",
      "D. Coletor de fluxo alimentado por NetFlow nos roteadores de divisão"
    ],
    "ans": 1,
    "exp": "O iPerf mede a largura de banda máxima que uma rede IP consegue suportar, e seus dados de teste ajudam a estabelecer uma linha de base de desempenho para identificar quando a rede atingirá seus limites úteis. A alternativa A coleta informações sobre os próprios dispositivos, sem medir a capacidade máxima do enlace. A alternativa C fornece apenas informações básicas de ativo/inativo. A alternativa D registra o tráfego que efetivamente passou pelos dispositivos, sem determinar o teto de capacidade da rede."
  },
  {
    "t": "Durante um período de congestionamento severo na rede, a equipe percebe que dados do sistema de monitoramento chegaram incompletos e com atraso. Qual explicação justifica esse comportamento?",
    "opts": [
      "A. Os monitores ativos deixam de coletar dados quando não recebem resposta ICMP dos sistemas remotos",
      "B. O monitoramento ativo depende exclusivamente de coletores centrais, que descartam registros durante picos de utilização",
      "C. Monitoramento ativo e baseado em roteador adicionam tráfego à rede, e seus dados podem ser perdidos ou atrasados quando tráfego de maior prioridade é privilegiado",
      "D. Ferramentas completas de monitoramento suspendem a coleta automaticamente para evitar impacto sobre o desempenho da rede"
    ],
    "ans": 2,
    "exp": "Tanto o monitoramento ativo quanto o baseado em roteador acrescentam tráfego à rede, competindo com aquilo que monitoram; diante de problemas significativos de utilização de banda, esses dados podem ser perdidos ou atrasados, já que tráfego de maior prioridade tende a ser privilegiado. A alternativa A confunde ausência de resposta com interrupção da coleta. A alternativa B contraria a natureza do monitoramento ativo, em que o próprio monitor costuma ser o local de coleta. A alternativa D atribui às ferramentas uma suspensão automática que não descreve o comportamento observado."
  },
  {
    "t": "Uma analista precisa observar detalhadamente taxa, protocolo e conteúdo do tráfego trocado entre dois sistemas críticos, sem acrescentar qualquer carga adicional ao enlace já saturado. Qual abordagem atende a esse requisito, e qual limitação ela impõe?",
    "opts": [
      "A. Monitoramento passivo com network tap, que não adiciona tráfego à rede, mas realiza análise a posteriori, pois os pacotes precisam ser capturados e analisados",
      "B. Monitoramento baseado em roteador com exportação de fluxos, que oferece visão em tempo real do enlace sem consumir banda adicional",
      "C. Monitoramento ativo com testes de largura de banda, que mede o desempenho do enlace sem interferir nas sessões em andamento",
      "D. Consulta SNMP às interfaces envolvidas, que entrega o conteúdo das sessões sem gerar tráfego perceptível"
    ],
    "ans": 0,
    "exp": "O monitoramento passivo usa um network tap para copiar o tráfego do enlace, fornecendo visão detalhada de taxa, protocolo e conteúdo; ao contrário do ativo e do baseado em roteador, não adiciona tráfego à rede, mas faz análise a posteriori, já que os pacotes precisam ser capturados e analisados. A alternativa B atribui ao monitoramento por fluxos uma característica que ele não tem: esse método acrescenta tráfego à rede. A alternativa C descreve monitoramento ativo, que também insere tráfego no enlace. A alternativa D atribui ao SNMP a entrega de conteúdo das sessões, algo fora de seu escopo."
  },
  {
    "t": "Uma organização quer ser notificada automaticamente quando a utilização de banda ultrapassar patamares definidos pela equipe de rede. Qual abordagem atende diretamente a esse requisito?",
    "opts": [
      "A. Configurar gráficos em tempo real ou quase em tempo real para acompanhar o uso conforme ele ocorre",
      "B. Revisar periodicamente os dados de fluxo em busca de tendências que indiquem pico de utilização",
      "C. Coletar dados de SNMP para observar carga alta nos roteadores e demais dispositivos de rede",
      "D. Empregar ferramentas de monitoramento que verifiquem níveis altos de uso e enviem alarmes com base em limiares"
    ],
    "ans": 3,
    "exp": "Ferramentas de monitoramento podem verificar níveis altos de uso e disparar alarmes com base em limiares, que é exatamente a notificação automática pedida. A alternativa A oferece visualização contínua, mas depende de alguém observando os gráficos. A alternativa B trabalha com tendências e status a partir de dados de fluxo, útil para identificar picos já ocorridos, sem gerar o alarme por limiar. A alternativa C fornece indícios de carga alta no nível do dispositivo, porém não descreve o mecanismo de alarme baseado em limiar."
  },
  {
    "t": "Uma equipe de segurança precisa reduzir o risco de exfiltração de dados em um ambiente com grande volume de tráfego criptografado saindo para destinos externos. Qual conjunto de medidas é o mais adequado?",
    "opts": [
      "A. Combinar detecção de anomalias e análise de comportamento com tecnologias de prevenção de perda de dados, sabendo que proteger os dados contra o acesso é uma solução melhor do que tentar impedir a saída",
      "B. Bloquear todo o tráfego criptografado com destino externo, eliminando a possibilidade de dados sensíveis saírem sem inspeção",
      "C. Concentrar o esforço em provar, por meio de análise retroativa dos fluxos, que nenhum dado sensível deixou a rede",
      "D. Ampliar os limiares de alarme de banda, de modo que apenas transferências volumosas gerem notificação à equipe"
    ],
    "ans": 0,
    "exp": "Detecção de anomalias, análise de comportamento e soluções de prevenção de perda de dados ajudam quando a rede é bem controlada e compreendida, mas atacantes determinados tendem a encontrar formas de roubar dados, o que torna a proteção contra o acesso a melhor solução. A alternativa B propõe um bloqueio inviável para operações legítimas. A alternativa C persegue uma prova quase impossível de obter. A alternativa D afrouxa o monitoramento justamente onde a visibilidade é necessária."
  },
  {
    "t": "Durante a revisão do tráfego de saída, um analista observa que um servidor de arquivos iniciou conexões com um sistema externo e transferiu um volume elevado de dados. Por que esse comportamento merece investigação?",
    "opts": [
      "A. Porque servidores não deveriam alcançar sistemas externos, e grandes transferências a partir de repositórios sensíveis não são esperadas",
      "B. Porque toda transferência volumosa caracteriza indisponibilidade iminente do enlace corporativo",
      "C. Porque comunicações criptografadas com destinos externos confirmam a presença de canal de comando e controle",
      "D. Porque o consumo de banda gerado interrompe funções de negócio e caracteriza, por si só, um incidente de segurança"
    ],
    "ans": 0,
    "exp": "Em uma rede bem controlada e compreendida, servidores não deveriam alcançar sistemas externos, e grandes transferências de dados a partir de repositórios de arquivos sensíveis para sistemas externos não deveriam ser esperadas — daí o sinal de alerta. A alternativa B generaliza volume como falha de disponibilidade. A alternativa C transforma criptografia em prova de atividade maliciosa, quando ela apenas dificulta distinguir tráfego legítimo de exfiltração. A alternativa D confunde consumo de banda com a classificação automática de um incidente."
  },
  {
    "t": "Qual dos seguintes comandos Linux mostrará quanto espaço em disco está sendo utilizado?",
    "opts": [
      "A) top",
      "B) df",
      "C) lsof",
      "D) ps"
    ],
    "ans": 1,
    "exp": "O comando df mostrará a utilização atual do disco de um sistema. Tanto o comando top quanto o comando ps mostrarão informações sobre processos, CPU e utilização de memória, enquanto lsof é uma ferramenta multifuncional para listar arquivos abertos."
  },
  {
    "t": "Qual ferramenta do Windows fornece informações detalhadas, incluindo informações sobre controladores de host USB, uso de memória e transferências de disco?",
    "opts": [
      "A) Statmon",
      "B) Resmon",
      "C) Perfmon",
      "D) Winmon"
    ],
    "ans": 2,
    "exp": "Perfmon, ou Monitor de Desempenho, permite coletar estatísticas detalhadas de uso de muitos itens no Windows. Resmon, ou Monitor de Recursos, monitora a CPU, a memória e o uso do disco, mas não fornece informações sobre itens como controladores de host USB e outros recursos detalhados de instrumentação. Statmon e winmon não são ferramentas integradas ao Windows."
  },
  {
    "t": "Uma analista observa que uma estação interna realiza requisições HTTP a um mesmo destino remoto em intervalos regulares de dez segundos, com pouco volume de dados em cada conexão. O que esse padrão sugere?",
    "opts": [
      "A. Comportamento de beaconing, típico de comunicação com um sistema de comando e controle",
      "B. Varredura de portas conduzida a partir do host interno contra o destino externo",
      "C. Exfiltração de dados em andamento a partir de um repositório de arquivos sensíveis",
      "D. Consumo excessivo de banda provocado por falha de configuração da aplicação"
    ],
    "ans": 0,
    "exp": "O beaconing é atividade repetida enviada a um sistema C&C, normalmente como tráfego HTTP ou HTTPS, para solicitar comandos, informar status ou baixar malware adicional — o padrão regular e de baixo volume descrito. A alternativa B não corresponde a conexões repetidas a um único destino. A alternativa C exigiria transferências volumosas, incompatíveis com o pouco tráfego observado. A alternativa D atribui o padrão a um problema de configuração, quando a regularidade e o destino externo apontam para controle remoto de malware."
  },
  {
    "t": "Uma equipe precisa estruturar a detecção de infecções por malware que se comunicam com controladores externos. Qual abordagem é a mais adequada?",
    "opts": [
      "A. Priorizar a captura detalhada de pacotes em cada segmento, já que ferramentas de análise de tráfego oferecem a visão mais ampla da rede",
      "B. Concentrar os controles na inspeção do tráfego de entrada, ponto em que a comunicação com controladores externos é estabelecida",
      "C. Bloquear todo o tráfego HTTPS de saída, eliminando o canal criptografado usado por esse tipo de comunicação",
      "D. Usar IDS ou IPS com regras que identifiquem controladores de botnet conhecidos ou comportamentos específicos de botnet, somados à análise de fluxo do tráfego de saída"
    ],
    "ans": 3,
    "exp": "A detecção de beaconing costuma ser feita com IDS ou IPS usando regras que identificam controladores de botnet conhecidos ou comportamentos específicos de botnet, complementados por análise de fluxo e monitoramento de tráfego para flagrar tráfego inesperado de saída. A alternativa A inverte os papéis: captura direta serve à análise detalhada, enquanto fluxos, IDS e IPS oferecem a visão ampla. A alternativa B ignora que inspecionar o tráfego de saída é tão importante quanto tratar o de entrada. A alternativa C propõe um bloqueio inviável para as operações legítimas."
  },
  {
    "t": "Um analista suspeita que um atacante tenha configurado um serviço em uma porta alternativa para escapar dos controles existentes, e precisa confirmar se um protocolo comum está trafegando por uma porta incomum. Qual técnica é a mais indicada?",
    "opts": [
      "A. Análise de protocolo, capturando pacotes para verificar qual protocolo está efetivamente em uso",
      "B. Detecção baseada em anomalias, comparando o volume atual com a linha de base documentada",
      "C. Heurísticas, aplicando regras definidas para varreduras, sondagens e tráfego de ataque",
      "D. Observação manual do tráfego trocado entre os sistemas envolvidos"
    ],
    "ans": 0,
    "exp": "A análise de protocolo usa um analisador para capturar pacotes e ajuda a identificar quando protocolos comuns estão sendo enviados por uma porta incomum, o que pode indicar um atacante configurando uma porta de serviço alternativa. A alternativa B compara desvios de volume e comportamento em relação à linha de base, sem revelar qual protocolo trafega na porta. A alternativa C aplica regras voltadas a varreduras, sondagens e tráfego de ataque, categorias diferentes do achado descrito. A alternativa D é pouco prática e não substitui a inspeção dos pacotes."
  },
  {
    "t": "Uma organização recém-instrumentada quer configurar alarmes que disparem quando o comportamento da rede se afastar do padrão habitual. Qual pré-requisito é indispensável para essa abordagem?",
    "opts": [
      "A. Definir regras específicas para varreduras, sondagens amplas e tráfego de ataque nos dispositivos de segurança",
      "B. Implantar analisadores de protocolo nos principais enlaces para inspecionar o conteúdo dos pacotes",
      "C. Habilitar as capacidades de detecção baseadas em comportamento embutidas nos IDSs e IPSs existentes",
      "D. Coletar dados de linha de base durante operações normais, estabelecendo o que constitui tráfego normal"
    ],
    "ans": 3,
    "exp": "Linhas de base, ou detecção baseada em anomalias, exigem conhecimento do que é o tráfego normal, coletado durante operações normais da rede; só então os sistemas podem alarmar quando a linha de base é excedida por um limiar ou quando o comportamento se desvia do documentado. A alternativa A descreve heurísticas, apoiadas em regras definidas, e não em desvio do padrão habitual. A alternativa B trata de análise de protocolo, voltada à inspeção de pacotes. A alternativa C ativa recursos de detecção, mas não supre a ausência do referencial de normalidade."
  },
  {
    "t": "O SOC de uma empresa habilitou a detecção de varreduras em firewalls e IPSs e passou a receber um volume muito alto de alertas diários, sem ação prática possível sobre a maior parte deles. Qual conduta é a mais adequada?",
    "opts": [
      "A. Desabilitar a detecção de varreduras nesses dispositivos, já que varreduras não representam ameaça significativa à infraestrutura",
      "B. Bloquear automaticamente todos os endereços de origem identificados, interrompendo as sondagens na borda",
      "C. Encaminhar os dados de detecção de varreduras a uma ferramenta de gerenciamento de informações de segurança, combinando-os com dados de ataques e outros eventos",
      "D. Restringir a detecção apenas às varreduras furtivas, que são as mais difíceis de identificar em meio ao ruído da rede"
    ],
    "ans": 2,
    "exp": "Habilitar essas capacidades gera muito ruído e, na maioria dos casos, há pouco a fazer diante de uma varredura; por isso muitas organizações alimentam esses dados em uma ferramenta de gerenciamento de informações de segurança, combinando-os com dados de ataques e outros eventos, em vez de responder diretamente. A alternativa A descarta um sinal que precede ataques direcionados. A alternativa B automatiza bloqueios sobre atividade de baixo valor, ampliando o risco operacional. A alternativa D cria uma configuração arbitrária, sem resolver o excesso de alertas."
  },
  {
    "t": "Durante a análise de logs de borda, um analista identifica conexões sequenciais a diversas portas de serviço, tentativas contra muitos endereços IP da faixa corporativa e requisições repetidas a serviços que não estão ativos. Qual leitura é a mais apropriada?",
    "opts": [
      "A. Trata-se de tráfego peer-to-peer irregular entre sistemas que não deveriam se comunicar diretamente",
      "B. Trata-se de varredura ou sondagem, atividade de baixo impacto direto, porém frequentemente precursora de ataques mais direcionados",
      "C. Trata-se de comportamento de beaconing, com o host informando status a um controlador externo",
      "D. Trata-se de exfiltração de dados disfarçada em múltiplas conexões de curta duração"
    ],
    "ans": 1,
    "exp": "Teste sequencial de portas de serviço, conexões a muitos endereços IP e requisições repetidas a serviços possivelmente inativos são comportamentos típicos de varreduras e sondagens, que não costumam ser ameaças significativas por si mesmas, mas frequentemente antecedem ataques mais direcionados. A alternativa A descreve comunicação direta entre sistemas internos, padrão distinto do observado. A alternativa C exigiria contatos regulares a um mesmo destino externo. A alternativa D pressupõe transferência de dados, incompatível com tentativas contra serviços inativos."
  },
  {
    "t": "Uma equipe está estruturando o monitoramento para identificar ataques de negação de serviço contra a infraestrutura da empresa. Por que é necessário cobrir rede, sistema e serviço simultaneamente?",
    "opts": [
      "A. Porque ataques DoS sempre combinam volume de tráfego com exploração de vulnerabilidades de aplicação",
      "B. Porque cada padrão de ataque DoS exige métodos de detecção ligeiramente diferentes",
      "C. Porque ataques distribuídos só podem ser detectados quando os três níveis reportam ao mesmo coletor",
      "D. Porque a distinção entre DoS e DDoS depende exclusivamente da camada em que o tráfego é observado"
    ],
    "ans": 1,
    "exp": "Os padrões de ataque DoS — sobrecarga por volume, exploração de vulnerabilidade específica e ataque a um sistema ou rede intermediário — exigem métodos de detecção ligeiramente diferentes, de modo que o monitoramento de rede, sistema e serviço precisa cobrir múltiplos tipos de ataque. A alternativa A trata como obrigatória uma combinação que não se aplica a todos os casos. A alternativa C condiciona a detecção de DDoS a uma centralização que não é o motivo apontado. A alternativa D reduz a diferença entre DoS e DDoS à camada observada, quando ela está na origem do ataque."
  },
  {
    "t": "Um serviço interno ficou indisponível após receber requisições que exploraram uma falha específica da aplicação, sem que houvesse aumento significativo no volume de tráfego. Como esse evento deve ser classificado?",
    "opts": [
      "A. Como consumo de banda anômalo, já que o serviço deixou de responder às requisições legítimas",
      "B. Como tráfego inesperado em porta não prevista, característico de serviço alternativo criado por atacante",
      "C. Como sondagem de serviço, precursora de um ataque mais direcionado contra a aplicação",
      "D. Como ataque de negação de serviço explorando vulnerabilidade específica para fazer o serviço falhar"
    ],
    "ans": 3,
    "exp": "Um dos padrões de ataque DoS consiste em atacar uma vulnerabilidade específica de serviço ou sistema para provocar sua falha, sem depender de volume elevado de tráfego. A alternativa A atribui o efeito ao consumo de banda, que não ocorreu. A alternativa B descreve atividade em portas inesperadas, cenário distinto do relatado. A alternativa C caracteriza reconhecimento, e não a indisponibilidade efetiva provocada pela exploração da falha."
  },
  {
    "t": "Uma analista avalia por que ataques DoS originados de um único sistema são menos prováveis do que ataques distribuídos. Qual afirmação sustenta corretamente essa avaliação?",
    "opts": [
      "A. Um único sistema raramente consegue sobrecarregar o alvo, salvo quando há vulnerabilidade específica de serviço ou aplicação, ou quando o alvo tem banda e recursos limitados",
      "B. Um único sistema é sempre bloqueado automaticamente pelos IPSs antes de causar qualquer impacto no alvo",
      "C. Ataques de origem única não afetam a disponibilidade, pois apenas ataques distribuídos impedem o acesso a sistemas e serviços",
      "D. Ataques de origem única exigem comprometimento prévio de sistemas intermediários, o que torna sua execução mais complexa"
    ],
    "ans": 0,
    "exp": "Ataques DoS de sistema único são menos prováveis que os distribuídos, exceto quando o alvo sofre de vulnerabilidade específica de serviço ou aplicação ou pode ser facilmente sobrecarregado por um único sistema remoto em razão de banda ou recursos limitados. A alternativa B trata o bloqueio por IPS como automático e infalível, quando esses dispositivos bloqueiam tráfego de ataque conhecido. A alternativa C nega que ataques de origem única impeçam o acesso, contrariando o objetivo comum a todo DoS. A alternativa D descreve um pré-requisito inexistente."
  },
  {
    "t": "Durante a resposta a um incidente, um analista utiliza o netstat em um servidor afetado para investigar as conexões estabelecidas. Qual limitação dessa abordagem ele deve considerar?",
    "opts": [
      "A. Ferramentas de linha de comando não conseguem exibir conexões originadas de sistemas remotos comprometidos",
      "B. A análise local auxilia na solução de problemas no servidor, mas a perspectiva da rede ou do serviço oferece uma visão mais ampla do problema",
      "C. O uso dessas ferramentas durante o incidente altera os registros de conexão e compromete a análise posterior",
      "D. A coleta local só é válida quando o ataque parte de um único sistema, perdendo utilidade em cenários distribuídos"
    ],
    "ans": 1,
    "exp": "Ferramentas de linha de comando como o netstat ajudam na solução de problemas em servidores locais, mas uma visão pela perspectiva da rede ou do serviço normalmente fornece um panorama mais amplo do problema. A alternativa A nega uma capacidade básica dessas ferramentas. A alternativa C atribui a elas um efeito destrutivo sobre os registros que não ocorre. A alternativa D condiciona a utilidade da análise local à origem única do ataque, restrição que não se sustenta."
  },
  {
    "t": "Uma equipe precisa montar uma capacidade eficaz de detecção de ataques DoS e DDoS. Qual conjunto de recursos atende a esse objetivo?",
    "opts": [
      "A. Monitoramento de desempenho de serviço, monitoramento de conexões por logs locais ou de aplicação, monitoramento de banda de rede ou de sistema e IDS/IPS com regras de DoS e DDoS habilitadas",
      "B. Detecção de varreduras habilitada em firewalls, somada a análise de fluxo e correlação de eventos em SIEM",
      "C. Inspeção de tráfego criptografado, análise de protocolo e captura integral de pacotes nos enlaces de borda",
      "D. Prevenção de perda de dados, análise de comportamento e detecção de anomalias baseada em linha de base"
    ],
    "ans": 0,
    "exp": "Como há muitas variações de DoS e DDoS, a detecção eficaz envolve múltiplas ferramentas: monitoramento de desempenho de serviço, monitoramento de conexões via logs de sistema ou aplicação, monitoramento de banda de rede ou de sistema e ferramentas dedicadas como IDSs e IPSs com regras específicas habilitadas. A alternativa B trata de detecção de varreduras e correlação de eventos. A alternativa C reúne técnicas de inspeção de tráfego voltadas a outros propósitos. A alternativa D descreve controles de proteção de dados e detecção de anomalias, fora do conjunto indicado."
  },
  {
    "t": "Um analista precisa explicar à diretoria por que ataques DDoS são mais difíceis de deter do que ataques originados de um único sistema. Qual afirmação sustenta corretamente essa explicação?",
    "opts": [
      "A. Ataques distribuídos exploram vulnerabilidades específicas de serviço, o que impede o bloqueio por dispositivos de rede",
      "B. Ataques distribuídos utilizam exclusivamente serviços comerciais de teste de carga, cujos endereços não podem ser bloqueados",
      "C. Ataques distribuídos atingem simultaneamente rede, sistema e serviço, o que inviabiliza qualquer forma de detecção",
      "D. O tráfego vem de muitos sistemas ou redes ao mesmo tempo, frequentemente compostos por máquinas comprometidas em botnets, o que dificulta detectar e deter o ataque"
    ],
    "ans": 3,
    "exp": "Ataques DDoS partem de muitos sistemas ou redes simultaneamente, o que dificulta a detecção por o tráfego vir de vários lugares e torna a contenção muito mais difícil; muitos deles são formados por sistemas comprometidos em botnets, com centenas ou milhares de origens. A alternativa A associa o problema à exploração de vulnerabilidades, mecanismo de outro padrão de ataque. A alternativa B trata serviços de teste de carga como origem exclusiva. A alternativa C afirma que a detecção seria inviável, o que contraria a existência de capacidades específicas para esse fim."
  },
  {
    "t": "Uma equipe mantém uma lista de endereços de hardware conhecidos e a utiliza como principal critério para identificar dispositivos não autorizados na rede corporativa. Qual limitação dessa abordagem deve ser considerada?",
    "opts": [
      "A. Endereços MAC podem ser alterados e sistemas operacionais modernos aplicam randomização de MAC, o que dificulta concluir sobre a legitimidade de um dispositivo apenas por essa verificação",
      "B. A verificação de MAC identifica apenas dispositivos sem fio, deixando a rede cabeada sem qualquer cobertura",
      "C. A lista de endereços conhecidos só é válida quando combinada com levantamentos físicos periódicos no local",
      "D. O prefixo de fabricante presente no endereço impede a validação contra listas de dispositivos conhecidos"
    ],
    "ans": 0,
    "exp": "É possível alterar endereços MAC, e a randomização de MAC foi introduzida como recurso de segurança em sistemas operacionais modernos, incluindo iOS e Android, o que torna difícil determinar a legitimidade de um dispositivo apenas comparando seu endereço com uma lista conhecida. A alternativa B restringe indevidamente o método a redes sem fio. A alternativa C transforma um método complementar em condição de validade. A alternativa D inverte o papel do prefixo de fabricante, que ajuda a identificar o equipamento pelo fabricante."
  },
  {
    "t": "Que tipo de informação de rede você deve capturar para poder fornecer um relatório sobre quanto tráfego os sistemas de sua rede enviam para sistemas remotos?",
    "opts": [
      "A) Dados de syslog",
      "B) Dados de WMI",
      "C) Dados de Resmon",
      "D) Dados de fluxo"
    ],
    "ans": 3,
    "exp": "Os dados de fluxo fornecem informações sobre os endereços IP de origem e destino, o protocolo e o total de dados enviados, oferecendo os detalhes necessários. Os dados de syslog, WMI e resmon são todos informações de logs do sistema e não forneceriam essas informações."
  },
  {
    "t": "Qual das seguintes tecnologias é a mais adequada para impedir que dispositivos cabeados não autorizados se conectem a uma rede?",
    "opts": [
      "A) NAC",
      "B) PRTG",
      "C) Segurança de porta",
      "D) NTP"
    ],
    "ans": 0,
    "exp": "O controle de acesso à rede (NAC) pode ser configurado para exigir autenticação. A segurança de porta limita-se a reconhecer endereços MAC, o que a torna menos adequada para impedir a conexão de dispositivos não autorizados. PRTG é uma ferramenta de monitoramento, e NTP é o Protocolo de Tempo de Rede."
  },
  {
    "t": "Uma organização suspeita da presença de pontos de acesso sem fio irregulares instalados por funcionários em uma de suas unidades. Qual método é o mais indicado para confirmar essa suspeita?",
    "opts": [
      "A. Varredura de rede com nmap a partir do data center central",
      "B. Análise de tráfego em busca de comportamento irregular ou inesperado",
      "C. Levantamento de local, revisando fisicamente os dispositivos e verificando as redes sem fio no próprio local",
      "D. Verificação das informações de fabricante a partir dos prefixos dos endereços MAC observados"
    ],
    "ans": 2,
    "exp": "Levantamentos de local envolvem revisar fisicamente os dispositivos de um local, por verificação manual ou pela checagem das redes sem fio presentes ali — abordagem adequada para localizar pontos de acesso irregulares na unidade. A alternativa A identifica novos dispositivos alcançáveis pela varredura, mas não localiza fisicamente equipamentos sem fio. A alternativa B pode levantar indícios, sem confirmar a presença física. A alternativa D apenas sugere o fabricante do equipamento, informação insuficiente e sujeita a alteração do endereço."
  },
  {
    "t": "Uma equipe de segurança quer ampliar a detecção de ataques baseados em rede combinando visibilidade central com monitoramento no próprio dispositivo do usuário. Qual conjunto atende a esse objetivo?",
    "opts": [
      "A. Feeds de regras atualizados para IDS/IPS somados a levantamentos periódicos de local nas unidades",
      "B. Varredura de rede recorrente com nmap e verificação dos endereços MAC contra a lista de dispositivos conhecidos",
      "C. Monitoramento de fluxos e SNMP, complementado por análise de tráfego em busca de comportamento inesperado",
      "D. Envio de logs de firewalls, roteadores e switches a um sistema central de análise, com SIEM alarmando sobre tráfego problemático, e ferramentas de EDR monitorando o comportamento de rede no endpoint"
    ],
    "ans": 3,
    "exp": "A detecção de ataques de rede combina técnicas como centralizar logs de firewalls, roteadores e switches em um sistema de análise, usar SIEM para revisar e alarmar automaticamente sobre tráfego problemático e implantar EDR no host para monitorar o comportamento de rede no nível do endpoint — exatamente a soma pedida. A alternativa A mistura atualização de regras com inspeção física. As alternativas B e C descrevem métodos voltados à identificação de dispositivos e comportamentos, sem a camada de monitoramento no endpoint."
  },
  {
    "t": "Uma organização implanta filtragem de endereços MAC nas portas de acesso para impedir conexões não autorizadas na rede cabeada. Qual avaliação o analista de segurança deve apresentar sobre esse controle?",
    "opts": [
      "A. Detém tentativas casuais de conexão, mas não impede atacantes determinados, que podem substituir um dispositivo legítimo e configurar o MAC para coincidir com o do equipamento confiável",
      "B. Elimina o risco de dispositivos não autorizados com fio, desde que a lista de endereços confiáveis seja revisada periodicamente",
      "C. É eficaz apenas contra dispositivos conectados por funcionários, pois atacantes externos não conseguem acesso físico às portas de rede",
      "D. Substitui integralmente a necessidade de NAC, já que ambos os controles verificam a identidade do dispositivo antes da conexão"
    ],
    "ans": 0,
    "exp": "A filtragem de endereços MAC deterá tentativas casuais de conexão, mas não atacantes determinados, que apenas precisam substituir um dispositivo legítimo pelo próprio, com o MAC ajustado para coincidir com o do dispositivo confiável. A alternativa B trata o controle como eliminação total do risco. A alternativa C presume que atacantes não obtêm acesso físico, quando um rogue com fio pode justamente indicar isso. A alternativa D descarta o NAC, que exige autenticação na rede e oferece uma proteção distinta."
  },
  {
    "t": "Durante uma varredura de descoberta, um analista encontra um host com as portas 53, 80 e 1723 abertas, identificado pela detecção de sistema operacional como possível telefone VoIP, firewall ou dispositivo embarcado, sem correspondência exata. O que esse resultado indica?",
    "opts": [
      "A. Que o dispositivo é certamente um ponto de acesso instalado por um atacante para interceptar tráfego",
      "B. Que a detecção falhou e nada pode ser concluído até que o endereço MAC seja comparado à lista de dispositivos conhecidos",
      "C. Que o equipamento não corresponde a um desktop típico, sendo um forte candidato a dispositivo não autorizado conectado à rede",
      "D. Que o host é legítimo, já que serviços de nome e web são comuns em servidores corporativos de infraestrutura"
    ],
    "ans": 2,
    "exp": "Mesmo sem identificação exata, a varredura com detecção de sistema operacional evidencia que o equipamento não é um desktop típico, aparecendo como possível telefone VoIP, firewall ou dispositivo embarcado — indício útil para localizar um dispositivo não autorizado conectado à rede. A alternativa A afirma uma certeza que a saída não sustenta. A alternativa B descarta a informação obtida e recorre a um método sujeito a alteração de endereço. A alternativa D interpreta as portas abertas como prova de legitimidade, desconsiderando o perfil do dispositivo."
  },
  {
    "t": "Usuários relatam que se conectaram a uma rede sem fio com nome idêntico ao da rede corporativa, mas mantida por terceiros. Qual medida ajuda a prevenir esse tipo de problema?",
    "opts": [
      "A. Executar levantamentos de local trimestrais para inventariar fisicamente os equipamentos instalados nas unidades",
      "B. Exigir autenticação via NAC antes de liberar qualquer conexão à rede interna da organização",
      "C. Mapear a área por intensidade de sinal sempre que houver relato de conexões suspeitas dos usuários",
      "D. Utilizar controladores sem fio corporativos capazes de detectar interferência e reportá-la, ou até sobrepô-la automaticamente"
    ],
    "ans": 3,
    "exp": "Dispositivos não autorizados sem fio podem falsificar redes legítimas, convencendo usuários de que fazem parte da rede corporativa, geralmente sobrepondo os pontos de acesso legítimos; controladores sem fio corporativos que detectam interferência e a reportam, ou a sobrepõem automaticamente, ajudam a prevenir o problema. A alternativa A atua após o fato e de forma esporádica. A alternativa B protege o acesso à rede interna, sem impedir a falsificação do sinal. A alternativa C auxilia a localizar o dispositivo, mas é uma resposta, não uma prevenção."
  },
  {
    "t": "Um servidor que historicamente mantém uso de CPU estável passa a apresentar picos súbitos de consumo do processador. Qual interpretação é a mais adequada?",
    "opts": [
      "A. O comportamento confirma a presença de malware em execução no servidor, já que o padrão histórico foi rompido",
      "B. O comportamento pode indicar novo software ou um processo que não estava ativo anteriormente, e a carga de CPU isolada não conta a história completa",
      "C. O comportamento aponta necessariamente para uma condição de negação de serviço em andamento contra o servidor",
      "D. O comportamento indica alocação insuficiente de memória pela aplicação, refletida como carga adicional no processador"
    ],
    "ans": 1,
    "exp": "Picos súbitos ou aumento no consumo de CPU em um sistema com níveis normalmente consistentes podem indicar novo software ou processo que não estava ativo antes, e a informação de carga de CPU, usada isoladamente, normalmente não conta a história completa. A alternativa A afirma uma conclusão que o indicador sozinho não sustenta. A alternativa C trata como certeza o que se associa a níveis consistentemente altos, não a picos súbitos. A alternativa D descreve o resultado Buffer Overflow do Windows, ligado à alocação de memória."
  },
  {
    "t": "Uma equipe precisa definir alarmes de memória para um conjunto de servidores de aplicação. Qual abordagem é a mais apropriada?",
    "opts": [
      "A. Definir um percentual fixo de alarme igual para todos os servidores, independentemente da carga de trabalho de cada um",
      "B. Monitorar o conteúdo armazenado em memória, de modo a identificar ataques baseados em memória antes que causem impacto",
      "C. Acompanhar o uso de memória durante períodos normais e de pico e, a partir desses dados, definir limiares de monitoramento, incluindo um nível de emergência para condições de falta de memória",
      "D. Aguardar a ocorrência de condições de falta de memória para dimensionar os limiares com base nos incidentes registrados"
    ],
    "ans": 2,
    "exp": "As organizações costumam definir níveis de alarme e notificação com base no consumo típico de memória, acrescentando um nível de emergência para quando o sistema ou aplicação se aproxima de uma condição de falta de memória; isso é identificado acompanhando o uso durante períodos normais e de pico e definindo os limiares a partir desses dados. A alternativa A ignora o comportamento específico de cada sistema. A alternativa B contraria o foco do monitoramento, que recai sobre utilização e identificação de processos. A alternativa D adota postura reativa, deixando os servidores sem alarme até a primeira falha."
  },
  {
    "t": "Durante a análise de um problema de memória em um servidor Windows, o analista encontra um código de resultado identificado como Buffer Overflow. Como esse achado deve ser interpretado?",
    "opts": [
      "A. Como indicação de que uma aplicação solicitou dados sem ter espaço de memória suficiente alocado",
      "B. Como evidência de exploração ativa de uma falha de memória no sistema operacional",
      "C. Como sinal de que as proteções embutidas no gerenciamento de memória do sistema falharam durante a compilação do código",
      "D. Como um alarme de emergência disparado por aproximação de uma condição de falta de memória"
    ],
    "ans": 0,
    "exp": "No Windows, o código de resultado Buffer Overflow não significa ataque: ele indica que uma aplicação solicitou dados, mas não tinha espaço de memória suficiente alocado. A alternativa B interpreta o código como exploração ativa, leitura equivocada. A alternativa C atribui o resultado a falha das proteções de gerenciamento de memória, que atuam no sistema operacional ou na compilação do código. A alternativa D confunde o código com os alarmes configurados pela organização a partir de limiares de monitoramento."
  },
  {
    "t": "Uma organização acompanha o uso de disco de seus servidores por meio de relatórios gerados uma vez ao dia e, mesmo assim, sofreu uma interrupção causada por um volume cheio. Qual ajuste é o mais adequado?",
    "opts": [
      "A. Adotar monitoramento de disco em tempo real, já que discos podem encher rapidamente e o relatório diário reage tarde demais",
      "B. Ampliar a capacidade dos volumes afetados, eliminando a necessidade de acompanhamento contínuo do consumo",
      "C. Substituir o acompanhamento de capacidade por monitoramento de integridade de arquivos, que detecta alterações à medida que ocorrem",
      "D. Concentrar o monitoramento nos servidores Windows por meio do SCOM, por serem os mais suscetíveis a esgotamento de disco"
    ],
    "ans": 0,
    "exp": "O monitoramento de disco em tempo real ajuda a evitar interrupções e problemas com mais facilidade do que um relatório diário, porque os discos podem encher rapidamente. A alternativa B trata o sintoma sem restabelecer a visibilidade necessária. A alternativa C troca um controle por outro de propósito distinto: a integridade de arquivos observa arquivos, permissões, propriedade e atributos, não o esgotamento de capacidade. A alternativa D restringe arbitrariamente o escopo a uma plataforma, quando ferramentas de monitoramento existem para todos os principais sistemas operacionais."
  },
  {
    "t": "Uma equipe avalia a implantação de uma ferramenta de monitoramento de integridade de arquivos nos servidores de produção. Qual consideração deve fazer parte dessa avaliação?",
    "opts": [
      "A. A ferramenta elimina a necessidade de verificação manual de arquivos, já que compara automaticamente os binários com bases públicas de assinaturas",
      "B. A ferramenta atua apenas sobre o conteúdo dos arquivos, sem cobrir permissões, propriedade ou atributos",
      "C. O trade-off está no ruído gerado por alterações que fazem parte da operação normal, em contraste com a captura de alterações inesperadas",
      "D. A ferramenta precisa ser executada em janelas programadas, pois o monitoramento contínuo impede a detecção de ataques em andamento"
    ],
    "ans": 2,
    "exp": "O trade-off da maioria desses produtos é o nível de ruído associado a alterações do sistema de arquivos que fazem parte da operação normal, em contraste com a captura de alterações inesperadas. A alternativa A dispensa a verificação manual com checksums conhecidos, que segue sendo prática de muitos respondedores de incidentes. A alternativa B reduz o escopo da ferramenta, que também acompanha permissões, propriedade e atributos. A alternativa D inverte o benefício: monitorar em tempo real ajuda justamente a flagrar ataques enquanto ocorrem."
  },
  {
    "t": "Como parte de seu trabalho, Danielle configura um alarme para notificar sua equipe por e-mail se seu servidor Windows utilizar 80% da memória e para enviar uma mensagem de texto se a utilização atingir 90%. Como essa configuração é chamada?",
    "opts": [
      "A) Um limiar de monitoramento",
      "B) Um nível de notificação predefinido",
      "C) Monitoramento de páginas",
      "D) Calibração do Perfmon"
    ],
    "ans": 0,
    "exp": "Um limiar de monitoramento é definido para determinar quando um alarme ou uma ação de emissão de relatório será acionado. Os limiares costumam ser definidos como valores específicos ou porcentagens da capacidade."
  },
  {
    "t": "Chris está analisando um arquivo que faz parte de um pacote de exploração. Ele observa que há um arquivo cujo conteúdo apresenta instruções delimitadas por chaves ({}). Qual tipo de arquivo da lista a seguir ele provavelmente está analisando?",
    "opts": [
      "A) Texto simples",
      "B) JSON",
      "C) XML",
      "D) HTML"
    ],
    "ans": 1,
    "exp": "Chris provavelmente está analisando um arquivo JSON. HTML e XML normalmente usam sinais de menor e maior (< e >), em vez de chaves. Texto simples não utiliza nem exige nenhum desses delimitadores."
  },
  {
    "t": "Uma analista precisa coletar dados detalhados de desempenho de vários servidores Windows a partir de uma estação central, reunindo contadores em relatórios para análise posterior. Qual ferramenta atende a esse requisito?",
    "opts": [
      "A. Resource Monitor (resmon), por apresentar em uma única tela o uso de CPU, memória, disco e rede",
      "B. Suíte Sysinternals executada ao vivo a partir do prompt de comando de cada servidor",
      "C. Performance Monitor (perfmon), que oferece contadores detalhados e suporta coleta a partir de sistemas remotos",
      "D. Monitor de integridade de arquivos configurado para acompanhar alterações nos volumes dos servidores"
    ],
    "ans": 2,
    "exp": "O perfmon fornece dados muito mais detalhados, com contadores que vão de uso de energia a atividade de disco e rede, suporta coleta a partir de sistemas remotos e permite combinar esses dados em relatórios definidos pelo usuário ou pelo sistema. A alternativa A descreve o resmon, útil para verificar rapidamente medidas básicas de uma máquina. A alternativa B exigiria execução local em cada servidor, sem a coleta centralizada pedida. A alternativa D trata de integridade de arquivos, propósito distinto do monitoramento de desempenho."
  },
  {
    "t": "Durante a triagem de um endpoint Windows suspeito, o analista quer identificar rapidamente quais processos apresentam atividade de rede, quais conexões TCP estão abertas e quais serviços respondem pelas portas em uso. Qual ferramenta é a mais indicada?",
    "opts": [
      "A. Resource Monitor (resmon), cuja capacidade de monitoramento de rede exibe processos com atividade de rede, conexões TCP abertas e serviços associados às portas abertas",
      "B. Performance Monitor (perfmon), configurado com contadores de atividade de rede e de disco",
      "C. Comando w, para identificar quais contas estão conectadas ao sistema no momento",
      "D. Comando top, para listar os processos em execução e seus maiores consumidores de recursos"
    ],
    "ans": 0,
    "exp": "Além da utilização de recursos, o resmon mostra processos com atividade de rede, quais conexões TCP estão abertas e quais serviços estão associados às portas abertas no sistema. A alternativa B entrega contadores detalhados de desempenho, mas não essa correlação entre processos, conexões e serviços. As alternativas C e D citam ferramentas de Linux: w indica contas conectadas e top exibe utilização de CPU e memória dos processos em execução."
  },
  {
    "t": "Em um servidor Linux, um analista precisa descobrir há quanto tempo um processo suspeito está em execução e qual comando o iniciou. Qual ferramenta fornece essa informação?",
    "opts": [
      "A. df, que apresenta o relatório de uso de disco do sistema",
      "B. top, que exibe estatísticas de CPU e permite identificar rapidamente os maiores consumidores",
      "C. w, que mostra quais contas estão conectadas ao sistema",
      "D. ps, que informa utilização de CPU e memória, o horário de início, o tempo de execução e o comando que iniciou cada processo"
    ],
    "ans": 3,
    "exp": "O ps fornece informações sobre utilização de CPU e memória, o horário em que o processo foi iniciado, há quanto tempo está em execução e o comando que o iniciou — exatamente os dados solicitados. A alternativa A trata do uso de disco. A alternativa B apresenta utilização de CPU, memória e outros detalhes dos processos, incluindo os maiores consumidores, sem entregar o comando de origem e o tempo de execução da forma descrita. A alternativa C lista contas conectadas, informação útil para saber quem pode estar executando um processo, mas não o que foi pedido."
  },
  {
    "t": "Uma organização precisa garantir que apenas arquivos e aplicações previamente autorizados possam existir em seus servidores críticos, sem exceções. Qual técnica atende a esse requisito?",
    "opts": [
      "A. Listagem de permissão de aplicações, que autoriza somente arquivos e aplicações permitidos no sistema",
      "B. Listagem de bloqueio de software e arquivos, que proíbe a instalação dos itens constantes na lista",
      "C. Ferramentas de antivírus e antimalware, projetadas para detectar arquivos potencialmente prejudiciais",
      "D. Gerenciamento central com o Microsoft Endpoint Manager, que controla a instalação e reporta o software presente"
    ],
    "ans": 0,
    "exp": "A allow list permite somente arquivos e aplicações autorizados; em uma implementação rigorosa, nenhum arquivo não previamente permitido é aceito no sistema. A alternativa B parte de uma relação de itens proibidos, deixando passar tudo o que não estiver listado. A alternativa C detecta software potencialmente prejudicial, sem restringir o conjunto de aplicações a um catálogo aprovado. A alternativa D gerencia instalações e reporta o inventário, mas não impõe a restrição estrita descrita."
  },
  {
    "t": "Durante a análise de um servidor de banco de dados, o analista encontra o executável nc.exe em um diretório de usuário, sem qualquer registro de instalação autorizada. Qual conclusão é a mais apropriada?",
    "opts": [
      "A. O arquivo é um utilitário administrativo comum e sua presença dispensa investigação adicional",
      "B. O achado indica incompatibilidade de aplicação capaz de gerar tráfego de rede indesejado a outros sistemas",
      "C. O sistema pode ter sido comprometido, já que essa ferramenta é frequentemente embutida em exploits para fornecer conectividade",
      "D. O executável caracteriza software não autorizado sem risco associado, bastando removê-lo do inventário"
    ],
    "ans": 2,
    "exp": "O netcat, ou nc.exe no Windows, permite criar conexões UDP ou TCP com comandos simples e costuma ser embutido em exploits para oferecer conectividade fácil; encontrá-lo onde não deveria estar sugere que o sistema pode ter sido comprometido. A alternativa A desconsidera esse contexto. A alternativa B trata o achado como problema de compatibilidade. A alternativa D reconhece o software não autorizado, mas ignora que ele pode abrir um shell remoto, o que exige investigação e não apenas ajuste de inventário."
  },
  {
    "t": "Uma equipe pretende usar o Microsoft Endpoint Manager como única fonte para detectar atividade maliciosa em endpoints, de forma imediata. Qual limitação deve ser apontada?",
    "opts": [
      "A. A ferramenta cobre apenas estações de trabalho, deixando servidores e dispositivos móveis sem gerenciamento",
      "B. A ferramenta depende de listas de bloqueio para funcionar, o que restringe sua cobertura a arquivos reconhecidamente maliciosos",
      "C. A ferramenta não permite reportar o software instalado, apenas controlar novas instalações",
      "D. A ferramenta não monitora em tempo real, ao contrário de recursos como resmon e perfmon"
    ],
    "ans": 3,
    "exp": "Ferramentas de gerenciamento central como o Microsoft Endpoint Manager gerenciam a instalação de software e reportam o software instalado, mas, diferentemente de resmon e perfmon, não monitoram em tempo real — daí a inadequação para detecção imediata. A alternativa A inventa uma limitação de escopo, já que ambientes gerenciados abrangem estações, servidores e dispositivos móveis. A alternativa B confunde a ferramenta com block listing. A alternativa C nega uma capacidade que ela possui: reportar o software instalado."
  },
  {
    "t": "Qual termo descreve um sistema que envia tráfego de verificação de atividade (heartbeat) a um servidor de comando e controle de uma botnet?",
    "opts": [
      "A) Sinalização periódica (beaconing)",
      "B) Ping zumbi",
      "C) CNCstatus",
      "D) CNClog"
    ],
    "ans": 0,
    "exp": "A atividade de sinalização periódica (beaconing), às vezes chamada de tráfego de verificação de atividade (heartbeat), ocorre quando o tráfego é enviado a um sistema de comando e controle de uma botnet. Os demais termos são inventados."
  },
  {
    "t": "Cameron quer verificar se um arquivo corresponde a um original reconhecidamente íntegro. Que técnica ele pode usar para fazer isso?",
    "opts": [
      "A) Descriptografar tanto o arquivo quanto o original para compará-los.",
      "B) Usar strings para comparar o conteúdo dos arquivos.",
      "C) Calcular o hash tanto do arquivo quanto do original e comparar os hashes.",
      "D) Verificar o tamanho do arquivo e a data de criação."
    ],
    "ans": 2,
    "exp": "Cameron deve comparar os hashes do original reconhecidamente íntegro e do novo arquivo para verificar se eles coincidem. Os arquivos não são descritos como criptografados, portanto, descriptografá-los não ajudará. O comando strings pode mostrar texto em arquivos binários, mas não consegue comparar os arquivos. O tamanho do arquivo e a data de criação não garantem que um arquivo seja igual ao outro."
  },
  {
    "t": "Um analista suspeita que ferramentas de ataque tenham sido injetadas em processos legítimos em execução em uma estação Windows. Qual abordagem é a mais adequada para confirmar essa suspeita?",
    "opts": [
      "A. Comparar os nomes dos processos ativos com a relação de componentes legítimos do sistema operacional",
      "B. Verificar se rundll32.exe está presente no sistema, já que sua execução caracteriza injeção em processos",
      "C. Empregar ferramentas capazes de observar o comportamento modificado ou comparar os processos em execução com fingerprints de processos reconhecidos como bons",
      "D. Encerrar os processos mais associados a ataques, como powershell.exe e wmic.exe, e observar se o comportamento anômalo cessa"
    ],
    "ans": 2,
    "exp": "Encontrar processos legítimos nos quais ferramentas de ataque foram injetadas exige recursos que observem o comportamento modificado ou confiram os processos em execução contra fingerprints de processos conhecidos como bons. A alternativa A serve para identificar processos rogue com nomes semelhantes aos legítimos, técnica diferente da injeção. A alternativa B trata a simples presença de um componente nativo como prova de ataque. A alternativa D interrompe ferramentas legítimas do sistema sem produzir a evidência necessária."
  },
  {
    "t": "Uma equipe investiga possível saída não autorizada de dados de repositórios internos. Qual afirmação descreve corretamente esse cenário e suas defesas?",
    "opts": [
      "A. A exfiltração é detectável apenas quando o tráfego trafega em claro, já que canais criptografados impedem qualquer forma de monitoramento",
      "B. Atacantes ocultam a atividade usando criptografia, canais comuns como HTTPS ou canais ocultos como tunelamento por DNS, e EDR, IPS e DLP têm papel no monitoramento e na prevenção",
      "C. A marcação e a proteção dos dados substituem a necessidade de controles de detecção, pois impedem que a informação seja removida dos repositórios",
      "D. O uso de canais ocultos descarta a utilidade de soluções de endpoint, restando apenas a inspeção do tráfego na borda da rede"
    ],
    "ans": 1,
    "exp": "Agentes maliciosos tentam ocultar a exfiltração com criptografia, envio por canais comumente usados como HTTPS ou canais ocultos como tunelamento por requisições DNS, e ferramentas como EDR, IPS e DLP têm papel no monitoramento e na prevenção. A alternativa A afirma impossibilidade de detecção diante de criptografia. A alternativa C trata tagging e proteção como substitutos da detecção, quando compõem uma defesa em camadas. A alternativa D descarta o EDR, que atua justamente no endpoint."
  },
  {
    "t": "Um analista precisa validar quais acessos um determinado grupo possui sobre arquivos, chaves de Registro e serviços em um servidor Windows. Qual recurso atende diretamente a essa necessidade?",
    "opts": [
      "A. Ferramentas de verificação de integridade de arquivos e diretórios, como o Tripwire",
      "B. AccessChk, do Sysinternals, que valida o acesso de um usuário ou grupo a esses objetos",
      "C. Correlação dos logs de eventos de segurança em uma plataforma SIM/SIEM",
      "D. Sistema de auditoria com scripts personalizados para checar os privilégios de interesse"
    ],
    "ans": 1,
    "exp": "O AccessChk, da suíte Sysinternals, valida o acesso que um usuário ou grupo específico tem a objetos como arquivos, chaves de Registro e serviços — exatamente a verificação pedida. A alternativa A acompanha alterações em arquivos e diretórios, sem inventariar permissões efetivas. A alternativa C reúne registros de uso e escalonamento de privilégios, mas não informa quais acessos estão atribuídos. A alternativa D descreve a abordagem típica do Linux, onde a checagem de permissões específicas costuma exigir a escrita de um script."
  },
  {
    "t": "Durante a estruturação da detecção de alterações não autorizadas em servidores de produção, a equipe precisa definir as fontes de dados e as ferramentas de análise apropriadas. Qual combinação é a correta?",
    "opts": [
      "A. Logs de autenticação e de criação de usuário, analisados por suíte de gerenciamento central e SIM/SIEM",
      "B. Logs de eventos de segurança e de aplicação, analisados por SIM/SIEM e ferramentas de análise de logs",
      "C. Registros de criação de arquivos e alterações de configuração, presentes em logs de sistema, de aplicação e ferramentas de monitoramento, analisados por suíte de gerenciamento central, SIM/SIEM e ferramentas de integridade de arquivos e diretórios",
      "D. Registros de tentativas de uso de privilégio e escalonamento, presentes em logs de sistema, analisados por ferramentas de verificação de integridade"
    ],
    "ans": 2,
    "exp": "Para alterações não autorizadas, os dados registrados são criação de arquivo e alterações de configuração, localizados em logs de sistema, logs de aplicação e ferramentas de monitoramento, com análise por suíte de gerenciamento central, SIM/SIEM e ferramentas de verificação de integridade de arquivos e diretórios. A alternativa A corresponde à detecção de acesso não autorizado. A alternativa B descreve o cenário de uso não autorizado de privilégios. A alternativa D mistura os dados de privilégios com ferramentas voltadas à integridade de arquivos."
  },
  {
    "t": "Durante a resposta a um incidente em uma estação Windows, o analista precisa verificar se o atacante estabeleceu persistência por meio do Registro. Quais localizações devem ser inspecionadas prioritariamente?",
    "opts": [
      "A. As chaves Run e RunOnce sob CurrentVersion, tanto em HKEY_LOCAL_MACHINE quanto em HKEY_CURRENT_USER",
      "B. As chaves de perfil de hardware armazenadas em HKEY_CURRENT_CONFIG",
      "C. As entradas de associação de tipos de arquivo mantidas em HKEY_CLASSES_ROOT",
      "D. As informações de contas de usuário registradas em HKEY_USERS"
    ],
    "ans": 0,
    "exp": "As chaves de execução usadas como técnica comum de persistência ficam em Run e RunOnce sob CurrentVersion, presentes tanto em HKEY_LOCAL_MACHINE quanto em HKEY_CURRENT_USER. A alternativa B aponta o armazenamento do perfil de hardware local. A alternativa C trata das associações entre tipos de arquivo e programas. A alternativa D refere-se a informações de contas de usuário. Nenhuma dessas três corresponde às run keys empregadas para manter acesso ao sistema."
  },
  {
    "t": "Uma equipe pretende impedir alterações no Registro de servidores que raramente sofrem modificações, mas precisa permitir ajustes durante as janelas de patching. Qual conduta é a mais adequada?",
    "opts": [
      "A. Instalar uma ferramenta baseada em agente com controle granular, evitando o excesso de falsos positivos observado nesse tipo de sistema",
      "B. Adotar ferramentas de bloqueio que proíbam alterações no Registro, desativando-as ou colocando-as em modo permissivo durante o patching e reativando-as nas operações do dia a dia",
      "C. Monitorar as run keys por meio do Agendador de Tarefas, correlacionando horários de criação e execução",
      "D. Suspender permanentemente as listas de permissão de aplicações, já que elas impedem a aplicação de correções do sistema operacional"
    ],
    "ans": 1,
    "exp": "Quando ferramentas de monitoramento de Registro não são viáveis, ferramentas de bloqueio podem proibir alterações; elas podem ser desativadas ou colocadas em modo que permita mudanças durante o patching do Windows e reativadas para as operações diárias. A alternativa A descreve o controle indicado para estações de trabalho, onde as alterações são frequentes. A alternativa C atribui ao Agendador de Tarefas uma função de monitoramento de Registro que ele não tem. A alternativa D descarta um controle útil em servidores com base em uma premissa falsa."
  },
  {
    "t": "Um analista investiga a possibilidade de persistência em um servidor Linux por meio de tarefas agendadas. Qual procedimento é o mais apropriado?",
    "opts": [
      "A. Executar o schtasks, canalizando a saída para facilitar a leitura das tarefas registradas",
      "B. Inspecionar as chaves de inicialização do sistema e a pasta de Startup em busca de entradas inesperadas",
      "C. Verificar o crontab com cat /etc/crontab, inspecionar /etc/cron e listar os jobs com crontab -l, atentando aos que rodam como root",
      "D. Consultar os logs de autenticação para identificar contas criadas fora do processo formal da organização"
    ],
    "ans": 2,
    "exp": "No Linux, tarefas agendadas inesperadas são detectadas pelo cron: inspecionando o crontab com cat /etc/crontab, verificando /etc/cron em busca de itens escondidos e listando os jobs com crontab -l, com atenção especial aos que rodam como root ou usuários equivalentes. A alternativa A cita um comando do Windows. A alternativa B descreve mecanismos de persistência do Windows. A alternativa D investiga criação de contas, que se relaciona a acesso não autorizado, e não a tarefas agendadas."
  },
  {
    "t": "Uma organização percebe que funcionários evitam comunicar tentativas de engenharia social por receio de punição. Qual medida é a mais adequada para melhorar a capacidade de detecção?",
    "opts": [
      "A. Implantar filtros adicionais de e-mail para bloquear links ofuscados antes que cheguem às caixas de entrada",
      "B. Estabelecer processos de notificação ágeis e não punitivos, que incentivem o relato tanto de tentativas quanto de casos bem-sucedidos",
      "C. Ampliar o monitoramento técnico dos endpoints, já que a atividade decorrente do ataque acabará aparecendo nos logs",
      "D. Restringir o acesso dos usuários a redes sociais e canais externos usados nesse tipo de abordagem"
    ],
    "ans": 1,
    "exp": "A detecção de engenharia social depende de processos de notificação ágeis e não punitivos, que encorajem os funcionários a reportar tentativas e sucessos — exatamente a lacuna descrita. A alternativa A é um controle técnico que não resolve o silêncio dos usuários. A alternativa C aposta em rastros posteriores ao ataque, sem melhorar a detecção pelo elemento humano. A alternativa D restringe canais, mas a engenharia social também ocorre por telefone, e-mail e presencialmente."
  },
  {
    "t": "O que o endereço MAC de um dispositivo não autorizado pode informar?",
    "opts": [
      "A) A versão de seu sistema operacional",
      "B) O TTL do dispositivo",
      "C) De que tipo de dispositivo não autorizado se trata",
      "D) O fabricante do dispositivo"
    ],
    "ans": 3,
    "exp": "Os códigos de identificação dos fornecedores de hardware fazem parte dos endereços MAC e podem ser verificados em dispositivos que não tiveram seus endereços MAC alterados. É possível alterar endereços MAC, portanto, não é recomendável confiar apenas no endereço MAC, mas ele pode ajudar a identificar o que um dispositivo não autorizado pode ser."
  },
  {
    "t": "Como Jim pode localizar, da maneira mais eficaz, um ponto de acesso sem fio não autorizado que está causando reclamações de funcionários em seu prédio?",
    "opts": [
      "A) Nmap",
      "B) Intensidade do sinal e triangulação",
      "C) Conectar-se ao AP não autorizado",
      "D) NAC"
    ],
    "ans": 1,
    "exp": "A localização de um AP não autorizado costuma ser feita por meio de uma inspeção física e da triangulação da provável localização do dispositivo, verificando a intensidade de seu sinal. Se o AP estiver conectado à rede da organização, o nmap poderá encontrá-lo, mas é improvável que conectar-se a ele forneça sua localização ou seja seguro. O NAC ajudaria a impedir que o dispositivo não autorizado se conectasse à rede de uma organização, mas não ajudará a localizá-lo."
  },
  {
    "t": "Após um incidente envolvendo phishing, a equipe precisa determinar se houve comprometimento e qual foi o alcance dele. Qual capacidade atende diretamente a essa necessidade?",
    "opts": [
      "A. Treinamento de conscientização para que os funcionários detectem e reportem comportamentos suspeitos",
      "B. Inspeção dos links ofuscados presentes nas mensagens, para identificar os sites maliciosos envolvidos",
      "C. Processos de notificação que estimulem o relato imediato por parte dos usuários afetados",
      "D. Capacidades de análise e resposta, para determinar o impacto da tentativa e o escopo caso ela tenha sido bem-sucedida"
    ],
    "ans": 3,
    "exp": "Capacidades de análise e resposta servem justamente para determinar qual impacto, se houver, uma tentativa de engenharia social teve, e qual o escopo do impacto quando ela foi bem-sucedida. A alternativa A prepara os funcionários para identificar abordagens, atuando antes do fato. A alternativa B examina um artefato do ataque, sem dimensionar o comprometimento. A alternativa C viabiliza o relato inicial, mas não a apuração do alcance do incidente."
  },
  {
    "t": "Uma equipe precisa registrar quais ações os usuários realizam em um sistema de pedidos, de modo a reconstruir o que foi executado durante um período sob investigação. Qual área de monitoramento atende a esse objetivo?",
    "opts": [
      "A. Registro transacional, que captura informações sobre a função do serviço, como as ações realizadas pelos usuários",
      "B. Monitoramento de ativo/inativo, que confirma se o serviço permanece em execução durante o período analisado",
      "C. Monitoramento de desempenho, que verifica se o serviço responde de forma rápida e conforme o esperado",
      "D. Registro de aplicação ou serviço, que produz logs sobre a função ou o status do próprio serviço"
    ],
    "ans": 0,
    "exp": "O registro transacional captura informações sobre a função do serviço, incluindo quais ações os usuários realizam ou quais ações são executadas — exatamente o que permite reconstruir a atividade do período. A alternativa B apenas indica se o serviço está rodando. A alternativa C avalia tempo e adequação das respostas. A alternativa D gera logs sobre função ou status do serviço, categoria próxima, mas que não é a voltada ao registro das ações dos usuários."
  },
  {
    "t": "Ao investigar um serviço possivelmente comprometido, um analista busca sinais que justifiquem aprofundar a apuração. Qual conjunto corresponde a esses indícios?",
    "opts": [
      "A. Picos de utilização de banda no enlace que atende ao servidor e variações no consumo de disco",
      "B. Comportamento incorreto, mensagens de log ou erros inesperados, novos usuários ou processos e alterações de arquivos",
      "C. Ausência de resposta em verificações de ativo/inativo acompanhada de degradação nos tempos de resposta",
      "D. Divergência entre os horários registrados nos logs do serviço e os de outros sistemas correlacionados"
    ],
    "ans": 1,
    "exp": "Comportamento incorreto, mensagens de log ou erros inesperados, novos usuários ou processos e alterações de arquivos são sinais comuns de um serviço possivelmente comprometido. A alternativa A descreve indicadores de consumo de recursos, que não caracterizam por si sós o comprometimento do serviço. A alternativa C aponta indisponibilidade e lentidão, situações que também decorrem de falhas operacionais comuns. A alternativa D trata de sincronização de tempo, questão relevante para a análise de logs, mas distinta dos sinais descritos."
  },
  {
    "t": "Uma organização quer garantir que os registros de suas aplicações críticas estejam disponíveis e íntegros caso um atacante comprometa um servidor. Qual medida atende a esse objetivo?",
    "opts": [
      "A. Aumentar o nível de detalhe dos logs das aplicações, capturando o máximo possível de informação sobre cada transação",
      "B. Restringir a leitura dos arquivos de log ao usuário administrativo local de cada servidor",
      "C. Configurar o registro adequado antes da ocorrência de um incidente e enviar os logs críticos a um serviço central de coleta e análise, protegendo-os contra modificação ou exclusão",
      "D. Padronizar o armazenamento de todos os logs em /var/log, independentemente da plataforma utilizada"
    ],
    "ans": 2,
    "exp": "Parte do trabalho do profissional de segurança é assegurar que o registro adequado esteja configurado antes do incidente, para que os logs estejam disponíveis e protegidos contra modificação ou exclusão por um atacante, sendo o envio a um serviço central de coleta e análise parte comum dessa estratégia. A alternativa A amplia o volume registrado sem proteger os arquivos. A alternativa B mantém os registros no host comprometido. A alternativa D impõe um caminho típico do Linux, quando logs de aplicação no Windows podem residir na infraestrutura de registro ou em diretórios próprios."
  },
  {
    "t": "Um serviço em nuvem com alto volume de cadastros diários dificulta a identificação de contas criadas por atacantes. Qual abordagem é a mais indicada?",
    "opts": [
      "A. Priorizar o monitoramento de contas privilegiadas e acompanhar criação em massa e contas geradas em horários ou localizações atípicas",
      "B. Suspender temporariamente a criação automática de contas até que o processo de revisão manual seja implantado",
      "C. Concentrar o monitoramento nas contas criadas no sistema operacional dos servidores que sustentam a aplicação",
      "D. Comparar o total diário de novas contas com a média histórica, investigando apenas os dias com variação relevante"
    ],
    "ans": 0,
    "exp": "Em organizações ou serviços com grande número de novas contas, focar em contas privilegiadas é um bom ponto de partida, e monitorar criação em massa ou contas geradas em horários e localizações atípicas são técnicas comuns para identificar criações potencialmente maliciosas. A alternativa B interrompe a operação do serviço. A alternativa C desloca o foco para o sistema operacional, quando a preocupação recai sobre contas adicionadas às aplicações, locais ou em nuvem. A alternativa D usa um indicador agregado que deixa passar criações isoladas e suspeitas."
  },
  {
    "t": "Um serviço crítico parou de responder logo após a aplicação de um pacote de correções. Qual é o procedimento inicial mais adequado para a solução do problema?",
    "opts": [
      "A. Executar uma varredura antimalware no host antes de qualquer tentativa de intervenção no serviço",
      "B. Tentar iniciar ou reiniciar o serviço e, se não houver sucesso, revisar suas mensagens de log ou de erro",
      "C. Reverter imediatamente as correções aplicadas, restaurando a configuração anterior do servidor",
      "D. Acionar a verificação de integridade de arquivos para confirmar se os binários do serviço foram alterados"
    ],
    "ans": 1,
    "exp": "A solução de problemas de falhas de serviço e aplicação começa normalmente pela tentativa de iniciar ou reiniciar o serviço; sem sucesso, a revisão das mensagens de log ou de erro costuma trazer as informações necessárias. A alternativa A parte de uma hipótese de comprometimento sem indício que a sustente, já que falhas assim são frequentemente causadas por atualizações e patches. A alternativa C reverte mudanças antes de qualquer diagnóstico. A alternativa D é um controle complementar, útil diante de suspeita de segurança, mas não o passo inicial."
  },
  {
    "t": "Uma administradora precisa consultar o status de um serviço específico em um servidor Linux e, em seguida, obter o estado de todos os serviços do sistema. Quais comandos atendem a essas necessidades?",
    "opts": [
      "A. sc para consultar o serviço e Start-Service para listar os demais",
      "B. /etc/init.d/servicename status para o serviço específico e services.msc para a listagem completa",
      "C. service [servicename] status para o serviço específico e service --status-all para listar o estado de todos",
      "D. service --status-all para o serviço específico e crontab -l para a listagem completa"
    ],
    "ans": 2,
    "exp": "Na maioria dos sistemas Linux, service [servicename] status retorna o status de um serviço e service --status-all lista o estado de todos eles. A alternativa A cita ferramentas do Windows: o sc, aplicação Service Controller, e o cmdlet Start-Service do PowerShell. A alternativa B mistura a verificação válida em sistemas com init.d com a ferramenta administrativa gráfica do Windows. A alternativa D inverte o propósito do service --status-all e recorre à listagem de tarefas agendadas."
  },
  {
    "t": "Uma equipe suspeita que anomalias recorrentes em um serviço possam ter origem em comprometimento, e não em falha operacional. Quais proteções adicionais complementam o monitoramento habitual?",
    "opts": [
      "A. Ferramentas de antimalware, antivírus e EDR, verificação de integridade de arquivos e ferramentas de lista de permissão",
      "B. Depuração de crash dump com WinDbg, somada à revisão das dependências e permissões do serviço",
      "C. Reinicialização programada do serviço em janelas fixas, com acompanhamento das mensagens de erro geradas",
      "D. Consulta periódica ao status dos serviços por linha de comando, registrando as variações observadas"
    ],
    "ans": 0,
    "exp": "Anomalias de origem em segurança podem ser detectadas pelas mesmas técnicas de monitoramento, mas ferramentas adicionais ajudam a garantir que o serviço e seus arquivos e aplicações constituintes não estejam comprometidos: antimalware, antivírus e EDR, verificação de integridade de arquivos e listas de permissão. A alternativa B trata de depuração e de causas não relacionadas à segurança. A alternativa C apenas repete a tentativa de reinício. A alternativa D acompanha o estado dos serviços, sem verificar a integridade dos arquivos envolvidos."
  },
  {
    "t": "Durante a análise de tráfego de uma aplicação corporativa hospedada em um servidor interno, um analista observa conexões curtas e regulares, em intervalos fixos, para um host externo que não consta na documentação da aplicação, seguidas por transferências de arquivos de saída. Qual medida é a mais adequada para detectar de forma consistente esse tipo de atividade?",
    "opts": [
      "A) Implementar verificação de integridade do sistema de arquivos nos servidores que hospedam a aplicação",
      "B) Aplicar validadores (validity checkers) na saída em nível de arquivo e de API da aplicação",
      "C) Exigir fluxo de trabalho de gestão de mudanças e aprovação formal para alterações na aplicação",
      "D) Utilizar software de monitoramento de rede em conjunto com um IDS/IPS bem ajustado para o tráfego de saída"
    ],
    "ans": 3,
    "exp": "O padrão descrito (conexões periódicas para host externo e transferências de saída) caracteriza beaconing e exfiltração, que são indicadores de exploração de aplicações detectados por monitoramento de rede somado a um IDS/IPS capaz e bem ajustado para tráfego outbound. A alternativa A ajuda a detectar alterações não autorizadas em arquivos locais, mas não enxerga comunicações de saída. A alternativa B trata de saídas inesperadas (dados impróprios ou corrompidos), problema diferente do observado. A alternativa C é um controle administrativo preventivo sobre mudanças, sem capacidade de detecção do tráfego em andamento."
  },
  {
    "t": "Qual das seguintes ferramentas não fornece monitoramento em tempo real da capacidade das unidades de armazenamento no Windows?",
    "opts": [
      "A) Microsoft Configuration Manager",
      "B) Resmon",
      "C) SCOM",
      "D) Perfmon"
    ],
    "ans": 0,
    "exp": "O Microsoft Configuration Manager fornece relatórios sobre o espaço em disco que não são em tempo real. Resmon, perfmon e SCOM podem fornecer relatórios em tempo real, o que pode ajudar a identificar problemas antes que eles tornem um sistema indisponível."
  },
  {
    "t": "Uma das gerentes de negócios da organização de Geeta relata que recebeu um e-mail com um link que parecia levar ao site de RH da organização e que o site acessado ao clicar nele era muito semelhante ao site da organização. Felizmente, a gerente percebeu que a URL era diferente da habitual. Qual técnica melhor descreve um link disfarçado para parecer legítimo?",
    "opts": [
      "A) Um link ofuscado",
      "B) Um link simbólico",
      "C) Um link de phishing",
      "D) Um link de isca"
    ],
    "ans": 0,
    "exp": "Links ofuscados se aproveitam de artifícios, incluindo o uso de codificações alternativas, erros de digitação e URLs longas que contêm links legítimos inseridos em links maliciosos mais longos. Links simbólicos são ponteiros usados por sistemas operacionais Linux para apontar para um arquivo real usando um nome de arquivo e um link. Links de phishing e links de isca não são termos comuns."
  },
  {
    "t": "Um analista precisa acompanhar, em tempo real, o comportamento de registro de uma aplicação em um servidor Linux enquanto a equipe executa uma bateria de testes. Qual é a ação mais apropriada durante a execução dos testes?",
    "opts": [
      "A) Executar o comando tail sobre o log da aplicação em /var/log ou no local de log específico dela",
      "B) Consultar a documentação da aplicação para mapear todos os dados gerados e revisar os arquivos ao final dos testes",
      "C) Encaminhar os logs para uma solução centralizada e revisar os eventos consolidados após o período de testes",
      "D) Estabelecer uma baseline de comportamento da aplicação e comparar os desvios depois que os testes forem concluídos"
    ],
    "ans": 0,
    "exp": "O comando tail permite acompanhar o log enquanto a aplicação é exercitada, que é exatamente o requisito de observação em tempo real. A alternativa B é uma prática válida e frequentemente necessária, já que algumas aplicações gravam em locais próprios, mas a revisão ocorre após o fato. As alternativas C e D também são recomendáveis em um programa de monitoramento, porém ambas descrevem análise posterior de eventos consolidados ou de desvios, não o acompanhamento simultâneo à execução dos testes."
  },
  {
    "t": "Durante a investigação de um incidente, um analista identifica que uma conta de aplicação com direitos administrativos foi criada semanas antes e permaneceu despercebida, pois a criação de contas dessa aplicação não é registrada no repositório central de logs. Qual recomendação trata de forma mais direta a lacuna identificada?",
    "opts": [
      "A) Implantar análise heurística (comportamental) com ferramentas antimalware para sinalizar desvios da norma",
      "B) Aplicar verificação de integridade do sistema de arquivos nos servidores da aplicação",
      "C) Exigir fluxo de gestão de mudanças com aprovação para criação de contas administrativas, somado a controles técnicos que rastreiem contas e privilégios concedidos",
      "D) Ampliar o treinamento de conscientização para que usuários e administradores reportem aplicações com comportamento anormal"
    ],
    "ans": 2,
    "exp": "A introdução de novas contas, sobretudo com privilégios administrativos, é um sinal comum de comprometimento, e a combinação de controles administrativos (fluxo de mudanças com aprovações) com controles técnicos de rastreamento de contas e privilégios forma a defesa mais forte quando a criação de contas não é registrada centralmente. A alternativa A detecta desvios de comportamento da aplicação, não a concessão de privilégios. A alternativa B identifica alterações em arquivos, não a criação de contas. A alternativa D é um complemento útil para relatos de anomalias, mas depende de percepção humana e não cobre a ausência de registro e rastreamento das contas."
  },
  {
    "t": "Um analista recebe um alerta isolado referente a uma única estação de trabalho e considera classificá-lo como um evento localizado, de baixo impacto. Antes de concluir a triagem, qual ação melhor apoia a determinação de que o evento realmente não possui um escopo mais amplo?",
    "opts": [
      "A) Identificar a classificação dos dados armazenados na estação de trabalho afetada",
      "B) Verificar se outros eventos registrados no ambiente estão correlacionados com o evento inicial",
      "C) Comparar o volume atual de alertas com as normas do setor por meio de análise de tendências",
      "D) Registrar o impacto imediato e escalar o caso conforme o nível de privilégio do usuário envolvido"
    ],
    "ans": 1,
    "exp": "Determinar se o evento é localizado ou tem escopo mais amplo começa por saber se outros eventos estão correlacionados com o evento inicial, já que um incidente aparentemente inofensivo pode ser sinal de um comprometimento maior ou de um ataque em larga escala. A alternativa A faz parte da análise de impacto, mas trata da sensibilidade dos dados envolvidos, não da abrangência do evento. A alternativa C é útil para perceber desvios em relação a níveis normais ao longo do tempo, e não para vincular este evento específico a outros. A alternativa D limita a avaliação ao impacto imediato, ignorando o impacto total que só aparece quando eventos relacionados são considerados."
  },
  {
    "t": "Uma equipe de segurança quer identificar variações nos níveis normais de eventos de autenticação ao longo dos últimos meses e confrontá-las com padrões históricos da própria organização e com referências do setor. Qual técnica atende diretamente a esse objetivo?",
    "opts": [
      "A) Correlação de eventos para estabelecer relação entre alertas distintos do mesmo período",
      "B) Classificação de dados dos ativos envolvidos nos eventos de autenticação",
      "C) Agregação dos registros em uma implementação de stack ELK para consulta dos dados",
      "D) Análise de tendências aplicada sobre a baseline de eventos da organização"
    ],
    "ans": 3,
    "exp": "A análise de tendências permite perceber mudanças em relação a uma baseline ou aos níveis normais de eventos e comparar esses eventos com normas do setor ou padrões históricos, exatamente o que a equipe deseja. A alternativa A relaciona eventos entre si para dimensionar o escopo de um incidente, mas não avalia desvios em relação a níveis normais. A alternativa B trata da sensibilidade dos ativos de dados envolvidos, sem relação com variação de volume. A alternativa C descreve uma tecnologia de registro e agregação que fornece a capacidade de examinar os dados, mas é o meio de consulta, não a técnica analítica que responde à pergunta."
  },
  {
    "t": "Durante a resposta a um incidente em uma estação de trabalho Windows, um analista precisa determinar quando um pacote de software suspeito foi instalado e qual conta realizou a instalação. Qual dos logs disponíveis por padrão no sistema oferece o registro mais direto para essa finalidade?",
    "opts": [
      "A) Log de Segurança (Security)",
      "B) Log de Sistema (System)",
      "C) Log de Aplicação (Application)",
      "D) Log de Configuração (Setup)"
    ],
    "ans": 2,
    "exp": "O log de Aplicação é onde aparecem os eventos de instalação (installer events), permitindo rastrear quando um pacote específico foi instalado e por quem — elemento comum em investigações de malware e em processos forenses e de resposta a incidentes. O log de Segurança concentra eventos relacionados a auditoria de acesso e autenticação, úteis em outra etapa da investigação. O log de Sistema registra eventos de componentes do sistema operacional, como drivers e serviços. O log de Configuração está associado a operações de setup do próprio sistema, e não à instalação de pacotes de aplicação. Todos são logs padrão do Windows e visíveis pelo Visualizador de Eventos, mas apenas um traz o registro procurado."
  },
  {
    "t": "Uma organização precisa analisar eventos gerados pelos controladores de domínio de um ambiente Active Directory de porte moderado. Os analistas constatam que o volume produzido é grande demais para ser revisado de forma prática diretamente no Visualizador de Eventos. Qual abordagem é a mais adequada para viabilizar a análise?",
    "opts": [
      "A) Exportar os logs para um sistema de agregação e análise de logs desenvolvido especificamente para essa finalidade",
      "B) Acessar diretamente os arquivos em %SystemRoot%\\System32\\Winevt\\Logs em cada controlador de domínio para revisão manual",
      "C) Mapear as lacunas existentes na infraestrutura de coleta e análise antes de qualquer revisão dos eventos",
      "D) Restringir a revisão aos logs que o Windows habilita por padrão, reduzindo o conjunto de dados a ser examinado"
    ],
    "ans": 0,
    "exp": "Quando o volume de eventos excede o que é razoável revisar no Visualizador de Eventos, exportar os logs para um sistema de agregação e análise construído para esse propósito é a opção adequada, pois ferramentas capazes de processar, analisar e reportar volumes massivos são elementos críticos das arquiteturas de segurança modernas. A alternativa B apenas troca a interface de leitura, mantendo o esforço manual e o mesmo volume. A alternativa C é uma prática válida de avaliação da infraestrutura de logging, mas não resolve a necessidade imediata de analisar os eventos. A alternativa D reduz artificialmente a visibilidade e pode descartar registros relevantes para a investigação."
  },
  {
    "t": "Ao revisar registros de tráfego bloqueado, um analista identifica que o host 192.168.1.172 gerou centenas de tentativas de conexão contra o endereço 10.1.10.4, em portas distintas, todas negadas. Qual é o próximo passo mais adequado da investigação?",
    "opts": [
      "A) Revisar todas as entradas referentes ao host de destino para identificar quais serviços responderam às tentativas",
      "B) Pesquisar nos logs por entradas originadas em 192.168.1.172 em direção a outros destinos, verificando se há varredura de portas em toda a rede",
      "C) Consultar a documentação do fornecedor do dispositivo para interpretar os códigos de erro presentes nas entradas negadas",
      "D) Limitar a análise às tentativas entre os dois endereços envolvidos, já que nenhuma conexão foi efetivamente permitida"
    ],
    "ans": 1,
    "exp": "Centenas de tentativas bloqueadas em portas diferentes contra um mesmo alvo sugerem varredura, e o passo natural é ampliar a busca pelas entradas do host de origem para verificar se ele estava varrendo a rede inteira. A alternativa A inverte o foco: o comportamento suspeito está no host de origem, e as tentativas foram bloqueadas. A alternativa C é desnecessária, pois é preciso saber ler entradas de log com base em conceitos e identificadores, sem depender das especificidades de formato de cada fornecedor. A alternativa D restringe artificialmente o escopo justamente quando a busca inicial indica que entradas relacionadas devem ser procuradas."
  },
  {
    "t": "Um analista investiga a suspeita de uso indevido de privilégios administrativos em um servidor Ubuntu comprometido. Qual ação fornece a evidência mais direta sobre a execução de comandos com privilégios elevados nesse host?",
    "opts": [
      "A) Revisar os diretórios específicos da aplicação suspeita, já que serviços podem gravar registros fora do local padrão",
      "B) Coletar as mensagens compatíveis com syslog enviadas pelos dispositivos de segurança que monitoram o servidor",
      "C) Comparar o formato das entradas geradas pelo servidor com o de outros fornecedores para padronizar a leitura",
      "D) Examinar o arquivo auth.log, em /var/log, em busca de eventos sudo registrados"
    ],
    "ans": 3,
    "exp": "Em servidores Linux, o auth.log armazenado em /var/log registra eventos sudo, e procurar por eventos conhecidos que envolvam uso de privilégios administrativos é parte comum das investigações de incidentes. A alternativa A é válida como complemento, pois configurações e padrões de aplicações podem colocar logs em outros locais, mas não é onde o uso de privilégios elevados do sistema é registrado. A alternativa B traz a visão dos dispositivos de segurança, não das ações executadas localmente no host. A alternativa C descreve um exercício de familiarização com formatos, sem produzir evidência sobre o incidente."
  },
  {
    "t": "Um analista revisa entradas de log de um firewall de host em um servidor Ubuntu e observa registros repetidos de conexões negadas envolvendo os mesmos hosts de origem e destino, com destino à porta 22. Qual conclusão é mais consistente com essas entradas?",
    "opts": [
      "A) O cliente tentou repetidamente acessar o serviço OpenSSH, que estava sendo bloqueado pelo firewall",
      "B) Um conjunto de regras padrão voltado ao OWASP Top 10 identificou a tentativa e interrompeu a sessão",
      "C) O serviço de destino estava indisponível, o que fez o firewall registrar as tentativas como falhas de aplicação",
      "D) O volume de tráfego enviado excedeu o limite definido na regra, resultando no descarte das conexões"
    ],
    "ans": 0,
    "exp": "Entradas com origem, destino, protocolo, ação e porta 22 indicam tentativas de acesso ao OpenSSH bloqueadas pelo firewall, com o cliente repetindo o acesso até falhar. A alternativa B descreve rulesets de WAF, que operam na camada de aplicação contra ataques a aplicações web, e não bloqueios de porta em um firewall de rede/host. A alternativa C atribui a negação a uma indisponibilidade do serviço, mas o registro mostra ação de bloqueio pelo firewall. A alternativa D cita quantidade de tráfego, que pode constar nas entradas como detalhe, mas não é o motivo do bloqueio observado."
  },
  {
    "t": "Uma aplicação web corporativa está protegida por um WAF com ruleset padrão habilitado. O analista precisa determinar se houve tentativa de injeção de comandos contra a aplicação nas últimas horas. Qual fonte oferece a evidência mais direta?",
    "opts": [
      "A) Entradas do firewall de rede contendo o identificador de ameaça associado ao bloqueio da sessão",
      "B) Registros da interface por onde o tráfego entrou no perímetro, correlacionados por IP de origem",
      "C) Entradas do WAF que apontem correspondência de regra com conteúdo suspeito nos argumentos da requisição, como /bin/bash",
      "D) Logs do firewall de host do servidor web, filtrados pela porta e pelo protocolo utilizados pela aplicação"
    ],
    "ans": 2,
    "exp": "O WAF opera na camada de aplicação e seus rulesets identificam ataques compatíveis com o OWASP Top 10; uma entrada mostrando correspondência com conteúdo como /bin/bash nos argumentos da requisição evidencia diretamente a tentativa de ataque. A alternativa A trata de identificadores de ameaça em logs de firewall, que descrevem origem, destino, porta, protocolo e ação, sem inspecionar o conteúdo da requisição. A alternativa B ajuda a rastrear o caminho do tráfego, não o payload. A alternativa D confirma apenas que houve conexão para a porta da aplicação, sem revelar o conteúdo enviado."
  },
  {
    "t": "Angela quer analisar o syslog em um sistema Linux. Em qual diretório ela deve procurá-lo na maioria das distribuições Linux?",
    "opts": [
      "A) /home/log",
      "B) /var/log",
      "C) /log",
      "D) /var/syslog"
    ],
    "ans": 1,
    "exp": "O arquivo de syslog é encontrado em /var/log na maioria dos hosts Linux."
  },
  {
    "t": "Laura quer analisar os cabeçalhos de um e-mail que um integrante de sua equipe considera suspeito. O que ela não deve pedir a essa pessoa que faça se quiser preservar os cabeçalhos?",
    "opts": [
      "A) Ela não deve pedir que a pessoa imprima o e-mail.",
      "B) Ela não deve pedir que a pessoa responda ao e-mail.",
      "C) Ela não deve pedir que a pessoa encaminhe o e-mail para ela.",
      "D) Ela não deve pedir que a pessoa baixe o e-mail."
    ],
    "ans": 2,
    "exp": "Encaminhar um e-mail removerá os cabeçalhos e os substituirá por novos cabeçalhos no e-mail encaminhado, mas não no original. Laura deve usar uma opção de \"ver cabeçalhos\" ou \"ver e-mail original\", se estiver disponível, para visualizar e analisar os cabeçalhos. Imprimir, responder ou baixar um e-mail não afetará os cabeçalhos."
  },
  {
    "t": "Um analista investiga um malware que utiliza uma infraestrutura de comando e controle baseada em IRC. Ele já conhece o nome do canal e o apelido empregados pelos hosts infectados e precisa confirmar quais estações estão se comunicando com essa infraestrutura. Qual fonte de dados tende a oferecer a evidência mais completa nesse cenário?",
    "opts": [
      "A) Logs de IDS/IPS, pesquisando por regras que contenham o nome do canal ou o apelido utilizados",
      "B) Logs de proxy, filtrando pelos user agents e versões de protocolo incomuns observados nas conexões",
      "C) Logs de firewall, correlacionando origem, destino, porta e ação tomada sobre o tráfego",
      "D) Logs de proxy, examinando a quantidade de conteúdo solicitada para identificar pacotes maliciosos conhecidos"
    ],
    "ans": 0,
    "exp": "IDS e IPS analisam o conteúdo dos pacotes e acompanham o tráfego ao longo de múltiplos pacotes ou de conversas inteiras, o que disponibiliza dados em nível de aplicação — como nome de canal e apelido de IRC — permitindo buscar pelas regras acionadas. As alternativas B e D descrevem elementos legítimos da análise de logs de proxy, mas o proxy centraliza e filtra tráfego de acesso web e não expõe o conteúdo de uma conversa IRC. A alternativa C identifica pares de comunicação e a ação aplicada, porém sem visibilidade sobre o conteúdo que confirmaria o canal e o apelido."
  },
  {
    "t": "Durante a análise de registros de um proxy corporativo, um analista precisa recuperar os parâmetros enviados por uma estação suspeita a um destino externo. Qual característica das requisições determina se esses parâmetros estarão prontamente visíveis na entrada de log?",
    "opts": [
      "A) A presença do HTTP referrer, que registra a origem da navegação até o recurso solicitado",
      "B) O tipo de conteúdo retornado pelo destino, que define quais campos são gravados pelo proxy",
      "C) A quantidade de conteúdo solicitada, que indica se o payload foi registrado de forma completa",
      "D) O método HTTP utilizado, já que requisições GET expõem a query string e requisições POST a transportam no corpo da mensagem"
    ],
    "ans": 3,
    "exp": "O método da requisição HTTP determina a visibilidade dos parâmetros: requisições GET trazem a query string na própria requisição, enquanto requisições POST carregam esses dados no corpo da mensagem, o que exige a leitura do payload completo e torna a análise mais complexa. A alternativa A é um campo útil para entender a origem da navegação, mas não contém os parâmetros enviados. A alternativa B trata do tipo de conteúdo, que descreve o dado trafegado e não define a exposição da query string. A alternativa C pode sinalizar comprometimento ou correspondência com pacotes maliciosos conhecidos, porém não revela os parâmetros da requisição."
  },
  {
    "t": "Uma organização enfrenta um volume massivo de informações de segurança geradas por sua infraestrutura, sistemas e aplicações. A equipe precisa de uma solução capaz de reunir esses dados de forma centralizada, combiná-los com informações de ameaças e dados de IOCs, e aplicar regras e filtragem para destacar problemas relevantes. Qual solução atende a esse conjunto de necessidades?",
    "opts": [
      "A) Uma ferramenta de EDR, com agentes instalados nos endpoints reportando a um console central",
      "B) Um IDS/IPS ajustado com regras específicas para o tráfego da organização",
      "C) Uma solução antivírus tradicional implantada em todas as estações e servidores",
      "D) Uma ferramenta de SIEM, com logging centralizado, coleta de dados, análise e geração de relatórios"
    ],
    "ans": 3,
    "exp": "O SIEM aproveita o registro centralizado de logs e a coleta de dados, somados a análise e relatórios, combinando essas informações com dados de ameaças e IOCs e aplicando regras e filtragem para lidar com o enorme volume gerado por ambientes modernos. A alternativa A concentra a coleta nos endpoints, sem consolidar as demais fontes da infraestrutura. A alternativa B baseia-se em regras para identificar tráfego indesejado, cobrindo apenas a camada de rede. A alternativa C atua na proteção do endpoint e tem se mostrado cada vez menos eficaz, sem oferecer agregação ou correlação de dados de segurança."
  },
  {
    "t": "Após indícios de comprometimento em várias estações de trabalho, uma equipe precisa de uma capacidade que monitore os sistemas por meio de agentes, use padrões de ameaça, IOCs e análise comportamental para determinar se o problema está em curso, e que possa conter ou neutralizar automaticamente a ameaça, além de oferecer recursos úteis para a investigação posterior. Qual solução é a mais apropriada?",
    "opts": [
      "A) SIEM, com suas capacidades de gerenciamento e resposta a incidentes",
      "B) EDR, com agentes de endpoint reportando a um console central",
      "C) WAF, com ruleset padrão habilitado para riscos comuns de aplicação",
      "D) Antivírus corporativo, com atualização automática de assinaturas"
    ],
    "ans": 1,
    "exp": "O EDR é implantado nos endpoints por meio de agentes que reportam a um console central e usa padrões de ameaça, indicadores de comprometimento e análise comportamental para identificar problemas em curso ou já ocorridos, podendo neutralizar ou conter a ameaça automaticamente, além de trazer ferramentas úteis à análise forense e à resposta a incidentes. A alternativa A oferece rastreamento e supervisão de incidentes, mas não age diretamente sobre o endpoint. A alternativa C protege aplicações web na camada de aplicação. A alternativa D representa a linha de defesa que vem se tornando cada vez menos eficaz."
  },
  {
    "t": "Um gestor de segurança relata que a equipe já consegue identificar potenciais problemas, mas não possui uma forma estruturada de rastrear, gerenciar e supervisionar os incidentes abertos. Qual recurso atende diretamente a essa lacuna?",
    "opts": [
      "A) As capacidades de gerenciamento e resposta a incidentes fornecidas por ferramentas de SIEM",
      "B) O console central de EDR, que concentra visibilidade e gerenciamento dos agentes",
      "C) A resposta automática do EDR, que neutraliza ou contém ameaças detectadas nos endpoints",
      "D) As capacidades de análise e geração de relatórios aplicadas sobre os dados centralizados"
    ],
    "ans": 0,
    "exp": "Além de identificar problemas, ferramentas de SIEM fornecem capacidades de gerenciamento e resposta a incidentes, permitindo exatamente o rastreamento, o gerenciamento e a supervisão que faltam à equipe. A alternativa B entrega visibilidade e gerenciamento dos agentes de endpoint, e não o acompanhamento do ciclo de vida dos incidentes. A alternativa C atua sobre a ameaça no endpoint, sem tratar da supervisão dos casos. A alternativa D descreve funções analíticas que ajudam a identificar potenciais problemas de segurança, etapa que a equipe já cumpre."
  },
  {
    "t": "Uma equipe de segurança deseja que, sempre que um conjunto específico de eventos ocorra em seu ambiente, uma sequência padronizada de ações seja executada automaticamente, envolvendo firewalls, scanners de vulnerabilidade, EDR e SIEM já existentes na organização. Qual recurso atende diretamente a esse requisito?",
    "opts": [
      "A) Regras e filtragem aplicadas sobre os dados agregados na plataforma de gerenciamento de eventos",
      "B) Playbooks de uma plataforma SOAR, acionados quando determinados eventos ou gatilhos ocorrem",
      "C) Capacidades de gerenciamento de incidentes, monitoramento e relatórios incorporadas à plataforma",
      "D) Integração via APIs para coletar dados dos dispositivos de segurança existentes no ambiente"
    ],
    "ans": 1,
    "exp": "Playbooks são conjuntos automatizados de ações executados quando conjuntos específicos de eventos ou gatilhos ocorrem, exatamente o que a equipe deseja. A alternativa A descreve o mecanismo usado por ferramentas SIEM para analisar grandes volumes de dados, sem executar sequências automatizadas de resposta. A alternativa C é um recurso real das plataformas SOAR, mas voltado ao acompanhamento e à documentação dos incidentes, não à execução automática das ações. A alternativa D é o meio pelo qual o SOAR coleta dados dos dispositivos de segurança, condição necessária para a orquestração, porém a coleta em si não dispara as ações."
  },
  {
    "t": "Qual das alternativas a seguir representa uma diferença fundamental entre um SIEM e um SOAR?",
    "opts": [
      "A) Um SIEM não fornece um painel de controle.",
      "B) Um SOAR fornece recursos de resposta automatizada.",
      "C) Um SOAR não fornece agregação de logs.",
      "D) Um SIEM fornece análise de logs."
    ],
    "ans": 1,
    "exp": "As ferramentas SOAR se concentram em orquestração e resposta. As ferramentas SIEM normalmente não se concentram em resposta automatizada. Ambas utilizam análise e agregação de logs e fornecem painéis de controle e relatórios."
  },
  {
    "t": "Qual das opções a seguir não é uma maneira válida de verificar o status de um serviço no Windows?",
    "opts": [
      "A) Usar sc na linha de comando.",
      "B) Usar service --status na linha de comando.",
      "C) Usar services.msc.",
      "D) Consultar o status do serviço usando o PowerShell."
    ],
    "ans": 1,
    "exp": "O comando service --status é um comando Linux. O status de um serviço do Windows pode ser consultado usando sc, o snap-in Serviços do Console de Gerenciamento Microsoft (MMC) ou uma consulta do PowerShell."
  },
  {
    "t": "Um analista realiza a captura de tráfego de um host suspeito e constata que todas as sessões com o destino externo estão criptografadas, impedindo a inspeção do conteúdo dos pacotes. Qual abordagem oferece a melhor chance de identificar a presença de malware nesse cenário?",
    "opts": [
      "A) Analisar o user agent presente nas requisições para identificar o dispositivo e o sistema operacional de origem",
      "B) Avaliar padrões de tráfego indicativos de malware, como acesso a sites reconhecidamente maliciosos e envio de tráfego inesperado em portas incomuns",
      "C) Comparar o conteúdo capturado com amostras conhecidas para confirmar a família de malware envolvida",
      "D) Aumentar o escopo da captura para incluir todas as interfaces do segmento e reconstruir a sessão completa"
    ],
    "ans": 1,
    "exp": "Quando a criptografia impede ver o conteúdo dos pacotes, resta a análise baseada em comportamento, observando padrões como visitas a sites known-bad, tráfego inesperado em portas incomuns e outros comportamentos anormais. A alternativa A depende de campos visíveis em tráfego não criptografado, o que não se aplica aqui. A alternativa C exige acesso ao conteúdo, justamente o que está indisponível. A alternativa D amplia o volume capturado, mas reconstruir sessões criptografadas não torna o conteúdo legível."
  },
  {
    "t": "Um analista precisa capturar tráfego HTTP em um servidor Linux acessado apenas por sessão remota em terminal, sem ambiente gráfico disponível. Ele deseja registrar o conteúdo completo dos pacotes na interface eth0, sem truncamento, com saída detalhada. Qual comando atende ao objetivo?",
    "opts": [
      "A) tcpdump -i eth0 -s0 -v port 80",
      "B) tcpdump -i eth0 -v port 80",
      "C) tcpdump -s0 -v port 80",
      "D) tcpdump -i eth0 -s0 port 80"
    ],
    "ans": 0,
    "exp": "A opção -i eth0 define a interface, -s0 remove o limite de captura para que o conteúdo completo dos pacotes seja registrado, -v gera a saída detalhada e port 80 restringe o tráfego ao HTTP. A alternativa B omite -s0, deixando a captura sujeita a truncamento. A alternativa C não especifica a interface a ser monitorada. A alternativa D captura os pacotes por completo, porém sem a saída detalhada solicitada. O tcpdump é a escolha adequada aqui por ser uma ferramenta de linha de comando embutida em muitas distribuições Linux, útil quando o Wireshark não está disponível ou não é prático."
  },
  {
    "t": "Após a contenção de um comprometimento, um administrador descobre que um endereço IP público sob sua responsabilidade acumulou dezenas de relatos em um serviço público de rastreamento de abuso, com confiança de abuso elevada. Qual ação é a mais apropriada depois de remediar a causa do incidente?",
    "opts": [
      "A) Utilizar o processo de solicitação de remoção disponibilizado pelo próprio serviço de rastreamento de abuso",
      "B) Consultar o Whois do endereço IP para identificar o ISP e acionar o contato de abuso do registrador",
      "C) Assinar um feed automatizado de reputação para acompanhar a evolução da classificação do endereço",
      "D) Alterar o Usage Type associado ao bloco de endereços junto ao provedor de hospedagem"
    ],
    "ans": 0,
    "exp": "Administradores precisam considerar como sair de uma lista de abuso quando os sistemas sob sua responsabilidade são comprometidos, e embora cada site varie, quase todos oferecem um processo para solicitar a remoção. A alternativa B traz uma consulta legítima para obter dados de registro e contato, mas o contato de abuso do registrador não controla a listagem no serviço de reputação. A alternativa C é útil para monitoramento contínuo em escala, sem remover o registro existente. A alternativa D trata de classificação informativa do endereço, sem relação com a retirada dos relatos."
  },
  {
    "t": "Um analista precisa levantar dados de registro e de contato de um domínio externo envolvido em uma investigação, trabalhando a partir de uma estação Windows. Qual afirmação descreve corretamente essa situação?",
    "opts": [
      "A) A consulta deve ser feita exclusivamente pelo site whois.com, já que o termo se refere a esse serviço específico",
      "B) A ferramenta de linha de comando precisa ser adicionada à estação, pois normalmente não vem incluída no sistema",
      "C) A consulta retornará a reputação do domínio, indicando se ele já foi reportado por atividades abusivas",
      "D) O uso da ferramenta é dispensável, pois feeds automatizados de reputação já entregam os dados de registro e contato"
    ],
    "ans": 1,
    "exp": "O whois pode ser executado por linha de comando no Linux por padrão, mas na maioria dos casos precisa ser adicionado a máquinas Windows. A alternativa A confunde o termo geral, que significa consultar um IP ou hostname em um servidor Whois, com o site homônimo. A alternativa C atribui ao whois uma função de serviço de reputação: a consulta resolve o IP ou domínio e retorna dados de registro e contato, não relatos de abuso. A alternativa D inverte os papéis, pois feeds automatizados são usados pela escala de informação de reputação necessária, e não para fornecer os dados cadastrais do domínio."
  },
  {
    "t": "Ao revisar a telemetria de rede de uma estação Windows, um analista observa que o processo notepad.exe estabeleceu conexões de saída em horários fora do expediente, utilizando uma porta incomum. Qual conclusão é mais consistente com esse conjunto de observações?",
    "opts": [
      "A) A estação está executando uma tarefa agendada de atualização de software configurada para horários de baixa utilização",
      "B) Trata-se de um padrão compatível com tráfego de comando e controle, dado o processo envolvido, a porta e o horário",
      "C) A atividade indica exfiltração em andamento, evidenciada pela presença de grandes transferências de dados",
      "D) O comportamento sugere apenas erro de configuração de rede, já que o processo não possui função de comunicação"
    ],
    "ans": 1,
    "exp": "A identificação de tráfego de C&C apoia-se em padrões como tráfego em portas inesperadas, tráfego associado a processos que normalmente não enviariam dados — o próprio notepad.exe é o exemplo clássico — e tráfego em horários não associados às atividades normais do negócio. Três desses indicadores aparecem juntos aqui. A alternativa A oferece uma explicação benigna que não justifica um editor de texto originando conexões. A alternativa C cita grandes transferências de dados, elemento não observado no cenário. A alternativa D descarta o risco com base no mesmo fato que torna a atividade suspeita."
  },
  {
    "t": "Uma organização quer ampliar sua capacidade de identificar atividade maliciosa em um ambiente extenso, utilizando uma ampla variedade de indicadores de comprometimento e comparações contra o comportamento normal previamente estabelecido. Qual abordagem oferece as vantagens de automação e escala nesse contexto?",
    "opts": [
      "A) Manter listas atualizadas de endereços IP e redes reconhecidamente maliciosos para bloqueio no perímetro",
      "B) Realizar revisões periódicas de logs pelos profissionais de segurança em busca de padrões de comprometimento",
      "C) Empregar técnicas avançadas de IA e machine learning associadas a baselining sobre múltiplos indicadores",
      "D) Monitorar transferências de dados volumosas e conexões em portas inesperadas como gatilhos de investigação"
    ],
    "ans": 2,
    "exp": "Técnicas avançadas de IA e ML combinam ampla variedade de indicadores de comprometimento com baselining para apontar atividade potencialmente indesejada ou maliciosa, oferecendo justamente as vantagens de automação e escala. A alternativa A trata de um único padrão de identificação de C&C e depende de listas conhecidas. A alternativa B é uma prática legítima, mas manual e limitada em escala. A alternativa D também descreve padrões válidos de reconhecimento, porém isolados e sem a automação ou a comparação contra a linha de base do ambiente."
  },
  {
    "t": "Um usuário reporta uma mensagem suspeita e a repassa ao time de segurança usando a função de encaminhamento do cliente de e-mail. Ao receber a mensagem, o analista percebe que não consegue obter as informações necessárias para rastrear a origem do envio. Qual é a causa mais provável e a orientação adequada ao usuário?",
    "opts": [
      "A) A mensagem encaminhada perde os cabeçalhos originais; o usuário deve ser instruído a exibir e copiar os cabeçalhos manualmente no cliente",
      "B) O filtro antispam removeu os cabeçalhos ao classificar a mensagem; o analista deve recuperá-los na ferramenta automatizada de análise",
      "C) O remetente utilizou uma conta legítima comprometida, o que suprime o registro dos saltos anteriores no cabeçalho",
      "D) A verificação de SPF falhou no novo destino, o que impediu a preservação das entradas de cabeçalho da mensagem"
    ],
    "ans": 0,
    "exp": "Encaminhar um e-mail coloca o conteúdo em um novo envelope, removendo os cabeçalhos originais necessários à investigação; clientes modernos permitem exibir os cabeçalhos, mas isso é um processo manual que a maioria dos usuários não conhece sem instrução. A alternativa B atribui a perda ao antispam, que realiza análise de cabeçalho e de conteúdo, não sua remoção. A alternativa C descreve um recurso real dos atacantes para burlar filtros, sem relação com a ausência dos cabeçalhos. A alternativa D inverte causa e efeito: o SPF quebra no encaminhamento porque o remetente passa a ser quem encaminhou, mas isso não apaga cabeçalhos."
  },
  {
    "t": "Durante a revisão de uma mensagem reportada como suspeita, um analista observa que o resultado de SPF aparece como neutro, que a entrada de recebimento indica um domínio diferente daquele citado no corpo da mensagem, que a lista de reply-to é extensa e que o ID da mensagem é incomum. Qual avaliação é mais adequada?",
    "opts": [
      "A) A mensagem é legítima, pois um resultado neutro de SPF não caracteriza falha de autenticação do remetente",
      "B) O conjunto de inconsistências nos cabeçalhos é compatível com uma tentativa de phishing e justifica tratamento como mensagem maliciosa",
      "C) A análise é inconclusiva sem o uso de uma ferramenta automatizada de análise de cabeçalho para validar cada campo",
      "D) A mensagem provavelmente partiu de uma conta legítima comprometida, dado que passou pelos filtros de spam da organização"
    ],
    "ans": 1,
    "exp": "A combinação de SPF neutro, divergência entre o domínio citado e a entrada de recebimento, lista extensa de reply-to e message ID estranho forma o padrão de inconsistências que caracteriza uma tentativa de phishing detectável pela análise de cabeçalho. A alternativa A isola um único campo e ignora os demais indícios. A alternativa C transfere a decisão a ferramentas automatizadas, quando o analista precisa saber ler um cabeçalho sem auxílio. A alternativa D descreve uma técnica usada por atacantes para contornar filtros, mas nada no cenário aponta para uma conta legítima comprometida."
  },
  {
    "t": "Durante uma auditoria de configurações de caixas postais, a equipe de segurança identifica regras de encaminhamento automático para endereços externos em várias contas. Qual preocupação melhor justifica a remoção dessas regras?",
    "opts": [
      "A) Mensagens encaminhadas automaticamente aumentam a chance de que payloads maliciosos escapem da varredura realizada pelas ferramentas de e-mail",
      "B) Regras desse tipo tornam as contas alvos preferenciais de atacantes por permitirem contornar filtros de spam em campanhas de phishing",
      "C) O encaminhamento automático pode ser usado por atacantes que comprometeram contas para desviar mensagens, e ainda expõe dados internos fora do perímetro de segurança",
      "D) A prática compromete a análise de cabeçalho ao substituir os campos de autenticação, impedindo a investigação de mensagens suspeitas recebidas"
    ],
    "ans": 2,
    "exp": "O encaminhamento automático é, por vezes, empregado por atacantes que comprometeram uma conta para enviar todas as mensagens recebidas a um destino escolhido e, mesmo sem comprometimento, faz dados internos saírem do perímetro de segurança da organização. A alternativa A trata da varredura de payloads, função da análise automatizada de e-mail, sem relação com o risco das regras. A alternativa B aponta o uso de contas legítimas por atacantes para burlar filtros, situação distinta. A alternativa D descreve a perda de cabeçalhos no encaminhamento, que é uma consequência colateral, não a preocupação central de segurança aqui."
  },
  {
    "t": "Avik recebeu a tarefa de identificar tráfego inesperado na rede de sua organização. Qual das alternativas a seguir não é uma técnica que ela deveria usar?",
    "opts": [
      "A) Análise de protocolos",
      "B) Heurísticas",
      "C) Estabelecimento de uma linha de base",
      "D) Sinalização periódica (beaconing)"
    ],
    "ans": 3,
    "exp": "A análise de protocolos, o uso de recursos de detecção baseados em heurística (comportamento) e o estabelecimento de uma linha de base do tráfego de rede são técnicas comuns usadas para identificar tráfego inesperado na rede. A sinalização periódica (beaconing) ocorre quando um sistema entra em contato com um sistema de comando e controle (C&C) de uma botnet, e provavelmente é uma fonte de tráfego inesperado."
  },
  {
    "t": "Sofia suspeita que um sistema em seu datacenter possa estar enviando tráfego de sinalização periódica (beaconing) para um sistema remoto. Qual das alternativas a seguir não é uma ferramenta útil para ajudar a verificar suas suspeitas?",
    "opts": [
      "A) Fluxos",
      "B) Um analisador de protocolos",
      "C) SNMP",
      "D) Um IDS ou IPS"
    ],
    "ans": 2,
    "exp": "O SNMP normalmente não fornecerá informações específicas sobre o tráfego de rede de um sistema que permitam identificar conexões de saída. Fluxos, capturadores de pacotes (analisadores de protocolos) e um IDS ou IPS podem fornecer uma visão que permita capturar o tráfego suspeito."
  },
  {
    "t": "Um funcionário do setor financeiro recebe uma mensagem que aparenta vir do diretor da área, escrita em tom urgente, solicitando a alteração dos dados bancários de um fornecedor antes do fechamento do dia. A mensagem não contém anexos nem links. Que tipo de ataque está sendo descrito?",
    "opts": [
      "A) Phishing, pela tentativa de obter informações sensíveis do destinatário por meio de engano",
      "B) Personificação, pelo uso de um remetente aparentemente confiável para induzir uma ação que beneficia o atacante",
      "C) Uso de bloco de assinatura clonado para conferir legitimidade à mensagem e evitar suspeitas",
      "D) Distribuição de malware por engenharia social, com o payload entregue após a resposta do destinatário"
    ],
    "ans": 1,
    "exp": "Ataques de personificação costumam se passar por um colega de trabalho ou gerente de confiança, pedindo ao destinatário uma ação como comprar gift cards, alterar informações bancárias ou outra que beneficie o atacante, exatamente o cenário apresentado. A alternativa A descreve phishing, cujo foco é levar o usuário a um site para fornecer credenciais ou entregar informações por engano. A alternativa C aponta uma técnica que atacantes sofisticados empregam, mas nada indica assinatura clonada aqui. A alternativa D pressupõe entrega de malware, e a mensagem não traz anexo nem link de download."
  },
  {
    "t": "Ao revisar uma mensagem reportada por um usuário, um analista precisa determinar com segurança se o remetente declarado foi de fato quem enviou a mensagem e se o conteúdo permaneceu inalterado. Qual elemento fornece essa garantia?",
    "opts": [
      "A) O bloco de assinatura ao final da mensagem, comparado ao padrão adotado pela organização remetente",
      "B) O escaneamento de links embutidos pelas ferramentas de segurança de e-mail antes da entrega",
      "C) A assinatura digital anexada à mensagem, validada por meio do certificado e da chave pública do remetente",
      "D) A ausência de divergência entre o texto exibido nos links e o destino real das URLs"
    ],
    "ans": 2,
    "exp": "Assinaturas digitais apoiam-se em certificados digitais e criptografia de chave pública: o hash da mensagem é cifrado com a chave privada do signatário, e o destinatário valida o hash e decifra a assinatura com a chave pública, comprovando autoria e integridade. A alternativa A ajuda a levantar suspeitas, mas atacantes sofisticados clonam assinaturas legítimas. A alternativa B bloqueia muitos links maliciosos, porém não todos, e nada diz sobre a autoria. A alternativa D é um bom indício de ausência de engano no link, sem comprovar quem enviou nem se o conteúdo foi alterado."
  },
  {
    "t": "Uma organização deseja garantir que os destinatários possam confirmar que uma mensagem realmente partiu do seu domínio e que tanto o corpo quanto elementos do cabeçalho não foram alterados no trajeto. Qual tecnologia atende a esse requisito?",
    "opts": [
      "A) SPF, publicando no DNS a lista de servidores autorizados a enviar mensagens pelo domínio",
      "B) DMARC, aplicando políticas de rejeição ou quarentena sobre mensagens não autênticas",
      "C) DKIM, que assina a mensagem e insere um cabeçalho verificável contra a chave pública publicada no DNS",
      "D) Análise de cabeçalho realizada pelas ferramentas automatizadas de segurança de e-mail"
    ],
    "ans": 2,
    "exp": "O DKIM assina o corpo da mensagem e elementos do cabeçalho, adicionando um cabeçalho DKIM-Signature que pode ser verificado contra a chave pública armazenada em entradas DNS públicas, comprovando a origem e a preservação do conteúdo. A alternativa A autoriza quais sistemas podem enviar em nome do domínio, sem assinar a mensagem. A alternativa B utiliza SPF e DKIM para decidir sobre a aceitação, mas não é o mecanismo que assina o conteúdo. A alternativa D auxilia na identificação de indícios suspeitos, sem oferecer verificação criptográfica."
  },
  {
    "t": "Uma equipe de infraestrutura precisa decidir qual mecanismo permitirá definir o que o destinatário deve fazer com mensagens que falhem na autenticação em nome do domínio corporativo. Qual tecnologia oferece esse controle?",
    "opts": [
      "A) DMARC, que se apoia em SPF e DKIM e permite optar por rejeitar ou colocar em quarentena as mensagens",
      "B) SPF, cujos registros determinam a rejeição de sistemas não listados como remetentes autorizados",
      "C) DKIM, cuja verificação de assinatura define a aceitação da mensagem pelo servidor de destino",
      "D) S/MIME, que anexa certificado e assinatura ao e-mail para validação pelo destinatário"
    ],
    "ans": 0,
    "exp": "Diferentemente de SPF e DKIM, o DMARC pode ser usado para determinar se uma mensagem de um remetente deve ser aceita, permitindo escolher entre rejeitar ou colocar em quarentena as mensagens não enviadas por remetente compatível. A alternativa B trata da autorização dos servidores de envio, e a rejeição decorre da própria lista, sem política configurável de tratamento. A alternativa C fornece a verificação de origem e integridade, mas não define a política de aceitação. A alternativa D é uma ferramenta de assinatura digital aplicada individualmente às mensagens, não uma política de domínio."
  },
  {
    "t": "Uma empresa utiliza vários provedores externos para envio de comunicações em nome do seu domínio e enfrenta dificuldades para relacionar todos eles em sua configuração de autenticação publicada no DNS. Além disso, planeja habilitar o DMARC em breve. Quais considerações são pertinentes nesse cenário?",
    "opts": [
      "A) O DKIM deve substituir a configuração atual, pois não impõe limites de tamanho aos registros publicados",
      "B) A limitação de 255 caracteres nos registros SPF dificulta ambientes com muitos remetentes, e o DMARC deve iniciar com a flag none enquanto os relatórios são revisados",
      "C) A configuração de DMARC deve iniciar diretamente com política de quarentena, já que a maioria dos grandes serviços de e-mail já adota o protocolo",
      "D) Os registros de autenticação devem ser mantidos apenas nos servidores de e-mail, evitando o limite imposto às entradas DNS"
    ],
    "ans": 1,
    "exp": "Registros SPF no DNS são limitados a 255 caracteres, o que complica organizações com muitos servidores de e-mail ou múltiplos remetentes externos; e a recomendação ao implementar DMARC é começar com a flag none nas políticas e revisar os relatórios antes de avançar, evitando bloquear mensagens legítimas. A alternativa A propõe uma substituição indevida, pois DKIM e SPF cumprem funções distintas. A alternativa C ignora a etapa de observação dos relatórios, arriscando o bloqueio de e-mails importantes. A alternativa D contraria o modelo dessas tecnologias, cujos registros são publicados no DNS."
  },
  {
    "t": "Um analista recebe um executável recuperado de um servidor e precisa determinar rapidamente se o binário corresponde exatamente à versão legítima distribuída pelo fabricante, sem depender de ferramentas adicionais de inspeção. Qual abordagem atende diretamente a esse objetivo?",
    "opts": [
      "A) Executar o comando strings sobre o binário para extrair texto legível e comparar o conteúdo com a versão original",
      "B) Calcular o hash SHA256 do arquivo com utilitários nativos e compará-lo ao hash do arquivo known good",
      "C) Implantar uma solução de monitoramento contínuo de integridade para detectar alterações nos arquivos do servidor",
      "D) Verificar se o binário foi submetido a packing ou criptografia, já que a ofuscação impede a comparação direta"
    ],
    "ans": 1,
    "exp": "Hashing é a técnica usada para comparar um arquivo suspeito com o original known good; uma boa função de hash não produz hashes iguais a menos que o arquivo seja exatamente o mesmo, e utilitários SHA256 ou MD5 estão embutidos no Linux e disponíveis via PowerShell no Windows. A alternativa A revela indícios do que o programa pode fazer, mas não comprova equivalência exata com o original. A alternativa C descreve monitoramento contínuo baseado em hashes, útil de forma preventiva e contínua, não para a comparação pontual solicitada. A alternativa D aponta um obstáculo real à análise direta do conteúdo, porém não responde à pergunta sobre correspondência com o arquivo legítimo."
  },
  {
    "t": "Uma organização decide implantar internamente uma ferramenta automatizada de análise de malware capaz de examinar não apenas binários, mas também PDFs, arquivos do Microsoft Office e sites maliciosos, observando tráfego de rede e chamadas a APIs geradas pelos artefatos. Qual precaução é essencial nessa implantação?",
    "opts": [
      "A) Restringir a análise a amostras já classificadas por múltiplos motores de antivírus antes do envio à ferramenta",
      "B) Configurar cookbooks com parâmetros avançados para que a execução ocorra contra múltiplos sistemas operacionais",
      "C) Isolar o sistema que hospeda a ferramenta, considerando o potencial de comportamento malicioso durante a execução",
      "D) Optar por um serviço comercial hospedado externamente, evitando a execução de amostras na infraestrutura própria"
    ],
    "ans": 2,
    "exp": "Executar uma ferramenta de sandbox auto-hospedada exige considerar o potencial de comportamento malicioso e isolar o sistema, mesmo que a solução seja projetada para segurança. A alternativa A inverte a ordem da análise: a sandbox serve justamente para observar o que a amostra faz, inclusive quando ainda não há classificação prévia. A alternativa B descreve um recurso de um serviço comercial com opção básica gratuita, e não da ferramenta auto-hospedada descrita no cenário. A alternativa D sugere abandonar a decisão já tomada pela organização, em vez de apontar a precaução necessária para operá-la com segurança."
  },
  {
    "t": "Um analista revisa registros de autenticação e identifica que a conta de um colaborador realizou um login nos Estados Unidos às 13h e outro login a partir do Japão poucos minutos depois. Como essa ocorrência deve ser classificada?",
    "opts": [
      "A) Atividade anormal de conta decorrente de acesso fora dos horários habituais para aquele usuário",
      "B) Uso indevido de direitos administrativos, dado que a conta apresentou acessos incompatíveis com seu perfil",
      "C) Desvio detectado por comparação com a baseline de entidades, sem indicação de conta comprometida",
      "D) Viagem impossível, já que os acessos partem de locais que não podem ser explicados por deslocamento entre eles"
    ],
    "ans": 3,
    "exp": "Logins a partir de locais diferentes que não podem ser razoavelmente explicados por uma viagem entre eles caracterizam a viagem impossível, indicador que marca a atividade como suspeita — o exemplo clássico é o acesso nos Estados Unidos seguido, pouco depois, de acesso do Japão. A alternativa A descreve outro tipo de atividade anormal de conta, ligada ao horário e não à localização incompatível. A alternativa B exigiria tentativa de uso de privilégios administrativos, o que não aparece no cenário. A alternativa C reconhece um desvio, mas descarta indevidamente a possibilidade de comprometimento da conta, que é justamente o que esse indicador sugere."
  },
  {
    "t": "Um analista escreve um script próprio em uma estação Windows recém-preparada e, ao tentar executá-lo, recebe uma mensagem informando que o arquivo não pode ser carregado por não estar assinado digitalmente. Ele precisa executar seus próprios scripts locais, mas quer manter a exigência de assinatura por publicador confiável para conteúdo obtido na Internet. Qual configuração atende a esse objetivo?",
    "opts": [
      "A) Set-ExecutionPolicy AllSigned",
      "B) Set-ExecutionPolicy Unrestricted",
      "C) Set-ExecutionPolicy RemoteSigned",
      "D) Set-ExecutionPolicy Bypass"
    ],
    "ans": 2,
    "exp": "A política RemoteSigned permite executar scripts escritos na máquina local e ainda exige que scripts baixados da Internet sejam assinados por um publicador confiável, exatamente o equilíbrio desejado. A alternativa A exigiria assinatura também para os scripts locais do próprio analista, que não é um publicador confiável. A alternativa B permite a execução de qualquer script, apenas solicitando confirmação para os baixados da Internet, sem exigir assinatura. A alternativa D libera a execução sem gerar qualquer aviso para conteúdo obtido na Internet, sendo a opção menos restritiva."
  },
  {
    "t": "Durante a triagem de um incidente, um analista encontra o seguinte trecho em um arquivo recuperado de um servidor:\n\nprint(\"Hello, world!\")\n\nQual identificação e característica estão corretas para esse trecho?",
    "opts": [
      "A) Trata-se de PowerShell, cujo comando nativo de exibição em console produz a saída mostrada",
      "B) Trata-se de shell script em Bash, executado pelo interpretador de linha de comando do sistema",
      "C) Trata-se de código que exige compilação prévia antes de gerar a saída indicada",
      "D) Trata-se de Python, linguagem interpretada em que a indentação serve para agrupar instruções"
    ],
    "ans": 3,
    "exp": "O comando print é o usado em Python para imprimir saída, e a linguagem é interpretada, podendo ser executada diretamente; nela, a indentação tem propósito específico de agrupar instruções. A alternativa A confunde com o PowerShell, cuja linha equivalente usa Write-Host. A alternativa B atribui o código ao Bash, shell scripting executado por interpretador de linha de comando em sistemas Linux/Unix. A alternativa C contraria a natureza interpretada do Python, que dispensa compilação e por isso é uma escolha prática para programas portáteis com mais complexidade do que um shell script."
  },
  {
    "t": "Susan quer usar um protocolo de segurança de e-mail para determinar a autenticidade de um e-mail. Qual das opções a seguir garantirá que o servidor de e-mail de sua organização consiga determinar se deve aceitar um e-mail de um remetente?",
    "opts": [
      "A) DMARC",
      "B) SPF",
      "C) DKIM",
      "D) POP3"
    ],
    "ans": 0,
    "exp": "DMARC (Autenticação, Relatórios e Conformidade de Mensagens com Base em Domínio) é uma ferramenta de protocolo que combina SPF e DKIM para comprovar que um remetente é quem afirma ser. O DKIM valida que um domínio está associado a uma mensagem, enquanto o SPF lista os servidores autorizados a enviar mensagens a partir do seu domínio. O POP3 é um protocolo de e-mail, mas não desempenha a função descrita."
  },
  {
    "t": "Juan quer ver uma lista de processos junto com sua utilização de CPU em um formato interativo. Qual ferramenta integrada ao Linux ele deve usar?",
    "opts": [
      "A) df",
      "B) top",
      "C) tail",
      "D) cpugrep"
    ],
    "ans": 1,
    "exp": "O comando top no Linux fornece uma interface interativa para visualizar a utilização da CPU, o uso de memória e outros detalhes dos processos em execução. df mostra o uso do disco, tail exibe o final de um arquivo e cpugrep é um comando inventado."
  },
  {
    "t": "Uma equipe precisa distribuir uma rotina de coleta de evidências para estações Windows, servidores Linux e alguns hosts macOS. A rotina exige lógica mais complexa do que um shell script simples e deve rodar sem adaptações significativas por plataforma. Qual afirmação descreve corretamente as opções disponíveis?",
    "opts": [
      "A) O Python é interpretado, vem por padrão em muitos sistemas Linux e está disponível para a maioria dos sistemas operacionais modernos, atendendo bem a programas portáteis",
      "B) O PowerShell é a escolha natural, pois está pré-instalado nas três plataformas e dispensa ajustes de política de execução",
      "C) O shell scripting em Bash é preferível, pois interpretadores de linha de comando não fazem parte integrante dos sistemas operacionais",
      "D) Qualquer das linguagens exigirá reescrita por plataforma, já que nenhuma delas roda fora do sistema operacional de origem"
    ],
    "ans": 0,
    "exp": "O Python é uma linguagem interpretada, encontrada por padrão em muitos sistemas Linux e disponível para a maioria dos sistemas operacionais modernos, o que o torna uma escolha fácil para programas portáteis que exigem mais complexidade do que um shell script. A alternativa B erra ao afirmar pré-instalação nas três plataformas: o PowerShell vem pré-instalado no Windows e, embora seja open source e disponível para Mac e Linux, seu uso mais comum fora do Windows é compatibilidade de código; além disso, a política de execução precisa ser ajustada. A alternativa C inverte o fato de que shells são parte integrada do sistema operacional. A alternativa D contraria a disponibilidade multiplataforma dessas linguagens."
  },
  {
    "t": "Um analista precisa localizar, em um arquivo de log extenso, todas as linhas que contenham o termo de busca independentemente de estarem em maiúsculas ou minúsculas, exibindo também o número de cada linha correspondente e paginando o resultado, já que a saída ocupará várias telas. Qual comando atende a esses requisitos?",
    "opts": [
      "A) grep -c -n falha syslog.txt | more",
      "B) grep -i -n falha syslog.txt | more",
      "C) grep -v -n falha syslog.txt | more",
      "D) grep -i -r falha syslog.txt | more"
    ],
    "ans": 1,
    "exp": "A flag -i faz a correspondência tanto em minúsculas quanto em maiúsculas, -n exibe a linha correspondente junto ao número da linha, e o pipe para more pagina a saída. A alternativa A troca a insensibilidade a maiúsculas pela contagem de ocorrências (-c), que não lista as linhas. A alternativa C usa -v, que retorna justamente as linhas que não correspondem ao texto buscado. A alternativa D substitui -n por -r, flag voltada à leitura recursiva de todos os arquivos sob cada diretório, deixando de mostrar os números de linha exigidos."
  },
  {
    "t": "Um analista recebe um arquivo de configuração exportado de uma ferramenta de segurança e precisa identificar rapidamente em qual formato de dados ele está estruturado, sem abri-lo em uma aplicação específica. Qual característica permite reconhecer que o conteúdo está em JSON?",
    "opts": [
      "A) O uso de colchetes angulares em instruções de abertura e fechamento, de forma semelhante ao HTML",
      "B) A presença de chaves delimitando as instruções de abertura e fechamento, acompanhadas de colchetes nas listas",
      "C) A estrutura lógica e a legibilidade por humanos, características que distinguem esse formato dos demais",
      "D) A adoção de uma linguagem de marcação legível tanto por máquinas quanto por pessoas"
    ],
    "ans": 1,
    "exp": "Para determinar se um arquivo está codificado em JSON, procura-se por chaves ({ }) nas instruções de abertura e fechamento, com colchetes ([ ]) usados nas listas de itens. A alternativa A descreve o XML, que emprega colchetes angulares (< >) de modo parecido com o HTML. A alternativa C cita atributos que ambos os formatos compartilham, já que os dois são logicamente estruturados e em geral legíveis por humanos, portanto não servem para distingui-los. A alternativa D caracteriza o XML como linguagem de marcação legível por máquina e por humanos, não o JSON, que usa notação JavaScript para intercâmbio de dados."
  }
];
