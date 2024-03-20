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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const cache_service_1 = require("../../common/cache/cache.service");
let UserService = class UserService {
    constructor(cacheService) {
        this.cacheService = cacheService;
    }
    async create(createUserDto) {
        const redisTest = await this.cacheService.get('redisTest');
        console.log(redisTest, 'redisTest');
        if (!redisTest) {
            await this.setRedis();
            return this.create(createUserDto);
        }
    }
    async setRedis() {
        const res = await this.cacheService.set('redisTest', 'test_val', 12 * 60 * 60);
        if (!res) {
            console.log('redis保存失败');
        }
        else {
            console.log('redis保存成功');
        }
    }
    findAll() {
        return `This action returns all user`;
    }
    findOne(id) {
        return `This action returns a #${id} user`;
    }
    update(id, updateUserDto) {
        return `This action updates a #${id} user`;
    }
    remove(id) {
        return `This action removes a #${id} user`;
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [cache_service_1.CacheService])
], UserService);
//# sourceMappingURL=user.service.js.map