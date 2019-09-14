import { Controller, Get, Post, Body, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { InvoiceService } from './invoice.services';
export class DonationBody{
    public npo: string;
    public amount: number;
}
@Controller('invoice')
export class InvoiceController {
  constructor(private readonly invoiceService: InvoiceService){

  }
  @UseGuards(AuthGuard('jwt'))
  @Post()
  async makeDonation(@Request() req, @Body() body: DonationBody){
    console.log(req.user);
    await this.invoiceService.createInvoice(req.user, body.amount, body.npo);
  } 

  @Get()
  async whatever(){
      return "fewfew";
  }
}
