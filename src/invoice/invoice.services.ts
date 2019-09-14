
import * as mongoose from 'mongoose';

export const InvoiceSchema = new mongoose.Schema({
  amount: Number,
  npo: String
});