"use strict";
<<<<<<< HEAD
<<<<<<< refs/remotes/origin/master
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.InvoiceSchema = new mongoose.Schema({
    amount: Number,
    npo: String
});
=======
=======
>>>>>>> invoice
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
let InvoiceService = class InvoiceService {
    async createInvoice(user, amount, npo) {
        const x = this.createInvoiceBody(amount, 15450);
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
    }
};
InvoiceService = __decorate([
    common_1.Injectable()
], InvoiceService);
exports.InvoiceService = InvoiceService;
<<<<<<< HEAD
>>>>>>> auth guard implemented
=======
>>>>>>> invoice
//# sourceMappingURL=invoice.services.js.map