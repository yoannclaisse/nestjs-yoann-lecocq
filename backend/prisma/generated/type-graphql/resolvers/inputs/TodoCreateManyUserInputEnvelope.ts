import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TodoCreateManyUserInput } from "../inputs/TodoCreateManyUserInput";

@TypeGraphQL.InputType("TodoCreateManyUserInputEnvelope", {})
export class TodoCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [TodoCreateManyUserInput], {
    nullable: false
  })
  data!: TodoCreateManyUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
