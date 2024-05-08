"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserID = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
exports.UserID = (0, common_1.createParamDecorator)((_, context) => {
    const req = graphql_1.GqlExecutionContext.create(context).getContext().req;
    return req ? req.user : null;
});
//# sourceMappingURL=user.decorator.js.map