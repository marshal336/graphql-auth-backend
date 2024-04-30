import { InputType, Field, Int, ID } from '@nestjs/graphql';

@InputType()
export class UserQuery {
  @Field(() => ID)
  id: string;

  @Field({ nullable: true })
  username: string
}
