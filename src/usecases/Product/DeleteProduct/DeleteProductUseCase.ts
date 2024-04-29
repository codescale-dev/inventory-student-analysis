import { ProductRepository } from '@/adapters/repositories/Product/ProductRepository';
import { DeleteProductRequestDto } from './DeleteProductDtos';

export class DeleteProductUseCase {
  private _productRepository: ProductRepository;

  constructor(productRepository: ProductRepository) {
    this._productRepository = productRepository;
  }

  async execute(
    deleteProductRequestDto: DeleteProductRequestDto,
  ): Promise<void> {
    const { id } = deleteProductRequestDto;

    return await this._productRepository.remove(id);
  }
}
