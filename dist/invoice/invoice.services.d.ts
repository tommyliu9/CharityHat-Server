<<<<<<< refs/remotes/origin/master
export declare const InvoiceSchema: any;
=======
export declare class InvoiceService {
    createInvoice(user: string, amount: number, npo: string): Promise<void>;
    createInvoiceBody(amount: number, customeridentifier: any): void;
}
>>>>>>> auth guard implemented
