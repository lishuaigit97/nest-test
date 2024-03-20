import { ConfigService } from '@nestjs/config';
export declare class CacheService {
    private readonly configService;
    client: any;
    constructor(configService: ConfigService);
    getClient(): Promise<void>;
    set(key: string, val: string, second?: number): Promise<boolean>;
    get(key: string): Promise<any>;
}
