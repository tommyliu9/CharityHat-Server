import { Module, HttpModule } from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import { ExpenseService } from './expenses.services';
import { ExpenseController } from './expenses.controller';
import { ExpensesSchema } from './expenses.schema';
import { ConfigModule } from '../config/config.module';

@Module({
  imports: [
  MongooseModule.forFeature([{ name: 'Expenses', schema: ExpensesSchema},]),
  HttpModule.register({
    timeout: 5000,
    maxRedirects: 5,
  }),
  ConfigModule
  ],
  controllers: [ExpenseController],
  providers: [ExpenseService],
  exports: [ExpenseService]
})
export class ExpensesModule {}

