import { Module } from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import { InvoiceSchema } from './invoice.services';
@Module({
  imports: [
  MongooseModule.forFeature([{ name: 'Auth', schema: InvoiceSchema}])],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}

