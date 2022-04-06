# GTStream

Projeto desenvolvido, utilizando React, como exercício 1 da primeira aula sobre framework Frontend.

## Requisitos

- npm

## Como executar o projeto localmente
### Passo 1 - instalar dependências
```
npm install
```
- O comando irá realizar a instalação de todas as dependências do projeto.


### Passo 2 - rodar projeto
```
npm start
```
- O comando irá executar o projeto e irá disponibilizar no terminal a informação sobre o localhost que está hospedando a aplicação. Padrão: `http://localhost:3000`

## Como executar o projeto com Docker
### Passo 1 - instalar dependências
```
npm install
```
- O comando irá realizar a instalação de todas as dependências do projeto.

### Passo 2 - fazer o build
```
npm run-script build
```
- O comando irá executar um build, que criará uma pasta chamada `build` com o conteúdo do projeto "compactado", essa pasta que irá ser executado no docker.

### Passo 3 - fazer o docker build
```
docker build -t react-gtstream .
```
- O comando irá executar o build do docker de acordo com o arquivo `Dockerfile`.
### Passo 4 - rodar o docker
```
docker run --name react -i -t -d -p 3000:3000 react-gtstream
```
- O comando irá rodar a imagem gerada pelo `docker build` e criará um container chamado `react`(definido pela tag --name), retorna o id container. É possível acessar a aplicação na url `http://localhost:3000`
### Passo 5 - para o docker
```
docker stop react
```
- O comando irá para o container que foi startado no comando anterior.
 
### Passo 5 - remover container
```
docker rm react
```
- O comando irá remover o contaienr criado pelo docker run.

## Grupo 4
- Alexia Assumpção
- Allan Garcia
- Ricardo Pinheiro

## Referências
- [npm](https://docs.npmjs.com/cli/v6/commands/npm-install)
- [React](https://reactjs.org/)
- [Docker](https://docs.docker.com/)
- [Limpar docker](https://docs.docker.com/engine/reference/commandline/system_prune/)
