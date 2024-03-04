import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TodoCreateManyUserInputEnvelope } from "../inputs/TodoCreateManyUserInputEnvelope";
import { TodoCreateOrConnectWithoutUserInput } from "../inputs/TodoCreateOrConnectWithoutUserInput";
import { TodoCreateWithoutUserInput } from "../inputs/TodoCreateWithoutUserInput";
import { TodoScalarWhereInput } from "../inputs/TodoScalarWhereInput";
import { TodoUpdateManyWithWhereWithoutUserInput } from "../inputs/TodoUpdateManyWithWhereWithoutUserInput";
import { TodoUpdateWithWhereUniqueWithoutUserInput } from "../inputs/TodoUpdateWithWhereUniqueWithoutUserInput";
import { TodoUpsertWithWhereUniqueWithoutUserInput } from "../inputs/TodoUpsertWithWhereUniqueWithoutUserInput";
import { TodoWhereUniqueInput } from "../inputs/TodoWhereUniqueInput";

@TypeGraphQL.InputType("TodoUpdateManyWithoutUserNestedInput", {})
export class TodoUpdateManyWithoutUserNestedInput {
  @TypeGraphQL.Field(_type => [TodoCreateWithoutUserInput], {
    nullable: true
  })
  create?: TodoCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [TodoCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: TodoCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [TodoUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: TodoUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => TodoCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: TodoCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TodoWhereUniqueInput], {
    nullable: true
  })
  set?: TodoWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TodoWhereUniqueInput], {
    nullable: true
  })
  disconnect?: TodoWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TodoWhereUniqueInput], {
    nullable: true
  })
  delete?: TodoWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TodoWhereUniqueInput], {
    nullable: true
  })
  connect?: TodoWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TodoUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: TodoUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [TodoUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: TodoUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [TodoScalarWhereInput], {
    nullable: true
  })
  deleteMany?: TodoScalarWhereInput[] | undefined;
}
