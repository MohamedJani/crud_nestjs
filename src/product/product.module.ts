import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { OpenFoodFactsService } from './openfoodfacts.service';

@Module({
  controllers: [ProductController],
  providers: [OpenFoodFactsService],
})
export class ProductModule {}
