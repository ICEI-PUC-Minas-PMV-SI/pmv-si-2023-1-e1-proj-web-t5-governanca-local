
# Projeto de Interface

Visão geral da interação do usuário pelas telas do sistema e protótipo interativo das telas com as funcionalidades que fazem parte do sistema (wireframes).

 Apresente as principais interfaces da plataforma. Discuta como ela foi elaborada de forma a atender os requisitos funcionais, não funcionais e histórias de usuário abordados nas <a href="2-Especificação do Projeto.md"> Documentação de Especificação</a>.
 
-------------------------------------------------------------------------------------------------------

## User Flow

<img width="787" alt="image" src="https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2023-1-e1-proj-web-t5-governanca-local/assets/127517961/7dd6d597-d9b9-4b35-ba58-2082395c24b1">

-------------------------------------------------------------------------------------------------------

## Wireframes

São protótipos usados em design de interface para sugerir a estrutura de um site web e seu relacionamentos entre suas páginas. Um wireframe web é uma ilustração semelhante do layout de elementos fundamentais na interface.

### Landing Page

<strong> RF-008 </strong>	A aplicação Web terá um landing page. <br> 
A Landing page será a págia de entrada do website, nela será contida o cabeçalho com logotipo do projeto, botões hyperlinks para cada sessão do site, no corpo da pagina haverá a apresentação do projeto, uma sessão convite a tela de boas práticas, uma sessão de direcionamento ao mapa e outra sessão ao fórum, uma sessão de informações a respeito dos criadores e a razão do projeto, por fim o rodapé da página com logotipo, direitos autorais e o logo da PUC-Minas.

![Wireframe-Landingpage](https://user-images.githubusercontent.com/128330026/236060795-1e0de53a-0713-48d1-9dd7-f0b8182a0b6c.png)

-------------------------------------------------------------------------------------------------------

### Telas de cadastro e Login

O login será feito através do e-mail e senha criados pelos usuários. Ao clicar em cadastrar, o usuário será redirecionado para a tela de cadastro. Há ainda a presença de ícones-atalhos para o Fórum, Landing Page e Mapa. Atende aos Requisitos Funcionais <strong> RF-002 </strong>. Ao não possuir conta, o usuário poderá se cadastrar clicando no botão "Criar agora, abrindo um pop-up para tal, atendendo aos Requisitos funcionais <strong> RF-001 </strong>.

![image](https://user-images.githubusercontent.com/127517961/235466056-7660170c-ade4-4496-8b5d-d260631f072c.png)
<img width="859" alt="image" src="https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2023-1-e1-proj-web-t5-governanca-local/assets/127517961/7f121ef4-f87a-4cf0-9136-eb5c61768e04">

-------------------------------------------------------------------------------------------------------

### Práticas de boas convivências
No módulo de práticas o acesso será feito por usuários cadastrados e não cadastrados, disponibilizando os principais módulos estáticos, ao clicar nesses módulos será aberto um pop-up com os tópicos relacionados sendo navegados em forma de rolagem vertical. Atende os requisitos funcionais <strong> RF-007 </strong>. Contendo duas barras de navegação, primeira com opção de retorno a landing page, acesso ao mapa, fórum, sobre nós e perfil. A segunda com logo do projeto, uma barra de pesquisa utilizada para localizar tópicos específicos dentro do módulo.

![image](https://user-images.githubusercontent.com/102264520/234984438-207444a0-6bc4-4119-b0db-560ed0f4b2a4.jpg)

![image](https://user-images.githubusercontent.com/102264520/234984467-3e9e5aab-cc55-4045-812a-e3908ed17d9a.jpg)


-------------------------------------------------------------------------------------------------------

### Fórum
Só terão permissão para utilizar o Fórum usuários devidamente cadastrados. Esse critério atende ao Requisito Funcional <strong> RF-003 </strong>, também haverá na página fórum o link para redirecionamento ao cadastro caso o usuário não possua e queira acesso ao fórum.
 
 ![Image](https://user-images.githubusercontent.com/128436722/235378238-08d558e9-737e-4d72-a624-49f98821a192.png)
 
O Fórum permitirá que os usuários <strong> cadastrados </strong> façam comentários, votações e reivindicações para melhorias do seu bairro, bem como descrito no Requisito Funcional <strong> RF-004 </strong>.
 
 ![Image](https://user-images.githubusercontent.com/128436722/235378236-a741dfa6-b3ff-4557-afb5-48d23319901b.png)
 
 ![Image](https://user-images.githubusercontent.com/128436722/235378239-bbdff70a-4db7-4ada-a303-74d575b1c4a1.png)
 
Ainda sobre o Fórum, ele dará aos usuários <strong> cadastrados </strong>, a possibilidade de fazer doações sendo direcionado através de link, além de poder procurar empregos com o redirecionamento a sites públicos e contribuir com a página conforme descrito no Requisito Funcional <strong> RF-011 </strong>.
 
![Image](https://user-images.githubusercontent.com/128436722/235378237-d543f5d7-8a5e-4cef-8b3d-dbdcb88abe06.png)

![Image](https://user-images.githubusercontent.com/128436722/235378240-ec8a5711-e6cb-4bd7-a870-b7b0c168e7c7.png)

![Image](https://user-images.githubusercontent.com/128436722/235378235-df9c7fb5-df5a-458c-b4a7-0d52aa0981ec.png)

-------------------------------------------------------------------------------------------------------

### Mapa

O mapa será acessível aos usuários cadastrados e não cadastrados, os usuários <strong> não cadastrados </strong> apenas terão acesso as informações de eventos e contato dos negócios locais, enquanto os usuários <strong> cadastrados </strong> poderão também incluir informações postadas, verificar alertas e informações, pelas do mapa, e se assim  desejarem linkar cada pin postado em um post do fórum.

![Wireframe-Mapa](https://user-images.githubusercontent.com/128330026/236054543-4f271932-49d4-469b-bfff-135f4b160b69.png)

RF-005	A aplicação Web permitirá o usuário (cadastrado ou não) ter acesso a todas notificações do seu mapa	ALTA	

RF-006	A aplicação Web permitirá apenas aos usuários cadastradados criarem/alterarem/atualizarem anotações do mapa
![image](https://user-images.githubusercontent.com/128330026/235453458-8190c578-1403-4e75-a23b-e01a6948d298.png)

A criação de anotações e informações e conteúdo no mapa será por meio das ferramentas <strong> "Pin" </strong>

-------------------------------------------------------------------------------------------------------
 
### Sobre Nós

O objetivo dessa seção é fornecer aos visitantes do site uma compreensão clara e completa da organização e de seus objetivos, transmitir credibilidade e confiança, e criar uma conexão emocional com os clientes em potencial.

![image](https://user-images.githubusercontent.com/112134718/234734415-3499ab66-d5e2-4f5b-be20-3565280a1507.png)
