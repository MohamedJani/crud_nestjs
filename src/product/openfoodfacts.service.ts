import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class OpenFoodFactsService {
  async searchProductByBarcode(barcode: string) {
    const response = await axios.get(
      `https://world.openfoodfacts.org/api/v0/product/${barcode}.json`,
    );
    return response.data;
  }
}
