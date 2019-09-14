"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const accountNum = 'lwXKJM';
let InvoiceService = class InvoiceService {
    constructor(httpService) {
        this.httpService = httpService;
    }
    async createInvoice(user, amount, npo) {
        const body = this.createInvoiceBody(amount, 15450);
        const config = {
            headers: {
                Authorization: 'Bearer eed02a3ed761f461e032bc6d8b5d46a8ef24b64b9be41e7ac629cb35ce2b0a37'
            }
        };
        const response = await this.httpService.
            post(`https://api.freshbooks.com/accounting/account/${accountNum}/invoices/invoices?`, { invoice: body }, config).toPromise();
        const invoiceId = response.data.response.result.invoice.invoiceid;
        const afterRes = await this.httpService.put(`https://api.freshbooks.com/accounting/account/${accountNum}/invoices/invoices/${invoiceId}`, { invoice: {
                email_subject: "Red Cross is requesting a donation",
                email_recipients: ["whjat@gmail.com"],
                email_body: "PAY UP",
                action_email: true
            } });
        const fufillOrder = await this.httpService.put(`https://api.freshbooks.com/accounting/account/${accountNum}/invoices/invoices/${invoiceId}`, {
            invoice: {
                status: 2
            }
        }, config).toPromise();
        console.log(fufillOrder.data.response.result.invoice);
        console.log(afterRes);
    }
    createInvoiceBody(amount, customeridentifier) {
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
        };
        return x;
    }
};
InvoiceService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [common_1.HttpService])
], InvoiceService);
exports.InvoiceService = InvoiceService;
//# sourceMappingURL=invoice.services.js.map