import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { TodoAvgOrderByAggregateInput } from "../inputs/TodoAvgOrderByAggregateInput";
import { TodoCountOrderByAggregateInput } from "../inputs/TodoCountOrderByAggregateInput";
import { TodoMaxOrderByAggregateInput } from "../inputs/TodoMaxOrderByAggregateInput";
import { TodoMinOrderByAggregateInput } from "../inputs/TodoMinOrderByAggregateInput";
import { TodoSumOrderByAggregateInput } from "../inputs/TodoSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("TodoOrderByWithAggregationInput", {})
export class TodoOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  title?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  description?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  completed?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  userId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => TodoCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: TodoCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TodoAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: TodoAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TodoMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: TodoMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TodoMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: TodoMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TodoSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: TodoSumOrderByAggregateInput | undefined;
}
