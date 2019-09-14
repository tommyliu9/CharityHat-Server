import { Controller, Get, Post, Body, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { InvoiceService } from './invoice.services';
export class DonationBody{
    public username: string;
    public npo: string;
    public amount: number;
}
@Controller('invoice')
export class InvoiceController {
  constructor(private readonly invoiceService: InvoiceService){

  }

  @Post()
  async makeDonation(@Body() body: DonationBody){
    await this.invoiceService.createInvoice(body.username, body.amount, body.npo);
  } 

  @Get()
  async whatever(){
      return "fewfew";
  }
}
