import { Registration } from './auth.controller';
import { Model } from 'mongoose';
export declare class AuthService {
    private readonly registrationModel;
    constructor(registrationModel: Model<Registration>);
    getHello(): string;
    login(username: string, password: string): Promise<any>;
    register(registrationDTO: Registration): Promise<any>;
}
