import { Resolver, Query, Mutation, Args, Int, Context } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './dto/User';
import { UseGuards } from '@nestjs/common';
import { IsAuthenticated } from 'src/guards/checkauth.guard';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(to => User)
  @UseGuards(IsAuthenticated)
  async getOne(
    @Context() context,
    @Args('id') id: string
  ) {
    return this.userService.findById(id)
  }
}
