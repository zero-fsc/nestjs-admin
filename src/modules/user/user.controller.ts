import { Body, Controller, Post } from '@nestjs/common';
import { User } from 'src/interface/user.interface';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(
    private userService: UserService
  ){}

  @Post('register')
  async registerUser(@Body() userDTO: User) {
    return await this.userService.register(userDTO)
  }
}
