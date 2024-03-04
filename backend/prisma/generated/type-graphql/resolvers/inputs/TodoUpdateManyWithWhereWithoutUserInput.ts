import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TodoScalarWhereInput } from "../inputs/TodoScalarWhereInput";
import { TodoUpdateManyMutationInput } from "../inputs/TodoUpdateManyMutationInput";

@TypeGraphQL.InputType("TodoUpdateManyWithWhereWithoutUserInput", {})
export class TodoUpdateManyWithWhereWithoutUserInput {
  @TypeGraphQL.Field(_type => TodoScalarWhereInput, {
    nullable: false
  })
  where!: TodoScalarWhereInput;

  @TypeGraphQL.Field(_type => TodoUpdateManyMutationInput, {
    nullable: false
  })
  data!: TodoUpdateManyMutationInput;
}
