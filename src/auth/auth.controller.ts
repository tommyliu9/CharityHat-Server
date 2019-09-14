import { Controller, Get, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.services';
import { ApiModelProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
export class Login {
  @IsNotEmpty()
  @ApiModelProperty()
  public username: string;
  @IsNotEmpty()
  @ApiModelProperty()
  public password: string;
  @IsNotEmpty()
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
    const value = await this.appService.login(login.username,login.password);
    console.log(value)
    return value;
  }
  @Post()
  async register(@Body() body: Registration){
      return await this.appService.register(body);

  }
}
