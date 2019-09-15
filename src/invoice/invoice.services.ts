import * as mongoose from 'mongoose';
import { Injectable, Post, Param, HttpService } from '@nestjs/common';
import { request } from 'https';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Registration } from 'src/auth/auth.controller';
import { ConfigService } from '../config/config.service';
const accountNum = 'lwXKJM';

@Injectable()
export class InvoiceService {
  constructor(private readonly httpService: HttpService,
    @InjectModel("Auth") private readonly registrationModel: Model<Registration>,
    private readonly configService: ConfigService){

  }

  async createInvoice(user: string, amount: number, npo: string){
    var token;
    if(npo === "redcross"){
      token = this.configService.npo1;
    }
    else{
      token = this.configService.npo2;
    }
    const model = await this.registrationModel.findOne({
      username: user
    });
    // console.log(model);
    // console.log("HERE",model.clientid);
    const body = this.createInvoiceBody(amount, model.clientid);
    const config = {
      headers:{
      Authorization: `Bearer ${token}`
      }
    };
    const response = await this.httpService.post(`https://api.freshbooks.com/accounting/account/${accountNum}/invoices/invoices?`, {invoice: body}, config).toPromise();
    console.log(response.data.response);
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
    const actuallyfufillOrder = await this.httpService.post(
      `https://api.freshbooks.com/accounting/account/${accountNum}/payments/payments`,
      {
        payment:{
          invoiceid: invoiceId,
          amount: {
            amount: amount.toString()
          },
          date: "2019-10-19",
          type: "Check",
          note: "Paid in full"
        }
      },
      config
    ).toPromise();

    // console.log(fufillOrder.data.response.result.invoice);
    // console.log(afterRes);
    return invoiceId
  } 
  createInvoiceBody( amount: number, customeridentifier){
      const x = {
          email: "api.freshbooks@gmail.com",
          customerid: customeridentifier,
          create_date: "2019-09-20",
          lines: [ 
              {
                type: 0,
                description: "donation",
                taxName1: "",
				taxAmount1: 0,
				name: "Donation",
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
