import { ProductRepository } from '@/adapters/repositories/Product/ProductRepository';
import { Product } from '@/entities/Product';
import {
  CreateProductRequestDto,
  CreateProductResponseDto,
} from './CreateProductDtos';

export class CreateProductUseCase {
  private _productRepository: ProductRepository;

  constructor(productRepository: ProductRepository) {
    this._productRepository = productRepository;
  }

  async execute(
    createProductDto: CreateProductRequestDto,
  ): Promise<CreateProductResponseDto> {
    const { name, price, material } = createProductDto;

    const product: Product = { name, price, material };

    const createdProduct = await this._productRepository.create(product);

    return {
      id: createdProduct.id ?? '',
      name,
      price,
      material,
    };
  }
}
