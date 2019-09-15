import { Controller, Get, Post, Body, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ExpenseService } from './expenses.services';

@Controller('expenses')
export class ExpenseController {
  constructor(private readonly expenseService: ExpenseService){}

  @Get()
  async helloWorld(){
    return "Hello World"
  } 

}
