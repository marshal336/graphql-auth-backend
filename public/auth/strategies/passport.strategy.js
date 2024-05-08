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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PassportSessionStrategy = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const user_service_1 = require("../../user/user.service");
let PassportSessionStrategy = class PassportSessionStrategy extends passport_1.PassportSerializer {
    constructor(userServce) {
        super();
        this.userServce = userServce;
    }
    serializeUser(user, done) {
        done(null, user.id);
    }
    async deserializeUser(id, done) {
        const validIUser = await this.userServce.findById(id);
        if (!validIUser)
            throw new common_1.UnauthorizedException('No User');
        return done(null, validIUser);
    }
};
exports.PassportSessionStrategy = PassportSessionStrategy;
exports.PassportSessionStrategy = PassportSessionStrategy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_service_1.UserService])
], PassportSessionStrategy);
//# sourceMappingURL=passport.strategy.js.map