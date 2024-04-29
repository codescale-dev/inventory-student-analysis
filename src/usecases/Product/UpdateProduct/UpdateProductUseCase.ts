import { ProductRepository } from '@/adapters/repositories/Product/ProductRepository';
import { UpdateProductRequestDto } from './UpdateProductDtos';

export class UpdateProductUseCase {
  private _productRepository: ProductRepository;

  constructor(productRepository: ProductRepository) {
    this._productRepository = productRepository;
  }

  async execute(updateProductDto: UpdateProductRequestDto): Promise<void> {
    return await this._productRepository.update(updateProductDto);
  }
}
