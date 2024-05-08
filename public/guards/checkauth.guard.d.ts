import { CanActivate, ExecutionContext } from '@nestjs/common';
export declare class IsAuthenticated implements CanActivate {
    canActivate(context: ExecutionContext): Promise<any>;
}
