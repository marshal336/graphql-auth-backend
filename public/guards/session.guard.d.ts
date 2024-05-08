import { ExecutionContext } from '@nestjs/common';
declare const SessionLocalAuthGuard_base: import("@nestjs/passport").Type<import("@nestjs/passport").IAuthGuard>;
export declare class SessionLocalAuthGuard extends SessionLocalAuthGuard_base {
    canActivate(context: ExecutionContext): Promise<boolean>;
}
export {};
