import { Resolver, Mutation, Args, Context, Query } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './dto/User';
import { UseGuards } from '@nestjs/common';
import { IsAuthenticated } from 'src/guards/checkauth.guard';
import { UserID } from 'src/decorators/user.decorator';
import { UserInputUpdate } from './dto/user.input';
import { GraphQLUpload } from 'graphql-upload-ts';
import { createWriteStream, existsSync, mkdirSync } from 'fs';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) { }

  @Query(returns => User)
  @UseGuards(IsAuthenticated)
  async profile(
    @UserID() user: User,
    @Args('id') id: string
  ) {
    return await this.userService.findById(id)
  }

  @Mutation(returns => User)
  @UseGuards(IsAuthenticated)
  async updade(
    @Context() context: any,
    @UserID() user: User,
    @Args('input') input: UserInputUpdate,
    @Args({ name: 'profilePicturer', type: () => GraphQLUpload }) profilePicturer: any
  ) {
    const { filename, createReadStream } = await profilePicturer
    if(filename) {
      const dir = 'uploads'
      if(!existsSync(dir)) {
        mkdirSync(dir)
      }
      createReadStream().pipe(createWriteStream(`${dir}/${filename}`))
    }
    return await this.userService.update(input, user.email, '')
  }
}