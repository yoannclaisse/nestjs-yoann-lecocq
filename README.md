# nestjs-yoann-lecocq

Ceci est un projet de cours developper avec NestJs pour le back et angular pour le front.

C'est une application web de Todo, ce projet mettera en place Le CRUD ert utilisera postgreSQL comme base de donnée dans un container docker.

## Utilisation de la base de donnée postegresql sur un container docker et prisma
Pour l'utilisation de la base de donnée qui tourne sur un container docker :
1 - creer un .env à la racine dans le dossier "backend" avec les infos de connexion suivante
```
#PostgreSQL
POSTGRES_DB=...
POSTGRES_USER=...
POSTGRES_PASSWORD=...
POSTGRES_PORT=6090

# PGAdmin
PGADMIN_DEFAULT_EMAIL=admin@example.com
PGADMIN_DEFAULT_PASSWORD=adminpassword
PGADMIN_DEFAULT_PASSWORD_FILE=adminpassword


# This was inserted by `prisma init`:
# Environment variables declared in this file are automatically made available to Prisma.
# See the documentation for more detail: https://pris.ly/d/prisma-schema#accessing-environment-variables-from-the-schema

# Prisma supports the native connection string format for PostgreSQL, MySQL, SQLite, SQL Server, MongoDB and CockroachDB.
# See the documentation for all the connection string options: https://pris.ly/d/connection-strings

DATABASE_URL="postgresql://${POSTGRES_USER}:${POSTGRES_PASSWORD}@localhost:${POSTGRES_PORT}/${POSTGRES_DB}?schema=public"
```

2 - Initialisation de prisma, qui est un ORM (Object-Relational Mapping) qui facilite l'interaction avec la base de données PostgreSQL. Nous allons utiliser Prisma pour définir le modèle de données et créer des tables dans PostgreSQL avec un schema.

##### Maitenant les variables d'environnement sont mise en place 


## Comment run le projet backend:
Aller dans "backend" et faire :
```
npm i                       #installation des dépendences
npm run prisma-generate     #mets en place la connexion de prisma
npm run prisma-db-push      #mets en place la connexion de prisma
docker compose up -d        #base de donnée port 5050
npm run start               #nestJS port 3000
```
## Comment run le projet frontend:
Aller dans "frontend" et faire :
```
npm i           #installation des dépendences
npm run start   #Angular port 4200
```







