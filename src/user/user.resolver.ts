import { Resolver, Mutation, Args, Int, Context, Query } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './dto/User';
import { UseGuards } from '@nestjs/common';
import { IsAuthenticated } from 'src/guards/checkauth.guard';
import { UserID } from 'src/decorators/user.decorator';
import { Request } from 'express';
import { UserInputUpdate } from './dto/user.input';
// import { UserInputUpdate } from './dto/user.input';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) { }

  @Query(returns => User)
  @UseGuards(IsAuthenticated)
  async profile(
    @UserID() user: User,
    @Args('id') id: string
  ) { 
    return await this.userService.findById(user.id)
  }

  @Mutation(returns => User)
  @UseGuards(IsAuthenticated)
  async updatde(
    @Context() context: any,
    @UserID() user: User,
    @Args('input') input: UserInputUpdate
  ) {
    return await this.userService.update(input, user.id)
  }
}
