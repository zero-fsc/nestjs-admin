import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop()
  @ApiProperty({
    description: '用户名'
  })
  userName: string

  @Prop()
  @ApiProperty({
    description: '用户名称'
  })
  name: string

  @Prop()
  @ApiProperty({
    description: '手机号'
  })
  phone: string

  @Prop()
  @ApiProperty({
    description: '密码'
  })
  password: string

  @Prop()
  @ApiProperty({
    description: '邮箱'
  })
  email: string

  @Prop()
  @ApiProperty({
    description: '盐'
  })
  readonly salt?: string
}

export const UserSchema = SchemaFactory.createForClass(User);