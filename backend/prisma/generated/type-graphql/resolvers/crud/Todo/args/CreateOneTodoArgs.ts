import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TodoCreateInput } from "../../../inputs/TodoCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneTodoArgs {
  @TypeGraphQL.Field(_type => TodoCreateInput, {
    nullable: false
  })
  data!: TodoCreateInput;
}
