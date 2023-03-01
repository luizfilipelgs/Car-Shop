# Boas vindas ao repositório do projeto Car-Shop
 # O que foi desenvolvido  👨‍💻 

  Uma API em Typescript com CRUD para gerenciar uma concessionária de veículos que aplica os princípios de Programação Orientada a Objetos (POO) e de BDD(behaviour driven development), focando no desenvolvimento orientado a comportamento. Isso foi feito utilizando o banco de dados MongoDB através do framework do Mongoose, e com testes de integração utilizando Mocha, chai, sinon.
 
  ---

# Tecnologias utilizadas <a name="tecnologias"></a>

- [**Node JS**](https://nodejs.org/pt-br/)
- [**Express**](https://expressjs.com/pt-br/)
- [**MongoDB**](https://www.mongodb.com/)
- [**Mongoose**](https://mongoosejs.com/)
- [**Mocha**](https://mochajs.org/)
- [**Chai**](https://www.chaijs.com)
- [**Sinon**](https://sinonjs.org/)

# Orientações <a name="orientacoes"></a>

<details>
  <summary><strong>🐋 Rodando Projeto no Docker vs Localmente</strong></summary><br />
  
  ## Com Docker

  > Clone o repositório

  - `https://github.com/luizfilipelgs/Car-Shop/tree/main/tests/unit`.
  - Entre na pasta do repositório que você acabou de clonar:
  - `cd Car-Shop`.

  > Rode o serviço `node` com o comando `docker-compose up -d`.

  - Lembre-se de parar o `mongo` se estiver usando localmente na porta padrão (`27017`), ou adapte, caso queria fazer uso da aplicação em containers
  - Esses serviços irão inicializar um container chamado `car_shop` e outro chamado `car_shop_db`.
  - A partir daqui você pode rodar o container `car_shop` via CLI ou abri-lo no VS Code.

  > Use o comando `npm run docker:bash`.

  - Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.

  > Instale as dependências [**Caso existam**] com `npm install`
  
  ⚠ Atenção ⚠ Caso opte por utilizar o Docker, **TODOS** os comandos disponíveis no `package.json` (npm start, npm test, npm run dev, ...) devem ser executados **DENTRO** do container, ou seja, no terminal que aparece após a execução do comando `docker exec` citado acima com excessão do dos comandos do **git**, pois ele não vem configurado com suas credenciais dentro do container, então os commits fora. 

---
  
  ## Sem Docker

  > Clone o repositório

  - `https://github.com/luizfilipelgs/Car-Shop/tree/main/tests/unit`.
  - Entre na pasta do repositório que você acabou de clonar:
  - `cd Car-Shop`.
  > Instale as dependências [**Caso existam**] com `npm install`
  
  - Na raiz do projeto, será necessário criar um arquivo **.env**, com as seguintes informações:

        MONGO_DB_URL=mongodb://localhost:27017/CarShop
  
  > ⚠️ Lembre de trocar 'root' pelo seu nome de usuário no MySQL, e 'password' pela sua senha ⚠️
  <br/>
</details>

<details>

## Testes Unitários 

  <summary><strong>🛠 Execução de testes localmente</strong></summary>

  Para executar os testes localmente, basta executar o comando `npm run test:coverage`.

  Você verá a lista de testes aprovados e a tabela de cobertura deles.
  <br>
</details>

# REST API <a name="rest-api"></a>

## Documentação em Breve