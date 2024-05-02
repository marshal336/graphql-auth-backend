import { InputType, Field, } from '@nestjs/graphql';

@InputType()
export class UserInputSigIn {
  @Field()
  email: string;
  @Field()
  password: string;
}

@InputType()
export class UserInputSigUp {
  @Field()
  email: string;
  @Field()
  username: string;
  @Field()
  password: string;
}

@InputType()
export class UserInputUpdate {

  @Field({ nullable: true })
  username: string

  @Field({ nullable: true })
  email: string

  @Field({ nullable: true })
  password: string

}
