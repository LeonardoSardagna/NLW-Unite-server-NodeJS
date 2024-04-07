# Pass.in Back-end

O Pass.in é uma aplicação para **gestão de participantes em eventos presenciais**, permitindo que organizadores cadastrem eventos e gerenciem inscrições e check-ins de participantes de maneira eficiente.

Esta aplicação back-end lida com todas as operações de dados, desde o cadastro de eventos até a gestão de participantes e o processamento de check-ins.

## Funcionalidades

O back-end do Pass.in suporta as seguintes funcionalidades:

- O organizador pode cadastrar um novo evento;
- O organizador pode visualizar dados de um evento;
- O organizador pode visualizar a lista de participantes;
- O organizador pode realizar o check-in de um participante;
- O participante pode se inscrever em um evento;
- O participante pode visualizar seu crachá de inscrição;
- O participante pode realizar check-in no evento;

## Tecnologias Utilizadas

- **Node.js** e **Fastify** para a construção do servidor
- **Prisma** como ORM para o gerenciamento do banco de dados
- **SQLite** para desenvolvimento e **PostgreSQL** para produção
- **Swagger** para documentação da API

## Executando Localmente

Para executar o back-end localmente, siga os passos abaixo:

1. Clone o repositório:

```bash
git clone https://github.com/Lag0/nlw-unite-nodejs.git
cd nlw-unite-nodejs
```

2. Instale as dependências:

```bash
npm install
```

3. Crie um arquivo `.env` na raiz do projeto com a seguinte linha, que configura o banco de dados para usar SQLite no ambiente de desenvolvimento:

```env
DATABASE_URL="file:./dev.db"
```

4. Atualize o `schema.prisma` para usar SQLite:

De:

```prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
```

Para:

```prisma
datasource db {
  provider = "sqlite"
  url      = env("DATABASE_URL")
}
```

5. Execute as migrações para criar o banco de dados:

```bash
npx prisma migrate dev
```

6. Inicie o servidor:

```bash
npm run dev
```

A API agora estará rodando localmente e acessível via `http://localhost:3333`.

---