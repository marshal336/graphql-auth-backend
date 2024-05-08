import { PassportSerializer } from "@nestjs/passport";
import { UserService } from "src/user/user.service";
export declare class PassportSessionStrategy extends PassportSerializer {
    private readonly userServce;
    constructor(userServce: UserService);
    serializeUser(user: any, done: any): void;
    deserializeUser(id: any, done: any): Promise<any>;
}
