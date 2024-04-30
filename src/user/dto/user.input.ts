import { InputType, Int, Field, } from '@nestjs/graphql';

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
