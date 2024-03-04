import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TodoUpdateWithoutUserInput } from "../inputs/TodoUpdateWithoutUserInput";
import { TodoWhereUniqueInput } from "../inputs/TodoWhereUniqueInput";

@TypeGraphQL.InputType("TodoUpdateWithWhereUniqueWithoutUserInput", {})
export class TodoUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => TodoWhereUniqueInput, {
    nullable: false
  })
  where!: TodoWhereUniqueInput;

  @TypeGraphQL.Field(_type => TodoUpdateWithoutUserInput, {
    nullable: false
  })
  data!: TodoUpdateWithoutUserInput;
}
