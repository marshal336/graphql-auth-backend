import { Field, ID, ObjectType, } from "@nestjs/graphql";


@ObjectType()
export class User {
    @Field(type => ID)
    id: string

    @Field()
    username: string

    @Field()
    email: string

    @Field()
    password: string

    @Field({ nullable: true })
    profilePicturer: string

    @Field()
    createdAt: string
    @Field()
    updatedAt: string
}