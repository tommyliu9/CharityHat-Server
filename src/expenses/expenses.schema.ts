import * as mongoose from 'mongoose';

export const ExpensesSchema = new mongoose.Schema(
    {
        npo: { type: String, required: true},
        date: { type: Date, default: Date.now },
        amount: {type: Number, required: true},
        categoryId: {type: Number, required: true}
    }
);