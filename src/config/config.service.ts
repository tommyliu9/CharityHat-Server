import * as dotenv from 'dotenv';
import * as fs from 'fs';
import * as Joi from 'joi';

export type NODE_ENV = 'development' | 'production' | 'test' | 'provision';

export interface EnvConfig {
  [key: string]: string;
}

export interface ValidatedEnvConfig {
  NODE_ENV: NODE_ENV;
  NPO1_AUTH_TOKEN: string;
  NPO2_AUTH_TOKEN: string;

}

export class ConfigService {
  private readonly envConfig: ValidatedEnvConfig;
  private accessToken: string ;
  constructor(filePath: string) {
    const config = dotenv.parse(fs.readFileSync(filePath));
    this.envConfig = this.validateInput(config);
  }
  public bearerToken(token: string){
    this.accessToken = token;
  }


  public get npo1(): string {
    return this.envConfig.NPO1_AUTH_TOKEN;
  }

  public get npo2(): string {
    return this.envConfig.NPO2_AUTH_TOKEN;
  }

  private validateInput(envConfig: EnvConfig): ValidatedEnvConfig {
    const envVarsSchema: Joi.ObjectSchema = Joi.object({
      NODE_ENV: Joi.string()
        .valid(['development', 'production', 'test', 'provision'])
        .default('development'),
      NPO1_AUTH_TOKEN: Joi.string().required(),
      NPO2_AUTH_TOKEN: Joi.string().required(),
    });

    const { error, value: validatedEnvConfig } = Joi.validate<
      ValidatedEnvConfig
    >((envConfig as unknown) as ValidatedEnvConfig, envVarsSchema, {
      allowUnknown: true,
    });
    if (error) {
      throw new Error(`Config validation error: ${error.message}`);
    }
    return validatedEnvConfig;
  }
}
