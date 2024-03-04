import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateTodoArgs } from "./args/AggregateTodoArgs";
import { Todo } from "../../../models/Todo";
import { AggregateTodo } from "../../outputs/AggregateTodo";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Todo)
export class AggregateTodoResolver {
  @TypeGraphQL.Query(_returns => AggregateTodo, {
    nullable: false
  })
  async aggregateTodo(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateTodoArgs): Promise<AggregateTodo> {
    return getPrismaFromContext(ctx).todo.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
