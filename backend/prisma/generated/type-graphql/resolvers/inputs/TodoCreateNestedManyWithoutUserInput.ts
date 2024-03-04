import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TodoCreateManyUserInputEnvelope } from "../inputs/TodoCreateManyUserInputEnvelope";
import { TodoCreateOrConnectWithoutUserInput } from "../inputs/TodoCreateOrConnectWithoutUserInput";
import { TodoCreateWithoutUserInput } from "../inputs/TodoCreateWithoutUserInput";
import { TodoWhereUniqueInput } from "../inputs/TodoWhereUniqueInput";

@TypeGraphQL.InputType("TodoCreateNestedManyWithoutUserInput", {})
export class TodoCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [TodoCreateWithoutUserInput], {
    nullable: true
  })
  create?: TodoCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [TodoCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: TodoCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => TodoCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: TodoCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TodoWhereUniqueInput], {
    nullable: true
  })
  connect?: TodoWhereUniqueInput[] | undefined;
}
