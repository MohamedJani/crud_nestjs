import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { SharedModule } from './shared/shared.module';
import { AuthController } from 'src/auth/auth.controller';
import { AuthService } from 'src/auth/auth.service';
import { AuthModule } from 'src/auth/auth.module';
import { ProductModule } from './product/product.module';
import { ProductController } from './product/product.controller';

@Module({
  imports: [
    // connect to the database
    MongooseModule.forRoot(
      'mongodb+srv://MedJANI:LBNXPiGbszeGlQzT@cluster0.jtoilic.mongodb.net/',
      { dbName: 'crud' },
    ),
    // shared module
    SharedModule,
    // auth module
    AuthModule,
    ProductModule,
  ],
  controllers: [AppController, AuthController],
  providers: [AppService, AuthService],
})
export class AppModule {}
