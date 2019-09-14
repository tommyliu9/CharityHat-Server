import { InvoiceService } from './invoice.services';
export declare class DonationBody {
    npo: string;
    amount: number;
}
export declare class InvoiceController {
    private readonly invoiceService;
    constructor(invoiceService: InvoiceService);
    makeDonation(req: any, body: DonationBody): Promise<void>;
    whatever(): Promise<string>;
}
