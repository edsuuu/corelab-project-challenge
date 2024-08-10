# Tecnologias usadas no projeto
- Express
- Typescript
- Postgres
- Sequelize
- Eslint
- Nodemon
- Prettier
- Sequelize-cli
- Ts-loader
- Ts-node

# Como executar o projeto

## Clonar o repositorio
```bash
git clone https://github.com/edsuuu/corelab-project-challenge.git
```

## Acessar a pasta da API
```bash
cd corelab-project-challenge/api
```

## Instalar as Dependencias

```bash
npm install
```

# Criar o .env para ler as variaveis de ambiente do projeto
- Na raiz do projeto tem o .env.EXAMPLE
- Apenas tire o .EXAMPLE para rodar localmente

# Iniciando o banco de dados
- Necessario ter o docker e docker compose instalado na máquina

- Após instalar instalar o banco via docker-compose.yml

```bash
docker compose up -d
```
- Verificar se o container está rodando

```bash
docker ps
```

- Rodar a Migration para criar a tabela no banco de dados

```bash
npx sequelize-cli db:migrate
```
- Caso ocorrer algum erro execute para desfazer as migration e execute novamente o comando acima

```bash
npx sequelize-cli db:migrate:undo:all
```

# Inicialização do projeto

- Rodar o projeto
```bash
npm run dev
```
- Buildar o projeto
```bash
npm run build
```

# Rotas e EndPoints

### Endpoint POST: Create
```bash
http://localhost:3001/tasks
```
- Objeto a ser passado no Insomnia ou Postman

```bash
{
	"title":"Titulo",
	"content":"Conteudo da task",
	"color": "",
	"favorite": false
}
```
### Endpoint GET: Read All
```bash
http://localhost:3001/tasks
```
### Endpoint GET: Read One
- Passar o id no parameto/url
```bash
http://localhost:3001/tasks/:id
```
### Endpoint PUT: Update
- Passar o id no parameto/url
```bash
http://localhost:3001/tasks/:id
```
- Objeto a ser passado é opcional qualquer campo.
```bash
{
	"title":"Titulo",
	"content":"Conteudo da task",
	"color": "",
	"favorite": false
}
```
### Endpoint DELETE: Delete
- Passar o id no parameto/url
```bash
http://localhost:3001/tasks/:id
```
