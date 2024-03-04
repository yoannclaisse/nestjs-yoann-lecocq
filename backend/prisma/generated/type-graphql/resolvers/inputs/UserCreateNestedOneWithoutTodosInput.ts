import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutTodosInput } from "../inputs/UserCreateOrConnectWithoutTodosInput";
import { UserCreateWithoutTodosInput } from "../inputs/UserCreateWithoutTodosInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutTodosInput", {})
export class UserCreateNestedOneWithoutTodosInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutTodosInput, {
    nullable: true
  })
  create?: UserCreateWithoutTodosInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutTodosInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutTodosInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
