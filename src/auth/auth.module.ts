import { Module, HttpModule } from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose'
import { AuthController } from './auth.controller';
import { AuthService } from './auth.services';
import { RegistrationSchema } from './register.schema';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { ConfigModule } from '../config/config.module';
export const jwtConstants = {
  secret: 'secretKey',
};
@Module({
  imports: [
  MongooseModule.forFeature([{ name: 'Auth', schema: RegistrationSchema}]),
  JwtModule.register({
    secret: jwtConstants.secret,
    signOptions: { expiresIn: 604800 },
  }),
  HttpModule.register({
    timeout: 5000,
    maxRedirects: 5,
  }),
ConfigModule],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
})
export class AuthModule {}

