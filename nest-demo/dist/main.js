"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const config_1 = require("@nestjs/config");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const configService = app.get(config_1.ConfigService);
    const PORT = configService.get('PORT', 9000);
    const HOST = configService.get('HOST', 'localhost');
    await app.listen(PORT, () => {
        console.log(`服务已经启动,接口请访问:http://wwww.${HOST}:${PORT}`);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map