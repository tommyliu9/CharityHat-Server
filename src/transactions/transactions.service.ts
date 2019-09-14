import { Injectable, Post } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { TransactionSchema } from './transactions.schema';
import { TransactionsController } from './transactions.controller';
import { Model } from 'mongoose';
import { TransactionDTO } from './transactions.dto'
import { Transaction } from './transactions.interface';
import {InvoiceService } from '../invoice/invoice.services'

@Injectable()
export class TransactionsService { 
    constructor(@InjectModel("Transaction") private transactionsModel: Model<Transaction>, private readonly invoiceService: InvoiceService) {}

    async getAllTransactions(npo: string) {
        return await this.transactionsModel.find({
            NPO: npo
        }).exec();
    }

    async getTransactionsByUsername(username: string){
        return await this.transactionsModel.find({
            Username: username
        }).exec();
    }

    async postTransactions(username: string, npo: string, dateSent: Date, amount: number){ 
        const invoiceId: number = await this.invoiceService.createInvoice(username, amount, npo); 
        const sendingTransaction = new TransactionDTO(username, npo, dateSent, amount, invoiceId);
        const transaction = new this.transactionsModel(sendingTransaction);
        return await transaction.save()
    }


}