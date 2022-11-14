import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction } from 'express';
import { addSalt, excript } from 'src/utils/encription';

@Injectable()
export class UserMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    let userPassword = req.body['password']
    if (userPassword) {
      const salt = addSalt()
      userPassword = excript(userPassword, addSalt())
      req.body['password'] = userPassword
      req.body['salt'] = salt
    }
    next();
  }
}
