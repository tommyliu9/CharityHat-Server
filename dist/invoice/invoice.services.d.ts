export declare class InvoiceService {
    createInvoice(user: string, amount: number, npo: string): Promise<void>;
    createInvoiceBody(amount: number, customeridentifier: any): void;
}
