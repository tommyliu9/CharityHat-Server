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
import { throwStatement } from '@babel/types';

export class TransactionDTO { 
    constructor(username, npo, dateSent, amount, invoiceId){
      this.username = username;
      this.npo = npo;
      this.dateSent = dateSent; 
      this.amount = amount; 
      this.invoiceId = invoiceId;
    }

    public username!: string;
    public npo!: string;
    public dateSent!: Date;
    public amount!: number;
    public invoiceId: number;
}

