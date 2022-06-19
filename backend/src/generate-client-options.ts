import { INestApplication } from "@nestjs/common";
import { DocumentBuilder } from "@nestjs/swagger";
import { OpenApiNestFactory} from "nest-openapi-tools";

export function generateClient(app: INestApplication) {
    const documentBuilder = new DocumentBuilder().setTitle(
        "TicketTool",
        );
    return OpenApiNestFactory.configure(app, documentBuilder, {
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