import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TodoUpdateManyMutationInput } from "../../../inputs/TodoUpdateManyMutationInput";
import { TodoWhereInput } from "../../../inputs/TodoWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyTodoArgs {
  @TypeGraphQL.Field(_type => TodoUpdateManyMutationInput, {
    nullable: false
  })
  data!: TodoUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => TodoWhereInput, {
    nullable: true
  })
  where?: TodoWhereInput | undefined;
}
