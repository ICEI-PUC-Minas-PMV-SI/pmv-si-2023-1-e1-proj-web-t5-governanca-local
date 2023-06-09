# Testes

Neste projeto serão realizados dois tipos de testes:

 - O **Teste de Software**, que utiliza uma abordadem de caixa preta, e tem por objetivo verificar a conformidade do software com os requisitos funcionais e não funcionais do sistema.
 - O **Teste de Usabilidade**, que busca avaliar a qualidade do uso do sistema por um usuário do público alvo. 

Se quiser conhecer um pouco mais sobre os tipos de teste de software, leia o documento [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/).

# Teste de Software

Nesta seção o grupo deverá documentar os testes de software que verificam a correta implementação dos requisitos funcionais e não funcionais do software.

## Plano de Testes de Software

Preencha a tabela com o plano dos testes. Para cada Caso de Teste (CT), associe qual o Requisito  Funcional ou não funcional que ele está verificando. Associe também a página (ou artefato) onde o teste será realizado e descreva o cenário do teste. Veja a tabela de exemplo.

**Caso de Teste** | **CT01 - Acesso à landing page**
 :--------------: | ------------
**Procedimento**  | 1) Entre na URL do site.
**Requisitos associados** | RF-008, RF-009 e RNF-001
**Resultado esperado** | Acesso ao site.
**Dados de entrada** | Nenhum.
**Resultado obtido** | Sucesso.


**Caso de Teste** | **CT02 - Cadastro**
 :--------------: | ------------
**Procedimento**  | 1) Entre na URL do site. <br> 2) O futuro usuário deve clicar na opção "Entrar" no menu. <br> 3) O usuário deverá cliclar no botão "Criar Agora!" <br> 4) O usuário deverá preencher os campos "Nome completo", "E-mail", "senha", bem como sua confirmação. <br> 5) Clicar no botão de "Cadastrar" para efetivar o cadastro.
**Requisitos associados** | RF-001 e RNF-001
**Resultado esperado** | Criação de conta
**Dados de entrada** | Inserção de dados válidos no formulário de cadastro: Nome, E-mail e Senha.
**Resultado obtido** | Cadastrado.

**Caso de Teste** | **CT03 - Login**
 :--------------: | ------------
**Procedimento**  | 1) Após criada a conta, preencher campos "e-mail" e "senha" com as informações criadas. <br> 2) Clicar no botão "Entrar". <br> 3) Acesso à página central somente para usuários cadastrados.
**Requisitos associados** | RF-002, RF-012 e RNF-001
**Resultado esperado** | Login na plataforma.
**Dados de entrada** | Dados de email e senha, bem como sua validação.
**Resultado obtido** | Autenticado com sucesso.

**Caso de Teste** | **CT04 - Acessar o conteúdo de boas práticas de convivência**
 :--------------: | ------------
**Procedimento**  | 1) Acessar a URL do site. <br> 2) Encontrar o botão de direcionamento "Práticas: Clique aqui".
**Requisitos associados** | RF-007 e RNF-001
**Resultado esperado** | Acesso às práticas.
**Dados de entrada** | Nenhum.
**Resultado obtido** | Acesso ao conteúdo de práticas dde boas convivências. 

**Caso de Teste** | **CT05 - Acessar o Mapa e utilizar suas ferramentas**
 :--------------: | ------------
**Procedimento**  | 1) Acessar a URL do site. <br> 2) Fazer Cadastro/login <br> 3) Encontrar o botão de direcionamento para o conteúdo. <br> 4) Ao entrar, aceitar o acesso à localização pelo navegador <br> 5) Para utilizar os devidos marcadores, clicar e arrastar para a área desejada. <br> 6) Ao posicionar o pin, os ícones lápis e lixeira, respectivamente: edição e deleção, são habilitados.
**Requisitos associados** | RF-005, RF-006, RNF-001 e RNF-002
**Resultado esperado** | Acesso ao mapa.
**Dados de entrada** | Localização do usuário.
**Resultado obtido** | Acesso ao mapa. 

**Caso de Teste** | **CT06 - Ferramentas do mapa: Editar pins**
 :--------------: | ------------
**Procedimento**  | 1) Acessar a URL do site. <br> 2) Fazer Cadastro/login <br> 3) Encontrar o botão de direcionamento para o conteúdo. <br> 4) Ao entrar, aceitar o acesso à localização pelo navegador <br> 5) Clique no ícone de lápis. <br> 6) Após isso, a edição de localidade do pin está ativada. <br> 7) Arraste até o novo local desejado. <br> 8) Ao concluir, clique em "Salvar".
**Requisitos associados** | RF-005, RF-006, RNF-001 e RNF-002
**Resultado esperado** | Acesso à funcionalidade de edição de marcadores.
**Dados de entrada** | Localização e Marcadores do usuário.
**Resultado obtido** | Edição de localidade do pin. 

**Caso de Teste** | **CT07 - Ferramentas do mapa: Deleção de pins **
 :--------------: | ------------
**Procedimento**  | 1) Acessar a URL do site. <br> 2) Fazer Cadastro/login <br> 3) Encontrar o botão de direcionamento para o conteúdo. <br> 4) Ao entrar, aceitar o acesso à localização pelo navegador <br> 5) Crie um marcador <br> 6) Clique no ícone de lixeira. <br> 7) Após isso, a deleção de localidade do pin está ativada. <br> 8) Clique no ícone que deseja deletar. <br> 4) Ao concluir, clique em "Salvar".
**Requisitos associados** |RF-005, RF-006, RNF-001 e RNF-002
**Resultado esperado** | Acesso à funcionalidade de edição de marcadores.
**Dados de entrada** | Localização e Marcadores do usuário.
**Resultado obtido** | Deleção de localidade do pin. 

**Caso de Teste** | **CT08 - Fórum **
 :--------------: | ------------
**Procedimento**  | 1) Após o login, acesse o botão "Fórum". <br> 2) Aparecerá os campos de criar comentário, acessar todos os comentários, links de utilidade pública e sugestões para o site.
**Requisitos associados** | RF-003, RF-004, RF-010, RF-011 e RNF-001
**Resultado esperado** | Acesso ao fórum e suas ferramentas.
**Dados de entrada** | Dados previamente subscritos durante a criação da conta.
**Resultado obtido** | Acesso ao fórum. 

**Caso de Teste** | **CT09 - Criar comentário **
 :--------------: | ------------
**Procedimento**  | 1) Entre na URL do site <br> 2) Faça cadastro/login <br> 3) Encontre o botão direcionador para o fórum <br> 4) Escreva seu comentário no campo de texto <br> 5) Clique em "Enviar comentário"
**Requisitos associados** | RF-003, RF-004, RF-010, RF-011 e RNF-001
**Resultado esperado** | Acesso ao fórum e suas ferramentas.
**Dados de entrada** | Dados previamente subscritos durante a criação da conta.
**Resultado obtido** | Criação de comentários. 

**Caso de Teste** | **CT10 - Enviar sugestões para os criadores **
 :--------------: | ------------
**Procedimento**  | 1) Entre na URL do site <br> 2) Faça cadastro/login <br> 3) Encontre o botão direcionador para o fórum <br> 4) Clique no texto "Clique aqui e colabore agora mesmo!" <br> 5) Preencha os campos "Nome", "E-mail de contato", "telefone - opcional" e a mensagem <br> 6) Clique em "Enviar"
**Requisitos associados** | RF-010	e RNF-001
**Resultado esperado** | Direcionamento de sugestões.
**Dados de entrada** | "Nome", "E-mail de contato", "telefone - opcional" e a mensagem.
**Resultado obtido** | Envio de sugestão. 

## Registro dos Testes de Software

Esta seção deve apresentar o relatório com as evidências dos testes de software realizados no sistema pela equipe, baseado no plano de testes pré-definido. Documente cada caso de teste apresentando um vídeo ou animação que comprove o funcionamento da funcionalidade. Veja os exemplos a seguir.

|*Caso de Teste*                                 |*CT01 - Acesso à landing page*                                         |
|---|---|
|Requisito Associado | RF-008 - 	A aplicação Web terá um landing page <br> RF-009 - A aplicação Web conterá uma aba sobre os criadores. <br> RNF-001 - O sistema deve ser responsivo para rodar em um dispositivos móvel. |
|Link do vídeo do teste realizado: | https://drive.google.com/file/d/19MSu3LInt7ZSjB2fJxupNvNiCUSxqA-y/view?usp=sharing | 

|*Caso de Teste*                                 |*CT02 - Cadastro*                                         |
|---|---|
|Requisito Associado | RF-001	- A aplicação Web permitirá o usuário se cadastrar. <br> RNF-001 - O sistema deve ser responsivo para rodar em um dispositivos móvel. |
|Link do vídeo do teste realizado: | https://drive.google.com/file/d/19oGx8y191OAlCiwnQviHQEnjPR9xBQOy/view?usp=sharing | 

|*Caso de Teste*                                 |*CT03 - Login*                                         |
|---|---|
|Requisito Associado | RF-002	- A aplicação Web permitirá o usuário se logar <br> RF-012	- A aplicação Web contará com uma landing page exclusiva para cadastrados <br> RNF-001 - O sistema deve ser responsivo para rodar em um dispositivos móvel.|
|Link do vídeo do teste realizado: | https://drive.google.com/file/d/19qU59DH-STE8Va63Yafgzotibu7VnJW3/view?usp=sharing | 

|*Caso de Teste*                                 |*CT04 - Acessar o conteúdo de boas práticas de convivência*                                         |
|---|---|
|Requisito Associado | RF-007	A aplicação Web contará com páginas estáticas contendo práticas de boas convivências, podendo ser acessada por usuários cadastrados ou não. <br> RNF-001 - O sistema deve ser responsivo para rodar em um dispositivos móvel. |
|Link do vídeo do teste realizado: | https://drive.google.com/file/d/19w2IfbMIKGnHuW0t6z3PCMAtt08CcDwL/view?usp=sharing | 

|*Caso de Teste*                                 |*CT05 - Acessar o Mapa e utilizar suas ferramentas*                                         |
|---|---|
|Requisito Associado | RF-005	- A aplicação Web permitirá o usuário (cadastrado ou não) ter acesso a todas notificações do seu mapa. <br> RF-006 -	A aplicação Web permitirá apenas aos usuários cadastradados criarem/alterarem/atualizarem anotações do mapa. <br> RNF-001 - O sistema deve ser responsivo para rodar em um dispositivos móvel. <br> RNF-002	A aplicação Web será integrada à uma API de localização e mapa |
|Link do vídeo do teste realizado: | https://drive.google.com/file/d/1-xiubK9xmVLQ64qgBTXLB9LiljKFoqeG/view?usp=sharing | 

|*Caso de Teste*                                 |*CT06 - Ferramentas do mapa: Editar pins*                                         |
|---|---|
|Requisito Associado | RF-005	- A aplicação Web permitirá o usuário (cadastrado ou não) ter acesso a todas notificações do seu mapa. <br> RF-006 -	A aplicação Web permitirá apenas aos usuários cadastradados criarem/alterarem/atualizarem anotações do mapa. <br> RNF-001 - O sistema deve ser responsivo para rodar em um dispositivos móvel. <br> RNF-002	A aplicação Web será integrada à uma API de localização e mapa |
|Link do vídeo do teste realizado: | https://drive.google.com/file/d/1UzlOqETFvKsXXRpnOhvbiAFcHcwOcU6W/view?usp=sharing | 

|*Caso de Teste*                                 |*CT07 - Ferramentas do mapa: Deleção de pins*                                         |
|---|---|
|Requisito Associado | RF-005	- A aplicação Web permitirá o usuário (cadastrado ou não) ter acesso a todas notificações do seu mapa. <br> RF-006 -	A aplicação Web permitirá apenas aos usuários cadastradados criarem/alterarem/atualizarem anotações do mapa. <br> RNF-001 - O sistema deve ser responsivo para rodar em um dispositivos móvel. <br> RNF-002	A aplicação Web será integrada à uma API de localização e mapa|
|Link do vídeo do teste realizado: | https://drive.google.com/file/d/18xN4PMQ7anLAVsE81ig8GYJ6I42-3FW9/view?usp=sharing | 

|*Caso de Teste*                                 |*CT08 - Fórum*                                         |
|---|---|
|Requisito Associado | RF-003 - A aplicação Web permitirá apenas usuários devidamente cadastrados com acesso ao fórum. <br> RF-004 - A aplicação Web permitirá o usuário (cadastrado) criar, discutir em tópicos do fórum. <br> RF-010 - A aplicação Web conterá uma área de sugestões para o site.	<br> RF-011 - A aplicação Web permitirá que o usuário tenha acesso atravéns do fórum a páginas externas para fins de doações, contribuições para a página e busca de empregos. <br> RNF-001 - O sistema deve ser responsivo para rodar em um dispositivos móvel.|
|Link do vídeo do teste realizado: | https://drive.google.com/file/d/1NwAR7KZil1N341fV_JF76hwNs5r15-RW/view?usp=sharing | 

|*Caso de Teste*                                 |*CT09 - Criar comentário*                                         |
|---|---|
|Requisito Associado | RF-003 - A aplicação Web permitirá apenas usuários devidamente cadastrados com acesso ao fórum. <br> RF-004 - A aplicação Web permitirá o usuário (cadastrado) criar, discutir em tópicos do fórum. <br> RF-010 - A aplicação Web conterá uma área de sugestões para o site.	<br> RF-011 - A aplicação Web permitirá que o usuário tenha acesso atravéns do fórum a páginas externas para fins de doações, contribuições para a página e busca de empregos. <br> RNF-001 - O sistema deve ser responsivo para rodar em um dispositivos móvel. |
|Link do vídeo do teste realizado: | https://drive.google.com/file/d/1y4Z_15LJPIYlWDOnsvH0sbILu-O9x7q2/view?usp=sharing | 

|*Caso de Teste*                                 |*CT10 - Enviar sugestões para os criadores*                                         |
|---|---|
|Requisito Associado | RF-010 - A aplicação Web conterá uma área de sugestões para o site <br> RNF-001 - O sistema deve ser responsivo para rodar em um dispositivos móvel. |
|Link do vídeo do teste realizado: | https://drive.google.com/file/d/1mItJ53eM12FdcKIjNSJAnQw_B_ktK15y/view?usp=sharing | 


## Avaliação dos Testes de Software

Particularmente, gostamos muito do nosso primeiro projeto, tendo como forte o visual mais minimalista e intuitivo. São também pontos positivos a combinação de APIs.

De pontos a serem melhorados, a falta de instrução do mapa, as limitações do localstorage e a grande quantidade de itens para atualizar informações do usuário.

# Testes de Usabilidade

<strong> Usuário 1: </strong> Busca por conteúdos que promovem uma melhoria no contato social urbano (práticas de boas convivências). Tempo necessário para tal ação: 8 segundos. Tempo necessário por um especialista: 3 segundos. 
Comentário: "Aplicação bem intuitiva, não precisou que fizesse login para acessar o conteúdo. Conteúdo muito bom, porém ainda são poucos". Nota: 4/5

<strong> Usuário 2: </strong> Busca por interagir com pessoas (fórum). Tempo necessário para tal ação: 37 segundos. Tempo necessário por um especialista: 27.4 segundos. 
Comentário: "Funciona direitinho, porém a página do fórum contém bastante informação. Não contém opções de like/deslike e denunciar". Nota: 3.8/5

<strong> Usuário 3: </strong> Gostaria de anexar um buraco no mapa do seu bairro. Tempo necessário para tal ação: 43 segundos. Tempo necessário por um especialista: 26.3 segundos. 
Comentário: "Funcionou perfeitamente. Consigo remover e editar. Senti falta de uma explicação de como posicionar os marcadores. Sugiro alguns gifs fazendo tais ações". Nota: 4.3/5


## Cenários de Teste de Usabilidade

| Nº do Cenário | Descrição do cenário |
|---------------|----------------------|
| 1             | Você é uma pessoa que deseja se cadastrar. Encontre no site a sessão de Login e realize seu cadastro. |
| 2             | Você é uma pessoa que deseja navegar no mapa e reportar um buraco em sua rua. Encontre a sessão do mapa e insira um alerta de buraco. |
| 3             | Você é uma pessoa que deseja fazer uma postagem no fórum. Encontre no site o fórum e faça uma postagem. |
| 4             | Você é uma pessoa que deseja melhorar o ambiente coletivo do seu bairro. Ache o conteúdo de boas práticas de convivências. |


## Registro de Testes de Usabilidade

Cenário 1: Você é uma pessoa que deseja se cadastrar. Encontre no site a sessão de Login e realize seu cadastro.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1   | SIM             | 5                    | 33.60 segundos                  |
| 2 | SIM             | 5                    | 19.31 segundos                  |
| 3| SIM             | 5                    | 37.57 segundos                  |
| 4  | SIM             | 5                    | 25.45 segundos                          |
|  |  |  |  |
| **Média**     | 100%           | 5                | 28.98 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 26.03 segundos |


    Comentários dos usuários: 
    1: Muito claro e intuitivo.
    2r: Tranquilo e objetivo, ele criaria no banner princpal uma chamada mais fácil
    3: utilizar o Autocomplete do nome, o cadastro foi tranquilo
    4: Fácil e prático.



Cenário 2: Você é uma pessoa que deseja navegar no mapa e reportar um buraco em sua rua. Encontre a sessão do mapa e insira um alerta de buraco.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1   | SIM             | 4.5                  | 35.32 segundos                          |
| 2 | SIM             | 5                    | 18.36 segundos                          |
| 3  | SIM             | 4.5                    | 54.90 segundos                          |
| 4 | SIM             | 4                    | 51.20 segundos                          |
|  |  |  |  |
| **Média**     | 100%           | 4.66               | 39,94 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 27.43 segundos |


    Comentários dos usuários: 
    1: Não ficou claro no icone do buraco se era pra apertar em cima ou ao lado.
    2: No painel do mapa ele achou que o botão de mapear fosse em cima.
    3: Colocar um tooltip, mensagem que ao passar o mouse em cima mostrar o que o botão faz, sugeriu colcoar no cartão do mapa: "Acompanhe e contribue com o mapa do seu bairro".
    4: Ficou um pouco confuso mas entendeu o objetivo do mapa.

Cenário 3: Você é uma pessoa que deseja fazer uma postagem no fórum. Encontre no site o fórum e faça uma postagem.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1   | SIM             | 5                    | 22.11 segundos                          |
| 2 | SIM             | 3                    | 32.43 segundos                          |
| 3  | SIM             | 5                    | 26.71 segundos                          |
| 4  | SIM             | 4.5                    | 32.23 segundos                          |
|  |  |  |  |
| **Média**     | 100%           | 5                | 28,37 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 15.07 segundos |


    Comentários dos usuários: 
    1: Claro e intuitivo
    2: Colocar texto indicando o que é, recomendou utilizar o sweetalert para qualquer coisa de Popup e alerta https://sweetalert2.github.io/v10.html#examples.
    3: Foi fácil e intuitivo
    4: Apesar de ser leigo em tecnologia, achou interessante a abordagem dos problemas através de coments.


Cenário 4: Você é uma pessoa que deseja melhorar o ambiente coletivo do seu bairro. Ache o conteúdo de boas práticas de convivências.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1   | SIM             | 5                    | 07.21 segundos                          |
| 2 | SIM             | 5                    | 31.42 segundos                          |
| 3  | SIM             | 5                    | 11.73 segundos                          |
| 4  | SIM             | 4                    | 10.52 segundos                          |
|  |  |  |  |
| **Média**     | 100%           | 5                | 15,22 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 3 segundos |


    Comentários dos usuários:
    1: Achou legal e bacana;
    2: Colocar texto na barra dos Ícones;
    3: Bem rápido;
    4: Elogiou a iniciativa das boas práticas.


## Avaliação dos Testes de Usabilidade

A partir dos dados recebidos e analisados, a aplicação atinge um grau de usabilidade satisfatório, especialmente pelo fato de todos os usuários terem conseguido fazer os cenários propostos. É também o caso dos testes de usabilidade subjetivos baseados na LGPD, onde foi possível medir notas entre 3.8 à 4.3 de um total de 5. 

Paralelamente, foi registrado uma descrepância (em alguns casos mais notáveis do que outros) acerca do tempo gasto entre especialista e "clientes", sendo o maior o cenário 4: "Ache o conteúdo de boas práticas de convivências". 

Tendo em vista a discrepância, estaremos acolhendo as sugestões dos usuários, em especial no mapa, especificando detalhadamente, através de Gifs, o processo de registro de marcadores no mapa. Além disso, buscaremos colocar legendas sobre cada ícone do Header, promovendo um facilitador no tempo de um usuário recente. Como melhoria, também fica otimizar e modernizar o 'conta.html'.



