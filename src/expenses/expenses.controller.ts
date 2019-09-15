import { Controller, Get, Post, Body, UseGuards, Request, Param } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ExpenseService } from './expenses.services';


export class expensesDTO { 
  public npo: string;
  public amount: number;
  public categoryId: number;
}

@Controller('expenses')
export class ExpenseController {
  constructor(private readonly expenseService: ExpenseService){}


  @Post()
  async postExpense(@Body() body: expensesDTO): Promise<any>{
    const expenseId = await this.expenseService.createExpense(body.amount, body.categoryId);
    // console.log(body.npo, body.amount, body.categoryId)
    return await this.expenseService.postExpense(body.npo, body.amount, body.categoryId, expenseId);
  }

  @Get(':npo')
  async getExpenses(@Param('npo') npo){
    return this.expenseService.getExpenses(npo);
  }


}
