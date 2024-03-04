import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TodoAvgAggregate } from "../outputs/TodoAvgAggregate";
import { TodoCountAggregate } from "../outputs/TodoCountAggregate";
import { TodoMaxAggregate } from "../outputs/TodoMaxAggregate";
import { TodoMinAggregate } from "../outputs/TodoMinAggregate";
import { TodoSumAggregate } from "../outputs/TodoSumAggregate";

@TypeGraphQL.ObjectType("AggregateTodo", {})
export class AggregateTodo {
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
