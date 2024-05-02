import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserInputSigUp, UserInputUpdate, } from './dto/user.input';
import * as argon from 'argon2'

@Injectable()
export class UserService {
  constructor(
    private readonly prisma: PrismaService,
  ) { }

  async create(input: UserInputSigUp) {
    const user = await this.prisma.user.create({
      data: {
        email: input.email,
        username: input.username,
        password: await argon.hash(input.password)
      }
    })
    return user
  }
  async findById(id: string) {
    const user = this.prisma.user.findFirst({ where: { id } })
    return user
  }
  async findByEmail(email: string) {
    const user = this.prisma.user.findFirst({ where: { email } })
    return user
  }
  async update(input: UserInputUpdate, email: string, profilePicturer: any) {
    const exist = await this.prisma.user.findFirst({ where: { email: input.email } })
    if (exist) {
      const user = await this.prisma.user.update({
        where: { email },
        data: {
          email: input.email,
          username: input.username,
          password: input?.password ? await argon.hash(input.password) : exist.password,
          profilePicturer: profilePicturer ? `http://localhost:5500/graphql/uploads/${profilePicturer}` : null
        }
      })
      return user
    }
    return null
  }
}
