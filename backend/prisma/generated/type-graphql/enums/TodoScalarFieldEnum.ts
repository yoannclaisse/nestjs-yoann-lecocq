import * as TypeGraphQL from "type-graphql";

export enum TodoScalarFieldEnum {
  id = "id",
  title = "title",
  description = "description",
  completed = "completed",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  userId = "userId"
}
TypeGraphQL.registerEnumType(TodoScalarFieldEnum, {
  name: "TodoScalarFieldEnum",
  description: undefined,
});
