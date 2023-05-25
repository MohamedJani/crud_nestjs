// import modules
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { userSchema } from 'src/models/user.schema';
import { UserService } from './user.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'User',
        // model definition
        schema: userSchema,
      },
    ]),
  ],
  // provider definition
  providers: [UserService],
  // export definitions
  exports: [UserService],
})
export class SharedModule {}
