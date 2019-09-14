
import * as mongoose from 'mongoose';
import { Injectable, Post, Param, HttpService } from '@nestjs/common';
import { request } from 'https';
const accountNum = 'lwXKJM';

@Injectable()
export class InvoiceService {
  constructor(private readonly httpService: HttpService){

  }

  async createInvoice(user: string, amount: number, npo: string){
    const body = this.createInvoiceBody(amount, 15450)
    const config = {
      headers:{
      Authorization: 'Bearer eed02a3ed761f461e032bc6d8b5d46a8ef24b64b9be41e7ac629cb35ce2b0a37'
      }
    };
    const response = await this.httpService.
    post(`https://api.freshbooks.com/accounting/account/${accountNum}/invoices/invoices?`, {invoice: body}, config
    ).toPromise();
    const invoiceId = response.data.response.result.invoice.invoiceid;
    const afterRes = await this.httpService.put(
      `https://api.freshbooks.com/accounting/account/${accountNum}/invoices/invoices/${invoiceId}`,
      {invoice: {
        email_subject: "Red Cross is requesting a donation",
        email_recipients: ["whjat@gmail.com"],
        email_body: "PAY UP",
        action_email: true
      }}
    )
    const fufillOrder = await this.httpService.put(
      `https://api.freshbooks.com/accounting/account/${accountNum}/invoices/invoices/${invoiceId}`,
      {
        invoice: {
          status: 2
        }
      },config
    ).toPromise();
    console.log(fufillOrder.data.response.result.invoice);
    console.log(afterRes);
    return invoiceId
  } 
  createInvoiceBody( amount: number, customeridentifier){
      const x = {
          email: "api.freshbooks@gmail.com",
          customerid: customeridentifier,
          create_date: "2019-04-20",
          lines: [ 
              {
                type: 0,
                description: "donation",
                taxName1: "",
				taxAmount1: 0,
				name: "Climbing Helmet",
				qty: 1,
				taxName2: "",
				taxAmount2: 0,
				unit_cost: {
					amount: amount.toString(),
					code: "USD"
				}
            }
          ],
          presentation: {
			image_logo_src: "wef",
			theme_primary_color: "f",
			theme_layout: "simple",
			theme_font_name: "modern"
		}
      }
      return x
  }
}
