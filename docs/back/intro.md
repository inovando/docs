---
id: intro
title: Introdução
---

Essa documentação tem por objetivo explicar a utilização das funcionalidades agregadas ao template feito com do Adonis Js.


## Uso

1. Configure o banco de dados [PostgreSQL](#postgresql)

2. Crie uma aplicação com o adonis, a partir do template
```bash
adonis new yardstick --blueprint=inovando/adonis-api-app
```

3. Modique o arquivo`.env` conforme necessário

4. Execute as migrações e o seeder 
```bash
adonis migration:refresh --seed
```

4. Execute o comando para iniciar o servidor

```bash
adonis serve --dev
```

5. Feito 🎉

### PostgreSQL

#### Local install

[Follow this link](https://www.postgresql.org/download/)

#### Docker

```bash
docker run --name some-postgres -e POSTGRES_PASSWORD=mysecretpassword -d postgres

docker start postgres
```

### Postman

1. Download [Postman](https://www.postman.com/downloads/)

3. Import our [Postman Collection](https://learning.postman.com/docs/postman/collections/intro-to-collections/) from `postman/Template Adonis.postman_collection.json`

![Postman Collection | First Step](/img/postman-collection-1.png)


![Postman Collection | Second Step](/img/postman-collection-2.png)

4. Import our [Postman Environment](https://learning.postman.com/img/postman/variables-and-environments/managing-environments/) from `postman/Template Adonis.postman_environment.json`

![Postman Environment | First Step](/img/postman-environment-1.png)

![Postman Environment | Second Step](/img/postman-environment-2.png)

![Postman Environment | Second Step](/img/postman-environment-3.png)

### Funcionalidades Adicionadas

- [x] Bodyparser
- [x] Authentication
- [x] CORS
- [x] Lucid ORM
- [x] Migrations and seeds
- [x] Abstração Controller/Repository
- [x] [Bumblebee (include)](https://github.com/rhwilr/adonis-bumblebee)
- [x] Enviar e-mails
- [x] Método para autenticar, resetar senha
- [x] Endpoints `/me`
- [x] Abstração de profiles
- [x] Upload de arquivos genérico
- [x] Sentry
- [x] Redis Cache
- [x] User and Profile Seeder
- [x] Commitizen Friendly