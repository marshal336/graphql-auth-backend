import { UserService } from './user.service';
import { User } from './dto/User';
import { UserInputUpdate } from './dto/user.input';
export declare class UserResolver {
    private readonly userService;
    constructor(userService: UserService);
    profile(user: User, id: string): Promise<{
        id: string;
        email: string;
        username: string;
        password: string;
        profilePicturer: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    updade(context: any, user: User, input: UserInputUpdate, profilePicturer: any): Promise<{
        id: string;
        email: string;
        username: string;
        password: string;
        profilePicturer: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
