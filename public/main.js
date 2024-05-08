"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_session_1 = __importDefault(require("express-session"));
const passport_1 = __importDefault(require("passport"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const express_1 = __importDefault(require("express"));
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const graphql_upload_ts_1 = require("graphql-upload-ts");
const path_1 = require("path");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({
        credentials: true,
        origin: process.env.ORIGIN,
    });
    app.use('/graphql', (0, graphql_upload_ts_1.graphqlUploadExpress)({ maxFieldSize: 100000 }));
    app.use('/graphql/uploads', express_1.default.static((0, path_1.join)(__dirname, '..', 'uploads')));
    app.use((0, cookie_parser_1.default)());
    app.use((0, express_session_1.default)({
        name: process.env.SESSION_NAME,
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
        cookie: {
            maxAge: 7 * 24 * 60 * 60 * 1000,
            httpOnly: true,
            sameSite: 'strict',
            priority: 'high',
        },
    }));
    app.use(passport_1.default.initialize());
    app.use(passport_1.default.session());
    await app.listen(process.env.PORT ?? 5500);
}
bootstrap();
//# sourceMappingURL=main.js.map