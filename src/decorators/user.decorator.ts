import { ExecutionContext, createParamDecorator } from "@nestjs/common";
import { User } from '../../prisma/@prisma/client'
import { GqlExecutionContext } from "@nestjs/graphql";


export const UserID = createParamDecorator(
    (_: unknown, context: ExecutionContext) => {
        const req = GqlExecutionContext.create(context).getContext().req
        return req ? req.user : null
    }
)