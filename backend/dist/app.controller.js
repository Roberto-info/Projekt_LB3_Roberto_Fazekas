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
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const app_service_1 = require("./app.service");
const ticket_dto_1 = require("./DTOS/ticket.dto");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    async createTicket(name, date, beschreibung) {
        return await this.appService.createTicket({ name, date, beschreibung });
    }
    async getAll() {
        return await this.appService.getAll();
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOkResponse)({ description: 'Sends back a TicketDTO', type: ticket_dto_1.TicketDTO }),
    __param(0, (0, common_1.Body)('name')),
    __param(1, (0, common_1.Body)('date')),
    __param(2, (0, common_1.Body)('beschreibung')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "createTicket", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOkResponse)({
        description: 'creates ticket Objects', type: [ticket_dto_1.TicketDTO],
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getAll", null);
AppController = __decorate([
    (0, common_1.Controller)('tickets'),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map