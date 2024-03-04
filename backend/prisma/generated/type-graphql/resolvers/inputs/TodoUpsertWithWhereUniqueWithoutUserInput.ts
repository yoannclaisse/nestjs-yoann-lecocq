import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TodoCreateWithoutUserInput } from "../inputs/TodoCreateWithoutUserInput";
import { TodoUpdateWithoutUserInput } from "../inputs/TodoUpdateWithoutUserInput";
import { TodoWhereUniqueInput } from "../inputs/TodoWhereUniqueInput";

@TypeGraphQL.InputType("TodoUpsertWithWhereUniqueWithoutUserInput", {})
export class TodoUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => TodoWhereUniqueInput, {
    nullable: false
  })
  where!: TodoWhereUniqueInput;

  @TypeGraphQL.Field(_type => TodoUpdateWithoutUserInput, {
    nullable: false
  })
  update!: TodoUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => TodoCreateWithoutUserInput, {
    nullable: false
  })
  create!: TodoCreateWithoutUserInput;
}
