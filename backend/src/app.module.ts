import { Module } from '@nestjs/common';
import { ApolloDriver } from '@nestjs/apollo';
import { PrismaClient } from '@prisma/client';
import { resolve } from 'path';
import { TypeGraphQLModule } from "typegraphql-nestjs";

// import généré pour la package typegraphql-prisma dans le prisma.schema
import {
  UserRelationsResolver,
  TodoRelationsResolver,
  UserCrudResolver,
  TodoCrudResolver,
} from "../prisma/generated/type-graphql";

interface Context {
  prisma: PrismaClient;
}

@Module({
  imports: [
    // use the TypeGraphQLModule to expose Prisma by GraphQL
    TypeGraphQLModule.forRoot({
      driver: ApolloDriver,
      path: "/",
      // le schema ira dans le fichier présent dans le outdir du tsconfig
      emitSchemaFile: resolve(__dirname, "./generated-schema.graphql"),
      validate: false,
      // connection avec prisma
      context: (): Context => ({ prisma: new PrismaClient() }),
    }),
  ],
  // controllers: [AppController],
  // providers: [AppService],
  providers: [    // register all resolvers inside `providers` of the Nest module
    UserRelationsResolver,
    UserCrudResolver,
    TodoRelationsResolver,
    TodoCrudResolver
  ],
})
export class AppModule { }
