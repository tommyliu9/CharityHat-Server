import { Type } from 'class-transformer';
import {
  IsDate,
  IsDefined,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  ValidateNested,
} from 'class-validator';

export class TransactionDTO { 
    @IsDefined()
    @IsString()
    public firstName!: string;

    @IsDefined()
    @IsString()
    public lastName!: string;

    @IsDefined()
    @IsString()
    public receiver!: string;

    @IsDefined()
    @IsDate()
    public dateSent!: Date;

    @IsDefined()
    @IsNumber()
    public amount!: number;
}

