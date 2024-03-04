import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutTodosInput } from "../inputs/UserCreateWithoutTodosInput";
import { UserUpdateWithoutTodosInput } from "../inputs/UserUpdateWithoutTodosInput";
import { UserWhereInput } from "../inputs/UserWhereInput";

@TypeGraphQL.InputType("UserUpsertWithoutTodosInput", {})
export class UserUpsertWithoutTodosInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutTodosInput, {
    nullable: false
  })
  update!: UserUpdateWithoutTodosInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutTodosInput, {
    nullable: false
  })
  create!: UserCreateWithoutTodosInput;

  @TypeGraphQL.Field(_type => UserWhereInput, {
    nullable: true
  })
  where?: UserWhereInput | undefined;
}
