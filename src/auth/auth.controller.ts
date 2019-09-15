import { Controller, Get, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.services';
import { ApiModelProperty } from '@nestjs/swagger';

export class Login {

  public username: string;

  public password: string;
  public grantType: string;
}
export class Registration {
    public email: string;
    public username: string;
    public password: string;    
    public clientid: string;
}
@Controller('auth')
export class AuthController {
  constructor(private readonly appService: AuthService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Post('/login')
  async login(@Body() login: Login){
    // console.log("HERE", login.username)
    const value = await this.appService.login(login.username,login.password);
    // console.log(value)
    return value;
  }
  @Post()
  async register(@Body() body: Registration){
      return await this.appService.register(body);

  }
}
