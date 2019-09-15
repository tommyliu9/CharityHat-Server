import { Module, HttpModule } from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import { ExpenseService } from './expenses.services';
import { ExpenseController } from './expenses.controller';
import { ExpensesSchema } from './expenses.schema';

@Module({
  imports: [
  MongooseModule.forFeature([{ name: 'Expenses', schema: ExpensesSchema}]),
  HttpModule.register({
    timeout: 5000,
    maxRedirects: 5,
  })
  ],
  controllers: [ExpenseController],
  providers: [ExpenseService],
  exports: [ExpenseService]
})
export class ExpensesModule {}

