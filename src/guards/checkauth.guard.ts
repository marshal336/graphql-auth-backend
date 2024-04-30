import {
    Injectable,
    CanActivate,
    ExecutionContext,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

@Injectable()
export class IsAuthenticated implements CanActivate {
    async canActivate(context: ExecutionContext) {
        const ctxReq = GqlExecutionContext.create(context).getContext().req;
        return ctxReq.isAuthenticated();
    }
}