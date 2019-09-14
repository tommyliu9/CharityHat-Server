import { AuthService } from './auth.services';
export declare class Login {
    username: string;
    password: string;
    grantType: string;
}
export declare class Registration {
    email: string;
    username: string;
    password: string;
}
export declare class AuthController {
    private readonly appService;
    constructor(appService: AuthService);
    getHello(): string;
    login(login: Login): Promise<"" | {
        access_token: string;
    }>;
    register(body: Registration): Promise<any>;
}
