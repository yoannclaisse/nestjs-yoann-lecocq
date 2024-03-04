import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TodoAvgAggregate } from "../outputs/TodoAvgAggregate";
import { TodoCountAggregate } from "../outputs/TodoCountAggregate";
import { TodoMaxAggregate } from "../outputs/TodoMaxAggregate";
import { TodoMinAggregate } from "../outputs/TodoMinAggregate";
import { TodoSumAggregate } from "../outputs/TodoSumAggregate";

@TypeGraphQL.ObjectType("TodoGroupBy", {})
export class TodoGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description!: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  completed!: boolean;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  userId!: number;

  @TypeGraphQL.Field(_type => TodoCountAggregate, {
    nullable: true
  })
  _count!: TodoCountAggregate | null;

  @TypeGraphQL.Field(_type => TodoAvgAggregate, {
    nullable: true
  })
  _avg!: TodoAvgAggregate | null;

  @TypeGraphQL.Field(_type => TodoSumAggregate, {
    nullable: true
  })
  _sum!: TodoSumAggregate | null;

  @TypeGraphQL.Field(_type => TodoMinAggregate, {
    nullable: true
  })
  _min!: TodoMinAggregate | null;

  @TypeGraphQL.Field(_type => TodoMaxAggregate, {
    nullable: true
  })
  _max!: TodoMaxAggregate | null;
}
