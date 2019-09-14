import { Controller } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { TransactionDTO } from './transactions.dto';
import { Post, Put, Get, Delete, Body, Param } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';



@Controller('transactions')
export class TransactionsController {
    constructor(private transactionsService: TransactionsService){}

    @Get(':receiver')
    async getAllTransactions(@Param('receiver') receiver): Promise<TransactionDTO[]> {
        return this.transactionsService.getAllTransactions(receiver);
    }

    @Post()
    async postTransaction(@Body() body: TransactionDTO): Promise<any> { 
        return this.transactionsService.postTransactions(body);
    }

}