"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const generate_client_options_1 = require("./generate-client-options");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    await (0, generate_client_options_1.generateClient)(app);
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map