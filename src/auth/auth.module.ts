import { Module } from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose'
import { AuthController } from './auth.controller';
import { AuthService } from './auth.services';
import { RegistrationSchema } from './register.schema';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
export const jwtConstants = {
  secret: 'secretKey',
};
@Module({
  imports: [
  MongooseModule.forFeature([{ name: 'Auth', schema: RegistrationSchema}]),
  JwtModule.register({
    secret: jwtConstants.secret,
    signOptions: { expiresIn: 604800 },
  }),],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
})
export class AuthModule {}

