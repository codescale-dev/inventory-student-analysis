import { ProductRepository } from '@/adapters/repositories/Product/ProductRepository';
import { Product } from '@/entities/Product';
import {
  GetByIdProductRequestDto,
  GetByIdProductResponseDto,
} from './GetByIdProductDtos';

export class GetByIdProductUseCase {
  private _productRepository: ProductRepository;

  constructor(productRepository: ProductRepository) {
    this._productRepository = productRepository;
  }

  async execute(
    getByIdProductDto: GetByIdProductRequestDto,
  ): Promise<GetByIdProductResponseDto> {
    const { id } = getByIdProductDto;

    const product: Product = await this._productRepository.getById(id);

    return {
      id: id,
      name: product.name,
      price: product.price,
      material: product.material,
    };
  }
}
