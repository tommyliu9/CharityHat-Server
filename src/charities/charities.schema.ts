
import * as mongoose from 'mongoose';

export const CharitiesSchema = new mongoose.Schema(
    {
        Name: String, 
        TotalInAccount: Number,
    }
);