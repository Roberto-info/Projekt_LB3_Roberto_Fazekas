import { MysqlConnectionOptions } from "typeorm/driver/mysql/MysqlConnectionOptions";
import { Ticket } from "./entities/ticket.entity";

const config: MysqlConnectionOptions = {
    type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      database: 'ticketDB',
      synchronize: false,
      dropSchema: false,
      entities: [
        Ticket
      ]
}

export default config;