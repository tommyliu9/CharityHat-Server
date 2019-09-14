
import * as mongoose from 'mongoose';
import { Injectable } from '@nestjs/common';


@Injectable()
export class InvoiceService {
  

  async createInvoice(user: string, amount: number, npo: string){
    const x = this.createInvoiceBody(amount, 15450)
  }
  createInvoiceBody(amount: number, customeridentifier){
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
  }
}
