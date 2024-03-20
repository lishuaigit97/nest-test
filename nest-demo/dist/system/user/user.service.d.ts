import { CacheService } from '../../common/cache/cache.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UserService {
    private readonly cacheService;
    constructor(cacheService: CacheService);
    create(createUserDto: CreateUserDto): any;
    setRedis(): Promise<void>;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateUserDto: UpdateUserDto): string;
    remove(id: number): string;
}
