import { Injectable, Post, HttpService } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { RegistrationSchema } from './register.schema';
import { Registration } from './auth.controller';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';
import { randomFillSync } from 'crypto';


const accountId = 'lwXKJM';

@Injectable()
export class AuthService {
  constructor(@InjectModel("Auth") private readonly registrationModel: Model<Registration>,
  private readonly jwtService: JwtService,
  private readonly httpService: HttpService
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
    const client = await this.generateClient(registrationDTO.email);
    const config = {
      headers:{
      Authorization: 'Bearer eed02a3ed761f461e032bc6d8b5d46a8ef24b64b9be41e7ac629cb35ce2b0a37'
      }
    };

    const response = await this.httpService.post(
      `https://api.freshbooks.com/accounting/account/${accountId}/users/clients`,
      client,
      config
    
    ).toPromise()
    createRegistration.clientid = response.data.response.result.client.id;
    return await createRegistration.save();
    
  }
  async generateClient(email: string ){
    var random = require('random-name')
    const body = {
      client: {
          fname: random.first(),
          lname: random.last(),
          email: email,
          organization: email,
          vat_name: null,
          vat_number: "",
          status: null,
          note: null,
          home_phone: null,
          userid: null,
          source: null,
          highlight_string: null,
          p_street: "1655 Dupont St. W.",
          p_street2: null,
          p_city: "Toronto",
          p_country: "Canada",
          p_province: "Ontario",
          p_code: "M6P 3T1",
          currency_code: "USD",
          language: "en",
          last_activity: null,
          face: null,
          late_fee: null,
          late_reminders: [],
          contacts: [
              {
                  "email": "email+2@freshbooks.com",
                  "fname": "first2",
                  "lname": "last2",
                  "phone1": null,
                  "userid": null,
                  "face": null
              },
              {
                  "email": "email+3@freshbooks.com",
                  "fname": "first3",
                  "lname": "last3",
                  "phone1": null,
                  "userid": null,
                  "face": null
              }
          ]
      }
    }
    return body;
  } 
}

