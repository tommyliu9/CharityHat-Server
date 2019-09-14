"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.RegistrationSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true
    },
    username: String,
    password: String,
});
//# sourceMappingURL=register.schema.js.map