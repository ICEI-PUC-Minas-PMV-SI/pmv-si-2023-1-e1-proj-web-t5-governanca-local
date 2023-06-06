# Programação de Funcionalidades

Implementação do sistema descritas por meio dos requisitos funcionais e/ou não funcionais. Deve relacionar os requisitos atendidos os artefatos criados (código fonte) além das estruturas de dados utilizadas e as instruções para acesso e verificação da implementação que deve estar funcional no ambiente de hospedagem.

Para cada requisito funcional, pode ser entregue um artefato desse tipo.

O professor Rommel Carneiro apresenta alguns exemplos prontos para serem utilizados como referência:
- Login do sistema: [https://repl.it/@rommelpuc/LoginApp](https://repl.it/@rommelpuc/LoginApp) 
- Cadastro de Contatos: [https://repl.it/@rommelpuc/Cadastro-de-Contatos](https://repl.it/@rommelpuc/Cadastro-de-Contatos)


> **Links Úteis**:
>
> - [Trabalhando com HTML5 Local Storage e JSON](https://www.devmedia.com.br/trabalhando-com-html5-local-storage-e-json/29045)
> - [JSON Tutorial](https://www.w3resource.com/JSON)
> - [JSON Data Set Sample](https://opensource.adobe.com/Spry/samples/data_region/JSONDataSetSample.html)
> - [JSON - Introduction (W3Schools)](https://www.w3schools.com/js/js_json_intro.asp)
> - [JSON Tutorial (TutorialsPoint)](https://www.tutorialspoint.com/json/index.htm)

## Exemplo

## Requisitos Atendidos

As tabelas que se seguem apresentam os requisitos funcionais e não-funcionais que relacionam o escopo do projeto com os artefatos criados:

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade | Responsável | Artefato |
|------|-----------------------------------------|----| ----| --------- |
|RF-001| A aplicação Web permitirá o usuário se cadastrar | ALTA | Paulo, Pedro | login.html |
|RF-002| A aplicação Web permitirá o usuário se logar   | ALTA | Paulo, Pedro | login.html | 
|RF-003| A aplicação Web permitirá apenas usuários devidamente cadastrados com acesso ao fórum   | ALTA  | Wesney | forum.html |
|RF-004| A aplicação Web permitirá o usuário (cadastrado) criar, discutir em tópicos do fórum   | ALTA  | Wesney | forum.html |
|RF-005| A aplicação Web permitirá o usuário (cadastrado ou não) ter acesso a todas notificações do seu mapa | ALTA  | Victor | mapa.html |
|RF-006| A aplicação Web permitirá apenas aos usuários cadastradados criarem/alterarem/atualizarem anotações do mapa   | ALTA  | Gabriel, Lucas, Paulo, Pedro, Victor, Wesney | mapa.html |
|RF-007| A aplicação Web contará com páginas estáticas contendo práticas de boas convivências, podendo ser acessada por usuários cadastrados ou não  | ALTA  | Gabriel | praticas.html |
|RF-008| A aplicação Web terá um landing page   | ALTA  | Gabriel, Lucas, Paulo, Pedro, Victor, Wesney | index.html |
|RF-009| A aplicação Web conterá uma aba sobre os criadores   | ALTA  |Pedro | index.html |
|RF-010| A aplicação Web conterá uma área de sugestões para o site  | ALTA  | Wesney, Pedro | forum3.html  |
|RF-011| A aplicação Web permitirá que o usuário tenha acesso atravéns do fórum a páginas externas para fins de doações, contribuições para a página e busca de empregos   | ALTA  | Wesney | forum.html |
|RF-012| A aplicação Web contará com uma landing page exclusiva para cadastrados   | ALTA  | Pedro | paginalogada.html |

## Descrição das estruturas:

## Login/Cadastro
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| Id do usuário  | Numero (Inteiro)  | Identificador de usuário                  | 001                                            |
| Nome           | Texto             | Nome do usuário                           | Roberto                                        |
| E-mail         | Texto             | Email do usuário                          | exemplo@sga.pucminas.br                        |
| Senha          | Número e (ou) texto   | Senha do usuário                      | ******* (é segredo!)                           |

## Mapa
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| Id do usuário  | Numero (Inteiro)  | Identificador de usuário                  | 001                                            |
| Nome           | Texto             | Nome do usuário                           | Roberto                                        |
| Data/Hora      | Texto ou Date     | Data de envio do PIN                      | 31/05/2023                                     |
| Descrição      | Texto             | Buraco, qtd de lixo, alguma observação    | PIN - "Aqui tem um buraco!"                    |


## Fórum
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| Id do usuário  | Numero (Inteiro)  | Identificador de usuário                  | 001                                            |
| Nome           | Texto             | Nome do usuário                           | Roberto                                        |
| Data/Hora      | Texto ou Date     | Data de envio do comentário               | 31/05/2023  ou Há x horas atrás...             |
| Descrição      | Texto             | Comentário/sugestão                       | "Oi, alguém sabe de eventos aqui no bairro?"   |

