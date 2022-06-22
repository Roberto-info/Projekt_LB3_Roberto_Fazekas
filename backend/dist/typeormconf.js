"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ticket_entity_1 = require("./entities/ticket.entity");
const config = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    database: 'ticketDB',
    synchronize: false,
    dropSchema: false,
    entities: [
        ticket_entity_1.Ticket
    ]
};
exports.default = config;
//# sourceMappingURL=typeormconf.js.map