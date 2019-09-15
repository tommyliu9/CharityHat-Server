import { Controller } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { TransactionDTO } from './transactions.dto';
import { Post, Put, Get, Delete, Body, Param } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';



@Controller('transactions')
export class TransactionsController {
    constructor(private transactionsService: TransactionsService){}

    @Get('npo/:npo')
    async getAllTransactions(@Param('npo') npo): Promise<TransactionDTO[]> {
        return this.transactionsService.getAllTransactions(npo);
    }

    @Get('user/:username')
    async getTransactionsByUsername(@Param('username') username): Promise <any> { 
        return this.transactionsService.getTransactionsByUsername(username);
    }

    @Post()
    async postTransaction(@Body() body: TransactionDTO): Promise<any> { 
        const { username, npo, dateSent, amount } = body;
        return this.transactionsService.postTransactions(username, npo, dateSent, amount);
    }

}