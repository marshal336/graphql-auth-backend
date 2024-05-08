import { PrismaService } from 'src/prisma/prisma.service';
import { UserInputSigUp, UserInputUpdate } from './dto/user.input';
export declare class UserService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(input: UserInputSigUp): Promise<{
        id: string;
        email: string;
        username: string;
        password: string;
        profilePicturer: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findById(id: string): Promise<{
        id: string;
        email: string;
        username: string;
        password: string;
        profilePicturer: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findByEmail(email: string): Promise<{
        id: string;
        email: string;
        username: string;
        password: string;
        profilePicturer: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(input: UserInputUpdate, email: string, profilePicturer: any): Promise<{
        id: string;
        email: string;
        username: string;
        password: string;
        profilePicturer: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
