import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TodoCreateManyInput } from "../../../inputs/TodoCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyTodoArgs {
  @TypeGraphQL.Field(_type => [TodoCreateManyInput], {
    nullable: false
  })
  data!: TodoCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
