import { UserService } from 'src/user/user.service';
import { UserInputSigUp } from 'src/user/dto/user.input';
export declare class AuthService {
    private readonly userService;
    constructor(userService: UserService);
    validateUser(email: string, password: string): Promise<{
        id: string;
        email: string;
        username: string;
        profilePicturer: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    create(input: UserInputSigUp): Promise<{
        id: string;
        email: string;
        username: string;
        password: string;
        profilePicturer: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
