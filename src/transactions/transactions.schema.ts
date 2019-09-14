import * as mongoose from 'mongoose';

export const TransactionSchema = new mongoose.Schema(
    {
        FirstName: { type: String, required: true},
        LastName: { type: String, required: true},
        Receiver: { type: String, required: true},
        DateSent: { type: Date, default: Date.now, required: true},
        Amount: {type: Number, required: true}
    }
);