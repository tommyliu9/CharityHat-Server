import * as mongoose from 'mongoose';
import { Injectable, Post, Param, HttpService } from '@nestjs/common';
import { request } from 'https';
const accountNum = 'lwXKJM';

@Injectable()
export class ExpenseService {
    constructor(private readonly httpService: HttpService) {}

    async createExpense(amount: number, categoryId: number ){
        const body = this.createExpenseBody(amount, categoryId);
        const config = {
            headers:{
                Authorization: 'Bearer eed02a3ed761f461e032bc6d8b5d46a8ef24b64b9be41e7ac629cb35ce2b0a37'
            }
        };
        const response = await this.httpService.post(
            `https://api.freshbooks.com/accounting/account/${accountNum}/expenses/expenses`,
            {expense: body}, config
        ).toPromise();

        return response.data.response.result.expense.id;
    }
    createExpenseBody(amount: number, categoryId: number){
        const body = {
            expense: {
                amount: {
                    amount: amount,
                },
                categoryId: categoryId, 
                staffId: 1, 
                date: new Date()
            }
        }
        
        return body;
    }
}