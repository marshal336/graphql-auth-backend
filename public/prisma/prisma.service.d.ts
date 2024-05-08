import { OnModuleInit } from '@nestjs/common';
import { PrismaClient } from 'prisma/@prisma/client';
export declare class PrismaService extends PrismaClient implements OnModuleInit {
    onModuleInit(): void;
}
