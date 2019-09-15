import * as mongoose from 'mongoose';

export const RatingsSchema = new mongoose.Schema(
    {
        username: { type: String, required: true},
        npo: { type: String, required: true},
        date: { type: Date, default: Date.now },
        rating: {type: Number, required: true},
    }
);