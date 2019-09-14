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
var _a, _b;
const common_1 = require("@nestjs/common");
const charities_service_1 = require("./charities.service");
const common_2 = require("@nestjs/common");
let CharitiesController = class CharitiesController {
    constructor(charitiesService) {
        this.charitiesService = charitiesService;
    }
    async getAllCharities() {
        return this.charitiesService.getAll();
    }
    async postCharities(body) {
        return this.charitiesService.postCharities();
    }
};
__decorate([
    common_2.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CharitiesController.prototype, "getAllCharities", null);
__decorate([
    common_2.Post(),
    __param(0, common_2.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof CharityDTO !== "undefined" && CharityDTO) === "function" ? _a : Object]),
    __metadata("design:returntype", Promise)
], CharitiesController.prototype, "postCharities", null);
CharitiesController = __decorate([
    common_1.Controller('charities'),
    __metadata("design:paramtypes", [typeof (_b = typeof charities_service_1.CharitiesService !== "undefined" && charities_service_1.CharitiesService) === "function" ? _b : Object])
], CharitiesController);
exports.CharitiesController = CharitiesController;
//# sourceMappingURL=charities.controller.js.map