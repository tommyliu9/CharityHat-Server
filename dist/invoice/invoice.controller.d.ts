import { InvoiceService } from './invoice.services';
export declare class DonationBody {
    username: string;
    npo: string;
    amount: number;
}
export declare class InvoiceController {
    private readonly invoiceService;
    constructor(invoiceService: InvoiceService);
    makeDonation(body: DonationBody): Promise<void>;
    whatever(): Promise<string>;
}
