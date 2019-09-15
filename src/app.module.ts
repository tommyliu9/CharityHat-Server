import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {MongooseModule} from '@nestjs/mongoose'
import { AuthModule } from './auth/auth.module';
import { InvoiceModule } from './invoice/invoice.module';
import { TransactionsModule } from './transactions/transactions.module';
import { ConfigModule } from './config/config.module';
@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/app1'), AuthModule, InvoiceModule, TransactionsModule, ConfigModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

