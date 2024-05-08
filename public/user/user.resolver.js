"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const user_service_1 = require("./user.service");
const User_1 = require("./dto/User");
const common_1 = require("@nestjs/common");
const checkauth_guard_1 = require("../guards/checkauth.guard");
const user_decorator_1 = require("../decorators/user.decorator");
const user_input_1 = require("./dto/user.input");
const graphql_upload_ts_1 = require("graphql-upload-ts");
const fs_1 = require("fs");
let UserResolver = class UserResolver {
    constructor(userService) {
        this.userService = userService;
    }
    async profile(user, id) {
        return await this.userService.findById(id);
    }
    async updade(context, user, input, profilePicturer) {
        const { filename, createReadStream } = await profilePicturer;
        if (filename) {
            const dir = 'uploads';
            if (!(0, fs_1.existsSync)(dir)) {
                (0, fs_1.mkdirSync)(dir);
            }
            createReadStream().pipe((0, fs_1.createWriteStream)(`${dir}/${filename}`));
        }
        return await this.userService.update(input, user.email, filename);
    }
};
exports.UserResolver = UserResolver;
__decorate([
    (0, graphql_1.Query)(returns => User_1.User),
    (0, common_1.UseGuards)(checkauth_guard_1.IsAuthenticated),
    __param(0, (0, user_decorator_1.UserID)()),
    __param(1, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [User_1.User, String]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "profile", null);
__decorate([
    (0, graphql_1.Mutation)(returns => User_1.User),
    (0, common_1.UseGuards)(checkauth_guard_1.IsAuthenticated),
    __param(0, (0, graphql_1.Context)()),
    __param(1, (0, user_decorator_1.UserID)()),
    __param(2, (0, graphql_1.Args)('input')),
    __param(3, (0, graphql_1.Args)({ name: 'profilePicturer', type: () => graphql_upload_ts_1.GraphQLUpload })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, User_1.User,
        user_input_1.UserInputUpdate, Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "updade", null);
exports.UserResolver = UserResolver = __decorate([
    (0, graphql_1.Resolver)(() => User_1.User),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserResolver);
//# sourceMappingURL=user.resolver.js.map