import { AuthService } from './auth.service';
import { User } from 'src/user/dto/User';
import { UserInputSigIn, UserInputSigUp } from 'src/user/dto/user.input';
export declare class AuthResolver {
    private readonly authService;
    constructor(authService: AuthService);
    signUp(input: UserInputSigUp): Promise<{
        id: string;
        email: string;
        username: string;
        password: string;
        profilePicturer: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    signIn(user: User, input: UserInputSigIn): Promise<User>;
}
