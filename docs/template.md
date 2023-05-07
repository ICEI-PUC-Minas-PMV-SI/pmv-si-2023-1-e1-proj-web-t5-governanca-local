# Template padrão do site

# Design


## Header (Desktop e Mobile)
<div align="center">

![image](https://user-images.githubusercontent.com/127517961/236696848-bbb42f1a-7735-4ade-9fe4-9bb0531d5a15.png)
![image](https://user-images.githubusercontent.com/127517961/236696891-f916b20a-e60b-4454-986e-c8a28e748c0a.png)

 </div> 
 
 <details>
  <summary>Header HTML</summary>

  ```html
  <header>
        <div class="imagem-header"> <!-- Paulo -->
            <img width="200" height="180" src="https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2023-1-e1-proj-web-t5-governanca-local/main/src/src/logo/GL%20-%20PGN.png" alt="logo do projeto governança local">
        </div>
    <nav>
        <ul>
            <li><img widht="30" height="30" src="https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2023-1-e1-proj-web-t5-governanca-local/97c12341bd278b747feafe1f3401eb34059306cb/src/src/Icons/solidariedade.png" alt="Ícone de Projeto">
                <a href="#front">Projeto</a></li>
            <li><img widht="30" height="30" src="https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2023-1-e1-proj-web-t5-governanca-local/a320ac9e1d7e7b46f4d2bfcab7e85d8bcbc39349/src/src/Icons/ecologia.png" alt="Ícone de Boas Práticas">
                <a href="#prat">Práticas</a></li>
            <li><img widht="30" height="30" src="https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2023-1-e1-proj-web-t5-governanca-local/main/src/src/Icons/Icon-Pin.png" alt="Ícone do Mapa">
                <a href="#mapa">Mapa</a></li>
            <li><img widht="30" height="30" src="https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2023-1-e1-proj-web-t5-governanca-local/main/src/src/Icons/Icon-Pessoas.png" alt="Ícone de Pessoas">
                <a href="#forumm">Fórum</a></li>
            <li><img widht="30" height="30" src="https://user-images.githubusercontent.com/127517961/234959722-b351f518-23ea-4d90-bce4-0227c61167f5.png" alt="Ícone de Resumo">
                <a href="#sobre">Sobre nós</a></li>
            <li><img widht="30" height="30" src="https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2023-1-e1-proj-web-t5-governanca-local/main/src/src/Icons/Icon-Conta.png" alt="Ícone de Conta">
                <a href="#">Entrar</a></li>
        </ul>
     </nav>
    </header>
  ```
  </details>
  
   <details>
  <summary>Header CSS</summary>

  ```css
  header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background-color: #20b3ab;

}
.imagem-header img {
    margin: 20px 10px;
    border-radius: 3px;
    box-shadow: 16px 16px black;
}

header ul {
    justify-content: center;
    margin-right: 20px;
    gap: 23px;
    list-style: none;
    display: flex;  
    width: 100%;
    padding: 0px;
}
header ul img {
    display: inline;
    align-self: center;

}
header ul li {
    display: flex;
    align-items: center;
    width: 100px;
    cursor: pointer;
    font-family: 'Poppins', sans-serif;
    font-weight: 900;
    transition:0.3s;
}
header ul a{
    display: inline;
    text-decoration: none;
    text-align: justify;
    width: 1vw;   
    color: black;
    padding: 1px;
    margin: 1px;
}
header ul a:hover {
    color: orange;
}
@media (max-width:900px) {

    header{
        flex-direction: column;
    }
    header ul{
        flex-direction: column;
        place-self: center;
    }
}
  ```
  </details>
  
--------------------------------------------------------------------------------------------------------------------------------------------------
  
## Landing Page - Mapa (Grid responsivo)
<div align="center">
  
![image](https://user-images.githubusercontent.com/128330026/236692092-d5cef249-0387-4ed6-8d1c-3cef1a059e48.png)
![image](https://user-images.githubusercontent.com/128330026/236692145-2ffd3b30-349a-40d7-973f-4b04a41fdcaf.png)
  
</div>

<details>
  <summary>Mapa HTML</summary>

  ```html
  <section id="mapa"><!-- Começo da Parte do Victor
    Sessão do MAPA-->
        <article id="articlemapa">
            <div class="TituloMapa"><h2>Gostaria de acessar o seu mapa?</h2></div>
            <img id="landingpage-image-mapa" width="250" src="https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2023-1-e1-proj-web-t5-governanca-local/main/src/src/imgs/landingpage-image-mapa.png" alt="Imagem dos mapas">
            <div class="botaoCliqueAqui">
                
                <p>Clique Aqui!</p>
                
            </div>
        </article>
    </section><!--Fim da Parte do Victor-->
  ```
  </details>
  
  <details>
  <summary>MAPA CSS</summary>

  ```css
/* Começo da parte do Victor
Sessão do MAPA da Landing Page */
#articlemapa {
    display: grid;
    grid-template-columns: 1fr 20px 1fr;
    grid-template-rows: 50% 50%;
    background-color: lightgray;
    margin: 0px;
    box-sizing: border-box;
    padding: 5%;
    width: 100%;

}
#landingpage-image-mapa {
    order: 1;
    width: 80%;
    max-width: 350px;
    grid-column:1;
    grid-row-start: 1;
    grid-row-end: 3;
    outline: 2px solid black;
    place-self: center;
}
.TituloMapa {
    width: 90%;
    order: 2;
    grid-column: 3;
    grid-row: 1;
    place-self: center;
    align-self:center;
    text-align: center;
}
.TituloMapa h2 {
    font-size: 3vw;
    margin: 1%;
    }
.botaoCliqueAqui {
    order: 3;
    grid-column: 3;
    grid-row: 2;
    text-align: center;
    color: white;
    border: 10px #20b3ab;
    outline: 0.5vw solid black;
    background-color: #20b3ab;
    padding: 0px 5%;
    margin: 1%;
    place-self: center; 
    cursor: pointer;
    transition:0.3s;
}
.botaoCliqueAqui p {
    margin: 2% 5%;
    font-size: 2vw;
    font-family: 'Poppins', sans-serif;
}
.botaoCliqueAqui:hover {
    background-color: orange;
}
/*Fim da parte do Victor*/
```
</details>

--------------------------------------------------------------------------------------------------------------------------------------------------
## Práticas (Desktop e Mobile)
<details>
  <summary>Práticas HTML</summary>
![image](https://user-images.githubusercontent.com/102264520/236702496-641666e3-82eb-444e-9741-2578ce1ea341.png)


  ```html
   </article><!-- Começo da Parte Gabriel-->
        <aside class="imagem-inicial">
            <img width="250" src="https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2023-1-e1-proj-web-t5-governanca-local/660817046cb4582ce8b6ced350a57e671a3517ae/src/src/Icons/pessoas.png">
        </aside>    
    </section>
    <section class="praticas" id="prat">
      <aside id="imagempraticas">
        <img width="600"
          src="https://user-images.githubusercontent.com/102264520/236566377-9b5c332d-250e-4e46-8bed-cd260c5c7b04.png"
          alt="Imagem das boa práticas">
      </aside>
      <div id="textopraticas">
        <h2>Confira práticas <br> de boa convivência</h2>
        <input class="btn" type="button" value="EXPLORE">
      </div>
    </section><!--Final da Parte do Gabriel-->  
  ```
  </details>
  
  <details>
  <summary>Práticas CSS</summary>

  ```css
  .praticas{
display: flex;
background-color: #ececec;
padding: 20px 0;
}

#imagempraticas{
    display: flex;
    align-items: center;
    justify-content: center;
}


#imagempraticas img{
width: 50vw;
align-items: center;
justify-content: center;
}
   
#textopraticas {
align-items: center;
justify-content: center;
text-align: center;
width: 50%;
}

.btn{
    margin-top: 20px ;
width: 50%;
height: 70px;
border: 3px solid black;
cursor: pointer;
font-family: 'Poppins', sans-serif;
font-weight: 900;
background-color: #FAC710;
transition:0.3s;
}
.btn:hover{
    background-color: #20b3ab;
}

#textopraticas h2 {
font-size: 40pt;
text-align: center;
margin: 0;
}
  ```
</details>
  
## Fórum (Desktop e Mobile)

<div align="center">

![Forum Desktop](https://user-images.githubusercontent.com/128436722/236691427-212c4cee-6cb1-4076-889f-e038fad0f1b3.png)
![Forum Mobile](https://user-images.githubusercontent.com/128436722/236691431-75e64f3a-f5e2-4169-8576-b3022b015de6.png)

</div>

<details>
  <summary>Fórum HTML</summary>

  ```html
   <section class="forum-section" id="forumm"><!--Início Wesney-->
        <article id="articleforum">
            <img id="picforum" width="450" src="https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2023-1-e1-proj-web-t5-governanca-local/main/src/src/imgs/landingpage-image-forum.png" alt="Imagem do fórum">
        </article>
           <div class="Forum">
            <h2>Tenha acesso ao <br> nosso fórum!</h2>
           <p>Para prosseguir, faça o seu <a href="#"><strong>cadastro</strong></a>!<br>
            É rápido e fácil.</p>
            <input class="btn2" type="button" value="FORUM">
        </div>
    </section><!--Fim Wesney-->
  ```
  </details>
  
  <details>
  <summary>Fórum CSS</summary>

  ```css
  .forum-section {
    display: flex ;
    background-color: #e6e6e6;
    width: 100%;
    padding: 20px 0;
}

#articleforum{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60%;

}

.Forum{
    width: 60%;
    place-self: center;
    justify-content: center;
    align-items: center;
}


.btn2 {
        align-items: center;
        justify-content: center;
        width: 250px;
        height: 80px;
        border: 3px solid black;
        cursor: pointer;
        font-family: 'Poppins', sans-serif;
        font-weight: 900;
        color: white;
        background-color: #20b3ab
}

.btn2:hover {
background-color: #FAC710;
}

.forum h2 {
    font-size: 40px;
    justify-content: center ;
}

@media (max-width:900px) {
    
    .forum-section{
        flex-direction: column;
        padding-bottom: 20px;
    }

    .btn2{
        width: 80%;
        justify-content: center;
        align-items: center;
    }

    #articleforum{
        width: 100%;
        align-items: center;
        justify-content: center;
        place-self: center;
    }

    #picforum{
        width: 70%;
    }
}

  ```
  </details>
  
--------------------------------------------------------------------------------------------------------------------------------------------------

## Sobre Nós (Desktop e Mobile)

<div align="center">
  
![image](https://user-images.githubusercontent.com/127517961/236687405-0ee2f9f6-2ad8-4601-b98c-4d32f6d091c8.png)
![image](https://user-images.githubusercontent.com/127517961/236687513-d3728986-75f8-42ba-8f07-a5dd49260848.png)
  
</div>


<details>
  <summary>Sobre Nós HTML</summary>

  ```html
<section class="section-sobre" id="sobre">
        <aside class="h1-texto">
            <h1>Quem Somos? <br> <span>Onde vivemos?</span><br> <span class=linha>------------</span></h1>
        </aside>
    <article class="membros-imagens">
                    <ul>
                        <li><a href="https://www.linkedin.com/in/pedro-henrique-nunes-642211263/" target="_blank"><img class="pedro" src="https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2023-1-e1-proj-web-t5-governanca-local/df0ef5d8e2d40a0b28cecdba4610606d70d48bb4/src/src/imgs/me.jpg" alt="Pedro"></a> </li>
                        <li><a href="https://www.linkedin.com/in/victorhvasquez/" target="_blank"><img src="https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2023-1-e1-proj-web-t5-governanca-local/df0ef5d8e2d40a0b28cecdba4610606d70d48bb4/src/src/imgs/victor.jpg" alt="Victor"></a></li>
                    </ul>
                    <ul>
                        <li><a href="#"><img src="https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2023-1-e1-proj-web-t5-governanca-local/df0ef5d8e2d40a0b28cecdba4610606d70d48bb4/src/src/imgs/gabriel.jpg" target="_blank" alt="Gabriel"></a></li>
                        <li><a href="http://"><img src="https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2023-1-e1-proj-web-t5-governanca-local/df0ef5d8e2d40a0b28cecdba4610606d70d48bb4/src/src/imgs/Lucas.jpg"  target="_blank" alt="Lucas"></a></li>
                    </ul>
                        <ul>
                        <li><a href="#"><img src="https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2023-1-e1-proj-web-t5-governanca-local/df0ef5d8e2d40a0b28cecdba4610606d70d48bb4/src/src/imgs/file.jpg" target="_blank" alt="Wesney"></a></li>
                        <li><a href="#"><img src="https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2023-1-e1-proj-web-t5-governanca-local/df0ef5d8e2d40a0b28cecdba4610606d70d48bb4/src/src/imgs/Paulo.jpg"  target="_blank" alt="Paulo"></a></li>
                    </ul>
                </ul>
    </article>
    </section>
  ```
</details>


<details>
  <summary>Sobre Nós CSS</summary>

  ```css
  .section-sobre{
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-column-gap: 20px;
    grid-template-areas: "titulo criadores";
    background-color: whitesmoke;
    padding: 20px 0;
}

.h1-texto{
    grid-area: "titulo";
}

.membros-imagens{
    grid-area: "criadores";
}

.h1-texto{
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 40pt;
}

.h1-texto span{
    color: rgb(104, 99, 99);
}

.membros-imagens{
    display: flex;
    grid-template-columns: 33% 33% 33%;

                         
}

.membros-imagens ul {
    list-style:none;
    padding: 0px 10px;

}

.membros-imagens img{
    border-radius: 1000px;
    margin-top: 20px;
    box-shadow: 10px 10px black;
    width: 100%;
    transition:0.3s;
}

.membros-imagens img:hover{
    box-shadow: 10px 10px orange;
}


@media (max-width:900px) {
    .section-sobre{
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        grid-template-areas: "titulo"
                             "criadores";
    }
    .membros-imagens ul {
        padding: 0px 10%;
    }
    .membros-imagens{
        display: grid;
        grid-area: "criadores";
        place-self: center;

    }

    .h1-texto{
        grid-area: "titulo";
        font-size: 30pt;
    }

    .h1-texto{
        display: flex;
        text-align: center;
        justify-content: center;
        align-items: center;
        font-size: 5vw;
    }

}
  ```
</details>

## Footer (Desktop e Mobile)

<div align="center">
  
![image](https://user-images.githubusercontent.com/127517961/236697155-75a2ad31-6f65-498f-9f4b-660be842cbcb.png)
![image](https://user-images.githubusercontent.com/127517961/236697220-b7ef01ae-84c1-4547-9dc8-a1e4e8f2f509.png)

</div>

 <details>
  <summary>Footer HTML</summary>

  ```html
  <footer>
        <img width="100" class="footer-logo-gov-local" src="https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2023-1-e1-proj-web-t5-governanca-local/main/src/src/logo/GL%20-%20PGN.png" alt="logo do projeto governança local">
        <h1>© Governança Local</h1>
        <img width="100" class="footer-logo-github" src="https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2023-1-e1-proj-web-t5-governanca-local/main/src/src/logo/logo-github.png" alt="logo do GitHub">
        <img width="100" class="footer-logo-pucminas" src="https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2023-1-e1-proj-web-t5-governanca-local/main/src/src/logo/logo-pucminas.png" alt="logo da PUC-Minas">
    </footer>
  ```
  </details>
  
  
  <details>
  <summary>Footer CSS</summary>

  ```css
  footer {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr 1fr;
    grid-template-rows: 1fr;
    align-items: center;
    width: 100%;
    background-color: #20b3ab;
}
footer img {
    width: 30%;
    display: flex;
}
footer h1 {
    font-size: 3vw;
    justify-self: center;
    text-align: center;
}
.footer-logo-gov-local {
    grid-column: 1;
    width: 50%;
}
.footer-logo-github {
    padding-right: 20px;
    grid-column: 3;
    grid-row: 1;
    width: 50%;
    justify-self: end;
}
.footer-logo-pucminas {
    grid-column: 4;
    grid-row: 1;
    width: 50%;
    float: left;
    padding-left: 20px;
    margin-right: 20px;
    border-left: 1px solid rgb(70, 68, 68);
}
  ```
  </details>

--------------------------------------------------------------------------------------------------------------------------------------------------

## Logotipo
<div align="center">
  
![GL - Vetorizada](https://user-images.githubusercontent.com/128436722/234724914-6e5d3711-f001-4c06-8183-66de50f0bf36.svg)
</div>



----------------------------------------------------------------------------------------------------------------------------------
## Cores

![Image](https://user-images.githubusercontent.com/127517961/234970673-d632a688-fb40-449b-87bf-4a1307232f7e.png)

A temática das cores refere-se à uma combinação monocromática, buscando trazer sensações de acolhimento, tais como uma vizinhança deveria ter, como uma participação do verde <strong> [#7EFC00]</strong>, azul <strong> [#20B3AB] </strong>, amarelo <strong> [#FAAC0] </strong> (aspectos ambientais). <br>
Ademais, são utilizado tons neutros, como preto, cinza e branco, a fim de balancear as tonalidades.

----------------------------------------------------------------------------------------------------------------------------------

## Tipografia
![image](https://user-images.githubusercontent.com/127517961/234681452-40970274-6afd-4823-8dad-45cd77583f70.png)

----------------------------------------------------------------------------------------------------------------------------------

## Iconografia

<div width="100%">
  
![image](https://user-images.githubusercontent.com/127517961/235319075-3998ac3c-7702-43c8-9883-2fb6f46bec01.png)
![image](https://user-images.githubusercontent.com/127517961/235319635-5c807f3e-8094-4f91-b952-1eac0c128630.png)
![image](https://user-images.githubusercontent.com/127517961/235319313-708f3d5b-093f-4991-bd08-22c948fbe5d6.png)
![image](https://user-images.githubusercontent.com/127517961/235319426-496e45ec-e6f3-4176-ac04-f2e67614e23d.png)
![image](https://user-images.githubusercontent.com/127517961/235319473-2c334ea7-38a0-476e-abc4-7a64a638c4c1.png)
![image](https://user-images.githubusercontent.com/127517961/235319544-8a3d4ef1-15c3-48f8-8446-3e4b5a40bab4.png)
![image](https://user-images.githubusercontent.com/127517961/235319742-4cc2ad92-f2b1-470a-96a7-63451dfa0446.png)
![image](https://user-images.githubusercontent.com/127517961/235319788-2bfd3ae6-bf4c-4bed-a1fc-347a3db4611c.png)  
![image](https://user-images.githubusercontent.com/127517961/235319602-f5408486-3ef9-4277-a19c-270bb60487bf.png)
![image](https://user-images.githubusercontent.com/127517961/236059885-8312df63-d023-4903-bf71-0490f0bd3465.png)



</div>

----------------------------------------------------------------------------------------------------------------------------------

