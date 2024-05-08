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
exports.UserInputUpdate = exports.UserInputSigUp = exports.UserInputSigIn = void 0;
const graphql_1 = require("@nestjs/graphql");
let UserInputSigIn = class UserInputSigIn {
};
exports.UserInputSigIn = UserInputSigIn;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], UserInputSigIn.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], UserInputSigIn.prototype, "password", void 0);
exports.UserInputSigIn = UserInputSigIn = __decorate([
    (0, graphql_1.InputType)()
], UserInputSigIn);
let UserInputSigUp = class UserInputSigUp {
};
exports.UserInputSigUp = UserInputSigUp;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], UserInputSigUp.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], UserInputSigUp.prototype, "username", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], UserInputSigUp.prototype, "password", void 0);
exports.UserInputSigUp = UserInputSigUp = __decorate([
    (0, graphql_1.InputType)()
], UserInputSigUp);
let UserInputUpdate = class UserInputUpdate {
};
exports.UserInputUpdate = UserInputUpdate;
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UserInputUpdate.prototype, "username", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UserInputUpdate.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UserInputUpdate.prototype, "password", void 0);
exports.UserInputUpdate = UserInputUpdate = __decorate([
    (0, graphql_1.InputType)()
], UserInputUpdate);
//# sourceMappingURL=user.input.js.map