"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateClient = void 0;
const swagger_1 = require("@nestjs/swagger");
const nest_openapi_tools_1 = require("nest-openapi-tools");
function generateClient(app) {
    const documentBuilder = new swagger_1.DocumentBuilder().setTitle("TicketTool");
    return nest_openapi_tools_1.OpenApiNestFactory.configure(app, documentBuilder, {
        fileGeneratorOptions: {
            enabled: true,
            outputFilePath: './ticket-api-spec.yaml',
        },
        clientGeneratorOptions: {
            enabled: true,
            type: 'typescript-angular',
            outputFolderPath: '../frontend/src',
            additionalProperties: [
                'apiModulePrefix=TicketTool',
                'configurationPrefix=TicketTool',
                'fileNaming=camelCase',
                'enumNameSuffix=""',
                'withoutPrefixEnums=true',
                'stringEnums=true',
            ].join(','),
            openApiFilePath: './ticket-api-spec.yaml'
        },
    });
}
exports.generateClient = generateClient;
//# sourceMappingURL=generate-client-options.js.map