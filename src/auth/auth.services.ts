import { Injectable, Post } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { RegistrationSchema } from './register.schema';
import { Registration } from './auth.controller';
import { Model } from 'mongoose';


@Injectable()
export class AuthService {
  constructor(@InjectModel("Auth") private readonly registrationModel: Model<Registration>){


  }
  getHello(): string {
    return 'Hello World!';
  }
  async login(username: string, password: string){
    return await this.registrationModel.findOne({username: username, password})
  }
  async register(registrationDTO: Registration){
    const createRegistration = new this.registrationModel(registrationDTO);
    return await createRegistration.save()
    
  }
}
