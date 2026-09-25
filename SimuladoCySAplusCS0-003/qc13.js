// Questões do arquivo Questionario_Cap13.txt, na ordem original.
// As questões são numeradas sequencialmente no simulado.
const Qs = [
  {
    "t": "Uma organização decidiu estruturar sua capacidade forense e iniciar a montagem de um kit de ferramentas para uso em investigações. Considerando as boas práticas recomendadas para essa etapa inicial, quais fatores devem ser avaliados antes da aquisição das ferramentas?",
    "opts": [
      "A) O número de incidentes de segurança registrados nos últimos doze meses",
      "B) Os tipos de investigação a serem conduzidos, os sistemas e dispositivos a serem analisados, e os padrões probatórios a serem atendidos",
      "C) O fornecedor com maior participação de mercado em soluções forenses",
      "D) A quantidade de licenças de software de proteção de endpoint já adquiridas pela organização"
    ],
    "ans": 1,
    "exp": "Antes de montar um kit de ferramentas forenses, é preciso definir o escopo de atuação — quais tipos de investigação serão conduzidos, quais sistemas e dispositivos precisarão ser analisados e quais padrões probatórios deverão ser atendidos —, pois esses fatores determinam as capacidades, custos e finalidades das ferramentas a escolher. A alternativa A traz uma métrica operacional que não orienta diretamente a escolha do ferramental. A alternativa C prioriza um critério comercial, secundário frente às necessidades reais da organização. A alternativa D refere-se a um controle preventivo distinto (proteção de endpoint), não relacionado ao processo de montagem do kit forense."
  },
  {
    "t": "Durante uma investigação, um analista de segurança precisa garantir que as evidências coletadas possam sustentar seu processo caso ele venha a ser questionado posteriormente. Qual é o principal benefício de manter, no kit forense, ferramentas administrativas e materiais de documentação adequados?",
    "opts": [
      "A) Reduzir o tempo total gasto na etapa de captura de dados dos dispositivos",
      "B) Eliminar a necessidade de uma estação de trabalho forense dedicada durante a análise",
      "C) Fornecer prova do processo seguido, caso seja necessário apresentá-lo em tribunal, à gestão ou a auditores",
      "D) Assegurar que as ferramentas de captura sejam compatíveis com qualquer tipo de dispositivo analisado"
    ],
    "ans": 2,
    "exp": "A documentação e os materiais de suporte adequados existem para comprovar a integridade e a validade do processo investigativo, permitindo apresentá-lo a um tribunal, à gestão ou a auditores quando exigido. A alternativa A confunde documentação com eficiência operacional, que não é sua finalidade principal. A alternativa B está incorreta porque a documentação não substitui a estação de trabalho forense, que é um componente distinto do kit. A alternativa D trata de compatibilidade de ferramentas de captura, algo não relacionado à função probatória dos registros e da documentação."
  },
  {
    "t": "Em qual formato o dd produz arquivos ao criar imagens de disco?",
    "opts": [
      "A) ddf",
      "B) RAW",
      "C) EN01",
      "D) OVF"
    ],
    "ans": 1,
    "exp": "O dd cria arquivos no formato RAW, bit a bit. EN01 é o formato de arquivo forense do EnCase, OVF é um formato de arquivo de virtualização e ddf é uma resposta inventada."
  },
  {
    "t": "Gurvinder concluiu sua análise de causa raiz e quer usá-la para evitar problemas futuros. O que ele deve documentar em seguida?",
    "opts": [
      "A) Lições aprendidas",
      "B) O diagrama de arquitetura do sistema",
      "C) Um processo forense atualizado",
      "D) As retenções legais vigentes"
    ],
    "ans": 0,
    "exp": "Depois de concluída uma análise de causa raiz, as lições aprendidas costumam ser documentadas para garantir que problemas semelhantes sejam evitados no futuro. Diagramas de arquitetura e processos atualizados podem fazer parte dessas lições aprendidas. Uma lista de retenções legais vigentes normalmente não faz parte desse processo."
  },
  {
    "t": "Um analista está prestes a conectar um disco rígido apreendido a uma estação de trabalho forense para realizar a captura de uma imagem. Ele precisa garantir que nenhuma escrita ocorra no disco original durante esse processo, preservando inclusive os registros de data e hora de acesso aos arquivos. Qual componente do kit forense atende diretamente a essa necessidade?",
    "opts": [
      "A) Duplicador de drive forense",
      "B) Suíte de investigação forense",
      "C) Formulário de cadeia de custódia",
      "D) Bloqueador de escrita (write blocker)"
    ],
    "ans": 3,
    "exp": "O bloqueador de escrita impede fisicamente qualquer operação de gravação no drive conectado, preservando a integridade da evidência e evitando alterações em metadados como horários de acesso. O duplicador (A) copia o drive e valida a correspondência entre original e cópia, mas não é o componente responsável por impedir a escrita. A suíte de investigação (B) é o software usado para capturar e analisar imagens, não para bloquear gravações. O formulário de cadeia de custódia (C) documenta quem teve posse da evidência, sem relação com proteção contra escrita."
  },
  {
    "t": "Uma equipe forense precisa criar uma cópia idêntica de um disco apreendido e comprovar que o conteúdo da cópia corresponde exatamente ao do disco original antes de iniciar a análise. Qual componente do kit forense foi projetado especificamente para essa finalidade?",
    "opts": [
      "A) Duplicador de drive forense",
      "B) Câmera de documentação forense",
      "C) Cabos e adaptadores de drive",
      "D) Bloqueador de escrita"
    ],
    "ans": 0,
    "exp": "O duplicador de drive forense copia discos e fornece validação de que o conteúdo do drive original corresponde ao da nova cópia. A câmera (B) documenta configurações e rótulos, sem função de cópia ou validação de drives. Cabos e adaptadores (C) garantem apenas conectividade física com diferentes dispositivos. O bloqueador de escrita (D) impede gravações no drive original durante o processo, mas não realiza a cópia nem a validação de correspondência entre os dados."
  },
  {
    "t": "Uma organização planeja reutilizar SSDs e mídias removíveis baseadas em memória flash para armazenar futuras imagens forenses e precisa assegurar que nenhum dado remanescente de investigações anteriores permaneça nessas mídias. Qual conceito a equipe forense deve compreender bem antes de considerar essa mídia devidamente apagada?",
    "opts": [
      "A) Cadeia de custódia",
      "B) Capacidade de armazenamento do duplicador de drive",
      "C) Nivelamento de desgaste (wear leveling) e sua relação com a permanência de dados (data remanence)",
      "D) Compatibilidade dos cabos e adaptadores com o dispositivo"
    ],
    "ans": 2,
    "exp": "O nivelamento de desgaste em mídias flash e SSDs pode fazer com que dados permaneçam fisicamente armazenados mesmo após um apagamento padrão, gerando permanência de dados que compromete a solidez forense do processo. A cadeia de custódia (A) trata do rastreamento da posse da evidência, sem relação com apagamento de mídia. A capacidade do duplicador (B) refere-se à cópia de drives, não à limpeza segura de mídias. A compatibilidade de cabos e adaptadores (D) diz respeito à conectividade física, não à eliminação de dados remanescentes."
  },
  {
    "t": "Um analista forense captura a imagem de um disco rígido durante uma investigação e, antes de iniciar a análise, precisa confirmar matematicamente que a cópia obtida é idêntica ao disco original, sem qualquer alteração de dados. Qual capacidade de uma ferramenta forense atende diretamente a essa necessidade?",
    "opts": [
      "A) Hashing e validação",
      "B) Imageamento",
      "C) Análise de dumps de processo e de memória",
      "D) Quebra de senhas"
    ],
    "ans": 0,
    "exp": "Hashing e validação permitem gerar e comparar valores de hash para confirmar que a cópia forense corresponde exatamente ao original, sem alterações. Imageamento (B) é a capacidade de capturar a cópia em si, não de validá-la matematicamente depois. Análise de dumps de processo e de memória (C) serve para examinar conteúdo de memória volátil, sem relação com a verificação de integridade de discos. Quebra de senhas (D) auxilia no acesso a dados protegidos, não na comprovação de fidelidade de uma cópia."
  },
  {
    "t": "Durante a resposta a um incidente, a equipe precisa examinar o conteúdo da memória volátil (RAM) capturada de um sistema comprometido, a fim de identificar processos maliciosos que estavam em execução no momento do comprometimento. Qual capacidade de ferramenta forense é mais adequada para essa tarefa?",
    "opts": [
      "A) Quebra de senhas",
      "B) Visualizadores de log",
      "C) Hashing e validação",
      "D) Análise de dumps de processo e de memória"
    ],
    "ans": 3,
    "exp": "A análise de dumps de processo e de memória permite examinar o conteúdo capturado da RAM para identificar processos ativos, incluindo atividade maliciosa, no momento da captura. Quebra de senhas (A) foca em obter acesso a credenciais protegidas, não em analisar processos em execução. Visualizadores de log (B) tratam da interpretação de registros de eventos armazenados, não de dumps de memória. Hashing e validação (C) confirma integridade de dados, não examina o conteúdo da memória."
  },
  {
    "t": "Durante a análise de uma imagem forense de um disco, um analista localiza fragmentos de dados de um arquivo anterior em uma área que corresponde ao espaço remanescente após a gravação do arquivo atualmente armazenado ali, dentro de um cluster alocado. Como esse tipo de espaço é chamado?",
    "opts": [
      "A) Espaço não alocado (unallocated space)",
      "B) Setor sobressalente (spare sector)",
      "C) Espaço reservado por nivelamento de desgaste (wear leveling)",
      "D) Slack space"
    ],
    "ans": 3,
    "exp": "Slack space é o espaço deixado dentro de uma área alocada após a gravação de um arquivo, podendo conter fragmentos de dados escritos anteriormente ou até arquivos ocultos intencionalmente. Espaço não alocado (A) refere-se a áreas do disco que nunca foram particionadas, um conceito diferente. Setor sobressalente (B) é uma reserva física em discos rígidos tradicionais destinada a substituir setores defeituosos. Espaço reservado por nivelamento de desgaste (C) é um mecanismo específico de SSDs para gerenciar o desgaste das células de memória, também distinto do slack space."
  },
  {
    "t": "Uma equipe de resposta a incidentes está avaliando se deve adotar ferramentas forenses de código aberto, como SIFT ou Autopsy, ou ferramentas comerciais, como FTK ou EnCase. Qual característica é frequentemente apontada como vantagem das ferramentas comerciais nesse contexto?",
    "opts": [
      "A) Dispensam a necessidade de conhecimento forense detalhado por parte do analista",
      "B) Tendem a ser mais fáceis de defender em tribunal",
      "C) Eliminam a necessidade de documentação da cadeia de custódia",
      "D) Garantem maior velocidade na captura de imagens forenses"
    ],
    "ans": 1,
    "exp": "Ferramentas forenses comerciais, apesar do custo mais elevado, costumam ser mais fáceis de defender em tribunal, o que leva investigadores profissionais a preferi-las em certos contextos. A alternativa A é falsa, pois o uso eficaz de qualquer ferramenta de análise exige conhecimento forense detalhado, seja ela paga ou gratuita. A alternativa C está incorreta, já que nenhuma ferramenta elimina a necessidade de documentar a cadeia de custódia. A alternativa D não é uma vantagem associada especificamente às ferramentas comerciais."
  },
  {
    "t": "O sistema de arquivos de um disco apreendido está corrompido e não pode ser montado normalmente, mas o analista ainda precisa recuperar arquivos individuais armazenados nesse disco. Qual capacidade de um utilitário de análise forense é mais adequada para essa situação?",
    "opts": [
      "A) Linhas do tempo (timelines) de alterações do sistema",
      "B) Análise de metadados do sistema de arquivos, como a Master File Table (MFT)",
      "C) Ferramentas de recuperação de arquivos (file carving)",
      "D) Análise e revisão de arquivos de log"
    ],
    "ans": 2,
    "exp": "Ferramentas de file carving permitem recuperar arquivos mesmo sem que o sistema de arquivos esteja disponível, sendo a opção adequada quando ele está corrompido ou inacessível. Linhas do tempo (A) mostram a sequência de alterações no sistema, mas não recuperam arquivos diretamente. Análise de metadados como a MFT (B) depende do sistema de arquivos estar íntegro e acessível, o que contradiz o cenário descrito. Análise de logs (D) trata da revisão de registros de eventos, sem relação com a recuperação de arquivos do disco."
  },
  {
    "t": "Mike está conduzindo uma análise de causa raiz. Qual das alternativas a seguir não é uma etapa típica do processo de análise de causa raiz?",
    "opts": [
      "A) Identificar fatores contribuintes",
      "B) Identificar soluções para a causa raiz",
      "C) Realizar uma análise de riscos",
      "D) Implementar controles ou correções para tratar a causa raiz"
    ],
    "ans": 2,
    "exp": "Embora a análise de causa raiz possa envolver uma análise de custo-benefício antes da implementação de controles ou correções, a avaliação de riscos normalmente é um processo separado."
  },
  {
    "t": "Alice quer copiar uma unidade sem qualquer possibilidade de que ela seja modificada pelo processo de cópia. Que tipo de dispositivo ela deve usar para garantir que isso não aconteça durante seu processo de aquisição de dados?",
    "opts": [
      "A) Um bloqueador de leitura",
      "B) Um clonador de unidades",
      "C) Um bloqueador de gravação",
      "D) Um validador de hash"
    ],
    "ans": 2,
    "exp": "Bloqueadores de gravação garantem que nenhuma alteração seja feita em uma unidade de origem ao criar uma cópia forense. Impedir leituras impossibilitaria a cópia da unidade; clonadores de unidades podem ou não ter recursos integrados de bloqueio de gravação; e a validação de hash é útil para garantir que os conteúdos correspondam, mas não impede alterações na unidade de origem."
  },
  {
    "t": "Um analista está examinando uma unidade de armazenamento cujo sistema de arquivos foi corrompido e não pode ser montado normalmente. Sem conseguir consultar a estrutura de diretórios e os metadados usuais, ele decide varrer os dados brutos bloco a bloco em busca de cabeçalhos, rodapés e outros indicadores de estrutura de arquivo, na tentativa de reconstruir arquivos completos ou parciais. Qual técnica forense está sendo aplicada?",
    "opts": [
      "A) File carving",
      "B) Análise de metadados do sistema de arquivos (como a Master File Table)",
      "C) Criação de linha do tempo (timeline) de alterações do sistema",
      "D) Validação por hashing"
    ],
    "ans": 0,
    "exp": "File carving é a técnica usada quando o sistema de arquivos original está corrompido ou indisponível, permitindo recuperar arquivos completos ou parciais a partir da varredura dos dados bloco a bloco em busca de cabeçalhos, rodapés e outros indicadores de estrutura. A análise de metadados do sistema de arquivos (B) depende justamente de o sistema de arquivos estar íntegro e acessível, o que não é o caso do cenário. A criação de timeline (C) organiza eventos cronologicamente, mas não recupera arquivos a partir de dados brutos. A validação por hashing (D) confirma a integridade de uma cópia forense, sem relação com a reconstrução de arquivos a partir de blocos de dados."
  },
  {
    "t": "Durante uma análise em um editor hexadecimal, um investigador identifica um arquivo ao localizar a sequência de bytes \\xFF\\xD8 no início dos dados e \\xFF\\xD9 próximo ao final, associando esse padrão a um arquivo JPEG. Qual método de file carving está sendo utilizado nesse caso?",
    "opts": [
      "A) Carving baseado na estrutura do arquivo",
      "B) Carving baseado em cabeçalho e rodapé (header e footer)",
      "C) Carving baseado em conteúdo",
      "D) Análise de metadados do sistema de arquivos"
    ],
    "ans": 1,
    "exp": "O carving baseado em cabeçalho e rodapé identifica arquivos a partir de padrões de bytes conhecidos que marcam o início e o fim de um tipo específico de arquivo, como \\xFF\\xD8 e \\xFF\\xD9 em JPEGs. O carving baseado na estrutura do arquivo (A) utiliza informações sobre a organização interna do arquivo, não sequências fixas de cabeçalho/rodapé. O carving baseado em conteúdo (C) analisa elementos como contagem de caracteres e reconhecimento de texto, não assinaturas binárias. A análise de metadados do sistema de arquivos (D) depende de estruturas como a MFT, que pressupõe um sistema de arquivos íntegro — diferente do cenário descrito."
  },
  {
    "t": "Após um incidente de segurança, uma organização precisa assegurar que as imagens de disco coletadas e todas as ações realizadas sobre elas possam ser validadas e revisadas posteriormente, minimizando o risco de que a evidência seja contestada judicialmente por falhas no controle das provas. Qual recurso de uma suíte forense atende diretamente a essa necessidade?",
    "opts": [
      "A) Recuperação de arquivos por file carving",
      "B) Rastreamento automatizado e registrado da cadeia de custódia",
      "C) Validação por hashing das imagens capturadas",
      "D) Análise de dumps de memória volátil"
    ],
    "ans": 1,
    "exp": "O rastreamento da cadeia de custódia de forma automatizada e registrada em log garante que imagens de drives e as ações executadas sejam validadas e disponibilizadas para revisão, reduzindo o risco de contestações legais por práticas de custódia deficientes. O file carving (A) trata da recuperação de arquivos quando o sistema de arquivos está indisponível, sem relação com o controle da posse das evidências. A validação por hashing (C) confirma a integridade de uma imagem específica, mas não documenta quem teve posse da evidência nem as ações realizadas ao longo do tempo. A análise de dumps de memória (D) examina o conteúdo da RAM, não abordando o controle custodial das provas."
  },
  {
    "t": "Um analista concluiu a criação de uma imagem forense de um disco rígido e precisa confirmar, antes de arquivar a evidência, que a cópia é idêntica ao disco original. Qual procedimento deve ser adotado para essa confirmação?",
    "opts": [
      "A) Comparar o tamanho total em bytes dos dois discos",
      "B) Verificar se ambos os discos possuem o mesmo número de série de fabricação",
      "C) Gerar um hash tanto do disco original quanto da cópia e confirmar que os valores coincidem",
      "D) Restaurar a cópia em um disco novo e testar sua inicialização (boot)"
    ],
    "ans": 2,
    "exp": "Para validar uma imagem forense, gera-se um hash do original e da cópia; se os valores coincidirem, as imagens são consideradas idênticas, e ambos os hashes devem ser registrados no log forense. Comparar apenas o tamanho em bytes (A) não garante que o conteúdo seja idêntico bit a bit. O número de série de fabricação (B) identifica o hardware, não o conteúdo armazenado. Testar a inicialização da cópia (D) poderia alterar dados e não comprova a integridade da cópia, além de não ser um procedimento de validação forense reconhecido."
  },
  {
    "t": "Um profissional de segurança questiona por que MD5 e SHA1 ainda são utilizados para validar imagens forenses, já que ambos os algoritmos são desaconselhados para a maioria dos usos criptográficos atuais. Qual justificativa é apropriada nesse contexto forense?",
    "opts": [
      "A) MD5 e SHA1 são rápidos e amplamente disponíveis, e os ataques conhecidos contra eles envolvem cenários de risco que normalmente não se aplicam a imagens forenses",
      "B) MD5 e SHA1 são atualmente considerados livres de qualquer vulnerabilidade conhecida",
      "C) O uso de MD5 e SHA1 é exigido por lei em qualquer investigação forense digital",
      "D) MD5 e SHA1 substituíram completamente o uso de formatos de imagem como o EO1"
    ],
    "ans": 0,
    "exp": "MD5 e SHA1 permanecem em uso no contexto forense por serem rápidos e amplamente disponíveis; as vulnerabilidades conhecidas contra eles envolvem a criação intencional de arquivos diferentes com o mesmo hash, um cenário improvável em imagens forenses. A alternativa B é falsa, pois ambos os algoritmos possuem vulnerabilidades documentadas. A alternativa C apresenta uma exigência legal incorreta, sem relação com o motivo real de seu uso forense. A alternativa D confunde formatos de imagem forense com algoritmos de hash, que são conceitos distintos."
  },
  {
    "t": "Durante uma investigação, um analista deseja comparar os hashes de arquivos encontrados em um sistema com uma base de referência de hashes de software legítimo e conhecido. Qual recurso é indicado para essa consulta?",
    "opts": [
      "A) O comando strings, utilizado para extrair texto legível de arquivos binários",
      "B) O formato de imagem EO1 do EnCase",
      "C) O comando md5sum executado em um sistema Linux",
      "D) A National Software Reference Library (NSRL), mantida pelo NIST"
    ],
    "ans": 3,
    "exp": "A NSRL, mantida pelo NIST, inclui o Reference Data Set com hashes e assinaturas digitais de software conhecido, permitindo comparar arquivos encontrados com versões legítimas conhecidas. O comando strings (A) serve para extrair texto legível de binários, não para consultar uma base de hashes. O formato EO1 (B) é um formato de imagem forense com hashing embutido, não um banco de dados de referência. O comando md5sum (C) apenas gera o hash de um arquivo ou volume, sem fornecer uma base de comparação de arquivos conhecidos."
  },
  {
    "t": "Um respondedor de incidentes captura um arquivo executável suspeito e deseja extrair qualquer texto legível por humanos que possa estar embutido no arquivo, mesmo sabendo que se trata de um arquivo binário. Qual utilitário em um sistema Linux é indicado para essa tarefa?",
    "opts": [
      "A) md5sum",
      "B) strings",
      "C) File carving",
      "D) Write blocker"
    ],
    "ans": 1,
    "exp": "O utilitário strings, disponível em sistemas Linux, permite extrair trechos de texto legível por humanos presentes em arquivos binários, mesmo que o restante do conteúdo não seja legível dessa forma. O md5sum (A) gera valores de hash para verificação de integridade, não extrai texto. O file carving (C) é usado para recuperar arquivos quando o sistema de arquivos não está disponível, sem relação com extração de texto de um binário específico. O write blocker (D) impede escrita em um dispositivo conectado, sem função de leitura ou extração de conteúdo."
  },
  {
    "t": "Uma equipe de segurança suspeita que um arquivo executável em um servidor possa ter sido alterado por um invasor. Para verificar isso, a equipe compara o arquivo atual com uma versão íntegra conhecida, usando um utilitário de checksum manual. Qual é o objetivo dessa comparação?",
    "opts": [
      "A) Detectar alterações no binário comparando seu hash com o de uma versão conhecida como confiável ou fornecida por um fabricante",
      "B) Recuperar arquivos apagados a partir de espaço não alocado do disco",
      "C) Determinar a data e hora exatas em que o arquivo foi criado no sistema",
      "D) Identificar o formato de imagem forense utilizado para capturar o servidor"
    ],
    "ans": 0,
    "exp": "Checksums manuais com MD5 ou SHA1 permitem verificar se um binário corresponde a uma versão conhecida como confiável, a uma cópia de backup ou a um checksum fornecido por um fornecedor, revelando alterações não autorizadas. A recuperação de arquivos apagados (B) é função do file carving, não do hashing. Determinar data e hora de criação (C) depende de metadados do sistema de arquivos, não de hashing. Identificar o formato de imagem (D) não é uma finalidade do hashing de binários, mas sim uma característica do processo de captura da imagem."
  },
  {
    "t": "Durante a reconstrução da linha do tempo de uma intrusão, um analista precisa entender exatamente o que estava ocorrendo em um host comprometido durante a janela de interesse, incluindo processos em execução e o estado geral do sistema no momento do incidente. Qual capacidade forense atende diretamente a essa necessidade?",
    "opts": [
      "A) Rastreamento da cadeia de custódia dos dispositivos apreendidos",
      "B) Duplicação forense do disco para fins de arquivamento",
      "C) Análise do sistema operacional, de processos e de memória",
      "D) Apagamento seguro (wipe) de mídias antes do reuso"
    ],
    "ans": 2,
    "exp": "A análise do sistema operacional, de processos e de memória fornece dados-chave sobre o que estava ocorrendo em um sistema durante o intervalo de tempo alvo de uma investigação. O rastreamento da cadeia de custódia (A) documenta a posse da evidência, mas não revela o que ocorreu no sistema. A duplicação forense (B) preserva os dados para análise futura, sem analisar processos ou memória. O apagamento seguro de mídias (D) é uma prática de preparação do kit forense, sem relação com a reconstrução de atividade em um sistema comprometido."
  },
  {
    "t": "Um profissional responde a um incidente e encontra um laptop protegido por criptografia de disco completo (como o BitLocker), ainda ligado e desbloqueado. Ele sabe que desligar o equipamento pode dificultar bastante uma futura tentativa de acessar o conteúdo do drive. Quais artefatos, se devidamente capturados, têm maior probabilidade de conter os dados necessários para descriptografar o drive?",
    "opts": [
      "A) Formulários de cadeia de custódia preenchidos no momento da apreensão",
      "B) Registros de eventos do sistema operacional relacionados a login",
      "C) Metadados do sistema de arquivos referentes à criação de arquivos",
      "D) Arquivos de hibernação e dumps de falha (crash dumps)"
    ],
    "ans": 3,
    "exp": "Arquivos de hibernação e dumps de falha podem conter os dados necessários para descriptografar o drive, o que torna o acesso a uma máquina desbloqueada criticamente importante para o profissional forense. Formulários de cadeia de custódia (A) documentam a posse da evidência, sem conter dados de descriptografia. Registros de login (B) indicam acessos ao sistema, mas não armazenam chaves de criptografia. Metadados de criação de arquivos (C) informam quando arquivos foram criados, sem relação com a recuperação de chaves de descriptografia."
  },
  {
    "t": "Um CISO está decidindo onde investir no desenvolvimento da capacidade de resposta forense da organização, considerando a tendência crescente de adoção de nuvem no setor. Segundo a prática atual, qual afirmação melhor reflete onde a atividade forense deve continuar se concentrando para a maioria dos profissionais, apesar dessa tendência?",
    "opts": [
      "A) A maior parte do trabalho forense provavelmente continuará envolvendo endpoints tradicionais, como servidores, desktops, laptops e dispositivos móveis",
      "B) Toda a atividade forense migrará exclusivamente para ambientes em nuvem",
      "C) Dispositivos móveis deixarão de ser relevantes para investigações forenses",
      "D) Apenas servidores corporativos continuarão sendo alvo de investigações forenses"
    ],
    "ans": 0,
    "exp": "Embora a migração para a nuvem aumente a atividade forense nesse ambiente, é provável que a maior parte do trabalho forense continue envolvendo endpoints tradicionais para a maioria dos profissionais. A alternativa B exagera a tendência ao afirmar exclusividade da nuvem, o que não corresponde à realidade descrita. A alternativa C está incorreta, pois dispositivos móveis continuam sendo um tipo relevante de endpoint. A alternativa D restringe indevidamente o escopo apenas a servidores, ignorando desktops, laptops e dispositivos móveis como endpoints igualmente relevantes."
  },
  {
    "t": "Um analista precisa investigar um servidor Windows que permanece ligado e em pleno funcionamento durante o processo de resposta a incidente. Ele avalia as abordagens metodológicas disponíveis para realizar forense de memória nesse cenário. Quais são as duas abordagens fundamentais aplicáveis a essa situação?",
    "opts": [
      "A) Recuperar exclusivamente dumps de falha (crash dumps) já gerados anteriormente pelo sistema",
      "B) Verificar isoladamente objetos de driver por meio de comandos de plug-in especializados",
      "C) Realizar análise forense ao vivo (live) na máquina em execução, ou copiar a memória viva para uma análise referente a um ponto no tempo",
      "D) Identificar isoladamente conexões TCP ativas no momento da investigação"
    ],
    "ans": 2,
    "exp": "Conduzir forense de memória exige duas abordagens fundamentais: realizar a análise forense ao vivo diretamente na máquina em execução, ou copiar a memória viva para uma análise posterior referente a um ponto no tempo. A alternativa A cita os dumps de falha, um artefato relacionado, mas que não representa uma das duas abordagens metodológicas centrais. A alternativa B descreve apenas uma capacidade específica de plug-in (escaneamento de objetos de driver), não uma abordagem completa. A alternativa D também isola uma única capacidade (conexões TCP), insuficiente como metodologia geral de forense de memória."
  },
  {
    "t": "A organização de Frederick foi informada de que os dados devem ser preservados devido a uma ação judicial pendente. Como se chama esse tipo de exigência?",
    "opts": [
      "A) Um adiantamento de honorários",
      "B) Uma retenção legal",
      "C) Um congelamento de dados",
      "D) Uma retenção extralegal"
    ],
    "ans": 1,
    "exp": "Uma retenção legal é um processo usado para preservar todos os dados relacionados a uma ação judicial pendente ou quando se prevê uma ação judicial. Um adiantamento de honorários é pago a um advogado para mantê-lo disponível para trabalhar. Os outros dois termos foram inventados para esta questão."
  },
  {
    "t": "Que processo costuma ser realizado como parte da análise forense de resposta a incidentes?",
    "opts": [
      "A) Atribuição de culpa",
      "B) Análise de causa raiz",
      "C) Hashing reverso",
      "D) Retenções legais"
    ],
    "ans": 1,
    "exp": "Uma análise de causa raiz costuma ser realizada para identificar o que deu errado e por quê. Em seguida, as lições aprendidas são identificadas e aplicadas para garantir que a organização não enfrente o mesmo problema no futuro. A atribuição de culpa não faz parte de um procedimento forense e costuma ser desestimulada na maioria das organizações. Hashing reverso não é possível, pois hashes são funções unidirecionais. Retenções legais estão associadas a ações judiciais, não à análise forense de resposta a incidentes."
  },
  {
    "t": "Durante a resposta a um incidente envolvendo um endpoint comprometido, um analista precisa de uma ferramenta capaz de detectar hooks de API, ler o buffer do teclado, capturar o conteúdo da área de transferência (clipboard) do Windows e identificar conexões TCP ativas, tudo por meio de comandos de plug-in em um framework de código aberto dedicado à análise de memória. Qual ferramenta atende a essa descrição?",
    "opts": [
      "A) EnCase",
      "B) The Sleuth Kit (TSK)",
      "C) FTK",
      "D) Volatility"
    ],
    "ans": 3,
    "exp": "O Volatility é um framework de forense de memória de código aberto com ampla gama de comandos de plug-in, incluindo exatamente as capacidades mencionadas: detecção de hooks de API, leitura do buffer do teclado, captura do clipboard e identificação de conexões TCP ativas. EnCase (A) e FTK (C) são suítes forenses comerciais voltadas principalmente à captura e análise de imagens de disco, não à análise de memória por plug-ins. O Sleuth Kit (B) é um utilitário forense de código aberto, mas focado em sistemas de arquivos e discos, não em memória."
  },
  {
    "t": "Uma equipe de segurança descobre que um invasor sofisticado tentou acessar arquivos de dump de falha (crash dump) armazenados em um servidor comprometido, antes mesmo que a equipe de resposta a incidentes iniciasse sua própria análise forense. Por que esses arquivos são considerados um alvo valioso tanto para profissionais forenses quanto para atacantes experientes?",
    "opts": [
      "A) Porque contêm exclusivamente registros de auditoria de acesso ao sistema operacional",
      "B) Porque frequentemente contêm uma cópia da memória viva do sistema, podendo incluir artefatos como chaves de criptografia e senhas",
      "C) Porque eliminam definitivamente a necessidade de qualquer análise de disco no endpoint comprometido",
      "D) Porque são gerados exclusivamente durante desligamentos programados e controlados do sistema"
    ],
    "ans": 1,
    "exp": "Dumps de falha frequentemente contêm uma cópia da memória viva do sistema, podendo incluir artefatos sensíveis como chaves de criptografia e senhas, o que os torna atraentes tanto para profissionais forenses quanto para atacantes experientes. A alternativa A descreve um conteúdo não característico desse tipo de arquivo. A alternativa C exagera o valor dos dumps de memória, já que a análise de disco continua sendo a atividade forense mais comum em endpoints. A alternativa D está tecnicamente invertida: dumps de falha são gerados justamente em situações de falha do sistema, não em desligamentos controlados."
  },
  {
    "t": "Um analista forense precisa capturar dados armazenados em um smartphone apreendido, que se encontra bloqueado e com o armazenamento criptografado. Considerando os recursos de segurança presentes em muitos sistemas operacionais de telefones atuais, qual capacidade as ferramentas forenses especializadas para dispositivos móveis costumam oferecer para viabilizar essa captura?",
    "opts": [
      "A) Capacidades especializadas de descriptografia ou de força bruta (brute-forcing) para acessar o telefone ou volume bloqueado",
      "B) Aquisição de backups armazenados fora do aparelho, que sempre contêm a totalidade dos dados mais recentes do telefone",
      "C) Redefinição de fábrica (factory reset) remota para eliminar o bloqueio de tela do aparelho",
      "D) Interceptação em tempo real do tráfego de rede gerado pelo dispositivo"
    ],
    "ans": 0,
    "exp": "Devido aos recursos de segurança presentes em muitos sistemas operacionais de telefones, as ferramentas forenses móveis frequentemente incluem capacidades especializadas de descriptografia ou de força bruta, permitindo capturar dados de um telefone ou volume bloqueado e criptografado. A alternativa B inverte a lógica dos backups, que podem não conter todos os dados atuais, ao contrário do afirmado. A alternativa C descreve uma ação destrutiva que eliminaria evidências, contrária à prática forense. A alternativa D trata de comunicação de rede externa, não do acesso a dados armazenados localmente e criptografados no aparelho."
  },
  {
    "t": "Um investigador não consegue desbloquear diretamente um smartphone apreendido e passa a avaliar fontes alternativas de evidência relacionadas ao mesmo aparelho. Por que os backups desse telefone costumam ser considerados um alvo atraente para aquisição e revisão forense?",
    "opts": [
      "A) Porque sempre contêm uma cópia completa e atualizada de todos os dados presentes atualmente no telefone",
      "B) Porque eliminam definitivamente a necessidade de qualquer tentativa de acesso ao aparelho físico",
      "C) Porque são protegidos por um nível de segurança superior ao do próprio telefone",
      "D) Porque podem conter dados mais antigos já apagados do telefone e costumam ter nível de segurança inferior ao do próprio aparelho"
    ],
    "ans": 3,
    "exp": "Backups de telefone podem conter dados mais antigos já apagados do dispositivo e frequentemente não possuem o mesmo nível de segurança do telefone original, tornando-os um alvo atrativo para aquisição forense. A alternativa A é falsa, pois um backup não necessariamente contém uma cópia completa e atualizada de todos os dados do aparelho. A alternativa B exagera o papel do backup, que complementa, mas não substitui, a análise do dispositivo físico. A alternativa C inverte a relação de segurança, já que os backups tendem a ter proteção inferior, não superior, à do telefone."
  },
  {
    "t": "Durante a triagem de arquivos extraídos de um disco apreendido, um examinador forense identifica diversos arquivos protegidos por uma camada adicional de senha, além da autenticação do sistema operacional ou da conta de usuário. Quais tipos de arquivo são citados como locais comuns para esse tipo de proteção adicional?",
    "opts": [
      "A) Registros de eventos (logs) do sistema operacional",
      "B) Arquivos do Microsoft Office, PDFs e arquivos compactados ZIP e RAR",
      "C) Imagens forenses no formato EO1 geradas por suítes forenses",
      "D) Dumps de memória capturados por ferramentas de análise forense"
    ],
    "ans": 1,
    "exp": "Locais comuns de proteção por senha além do nível de sistema operacional ou conta incluem arquivos do Microsoft Office, PDFs e arquivos compactados ZIP e RAR, tornando ferramentas de recuperação de senha úteis para o examinador forense. Logs do sistema operacional (A) normalmente não utilizam esse tipo de proteção por senha individual. Imagens forenses em formato EO1 (C) utilizam hashing integrado para validação, não senhas de usuário. Dumps de memória (D) não são tipicamente protegidos por senha nesse sentido, sendo antes um artefato de análise."
  },
  {
    "t": "Uma equipe forense está decidindo se deve investir em uma placa gráfica (GPU) potente para sua estação de trabalho, prevendo a necessidade eventual de realizar quebra de senha por força bruta em arquivos apreendidos. Qual é a principal razão pela qual esse investimento é considerado vantajoso nesse cenário?",
    "opts": [
      "A) A GPU acelera a geração de hashes MD5 e SHA1 durante a validação de imagens forenses",
      "B) A GPU é um requisito obrigatório para a execução de qualquer suíte de investigação forense",
      "C) O uso de uma GPU pode gerar aumentos massivos de velocidade na quebra de senha por força bruta, em comparação com o processamento tradicional baseado em CPU",
      "D) A GPU substitui a necessidade de ferramentas dedicadas de recuperação de senha, como o Advanced Office Password Recovery"
    ],
    "ans": 2,
    "exp": "Muitas ferramentas de quebra de senha utilizam a GPU para realizar operações de cracking, gerando aumentos massivos de velocidade em comparação à abordagem tradicional baseada em CPU, o que torna esse investimento valioso para ataques de força bruta. A alternativa A atribui à GPU uma função de hashing/validação de imagens, que não é mencionada como sua finalidade nesse contexto. A alternativa B exagera ao afirmar que a GPU é obrigatória para qualquer suíte forense, o que não corresponde à realidade descrita. A alternativa D está incorreta, pois a GPU é usada pelas próprias ferramentas de recuperação de senha para acelerar o processo, não como substituta delas."
  },
  {
    "t": "Uma equipe forense precisa transportar mídias e arquivos de evidência entre duas instalações da organização e busca impedir que os dados sejam expostos caso o material seja interceptado ou o local de armazenamento seja comprometido por terceiros não autorizados. Qual capacidade das ferramentas forenses atende diretamente a essa necessidade?",
    "opts": [
      "A) Suporte para desempacotamento de packers utilizados por malware",
      "B) Geração de hash MD5 para validar a integridade da cópia forense",
      "C) Uso de GPU para acelerar ataques de força bruta contra senhas",
      "D) Criptografia integrada para proteger dados sensíveis durante transferências ou comprometimento do ambiente forense"
    ],
    "ans": 3,
    "exp": "Ferramentas forenses frequentemente possuem capacidades de criptografia para assegurar que dados sensíveis sob investigação não sejam expostos durante transferências de drives ou arquivos, ou caso o ambiente forense seja comprometido. O desempacotamento de packers (A) está relacionado à análise de malware, não à proteção de dados forenses em trânsito. A geração de hash MD5 (B) serve para validar integridade, não para proteger contra exposição de conteúdo. O uso de GPU para quebra de senha (C) visa obter acesso a arquivos protegidos, não proteger a confidencialidade dos próprios dados forenses."
  },
  {
    "t": "Ao analisar uma amostra de malware coletada durante uma investigação, um analista percebe que o código resiste fortemente a tentativas diretas de engenharia reversa e suspeita que o arquivo tenha sido processado por uma ferramenta específica antes da distribuição. Qual é a finalidade dessa ferramenta, comumente empregada por autores de malware?",
    "opts": [
      "A) Gerar hashes SHA2 para validar a integridade do arquivo malicioso",
      "B) Dificultar ou impossibilitar a análise direta do código do malware",
      "C) Criptografar exclusivamente o tráfego de rede gerado pelo malware",
      "D) Recuperar senhas de acesso a arquivos protegidos por criptografia"
    ],
    "ans": 1,
    "exp": "Packers são ferramentas usadas por pacotes de malware para se protegerem contra engenharia reversa, tornando a análise direta do código difícil ou impossível; algumas ferramentas forenses oferecem suporte para desempacotamento e decodificação, como no caso da codificação Base64. A geração de hashes (A) valida integridade, não oculta ou ofusca código. Criptografar tráfego de rede (C) é uma aplicação distinta de criptografia, não a função descrita para os packers. Recuperação de senhas (D) refere-se ao acesso a arquivos protegidos, sem relação com a ofuscação de código malicioso."
  },
  {
    "t": "Durante a análise de um endpoint comprometido, um investigador precisa reconstruir a sequência de ações executadas no sistema e correlacioná-las com outros artefatos já coletados na investigação. Qual recurso, comumente presente em suítes forenses, é mais adequado para essa tarefa?",
    "opts": [
      "A) Visualizador de log (log viewer)",
      "B) Duplicador de drive forense",
      "C) Ferramenta de recuperação de arquivos (file carving)",
      "D) Bloqueador de escrita (write blocker)"
    ],
    "ans": 0,
    "exp": "Suítes forenses normalmente incluem visualizadores de log capazes de correlacionar entradas de log com outras informações forenses, o que os torna adequados para reconstruir ações realizadas no sistema durante a investigação. O duplicador de drive (B) copia e valida drives, sem função de correlação de eventos. O file carving (C) recupera arquivos quando o sistema de arquivos está indisponível, não analisa registros de atividade. O bloqueador de escrita (D) protege a integridade da evidência ao impedir gravações, sem oferecer capacidade de análise ou correlação de logs."
  },
  {
    "t": "Um analista de segurança está investigando um possível vazamento de dados ocorrido há duas semanas. Não há nenhuma captura de pacotes em tempo real disponível para o período exato do incidente, mas a equipe de rede preservou logs de firewall, logs de outros dispositivos de rede e dados históricos de monitoramento de tráfego. Considerando essas circunstâncias, qual afirmação é verdadeira sobre a viabilidade de conduzir a forense de rede nesse caso?",
    "opts": [
      "A) A forense de rede só é possível por meio de captura de tráfego em tempo real durante o próprio incidente",
      "B) Os logs de dispositivos de rede preservados só podem ser usados para identificar consultas DNS, não outros tipos de evento",
      "C) A investigação pode prosseguir, pois a forense de rede pode ser conduzida tanto pela captura de tráfego quanto pela revisão de artefatos como logs de segurança/rede e dados de monitoramento de tráfego",
      "D) Sem uma captura de pacotes ao vivo, somente ferramentas comerciais de análise forense podem processar os logs preservados"
    ],
    "ans": 2,
    "exp": "A forense de tráfego de rede pode ser conduzida tanto pela captura de tráfego na rede quanto pela revisão de artefatos relacionados, como logs de dispositivos de segurança ou de rede e dados de monitoramento de tráfego, que ajudam a reconstruir eventos e incidentes — por isso a investigação pode prosseguir mesmo sem uma captura ao vivo do período exato. A alternativa A restringe indevidamente a forense de rede apenas à captura em tempo real. A alternativa B limita erroneamente a utilidade dos logs apenas a consultas DNS. A alternativa D insere uma exigência de exclusividade de ferramentas comerciais não sustentada."
  },
  {
    "t": "Um analista de resposta a incidentes precisa escolher uma ferramenta para investigar um possível comprometimento de rede. Ele busca uma opção sem custo de licenciamento, compatível com diversos sistemas operacionais, que ofereça uma interface gráfica para capturar e visualizar pacotes de rede, além de permitir salvar e exportar as capturas em múltiplos formatos para análise posterior. Qual ferramenta atende a esse conjunto de requisitos?",
    "opts": [
      "A) Uma suíte de SIEM baseada em nuvem, projetada exclusivamente para correlação centralizada de logs de múltiplos sites",
      "B) Um appliance de hardware dedicado que replica o tráfego de um link de rede, mas não oferece qualquer interface gráfica ao analista",
      "C) Um analisador de pacotes proprietário, com licenciamento pago, disponível apenas para um único sistema operacional corporativo",
      "D) Wireshark, um analisador de protocolos de rede de código aberto que roda em diversos sistemas operacionais modernos e permite capturar, visualizar, salvar, analisar e exportar dados de rede por meio de uma interface gráfica"
    ],
    "ans": 3,
    "exp": "O Wireshark é um analisador de protocolos de rede de código aberto (também chamado de packet sniffer) que roda em muitos sistemas operacionais modernos, permitindo capturar e visualizar dados de rede por meio de uma interface gráfica, com suporte para salvar, analisar e exportar capturas em diversos formatos — atendendo exatamente aos requisitos do cenário. A alternativa A descreve uma plataforma de correlação de logs em nuvem, conceito distinto de um analisador de pacotes local e gratuito. A alternativa B descreve um appliance sem interface gráfica, contrário ao requisito de GUI. A alternativa C exige licenciamento pago e restringe a ferramenta a um único sistema operacional."
  },
  {
    "t": "Um analista de resposta a incidentes chega a um ambiente com múltiplos servidores Linux e precisa iniciar a captura de tráfego de rede imediatamente, sem tempo hábil para instalar softwares adicionais, contando apenas com o que normalmente já vem disponível nesse tipo de sistema. Qual ferramenta tem maior probabilidade de já estar instalada por padrão nesse cenário?",
    "opts": [
      "A) Wireshark",
      "B) Tcpdump",
      "C) Volatility",
      "D) Uma suíte de investigação forense comercial como o FTK"
    ],
    "ans": 1,
    "exp": "O tcpdump tem maior probabilidade de já vir instalado por padrão em sistemas Linux e Unix, ao contrário do Wireshark, que normalmente precisa ser instalado. O Wireshark (A) é um analisador de pacotes poderoso, mas costuma exigir instalação prévia. O Volatility (C) é um framework de forense de memória, sem relação com captura de tráfego por padrão em sistemas Linux. Suítes comerciais como o FTK (D) são voltadas majoritariamente à análise de disco, não sendo tipicamente pré-instaladas em servidores Linux."
  },
  {
    "t": "Durante uma investigação, um analista captura tráfego de rede usando o tcpdump e passa a comparar essa abordagem com o uso do Wireshark. Ele nota que a saída em texto do tcpdump pode ser mais difícil de organizar visualmente. Qual prática é indicada para tornar a análise dos dados capturados pelo tcpdump mais eficiente?",
    "opts": [
      "A) Combinar o tcpdump com outras ferramentas, como o grep, para ordenar e analisar os dados",
      "B) Sempre direcionar a captura exclusivamente para o buffer padrão do terminal",
      "C) Substituir integralmente o uso de linha de comando por uma interface gráfica nativa do tcpdump",
      "D) Utilizar aceleração por GPU para processar os pacotes capturados mais rapidamente"
    ],
    "ans": 0,
    "exp": "O tcpdump é particularmente poderoso quando combinado com ferramentas como o grep, permitindo ordenar e analisar os mesmos dados de pacote que poderiam ser capturados com o Wireshark. Direcionar a saída apenas para o buffer do terminal (B) é, na verdade, uma limitação, já que grandes volumes de tráfego podem exceder a capacidade do buffer, exigindo o direcionamento para um arquivo. O tcpdump não possui uma interface gráfica nativa (C), sendo uma ferramenta de linha de comando. Aceleração por GPU (D) é associada à quebra de senhas, não à análise de pacotes de rede."
  },
  {
    "t": "Uma organização está expandindo seus workloads para ambientes que utilizam contêineres e máquinas virtuais efêmeras, geridos por um provedor terceirizado, e sua equipe de resposta a incidentes está avaliando o impacto disso na capacidade forense da empresa. Diante desse cenário, o que a equipe deve fazer com antecedência?",
    "opts": [
      "A) Continuar utilizando exclusivamente o kit forense físico tradicional, sem qualquer planejamento adicional",
      "B) Presumir que todos os artefatos necessários estarão sempre disponíveis diretamente na estação de trabalho forense local",
      "C) Determinar quais artefatos podem ser reunidos, o que será necessário para reuni-los e com quais provedores talvez seja preciso firmar parceria para obtê-los",
      "D) Aguardar a ocorrência de um incidente real antes de definir qualquer procedimento relacionado a esses ambientes"
    ],
    "ans": 2,
    "exp": "Diante de artefatos que passam a existir em VMs e contêineres efêmeros ou hospedados por terceiros, a equipe precisa planejar com antecedência quais artefatos pode reunir, o que será necessário para reuni-los e com quais provedores talvez precise firmar parceria para obtê-los. A alternativa A ignora os desafios específicos trazidos pela nuvem e pela virtualização. A alternativa B presume disponibilidade local que frequentemente não existe nesses ambientes. A alternativa D contraria a necessidade de planejamento prévio, adiando a preparação até depois do incidente, o que compromete a capacidade de resposta."
  },
  {
    "t": "Uma equipe forense está conduzindo uma investigação envolvendo um serviço de nuvem operado em modelo de tenant compartilhado (shared tenant) e enfrenta dificuldade para obter certos dados diretamente. Qual é a razão mais provável para essa dificuldade nesse tipo de ambiente?",
    "opts": [
      "A) O modelo de tenant compartilhado costuma exigir a participação do provedor de serviço de nuvem para que os dados forenses sejam obtidos",
      "B) Os provedores de nuvem estão legalmente proibidos de armazenar qualquer tipo de log de acesso",
      "C) Ambientes de tenant compartilhado eliminam completamente a necessidade de cadeia de custódia",
      "D) Serviços em nuvem nunca retêm dados por mais de 24 horas, independentemente do contrato firmado"
    ],
    "ans": 0,
    "exp": "Modelos de tenant compartilhado tornam os dados forenses difíceis de obter e frequentemente exigem a participação do provedor de serviço de nuvem na investigação. A alternativa B inventa uma proibição legal que não existe necessariamente. A alternativa C está incorreta, pois a cadeia de custódia continua sendo necessária, ainda que mais difícil de manter em ambientes de nuvem. A alternativa D estabelece um prazo fixo de retenção não sustentado, já que isso depende do contrato e do fornecedor específico."
  },
  {
    "t": "Uma equipe de segurança identificou que um serviço de nuvem provavelmente estará envolvido em uma investigação forense em andamento, mas a organização não controla diretamente os dados necessários. Qual deve ser o próximo passo mais adequado da equipe nesse cenário?",
    "opts": [
      "A) Reunir a documentação de cadeia de custódia sem consultar o provedor",
      "B) Interromper imediatamente a investigação até que o provedor libere acesso irrestrito ao ambiente",
      "C) Aplicar um bloqueador de escrita (write blocker) diretamente na infraestrutura do provedor de nuvem",
      "D) Trabalhar com o fornecedor para identificar um curso de ação, já que os dados não estão sob controle da organização"
    ],
    "ans": 3,
    "exp": "Quando a organização não controla os dados necessários em um serviço de nuvem, o passo recomendado é trabalhar com o fornecedor para identificar um curso de ação viável. A alternativa A ignora a necessidade de envolver o provedor nesse contexto. A alternativa B propõe uma paralisação desproporcional e pouco produtiva. A alternativa C aplica um conceito de forense de endpoint (write blocker) a um contexto de nuvem, onde esse tipo de controle físico não se aplica da mesma forma."
  },
  {
    "t": "Um profissional de segurança está conduzindo uma investigação forense em um ambiente virtualizado no contexto de resposta a incidentes, sem que o caso esteja vinculado a um processo judicial. Comparando esse cenário com uma investigação forense conduzida para fins de um caso legal, qual das afirmações abaixo é verdadeira quanto aos requisitos probatórios (evidentiary requirements) aplicáveis?",
    "opts": [
      "A) São idênticos em ambos os cenários, não havendo qualquer distinção prática",
      "B) Tendem a ser menos rigorosos no contexto de resposta a incidentes, tornando a forma e o momento de captura das cópias forenses fatores particularmente críticos",
      "C) São mais rigorosos no contexto de resposta a incidentes do que em um processo judicial",
      "D) Deixam de se aplicar integralmente quando o ambiente investigado é virtualizado"
    ],
    "ans": 1,
    "exp": "Investigações forenses conduzidas para resposta a incidentes tendem a ter requisitos probatórios menos rigorosos do que os exigidos em um processo judicial, o que torna a forma como as cópias forenses dos sistemas são tratadas — e como e quando são capturadas — fatores críticos. A alternativa A ignora essa distinção relevante entre os contextos. A alternativa C inverte a relação correta entre os dois cenários. A alternativa D exagera o efeito da virtualização, que não elimina a necessidade de atender a padrões probatórios, apenas pode alterar sua rigidez conforme o tipo de investigação."
  },
  {
    "t": "Jeff está investigando o comprometimento de um sistema e sabe que o primeiro evento foi relatado em 5 de outubro. Que recurso de uma ferramenta forense ele deve usar para relacionar a essa data os outros eventos encontrados em logs e arquivos?",
    "opts": [
      "A) Uma linha do tempo",
      "B) Um visualizador de logs",
      "C) Análise do Registro",
      "D) Um validador de registros de data e hora"
    ],
    "ans": 0,
    "exp": "Linhas do tempo estão entre as ferramentas mais úteis ao conduzir uma investigação de um comprometimento ou de outro evento. Ferramentas forenses fornecem recursos integrados de linha do tempo que permitem esse tipo de análise."
  },
  {
    "t": "Durante o processo de validação de sua cópia forense, Danielle calculou o hash do original, clonou os arquivos de imagem e obteve os seguintes valores MD5. O que provavelmente está errado?\n\nb49794e007e909c00a51ae208cacb169  original.img\nd9ff8a0cf6bc0ab066b6416e7e7abf35  clone.img",
    "opts": [
      "A) O original foi modificado.",
      "B) O clone foi modificado.",
      "C) O dd falhou.",
      "D) Ocorreu uma alteração ou um problema desconhecido."
    ],
    "ans": 3,
    "exp": "Como Danielle não calculou o hash da unidade de origem antes da clonagem, não é possível determinar em que ponto o problema ocorreu. Se ela tivesse executado o MD5sum tanto antes quanto depois do processo de clonagem, poderia verificar que o disco original não havia sido alterado."
  },
  {
    "t": "Um profissional forense está definindo o escopo de uma investigação envolvendo um ambiente virtualizado. Ele já levou em conta os objetivos forenses da investigação e as limitações dos métodos de captura e cópia que pretende usar. Que outro fator relacionado ao próprio ambiente ele também deve ter em mente ao planejar o trabalho?",
    "opts": [
      "A) A eventual necessidade de aplicar as mesmas técnicas usadas em conteinerização, já que os dois conceitos operam de forma idêntica",
      "B) A eliminação da necessidade de uma cópia segura do sistema, já que ambientes virtualizados dispensam esse cuidado",
      "C) A possibilidade de o próprio ambiente de virtualização subjacente ser o alvo do trabalho forense",
      "D) A garantia de que os requisitos probatórios serão sempre idênticos aos de um caso legal, independentemente do tipo de investigação"
    ],
    "ans": 2,
    "exp": "O profissional forense deve lembrar de considerar o ambiente de virtualização subjacente, avaliando inclusive o que fazer caso esse próprio ambiente seja o alvo do trabalho forense. A alternativa A exagera a semelhança entre virtualização e conteinerização, que compartilham objetivos e operam de forma similar, mas não idêntica. A alternativa B está incorreta, pois sistemas virtualizados continuam sendo copiados e movidos para um ambiente seguro de análise. A alternativa D contraria a ideia de que os requisitos probatórios variam conforme o tipo de investigação (resposta a incidentes, interna ou aplicação da lei)."
  },
  {
    "t": "Durante um incidente de segurança em um ambiente conteinerizado, a plataforma de orquestração destruiu e reconstruiu automaticamente o contêiner afetado como parte de seu processo padrão de remediação, antes que a equipe forense pudesse atuar sobre ele. Qual característica fundamental dos contêineres explica essa situação e seu principal impacto forense?",
    "opts": [
      "A) Contêineres são normalmente projetados para serem descartáveis, e sua natureza efêmera pode levar à perda de artefatos forenses quando são destruídos ou reprogramados para outro nó",
      "B) Os logs internos dos contêineres são replicados automaticamente em um repositório central antes de qualquer ação de remediação, preservando-os independentemente da reconstrução",
      "C) Ferramentas de orquestração modernas bloqueiam por padrão qualquer reconstrução automática de contêineres enquanto um incidente estiver em aberto",
      "D) Uma vez capturados, os artefatos de sistema de arquivos de um contêiner permanecem associados a ele mesmo após sua destruição e recriação"
    ],
    "ans": 0,
    "exp": "Contêineres costumam ser projetados como descartáveis, e diante de qualquer problema — de segurança ou não — processos automatizados frequentemente desligam, destroem e reconstroem o contêiner. Essa efemeridade faz com que artefatos forenses sejam perdidos quando o contêiner é destruído ou reprogramado para outro nó. A opção B inventa um mecanismo de replicação central de logs, contrariando o fato de que logs internos são efêmeros. A opção C afirma uma restrição inexistente sobre reconstrução automática. A opção D contradiz diretamente a efemeridade dos artefatos de sistema de arquivos, que se perdem junto com o contêiner."
  },
  {
    "t": "Um analista tenta reconstruir a topologia de comunicação entre diversos contêineres ao longo de uma semana em um ambiente orquestrado, mas percebe que os endpoints e as rotas de rede mudaram diversas vezes nesse período, dificultando a atribuição das conexões observadas. Qual característica da conteinerização contribui diretamente para essa dificuldade?",
    "opts": [
      "A) Os contêineres se comunicam por meio de endereçamento de rede estático definido no momento da criação, sem qualquer reconfiguração posterior",
      "B) Contêineres se comunicam por meio de redes definidas por software que mudam com frequência à medida que contêineres são colocados online, retirados de operação ou movidos",
      "C) O tráfego de rede entre contêineres segue exatamente as mesmas regras de segmentação aplicadas a máquinas virtuais tradicionais, sem qualquer variação dinâmica",
      "D) A orquestração de contêineres consolida toda a comunicação de rede em um único segmento fixo, eliminando mudanças de topologia"
    ],
    "ans": 1,
    "exp": "Contêineres se comunicam por redes definidas por software (SDN) que mudam com frequência conforme contêineres entram em operação, saem ou são movidos, o que dificulta reconstruir uma topologia estável ao longo do tempo. A opção A descreve um endereçamento estático que contraria essa natureza dinâmica. A opção C iguala indevidamente o comportamento de rede de contêineres ao de máquinas virtuais tradicionais, ignorando as mudanças frequentes. A opção D inventa uma consolidação em segmento único que não corresponde à realidade descrita, na qual a topologia varia constantemente."
  },
  {
    "t": "Uma equipe de segurança deseja se preparar para responder a incidentes envolvendo aplicações conteinerizadas, antecipando a natureza efêmera dos logs e artefatos, além das mudanças dinâmicas de rede e de contexto de segurança geridas pela orquestração. Qual abordagem é mais adequada para essa preparação?",
    "opts": [
      "A) Aguardar a ocorrência do incidente para então identificar, em tempo real, quais ferramentas serão necessárias para capturar os dados relevantes",
      "B) Utilizar somente os utilitários tradicionais de forense de endpoint já empregados em investigações de servidores físicos, sem qualquer adaptação ao ambiente conteinerizado",
      "C) Preplanejar a captura de dados necessários, identificando ferramentas e processos para auditar atividades e capturar dados relevantes, apoiando-se em ferramentas de segurança de conteinerização já disponíveis",
      "D) Considerar que, por serem efêmeros, os contêineres dispensam qualquer necessidade de auditoria de atividades após a resolução do incidente"
    ],
    "ans": 2,
    "exp": "Diante da natureza efêmera de logs, artefatos e configurações de rede, a preparação adequada envolve preplanejar: identificar ferramentas e processos de auditoria e captura de dados específicos para o ambiente conteinerizado, contando com ferramentas de segurança de conteinerização já disponíveis. A opção A adia esse planejamento para o momento do incidente, quando pode já ser tarde para preservar artefatos. A opção B ignora as particularidades do ambiente conteinerizado ao depender apenas de ferramentas tradicionais de endpoint. A opção D dispensa indevidamente a auditoria de atividades, contrariando a necessidade de preparo prévio para esse tipo de ambiente."
  },
  {
    "t": "Uma organização está estruturando seus processos de atividade pós-incidente em conformidade com os principais focos avaliados no exame CySA+. Quais são essas três áreas centrais?",
    "opts": [
      "A) Contenção, erradicação e recuperação",
      "B) Análise forense, análise de causa raiz e lições aprendidas",
      "C) Aquisição de evidências, análise de malware e resposta a incidentes",
      "D) Preparação, detecção e análise, contenção"
    ],
    "ans": 1,
    "exp": "As três áreas centrais da atividade pós-incidente avaliadas no exame são análise forense, análise de causa raiz e lições aprendidas; a aquisição de evidências é tratada como parte da atividade forense, não como uma quarta área independente. A alternativa A refere-se a fases distintas de resposta a incidentes, não à atividade pós-incidente em si. A alternativa C mistura conceitos relacionados sem representar as três áreas específicas. A alternativa D descreve fases gerais do ciclo de vida de incidentes, não os focos da atividade pós-incidente."
  },
  {
    "t": "Durante um incidente de segurança ainda em andamento, um analista júnior argumenta que a análise forense só precisa ser considerada após o encerramento total do incidente, já que ela é tratada como \"atividade pós-incidente\". Por que essa afirmação está equivocada?",
    "opts": [
      "A) Porque a aquisição de evidências deve ocorrer apenas após a conclusão da análise de causa raiz",
      "B) Porque lições aprendidas só podem ser documentadas antes do início do processo de resposta a incidentes",
      "C) Porque a análise forense não é considerada parte da atividade pós-incidente segundo os objetivos do exame",
      "D) Porque \"pós-incidente\" frequentemente se refere a atividades conduzidas durante um incidente ainda em andamento, não apenas após seu encerramento completo"
    ],
    "ans": 3,
    "exp": "O termo \"pós-incidente\" frequentemente descreve atividades realizadas durante um incidente ainda ativo, e não somente após seu encerramento total — por isso o impacto da análise forense deve ser considerado já durante a fase ativa. A alternativa A inverte a relação entre aquisição de evidências e análise de causa raiz. A alternativa B inverte a ordem correta, já que lições aprendidas são documentadas após a conclusão do processo. A alternativa C contradiz diretamente o fato de a análise forense ser uma das áreas centrais da atividade pós-incidente."
  },
  {
    "t": "Uma equipe já reuniu um kit forense completo e uma suíte de investigação adequada, mas ainda assim enfrenta grande dificuldade para conduzir a investigação de um incidente. Segundo a abordagem discutida, qual fator, além das próprias ferramentas, mais contribui para essa complexidade?",
    "opts": [
      "A) O número de sistemas, dispositivos, indivíduos e outros materiais envolvidos na investigação",
      "B) A ausência de uma suíte de investigação forense compatível com os dispositivos analisados",
      "C) A falta de um bloqueador de escrita adequado para os discos apreendidos",
      "D) A necessidade de uma estação de trabalho forense equipada com GPU dedicada"
    ],
    "ans": 0,
    "exp": "A análise forense depende de mais do que apenas ferramentas: o processo costuma ser complexo devido ao número de sistemas, dispositivos, indivíduos e outros materiais envolvidos na investigação. A alternativa B contradiz a premissa do cenário, que já supõe uma suíte adequada disponível. A alternativa C trata de um componente específico do kit forense, não do fator de complexidade descrito. A alternativa D refere-se a um recurso relevante para quebra de senhas, sem relação direta com a complexidade geral da investigação mencionada."
  },
  {
    "t": "Uma organização recebe uma denúncia interna alegando que um administrador de sistemas pode ter feito uma alteração não autorizada em um servidor crítico. A equipe de segurança inicia os trabalhos definindo exatamente o que precisa ser respondido antes de qualquer coleta de dados. Essa etapa inicial corresponde a qual fase do processo forense, e o que ela estabelece?",
    "opts": [
      "A) Adquirir e preservar evidências, por meio da clonagem do disco do servidor",
      "B) Determinar o que se está tentando descobrir, formando a definição do problema (problem statement) que orienta as atividades forenses",
      "C) Usar a análise inicial para orientar investigações mais profundas",
      "D) Relatar as descobertas da investigação"
    ],
    "ans": 1,
    "exp": "A primeira etapa do processo forense consiste em determinar o que se busca descobrir — como investigar uma alteração não autorizada —, o que forma a definição do problema que orienta quais atividades forenses serão conduzidas. A alternativa A refere-se à etapa de aquisição, posterior a essa definição inicial. A alternativa C pressupõe que já existe uma análise inicial concluída, o que ainda não ocorreu no cenário. A alternativa D é a etapa final de relato, distante da fase de definição do problema."
  },
  {
    "t": "Em um estágio inicial do planejamento de uma investigação forense, antes mesmo de saber o hardware específico ou os locais exatos de log que serão examinados, o que o investigador já deve conseguir identificar?",
    "opts": [
      "A) Os endereços IP exatos associados ao tráfego malicioso",
      "B) A jurisdição legal precisa sob a qual a evidência será apresentada em tribunal",
      "C) A marca e o modelo exatos de cada dispositivo de armazenamento a ser apreendido",
      "D) Os tipos de dados e de sistemas dos quais será necessário capturar informações"
    ],
    "ans": 3,
    "exp": "Mesmo sem conhecer o hardware específico ou os locais exatos de log nessa fase, o investigador deve conseguir identificar os tipos de dados e de sistemas dos quais precisará capturar informações, orientando o desenho do processo forense. A alternativa A exige um nível de detalhe técnico que normalmente só surge em etapas posteriores. A alternativa B trata de um aspecto jurídico não abordado nessa etapa de planejamento. A alternativa C descreve justamente o tipo de detalhe específico que pode ainda ser desconhecido nesse estágio."
  },
  {
    "t": "Um respondedor de incidentes chega a um sistema comprometido que ainda está ligado e decide capturar uma imagem do conteúdo da memória antes de desligá-lo, para evitar a perda de informações voláteis. Essa ação corresponde a qual etapa do processo forense, e que método de aquisição ela exemplifica?",
    "opts": [
      "A) Adquirir e preservar evidências, por meio da criação de uma imagem de memória ao vivo (live)",
      "B) Delinear os locais e tipos de dados, por meio do inventário de hardware",
      "C) Usar a análise inicial para orientar trabalhos adicionais, por meio da ampliação do escopo",
      "D) Realizar uma análise inicial, por meio do rastreamento de perguntas a responder"
    ],
    "ans": 0,
    "exp": "A etapa de adquirir e preservar evidências pode exigir a criação de imagens de memória ao vivo justamente para evitar a perda de informações voláteis quando o sistema é desligado, como descrito no cenário. A alternativa B refere-se a uma etapa de planejamento anterior, sem relação com a captura de memória. A alternativa C pressupõe uma análise inicial já concluída, o que não é o caso aqui. A alternativa D trata do rastreamento de descobertas durante a análise, não da aquisição da evidência em si."
  },
  {
    "t": "Durante o exame dos dados já coletados, um analista registra cuidadosamente cada ação realizada, os sistemas e dados examinados, as descobertas obtidas até o momento e as perguntas que ainda precisam ser respondidas. Qual etapa do processo forense está sendo descrita?",
    "opts": [
      "A) Documentar e revisar o plano",
      "B) Adquirir e preservar evidências",
      "C) Realizar uma análise inicial",
      "D) Relatar as descobertas da investigação"
    ],
    "ans": 2,
    "exp": "A etapa de realizar uma análise inicial envolve exatamente rastrear cuidadosamente as ações tomadas, os sistemas e dados trabalhados, as descobertas obtidas e as perguntas ainda em aberto. A alternativa A refere-se à revisão do plano antes da aquisição, uma etapa anterior. A alternativa B trata da coleta e preservação da evidência, não da análise dos dados já obtidos. A alternativa D é a etapa final, de relato, que ocorre após todo o processo analítico ser concluído."
  },
  {
    "t": "Após concluir a análise inicial de um host comprometido, um analista percebe que ainda existem lacunas nos dados necessários para responder às perguntas originais da investigação, e decide aprofundar o exame em sistemas adicionais. Qual etapa do processo forense esse movimento representa?",
    "opts": [
      "A) Determinar o que se está tentando descobrir",
      "B) Adquirir e preservar evidências",
      "C) Relatar as descobertas da investigação",
      "D) Usar a análise inicial para orientar trabalhos adicionais"
    ],
    "ans": 3,
    "exp": "Essa etapa consiste em usar os resultados da análise inicial para orientar trabalhos adicionais, revisando onde ela apontou para dados faltantes ou necessidade de investigação mais profunda. A alternativa A refere-se à definição do problema, já estabelecida no início do processo. A alternativa B trata da coleta de evidências, uma fase anterior à análise. A alternativa C é o relato final, que só ocorre após essas lacunas serem resolvidas."
  },
  {
    "t": "Um analista precisa decidir em qual ordem coletará diferentes tipos de evidência de um servidor comprometido que ainda está em funcionamento. Essa priorização é orientada por qual conceito, que mede o quão facilmente os dados podem ser perdidos conforme o tempo passa e o estado do sistema muda?",
    "opts": [
      "A) Cadeia de custódia",
      "B) Ordem de volatilidade (order of volatility)",
      "C) Nivelamento de desgaste (wear leveling)",
      "D) Análise de causa raiz"
    ],
    "ans": 1,
    "exp": "A ordem de volatilidade mede o quão facilmente os dados podem ser perdidos, orientando a sequência de aquisição de evidências — dados em memória são altamente voláteis, enquanto backups e impressões são muito menos voláteis. A cadeia de custódia (A) documenta a posse da evidência, sem relação com o risco de perda de dados. O nivelamento de desgaste (C) é um conceito relacionado a SSDs, não à priorização de coleta. A análise de causa raiz (D) busca determinar o que aconteceu e por quê, sendo um resultado distinto do processo forense."
  },
  {
    "t": "Considerando a ordem de volatilidade aplicada a locais de armazenamento comuns em uma investigação forense, qual das opções a seguir deve geralmente ser priorizada na coleta em relação às demais, por ser a mais facilmente perdida caso o sistema seja desligado?",
    "opts": [
      "A) Backups, impressões e mídia óptica",
      "B) Drives de disco",
      "C) Cache da CPU, registradores, processos em execução e RAM",
      "D) Tráfego de rede"
    ],
    "ans": 2,
    "exp": "O cache da CPU, os registradores, os processos em execução e a RAM ocupam o topo da ordem de volatilidade, sendo os dados mais facilmente perdidos caso o sistema seja desligado, e por isso devem ser priorizados na coleta. O tráfego de rede (D) vem em seguida na ordem de volatilidade. Os drives de disco (B) são menos voláteis que a memória, mas mais voláteis que backups. Backups, impressões e mídia óptica (A) representam o extremo menos volátil, sendo os últimos a serem priorizados."
  },
  {
    "t": "Durante a investigação de um sistema comprometido, um analista forense encontra evidências que sugerem uma possível atividade ilegal não relacionada ao escopo original da investigação. Segundo a prática recomendada, o que o analista deve verificar primeiro diante dessa descoberta?",
    "opts": [
      "A) Se existe o dever de relatar esse tipo de descoberta, conforme leis aplicáveis ou políticas da própria organização",
      "B) Se é possível ignorar completamente a descoberta, por estar fora do escopo original",
      "C) Se o escopo da investigação deve ser automaticamente ampliado, sem qualquer análise adicional",
      "D) Se os registros relacionados à descoberta podem ser excluídos para não comprometer a investigação original"
    ],
    "ans": 0,
    "exp": "Diante de descobertas inesperadas, é fundamental verificar se existe o dever de relatá-las sob leis locais, estaduais ou federais, ou conforme as políticas da própria organização. A alternativa B contraria a prática recomendada, já que ignorar a descoberta pode gerar consequências legais ou organizacionais. A alternativa C propõe uma ação automática e precipitada, sem a devida ponderação. A alternativa D descreve uma conduta inadequada e potencialmente ilegal, já que excluir evidências compromete a integridade de qualquer investigação."
  },
  {
    "t": "Uma organização recebe a informação de que deve preservar todos os dados potencialmente relevantes relacionados a um litígio atualmente em andamento contra ela. Diante dessa exigência, o que a organização deve estar preparada para fazer?",
    "opts": [
      "A) Preservar e, quando solicitado, entregar os dados relacionados ao litígio pendente ou em andamento",
      "B) Destruir imediatamente todos os dados relacionados ao litígio para evitar exposição legal",
      "C) Preservar os dados relevantes, mas sem qualquer obrigação de entregá-los posteriormente",
      "D) Transferir a responsabilidade pela preservação dos dados diretamente à parte adversária"
    ],
    "ans": 0,
    "exp": "Uma retenção legal (legal hold) exige que a organização preserve todos os dados potencialmente relevantes relacionados a um litígio pendente ou em andamento, estando preparada tanto para preservá-los quanto para entregá-los quando solicitado. A alternativa C ignora a obrigação de entrega dos dados. A alternativa B contraria diretamente a exigência, já que retenções legais determinam preservação, não destruição. A alternativa D descreve uma transferência de responsabilidade não mencionada como parte do processo."
  },
  {
    "t": "Jennifer quer realizar análise e perícia de memória em sistemas Windows, macOS e Linux. Qual das alternativas a seguir é mais adequada às suas necessidades?",
    "opts": [
      "A) LiME",
      "B) DumpIt",
      "C) fmem",
      "D) O framework Volatility"
    ],
    "ans": 3,
    "exp": "O framework Volatility foi projetado para funcionar com Windows, macOS e Linux e fornece recursos aprofundados de perícia e análise de memória. LiME e fmem são ferramentas para Linux, enquanto DumpIt é uma ferramenta exclusiva do Windows."
  },
  {
    "t": "Como parte de sua revisão de um processo forense, Lisa está analisando um registro que lista cada ocasião em que uma pessoa manipulou uma imagem forense. Ela percebe que uma entrada lista ações de análise forense, mas não tem um nome registrado. Que conceito isso viola?",
    "opts": [
      "A) Integridade da imagem",
      "B) Autenticidade forense",
      "C) Preservação",
      "D) Cadeia de custódia"
    ],
    "ans": 3,
    "exp": "Lisa descobriu um problema na documentação da cadeia de custódia. Todas as transferências, ações forenses e outras alterações ou eventos que ocorram devem ser registrados como parte de uma cadeia de custódia."
  },
  {
    "t": "A equipe jurídica de uma organização recebe uma notificação da parte adversária informando sobre um litígio pendente e mencionando nomes de funcionários e datas específicas relacionadas ao caso. Em seguida, os advogados da própria organização emitem uma notificação interna determinando a preservação de dados relacionados a esse litígio. Esse cenário exemplifica qual origem típica das notificações de retenção legal?",
    "opts": [
      "A) Normalmente se originam da equipe de TI, após identificar atividade suspeita nos sistemas",
      "B) Normalmente partem de auditores externos durante revisões de conformidade",
      "C) Normalmente são emitidas por autoridades regulatórias antes de qualquer contato entre as partes",
      "D) Normalmente vêm dos advogados da organização, após estes receberem aviso da parte adversária"
    ],
    "ans": 3,
    "exp": "Notificações de retenção legal normalmente vêm dos advogados de uma organização, depois que estes recebem uma notificação da parte adversária (opposing counsel), podendo identificar informações específicas ou apenas dados gerais sobre o litígio, como nomes e datas. A alternativa A atribui a origem à equipe de TI, que executa a preservação técnica, mas não origina a notificação. A alternativa B menciona auditores externos, não citados como fonte. A alternativa C atribui a notificação a autoridades regulatórias, papel não descrito nesse processo."
  },
  {
    "t": "Uma organização precisa preservar determinados registros mesmo sem haver, no momento, qualquer litígio pendente ou notificação de retenção legal em andamento. Quais motivos, além de uma retenção legal, podem justificar essa exigência de preservação?",
    "opts": [
      "A) Apenas a existência de uma investigação criminal conduzida por autoridades policiais",
      "B) Exigências legais de retenção por um período determinado, políticas organizacionais específicas, ou necessidade de preservação no contexto de investigações internas",
      "C) Apenas a determinação de um tribunal já em fase de julgamento",
      "D) Exclusivamente a orientação de fornecedores de software de backup quanto ao tempo de retenção"
    ],
    "ans": 1,
    "exp": "Além das retenções legais, a preservação pode ser exigida porque alguns dados devem ser mantidos por um período determinado por lei, porque políticas organizacionais exigem a preservação de certos tipos de dados, ou porque dados precisam ser preservados como parte de investigações internas diante de futuras questões legais. A alternativa A restringe indevidamente os motivos a investigações criminais. A alternativa C limita a exigência a decisões judiciais, ignorando as demais razões. A alternativa D atribui a exigência a fornecedores de backup, o que não corresponde a nenhuma razão apresentada."
  },
  {
    "t": "Um analista forense está prestes a adquirir a imagem de um disco rígido apreendido durante uma investigação e precisa assegurar que o processo seja realizado de maneira forense adequada (forensically sound), preservando o disco original para uso como evidência. Quais práticas ele deve adotar nesse processo de aquisição?",
    "opts": [
      "A) Realizar apenas uma cópia lógica dos arquivos considerados relevantes, dispensando a cópia do espaço não alocado",
      "B) Conectar o disco diretamente ao computador de análise sem qualquer bloqueador de escrita, para agilizar o processo",
      "C) Fazer uma cópia exata bit a bit usando um utilitário de imageamento, empregar bloqueadores de escrita para proteger o disco de origem, e gerar múltiplas cópias para reter o original como evidência",
      "D) Adquirir uma única cópia da imagem e formatar imediatamente o disco original para reutilização"
    ],
    "ans": 2,
    "exp": "Uma aquisição forense adequada exige uma cópia exata bit a bit feita com um utilitário de imageamento, o uso de bloqueadores de escrita para evitar qualquer modificação do disco de origem, e a geração de múltiplas cópias, de modo que o disco original possa ser retido como evidência. A alternativa A descreve uma cópia lógica parcial, que não captura a imagem forense completa exigida. A alternativa B contraria diretamente a prática recomendada ao dispensar o bloqueador de escrita. A alternativa D é inadequada, pois formatar o disco original destruiria a evidência, contrariando o objetivo de retê-lo intacto."
  },
  {
    "t": "Durante o levantamento inicial de uma investigação, um analista percebe que parte dos dados relevantes está armazenada em um dispositivo pessoal do funcionário, sob uma política de \"traga seu próprio dispositivo\" (BYOD), e também em um serviço de nuvem de terceiros utilizado pelo funcionário para fins privados. Segundo a orientação apresentada, o que o analista deve fazer antes de iniciar a investigação forense nesse cenário?",
    "opts": [
      "A) Conhecer as políticas da organização sobre BYOD, serviços de nuvem e uso de serviços de terceiros, além das políticas de privacidade e padrões relacionados",
      "B) Presumir que a organização tem posse irrestrita sobre qualquer dado presente no dispositivo pessoal, dispensando verificação de políticas",
      "C) Ignorar os dados armazenados nesses ambientes, já que sistemas fora da propriedade direta da organização nunca podem ser examinados",
      "D) Iniciar imediatamente a captura de imagem forense do dispositivo pessoal, sem qualquer consulta prévia às políticas organizacionais"
    ],
    "ans": 0,
    "exp": "Antes de iniciar uma investigação que toque sistemas, redes ou dados não pertencentes à organização — como em cenários de BYOD ou uso de serviços de terceiros —, o profissional deve conhecer as políticas organizacionais sobre essas áreas, além das políticas de privacidade e padrões relacionados. A alternativa B presume indevidamente posse irrestrita sobre dispositivos pessoais. A alternativa C exagera ao afirmar que esses dados nunca podem ser examinados, quando na realidade exigem apenas atenção prévia às políticas aplicáveis. A alternativa D ignora a necessidade de verificação prévia, o que pode gerar complicações legais ou de privacidade."
  },
  {
    "t": "Um estagiário de forense sugere copiar os arquivos de um disco apreendido diretamente para uma nova mídia usando o gerenciador de arquivos do sistema operacional, alegando que o resultado seria equivalente a uma cópia forense. Por que essa abordagem não produz um resultado equivalente a uma cópia forense adequada?",
    "opts": [
      "A) Cópias forenses preservam apenas os arquivos ativos e visíveis do sistema de arquivos, descartando qualquer dado fora da estrutura reconhecida pelo sistema operacional",
      "B) Cópias forenses retêm exatamente o mesmo layout e conteúdo de todo o drive ou dispositivo, incluindo espaço \"vazio\", espaço não alocado e slack space",
      "C) Cópias forenses aplicam compressão automática aos dados originais para otimizar o armazenamento da evidência",
      "D) Cópias forenses reorganizam os arquivos por data de criação para facilitar a análise posterior"
    ],
    "ans": 1,
    "exp": "Uma cópia forense retém exatamente o mesmo layout e conteúdo do dispositivo inteiro, incluindo espaço \"vazio\", espaço não alocado e slack space — algo que um simples copiar/colar de arquivos não captura. A alternativa A inverte o conceito, já que cópias forenses capturam mais dados do que os arquivos visíveis, não menos. A alternativa C atribui uma função de compressão não relacionada ao processo forense. A alternativa D descreve uma reorganização que descaracterizaria a integridade da evidência."
  },
  {
    "t": "Uma equipe forense precisa gerar uma imagem verificável e forense adequada (forensically sound) de um disco apreendido. Qual abordagem deve ser adotada para essa finalidade, em vez de recursos padrão do sistema operacional?",
    "opts": [
      "A) Um utilitário de compactação de arquivos, para reduzir o tamanho da evidência antes do armazenamento",
      "B) O comando de cópia nativo do sistema operacional, combinado com verificação manual arquivo por arquivo",
      "C) Uma ferramenta de imageamento, como dd ou o FTK Imager Lite, para gerar uma imagem forense verificável",
      "D) Um gerenciador de arquivos gráfico, para arrastar e soltar os arquivos relevantes até a nova mídia de destino"
    ],
    "ans": 2,
    "exp": "A necessidade de uma imagem verificável e forense adequada exige o uso de uma ferramenta de imageamento, como dd ou FTK Imager Lite, em vez do comando de cópia ou de arrastar e soltar arquivos. A alternativa A propõe compactação, o que não está relacionado à criação de uma imagem forense íntegra. A alternativa B ainda depende do comando de cópia padrão, insuficiente mesmo com verificação manual. A alternativa D descreve exatamente uma das abordagens que devem ser evitadas nesse processo."
  },
  {
    "t": "Durante a análise de uma imagem forense obtida por meio de uma cópia bit a bit, um investigador localiza fragmentos de arquivos que já haviam sido apagados do disco antes da apreensão, além de dados remanescentes de antes da última formatação do volume. Por que esse tipo de informação está presente na imagem forense, mas não estaria disponível em uma cópia comum de arquivos?",
    "opts": [
      "A) Porque a cópia bit a bit também inclui o slack space e o espaço não alocado, capturando arquivos apagados ainda não sobrescritos e fragmentos de dados anteriores",
      "B) Porque a ferramenta de imageamento reconstrói automaticamente a estrutura de diretórios original a partir dos metadados do sistema de arquivos",
      "C) Porque o hashing gerado durante a validação da imagem recompõe o conteúdo de arquivos previamente apagados",
      "D) Porque o processo de cópia expande a capacidade de armazenamento do dispositivo de destino, permitindo reter versões antigas dos arquivos"
    ],
    "ans": 0,
    "exp": "A cópia bit a bit inclui o slack space e o espaço não alocado, capturando arquivos apagados ainda não sobrescritos, fragmentos de arquivos antigos e dados presentes antes do particionamento do drive — algo que uma cópia comum de arquivos não oferece. A alternativa B atribui à ferramenta uma reconstrução de diretórios não descrita nesse processo. A alternativa C confunde hashing, usado para validar integridade, com recuperação de conteúdo apagado. A alternativa D propõe uma expansão de capacidade que não tem relação com a captura de dados históricos do disco."
  },
  {
    "t": "Um analista está prestes a utilizar o utilitário dd para clonar um disco rígido moderno de alta capacidade e deseja reduzir significativamente o tempo total do processo de imageamento. Sabendo que o dd usa por padrão um tamanho de bloco de 512 bytes — bem menor que o tamanho de bloco nativo da maioria dos discos atuais — qual ajuste no comando tende a produzir o maior ganho de velocidade?",
    "opts": [
      "A) Manter o tamanho de bloco padrão de 512 bytes, garantindo maior compatibilidade entre dispositivos de origem e destino",
      "B) Reduzir ainda mais o tamanho de bloco para minimizar o uso de memória durante a cópia",
      "C) Aumentar o tamanho do arquivo de saída (of) para acomodar o crescimento futuro dos dados",
      "D) Definir um tamanho de bloco maior, idealmente correspondente ao tamanho de bloco nativo do dispositivo de origem, usando a flag bs"
    ],
    "ans": 3,
    "exp": "Usar um tamanho de bloco maior — especialmente o nativo do dispositivo de origem, definido pela flag bs — tende a acelerar bastante o imageamento, já que o padrão de 512 bytes é menor que o bloco nativo da maioria dos discos modernos. Manter o padrão (A) contraria a otimização buscada. Reduzir ainda mais o bloco (B) torna o processo mais lento, não mais rápido. Aumentar o arquivo de saída (C) confunde tamanho de bloco com tamanho de arquivo, que não é ajustável dessa forma nem afeta a velocidade da cópia da mesma maneira."
  },
  {
    "t": "Antes de executar um comando dd para copiar um disco suspeito, um analista precisa confirmar com certeza absoluta qual dispositivo corresponde ao disco de origem e qual corresponde ao disco de destino, para evitar sobrescrever dados por engano. Quais práticas ajudam a reduzir esse risco?",
    "opts": [
      "A) Verificar os dispositivos com comandos como fdisk -l ou lsblk antes de definir if e of, revisar o comando cuidadosamente, e contar com um bloqueador de escrita como proteção adicional",
      "B) Executar o comando dd repetidamente até que o resultado pareça correto, ajustando apenas após cada tentativa",
      "C) Confiar exclusivamente na ordem em que os dispositivos foram conectados fisicamente ao sistema",
      "D) Reduzir o tamanho de bloco (bs) para o menor valor possível, o que impede automaticamente a escrita no dispositivo errado"
    ],
    "ans": 0,
    "exp": "Comandos como fdisk -l e lsblk (inclusive com flags como --output NAME,FSTYPE,LABEL,UUID,MODE) ajudam a identificar corretamente cada dispositivo; revisar o comando com atenção antes de executá-lo, somado ao uso de um bloqueador de escrita, reduz o risco de sobrescrever a origem por engano. A alternativa B propõe tentativa e erro, o que arrisca sobrescrever dados na origem. A alternativa C depende de uma suposição pouco confiável sobre a ordem física de conexão. A alternativa D confunde tamanho de bloco com proteção contra escrita, conceitos não relacionados."
  },
  {
    "t": "Uma investigação conduzida por uma equipe forense tem alta probabilidade de ser posteriormente examinada em tribunal. Para que a cadeia de custódia seja considerada completa e documentada, quais informações precisam ser rastreadas para cada drive, dispositivo ou item manuseado durante o processo?",
    "opts": [
      "A) Apenas o valor de hash gerado ao final da aquisição da evidência",
      "B) Apenas a data de conclusão da investigação e o nome do analista responsável pelo relatório final",
      "C) O que foi coletado, quem coletou ou analisou os dados, quando cada ação ocorreu, e quando o item foi transferido, manuseado, acessado ou armazenado com segurança",
      "D) Somente o local físico onde o dispositivo foi originalmente apreendido"
    ],
    "ans": 2,
    "exp": "Uma cadeia de custódia completa exige documentar o que foi coletado, quem coletou ou analisou os dados, quando cada ação ocorreu, e quando dispositivos e evidências foram transferidos, manuseados, acessados e armazenados com segurança, rastreando essas informações para cada item manuseado. A alternativa A restringe indevidamente o registro apenas ao hash. As alternativas B e D limitam a documentação a apenas um ou dois pontos isolados, insuficientes diante da exigência de rastrear toda a manipulação ao longo da investigação, o que pode comprometer a evidência perante um tribunal."
  },
  {
    "t": "Um profissional forense obtém a senha de um volume criptografado diretamente com o usuário do sistema durante uma investigação e precisa validar até que ponto sua suíte forense comercial conseguirá processar esse volume. Qual afirmação descreve corretamente a capacidade típica das suítes forenses comerciais nesse cenário?",
    "opts": [
      "A) Suítes comerciais só conseguem acessar volumes criptografados após um processo de força bruta bem-sucedido, independentemente de haver senha disponível",
      "B) Suítes forenses comerciais conseguem lidar com muitos dos tipos comuns de criptografia encontrados, desde que a senha do volume esteja disponível",
      "C) Nenhuma suíte forense comercial oferece suporte a criptografia de disco, exigindo sempre ferramentas especializadas de terceiros",
      "D) A posse da senha do volume torna desnecessário qualquer cuidado adicional durante o processo de imageamento do disco"
    ],
    "ans": 1,
    "exp": "Suítes forenses comerciais lidam com muitos dos tipos comuns de criptografia que provavelmente serão encontrados, desde que a senha do volume esteja disponível. A alternativa A contraria essa premissa ao exigir força bruta mesmo havendo senha. A alternativa C nega indevidamente uma capacidade amplamente oferecida por suítes comerciais. A alternativa D presume que a senha elimina todo cuidado no imageamento, quando na prática os procedimentos forenses padrão continuam sendo necessários."
  },
  {
    "t": "Por que validar a integridade dos dados é fundamental para os processos forenses?",
    "opts": [
      "A) Isso garante que o sistema não foi comprometido.",
      "B) Isso garante que o sistema não foi alterado pelo perito forense.",
      "C) Isso garante que a versão do sistema operacional corresponde à versão esperada.",
      "D) Isso é exigido pelo processo de retenção legal."
    ],
    "ans": 1,
    "exp": "Validar a integridade dos dados garante que as imagens ou os arquivos sejam forensicamente íntegros e não tenham sido alterados ou modificados, intencional ou acidentalmente, durante o processo de aquisição e análise forense. Isso não garante que o sistema não tenha sido comprometido e, embora artefatos possam ser avaliados para validar versões de arquivos, normalmente eles não são usados para validar versões de sistemas operacionais. Por fim, retenções legais exigem a preservação dos dados, não a validação de sua integridade."
  },
  {
    "t": "Carl não consegue capturar dados de um celular usando software de análise forense de dispositivos móveis ou de criação de imagens, e o aparelho não possui armazenamento removível. Felizmente, o celular não foi configurado com um PIN ou bloqueio de tela. Qual é a melhor opção para garantir que ele consiga visualizar os e-mails e os outros dados armazenados nele?",
    "opts": [
      "A) Aquisição física",
      "B) Acesso lógico",
      "C) Acesso ao sistema de arquivos",
      "D) Acesso manual"
    ],
    "ans": 3,
    "exp": "O acesso manual é usado quando não é possível criar uma imagem forense dos telefones nem acessá-los como um volume ou sistema de arquivos. O acesso manual exige que o telefone seja examinado manualmente, preservando fotos e anotações para documentar o conteúdo do aparelho."
  },
  {
    "t": "Durante a resposta a um incidente envolvendo um laptop protegido por criptografia de disco completo, a equipe localiza o dispositivo ainda ligado, com o usuário autenticado e a sessão ativa. Considerando a abordagem recomendada para evitar os desafios da quebra por força bruta, qual ação a equipe deveria priorizar nesse momento?",
    "opts": [
      "A) Desligar imediatamente o equipamento para preservar o estado do disco antes de qualquer outra ação",
      "B) Iniciar de imediato um ataque de força bruta distribuído, por ser sempre a abordagem mais rápida disponível",
      "C) Aguardar a obtenção de uma ordem judicial específica antes de tocar no equipamento, mesmo que ele permaneça ligado",
      "D) Aproveitar o acesso ao sistema ainda ligado e autenticado para obter a chave de criptografia a partir da memória ou da sessão ativa, evitando a necessidade de força bruta"
    ],
    "ans": 3,
    "exp": "Obter a chave de criptografia diretamente do usuário, de um administrador, ou a partir da memória de um sistema ainda ligado é preferível à quebra por força bruta, que pode ser muito lenta. A alternativa A é contraproducente, pois desligar o sistema ativaria a criptografia de disco e eliminaria a janela de acesso. A alternativa B contraria a recomendação, já que a força bruta é apresentada como último recurso, não como prioridade. A alternativa C introduz uma exigência processual que arriscaria perder a oportunidade de acesso enquanto o sistema permanece desbloqueado."
  },
  {
    "t": "Um examinador forense recebeu um disco rígido já submetido a uma aquisição inicial e agora precisa reexaminá-lo diretamente para buscar detalhes adicionais, sem gerar uma nova imagem. Antes de conectar o disco à estação de trabalho para essa análise direta, qual medida deve ser adotada para garantir que nenhuma modificação seja feita acidentalmente ao conteúdo original durante o exame?",
    "opts": [
      "A) Utilizar um duplicador de drive forense para gerar mais uma cópia antes de iniciar a análise",
      "B) Executar uma suíte de investigação forense para correlacionar os artefatos com outras evidências já coletadas",
      "C) Conectar o disco por meio de um bloqueador de escrita (write blocker) entre ele e a estação de trabalho",
      "D) Gerar um novo hash do disco imediatamente antes de iniciar o exame direto"
    ],
    "ans": 2,
    "exp": "O bloqueador de escrita impede que ocorram gravações enquanto o drive está conectado através dele, sendo útil tanto na aquisição quanto na análise forense, garantindo que nenhuma modificação aconteça acidentalmente durante o exame direto do disco. O duplicador de drive (A) serve para copiar mídias, não para impedir escritas durante uma análise direta do original. A suíte de investigação (B) correlaciona artefatos, mas não bloqueia escritas fisicamente. Gerar um novo hash (D) apenas registra o estado atual do disco, sem impedir ativamente que uma escrita ocorra durante a conexão."
  },
  {
    "t": "Uma equipe forense está escolhendo o tipo de bloqueador de escrita a ser usado em uma investigação na qual impedir qualquer gravação no disco original é absolutamente crítico. Considerando a prática mais comum nesse tipo de cenário, qual opção a equipe deve priorizar, e por quê?",
    "opts": [
      "A) Um bloqueador de escrita de software, por ser mais popular e amplamente adotado no mercado forense",
      "B) Um bloqueador de escrita de hardware, já que esse tipo costuma ser usado com mais frequência quando prevenir escritas é importante, devido à possibilidade de problemas associados aos de software",
      "C) Qualquer um dos dois tipos, pois apresentam exatamente o mesmo nível de confiabilidade nesse cenário",
      "D) Nenhum dos dois tipos, bastando confiar apenas na cópia bit a bit para preservar a integridade do disco"
    ],
    "ans": 1,
    "exp": "Bloqueadores de escrita de hardware são usados com mais frequência quando impedir escritas é importante, já que os bloqueadores de software costumam ser menos populares e apresentam maior possibilidade de problemas. A alternativa A inverte essa relação de preferência prática. A alternativa C ignora a diferença de confiabilidade percebida entre os dois tipos. A alternativa D descarta indevidamente a necessidade do bloqueador, quando na prática ele continua sendo relevante mesmo diante de uma cópia bit a bit bem executada."
  },
  {
    "t": "Um investigador utilizou o utilitário dd para gerar manualmente a imagem de um disco apreendido e agora precisa validar que a imagem produzida corresponde integralmente ao disco de origem. Qual abordagem é adequada nesse cenário?",
    "opts": [
      "A) Utilizar utilitários de hashing como md5sum ou sha1sum para gerar e comparar os valores do original e da cópia",
      "B) Comparar visualmente a estrutura de diretórios do disco original com a da imagem gerada",
      "C) Repetir o comando dd uma segunda vez e verificar se a duração total das duas operações foi idêntica",
      "D) Confiar na capacidade integrada de verificação de integridade do próprio dd, que valida a imagem automaticamente"
    ],
    "ans": 0,
    "exp": "Quando investigadores usam o dd ou outros utilitários manuais de imageamento, ferramentas de hashing como md5sum ou sha1sum são frequentemente empregadas para validar as imagens geradas. A comparação visual de diretórios (B) não comprova correspondência bit a bit entre origem e cópia. Comparar a duração das operações (C) não tem qualquer relação com integridade de dados. A alternativa D atribui ao dd uma verificação de integridade integrada, característica associada às ferramentas comerciais, não aos utilitários manuais de imageamento."
  },
  {
    "t": "Após concluir a aquisição de uma imagem forense, um analista gera os valores de hash correspondentes ao disco original e à cópia clonada. Qual procedimento deve ser adotado em seguida com relação a essas informações de verificação?",
    "opts": [
      "A) Descartar os valores após a confirmação de correspondência, já que cumpriram sua finalidade imediata",
      "B) Armazená-los exclusivamente na estação de trabalho forense, sem incluí-los em qualquer registro documental",
      "C) Registrar o hash ou a informação de verificação tanto do original quanto da cópia no registro forense (logbook) ou no formulário de cadeia de custódia",
      "D) Registrar apenas o hash da cópia clonada, dispensando o valor referente ao disco original"
    ],
    "ans": 2,
    "exp": "A cada geração de imagem, o hash ou a informação de verificação tanto do original quanto da cópia clonada deve ser registrado no registro forense (logbook) ou no formulário de cadeia de custódia. A alternativa A descarta informação essencial para comprovar a integridade do processo posteriormente. A alternativa B mantém os valores sem qualquer documentação formal, o que fragiliza a defensabilidade da evidência. A alternativa D omite o hash do disco original, inviabilizando a comparação que sustenta a validação da imagem."
  },
  {
    "t": "Uma equipe de resposta a incidentes precisa capturar evidências de um servidor protegido por criptografia de disco completo, que também apresenta indícios de malware residente apenas em memória. Considerando essa situação, qual abordagem é apropriada e qual limitação a equipe deve antecipar?",
    "opts": [
      "A) Desligar o sistema e realizar o imageamento tradicional, já que essa abordagem captura integralmente o conteúdo da memória volátil",
      "B) Realizar o imageamento ao vivo (live), sabendo que imagens desse tipo normalmente não incluem o espaço não alocado",
      "C) Realizar o imageamento ao vivo, com a garantia de que o conteúdo do drive e da memória permanecerá inalterado durante todo o processo",
      "D) Adiar toda a coleta até que a senha de criptografia seja obtida por força bruta, evitando qualquer interação com o sistema em execução"
    ],
    "ans": 1,
    "exp": "Quando há criptografia de disco completo ou software residente apenas em memória, pode ser necessário coletar a imagem com o sistema em execução; contudo, imagens ao vivo normalmente não incluem o espaço não alocado. A alternativa A é incorreta, pois desligar o sistema causaria a perda do conteúdo em memória e reativaria a criptografia. A alternativa C garante indevidamente estabilidade dos dados, quando o conteúdo do drive ou da memória pode mudar durante o imageamento. A alternativa D descarta a oportunidade de capturar dados voláteis enquanto o sistema ainda está acessível."
  },
  {
    "t": "Durante um imageamento ao vivo de um endpoint suspeito, um analista carrega uma versão portátil de sua ferramenta forense a partir de um drive removível. Quais riscos inerentes a esse procedimento ele deve considerar?",
    "opts": [
      "A) A ferramenta portátil elimina completamente qualquer possibilidade de deixar vestígios no sistema analisado",
      "B) Malware presente no sistema pode detectar a ferramenta de imageamento e agir para evitá-la ou desativá-la, e o próprio utilitário pode deixar vestígios no sistema",
      "C) O imageamento ao vivo garante a captura integral do espaço não alocado, desde que a ferramenta seja executada a partir de mídia removível",
      "D) Versões portáteis de ferramentas forenses estão disponíveis apenas em suítes comerciais, não em soluções de código aberto"
    ],
    "ans": 1,
    "exp": "O imageamento ao vivo pode deixar vestígios devido ao utilitário ser montado a partir de um drive removível ou instalado no sistema, e malware ou outro software pode detectar a ferramenta de imageamento e tomar ações para evitá-la ou desativá-la. A alternativa A nega a possibilidade de vestígios, contrariando uma limitação conhecida do procedimento. A alternativa C afirma a captura do espaço não alocado, algo que imagens ao vivo normalmente não incluem. A alternativa D restringe as versões portáteis às ferramentas comerciais, quando soluções de código aberto também as oferecem."
  },
  {
    "t": "A liderança de TI de uma organização pressiona pela restauração imediata de um servidor comprometido por meio de reimageamento, enquanto a equipe de segurança ainda não concluiu a coleta de evidências. Qual consideração é essencial antes de autorizar o reimageamento nesse cenário?",
    "opts": [
      "A) As cópias forenses precisam ser adquiridas antes do reimageamento, pois este eliminará artefatos forenses e dificultará ou impossibilitará a recuperação posterior dessas informações",
      "B) O reimageamento preserva automaticamente os artefatos forenses do sistema, permitindo que a coleta ocorra depois da restauração",
      "C) A reformatação simples do drive antes do reimageamento garante a preservação integral das evidências para análise futura",
      "D) O reimageamento pode ser conduzido livremente, desde que o hash do disco original tenha sido registrado previamente"
    ],
    "ans": 0,
    "exp": "O reimageamento elimina artefatos forenses e, na maioria dos casos, torna difícil ou impossível recuperar informações forenses, o que exige que as cópias forenses sejam adquiridas antes de sua execução. A alternativa B contraria diretamente esse efeito destrutivo sobre os artefatos. A alternativa C confunde reformatação com preservação de evidências, quando na prática ela também compromete os dados. A alternativa D é insuficiente, pois um hash isolado apenas valida integridade, mas não substitui a cópia forense completa da evidência."
  },
  {
    "t": "Durante a fase de erradicação e recuperação de um incidente, a equipe decide reimagear diversas estações comprometidas. Qual prática é adotada com frequência nesse contexto e qual é seu objetivo?",
    "opts": [
      "A) Reformatar os drives, procedimento suficiente para eliminar qualquer arquivo malicioso remanescente",
      "B) Reinstalar o sistema operacional sobre a instalação existente, preservando os dados do usuário para reduzir o tempo de recuperação",
      "C) Apagar (wipe) os drives antes do reimageamento, para assegurar que nenhum dado remanescente ou arquivo malicioso permaneça",
      "D) Manter os drives intactos e apenas restaurar backups sobre o sistema comprometido, dispensando qualquer limpeza prévia"
    ],
    "ans": 2,
    "exp": "Em cenários de resposta a incidentes, os drives frequentemente são apagados (wiped), e não apenas reformatados, antes do reimageamento, garantindo que nenhum dado remanescente ou arquivo malicioso permaneça no sistema. A alternativa A trata a reformatação como suficiente, quando o procedimento adotado é justamente mais rigoroso. A alternativa B mantém dados existentes, o que contraria o objetivo de eliminar remanescentes maliciosos. A alternativa D dispensa qualquer limpeza prévia, deixando o sistema exposto à persistência do comprometimento."
  },
  {
    "t": "Durante o planejamento de uma investigação, um analista identifica a necessidade de examinar dados de log, históricos de dispositivos USB conectados, cache e histórico do navegador, além de e-mails e arquivos gerados pelo usuário em uma estação de trabalho comprometida. Qual afirmação descreve corretamente a relação entre esses dados especializados e a imagem forense do drive do host?",
    "opts": [
      "A) Cada um desses tipos de dados exige necessariamente uma ferramenta de aquisição dedicada, já que não são alcançados por imagens de drive",
      "B) Esses dados só podem ser recuperados por meio de captura de memória volátil, não estando presentes em imagens de disco",
      "C) Em geral, a imagem forense do drive do host também fornecerá acesso a esses dados, desde que estejam residentes no sistema",
      "D) Esses dados são considerados voláteis demais para constarem em qualquer imagem forense adquirida do sistema"
    ],
    "ans": 2,
    "exp": "Na maioria dos casos, as imagens forenses dos drives do host também dão acesso a esses tipos de dados especializados, desde que estejam residentes nos sistemas analisados. A alternativa A exagera ao exigir ferramentas dedicadas para cada categoria, ignorando o alcance da imagem de drive. A alternativa B restringe indevidamente a recuperação à memória volátil, quando esses dados normalmente residem em disco. A alternativa D classifica erroneamente esses artefatos como voláteis demais, embora sejam justamente exemplos de dados armazenados no sistema."
  },
  {
    "t": "Um analista investiga um servidor comprometido e considera utilizar os logs armazenados localmente no próprio host como principal fonte de evidência sobre as ações do atacante. Qual preocupação ele deve ter em relação à confiabilidade desses registros?",
    "opts": [
      "A) Logs locais são sempre mais confiáveis que logs armazenados remotamente, por não dependerem de transmissão em rede",
      "B) Logs podem não ser precisos em uma máquina comprometida ou quando um administrador tomou ações que desejava ocultar",
      "C) Logs armazenados localmente não podem ser recuperados a partir de imagens forenses do drive do host",
      "D) Logs de dispositivos de rede jamais registram ações relevantes para investigações de comprometimento de hosts"
    ],
    "ans": 1,
    "exp": "Dados de log podem não ser precisos no caso de uma máquina comprometida ou quando um administrador estava executando ações que queria ocultar, o que exige cautela ao tratá-los como fonte única de verdade. A alternativa A inverte essa lógica, ignorando que registros locais em um host comprometido podem ter sido manipulados. A alternativa C está incorreta, já que imagens forenses do host geralmente permitem acesso a dados residentes, incluindo logs. A alternativa D nega indevidamente o valor de logs de dispositivos de rede, que frequentemente registram ações relevantes."
  },
  {
    "t": "Que problema forense a presença de um programa como o CCleaner pode indicar?",
    "opts": [
      "A) Atividades antiforenses",
      "B) Criptografia completa de disco",
      "C) Empacotamento de malware",
      "D) Modificações nos tempos MAC"
    ],
    "ans": 0,
    "exp": "O CCleaner é um utilitário de limpeza de PCs que apaga o histórico da Internet, destrói cookies e outros dados em cache e pode dificultar investigações forenses. O CCleaner pode ser um indício de atividades antiforenses intencionais em um sistema. Ele não é uma ferramenta de criptografia completa de disco nem um empacotador de malware, e também não modifica os tempos MAC."
  },
  {
    "t": "Qual das alternativas a seguir não é um problema potencial da criação de imagens de um sistema em execução?",
    "opts": [
      "A) Permanecerão dados residuais da ferramenta de criação de imagens.",
      "B) O espaço não alocado será capturado.",
      "C) O conteúdo da memória ou da unidade pode mudar durante o processo de criação da imagem.",
      "D) O malware pode detectar a ferramenta de criação de imagens e agir para evitá-la."
    ],
    "ans": 1,
    "exp": "Normalmente, o espaço não alocado não é capturado durante a criação de uma imagem de um sistema em execução, podendo fazer com que alguns dados não sejam coletados. Dados residuais da ferramenta, alterações no conteúdo da memória e da unidade enquanto a imagem está sendo criada e a detecção da ferramenta pelo malware são problemas possíveis."
  },
  {
    "t": "Ao definir o escopo temporal da preservação de logs em uma investigação, um analista inicialmente considera coletar apenas os registros das 48 horas que antecederam a detecção do incidente. Que orientação deve ser observada nessa decisão?",
    "opts": [
      "A) Restringir a coleta ao intervalo exato da detecção, evitando ampliar o escopo sob qualquer circunstância",
      "B) Preservar apenas os logs posteriores à detecção, já que registros anteriores raramente contêm evidências relevantes",
      "C) Considerar obter logs de um período mais longo, pois o comprometimento pode ter começado antes do que se suspeitava inicialmente",
      "D) Definir o período com base exclusivamente na capacidade de armazenamento disponível para a preservação"
    ],
    "ans": 2,
    "exp": "É recomendável considerar a obtenção de logs de um período mais longo, pois um problema ou comprometimento pode ter começado antes do momento inicialmente suspeitado. A alternativa A impede a ampliação do escopo, arriscando a perda de evidências anteriores ao período detectado. A alternativa B descarta registros anteriores à detecção, justamente os que podem revelar o início real do comprometimento. A alternativa D subordina uma decisão investigativa a um critério meramente operacional de armazenamento."
  },
  {
    "t": "Uma investigação envolve ações registradas centralmente e em dispositivos de rede, e não em um único sistema do qual seria criada uma imagem forense. O analista precisa obter cópias desses registros junto às equipes responsáveis pela infraestrutura. Qual conjunto de práticas é apropriado nesse cenário?",
    "opts": [
      "A) Trabalhar com administradores de sistema e de dispositivos para obter cópias dos logs, documentar como foram obtidos e aplicar checksums ou outra validação",
      "B) Solicitar os logs informalmente, dispensando o registro do método de obtenção para agilizar a análise",
      "C) Extrair os logs diretamente dos dispositivos de rede sem envolver os administradores responsáveis, evitando alertar possíveis suspeitos internos",
      "D) Coletar os logs e iniciar a análise imediatamente, deixando a documentação e a validação para depois da conclusão do relatório final"
    ],
    "ans": 0,
    "exp": "A prática adequada envolve trabalhar com administradores de sistema e de dispositivos para obter cópias dos logs, documentar como foram obtidos e aplicar checksums ou outra forma de validação. A alternativa B dispensa a documentação, comprometendo a defensabilidade da evidência. A alternativa C ignora a colaboração com os administradores, dificultando a obtenção adequada e documentada dos registros. A alternativa D adia documentação e validação, fragilizando a integridade probatória do material coletado."
  },
  {
    "t": "Uma investigação interna busca determinar se um pen drive específico, apreendido com um funcionário, foi conectado a uma estação de trabalho Windows durante um período determinado. O analista já possui uma imagem forense do drive dessa estação. Qual abordagem permite responder a essa pergunta?",
    "opts": [
      "A) Executar file carving na imagem para recuperar arquivos apagados que possam ter sido copiados para o dispositivo",
      "B) Analisar o histórico de dispositivos USB rastreado pelo Windows, utilizando uma ferramenta como o USB Historian sobre a imagem montada",
      "C) Comparar o hash da imagem forense da estação com o hash do pen drive apreendido",
      "D) Examinar o cache e o histórico do navegador presentes na imagem da estação de trabalho"
    ],
    "ans": 1,
    "exp": "O Windows rastreia o histórico de dispositivos USB conectados, e ferramentas como o USB Historian permitem revisar essas informações a partir de uma imagem de drive montada, viabilizando verificar se dispositivos específicos estavam em uso em determinado momento. O file carving (A) recupera arquivos sem sistema de arquivos disponível, mas não estabelece o vínculo entre dispositivo e máquina. A comparação de hashes (C) valida integridade de cópias, não conexões de dispositivos. Cache e histórico do navegador (D) revelam atividade web, sem registrar conexões USB."
  },
  {
    "t": "Durante um exame forense em uma estação Windows, um analista precisa reunir informações capazes de identificar de forma individualizada os dispositivos USB que foram conectados ao sistema, e não apenas confirmar que houve conexões. Quais dados fornecidos por uma ferramenta de análise de histórico USB atendem a essa necessidade?",
    "opts": [
      "A) O tamanho total do armazenamento disponível em cada dispositivo e seu sistema de arquivos",
      "B) A lista completa de arquivos transferidos entre o dispositivo e a estação de trabalho",
      "C) Os valores de hash calculados para cada arquivo presente no dispositivo no momento da conexão",
      "D) O nome do dispositivo, seu número de série, o ID do fornecedor (vendor ID), o tipo de dispositivo e o horário em que esteve em uso"
    ],
    "ans": 3,
    "exp": "Ferramentas de análise de histórico USB fornecem dados como nome do sistema, nome do dispositivo, número de série, horário de uso, ID do fornecedor e tipo de dispositivo, permitindo individualizar os dispositivos conectados. A alternativa A cita atributos não fornecidos por esse tipo de registro. A alternativa B extrapola a função da ferramenta, que registra conexões, não transferências de arquivos. A alternativa C atribui a essa análise um cálculo de hashes por arquivo, o que pertence a processos de validação de integridade, não ao histórico de dispositivos."
  },
  {
    "t": "Um respondedor de incidentes chega a uma estação de trabalho Windows ainda ligada, suspeita de comprometimento. Um colega sugere desligá-la imediatamente para preservar a evidência antes do transporte. Qual consequência dessa ação o respondedor deve alertar?",
    "opts": [
      "A) Desligar o sistema resulta na perda dos dados armazenados em memória, incluindo artefatos como cache de memória do navegador e estados de programas",
      "B) Desligar o sistema preserva integralmente a memória volátil, desde que o equipamento permaneça conectado à energia",
      "C) Desligar o sistema transfere automaticamente o conteúdo da memória para o disco, mantendo os artefatos disponíveis para análise posterior",
      "D) Desligar o sistema afeta apenas o espaço não alocado do disco, sem impacto sobre dados residentes em memória"
    ],
    "ans": 0,
    "exp": "Desligar um sistema normalmente causa a perda dos dados armazenados em memória, incluindo artefatos forenses como informações em cache de memória do navegador e estados de programas. A alternativa B contraria essa realidade ao sugerir preservação da memória volátil após o desligamento. A alternativa C presume uma transferência automática para o disco, o que não ocorre como parte do desligamento comum. A alternativa D atribui o impacto ao espaço não alocado do disco, quando a perda ocorre justamente nos dados residentes em memória."
  },
  {
    "t": "Uma equipe forense precisa capturar a memória física de um servidor Linux durante uma investigação e avalia duas ferramentas específicas para essa finalidade. Qual afirmação descreve corretamente essas opções?",
    "opts": [
      "A) Ambas as ferramentas são executáveis do Windows que gravam a memória diretamente no diretório onde o programa está armazenado",
      "B) fmem e LiME são módulos de kernel do Linux para acesso à memória física; o fmem foi projetado para uso com o dd ou similares, enquanto o LiME copia dados diretamente para um caminho e arquivo designados",
      "C) Ambas funcionam exclusivamente como plug-ins de análise dentro de suítes forenses comerciais, sem capacidade de captura própria",
      "D) fmem e LiME atuam apenas na análise posterior de dumps de memória já capturados, não realizando a captura em si"
    ],
    "ans": 1,
    "exp": "fmem e LiME são módulos de kernel do Linux que permitem acesso à memória física, sendo o fmem projetado para uso com dd ou ferramentas similares, enquanto o LiME copia os dados diretamente para um caminho e arquivo designados. A alternativa A descreve o comportamento de uma ferramenta Windows, não desses módulos Linux. A alternativa C limita indevidamente ambas a plug-ins de suítes comerciais. A alternativa D nega sua função de captura, restringindo-as à análise posterior."
  },
  {
    "t": "Após capturar um dump de memória de um sistema comprometido, um analista precisa de um framework capaz de operar em Windows, Linux e macOS, e que ofereça extração de chaves de criptografia e senhas, análise de atividade do usuário e análise de rootkits. Qual ferramenta atende a esse conjunto de requisitos?",
    "opts": [
      "A) DumpIt",
      "B) fmem",
      "C) Volatility Framework",
      "D) LiME"
    ],
    "ans": 2,
    "exp": "O Volatility Framework oferece suporte a uma ampla gama de sistemas operacionais, incluindo Windows, Linux e macOS, e reúne capacidades como extração de chaves de criptografia e senhas, análise de atividade do usuário e análise de rootkits. O DumpIt (A) é uma ferramenta de captura de memória do Windows, focada em copiar a memória física, não em análise multiplataforma. O fmem (B) e o LiME (D) são módulos de kernel do Linux voltados ao acesso e à captura da memória física, sem as capacidades analíticas descritas."
  },
  {
    "t": "Durante a investigação de um comprometimento em uma estação Windows, um analista suspeita que o malware envolvido opere apenas em memória e que chaves de criptografia possam não estar gravadas no disco. Considerando que o sistema já foi desligado, qual artefato pode conter esses dados e onde ele normalmente é encontrado?",
    "opts": [
      "A) O arquivo de crash dump, tipicamente localizado no diretório raiz do sistema, em %SystemRoot%\\MEMORY.DMP",
      "B) O cache do navegador, armazenado no perfil do usuário afetado",
      "C) O histórico de dispositivos USB registrado pelo sistema operacional",
      "D) O espaço não alocado do disco, recuperável por meio de file carving"
    ],
    "ans": 0,
    "exp": "Arquivos de crash dump contêm o conteúdo da memória viva e podem incluir chaves de criptografia residentes em memória e malware que roda apenas em memória, sendo tipicamente encontrados no diretório raiz do sistema, em %SystemRoot%\\MEMORY.DMP. O cache do navegador (B) armazena artefatos de navegação, não conteúdo completo da memória. O histórico USB (C) registra dispositivos conectados, sem relação com dados residentes em memória. O espaço não alocado (D) pode conter dados apagados do disco, mas não o conteúdo da memória volátil."
  },
  {
    "t": "Uma equipe conduz uma investigação interna sobre uma possível violação de política, sem indícios de crime até o momento. Um analista propõe simplificar parte da documentação de cadeia de custódia para acelerar o trabalho. Qual orientação deve guiar essa decisão?",
    "opts": [
      "A) A documentação de cadeia de custódia é dispensável em qualquer investigação interna, já que esses casos nunca alcançam esferas legais",
      "B) Ignorar partes mais rigorosas do processo é aceitável apenas com certeza absoluta de que o caso não se tornará legal ou policial; havendo dúvida, é mais seguro documentar em excesso",
      "C) A simplificação é sempre recomendada em investigações internas, pois excesso de documentação prejudica a validade das evidências em tribunal",
      "D) A cadeia de custódia deve ser mantida exatamente igual em todos os cenários, sem qualquer margem de julgamento profissional"
    ],
    "ans": 1,
    "exp": "É razoável flexibilizar partes mais rigorosas da documentação apenas quando há certeza absoluta de que a investigação não se tornará uma questão legal ou policial; em caso de dúvida, é mais seguro pecar pelo excesso de documentação para evitar problemas em tribunal. A alternativa A elimina a documentação de forma categórica, ignorando que casos internos podem evoluir. A alternativa C inverte a lógica ao sugerir que documentar em excesso prejudicaria as evidências. A alternativa D desconsidera a diferença de requisitos probatórios entre investigações internas e forenses."
  },
  {
    "t": "Um analista forense recebe um smartphone apreendido e precisa iniciar o processo de aquisição de dados. Qual deve ser a primeira ação adotada nesse procedimento?",
    "opts": [
      "A) Realizar imediatamente o imageamento completo do armazenamento interno do aparelho",
      "B) Extrair o cartão SIM e os cartões de mídia antes de qualquer outra intervenção",
      "C) Desabilitar a conectividade de rede do dispositivo",
      "D) Fotografar a tela do aparelho e registrar anotações sobre o conteúdo visível"
    ],
    "ans": 2,
    "exp": "A aquisição forense de dispositivos móveis normalmente começa desabilitando a conectividade de rede do aparelho, evitando alterações remotas ou apagamento dos dados, para só então garantir o acesso ao dispositivo. A alternativa A descreve o imageamento, que ocorre ao final do processo. A alternativa B trata da aquisição física de componentes, realizada após o acesso ao dispositivo ser assegurado. A alternativa D corresponde ao acesso manual, um modo de aquisição, não à etapa inicial do procedimento."
  },
  {
    "t": "Durante a análise de um smartphone, um investigador precisa identificar não apenas os arquivos e diretórios presentes no aparelho, mas também detalhes sobre arquivos que foram apagados pelo usuário. Qual modo de aquisição é o mais adequado para esse objetivo?",
    "opts": [
      "A) Aquisição de sistema de arquivos (filesystem)",
      "B) Aquisição física",
      "C) Acesso manual (manual access)",
      "D) Aquisição lógica"
    ],
    "ans": 0,
    "exp": "A aquisição de sistema de arquivos fornece detalhes de arquivos apagados, além dos arquivos e diretórios existentes no dispositivo. A aquisição física (B) envolve obter cartão SIM, cartões de memória ou backups, sem esse foco em artefatos apagados do sistema de arquivos. O acesso manual (C) limita-se a revisar o conteúdo visível no aparelho desbloqueado, registrando fotos e anotações. A aquisição lógica (D) cria imagem dos volumes de armazenamento lógico, mas não é o modo indicado para recuperar detalhes de arquivos apagados."
  },
  {
    "t": "Diante de um aparelho bloqueado cujo passcode é desconhecido, um analista opta por trabalhar com o cartão SIM, os cartões de memória e os backups disponíveis do dispositivo. Qual modo de aquisição está sendo empregado nesse caso?",
    "opts": [
      "A) Aquisição lógica",
      "B) Acesso manual (manual access)",
      "C) Aquisição de sistema de arquivos (filesystem)",
      "D) Aquisição física"
    ],
    "ans": 3,
    "exp": "A aquisição física consiste na obtenção do cartão SIM, cartões de memória ou backups do dispositivo, sendo aplicável mesmo quando o aparelho resiste ao imageamento por estar bloqueado. A aquisição lógica (A) exige uma ferramenta forense para imagear volumes de armazenamento lógico, o que normalmente demanda acesso ao dispositivo. O acesso manual (B) requer um telefone vivo e desbloqueado, o que não é o caso. A aquisição de sistema de arquivos (C) foca em arquivos existentes e apagados, dependendo igualmente de acesso ao conteúdo do aparelho."
  },
  {
    "t": "Um analista está conduzindo o exame forense de uma imagem de estação de trabalho previamente adquirida e já concluiu as tarefas inicialmente planejadas no escopo da investigação. Durante o trabalho, surgiram indícios que apontam para atividades ainda não previstas no planejamento original. Qual afirmação melhor descreve como o analista deve compreender essa situação?",
    "opts": [
      "A) Um exame forense pode envolver mais tarefas do que as inicialmente listadas, e pistas adicionais encontradas ao longo da análise podem apontar para novas direções de investigação",
      "B) O exame deve se limitar estritamente às tarefas definidas no planejamento inicial, descartando quaisquer indícios adicionais encontrados durante a análise",
      "C) O surgimento de novas pistas indica falha na aquisição da imagem forense, exigindo que todo o processo de captura seja refeito",
      "D) Novas direções de investigação só podem ser adotadas após a conclusão formal e o arquivamento do relatório final do caso"
    ],
    "ans": 0,
    "exp": "Um exame forense completo pode envolver mais tarefas do que as inicialmente previstas, e é provável que pistas adicionais surjam durante a exploração da imagem, apontando para novas direções de exame. A alternativa B ignora indícios relevantes, limitando indevidamente a investigação ao planejamento inicial. A alternativa C confunde o surgimento natural de novas pistas com uma falha técnica na aquisição da imagem. A alternativa D impõe uma restrição procedimental artificial, adiando linhas de investigação que podem ser exploradas durante a própria análise."
  },
  {
    "t": "Durante sua investigação, Jeff, um perito forense certificado, recebe de um membro da equipe de TI uma imagem de uma unidade e é solicitado a adicioná-la ao seu caso forense. Qual é o problema mais importante que Jeff pode enfrentar se o caso for levado à Justiça e seus procedimentos forem questionados?",
    "opts": [
      "A) Somas de verificação incorretas",
      "B) Divergência de hash",
      "C) Atividades antiforenses",
      "D) Incapacidade de certificar a cadeia de custódia"
    ],
    "ans": 3,
    "exp": "Jeff não criou a imagem e não consegue validar a cadeia de custódia da unidade. Isso também significa que ele não pode provar que a unidade é uma cópia do original. Como não conhecemos a soma de verificação da unidade original, não há uma soma de verificação incorreta nem uma divergência de hash — não há um original disponível para comparação. Podem ter ocorrido atividades antiforenses, mas não é possível determinar isso a partir da questão."
  },
  {
    "t": "Jeff está investigando um sistema que está executando um malware que ele acredita criptografar seus dados na unidade. Qual processo ele deve usar para ter a melhor chance de visualizar esses dados de forma não criptografada?",
    "opts": [
      "A) Criação de imagens com o sistema em execução",
      "B) Criação de imagens offline",
      "C) Quebra de criptografia por força bruta",
      "D) Provocar uma falha do sistema e analisar o despejo de memória"
    ],
    "ans": 0,
    "exp": "Criar uma imagem do sistema enquanto o programa está em execução oferece a maior probabilidade de permitir que Jeff capture as chaves de criptografia ou os dados descriptografados da memória. Uma imagem obtida offline após o desligamento do sistema provavelmente exigirá lidar com o arquivo criptografado. Ataques de força bruta normalmente são lentos e podem não ter sucesso, e provocar uma falha do sistema pode resultar em dados corrompidos ou inexistentes."
  },
  {
    "t": "Após importar uma imagem forense de um disco de grande capacidade para sua ferramenta de análise e registrá-la no caso, um analista percebe que o processamento inicial está levando um tempo considerável antes que ele possa explorar as evidências. Quais atividades compõem esse processamento?",
    "opts": [
      "A) A geração de valores de hash do disco de origem e da cópia clonada, para validar a integridade da aquisição",
      "B) A identificação de tipos de arquivo, a pesquisa do slack space e do espaço não alocado, e a construção de um índice de timestamps dos arquivos",
      "C) A aplicação de um bloqueador de escrita para impedir modificações acidentais na imagem durante a análise",
      "D) A quebra por força bruta de senhas associadas a arquivos protegidos encontrados na imagem"
    ],
    "ans": 1,
    "exp": "Após a importação e o devido registro em log, a imagem é indexada e analisada, o que inclui identificar tipos de arquivo, pesquisar slack space e espaço não alocado e construir um índice de timestamps — processo que pode ser demorado, especialmente em drives grandes. A alternativa A descreve a validação de integridade, realizada durante a aquisição, não a indexação. A alternativa C trata de um controle físico aplicado ao drive, não de uma etapa de processamento da imagem. A alternativa D refere-se à recuperação de senhas, uma atividade distinta da indexação inicial."
  },
  {
    "t": "Concluída a indexação da imagem forense, um investigador começa a explorar as categorias de evidência disponíveis na ferramenta, como e-mail, gráficos, vídeo, chat de internet e favoritos. Antes de aprofundar a análise dos artefatos, qual prática a maioria dos investigadores adota nesse estágio?",
    "opts": [
      "A) Reindexar a imagem periodicamente para garantir que novos artefatos sejam incorporados ao caso",
      "B) Exportar imediatamente todos os artefatos das abas de evidência para um relatório preliminar do caso",
      "C) Registrar o sistema operacional, o fuso horário e outras informações do computador, como quais usuários possuem contas no sistema",
      "D) Reimportar a imagem original em vez da cópia de trabalho, assegurando maior fidelidade dos dados analisados"
    ],
    "ans": 2,
    "exp": "Nesse estágio, a maioria dos investigadores dedica tempo a registrar o sistema operacional, o fuso horário e outras informações do computador, como quais usuários possuem contas no sistema, o que contextualiza corretamente os artefatos encontrados. A alternativa A propõe reindexações periódicas não descritas como prática desse momento. A alternativa B antecipa a exportação de artefatos antes mesmo da análise adequada. A alternativa D contraria a prática forense de trabalhar sobre uma cópia, preservando a imagem original como evidência."
  },
  {
    "t": "Durante o exame forense de uma estação Windows envolvida em uma suspeita de vazamento de dados, o analista identifica que o CCleaner foi removido do sistema e que o Eraser deixou um diretório remanescente na pasta Program Files. O que a presença desses utilitários indica sobre a conduta do usuário investigado?",
    "opts": [
      "A) Evidência de uma tentativa antiforense, sugerindo intenção do usuário de apagar evidências",
      "B) Prova de que o sistema foi comprometido remotamente por um atacante externo",
      "C) Indício de manutenção rotineira do sistema, sem relevância para a investigação",
      "D) Confirmação de que os dados vazados foram transferidos por meio desses utilitários"
    ],
    "ans": 0,
    "exp": "O CCleaner remove histórico e cache do navegador e apaga outras informações úteis à forense, e o Eraser é um utilitário de apagamento de arquivos; ambos são tipicamente encontrados como parte de uma tentativa antiforense, evidenciando a intenção do usuário de apagar evidências. A alternativa B atribui a presença dos utilitários a um comprometimento externo, o que não é sustentado pelo contexto. A alternativa C descarta indevidamente artefatos relevantes. A alternativa D confunde ferramentas de limpeza com mecanismos de exfiltração de dados."
  },
  {
    "t": "Ao revisar o histórico do navegador Chrome em uma imagem forense, um analista encontra buscas por técnicas antiforenses e uma visita a uma página especializada nesse assunto. Qual conclusão e qual ação subsequente são mais adequadas diante dessa descoberta?",
    "opts": [
      "A) Encerrar a análise do histórico do navegador, já que buscas por si só não constituem evidência utilizável",
      "B) Concluir que o usuário não conseguiu aplicar as técnicas, dado que os artefatos ainda estão visíveis na imagem",
      "C) É provável que o usuário tenha aplicado essas técnicas com algum grau de sucesso, sendo necessário buscar dados apagados ou ocultados",
      "D) Presumir que o histórico do navegador foi plantado por terceiros para incriminar o usuário"
    ],
    "ans": 2,
    "exp": "Como o usuário pesquisou técnicas antiforenses, é provável que as tenha aplicado com algum grau de sucesso, o que exige buscas específicas por dados apagados ou de outra forma ocultados no sistema. A alternativa A descarta uma linha investigativa relevante. A alternativa B tira uma conclusão precipitada a partir da presença de alguns artefatos, ignorando o que pode ter sido efetivamente removido. A alternativa D introduz uma hipótese não sustentada pelos indícios disponíveis."
  },
  {
    "t": "Um investigador precisa determinar quando uma aplicação foi instalada em uma estação Windows, a fim de correlacionar essa instalação com o período em que comunicações suspeitas por e-mail estavam ocorrendo. Qual localização contém informações de instalação úteis para essa correlação?",
    "opts": [
      "A) A pasta Program Files, onde diretórios remanescentes de aplicações desinstaladas são preservados",
      "B) O diretório local do usuário, em C:\\Users<username>\\AppData\\Local\\Temp",
      "C) O arquivo de histórico do navegador Chrome, que registra downloads e instalações realizadas",
      "D) A lista indexada de documentos do Microsoft Office gerada pela ferramenta forense"
    ],
    "ans": 1,
    "exp": "Em máquinas Windows, informações de instalação residem nos diretórios locais de usuário, em C:\\Users<username>\\AppData\\Local\\Temp, permitindo verificar quando aplicações foram instaladas e correlacionar isso com outros eventos da linha do tempo. A alternativa A cita um local onde podem restar diretórios de aplicações, mas não é a fonte descrita para dados de instalação em cache. A alternativa C confunde histórico de navegação com registro de instalações. A alternativa D refere-se à revisão de documentos, útil para outro objetivo da investigação."
  },
  {
    "t": "Um analista concluiu todas as atividades de aquisição e análise de uma investigação forense e está agora estruturando o documento final que será apresentado aos solicitantes. Quais componentes principais devem constar nesse relatório?",
    "opts": [
      "A) O inventário do kit forense utilizado, os valores de hash das imagens adquiridas e o cronograma de reimageamento dos sistemas afetados",
      "B) A lista de ferramentas comerciais empregadas, os custos da investigação e as recomendações de aquisição de novos equipamentos",
      "C) Os objetivos e o escopo da investigação; o alvo ou alvos das atividades forenses, incluindo sistemas, dispositivos e mídias; e uma listagem completa das descobertas e resultados",
      "D) A cadeia de custódia detalhada de cada evidência, o organograma da equipe envolvida e o plano de resposta a incidentes atualizado"
    ],
    "ans": 2,
    "exp": "Um relatório forense deve conter três componentes principais: os objetivos e o escopo da investigação; o alvo ou alvos das atividades forenses, incluindo todos os sistemas, dispositivos e mídias; e uma listagem completa das descobertas e resultados. A alternativa A reúne elementos técnicos e operacionais que não constituem a estrutura central do relatório. A alternativa B foca em aspectos administrativos e financeiros, alheios à finalidade do documento. A alternativa D cita itens que podem acompanhar a investigação, mas não representam os três componentes principais do relatório."
  },
  {
    "t": "Uma investigação forense de grande porte envolveu a captura e a análise de dezenas de estações de trabalho, servidores e mídias removíveis. Ao estruturar o relatório final, como o analista deve tratar a listagem dos alvos examinados?",
    "opts": [
      "A) Reduzir o nível de detalhe de cada item, registrando apenas o tipo genérico de dispositivo, para manter o relatório conciso",
      "B) Apresentar uma visão geral de alto nível dos sistemas, aplicações, dispositivos e mídias no corpo do relatório, com referência a um apêndice contendo a listagem completa e detalhada",
      "C) Omitir a listagem de alvos do relatório, já que essas informações já constam nos formulários de cadeia de custódia",
      "D) Listar integralmente todos os dispositivos com detalhamento completo no corpo principal do relatório, sem uso de apêndices"
    ],
    "ans": 1,
    "exp": "Quando um grande número de dispositivos ou sistemas é inspecionado, a listagem completa dos alvos costuma ser movida para um apêndice, enquanto o corpo do relatório apresenta uma visão geral de alto nível dos sistemas, aplicações, dispositivos e mídias, com referência ao apêndice para o detalhamento. A alternativa A reduz indevidamente o nível de detalhe, que deve corresponder ao usado no registro dos itens. A alternativa C elimina uma parte obrigatória do relatório. A alternativa D ignora a prática recomendada de deslocar listagens extensas para apêndice."
  },
  {
    "t": "Um analista está redigindo a seção mais crítica de um relatório forense e precisa garantir que ela cumpra sua função probatória adequadamente. Quais elementos essa seção deve apresentar sobre cada evidência relevante?",
    "opts": [
      "A) Uma listagem detalhada dos dispositivos, sistemas e mídias capturados durante a investigação",
      "B) O que foi descoberto, como foi descoberto e por que aquilo é importante",
      "C) Os objetivos da investigação e a identificação de quem a solicitou",
      "D) O inventário das ferramentas forenses utilizadas e a validação de seus resultados"
    ],
    "ans": 1,
    "exp": "As descobertas constituem a parte mais crítica do relatório forense e devem indicar o que foi descoberto, como foi descoberto e por que aquilo é importante para o caso. A alternativa A descreve a seção de alvos, que lista dispositivos, sistemas e mídias analisados. A alternativa C corresponde à seção de objetivos e escopo, que contextualiza a demanda inicial. A alternativa D trata de aspectos metodológicos e instrumentais, que podem apoiar o relatório, mas não constituem o conteúdo central das descobertas."
  },
  {
    "t": "Após conter um incidente de segurança, uma organização inicia um processo formal para compreender por que o problema ocorreu, com o intuito de direcionar esforços preventivos e evitar que a situação atual se agrave. Qual é o propósito central desse processo?",
    "opts": [
      "A) Determinar quais evidências devem ser preservadas para eventual uso em processos judiciais",
      "B) Identificar por que o problema ocorreu, permitindo focar na prevenção de problemas futuros e impedir o agravamento do problema atual",
      "C) Estimar os custos financeiros decorrentes do incidente e o retorno esperado dos controles adotados",
      "D) Documentar a cadeia de custódia de todos os dispositivos envolvidos no incidente"
    ],
    "ans": 1,
    "exp": "A análise de causa raiz busca identificar por que um problema, incidente ou questão ocorreu, permitindo que a organização entenda onde focar para prevenir problemas futuros e assegurar que o problema atual não se agrave. A alternativa A trata de preservação de evidências, atividade distinta da RCA. A alternativa C descreve avaliação de custo-benefício, que ocorre após a identificação de soluções, não sendo o propósito central do processo. A alternativa D refere-se ao controle custodial das evidências, sem relação com a determinação das causas do evento."
  },
  {
    "t": "Susan precisa capturar o tráfego de rede de um servidor Linux que não usa uma interface gráfica. Qual utilitário de captura de pacotes é encontrado em muitos sistemas Linux e funciona pela linha de comando?",
    "opts": [
      "A) tcpdump",
      "B) netdd",
      "C) Wireshark",
      "D) Snifman"
    ],
    "ans": 0,
    "exp": "O tcpdump é um utilitário de captura de pacotes de linha de comando encontrado em muitos sistemas Linux. O Wireshark é uma ferramenta com interface gráfica disponível para a maioria dos sistemas operacionais. Netdd e snifman foram inventados para esta questão."
  },
  {
    "t": "Durante uma investigação forense, Ben pede a Chris que se sente ao seu lado e ateste com sua assinatura as ações que ele realizou. O que Ben está fazendo?",
    "opts": [
      "A) Mantendo a cadeia de custódia",
      "B) Validação por observação direta",
      "C) Perícia em dupla",
      "D) Separação de funções"
    ],
    "ans": 0,
    "exp": "Ben está mantendo a documentação da cadeia de custódia. Chris atua como validador das ações que Ben realiza e como testemunha do processo."
  },
  {
    "t": "Uma equipe já definiu formalmente o incidente que será analisado e agora precisa avançar na investigação de suas causas. Qual atividade caracteriza a etapa seguinte de um processo típico de análise de causa raiz?",
    "opts": [
      "A) Validar que as correções aplicadas foram eficazes ao longo do tempo",
      "B) Implementar controles e mudanças destinados a tratar a causa identificada",
      "C) Elaborar o relatório final consolidando os resultados da análise",
      "D) Identificar as causas ou fatores contribuintes do evento, incluindo a construção de uma linha do tempo ou fluxo de processo"
    ],
    "ans": 3,
    "exp": "Após definir o evento ou incidente a ser analisado, a etapa seguinte consiste em identificar as causas ou fatores contribuintes, o que inclui construir uma linha do tempo ou fluxo de processo. A alternativa A corresponde a uma etapa posterior, de validação das correções já implementadas. A alternativa B ocorre somente após a identificação da causa raiz e de suas soluções. A alternativa C representa a etapa final do processo, o relatório, executada após todas as demais."
  },
  {
    "t": "Um analista percebe que o processo de análise de causa raiz descrito em seu manual interno não inclui explicitamente nenhuma etapa dedicada à avaliação de custos e benefícios das soluções propostas. Como essa ausência deve ser interpretada?",
    "opts": [
      "A) A avaliação de custo-benefício normalmente ocorre após a identificação de soluções potenciais e antes de sua implementação, por meio de disciplinas como avaliação de risco",
      "B) A avaliação de custo-benefício é irrelevante em processos de análise de causa raiz e não deve ser conduzida em nenhum momento",
      "C) A avaliação de custo-benefício substitui integralmente a etapa de validação da eficácia das correções aplicadas",
      "D) A avaliação de custo-benefício deve ser realizada obrigatoriamente antes mesmo de definir o evento que será analisado"
    ],
    "ans": 0,
    "exp": "Embora a análise de custo-benefício não conste como etapa formal da RCA, ela normalmente acontece depois que soluções potenciais são identificadas e antes de serem implementadas, apoiada por disciplinas como avaliação de risco. A alternativa B descarta indevidamente essa análise, que costuma ocorrer na prática. A alternativa C confunde duas atividades distintas, já que a validação verifica a eficácia das correções aplicadas. A alternativa D antecipa a avaliação para antes da definição do evento, quando ainda não há soluções a avaliar."
  },
  {
    "t": "Encerrada a resposta a um incidente de segurança, a equipe se reúne para consolidar as conclusões extraídas do episódio, incluindo oportunidades de melhoria, novos controles a implementar e ajustes em processos e procedimentos. Qual etapa da atividade pós-incidente está sendo conduzida?",
    "opts": [
      "A) Análise de causa raiz",
      "B) Aquisição de evidências",
      "C) Lições aprendidas (lessons learned)",
      "D) Contenção e erradicação"
    ],
    "ans": 2,
    "exp": "A identificação das lições aprendidas é a etapa final da atividade pós-incidente e consiste justamente em reunir as conclusões extraídas do incidente, incluindo oportunidades de melhoria, novos controles ou práticas a implementar e mudanças de processo ou procedimento. A análise de causa raiz (A) busca determinar por que o incidente ocorreu, sendo uma atividade distinta. A aquisição de evidências (B) ocorre durante o trabalho forense, não na consolidação final. A contenção e erradicação (D) integram fases anteriores do ciclo de resposta a incidentes."
  },
  {
    "t": "Um gestor de segurança questiona qual é a aplicação prática do documento de lições aprendidas produzido após um incidente, argumentando que o episódio já foi encerrado. Qual resposta descreve corretamente sua finalidade?",
    "opts": [
      "A) Servem exclusivamente como registro histórico para auditorias externas, sem influência sobre processos futuros",
      "B) São usadas para orientar a fase de preparação do trabalho pré-incidente daqui para frente",
      "C) Substituem a necessidade de conduzir análise de causa raiz em incidentes futuros semelhantes",
      "D) Destinam-se apenas a avaliar o desempenho individual dos membros da equipe de resposta"
    ],
    "ans": 1,
    "exp": "As lições aprendidas podem reunir uma ampla variedade de feedbacks e são usadas para orientar a fase de preparação do trabalho pré-incidente daqui em diante, retroalimentando o ciclo de resposta. A alternativa A restringe sua função a registro histórico, ignorando seu papel na preparação futura. A alternativa C confunde duas atividades distintas, já que a análise de causa raiz continua necessária em novos incidentes. A alternativa D reduz o processo a uma avaliação individual de desempenho, o que não corresponde à sua finalidade."
  },
  {
    "t": "Uma organização está montando sua capacidade forense e precisa definir os componentes que normalmente compõem um kit forense completo, além da estação de trabalho central. Quais itens costumam integrar esse conjunto?",
    "opts": [
      "A) Bloqueadores de escrita, duplicadores forenses, mídias e equipamentos e insumos de documentação",
      "B) Servidores de virtualização, appliances de firewall e switches gerenciáveis dedicados à segmentação de rede",
      "C) Sistemas de detecção de intrusão, coletores de logs centralizados e plataformas de correlação de eventos",
      "D) Ferramentas de desenvolvimento de software, ambientes de teste e repositórios de código versionado"
    ],
    "ans": 0,
    "exp": "Kits forenses são construídos em torno de estações de trabalho potentes e frequentemente incluem bloqueadores de escrita, duplicadores forenses, mídias e equipamentos e insumos de documentação, além de ferramentas especializadas para casos específicos. A alternativa B cita componentes de infraestrutura de rede, alheios à composição de um kit forense. A alternativa C descreve tecnologias de monitoramento e detecção, voltadas à operação de segurança, não à aquisição de evidências. A alternativa D lista recursos de desenvolvimento de software, sem relação com investigações forenses."
  },
  {
    "t": "Durante o planejamento de uma investigação, um analista precisa comprovar posteriormente que a imagem forense adquirida é idêntica ao dispositivo original e também demonstrar quem teve acesso a essa imagem e o que foi feito com ela. Quais recursos do software forense atendem a essas duas necessidades?",
    "opts": [
      "A) Recuperação de arquivos por carving e análise de sistemas de arquivos",
      "B) Aquisição de dados de múltiplos tipos de drives e imageamento de dispositivos móveis",
      "C) Hashing e validação da integridade dos dados, somados à documentação da cadeia de custódia",
      "D) Preservação de dados exigida por retenções legais e por processos organizacionais internos"
    ],
    "ans": 2,
    "exp": "Hashing e validação da integridade dos dados são fundamentais para provar que a imagem forense corresponde ao original, enquanto a documentação da cadeia de custódia comprova quem teve acesso à imagem e o que foi feito com ela. A alternativa A trata de recuperação e análise de conteúdo, não de integridade ou rastreamento de acesso. A alternativa B refere-se a capacidades de aquisição, sem cobrir validação ou custódia. A alternativa D aborda preservação de dados por exigência legal ou organizacional, uma finalidade distinta."
  },
  {
    "t": "Após concluir a investigação forense de um incidente de segurança, a equipe elabora a documentação final do caso. Quais elementos devem constar nesse conjunto de entregas, considerando tanto o relatório forense quanto os processos forenses relacionados a incidentes?",
    "opts": [
      "A) Apenas a listagem dos alvos analisados e os valores de hash das imagens adquiridas",
      "B) Os objetivos da investigação, os alvos, a listagem do que foi encontrado e a análise do significado desses dados, acompanhados de análise de causa raiz e lições aprendidas",
      "C) Somente a análise de causa raiz e o plano de reimageamento dos sistemas comprometidos",
      "D) Exclusivamente as lições aprendidas e os registros de preservação exigidos por retenções legais"
    ],
    "ans": 1,
    "exp": "Um relatório forense deve incluir os objetivos da investigação, os alvos, a listagem do que foi encontrado e uma análise cuidadosa do significado desses dados; processos forenses ligados a incidentes normalmente incluem também análise de causa raiz e lições aprendidas. A alternativa A omite objetivos, descobertas e análise. A alternativa C reduz o conjunto a um único componente somado a uma ação de recuperação. A alternativa D isola as lições aprendidas e a preservação legal, deixando de fora os elementos centrais do relatório."
  },
  {
    "t": "Qual ferramenta não é comumente usada para gerar o hash de uma cópia forense?",
    "opts": [
      "A) MD5",
      "B) FTK",
      "C) SHA1",
      "D) AES"
    ],
    "ans": 3,
    "exp": "Embora o AES tenha um modo de hashing, MD5, SHA1 e as ferramentas de hashing integradas ao FTK e a outras ferramentas comerciais são usados com mais frequência para gerar hashes forenses."
  },
  {
    "t": "Qual dos problemas a seguir torna mais difícil realizar análises forenses tanto em ambientes em nuvem quanto em ambientes virtualizados?",
    "opts": [
      "A) Outras organizações os gerenciam.",
      "B) Os sistemas podem ser efêmeros.",
      "C) Nenhuma ferramenta forense funciona nos dois ambientes.",
      "D) As imagens de unidades não podem ser verificadas."
    ],
    "ans": 1,
    "exp": "Ambientes em nuvem e virtualizados frequentemente são temporários (efêmeros) e, portanto, pode ser difícil realizar análises forenses neles. Se você tiver um ambiente em nuvem, virtualizado ou conteinerizado, certifique-se de ter considerado como realizará a análise forense e quais técnicas de preservação de dados poderá precisar usar."
  }
];
