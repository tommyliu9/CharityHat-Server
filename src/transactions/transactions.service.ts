import { Injectable, Post } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { TransactionSchema } from './transactions.schema';
import { TransactionsController } from './transactions.controller';
import { Model } from 'mongoose';
import { TransactionDTO } from './transactions.dto'
import { Transaction } from './transactions.interface';

@Injectable()
export class TransactionsService { 
    constructor(@InjectModel("Transaction") private transactionsModel: Model<Transaction>) {}

    async getAllTransactions(receiver: string) {
        return await this.transactionsModel.find({
            receiver
        }).exec();
    }

    async postTransactions(transactionDTO: TransactionDTO){ 
        const transaction = new this.transactionsModel(transactionDTO);
        return await transaction.save()
    }

    

}