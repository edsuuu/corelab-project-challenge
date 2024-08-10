# Documentação do Projeto completo

[Documentação do Projeto Front-end](./front-corelab/README.md)
[Documentação do Projeto Back-end](./api/README.md)

# Descrição 
- Ambos projetos estão com a configuração ultilizando as regras prettier e eslint e configuração do VSCode
- FrontEnd está hospedado na Vercel no link https://corelab-project-challenge.vercel.app/
- Backend / Banco de dados está hospedado numa GCP no link https://api-corelab.ddns.net/tasks

# Estrutura do projeto

```
└── 📁corelab-project-challenge
    └── 📁api
        └── 📁.vscode
            └── settings.json
        └── 📁src
            └── 📁app
                └── 📁config
                    └── database.ts
                    └── sequelize.config.js
                └── 📁docs
                    └── commands.md
            └── 📁controllers
                └── TaskController.ts
            └── 📁interfaces
                └── PayloadReceived.ts
            └── 📁migrations
                └── 20240807195029-create-table-tasks.js
            └── 📁model
                └── Task.ts
            └── 📁routes
                └── taskRoute.ts
            └── app.ts
            └── server.ts
        └── .editorconfig
        └── .env
        └── .env.EXAMPLE
        └── .eslintrc.js
        └── .gitignore
        └── .prettierrc.js
        └── .sequelizerc
        └── docker-compose.yml
        └── package-lock.json
        └── package.json
        └── README.md
        └── tsconfig.json
    └── 📁front-corelab
        └── 📁.vscode
            └── settings.json
        └── 📁public
            └── vite.svg
        └── 📁src
            └── 📁assets
                └── IconClose.tsx
                └── IconColor.tsx
                └── IconEdit.tsx
                └── IconSearch.tsx
                └── IconStars.tsx
            └── 📁components
                └── 📁CardTarefa
                    └── index.tsx
                    └── styled.tsx
                └── 📁FormCreateTask
                    └── index.tsx
                    └── styled.tsx
                └── 📁Navigation
                    └── index.tsx
                    └── styled.tsx
            └── 📁Pages
                └── 📁Home
                    └── index.tsx
                    └── styled.tsx
            └── 📁services
                └── axios.ts
            └── 📁styles
                └── GlobalStyled.tsx
            └── 📁utils
                └── ConvertData.ts
            └── App.tsx
            └── main.tsx
            └── vite-env.d.ts
        └── .editorconfig
        └── .env
        └── .eslintrc.cjs
        └── .gitignore
        └── .prettierrc.json
        └── index.html
        └── package-lock.json
        └── package.json
        └── README.md
        └── tsconfig.json
        └── tsconfig.node.json
        └── vite.config.ts
    └── .gitattributes
    └── README.md
```
