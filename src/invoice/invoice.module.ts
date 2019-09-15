import { Module, HttpModule } from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import { InvoiceService } from './invoice.services';
import { InvoiceController } from './invoice.controller';
import { RegistrationSchema } from '../auth/register.schema';
import { ConfigModule } from '../config/config.module';
@Module({
  imports: [HttpModule.register({
    timeout: 5000,
    maxRedirects: 5,
  }),MongooseModule.forFeature([{ name: 'Auth', schema: RegistrationSchema}]), ConfigModule],
  controllers: [InvoiceController],
  providers: [InvoiceService],
  exports: [InvoiceService]
})
export class InvoiceModule {}

