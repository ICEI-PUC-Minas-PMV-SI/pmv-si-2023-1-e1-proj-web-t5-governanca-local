# Especificações do Projeto

## Personas

| <img src="https://user-images.githubusercontent.com/127517961/226222802-3643403b-2d53-4cd0-af17-ce98313f6e93.jpg" width="350px"> |
| -------------------------------------------------------------------------------------------------------------------------------- |
|<p align="justify" > Bruno possui 37 anos e desde quando completou a faculdade, se deu o direito de realizar seu sonho de comprar um carro. Sua tristeza aconteceu, pois, em um dia, dirigindo com seu carro novo no seu bairro, passou em cima de um buraco em alta velocidade, comprometendo seriamente os amortecedores e os pneus do seu veículo, trazendo um enorme prejuízo financeiro. Como tentativa de conhecer áreas com buracos no seu bairro, para que se possa evitar passar naqueles pontos futuramente, busca meios que possam mapear seu bairro. </p> |

##

| <img src="https://user-images.githubusercontent.com/128436722/226498313-c08c2c4c-e1f0-471d-b2d1-85aee13018d6.jpg" width="350px"> |
| -------------------------------------------------------------------------------------------------------------------------------- |
| <p align="justify"> Manoel é estudante de direito pela PUC-Minas Ead, tem 25 anos e utiliza da biblioteca da cidade para fazer seus estudos diários. Ocorre que, em dias de chuva, a cidade alaga, de modo que, atravessar determinados pontos se torna perigoso. A cidade está com problema de distribuição de lixeiras para o descarte correto do lixo, não há incentivo à coleta seletiva e isto faz com que o lixo seja descartado incorretamente pela população. Consequentemente, os bueiros entopem, e a cidade inunda, fazendo com que Manoel não possa ir à biblioteca estudar. Como bálsamo para seus problemas, está em busca de alguma forma de contatar as autoridades locais para dar sugestões e pedir apoio na solução deste problema. </p> |
</div>

##

| <img src="https://user-images.githubusercontent.com/112134718/226659525-9214e68c-0e13-4dac-9339-ea81751c110a.png" width="350px"> |
| -------------------------------------------------------------------------------------------------------------------------------- |
| <p align="justify">Paulo, de 23 anos, que trabalha de home office, reclama que na sua rua sempre passa um caminhão que mora na vizinhança, solta muita fumaça e acaba tendo que fechar as janelas, se não todos passam mal com o cheiro forte. Todos da vizinhança sabem que o dono/motorista do caminhão não tem muita condição financeira. Paulo gostaria que o bairro se unisse para achar uma solução. </p> |

##

| <img src="https://user-images.githubusercontent.com/128329945/226661055-a731bb9d-e3fb-42c1-8f49-ad70df2a94b5.jpg" width="350px"> |
| -------------------------------------------------------------------------------------------------------------------------------- |
| <p align="justify">Larissa, de 23 anos, jogadora de vôlei, gosta muito de esportes, pratica corrida/caminhada diariamente pela amanhã em seu bairro, mas reclama das dificuldades, pois em seu bairro não tem nenhuma rua preparada com pistas de corrida ou uma área de lazer, por esse motivo, tendo que correr/caminhar entre os carros, podendo causar um acidente. Por isso, Larissa está procurando um meio de solucionar esse problema. </p> |

##

| <img src="https://user-images.githubusercontent.com/102264520/226626615-e1438119-0c53-46ae-a45c-031cf7672a58.jpg" width="350px"> |
| -------------------------------------------------------------------------------------------------------------------------------- |
|<p align="justify">Eliza é uma mulher com seus 41 anos, mãe de dois filhos e professora na escola primária do seu bairro, participa ativamente do comitê disciplinar    em seu trabalho. E uma pauta abordada nesses comitês foi a segurança de seus alunos em relação ao controle de saída e entrada na escola e trajeto das crianças até suas  casas. Como mãe e professora, gostaria de trazer mais segurança para seus filhos e alunos.</p> |

##
                                                                                                                              
## Histórias de Usuários

Com base na análise das personas foram identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Bruno   `(Usuário)` | Conhecer onde existem buracos      | Evitar de passar próximo e não estragar seu carro                   |
|Bruno   `(Usuário)` | Ambiente interativo                | Conhecer mais seus vizinhos e ter mais amigos com gostos parecidos  |
|Manoel  `(Usuário)` | Contatar catadores locais          | Para coleta de materiais recicláveis   |
|Manoel  `(Usuário)` | Multirão de Limpeza                | Dia D da limpeza do bairro             |
|Manoel  `(Usuário)` | Contato com o Comércio do bairro   | Brindes de incentivo para voluntários do multirão |
|Paulo   `(Usuário)` | Filtro nos caminhões que rodam no bairro  | Existem pessoas com problemas respiratórios que podem se prejudicar | 
|Paulo   `(Usuário)` | Conscientizar veículos emissores de poluição  | Para termos um bairro mais limpo |
|Larissa `(Usuário)` | Pede uma área que seja utilizada para pessoas que querem praticar esportes | Para que tenha segurança para os praticantes |
|Larissa `(Usuário)` | Uma área de lazer                  | Para ter um bairro com mais qualidade de vida |
|Eliza   `(Usuário)` | Comunicar autoridades | Informar e contribuir sobre situações de risco e imprevistos no bairro |
|Eliza   `(Usuário)` | Controle de entrada e saida de alunos/estudantes em unidades acadêmicas no bairro | Maior segurança para os jovens/crianças do bairro|
|Eliza   `(Usuário)` | Alertas e comunicados de segurança | Trazer maior liberdade nas áreas públicas do bairro |

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade | Responsável | Artefato |
|------|-----------------------------------------|----| ----| --------- |
|RF-001| A aplicação Web permitirá o usuário se cadastrar | ALTA | Paulo, Pedro | login.html |
|RF-002| A aplicação Web permitirá o usuário se logar   | ALTA | Paulo, Pedro | login.html | 
|RF-003| A aplicação Web permitirá apenas usuários devidamente cadastrados com acesso ao fórum   | ALTA  | Wesney | forum.html |
|RF-004| A aplicação Web permitirá o usuário (cadastrado) criar, discutir em tópicos do fórum   | ALTA  | Wesney | forum.html |
|RF-005| A aplicação Web permitirá o usuário (cadastrado ou não) ter acesso a todas notificações do seu mapa | ALTA  | Victor | mapa.html |
|RF-006| A aplicação Web permitirá apenas aos usuários cadastradados criarem/alterarem/atualizarem anotações do mapa   | ALTA  | Victor | mapa.html |
|RF-007| A aplicação Web contará com páginas estáticas contendo práticas de boas convivências, podendo ser acessada por usuários cadastrados ou não  | ALTA  | Gabriel | praticas.html |
|RF-008| A aplicação Web terá um landing page   | ALTA  | Gabriel, Lucas, Paulo, Pedro, Victor, Wesney | index.html |
|RF-009| A aplicação Web conterá uma aba sobre os criadores   | ALTA  |Pedro | index.html |
|RF-010| A aplicação Web conterá uma área de sugestões para o site  | ALTA  | Wesney | forum.html  |
|RF-011| A aplicação Web permitirá que o usuário tenha acesso atravéns do fórum a páginas externas para fins de doações, contribuições para a página e busca de empregos   | ALTA  | Wesney | forum.html |
|RF-012| A aplicação Web contará com uma landing page exclusiva para cadastrados   | ALTA  | Pedro | paginalogada.html |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | ALTA | 
|RNF-002| A aplicação Web será integrada à uma API de localização e mapa | ALTA | 
|RNF-003| A aplicação Web contará com uma interface intuitiva |  ALTA | 
|RNF-004| A aplicação Web terá como base HTML, CSS e JavaScript | ALTA | 
|RNF-005|aplicação Web conterá um botão de "voltar ao topo" em páginas de conteúdo extenso | ALTA | 


- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |
