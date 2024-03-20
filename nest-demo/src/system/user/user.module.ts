import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
// 引入typeorm和Enetiy实例
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { CacheModule } from 'src/common/cache/cache.module';

@Module({
  imports: [CacheModule],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
