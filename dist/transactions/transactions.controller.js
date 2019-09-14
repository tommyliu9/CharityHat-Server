"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const transactions_service_1 = require("./transactions.service");
const transactions_dto_1 = require("./transactions.dto");
const common_2 = require("@nestjs/common");
let TransactionsController = class TransactionsController {
    constructor(transactionsService) {
        this.transactionsService = transactionsService;
    }
    async getAllTransactions(receiver) {
        return this.transactionsService.getAllTransactions(receiver);
    }
    async postTransaction(body) {
        return this.transactionsService.postTransactions(body);
    }
};
__decorate([
    common_2.Get(':receiver'),
    __param(0, common_2.Param('receiver')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TransactionsController.prototype, "getAllTransactions", null);
__decorate([
    common_2.Post(),
    __param(0, common_2.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [transactions_dto_1.TransactionDTO]),
    __metadata("design:returntype", Promise)
], TransactionsController.prototype, "postTransaction", null);
TransactionsController = __decorate([
    common_1.Controller('transactions'),
    __metadata("design:paramtypes", [transactions_service_1.TransactionsService])
], TransactionsController);
exports.TransactionsController = TransactionsController;
//# sourceMappingURL=transactions.controller.js.map