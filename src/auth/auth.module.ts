import { Module } from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose'
import { AuthController } from './auth.controller';
import { AuthService } from './auth.services';
import { RegistrationSchema } from './register.schema';
@Module({
  imports: [
  MongooseModule.forFeature([{ name: 'Auth', schema: RegistrationSchema}])],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}

