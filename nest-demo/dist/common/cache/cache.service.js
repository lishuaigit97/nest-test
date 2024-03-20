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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CacheService = void 0;
const common_1 = require("@nestjs/common");
const ioredis_1 = require("ioredis");
const config_1 = require("@nestjs/config");
let CacheService = class CacheService {
    constructor(configService) {
        this.configService = configService;
        this.getClient();
    }
    async getClient() {
        const client = new ioredis_1.Redis({
            host: this.configService.get('REDIS_HOST', 'localhost'),
            port: this.configService.get('REIDS_PORT', 6379),
            password: this.configService.get('REIDS_PASSWD', ''),
            db: this.configService.get('REIDS_DB', 3),
        });
        client.on('connect', () => common_1.Logger.log(`redis连接成功，端口${this.configService.get('REIDS_PORT', 3306)}`));
        client.on('error', (err) => common_1.Logger.error('Redis Error', err));
        this.client = client;
    }
    async set(key, val, second) {
        const res = await this.client.set(key, val, 'EX', second);
        return res === 'OK';
    }
    async get(key) {
        const res = await this.client.get(key);
        return res;
    }
};
exports.CacheService = CacheService;
exports.CacheService = CacheService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], CacheService);
//# sourceMappingURL=cache.service.js.map