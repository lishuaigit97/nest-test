import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ type: 'string', example: '用户名称' })
  @IsNotEmpty({ message: '名称不能为空' })
  readonly s_name: string;

  @ApiProperty({ type: 'number', example: '用户年龄' })
  readonly s_age: number;
}
