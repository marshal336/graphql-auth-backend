import { Resolver, Mutation, Args, } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { User } from 'src/user/dto/User';
import { UserInputSigIn, UserInputSigUp } from 'src/user/dto/user.input';
import { UseGuards } from '@nestjs/common';
import { LocalGuard } from 'src/guards/local.guard';
import { UserID } from 'src/decorators/user.decorator';
import { SessionLocalAuthGuard } from 'src/guards/session.guard';

@Resolver(() => User)
export class AuthResolver {
  constructor(private readonly authService: AuthService) { }

  @Mutation(() => User)
  async signUp(
    @Args('input') input: UserInputSigUp,) {
    const user = await this.authService.create(input)
    return user
  }

  @Mutation(() => User)
  @UseGuards(LocalGuard, SessionLocalAuthGuard)
  async signIn(
    @UserID() user: User,
    @Args('input') input: UserInputSigIn) {
    return user
  }
}
