import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportSerializer } from "@nestjs/passport";
import { DoneCallback } from "passport";
import { UserService } from "src/user/user.service";

@Injectable()
export class PassportSessionStrategy extends PassportSerializer {
    constructor(private readonly userServce: UserService) {
        super()
    }
    serializeUser(user: any, done: any) {
        done(null, user.id)
    }
    async deserializeUser(id: any, done: any) {
        const validIUser = await this.userServce.findById(id)
        if (!validIUser) throw new UnauthorizedException('No User')
        return done(null, validIUser)
    }
}