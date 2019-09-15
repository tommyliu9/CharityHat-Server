import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {MongooseModule} from '@nestjs/mongoose'
import { AuthModule } from './auth/auth.module';
import { InvoiceModule } from './invoice/invoice.module';
import { TransactionsModule } from './transactions/transactions.module';
import { ExpensesModule } from './expenses/expenses.module';
import { RatingsModule } from './ratings/ratings.module';
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/app'), AuthModule, InvoiceModule, 
    TransactionsModule, ExpensesModule, RatingsModule 
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

