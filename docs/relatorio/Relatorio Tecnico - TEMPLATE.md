# Informações do Projeto
`SANTÉ`  

Conecte-se à sua saúde, conecte-se ao futuro, conecte-se conosco.

`ENGENHARIA DE SOFTWARE` 

A Engenharia de Software é uma tecnologia que, se usada de forma correta, é capaz de ajudar em diversas áreas da sociedade, como acessar serviços de saúde de qualidade, melhorando assim a eficiência dos processos médicos e aumentando a acessibilidade para pacientes em locais remotos ou com mobilidade reduzida.

## Participantes

Os membros do grupo são: 
- Matheus Dias
- Lucas Silva
- Eduardo Maia
- Cleverson Resende
- Julia Rocha

# Estrutura do Documento

- [Informações do Projeto](#informações-do-projeto)
  - [Participantes](#participantes)
- [Estrutura do Documento](#estrutura-do-documento)
- [Introdução](#introdução)
  - [Problema](#problema)
  - [Objetivos](#objetivos)
  - [Justificativa](#justificativa)
  - [Público-Alvo](#público-alvo)
- [Especificações do Projeto](#especificações-do-projeto)
  - [Personas e Mapas de Empatia](#personas-e-mapas-de-empatia)
  - [Histórias de Usuários](#histórias-de-usuários)
  - [Requisitos](#requisitos)
    - [Requisitos Funcionais](#requisitos-funcionais)
    - [Requisitos não Funcionais](#requisitos-não-funcionais)
  - [Restrições](#restrições)
- [Projeto de Interface](#projeto-de-interface)
  - [User Flow](#user-flow)
  - [Wireframes](#wireframes)
- [Metodologia](#metodologia)
  - [Divisão de Papéis](#divisão-de-papéis)
  - [Ferramentas](#ferramentas)
  - [Controle de Versão](#controle-de-versão)
- [**############## SPRINT 1 ACABA AQUI #############**](#-sprint-1-acaba-aqui-)
- [Projeto da Solução](#projeto-da-solução)
  - [Tecnologias Utilizadas](#tecnologias-utilizadas)
  - [Arquitetura da solução](#arquitetura-da-solução)
- [Avaliação da Aplicação](#avaliação-da-aplicação)
  - [Plano de Testes](#plano-de-testes)
  - [Ferramentas de Testes (Opcional)](#ferramentas-de-testes-opcional)
  - [Registros de Testes](#registros-de-testes)
- [Referências](#referências)


# Introdução

## Problema

Há muitas pessoas que, por várias razões, negligenciam sua saúde e bem-estar, não procuram algum auxilio medico. Algumas dessas pessoas simplesmente não encontram tempo para visitar um médico, enquanto outras podem enfrentar dificuldades para se deslocar até um consultório, além da falta de acesso equitativo a serviços de saúde de qualidade. Esse problema pode se manifestar de várias maneiras, incluindo disparidades no acesso aos cuidados de saúde entre diferentes grupos socioeconômicos, geográficos, raciais e étnicos.

> **Links Úteis**:
> - [Objetivos, Problema de pesquisa e Justificativa](https://medium.com/@versioparole/objetivos-problema-de-pesquisa-e-justificativa-c98c8233b9c3)
> - [Matriz Certezas, Suposições e Dúvidas](https://medium.com/educa%C3%A7%C3%A3o-fora-da-caixa/matriz-certezas-suposi%C3%A7%C3%B5es-e-d%C3%BAvidas-fa2263633655)
> - [Brainstorming](https://www.euax.com.br/2018/09/brainstorming/)

## Objetivos

Objetivos Do Santé

Missão:

A Santé se dedica a agregar saúde e bem-estar à vida daqueles que, por diversas razões, não podem mais acessar um acompanhamento médico formalizado. Através de um modelo inovador e humanizado, buscamos ampliar o acesso à saúde de qualidade, promovendo a prevenção de doenças, o autocuidado e a qualidade de vida da população.

Visão:

Aspiramos a ser reconhecidos como uma referência em saúde para pessoas em situação de vulnerabilidade, contribuindo para a construção de uma sociedade mais justa e saudável.

Valores:

Compromisso com a saúde: Priorizamos o bem-estar físico, mental e social dos nossos usuários.
Acessibilidade: Acreditamos que a saúde é um direito fundamental e deve estar disponível para todos, independentemente de renda, status social ou localização.
Humanização: Cultivamos um ambiente acolhedor e respeitoso, valorizando a individualidade de cada usuário.
Inovação: Buscamos constantemente aprimorar nossos serviços e métodos, utilizando tecnologias e conhecimentos atualizados para oferecer o melhor atendimento possível.
Eficiência: Gerimos nossos recursos com responsabilidade e transparência, otimizando processos e buscando sempre a sustentabilidade da organização.
Trabalho em equipe: Valorizamos a colaboração e o aprendizado mútuo entre nossos colaboradores, reconhecendo a importância de cada um para o alcance dos nossos objetivos.

## Justificativa

......  COLOQUE AQUI O SEU TEXTO ......

> Descreva a importância ou a motivação para trabalhar com esta aplicação
> que você escolheu. Indique as razões pelas quais você escolheu seus
> objetivos específicos ou as razões para aprofundar em certos aspectos
> do software.
> 
> O grupo de trabalho pode fazer uso de questionários, entrevistas e
> dados estatísticos, que podem ser apresentados, com o objetivo de
> esclarecer detalhes do problema que será abordado pelo grupo.
>
> **Links Úteis**:
> - [Como montar a justificativa](https://guiadamonografia.com.br/como-montar-justificativa-do-tcc/)

## Público-Alvo


Persona: Maria da Silva
Idade: 65 anos

Ocupação: Aposentada

Localização: Belo Horizonte, Minas Gerais

Contexto:

Maria é uma mulher viúva que vive sozinha há 5 anos. Ela tem diabetes e hipertensão, e precisa fazer acompanhamento médico regular. No entanto, devido à falta de plano de saúde e à dificuldade de locomoção, Maria tem tido problemas para acessar serviços de saúde de qualidade.

Frustrações:

Dificuldade de agendar consultas médicas
Longas filas de espera nos hospitais
Falta de informação sobre como cuidar da sua saúde
Sentimento de solidão e isolamento
Objetivos:

Encontrar um médico que possa acompanhá-la de forma regular
Ter acesso a exames e medicamentos a preços acessíveis
Receber orientação sobre como cuidar da sua saúde
Interagir com outras pessoas que também têm diabetes e hipertensão
Como o Santé pode ajudar:

O Santé pode oferecer à Maria consultas médicas online com profissionais qualificados.
O Santé pode ajudá-la a agendar exames e a encontrar medicamentos a preços acessíveis.
O Santé pode fornecer à Maria informações sobre como cuidar da sua saúde, através de artigos, vídeos e grupos de apoio online.
O Santé pode conectar a Maria com outras pessoas que também têm diabetes e hipertensão, para que ela possa compartilhar suas experiências e receber apoio.
Citações:

"Eu gostaria de ter um médico que pudesse me atender em casa, porque é muito difícil para mim ir ao hospital."
"Eu não sei como cuidar da minha saúde direito. Eu preciso de alguém que me explique o que eu devo fazer."
"Eu me sinto muito sozinha. Eu gostaria de conversar com outras pessoas que entendem o que eu estou passando."
Valores do Santé que mais se identificam com a Maria:

Acessibilidade: Maria valoriza o fato de que o Santé oferece serviços de saúde a preços acessíveis e que podem ser acessados online.
Humanização: Maria se sente acolhida e respeitada pela equipe do Santé.
Inovação: Maria está impressionada com a tecnologia utilizada pelo Santé para oferecer serviços de saúde.
Conclusão:

O Santé pode ajudar a Maria a melhorar sua saúde e qualidade de vida, oferecendo-lhe acesso a serviços de saúde de qualidade, de forma acessível e humanizada.
 
# Especificações do Projeto


Especificações do Projeto Santé 
1. Objetivo Geral:

Desenvolver um software chamado Santé que visa agregar saúde e bem-estar à vida de pessoas que, por diversas razões, não podem mais acessar um acompanhamento médico formalizado. Através de um modelo inovador e humanizado, o Santé busca ampliar o acesso à saúde de qualidade, promovendo a prevenção de doenças, o autocuidado e a qualidade de vida da população, com foco em atender às necessidades e desafios específicos da persona Maria da Silva, descrita anteriormente.

2. Público-alvo:

Pessoas em situação de vulnerabilidade social, como idosos, portadores de doenças crônicas, pessoas com deficiência e indivíduos com renda familiar baixa.
Com ênfase em atender às necessidades de mulheres idosas como a Maria da Silva, que residem sozinhas, apresentam doenças crônicas e possuem dificuldades de locomoção e acesso a serviços de saúde.
3. Funcionalidades:

Agendamento de consultas médicas online:
Sistema intuitivo e de fácil utilização, adaptado para pessoas com pouca familiaridade com tecnologia.
Integração com a agenda dos médicos parceiros, permitindo agendamento rápido e eficiente.
Possibilidade de agendar consultas com diferentes especialidades médicas.
Videoconsultas com médicos:
Plataforma segura e confiável para realização de consultas médicas online.
Atendimento por médicos qualificados e experientes em telemedicina.
Possibilidade de utilizar recursos como chat e compartilhamento de tela durante a consulta.
Orientação médica personalizada:
Envio de mensagens e conteúdos educativos personalizados para cada paciente, de acordo com suas necessidades e condições de saúde.
Orientação sobre medicamentos, exames, hábitos alimentares e estilo de vida.
Acompanhamento do progresso do paciente e ajuste do plano de tratamento conforme necessário.
Monitoramento de sinais vitais:
Integração com dispositivos vestíveis para monitoramento de pressão arterial, glicemia, frequência cardíaca e outros sinais vitais.
Geração de relatórios e alertas para o médico e o paciente, em caso de alterações significativas nos sinais vitais.
Grupos de apoio online:
Criação de grupos virtuais para que pacientes com doenças crônicas ou outras condições de saúde possam se conectar, compartilhar experiências, trocar informações e receber apoio mútuo.
Moderação por profissionais da saúde para garantir um ambiente seguro e positivo.
Acesso a informações em saúde:
Biblioteca online com artigos, vídeos e outros materiais educativos sobre diversos temas relacionados à saúde, prevenção de doenças e promoção do bem-estar.
Conteúdos selecionados e revisados por profissionais de saúde para garantir a qualidade e confiabilidade das informações.
Sistema de gamificação:
Implementação de um sistema de gamificação para incentivar o engajamento dos usuários na plataforma, através de desafios, recompensas e badges.
Personalização dos desafios de acordo com os objetivos de cada paciente.
Integração com o Sistema Único de Saúde (SUS):
Possibilidade de consultar agendamentos de exames e consultas no SUS através da plataforma Santé.
Recebimento de notificações sobre datas e horários de consultas e exames agendados no SUS.
Orientação sobre como acessar os serviços de saúde disponíveis no SUS.
4. Design e Usabilidade:

Interface amigável e intuitiva, acessível para pessoas com diferentes níveis de familiaridade com tecnologia, especialmente para idosos como a Maria da Silva.
Layout simples e organizado, com ícones e menus claros e fáceis de usar.
Conteúdos textuais em linguagem clara e objetiva, evitando termos técnicos e jargões médicos.
Disponibilidade de recursos de acessibilidade, como legendas para vídeos e alto contraste para pessoas com deficiência visual.
5. Segurança e Privacidade:

Implementação de medidas robustas de segurança para proteger os dados dos usuários, incluindo criptografia de dados, controle de acesso e firewalls.
Cumprimento rigoroso das leis de privacidade de dados, como a Lei Geral de Proteção de Dados Pessoais (LGPD).
Transparência nas políticas de privacidade, informando aos usuários como seus dados são coletados, usados e armazenados.
6. Sustentabilidade:

Modelo de negócios sustentável que garanta a viabilidade financeira do projeto a longo prazo.
Busca por parcerias com instituições públicas e privadas para ampliar o alcance do Santé e garantir a qualidade dos serviços.
Exploração de diferentes fontes de receita, como planos de assinatura, doações e parcerias com empresas
## Personas e Mapas de Empatia

......  COLOQUE AQUI O SEU TEXTO ......


> Relacione as personas identificadas no seu projeto e os respectivos mapas de empatia. Lembre-se que 
> você deve ser enumerar e descrever precisamente e de forma
> personalizada todos os principais envolvidos com a solução almeja. 
> 
> Para tanto, baseie-se tanto nos documentos disponibilizados na disciplina
> e/ou nos seguintes links:
>
> **Links Úteis**:
> - [Persona x Público-alvo](https://flammo.com.br/blog/persona-e-publico-alvo-qual-a-diferenca/)
> - [O que é persona?](https://resultadosdigitais.com.br/blog/persona-o-que-e/)
> - [Rock Content](https://rockcontent.com/blog/personas/)
> - [Hotmart](https://blog.hotmart.com/pt-br/como-criar-persona-negocio/)
> - [Mapa de Empatia](https://resultadosdigitais.com.br/blog/mapa-da-empatia/)
> - [Como fazer um mapa de empatia - Vídeo](https://www.youtube.com/watch?v=JlKHGpVoA2Y)
> 
> 
> **Exemplo de Persona**
> 
> ![Exemplo de Persona](imaages/../images/persona.png)
> 
> Fonte: [Como criar uma persona para o seu negócio](https://raissaviegas.com.br/como-criar-uma-persona/)


## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|

|Dr. João, médico ginecologista  | Quero poder agendar consultas virtuais com minhas pacientes | Para oferecer maior comodidade e flexibilidade às pacientes, especialmente aquelas com dificuldades de deslocamento ou agenda ocupada, sem comprometer a qualidade do atendimento médico. |

|Eu como Maria, mãe ocupada e preocupada com a saúde da família | Quero receber lembretes automáticos sobre exames de rotina e consultas médicas para mim e meus filhos | Para garantir que não esqueça compromissos importantes de saúde e possa manter a saúde da minha família em dia de forma conveniente.|

|Eu como Ana, aposentada com mobilidade limitada | Quero poder agendar consultas médicas e exames em casa | Para evitar deslocamentos e dificuldades de locomoção, garantindo que eu possa acessar cuidados médicos de qualidade no conforto do meu lar. |

|Eu como a equipe de suporte técnico da plataforma | Quero implementar um sistema de segurança robusto para proteger os dados confidenciais dos pacientes | Para garantir a privacidade e a segurança das informações de saúde dos usuários, construindo confiança e credibilidade na plataforma. |

|Eu como Carlos, um consultor de negócios autônomo| Eu quero informações precisas e confiáveis e especialmente no que diz respeito a questões relacionadas ao estresse e ao estilo de vida agitado que leva como empreendedor autônomo | Para poder viajar pelo mundo e ainda poder fazer algumas consultas online garantindo uma viajem sem muitas preocupações em relação a sua saúde|

|Eu como Diego, um medico | Eu quero um programa que me ajude a me organizar e me alertar dos compromissos e me mostre as informações do paciente| Para poder me preparar para minhas consultas já tendo todas as informações sobre o paciente antes mesmo dele entrar no meu consultório |

> Apresente aqui as histórias de usuário que são relevantes para o
> projeto de sua solução. As Histórias de Usuário consistem em uma
> ferramenta poderosa para a compreensão e elicitação dos requisitos
> funcionais e não funcionais da sua aplicação. Se possível, agrupe as
> histórias de usuário por contexto, para facilitar consultas
> recorrentes à essa parte do documento.
>
> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Login - Paciente e Médico | ALTA | 
|RF-002| Paciente - Perguntas ao cadastrar (condição específica / sexo / idade / dados sensíveis)  | ALTA |
|RF-003| Paciente - Vincular sintomas / sentimentos / sensações físicas e mentais a um dia do calendário  | ALTA |
|RF-004| Paciente - Lembrete de atividades (exames / consultas / alimentação ou bebida específica) | MÉDIA | 
|RF-005| Paciente/Médico - Histórico do que foi escrito | MÉDIA | 
|RF-006| Paciente - Marcação de consulta online | BAIXA | 
|RF-007| Médico - Disponibilizar horários | BAIXA | 



### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  BAIXA | 

> Com base nas Histórias de Usuário, enumere os requisitos da sua
> solução. Classifique esses requisitos em dois grupos:
>
> - [Requisitos Funcionais (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
>   correspondem a uma funcionalidade que deve estar presente na
>   plataforma (ex: cadastro de usuário).
>
> - [Requisitos Não Funcionais (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
>   correspondem a uma característica técnica, seja de usabilidade,
>   desempenho, confiabilidade, segurança ou outro (ex: suporte a
>   dispositivos iOS e Android).
>
> Lembre-se que cada requisito deve corresponder à uma e somente uma
> característica alvo da sua solução. Além disso, certifique-se de que
> todos os aspectos capturados nas Histórias de Usuário foram cobertos.
> 
> **Links Úteis**:
> 
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)


## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |


> Enumere as restrições à sua solução. Lembre-se de que as restrições
> geralmente limitam a solução candidata.
> 
> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)


# Projeto de Interface

......  COLOQUE AQUI O SEU TEXTO DE INTRODUÇÃO ......

> Apresente as principais interfaces da solução. Discuta como 
> foram elaboradas de forma a atender os requisitos funcionais, não
> funcionais e histórias de usuário abordados nas [Especificações do
> Projeto](#especificações-do-projeto).

## User Flow

......  INCLUA AQUI O DIAGRAMA COM O FLUXO DO USUÁRIO NA APLICAÇÃO ......

> Fluxo de usuário (User Flow) é uma técnica que permite ao desenvolvedor
> mapear todo fluxo de telas do site ou app. Essa técnica funciona
> para alinhar os caminhos e as possíveis ações que o usuário pode
> fazer junto com os membros de sua equipe.
>
> **Links Úteis**:
> - [User Flow: O Quê É e Como Fazer?](https://medium.com/7bits/fluxo-de-usu%C3%A1rio-user-flow-o-que-%C3%A9-como-fazer-79d965872534)
> - [User Flow vs Site Maps](http://designr.com.br/sitemap-e-user-flow-quais-as-diferencas-e-quando-usar-cada-um/)
> - [Top 25 User Flow Tools & Templates for Smooth](https://www.mockplus.com/blog/post/user-flow-tools)
>
> **Exemplo**:
> 
> ![Exemplo de UserFlow](images/userflow.jpg)


## Wireframes

......  INCLUA AQUI OS WIREFRAMES DAS TELAS DA APLICAÇÃO COM UM BREVE DESCRITIVO ......

> Wireframes são protótipos das telas da aplicação usados em design de interface para sugerir a
> estrutura de um site web e seu relacionamentos entre suas
> páginas. Um wireframe web é uma ilustração semelhante ao
> layout de elementos fundamentais na interface.
> 
> **Links Úteis**:
> - [Ferramentas de Wireframes](https://rockcontent.com/blog/wireframes/)
> - [Figma](https://www.figma.com/)
> - [Adobe XD](https://www.adobe.com/br/products/xd.html#scroll)
> - [MarvelApp](https://marvelapp.com/developers/documentation/tutorials/)
> 
> **Exemplo**:
> 
> ![Exemplo de Wireframe](images/wireframe-example.png)


# Metodologia

......  COLOQUE AQUI O SEU TEXTO ......

> Nesta parte do documento, você deve apresentar a metodologia 
> adotada pelo grupo, descrevendo o processo de trabalho baseado nas metodologias ágeis, 
> a divisão de papéis e tarefas, as ferramentas empregadas e como foi realizada a
> gestão de configuração do projeto via GitHub.
>
> Coloque detalhes sobre o processo de Design Thinking e a implementação do Framework Scrum seguido
> pelo grupo. O grupo poderá fazer uso de ferramentas on-line para acompanhar
> o andamento do projeto, a execução das tarefas e o status de desenvolvimento
> da solução.
> 
> **Links Úteis**:
> - [Tutorial Trello](https://trello.com/b/8AygzjUA/tutorial-trello)
> - [Gestão ágil de projetos com o Trello](https://www.youtube.com/watch?v=1o9BOMAKBRE)
> - [Gerência de projetos - Trello com Scrum](https://www.youtube.com/watch?v=DHLA8X_ujwo)
> - [Tutorial Slack](https://slack.com/intl/en-br/)

## Divisão de Papéis

......  COLOQUE AQUI O SEU TEXTO ......

> Apresente a divisão de papéis e tarefas entre os membros do grupo.
>
> **Links Úteis**:
> - [11 Passos Essenciais para Implantar Scrum no seu Projeto](https://mindmaster.com.br/scrum-11-passos/)
> - [Scrum em 9 minutos](https://www.youtube.com/watch?v=XfvQWnRgxG0)


## Ferramentas

......  COLOQUE AQUI O SEU TEXTO - SIGA O EXEMPLO DA TABELA ABAIXO  ......

| Ambiente  | Plataforma              |Link de Acesso |
|-----------|-------------------------|---------------|
|Processo de Design Thinkgin  | Miro |  https://miro.com/XXXXXXX | 
|Repositório de código | GitHub | https://github.com/XXXXXXX | 
|Hospedagem do site | Heroku |  https://XXXXXXX.herokuapp.com | 
|Protótipo Interativo | MavelApp ou Figma | https://figma.com/XXXXXXX | 

>
> Liste as ferramentas empregadas no desenvolvimento do
> projeto, justificando a escolha delas, sempre que possível.
> 
> As ferramentas empregadas no projeto são:
> 
> - Editor de código.
> - Ferramentas de comunicação
> - Ferramentas de diagramação
> - Plataforma de hospedagem
> 
> O editor de código foi escolhido porque ele possui uma integração com o
> sistema de versão. As ferramentas de comunicação utilizadas possuem
> integração semelhante e por isso foram selecionadas. Por fim, para criar
> diagramas utilizamos essa ferramenta por melhor captar as
> necessidades da nossa solução.
> 
> **Links Úteis - Hospedagem**:
> - [Getting Started with Heroku](https://devcenter.heroku.com/start)
> - [Crie seu Site com o HostGator](https://www.hostgator.com.br/como-publicar-seu-site)
> - [GoDady](https://br.godaddy.com/how-to)
> - [GitHub Pages](https://pages.github.com/)

## Controle de Versão

......  COLOQUE AQUI O SEU TEXTO ......

> Discuta como a configuração do projeto foi feita na ferramenta de
> versionamento escolhida. Exponha como a gerência de tags, merges,
> commits e branchs é realizada. Discuta como a gerência de issues foi
> realizada.
> A ferramenta de controle de versão adotada no projeto foi o
> [Git](https://git-scm.com/), sendo que o [Github](https://github.com)
> foi utilizado para hospedagem do repositório `upstream`.
> 
> O projeto segue a seguinte convenção para o nome de branchs:
> 
> - `master`: versão estável já testada do software
> - `unstable`: versão já testada do software, porém instável
> - `testing`: versão em testes do software
> - `dev`: versão de desenvolvimento do software
> 
> Quanto à gerência de issues, o projeto adota a seguinte convenção para
> etiquetas:
> 
> - `bugfix`: uma funcionalidade encontra-se com problemas
> - `enhancement`: uma funcionalidade precisa ser melhorada
> - `feature`: uma nova funcionalidade precisa ser introduzida
>
> **Links Úteis**:
> - [Tutorial GitHub](https://guides.github.com/activities/hello-world/)
> - [Git e Github](https://www.youtube.com/playlist?list=PLHz_AreHm4dm7ZULPAmadvNhH6vk9oNZA)
> - [5 Git Workflows & Branching Strategy to deliver better code](https://zepel.io/blog/5-git-workflows-to-improve-development/)
>
> **Exemplo - GitHub Feature Branch Workflow**:
>
> ![Exemplo de Wireframe](images/Github-Workflow.png)

# **############## SPRINT 1 ACABA AQUI #############**


# Projeto da Solução

......  COLOQUE AQUI O SEU TEXTO ......

## Tecnologias Utilizadas

......  COLOQUE AQUI O SEU TEXTO ......

> Descreva aqui qual(is) tecnologias você vai usar para resolver o seu
> problema, ou seja, implementar a sua solução. Liste todas as
> tecnologias envolvidas, linguagens a serem utilizadas, serviços web,
> frameworks, bibliotecas, IDEs de desenvolvimento, e ferramentas.
> Apresente também uma figura explicando como as tecnologias estão
> relacionadas ou como uma interação do usuário com o sistema vai ser
> conduzida, por onde ela passa até retornar uma resposta ao usuário.
> 
> Inclua os diagramas de User Flow, esboços criados pelo grupo
> (stoyboards), além dos protótipos de telas (wireframes). Descreva cada
> item textualmente comentando e complementando o que está apresentado
> nas imagens.

## Arquitetura da solução

......  COLOQUE AQUI O SEU TEXTO E O DIAGRAMA DE ARQUITETURA .......

> Inclua um diagrama da solução e descreva os módulos e as tecnologias
> que fazem parte da solução. Discorra sobre o diagrama.
> 
> **Exemplo do diagrama de Arquitetura**:
> 
> ![Exemplo de Arquitetura](images/arquitetura-exemplo.png)


# Avaliação da Aplicação

......  COLOQUE AQUI O SEU TEXTO ......

> Apresente os cenários de testes utilizados na realização dos testes da
> sua aplicação. Escolha cenários de testes que demonstrem os requisitos
> sendo satisfeitos.

## Plano de Testes

......  COLOQUE AQUI O SEU TEXTO ......

> Enumere quais cenários de testes foram selecionados para teste. Neste
> tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo
> de usuários que foi escolhido para participar do teste e as
> ferramentas utilizadas.
> 
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Práticas e Técnicas de Testes Ágeis](http://assiste.serpro.gov.br/serproagil/Apresenta/slides.pdf)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)

## Ferramentas de Testes (Opcional)

......  COLOQUE AQUI O SEU TEXTO ......

> Comente sobre as ferramentas de testes utilizadas.
> 
> **Links Úteis**:
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)

## Registros de Testes

......  COLOQUE AQUI O SEU TEXTO ......

> Discorra sobre os resultados do teste. Ressaltando pontos fortes e
> fracos identificados na solução. Comente como o grupo pretende atacar
> esses pontos nas próximas iterações. Apresente as falhas detectadas e
> as melhorias geradas a partir dos resultados obtidos nos testes.


# Referências

......  COLOQUE AQUI O SEU TEXTO ......

> Inclua todas as referências (livros, artigos, sites, etc) utilizados
> no desenvolvimento do trabalho.
> 
> **Links Úteis**:
> - [Formato ABNT](https://www.normastecnicas.com/abnt/trabalhos-academicos/referencias/)
> - [Referências Bibliográficas da ABNT](https://comunidade.rockcontent.com/referencia-bibliografica-abnt/)
