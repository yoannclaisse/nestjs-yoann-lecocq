import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TodoWhereUniqueInput } from "../../../inputs/TodoWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueTodoOrThrowArgs {
  @TypeGraphQL.Field(_type => TodoWhereUniqueInput, {
    nullable: false
  })
  where!: TodoWhereUniqueInput;
}
