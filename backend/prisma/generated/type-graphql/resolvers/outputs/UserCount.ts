import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCountTodosArgs } from "./args/UserCountTodosArgs";

@TypeGraphQL.ObjectType("UserCount", {})
export class UserCount {
  todos!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "todos",
    nullable: false
  })
  getTodos(@TypeGraphQL.Root() root: UserCount, @TypeGraphQL.Args() args: UserCountTodosArgs): number {
    return root.todos;
  }
}
