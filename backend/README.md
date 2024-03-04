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

2 - Initialisation de prisma, qui est un ORM (Object-Relational Mapping) qui facilite l'interaction avec la base de données PostgreSQL. Nous allons utiliser Prisma pour définir le modèle de données et créer des tables dans PostgreSQL avec un schema.

##### Instaler prisma
```
npm install prisma --save-dev
```

##### Initialiser Prisma
```
npx prisma init
```
Cela génère un dossier "prisma" contenant un fichier "schema.prisma", prisma se servira de ce shema pour modifier la base de donnée postegre initialiser au début



REQUETE GRAPHQL

# mutation($createUser: UserCreateInput!){createOneUser(data: $createUser){id username}}
# mutation($createTodo: TodoCreateInput!){createOneTodo(data: $createTodo){id createdAt}}
# mutation CreateTodo($todoData: TodoCreateInput!) {
#   createOneTodo(data: $todoData) {
#     id
#     title
#     description
#     completed
#     createdAt
#     updatedAt
#     userId
#   }
# }
# mutation UpdateTodoTest($updateTodo: TodoUpdateInput!, $filter: TodoWhereUniqueInput!) {
#   updateOneTodo(data: $updateTodo, where: $filter){title completed id updatedAt createdAt}
# }
# query {users {id todos{title description user{id}}}}
# query getUserByNameWithTodos($input: UserWhereUniqueInput!){getUser(where: $input){username todos{description id title}}}
#"input": {"username": "yoyo2", "email": "test2@gmail.fr", "todos": []},
# "todoData": 
#   {
#     "title": "test title",
#     "description": "test descriptionnnnnnn",
#     "user": {"connect": {"id": 1}}
#   },

# query getTodosByUsername($where: TodoWhereInput){todos(where: $where){id title description user{username}}}

# mutation($input2: TodoWhereUniqueInput!) {deleteOneTodo(where: $input2){id}}

# mutation($input3: TodoUpdateInput! $where2: TodoWhereUniqueInput!)
# 	{
#     updateOneTodo(data: $input3 where: $where2)
#     {title}
#   }
subscription {
  todos {
    id
  }
}


