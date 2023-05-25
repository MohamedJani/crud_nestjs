import { Controller, Get, Request } from '@nestjs/common';
import { OpenFoodFactsService } from './openfoodfacts.service';

@Controller('product')
export class ProductController {
  constructor(private readonly openFoodFactsService: OpenFoodFactsService) {}
  @Get('search')
  async searchProduct(@Request() req) {
    console.log('barcode', req);
    const barcode = req.query.barcode;
    return this.openFoodFactsService.searchProductByBarcode(barcode);
  }
}
