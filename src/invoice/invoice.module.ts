import { Module } from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import { InvoiceService } from './invoice.services';
import { InvoiceController } from './invoice.controller';
@Module({
  imports: [],
  controllers: [InvoiceController],
  providers: [InvoiceService],
})
export class InvoiceModule {}

