
import * as mongoose from 'mongoose';

export const RegistrationSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true
  },
  username: {
    type: String,
    unique: true
  },
  password: String,
  clientid: Number,
});