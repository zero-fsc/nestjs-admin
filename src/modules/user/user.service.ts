import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IResponse } from 'src/interface/response.interface';
import { User } from 'src/interface/user.interface';

const logger = new Logger()

@Injectable()
export class UserService {
  private response: IResponse
  constructor(
    @InjectModel('USER_MODEL') private readonly userModel: Model<User>
  ) { }

  private async findOneByPhone(phone: string) {
    return await this.userModel.find({ phone })
  }

  /**
   * @describe 注册方法
   * @param user 
   * @returns 
   */
  async register(user: User) {
    return this.findOneByPhone(user.phone).then(res => {
      if (res.length !== 0) {
        this.response = { code: 1, msg: '当前用户已存在' }
        throw this.response
      }
    }).then(async () => {
      try {
        const createUser = new this.userModel(user)
        createUser.save()
        this.response = { code: 0, msg: '用户注册成功' }
        return this.response
      } catch (err) {
        this.response = { code: 2, msg: '用户注册失败' + err }
        throw this.response
      }
    }).catch(err => {
      logger.log(err.msg)
    }).finally(() => {
      return this.response
    })
  }
}
