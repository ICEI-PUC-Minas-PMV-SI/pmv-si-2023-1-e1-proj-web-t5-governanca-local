# Template padrão do site

#Design

# Landing Page - Mapa (Grid responsivo)
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

# Fórum (Desktop e Mobile)

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

# Sobre Nós (Desktop e Mobile)

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

