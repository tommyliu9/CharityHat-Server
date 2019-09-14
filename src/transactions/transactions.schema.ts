import * as mongoose from 'mongoose';

export const TransactionSchema = new mongoose.Schema(
    {
        username: { type: String, required: true},
        npo: { type: String, required: true},
        dateSent: { type: Date, default: Date.now, required: true},
        amount: {type: Number, required: true},
        invoiceId: {type: Number}
    }
);