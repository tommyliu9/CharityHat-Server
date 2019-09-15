import { Controller, Get, Post, Body, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ExpenseService } from './expenses.services';

export class expensesDTO{ 
  public amount: number;
  public categoryId: number;
}

@Controller('expenses')
export class ExpenseController {
  constructor(private readonly expenseService: ExpenseService){}

  @Get()
  async helloWorld(){
    return "Hello World"
  } 

  @Post()
  async postExpenses(@Body() body: expensesDTO): Promise<any>{
    await this.expenseService.createExpense(body.amount, body.categoryId);
    const res = { 
      statusCode: 200, 
      message: "Correctly posted"
    }
    return res;
  }

}
