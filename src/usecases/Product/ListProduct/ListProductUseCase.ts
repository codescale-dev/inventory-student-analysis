import { ProductRepository } from '@/adapters/repositories/Product/ProductRepository';
import {
  ListProductRequestDto,
  ListProductResponseDto,
} from './ListProductDtos';

export class ListProductUseCase {
  private _productRepository: ProductRepository;

  constructor(productRepository: ProductRepository) {
    this._productRepository = productRepository;
  }

  async execute(
    listProductDto: ListProductRequestDto,
  ): Promise<ListProductResponseDto[]> {
    const products = await this._productRepository.list(listProductDto);

    const response: Array<ListProductResponseDto> = [];

    products.forEach((product) => {
      response.push({
        id: product.id ?? '',
        name: product.name,
        price: product.price,
        material: product.material,
      });
    });

    return response;
  }
}
