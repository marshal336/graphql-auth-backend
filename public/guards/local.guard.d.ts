import { ExecutionContext } from '@nestjs/common';
declare const LocalGuard_base: import("@nestjs/passport").Type<import("@nestjs/passport").IAuthGuard>;
export declare class LocalGuard extends LocalGuard_base {
    constructor();
    getRequest(context: ExecutionContext): any;
}
export {};
