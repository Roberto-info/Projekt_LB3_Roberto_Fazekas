import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Ticket } from './entities/ticket.entity';
import Config from './typeormconf';

@Module({
  imports: [TypeOrmModule.forRoot(Config), TypeOrmModule.forFeature([Ticket])],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
