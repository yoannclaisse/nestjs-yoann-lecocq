import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TodoCreateInput } from "../../../inputs/TodoCreateInput";
import { TodoUpdateInput } from "../../../inputs/TodoUpdateInput";
import { TodoWhereUniqueInput } from "../../../inputs/TodoWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneTodoArgs {
  @TypeGraphQL.Field(_type => TodoWhereUniqueInput, {
    nullable: false
  })
  where!: TodoWhereUniqueInput;

  @TypeGraphQL.Field(_type => TodoCreateInput, {
    nullable: false
  })
  create!: TodoCreateInput;

  @TypeGraphQL.Field(_type => TodoUpdateInput, {
    nullable: false
  })
  update!: TodoUpdateInput;
}
