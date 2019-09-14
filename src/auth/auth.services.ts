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
    const client = this.generateClient(registrationDTO.email);
    
    return await createRegistration.save()
    
  }
  async generateClient(email: string, ){
    const body = {
      client: {
          fname: "first1",
          lname: "last1",
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
  } 
}

