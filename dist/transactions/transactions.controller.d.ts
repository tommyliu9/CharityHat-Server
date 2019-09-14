import { TransactionsService } from './transactions.service';
import { TransactionDTO } from './transactions.dto';
export declare class TransactionsController {
    private transactionsService;
    constructor(transactionsService: TransactionsService);
    getAllTransactions(receiver: any): Promise<TransactionDTO[]>;
    postTransaction(body: TransactionDTO): Promise<any>;
}
