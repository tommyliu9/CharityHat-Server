import { Registration } from './auth.controller';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private readonly registrationModel;
    private readonly jwtService;
    constructor(registrationModel: Model<Registration>, jwtService: JwtService);
    getHello(): string;
    login(username: string, password: string): Promise<"" | {
        access_token: string;
    }>;
    validateUser(username: string, pass: string): Promise<any>;
    register(registrationDTO: Registration): Promise<any>;
}
