import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutTodosInput } from "../inputs/UserCreateOrConnectWithoutTodosInput";
import { UserCreateWithoutTodosInput } from "../inputs/UserCreateWithoutTodosInput";
import { UserUpdateToOneWithWhereWithoutTodosInput } from "../inputs/UserUpdateToOneWithWhereWithoutTodosInput";
import { UserUpsertWithoutTodosInput } from "../inputs/UserUpsertWithoutTodosInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutTodosNestedInput", {})
export class UserUpdateOneRequiredWithoutTodosNestedInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutTodosInput, {
    nullable: true
  })
  create?: UserCreateWithoutTodosInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutTodosInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutTodosInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutTodosInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutTodosInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateToOneWithWhereWithoutTodosInput, {
    nullable: true
  })
  update?: UserUpdateToOneWithWhereWithoutTodosInput | undefined;
}
