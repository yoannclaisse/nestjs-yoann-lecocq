import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TodoWhereInput } from "../inputs/TodoWhereInput";

@TypeGraphQL.InputType("TodoListRelationFilter", {})
export class TodoListRelationFilter {
  @TypeGraphQL.Field(_type => TodoWhereInput, {
    nullable: true
  })
  every?: TodoWhereInput | undefined;

  @TypeGraphQL.Field(_type => TodoWhereInput, {
    nullable: true
  })
  some?: TodoWhereInput | undefined;

  @TypeGraphQL.Field(_type => TodoWhereInput, {
    nullable: true
  })
  none?: TodoWhereInput | undefined;
}
