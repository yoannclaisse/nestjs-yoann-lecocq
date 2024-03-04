import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TodoOrderByWithAggregationInput } from "../../../inputs/TodoOrderByWithAggregationInput";
import { TodoScalarWhereWithAggregatesInput } from "../../../inputs/TodoScalarWhereWithAggregatesInput";
import { TodoWhereInput } from "../../../inputs/TodoWhereInput";
import { TodoScalarFieldEnum } from "../../../../enums/TodoScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByTodoArgs {
  @TypeGraphQL.Field(_type => TodoWhereInput, {
    nullable: true
  })
  where?: TodoWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TodoOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: TodoOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [TodoScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "title" | "description" | "completed" | "createdAt" | "updatedAt" | "userId">;

  @TypeGraphQL.Field(_type => TodoScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: TodoScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
