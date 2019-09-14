
import * as mongoose from 'mongoose';

export const RegistrationSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true
  },
  username: String,
  password: String,
});