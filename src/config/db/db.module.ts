import { Global, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from 'src/interface/user.interface';

const MONGO_MODULES = MongooseModule.forFeature([
  {
    name: 'USER_MODEL',
    schema: UserSchema,
    collection: 'user'
  }
])

// 标注为全局模块
@Global()
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/blog', {
      useNewUrlParser: true, // <-- no longer necessary
      useUnifiedTopology: true // <-- no longer necessary
    }),
    MONGO_MODULES
  ],
  exports: [MONGO_MODULES]
})
export class DbModule { }
