import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user_tb')
export class UserEntity {
  @PrimaryGeneratedColumn()
  s_id: string;

  @Column({ type: 'varchar', length: 20, default: '', comment: '名称' })
  s_name: string;

  @Column({ type: 'int', default: 0, comment: '年龄' })
  s_age: number;
}
