import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TodoWhereInput } from "../../inputs/TodoWhereInput";

@TypeGraphQL.ArgsType()
export class UserCountTodosArgs {
  @TypeGraphQL.Field(_type => TodoWhereInput, {
    nullable: true
  })
  where?: TodoWhereInput | undefined;
}
