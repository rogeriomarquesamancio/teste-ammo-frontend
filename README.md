<!-- LOGO DO PROJETO  -->
<br />
<div align="center">
  <a>
    <img src="https://media.licdn.com/dms/image/C4D0BAQFK7bRgmryn0Q/company-logo_200_200/0/1649165120647?e=1690416000&v=beta&t=DdPk_TeqiACWtAiV663WyGOsa1TA6KJyIPhmH81WDdE" alt="Logo" width="100" height="100">
  </a>

  <h3 align="center">Ammo Varejo</h3>

  <p align="center">
    Teste prático como desenvolvedor full stack para o grupo Ammo Varejo
  </p>
</div>


<!-- SOBRE O PROJETO -->
## Sobre o projeto

O desafio tem como objetivo  desenvolver uma aplicação que permita a listagem de produtos em um e-commerce. A mesma contém algumas funcionalidades, como busca pelo nome do produto, paginação e limite de produtos por página. Os produtos já estão cadastrados em um banco de dados utilizando migrations e seeds.

### Desenvolvido com 

O projeto foi desenvolvido com as seguintes tecnologias/plataformas:

* ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
* ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
* ![Ant-Design](https://img.shields.io/badge/-AntDesign-%230170FE?style=for-the-badge&logo=ant-design&logoColor=white)
* ![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
* ![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
* ![cypress](https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e)
* ![Render](https://img.shields.io/badge/Render-%46E3B7.svg?style=for-the-badge&logo=render&logoColor=white)
* ![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)
* ![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)

De forma resumida no projeto foi utilizado React atrelado ao Typescript, utilizando Vite como starter, Ant design como biblioteca de UI atrelado a Styled Components para estilização, utilizando Cypress para testes e sendo publicada na plataforma Render.

<!-- Primeiros passos -->

### Pré requisitos

Você poderá seguir o passo a passo para rodar o projeto localmente ou acessá-lo no ambiente publicado: 
</br>
</br>
https://ammo-varejo.onrender.com/

### Instalação

_Siga os seguintes passos para rodar localmente, **fique atento a utilizar a branch develop**._

1. Clone o repositório
   ```sh
   git clone https://github.com/rogeriomarquesamancio/teste-ammo-frontend.git
   ```
2. Instale os pacotes NPM
   ```sh
   npm install
   ```
3. Ajuste o apontamento das requests em `src/module/api/RestAPI.ts`
   ```js
   return 'https://ammo-varejo-api.onrender.com';
   ```
4. Execute o comando para executar o projeto
   ```js
   npm run dev
   ```
5. Caso queira executar os testes no Cypress utilize o seguinte comando:
   ```js
   npx cypress open
   ```

<!-- FUNCIONALIDADES E ROTAS -->
## Funcionalidades e rotas

Existem 2 rotas: a padrão '/' e a de busca '/search', ambas é possível filtar os produtos.
* O sistema conta com um input de filtragem de produtos, cujo aparece opções de categorias de acordo com o que foi digitado.
* O sistema conta com paginação, seja selecionar itens mostrados por página ou ir pulando de página em página.

<!-- ORGANIZAÇÃO -->
## Organização do projeto

> /componentes = Componentes mais comuns do sistema </br>
> /enum = Enumerables </br>
> /hook = Hooks </br>
> /layouts = Organização do footer/header e conteúdo principal </br>
> /module = Módulos do sistema </br>
> /pages = Páginas do sistema </br>
> /providers = Armazenamento de dados no context </br>
> /routes = Rotas do sistema </br>

## Organização das páginas/componentes

Exemplo de como é estruturado o fluxo, nesse caso o exemplo em questão é o componente FoundItemsCount cujo exibe os itens encontrados. </br> </br>
> FoundItemsCount.cy - Arquivo de teste cypress </br>
> FoundItemsCount.interface - Interface/tipagens da página </br>
> FoundItemsCount.style - Estilização </br>
> FoundItemsCount.view - Renderização do item </br>
> FoundItemsCount - Regras/funções/formatação e demais variáveis </br>

<!-- E SE MELHORARMOS? -->
## E se existisse um cenário ideal?
Devido aos requisitos de um e-commerce, talvez o melhor dos mundos seria um projeto front-end em Next.JS devido suas vantagens em seu funcionamento/pré visualização/motores de busca,
atrelado a um banco de dados relacional como MySQL/PostgreSQL ou derivados, mas também atrelado a um não relacional como MongoDB, como por exemplo em cenários onde os produtos podem ter várias imagens,
dessa forma poderia otimizar tal armazenamento das mesmas. Já no seu back-end não haveria uma tecnologia em específico desde que ela trabalhasse muito bem com relação ao cache,
por exemplo utilização de Node.js atrelado ao bastante popular Redis.

<!-- CONTATO -->
## Contato

Linkedin - (https://www.linkedin.com/in/rogerio-marques-11b442207/)

<!-- CURIOSIDADES -->
## Curiosidades

Informações aleatórias sobre a construção do projeto.

* Por padrão o projeto é desenvolvido em inglês (commit,váriaveis, entidades,funções, etc...)
* Inicialmente o projeto seria em Next.JS (devido suas vantagens a e-commerce).
* A utilização de rotas sem '/' e a preferência por itens como 'product=:strfilter' foi feito em relação a suas vantagens nos motores de busca.
* Foram criados 8 componentes diferentes no projeto
* Foram feitos 24 commits ( main e develop )
* 1 ou mais itens são salvos no local storage.
* Na estilização foi tentado ao máximo utilizar os componentes criados pelo styled componentes ao invés de um Wrapper global cheio de classes.


![thats-all-folks](https://user-images.githubusercontent.com/56399623/233857138-cf602f90-35b3-472e-9615-3f8bc001380b.gif)
