# nestjs-yoann-lecocq

Ceci est un projet de cours developper avec NestJs pour le back et angular pour le front.

C'est une application web de Todo, ce projet mettera en place Le CRUD ert utilisera postgreSQL comme base de donnée dans un container docker.

## Utilisation de la base de donnée postegresql sur un container docker et prisma
Pour l'utilisation de la base de donnée qui tourne sur un container docker :
1 - creer un .env avec les infos de connexion
```
# PostgreSQL
POSTGRES_DB=...
POSTGRES_USER=...
POSTGRES_PASSWORD=...

# PGAdmin
PGADMIN_DEFAULT_EMAIL=admin@example.com
PGADMIN_DEFAULT_PASSWORD=adminpassword
```

La base donnée est maintenant crée et consultable sur le port aloué au pgadmin.