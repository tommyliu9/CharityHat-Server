import { Module } from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose'
import { TransactionsController } from './transactions.controller';
import { TransactionsService } from './transactions.service';
import { TransactionSchema } from './transactions.schema';
import { InvoiceModule } from '../invoice/invoice.module';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Transaction', schema: TransactionSchema}]),
    InvoiceModule,
  ],
  controllers: [TransactionsController],
  providers: [TransactionsService],
})
export class TransactionsModule {}

