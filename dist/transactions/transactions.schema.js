"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.TransactionSchema = new mongoose.Schema({
    FirstName: { type: String, required: true },
    LastName: { type: String, required: true },
    Receiver: { type: String, required: true },
    DateSent: { type: Date, default: Date.now, required: true },
    Amount: { type: Number, required: true }
});
//# sourceMappingURL=transactions.schema.js.map