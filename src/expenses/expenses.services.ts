import * as mongoose from 'mongoose';
import { Injectable, Post, Param, HttpService } from '@nestjs/common';
import { request } from 'https';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Expenses } from './expenses.interface';
import { ConfigService } from '../config/config.service';

const accountNum = 'lwXKJM';

@Injectable()
export class ExpenseService {
    constructor(@InjectModel("Expenses") private expensesModel: Model<Expenses>,
        private readonly httpService: HttpService,
        private readonly configService: ConfigService) {}

    async createExpense(amount: number, categoryId: number ){
        // console.log('inside create expense')
        const body = this.createExpenseBody(amount, categoryId);
        // console.log(body)
        const config = {
            headers: {
            Authorization: `Bearer ${this.configService.bearerToken}`
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

    async categoryStringToId(categoryString: string){
        const catStrToId = {
            AccidentInsurance: 881244,
            Accounting: 881250,
            Advertising: 881220,
            Airfare: 881294,
            BankFees: 881200,
            BusinessInsurance: 881198,
            CarTruckExpenses: 881222,
            Commissions: 881216,
            Contractors: 881234,
            Depreciation: 881212,
            Education: 881236,
            Employee: 881238, 
            Entertainment: 881256,
            Equipment: 881284,
            Gas: 881226,
            GasElectrical: 881300,
            Hardware: 881264,
            HealthInsurance: 881240,
            Hotel: 881292,
            InterestMortgage: 881202,
            InterestOther: 881204,
            LegalFees: 881248,
            LifeInsurance: 881242,
            Machinery: 881282,
            Mileage: 881224,
            OfficeExpenses: 881258,
            OfficeSpace: 881286,
            OfficeSupplies: 881260,
            OnlineServices: 881218,
            Packaging: 881270,
            Personal: 881276,
            Phone: 881302,
            Postage: 881268,
            Rent: 881278,
            Repairs: 881228,
            Restaurants: 881254,
            Shipping: 881266,
            Software: 881262,
            Subscriptions: 881214,
            Taxes: 881208,
            Taxi: 881296,
            Utilities: 881298,
            Vehicle: 881230,
            Wages: 881210
        }
        if (categoryString==null){
            return catStrToId;
        } else{
            return catStrToId[categoryString.toString()];
        }
    }

}