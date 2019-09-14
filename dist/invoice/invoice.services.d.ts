import { HttpService } from '@nestjs/common';
export declare class InvoiceService {
    private readonly httpService;
    constructor(httpService: HttpService);
    createInvoice(user: string, amount: number, npo: string): Promise<void>;
    createInvoiceBody(amount: number, customeridentifier: any): {
        email: string;
        customerid: any;
        create_date: string;
        lines: {
            type: number;
            description: string;
            taxName1: string;
            taxAmount1: number;
            name: string;
            qty: number;
            taxName2: string;
            taxAmount2: number;
            unit_cost: {
                amount: string;
                code: string;
            };
        }[];
        presentation: {
            image_logo_src: string;
            theme_primary_color: string;
            theme_layout: string;
            theme_font_name: string;
        };
    };
}
