import * as mongoose from 'mongoose';
import { Injectable, Post, Param, HttpService } from '@nestjs/common';
import { request } from 'https';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Expenses } from './expenses.interface';

const accountNum = 'lwXKJM';

@Injectable()
export class ExpenseService {
    constructor(@InjectModel("Expenses") private expensesModel: Model<Expenses>,
        private readonly httpService: HttpService) {}

    async createExpense(amount: number, categoryId: number ){
        // console.log('inside create expense')
        const body = this.createExpenseBody(amount, categoryId);
        // console.log(body)
        const config = {
            headers: {
                Authorization: 'Bearer eed02a3ed761f461e032bc6d8b5d46a8ef24b64b9be41e7ac629cb35ce2b0a37'
            }
        };
        // console.log(config);
        const response = await this.httpService.post(
            `https://api.freshbooks.com/accounting/account/${accountNum}/expenses/expenses`,
            body, config
        ).toPromise();
        return response.data.response.result.expense.id;
    }
    createExpenseBody(amount: number, categoryId: number){
        const body = {
            expense: {
                amount: {
                    amount: amount.toString(),
                },
                categoryid: categoryId, 
                staffid: 1, 
                date: "2019-09-14"
            }
        }
        return body;
    }

    async postExpense(npo, amount, categoryId, expenseId){
        const expense = new Expenses(npo, amount, categoryId, expenseId);
        const sendExpense = new this.expensesModel(expense);
        return sendExpense.save();
    }

    async getExpenses(npo: string){
        return await this.expensesModel.find({
            npo
        }).exec();
    }

}