import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as argon from 'argon2'
import { UserInputSigUp } from 'src/user/dto/user.input';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService
  ) {
  }
  async validateUser(email: string, password: string) {
    const { password: pass, ...user } = await this.userService.findByEmail(email)
    const isValidPass = await argon.verify(pass, password)
    if ((!user && !isValidPass) || (!user || !isValidPass)) {
      throw new UnauthorizedException('You not authorize!')
    }
    return user
  }
  async create(input: UserInputSigUp) {
    const exist = await this.userService.findByEmail(input.email)
    if (exist) throw new BadRequestException('User already exist')
    const user = await this.userService.create(input)
    return user
  }

}
