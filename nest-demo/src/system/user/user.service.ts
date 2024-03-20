import { Injectable } from '@nestjs/common';
import { CacheService } from '../../common/cache/cache.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(
    private readonly cacheService: CacheService,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const redisTest = await this.cacheService.get('redisTest');

    console.log(redisTest, 'redisTest');
    if (!redisTest) {
      await this.setRedis();
      return this.create(createUserDto);
    }
  }
  async setRedis() {
    const res = await this.cacheService.set(
      'redisTest',
      'test_val',
      12 * 60 * 60,
    );
    if (!res) {
      console.log('redis保存失败');
    } else {
      console.log('redis保存成功');
    }
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
