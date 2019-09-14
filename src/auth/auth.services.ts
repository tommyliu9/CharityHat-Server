import { Injectable, Post } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { RegistrationSchema } from './register.schema';
import { Registration } from './auth.controller';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';




@Injectable()
export class AuthService {
  constructor(@InjectModel("Auth") private readonly registrationModel: Model<Registration>,
  private readonly jwtService: JwtService
  ){


  }
  getHello(): string {
    return 'Hello World!';
  }
  async login(username: string, password: string){
    const person = await this.validateUser(username,password)
    if(null){
      return ""
    }
    const payload = { username: username};
    return {access_token: await this.jwtService.sign(payload)}
    
  }
  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.registrationModel.findOne({username, password:pass});
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async register(registrationDTO: Registration){
    const createRegistration = new this.registrationModel(registrationDTO);
    return await createRegistration.save()
    
  }
}
