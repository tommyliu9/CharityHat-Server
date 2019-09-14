import { Model } from 'mongoose';
import { TransactionDTO } from './transactions.dto';
import { Transaction } from './transactions.interface';
export declare class TransactionsService {
    private transactionsModel;
    constructor(transactionsModel: Model<Transaction>);
    getAllTransactions(receiver: string): Promise<any>;
    postTransactions(transactionDTO: TransactionDTO): Promise<any>;
}
